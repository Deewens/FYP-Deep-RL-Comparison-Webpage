import './HeaderNavItem.css'
import React from 'react'
import { NavLink } from 'react-router-dom'

function HeaderNavItem(props: {children: React.ReactNode}) {
  return (
    <div className="menu-item">
      {props.children}
    </div>
  )
}

export default HeaderNavItem