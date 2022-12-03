import React, { useEffect } from 'react';
import Container from 'react-bootstrap/Container';
import DashBoard from '../components/main/DashBoard';
import { useRouter } from 'next/router';

const community = ({ mySigner }) => {
	const router = useRouter();

	useEffect(() => {
		if (mySigner === '') {
			router.push('/');
		}
	}, []);

	return (
		<Container style={{ height: '100vh' }}>
			<DashBoard mySigner={mySigner} />
		</Container>
	);
};

export default community;
