import React from 'react'
import { useState } from 'react'
import axios from 'axios'
import { Route, Switch, Link } from 'react-router-dom'

const LoginForm = () => {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [error, setError] = useState('')

    const handleSubmit = async (event) => {
        event.preventDefault()

        const authObject = { "Project-ID": "5c6bd2ad-3827-4f00-a041-6d328c95b4f2", "User-Name": username, 'User-Secret': password }

        try {
            await axios.get('https://api.chatengine.io/chats', { headers: authObject })

            localStorage.setItem('username', username)
            localStorage.setItem('password', password)

            window.location.reload()

        } catch (error) {
            setError('incorrect username or password')
        }
    }
    return (
        <div className="wrapper">
            <div className="form">
                <h1 className="title">GasBag</h1>
                <form onSubmit={handleSubmit}>
                    <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} className="input" placeholder="Username" required/>
                    <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} className="input" placeholder="Password" required/>
                    <div align="center">
                        <button type="submit" className="button">
                            <span>start chatting</span>
                        </button>
                    </div>
                    <h2 className="error">{error}</h2>
                    <h3 className="sign-up-link">Not a user?  <Link className="link"to="/newuser">Sign Up here!</Link></h3>
                </form>
            </div>
        </div>
    )
}

export default LoginForm