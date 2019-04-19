import React from 'react';
import './UserOutput.css';

const userOutput = props => {
	return (
		<div className="userOutput" onClick={props.click}>
			<p> Username1: {props.username}</p>
			<p> Welcome to ReactJS</p>
			<hr />
		</div>
	);
};

export default userOutput;
