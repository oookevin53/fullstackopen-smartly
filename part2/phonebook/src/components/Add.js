import React from 'react'

const Add = ({ name, number, addContact, handleNewContact, handleNewNum }) => {
    return (
        <form onSubmit={addContact}>
            <div>name: <input value={name} onChange={handleNewContact} required/></div>
            <div>number: <input value={number} onChange={handleNewNum} required/></div>
            <div><button type="submit">add</button></div>
      </form>
    )
}

export default Add