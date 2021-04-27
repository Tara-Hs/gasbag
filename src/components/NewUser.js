import React from 'react'
import { useState } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'



const NewUser = () => {
   const [email, setEmail] = useState('')
   const [username, setUsername] = useState('')
   const [password, setPassword] = useState('')
   const [error, setError] = useState('')
   
   
   console.log(localStorage)
   localStorage.setItem('userName', username)
   localStorage.setItem('email', email)
   localStorage.setItem('password', password)
   console.log(localStorage)
   const handleSubmit = async (event) => {
        event.preventDefault()

        
        try {
            await axios.post('https://api.chatengine.io/users/', {
                headers: { "Private_Key": "417629db-0705-4ecb-990d-0dbc3b909c3d" }
            })
            // let obj = {
            //     'name': name,
            //     'username': username,
            //     'password': password
            // }
            // setName(name)
            // localStorage.push(obj)
            console.log(localStorage)
            window.location.reload()

        } catch (error) {
            setError('username already exist')
        }

    }

    return (
        <div className="wrapper">
            <div className="form">
                <h1 className="title">GasBag</h1>
                <form onSubmit={handleSubmit}>
                    
                    <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} className="input" placeholder="Username" required/>
                    <input type="text" value={email} onChange={(e) => setEmail(e.target.value)} className="input" placeholder="Email" required/>
                    <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} className="input" placeholder="Password" required/>
                    <div align="center">
                        <button type="submit" className="button">
                            <span>Create Account</span>
                        </button>
                    </div>
                    <h2 className="error">{error}</h2>
                    <h3 className="log-in-link">Already a member?  <Link className="link"to="/loginform">Login in here!</Link></h3>
                </form>
            </div>
        </div>
    )

} 
export default NewUser;