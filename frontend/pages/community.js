import React from 'react';
import Container from 'react-bootstrap/Container';
import ChatRoom from '../components/chatroom/DashBoard';

const community = () => {
	return (
		<Container style={{ height: '100vh' }}>
			<ChatRoom />
		</Container>
	);
};

export default community;
