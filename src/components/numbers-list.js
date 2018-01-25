import React from 'react';

export default function NumbersList(props) {
    var N = 100;
    let numbers = Array.apply(null, {length: N}).map(Number.call, Number);

    const numbersList = numbers.map((number, index) =>
        <li key={index+1}>
            {number+1}
        </li>
    );

    return (
        <ul className="numbersList">
            {numbersList}
        </ul>
    );
}
