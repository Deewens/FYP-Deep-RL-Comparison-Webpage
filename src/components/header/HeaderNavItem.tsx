import './HeaderNavItem.css'
import React from 'react'

function HeaderNavItem(props: {children: React.ReactNode}) {
  return (
    <div className="menu-item">
      {props.children}
    </div>
  )
}

export default HeaderNavItem