import React, { useState, useEffect } from 'react'
import List from "./components/List"
import Add from "./components/Add"
import Search from "./components/Search"
import contactService from "./services/contacts"

const App = () => {
  const [ persons, setPersons ] = useState([])
  const [ newName, setNewName ] = useState('')
  const [ newNumber, setNewNumber ] = useState('')
  const [ search, setSearch ] = useState('')
  
  useEffect(() => {
    contactService
      .getAll()
        .then(initialContacts => {
        setPersons(initialContacts)
      })
  }, [])
  
  const handleNewContact = (event) => {
    setNewName(event.target.value)
  }
  
  const handleNewNum = (event) => {
    setNewNumber(event.target.value)
  }
  
  const handleSearch = (event) => {
    setSearch(event.target.value)
  }
  
  const addContact = (event) => {
    event.preventDefault()
    
    const contactInfo = {
      name: newName,
      number: newNumber
    }
  
    if (persons.some(person => person.name === newName)) {
      const confirm = window.confirm(`${newName} is already added to phonebook, replace the old number wiith a new one?`)
      if (confirm) {
        const individual = persons.find(p => p.name === newName)
        const changedNumber = { ...individual, number: newNumber}
        contactService
          .update(changedNumber.id, changedNumber)
            .then(returnedContact => {
              setPersons(persons.map(person => person.id !== changedNumber.id ? person : returnedContact))
          })
      }
    } else {
        contactService
          .create(contactInfo)
            .then(returnedContact => {
            setPersons(persons.concat(returnedContact))
            setNewName('')
            setNewNumber('')
          })
    }
  }

  const deleteContactOf = (id, name) => {
    const result = window.confirm(`Delete ${name} ?`)
    if (result) {
      contactService.remove(id)
      setPersons(persons.filter(person => person.id !== id))
    }
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
      <List 
        list={persons.filter(person => person.name.toLowerCase().includes(search.toLowerCase()))}
        deleteContact={deleteContactOf}
      />
    </div>
  )
}

export default App