import React, { useState } from 'react';

const index = () => {
	const [loading, setLoading] = useState(false);
	const [proposals, setProposals] = useState([]);
	const [newProp, setNewProp] = useState('');

	return (
		<div>
			<div className="position-absolute bottom-0" style={{ width: '750px' }}>
				<div className="d-flex">
					<input
						type="email"
						value={txt}
						onChange={(e) => setTxt(e.target.value)}
						className="form-control mx-2 my-2"
						placeholder="Type your message..."
					/>
					<button
						onClick={sendMsg}
						className="btn btn-success mx-2 my-2 px-3"
					>{`>`}</button>
				</div>
			</div>
		</div>
	);
};

export default index;
