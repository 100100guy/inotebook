import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const Signup = (props) => {
  const navigate = useNavigate()
  const [creds, setCreds] = useState({ name: "", email: "", password: "", cpassword: "" })
  const host = "http://localhost:5000"
  const handleSubmit = async (e) => {
    e.preventDefault()
    const response = await fetch(`${host}/api/auth/createuser`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },

      body: JSON.stringify({ name: creds.name, email: creds.email, password: creds.password })
    });
    const json = await response.json();
    console.log(json)
    if (json.success) {
      localStorage.setItem('token', json.authToken)
      navigate("/")

      props.showAlert("Account created successfully", "success")
    }
    else {
      props.showAlert("Invalid Credentials", "danger")
    }

  }
  const onChange = (e) => {

    setCreds({ ...creds, [e.target.name]: e.target.value })
  }
  return (
    <div>
      <div className='container text-start'>
        <form onSubmit={handleSubmit} >
          <div className="form-group">
            <label htmlFor="email">Name</label>
            <input type="text" className="form-control" id="name" name='name' onChange={onChange} placeholder="Enter name" />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email address</label>
            <input type="email" className="form-control" id="email" name='email' aria-describedby="emailHelp" onChange={onChange} placeholder="Enter email" />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input type="password" className="form-control" id="password" name="password" onChange={onChange} placeholder="Password" />
          </div>
          <div className="form-group">
            <label htmlFor="cpassword">Confirm Password</label>
            <input type="password" className="form-control" id="cpassword" name="cpassword" onChange={onChange} placeholder="Password" />
          </div>

          <button type="submit" className="btn btn-primary" >Submit</button>
        </form>
      </div>
    </div>
  )
}

export default Signup