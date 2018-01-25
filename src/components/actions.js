import React from 'react';

export default function Actions(props) {
  if(!props.gameOn) {
    return (
        <button onClick={props.startGame}>Start Game</button>
    );
  }
  else {
    return null;
  }
}
