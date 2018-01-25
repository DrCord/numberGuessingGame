import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
        
    }
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Number Guessing Game</h1>
        </header>
        <p className="App-intro">
          Click the start button to begin. The app will randomly select a number from 1-100 (inclusive) and you will attempt to guess it. The app will let you know if your guess is close to the correct number(HOT) or far away from the correct number (COLD).
        </p>
      </div>
    );
  }
}

export default App;
