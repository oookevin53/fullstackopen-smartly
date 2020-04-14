import React from 'react'

const Contact = ({ person }) => {
    return (
        <>{person.name} {person.number}</>
    )
}

export default Contact