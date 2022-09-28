import React from 'react'
import './App.css'
import Landing from './components/landing/Landing'
import Header from './components/header/Header'
import { Outlet } from 'react-router-dom'

function App() {
  return (
    <div className="App">
      <Outlet />
    </div>
  )
}

export default App
