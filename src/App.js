import React, { Component } from 'react';
import './App.css';
import ValidationComponent from './ValidationComponent/ValidationComponent';
import CharComponent from './CharComponent/CharComponent';

class App extends Component {
  
  state = {
    inputLength: 0,
    inputValue: ['e', 'l', 'v', 'i', 's']
  }

  inputLengthHandler = (event) => {
    this.setState({
      inputLength: event.target.value.length,
      inputValue: [...event.target.value]
    });
  }

  
  render() {
    const style = {
      display: 'inline-block',
      padding: '16px',
      textAlign: 'center',
      margin: '16px',
      border: '1px solid black'
    };

    let characters = (
      <div>
        {this.state.inputValue.map((char, index) => {
          return <CharComponent character={char} style={style} />
        })}
      </div>
    );

    return (
      <div className="App">
        <input onChange={this.inputLengthHandler} value={this.state.inputValue.join("")} />
        <ValidationComponent inputLength={this.state.inputLength} style={style} />
        {characters}
      </div>
    );
  }
}

export default App;
