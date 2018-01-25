import React from 'react';

import './numbers-list.css';

export default function NumbersList(props) {
  if(props.gameOn) {
    var N = 100;
    let numbers = Array.apply(null, {length: N}).map(Number.call, Number);

    const numbersList = numbers.map((number, index) =>
        <li key={index}>
            <button>{number+1}</button>
        </li>
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
