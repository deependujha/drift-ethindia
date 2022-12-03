import React from 'react';
import ChatCardLeft from '../components/chatCard/ChatCardLeft';
import ChatCardRight from '../components/chatCard/ChatCardRight';

const chat = () => {
	return (
		<div className='my-5'>
			<ChatCardRight />
			<ChatCardLeft />
		</div>
	);
};

export default chat;
