
import React from 'react'
import Notes from './Notes'

export const Home = (props) => {
  const {showAlert}=props
  return (
    <div>
      <div className="container text-start " showAlert={showAlert}>
     <Notes/>
      </div>
    </div>
  )
}
