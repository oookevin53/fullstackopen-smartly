import React, { useState } from 'react'

const App = () => {
  const [ persons, setPersons ] = useState([{ name: 'Arto Hellas' }]) 
  const [ newName, setNewName ] = useState('')

  const addContact = (event) => {
    event.preventDefault()
    
    const contactInfo = {
      name: newName
    }

    if (persons.some(person => person.name === newName)) {
      window.alert(`${newName} is already added to phonebook`)
    } else {
    setPersons(persons.concat(contactInfo))
    setNewName('')
    }
  }
  
  const handleNewContact = (event) => {
    setNewName(event.target.value)
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <form onSubmit={addContact}>
        <div>
          name: <input value={newName} onChange={handleNewContact} />
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      {persons.map((contact, index) => <div key={index}>{contact.name}</div>)}
    </div>
  )
}

export default App