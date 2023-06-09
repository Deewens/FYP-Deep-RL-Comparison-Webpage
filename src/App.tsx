import React from 'react'
import './App.css'
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
