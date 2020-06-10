import React from 'react'
import Contact from "./Contact"

const List = ({ list, deleteContact }) => {
    return (
        list.map((contact, index) => <div key={index}><Contact person={contact} deleteContact={deleteContact}/></div>) 
    )
}

export default List