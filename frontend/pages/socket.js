import React, { useState, useEffect } from 'react';
import socketIO from 'socket.io-client';

const ENDPOINT = 'http://localhost:4500';
const socket = socketIO(ENDPOINT, { transport: ['websocket'] });

const checkingSocket = () => {
	const [room, setRoom] = useState('');

	// Messages States
	const [message, setMessage] = useState('');
	const [messageReceived, setMessageReceived] = useState('');

	const joinRoom = () => {
		if (room !== '') {
			socket.emit('join_room', room);
		}
	};

	const sendMessage = () => {
		socket.emit('send_message', { message, room });
	};

	useEffect(() => {
		socket.on('receive_message', (data) => {
			if (data.room == room) setMessageReceived(data.message);
		});
	}, [socket]);
	return (
		<div className="App">
			<input
				placeholder="Room Number..."
				onChange={(event) => {
					setRoom(event.target.value);
				}}
			/>
			<button onClick={joinRoom}> Join Room</button>
			<input
				placeholder="Message..."
				onChange={(event) => {
					setMessage(event.target.value);
				}}
			/>
			<button onClick={sendMessage}> Send Message</button>
			<h1> Message:</h1>
			{messageReceived}
		</div>
	);
};

export default checkingSocket;
