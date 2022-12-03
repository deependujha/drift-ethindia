require('dotenv').config();

const mongoose = require('mongoose');
mongoose
	.connect(
		`mongodb+srv://deependu:${process.env.ATLAS_PASSWORD}@cluster0.cho1uzv.mongodb.net/?retryWrites=true&w=majority`
	)
	.then(() => {
		console.log('Connected To Database');
	})
	.catch((err) => {
		console.log("Error occurred while connecting with the database: ",err);
	});
