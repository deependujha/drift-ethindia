import React, { useState, useEffect } from 'react';
import MyLoading from '../loading/MyLoading';
import ABI1 from '../../ABI1';
import ABI2 from '../../ABI2';
import ABI3 from '../../ABI3';
import PollBoard from '../poll/PollBoard';
import { ethers, Signer } from 'ethers';

const index = ({ currLeft, mySigner }) => {
	let jaimaatadi = 0;
	let contract;
	const [loading, setLoading] = useState(false);
	const [proposals, setProposals] = useState([]);
	const [newProp, setNewProp] = useState('');

	let smartContractAddress;
	let ABI;
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

	const sendProposal = async () => {
		console.log('you clicked on send proposal');
		console.log('newProp: ', newProp);
		contract = new ethers.Contract(smartContractAddress, ABI, mySigner);
		contract
			.createRequestForProposal(newProp)
			.then((tx) => {
				console.log('transaction occured : ', tx.hash);
				return tx
					.wait()
					.then(() => {
						alert('Proposal submitted successfully');
						jaimaatadi = 1 - jaimaatadi;
					})
					.catch((err) => alert("You're not authorized to submit a proposal"));
			})
			.catch((err) => {
				alert("You're not authorized to submit a proposal");
			});
	};

	useEffect(() => {
    fetchProposals();
  }, [jaimaatadi, currLeft]);

	const fetchProposals = async () => {
		setLoading(true);
		contract = new ethers.Contract(smartContractAddress, ABI, mySigner);

		contract
			.getAllProposals()
			.then((val) => {
				console.log('val: ', val);
				console.log(val[0]);
				setProposals(val);
				console.log('proposals: ', proposals);
			})
			.catch((err) =>
				console.log('Printing error msg at getText function: ', err.message)
			);
		setLoading(false);
	};
	if (loading) {
		return (
			<div>
				<MyLoading />
			</div>
		);
	}
	return (
    <div>
      <div>
        {proposals.map((prp, idx) => (
          <div key={idx}>
            <PollBoard
              id={`${prp._id}`}
              text={prp._msg}
              yes={prp._yes}
              no={prp._no}
              currLeft={currLeft}
              mySigner={mySigner}
              isSnapShot={false}
            />
          </div>
        ))}
      </div>

      <div className="absolute inset-x-50 bottom-0" style={{ width: "750px" }}>
        <div className="d-flex">
          <input
            type="email"
            value={newProp}
            onChange={(e) => setNewProp(e.target.value)}
            className="form-control mx-2 my-2"
            placeholder="Type your message..."
          />
          <button
            onClick={sendProposal}
            className="btn btn-success mx-2 my-2 px-3"
          >{`>`}</button>
        </div>
      </div>
    </div>
  );
};

export default index;
