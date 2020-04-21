import React, { useState, useEffect } from 'react'
import List from "./components/List"
import Add from "./components/Add"
import Search from "./components/Search"
import axios from 'axios'

const App = () => {
  const [ persons, setPersons ] = useState([])
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

  useEffect(() => {
    console.log("effect")
    axios
      .get("http://localhost:3001/persons")
      .then(response => {
        console.log('promise fulfilled')
        setPersons(response.data)
      })
  }, [])

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