import React from 'react';
import Person from './Person';

const Phonebook = (props) => {
  const handleFilterChange = (event) => {
    props.setNewFilter(event.target.value);
  };

  const personsToShow = props.persons.filter((x) =>
    x.content.toLowerCase().includes(props.newFilter.toLowerCase())
  );

  return (
    <>
      <h2>Numbers</h2>
      filter:
      <input value={props.newFilter} onChange={handleFilterChange} />
      <ul>
        {personsToShow.map((persons) => (
          <Person key={persons.id} persons={persons} />
        ))}
      </ul>
    </>
  );
};

export default Phonebook;
