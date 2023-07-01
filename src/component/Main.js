import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Registeration from './Registeration'
import Login from './Login'
import Home from './Home'

const Main = () => {
  return (
    <div>

      <Routes>
        <Route exact path="/" element={<Registeration />} />
        <Route exact path="Login" element={<Login />} />
        <Route exact path="Home" element={<Home />} />

      </Routes>



    </div>
  )
}

export default Main