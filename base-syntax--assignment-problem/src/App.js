import React, { Component } from 'react';
import './App.css';
import UserOutput from './UserOutput/UserOutput';
import UserInput from './UserInput/UserInput';

class App extends Component {
	state = {
		user: { name: 'Dude1' }
	};

	switchNameHandler = newUsername => {
		console.log('Changed');
		this.setState({
			user: { name: newUsername }
		});
	};

	nameChangedHandler = event => {
		console.log('Changed');
		this.setState({
			user: {
				name: event.target.value
			}
		});
	};

	render() {
		return (
			<div className="App">
				<UserOutput
					click={this.switchNameHandler.bind(this, this.state.user.name)}
					username={this.state.user.name}
				/>
				<UserInput
					name={this.state.user.name}
					changed={this.nameChangedHandler}
				/>

				<ol>
					<li>Create TWO new components: UserInput and UserOutput</li>
					<li>
						UserInput should hold an input element, UserOutput two paragraphs
					</li>
					<li>
						Output multiple UserOutput components in the App component (any
						paragraph texts of your choice)
					</li>
					<li>
						Pass a username (of your choice) to UserOutput via props and display
						it there
					</li>
					<li>
						Add state to the App component (=> the username) and pass the
						username to the UserOutput component
					</li>
					<li>
						Add a method to manipulate the state (=> an event-handler method)
					</li>
					<li>
						Pass the event-handler method reference to the UserInput component
						and bind it to the input-change event
					</li>
					<li>
						Ensure that the new input entered by the user overwrites the old
						username passed to UserOutput
					</li>
					<li>
						Add two-way-binding to your input (in UserInput) to also display the
						starting username
					</li>
					<li>
						Add styling of your choice to your components/ elements in the
						components - both with inline styles and stylesheets
					</li>
				</ol>
			</div>
		);
	}
}

export default App;
