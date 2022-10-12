import './ErrorPage.css'
import React from 'react'
import { isRouteErrorResponse, NavLink, useRouteError } from 'react-router-dom'
import Header from '../../header/Header'

export default function ErrorPage() {
  const error = useRouteError() as any
  console.error(error)

  if (isRouteErrorResponse(error)) {
    return (
      <>
        <Header color="transparent" />
        <div className="error-page">
          <h1>Oops!</h1>
          <p>Sorry, an error has occurred.</p>
          <p>
            <i>{error.status} {error.statusText}</i>
          </p>
          {error.data?.message && <p>{error.data.message}</p>}
          <p className="error-page__go-home"><NavLink to="/">Click here to go back to the home page</NavLink></p>
        </div>
      </>
    )
  } else {
    return (
      <>
        <Header color="transparent" />
        <div className="error-page">
          <h1>Oops!</h1>
          <p>Sorry, an unexpected error has occurred.</p>

          <p className="error-page__go-home"><NavLink to="/">Click here to go back to the home page</NavLink></p>
        </div>
      </>
    )
  }
}