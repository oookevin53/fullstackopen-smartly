import React, { useState, useEffect } from 'react'
import Search from "./components/Search"
import List from "./components/List"
import axios from 'axios'

function App() {
  const [ countries, setCountries ] = useState([])
  const [ search, setSearch ] = useState('')

  const handleSearch = (event) => {
    setSearch(event.target.value)
  }

  useEffect(() => {
    axios
      .get('https://restcountries.eu/rest/v2/all')
      .then(response => {
        setCountries(response.data)
      })
  }, [])
  
  return (
    <>
      <Search search={search} handleSearch={handleSearch} />
      <List countries={countries.filter(country => country.name.toLowerCase().includes(search.toLowerCase()))} />
    </>
  );
}

export default App;