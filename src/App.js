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
          reset: 'The game has been reset, select "Start Game" to begin again.'
        },
        currentFeedback: 'Select "Start Game" to begin.',
        gameOn: false,
        hotColdThreshold: 5,
        gameEnded: false,
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
        magicNumber: Math.floor(Math.random() * 100) + 1,
        currentFeedback: this.state.feedbackOptions.start
    });
  }

  resetGame() {
    this.setGameOn(false);
    this.setState({
        magicNumber: null,
        userGuesses: [],
        currentGuess: null,
        currentFeedback: this.state.feedbackOptions.reset,
        gameEnded: false
    });
    // TODO - anything else?
  }

  guessNumber(event) {
    console.log(event.target.id);
    let targetId = event.target.id;
    let currentGuess = parseInt(targetId.replace('number', ''));
    this.setState({
        currentGuess: currentGuess
    });
    let userGuesses = this.state.userGuesses;
    userGuesses.push(currentGuess);
    this.setState({
        userGuesses: userGuesses
    });
    if(currentGuess === this.state.magicNumber) {
      // correct guess, display feedback
      this.setState({
          currentFeedback: this.state.feedbackOptions.correct,
          gameEnded: true
      });
    }
    else {
      // incorrect guess
      // decide if hot or cold, display feedback
      let hot = this.isHot(currentGuess);
      this.setState({
          currentFeedback: this.state.feedbackOptions.incorrect + (hot ? 'HOT - your guess was close!' : 'COLD - your guess was not very close.')
      });
    }
  }

  isHot(guess) {
    let hot = false;
    if (guess > this.state.magicNumber) {
      // guess more than magic Number - subtract threshhold and check
      if(guess - this.state.hotColdThreshold <= this.state.magicNumber) {
        hot = true;
      }
    }
    else if(guess < this.state.magicNumber) {
      // guess less than magic Number - add threshold and check
      if(guess + this.state.hotColdThreshold >= this.state.magicNumber) {
        hot = true;
      }
    }
    else {
      // magicNumber matches guess
      hot = true;
    }
    return hot;
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
            gameEnded={this.state.gameEnded}
            guessNumber={(e) => this.guessNumber(e)}
            userGuesses={this.state.userGuesses}
            magicNumber={this.state.magicNumber}
          />
        </div>
      </div>
    );
  }
}

export default App;
