import React from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import No from './No';
import Yes from './Yes';
import { ethers } from 'ethers';

import ABI1 from '../../ABI1';
import ABI2 from '../../ABI2';
import ABI3 from '../../ABI3';

const PollBoard = ({ id, text, yes, no, isSnapShot, currLeft, mySigner }) => {
	let smartContractAddress;
	let ABI;
	let contract;
	if (currLeft === 'DAO1') {
		smartContractAddress = '0xa16857423CA0bD63917031Da380acc70ebF07170';
		ABI = ABI1;
	}
	if (currLeft === 'DAO2') {
		smartContractAddress = '0x95f584af629EEcBf91596535a444fC02AE3E8C7F';
		ABI = ABI2;
	}
	if (currLeft === 'DAO3') {
		smartContractAddress = '0xeF9795B8F15a6269904248799e9AA23614914c1d';
		ABI = ABI3;
	}
	const voteYes = async () => {
		contract = new ethers.Contract(smartContractAddress, ABI, mySigner);
		// console.log('clicked on yes button');
		if (isSnapShot) {
			contract
				.voteOnASnapShot(id, true)
				.then((tx) => {
					console.log('transaction occured : ', tx.hash);
					return tx
						.wait()
						.then(() => {
							alert('Thanks for voting!');
						})
						.catch((err) => alert('error occurred: ', err));
				})
				.catch((err) => {
					alert('error occurred: ', err);
				});
		} else {
			contract
				.voteOnAProposal(id, true)
				.then((tx) => {
					console.log('transaction occured : ', tx.hash);
					return tx
						.wait()
						.then(() => {
							alert('Thanks for voting!');
						})
						.catch((err) => alert('error occurred: ', err));
				})
				.catch((err) => {
					alert('error occurred: ', err);
				});
		}
	};

	const voteNo = async () => {
		contract = new ethers.Contract(smartContractAddress, ABI, mySigner);
		if (isSnapShot) {
			contract
				.voteOnASnapShot(id, false)
				.then((tx) => {
					console.log('transaction occured : ', tx.hash);
					return tx
						.wait()
						.then(() => {
							alert('Thanks for voting!');
						})
						.catch((err) => alert('error occurred: ', err));
				})
				.catch((err) => {
					alert('error occurred: ', err);
				});
		} else {
			contract
				.voteOnAProposal(id, false)
				.then((tx) => {
					console.log('transaction occured : ', tx.hash);
					return tx
						.wait()
						.then(() => {
							alert('Thanks for voting!');
						})
						.catch((err) => alert('error occurred: ', err));
				})
				.catch((err) => {
					alert('error occurred: ', err);
				});
		}
	};
	return (
		<Card style={{ width: '30rem' }} className="text-center mt-4">
			<Card.Body>
				<Card.Title># Id: {id}</Card.Title>
				<Card.Text>{text}</Card.Text>
				<div>
					<Yes yes={yes} />
				</div>
				<div className="mt-3">
					<No no={no} />
				</div>
				<div className="d-flex flex-row-reverse mt-5">
					<div>
						<Button
							variant="success"
							size="sm"
							className="px-4"
							onClick={voteYes}
						>
							YES
						</Button>
					</div>
					<div className="me-5">
						<Button
							variant="danger"
							size="sm"
							className="px-4"
							onClick={voteNo}
						>
							NO
						</Button>
					</div>
				</div>
			</Card.Body>
		</Card>
	);
};

export default PollBoard;
