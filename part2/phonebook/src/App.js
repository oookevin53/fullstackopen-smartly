import React, { useState } from 'react'

const App = () => {
  const [ persons, setPersons ] = useState([{ name: 'Arto Hellas', number: '040-1234567' }]) 
  const [ newName, setNewName ] = useState('')
  const [ newNumber, setNewNumber ] = useState('')

  const addContact = (event) => {
    event.preventDefault()
    
    const contactInfo = {
      name: newName,
      number: newNumber
    }

    if (persons.some(person => person.name === newName)) {
      window.alert(`${newName} is already added to phonebook`)
    } else {
    setPersons(persons.concat(contactInfo))
    setNewName('')
    setNewNumber('')
    }
  }
  
  const handleNewContact = (event) => {
    setNewName(event.target.value)
  }
  
  const handleNewNum = (event) => {
    setNewNumber(event.target.value)
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <form onSubmit={addContact}>
        <div>name: <input value={newName} onChange={handleNewContact} /></div>
        <div>number: <input value={newNumber} onChange={handleNewNum} /></div>
        <div><button type="submit">add</button></div>
      </form>
      <h2>Numbers</h2>
      {persons.map((contact, index) => <div key={index}>{contact.name} {contact.number}</div>)}
    </div>
  )
}

export default App