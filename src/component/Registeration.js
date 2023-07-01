import React from 'react'
import { Link } from 'react-router-dom'
import './Login'
import './Logo.css'
import Button from 'react-bootstrap/Button';



const Registeration = () => {


  return (
    <div className='reg'>
      <h1>Registeration Page</h1>
      <div>
        <span>Name</span><br />
        <input type='text' placeholder='Enter name' /><br />
        <span>Email</span><br />
        <input type='text' placeholder='Enter email' /><br />
        <span>Password</span><br />
        <input type='password' placeholder='Enter password' /><br />
        <br />
        <Link to="/login"><Button  variant="success">Submit</Button></Link>

      </div>
    </div>
  )
}

export default Registeration