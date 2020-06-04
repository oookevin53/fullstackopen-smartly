import React from 'react'
import Country from "./Country"

const List = ({ countries }) => {
    console.log(countries)
    if (countries.length > 10) {
        return (
            <div>Too many matches, specify another filter</div>
        )
    } else if (countries.length > 1 && countries.length < 11) {
        return (
            countries.map(country => <div key={country.numericCode}>{country.name}</div>
            )
        )
    } else if (countries.length === 1) {
        return (
            <Country country={countries[0]} />
        )
    }
}

export default List