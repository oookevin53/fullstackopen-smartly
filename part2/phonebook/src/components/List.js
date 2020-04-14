import React from 'react'
import Contact from "./Contact"

const List = ({ list }) => {
    return (
        list.map((contact, index) => <div key={index}><Contact person={contact} /></div>) 
    )
}

export default List