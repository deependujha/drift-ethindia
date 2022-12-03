require('./conn/mongo');
const http = require('http');
const express = require('express');
const cors = require('cors');
const socketIo = require('socket.io');
const { Msgs } = require('./models/msgSchema');

const PORT = 4500 || process.env.PORT;

const app = express();

app.use(cors());

app.get('/:room', async (req, res) => {
	const myroom = req.params.room;
	const msgs = await Msgs.find({ room: myroom });
	res.send(msgs);
});

const server = http.createServer(app);

// https://stackoverflow.com/questions/24058157/socket-io-node-js-cross-origin-request-blocked
const io = socketIo(server, {
	cors: {
		origin: '*',
	},
});

io.on('connection', (socket) => {
	socket.on('join_room', (data) => {
		socket.join(data);
	});

	socket.on('send_message', async (data) => {
		socket.to(data.room).emit('receive_message', data);
		console.log('got the data: ', data);
		try {
			const newData = new Msgs({
				room: data.room,
				msg: data.msg,
				sender: data.sender,
			});
			const result = await newData.save();
			console.log(`Result: ${result}`);
		} catch (err) {
			console.log(`error: ${err}`);
		}
	});
});

server.listen(PORT, () => {
	console.log(`server is listening on: http://localhost:${PORT}`);
});
