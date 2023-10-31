import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const Login = (props) => {
    const navigate = useNavigate()
    const [creds, setCreds] = useState({ email: "", password: "" })
    const host = "http://localhost:5000"
    const handleSubmit = async (e) => {
        e.preventDefault()
        const response = await fetch(`${host}/api/auth/login`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },

            body: JSON.stringify({ email: creds.email, password: creds.password })
        });
        const json = await response.json();
        console.log(json)
        if (json.success) {
            localStorage.setItem('token', json.authToken)
            navigate("/")

            props.showAlert("Logged in successfully", "success")
        }
        else {

            props.showAlert("Invalid Credentials", "danger")
        }
    }
    const onChange = (e) => {

        setCreds({ ...creds, [e.target.name]: e.target.value })
    }
    return (
        <div className='container text-start'>
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label htmlFor="email">Email address</label>
                    <input type="email" className="form-control" id="email" name='email' value={creds.email} aria-describedby="emailHelp" placeholder="Enter email" onChange={onChange} />
                </div>
                <div className="form-group">
                    <label htmlFor="password">Password</label>
                    <input type="password" className="form-control" id="password" value={creds.password} name="password" placeholder="Password" onChange={onChange} />
                </div>

                <button type="submit" className="btn btn-primary" >Submit</button>
            </form>
        </div>
    )
}

export default Login