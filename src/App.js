import React, { Component } from 'react';
import './App.css';
import Actions from './components/actions';
import Feedback from './components/feedback';
import NumbersList from './components/numbers-list';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
        magicNumber: null,
        userGuesses: [],
        currentGuess: null,
        feedbackOptions: {
          start: 'A random number from 1-100 has been selected to start the game. Try to guess it!',
          incorrect: 'Incorrect Guess, try again.',
          correct: 'Correct Guess!',
        },
        currentFeedback: 'Feedback Starting Placeholder Text',
        gameOn: false,
        hotColdThreshold: 5,
    }
  }

  setGameOn(state) {
    this.setState({
        gameOn: state
    });
  }

  startGame() {
    this.setGameOn(true);
    // generate random number between 1 and 100 inclusive
    this.setState({
        magicNumber: Math.floor(Math.random() * 100) + 1
    });
  }

  resetGame() {
    this.setGameOn(false);
    // TODO - anything else?
  }

  guessNumber(event) {
    console.log(event);
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
        <div className="App-actions">
          <Actions
            gameOn={this.state.gameOn}
            magicNumber={this.state.magicNumber}
            currentGuess={this.state.currentGuess}
            resetGame={() => this.resetGame()}
            startGame={() => this.startGame()}
          />
        </div>
        <div className="App-feedback">
            <Feedback currentFeedback={this.state.currentFeedback} />
        </div>
        <div className="App-body">
          <NumbersList
            gameOn={this.state.gameOn}
            guessNumber={(e) => this.guessNumber(e)}
          />
        </div>
      </div>
    );
  }
}

export default App;
