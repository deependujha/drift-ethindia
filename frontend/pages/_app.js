import '../styles/globals.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useState } from 'react';

function MyApp({ Component, pageProps }) {
	const [mySigner, setMySigner] = useState('');

	return (
		<Component {...pageProps} mySigner={mySigner} setMySigner={setMySigner} />
	);
}

export default MyApp;
