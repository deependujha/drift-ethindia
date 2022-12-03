import React from 'react';

const MainCol = ({ currLeft, currRight }) => {
	return (
		<div>
			Currently on: {currLeft} and {currRight}
		</div>
	);
};

export default MainCol;
