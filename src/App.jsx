import React from 'react'
import './App.css'
import { Routes, Route } from 'react-router-dom'
import Login from './pages/auth/Login'
import Register from './pages/auth/Register'
import Stream from './pages/stream/StreamCameras'

function App () {
  return (
    <Routes>
      <Route path='/login' element={<Login />} />
      <Route path='/register' element={<Register />} />
      <Route path='/stream' element={<Stream />} />
    </Routes>
  )
}

export default App
