import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

const persons = [
  {
    id: 1,
    content: 'Arto Hellas',
    number: '040-123456',
  },
  {
    id: 2,
    content: 'Ada Lovelace',
    number: '39-44-5323523',
  },
  {
    id: 3,
    content: 'Dan Abramov',
    number: '12-43-234345',
  },
];

const resultID = persons.map((persons) => persons.id);
console.log('id', resultID);
const resultCONTENT = persons.map((persons) => persons.content);
console.log('Content', resultCONTENT);

ReactDOM.render(
  <App persons={persons} resultCONTENT={resultCONTENT} />,
  document.getElementById('root')
);
