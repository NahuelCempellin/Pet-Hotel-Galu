import React from 'react'
import './App.css'
import { Routes, Route } from 'react-router-dom'
import Login from './pages/auth/Login'
import Register from './pages/auth/Register'
import Stream from './pages/stream/StreamCameras'
import Landing from './pages/landing/landingPage'
import Home from './pages/home/home'

function App () {
  return (
    <Routes>
      <Route path='/' element={<Landing />} />
      <Route path='/home' element={<Home/>} />
      <Route path='/login' element={<Login />} />
      <Route path='/register' element={<Register />} />
      <Route path='/stream' element={<Stream />} />
    </Routes>
  )
}

export default App
