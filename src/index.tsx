import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import App from './App'
import reportWebVitals from './reportWebVitals'
import './variables.css'
import {
  createBrowserRouter,
  RouterProvider,
} from 'react-router-dom'
import Landing from './components/landing/Landing'
import GameProjects from './components/project/game-projects/GameProjects'
import AppsProjects from './components/project/apps-projects/AppsProjects'

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: '',
        element: <Landing />,
      },
      {
        path: 'projects/games',
        element: <GameProjects />,
      },
      {
        path: 'projects/apps',
        element: <AppsProjects />,
      },
    ],
  },
])

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement,
)
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
