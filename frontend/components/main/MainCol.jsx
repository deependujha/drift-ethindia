import React from 'react';
import Chats from '../chatroom/Chats';
import RFP from '../rfp/RFP';

const MainCol = ({ currLeft, currRight, mySigner }) => {
	if (currRight === 'chatroom') {
		return (
			<div>
				<div>welcome to chatroom of {currLeft}</div>
				<Chats currLeft={currLeft} />
			</div>
		);
	} else if (currRight === 'forum') {
		return (
			<div>
				<div>welcome to forum of {currLeft}</div>
				<div>alpha</div>
			</div>
		);
	} else if (currRight === 'rfp') {
		return (
			<div>
				<div>welcome to request for proposal of {currLeft}</div>
				<div>alpha</div>
				<div className="d-flex justify-content-center">
					<RFP currLeft={currLeft} mySigner={mySigner}/>
				</div>
			</div>
		);
	} else if (currRight === 'snapshot') {
		return (
			<div>
				<div>welcome to snapshot of {currLeft}</div>
				<div>alpha</div>
			</div>
		);
	} else {
		return (
			<div>
				Currently on: analytics of {currLeft}
				<div>alpha</div>
			</div>
		);
	}
};

export default MainCol;
