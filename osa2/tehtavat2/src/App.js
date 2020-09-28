import React, { useState, useEffect } from 'react';
import AddNewPerson from './components/AddNewPerson';
import Phonebook from './components/Phonebook';
import axios from 'axios';

const App = (props) => {
  const [persons, setPersons] = useState(props.persons);
  const [newName, setNewName] = useState('Nimi tähän');
  const [newNumber, setNewNumber] = useState('Numero tähän');
  const [newFilter, setNewFilter] = useState('');

  useEffect(() => {
    axios.get('http://localhost:3001/persons').then((response) => {
      setPersons(response.data);
    });
  }, []);

  return (
    <div>
      <AddNewPerson
        newName={newName}
        setNewName={setNewName}
        newNumber={newNumber}
        setNewNumber={setNewNumber}
        persons={persons}
        setPersons={setPersons}
      />
      <Phonebook
        newFilter={newFilter}
        setNewFilter={setNewFilter}
        persons={persons}
      />
    </div>
  );
};
export default App;
