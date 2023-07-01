import React from 'react'
import { Link } from 'react-router-dom'
import './Home'
import './Registeration'
import { Button } from 'react-bootstrap'

const Login = () => {
  return (
    <div className='log'><div><h1>Login Page</h1></div>
    <div>
    <span>Email</span><br/>
            <input type='text' placeholder='Enter email'/><br/>
            <span>Password</span><br/>
            <input type='password' placeholder='Enter password'/><br/>
            <br/>
            <Link to="/home">
              <Button variant="success" className="m-2">Login</Button> 
                     </Link>

            <Link to="/">
              <Button variant="danger">Back</Button>
            </Link>
            
    </div>
    
    </div>
  )
}

export default Login