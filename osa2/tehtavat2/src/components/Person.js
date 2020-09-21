import React from 'react';

const Person = ({ persons }) => {
  return (
    <li>
      {persons.content} {persons.number}
    </li>
  );
};

export default Person;
