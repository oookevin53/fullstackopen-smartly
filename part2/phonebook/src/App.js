import React, { useState } from 'react'
import List from "./components/List"
import Add from "./components/Add"
import Search from "./components/Search"

const App = () => {
  const [ persons, setPersons ] = useState([
    { name: 'Arto Hellas', number: '040-1234567' },
    { name: 'Ada Lovelace', number: '39-44-5323523' },
    { name: 'Dan Abramov', number: '12-43-234345' },
    { name: 'Mary Poppendieck', number: '39-23-6423122' }
  ])
  const [ newName, setNewName ] = useState('')
  const [ newNumber, setNewNumber ] = useState('')
  const [ search, setSearch ] = useState('')

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

  const handleSearch = (event) => {
    setSearch(event.target.value)
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <Search search={search} handleSearch={handleSearch} />
      <h3>add a new</h3>
      <Add 
        name={newName}
        number={newNumber}
        addContact={addContact}
        handleNewContact={handleNewContact}
        handleNewNum={handleNewNum}
      />
      <h3>Numbers</h3>
      <List list={persons.filter(person => person.name.toLowerCase().includes(search.toLowerCase()))} />
    </div>
  )
}

export default App