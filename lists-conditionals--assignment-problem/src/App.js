import React, { Component } from "react";
import "./App.css";

import ValidationComponent from "./ValidationComponent/ValidationComponent";
import CharComponent from "./CharComponent/CharComponent";

class App extends Component {
  state = {
    inputTextLength: 0,
    inputText: ""
  };
  inputTextLength = event => {
    // console.log(event.target.value.length);
    this.setState({
      inputTextLength: event.target.value.length,
      inputText: event.target.value
    });
  };

  getRandomInt(min, max, char) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return '' + char + Math.floor(Math.random() * (max - min)) + min; //The maximum is exclusive and the minimum is inclusive
  }

  render() {
    let charArr = [...this.state.inputText];

    let charMap = (
      <div>
        {charArr.map(_char => {
          
          return <CharComponent char={_char} key={this.getRandomInt(0,99999999999999, _char)}/>;
        })}
      </div>
    );

    return (
      <div className="App">
        <input id="inputBox" onChange={event => this.inputTextLength(event)} />
        <ValidationComponent key="vc1" length={this.state.inputTextLength} />
        {charMap}
        <p />
        <ol>
          <li>
            <strike>
              Create an input field (in App component) with a change listener
              which outputs the length of the entered text below it (e.g. in a
              paragraph).
            </strike>
          </li>
          <li>
            <strike>
              Create a new component (=> ValidationComponent) which receives the
              text length as a prop
            </strike>
          </li>
          <li>
            <strike>
              Inside the ValidationComponent, either output "Text too short" or
              "Text long enough" depending on the text length (e.g. take 5 as a
              minimum length)
            </strike>
          </li>
          <li>
          <strike>
            Create another component (=> CharComponent) and style it as an
            inline box (=> display: inline-block, padding: 16px, text-align:
            center, margin: 16px, border: 1px solid black).
            </strike>
          </li>
          <li>
          <strike>
            Render a list of CharComponents where each CharComponent receives a
            different letter of the entered text (in the initial input field) as
            a prop.
            </strike>
          </li>
          <li>
            When you click a CharComponent, it should be removed from the
            entered text.
          </li>
        </ol>
        <p>Hint: Keep in mind that JavaScript strings are basically arrays!</p>
      </div>
    );
  }
}

export default App;
