import React, { useState } from 'react';
import AddNewPerson from './components/AddNewPerson';
import Phonebook from './components/Phonebook';

const App = (props) => {
  const [persons, setPersons] = useState(props.persons);
  const [newName, setNewName] = useState('Nimi tähän');
  const [newNumber, setNewNumber] = useState('Numero tähän');
  const [newFilter, setNewFilter] = useState('');

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
