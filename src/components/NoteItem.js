import React from 'react'
import { useContext } from 'react'
import noteContext from '../context/notes/noteContext'

export const NoteItem = (props) => {
    const { note, updateNote } = props
    const context=useContext(noteContext)
    const { deleteNote}=context
    const onClick=()=>{
        deleteNote(note._id)
    }
    return (

        <div className='col-md-3'>

            <div className="card my-3" style={{width: "18rem"}}>
                <div className="card-body">
                    <h5 className="card-title">{note.title}</h5>
                    <p className="card-text">
                        {note.description}</p>
                        <i className="far fa-trash-alt mx-2" onClick={onClick} style={{cursor:"pointer"}}></i>
                        <i className="far fa-edit mx-2"style={{cursor:"pointer"}} onClick={()=>{updateNote(note)}}></i>
                </div>
            </div>
        </div>
    )
}
