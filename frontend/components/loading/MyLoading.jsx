import React from 'react';
import ReactLoading from 'react-loading';

const Example = ({ type, color }) => (
	<div >
		<ReactLoading type="spin" color="black" height={50} width={50}/>
	</div>
);

export default Example;
