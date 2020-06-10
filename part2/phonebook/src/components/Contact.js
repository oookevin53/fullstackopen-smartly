import React from 'react'

const Contact = ({ person, deleteContact }) => {
    return (
        <>
            {person.name} {person.number}
            <button onClick={() => deleteContact(person.id, person.name)}>delete</button>
        </>
    )
}

export default Contact