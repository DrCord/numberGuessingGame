import React from 'react';

export default function Actions(props) {
  if(!props.gameOn) {
    return (
        <button onClick={props.startGame}>Start Game</button>
    );
  }
  else if(props.gameOn && props.magicNumber === props.currentGuess) {
    return (
        <button onClick={props.resetGame}>Reset Game</button>
      );
  }
  else {
    return null;
  }
}
