import React, { useState } from 'react';
import Person from './components/Person';

const App = (props) => {
  const [persons, setPersons] = useState(props.persons);
  const [newName, setNewName] = useState('Nimi tähän');
  const [newNumber, setNewNumber] = useState('Numero tähän');
  const [newFilter, setNewFilter] = useState('Filtteröinti tässä');

  const resultCONTENT = persons.map((persons) => persons.content);

  const addName = (event) => {
    event.preventDefault();
    const personObject = {
      content: newName,
      number: newNumber,
      id: persons.length + 1,
    };
    if (resultCONTENT.includes(newName)) {
      alert(`${newName} is already added to phonebook`);
    } else setPersons(persons.concat(personObject));
    setNewName('');
    setNewNumber('');
  };

  const handleNameChange = (event) => {
    setNewName(event.target.value);
  };

  const handleNumberChange = (event) => {
    setNewNumber(event.target.value);
  };

  const handleFilterChange = (event) => {
    setNewFilter(event.target.value);
  };

  const personsToShow = persons.filter((x) => x.content.includes(newFilter));
  const filterPerson = (event) => {
    event.preventDefault();
    setNewFilter('');
  };

  return (
    <>
      <div>
        <h2>Phonebook</h2>
        <form onSubmit={addName}>
          name: <input value={newName} onChange={handleNameChange} /> <p></p>
          number: <input value={newNumber} onChange={handleNumberChange} />
          <p></p> <button type="submit">add</button>
        </form>
        <h2>Numbers</h2>
        <form onSubmit={filterPerson}>
          filter:
          <input value={newFilter} onChange={handleFilterChange} />
          <button onClick={() => console.log('personsToShow', personsToShow)}>
            search
          </button>
        </form>
        <ul>
          {personsToShow.map((persons) => (
            <Person key={persons.id} persons={persons} />
          ))}
        </ul>
        <ul>
          {persons.map((persons) => (
            <Person key={persons.id} persons={persons} />
          ))}
        </ul>
      </div>
    </>
  );
};
export default App;

// usf ja sfc snippets
