import React from 'react';
import ListGroup from 'react-bootstrap/ListGroup';

const RightCol = ({ currRight, setCurrRight }) => {
	return (
		<div className="d-flex flex-row sticky-top">
			<div className="vr" />
			<div className="ms-4">
				<div
					onClick={() => {
						setCurrRight('chatroom');
					}}
					className={`mt-3 ${
						currRight === 'chatroom' ? 'text-success fw-bolder' : 'text-dark'
					}`}
					style={{ cursor: 'pointer' }}
				>
					Chat Room
				</div>

				<div
					onClick={() => {
						setCurrRight('forum');
					}}
					className={`mt-3 ${
						currRight === 'forum' ? 'text-success fw-bolder' : 'text-dark'
					}`}
					style={{ cursor: 'pointer' }}
				>
					Forum
				</div>
				<div
					onClick={() => {
						setCurrRight('rfp');
					}}
					style={{ cursor: 'pointer' }}
					className={`mt-3 ${
						currRight === 'rfp' ? 'text-success fw-bolder' : 'text-dark'
					}`}
				>
					RFP
				</div>
				<div
					onClick={() => {
						setCurrRight('snapshot');
					}}
					style={{ cursor: 'pointer' }}
					className={`mt-3 ${
						currRight === 'snapshot' ? 'text-success fw-bolder' : 'text-dark'
					}`}
				>
					SnapShot
				</div>
				<div
					onClick={() => {
						setCurrRight('analytics');
					}}
					style={{ cursor: 'pointer' }}
					className={`mt-3 ${
						currRight === 'analytics' ? 'text-success fw-bolder' : 'text-dark'
					}`}
				>
					Analytics
				</div>
			</div>
		</div>
	);
};

export default RightCol;
