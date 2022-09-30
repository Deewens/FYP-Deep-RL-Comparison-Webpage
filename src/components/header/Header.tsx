import './Header.css'
import HeaderNavItem from './HeaderNavItem'
import { NavLink } from 'react-router-dom'
import { useEffect, useState } from 'react'

type Props = {
  color?: 'primary' | 'transparent',
  position?: 'absolute' | 'relative'
}

function Header(props: Props) {
  const [mobileNavbar, setMobileNavbar] = useState(false)
  const [mobileNavbarOpen, setMobileNavbarOpen] = useState(false)

  useEffect(() => {
    if (window.innerWidth < 500) {
      setMobileNavbar(true)
    }
  }, [window.innerWidth])

  return (
    <header className={
      `header
      ${props.color === 'transparent' ? 'header--color-transparent' : 'header--color-primary'}
      ${props.position === 'absolute' ? 'header--position-absolute' : ''}`
    }>
      {
        mobileNavbar ?
          <nav className="header__navbar-mobile">
            <button onClick={() => setMobileNavbarOpen(prev => !prev)}>{mobileNavbarOpen ? 'Close' : 'Open'}</button>
            <ul className={`header__nav-menu-mobile ${mobileNavbarOpen ? 'header__nav-menu-mobile--show' : ''}`}>

            </ul>
          </nav> :
          <nav className="header__navbar">
            <HeaderNavItem><NavLink to="/">About</NavLink></HeaderNavItem>
            <HeaderNavItem><NavLink to="/projects/games">Games</NavLink></HeaderNavItem>
            <HeaderNavItem><NavLink to="/projects/web">Web</NavLink></HeaderNavItem>
            <HeaderNavItem><NavLink to="/projects/softwares">Softwares</NavLink></HeaderNavItem>
            <HeaderNavItem>Resume</HeaderNavItem>
          </nav>

      }


    </header>
  )
}

export default Header