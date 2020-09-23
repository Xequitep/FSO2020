import React, { useState } from 'react';
import Person from './components/Person';

const App = (props) => {
  const [persons, setPersons] = useState(props.persons);
  const [newName, setNewName] = useState('Nimi tähän');
  const [newNumber, setNewNumber] = useState('Numero tähän');

  const addName = (event) => {
    event.preventDefault();
    console.log('button clicked', event.target);
    const personObject = {
      content: newName,
      number: newNumber,
      id: persons.length + 1,
    };
    const resultCONTENT = persons.map((persons) => persons.content);
    console.log('Content', resultCONTENT);
    if (resultCONTENT.includes(newName)) {
      alert(`${newName} is already added to phonebook`);
    } else setPersons(persons.concat(personObject));
    setNewName('');
    setNewNumber('');
  };

  const handleNameChange = (event) => {
    console.log('event.target.value', event.target.value);
    setNewName(event.target.value);
  };

  const handleNumberChange = (event) => {
    console.log('event.target.value', event.target.value);
    setNewNumber(event.target.value);
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
