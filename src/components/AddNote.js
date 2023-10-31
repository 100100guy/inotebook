import React, { useState } from 'react'

import { useContext } from 'react'
import noteContext from '../context/notes/noteContext'

export const AddNote = () => {
    const context=useContext(noteContext)
    const { addNote}=context
    const [note,setNote]=useState({title: "", description:"", tag:""})
    const onChange=(e)=>{
        setNote({...note, [e.target.name]:e.target.value})
    }
    const handleClick=(e)=>{
        e.preventDefault()
        addNote(note.title, note.description, note.tag)
    }
    return (
        <div>
            <h1 >
                Add a note
            </h1>
            <form>
                <div className="form-group">
                    <label htmlFor="title">Title</label>
                    <input minLength={5} required type="text" className="form-control" id="title"name="title" aria-describedby="emailHelp" onChange={onChange} placeholder="Enter title" />
                
                </div>
                <div className="form-group">
                    <label htmlFor="description">Description</label>
                    <input minLength={5} required type="text" className="form-control" id="description" name="description"placeholder="Description" onChange={onChange} />
                </div>
                
                <button type="submit" className="btn btn-primary" onClick={handleClick}>Submit</button>
            </form>
        </div>
    )
}
