import React from 'react'
import { Link } from 'react-router-dom'
import './Login'
import { Button } from 'react-bootstrap'


const Home = () => {
  return (
    <div className='hom'>
        <h4>Home Page</h4>
        <br></br>
        <h1>Hello USER......
        </h1>
        <h2>Welcome to home page</h2>
        <p>
        In the context of React, a router is a component or library that allows you to handle navigation and routing within a single-page application (SPA). It enables you to define different routes for different URLs and render the appropriate components based on the current URL.

React routers provide a way to create a declarative routing system, where you can specify the relationship between URLs and components in a straightforward manner. This allows users to navigate between different views or pages without triggering a full page reload.

The most commonly used router library in React is React Router. It provides a set of components and utilities that enable you to implement routing functionality in your application. React Router uses the URL path and browser history to keep track of the current location and render the appropriate components.
        </p>
        <Link to="/login"><Button variant='danger'>back</Button></Link>
      
    </div>
  )
}

export default Home