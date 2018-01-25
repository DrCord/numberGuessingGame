import React from 'react';

import './numbers-list.css';

export default function NumbersList(props) {
  if(props.gameOn) {
    var N = 100;
    let numbers = Array.apply(null, {length: N}).map(Number.call, Number);

    const numbersList = numbers.map((number, index) => {
        // index and number should always be the same
        let classes = '';
        let currentNumber = number+1;
        let disabled = props.gameEnded ? true : false;

        if(props.userGuesses.includes(currentNumber)) {
          disabled = true;
          classes += 'guessed';

          if(currentNumber === props.magicNumber) {
            classes += ' correct';
          }
          else {
            classes += ' incorrect';
          }
        }

        return (
          <li key={index}>
              <button disabled={disabled} className={classes} id={'number' + (currentNumber)} onClick={props.guessNumber}>{currentNumber}</button>
          </li>
        )
      }
    );

    return (
        <ul className="numbersList">
            {numbersList}
        </ul>
    );
  }
  else {
    return null;
  }
}
