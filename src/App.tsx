import React from 'react'
import './App.css'
import Landing from './components/landing/Landing'
import Header from './components/header/Header'
import { Outlet } from 'react-router-dom'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'

const queryClient = new QueryClient()

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <div className="App">
        <Outlet />
      </div>
    </QueryClientProvider>
  )
}

export default App
