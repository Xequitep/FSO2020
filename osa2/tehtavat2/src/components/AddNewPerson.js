import React from 'react';

const AddNewPerson = (props) => {
  const handleNameChange = (event) => {
    props.setNewName(event.target.value);
  };

  const handleNumberChange = (event) => {
    props.setNewNumber(event.target.value);
  };

  const resultCONTENT = props.persons.map((persons) => persons.content);

  const addName = (event) => {
    event.preventDefault();
    const personObject = {
      content: props.newName,
      number: props.newNumber,
      id: props.persons.length + 1,
    };
    if (resultCONTENT.includes(props.newName)) {
      alert(`${props.newName} is already added to phonebook`);
    } else props.setPersons(props.persons.concat(personObject));
    props.setNewName('');
    props.setNewNumber('');
  };

  return (
    <>
      <h2>Phonebook</h2>
      <form onSubmit={addName}>
        name: <input value={props.newName} onChange={handleNameChange} />
        number: <input value={props.newNumber} onChange={handleNumberChange} />
        <button type="submit">add</button>
      </form>
    </>
  );
};

export default AddNewPerson;
