import Link from 'next/link';
import React from 'react';
import ListGroup from 'react-bootstrap/ListGroup';
import PushComponent from "../PushComponent"

const RightCol = ({ currRight, setCurrRight }) => {
	return (
		<div className="d-flex flex-row sticky-top">
			<div className="vr text-white" />
			<div className="ms-4">
				<div
					onClick={() => {
						setCurrRight('chatroom');
					}}
					className={`mt-3 ${
						currRight === 'chatroom'
							? 'text-white text-lg fw-bolder'
							: 'text-white'
					}`}
					style={{ cursor: 'pointer' }}
				>
					Chat Room
				</div>
				<Link href="https://forum-mocha-beta.vercel.app/newest ">
					<div
						onClick={() => {
							setCurrRight('forum');
						}}
						className={`mt-3 ${
							currRight === 'forum'
								? 'text-white text-lg fw-bolder'
								: 'text-white'
						}`}
						style={{ cursor: 'pointer' }}
					>
						Forum
					</div>
				</Link>

				<div
					onClick={() => {
						setCurrRight('rfp');
					}}
					style={{ cursor: 'pointer' }}
					className={`mt-3 ${
						currRight === 'rfp' ? 'text-white text-lg fw-bolder' : 'text-white'
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
						currRight === 'snapshot'
							? 'text-white text-lg fw-bolder'
							: 'text-white'
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
						currRight === 'analytics'
							? 'text-white text-lg fw-bolder'
							: 'text-white'
					}`}
				>
					Analytics
				</div>
				<div
					onClick={() => {
						setCurrRight('send');
					}}
					className={`mt-3 ${
						currRight === 'send' ? 'text-white text-lg fw-bolder' : 'text-white'
					}`}
					style={{ cursor: 'pointer' }}
				>
					Send
					<PushComponent/>
				</div>
			</div>
		</div>
	);
};

export default RightCol;
