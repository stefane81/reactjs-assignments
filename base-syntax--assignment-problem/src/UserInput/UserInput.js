import React from 'react';
import './UserInput.css';

const userInput = props => {
	return (
		<div className="userInput">
			<label>Username: </label>
			<input type="text" onChange={props.changed} value={props.name} />
		</div>
	);
};

export default userInput;
