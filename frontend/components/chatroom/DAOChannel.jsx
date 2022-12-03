import React from 'react';
import Image from 'next/image';

const DAOChannel = ({ img, name, active }) => {
	return (
		<div className="text-center">
			<Image src={img} height={50} width={50} alt="myDao" />
			<div className={`${active === true ? 'text-success fw-bolder' : 'text-dark'}`}>
				{name}
			</div>
		</div>
	);
};

export default DAOChannel;
