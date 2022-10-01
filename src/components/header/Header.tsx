import './Header.css'
import HeaderNavItem from './HeaderNavItem'
import { NavLink } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { solid } from '@fortawesome/fontawesome-svg-core/import.macro'

type Props = {
  color?: 'primary' | 'transparent',
  position?: 'absolute' | 'relative'
}

function Header(props: Props) {
  const [mobileNavbar, setMobileNavbar] = useState(false)
  const [mobileNavbarOpen, setMobileNavbarOpen] = useState(false)

  useEffect(() => {
    handleResize()

    function handleResize() {
      if (window.innerWidth < 600) {
        setMobileNavbar(true)
      } else if (window.innerWidth > 600) {
        setMobileNavbar(false)
      }
    }

    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  })

  return (
    <header className={
      `header
      ${props.color === 'transparent' ? 'header--color-transparent' : 'header--color-primary'}
      ${props.position === 'absolute' ? 'header--position-absolute' : ''}`
    }>
      {
        mobileNavbar ?
          <nav className={`header__nav-mobile ${mobileNavbarOpen && 'header__nav-mobile--background'}`}>
            <button className="header__nav-mobile-btn" onClick={() => setMobileNavbarOpen(prev => !prev)}>
              {
                mobileNavbarOpen
                  ? <FontAwesomeIcon size="2x" icon={solid('xmark')} />
                  : <FontAwesomeIcon size="2x" icon={solid('bars')} />
              }
            </button>
            {mobileNavbarOpen &&
                <ul
                    className={`header__nav-mobile-items`}>
                    <li><NavLink to="/"><HeaderNavItem>About</HeaderNavItem></NavLink></li>
                    <li><NavLink to="/projects/games"><HeaderNavItem>Games</HeaderNavItem></NavLink></li>
                    <li><NavLink to="/projects/web"><HeaderNavItem>Web</HeaderNavItem></NavLink></li>
                    <li><NavLink to="/projects/softwares"><HeaderNavItem>Softwares</HeaderNavItem></NavLink></li>
                    <li><NavLink to="/"><HeaderNavItem>Resume</HeaderNavItem></NavLink></li>
                </ul>}
          </nav> :
          <nav className="header__navbar">
            <NavLink to="/"><HeaderNavItem>About</HeaderNavItem></NavLink>
            <NavLink to="/projects/games"><HeaderNavItem>Games</HeaderNavItem></NavLink>
            <NavLink to="/projects/web"><HeaderNavItem>Web</HeaderNavItem></NavLink>
            <NavLink to="/projects/softwares"><HeaderNavItem>Softwares</HeaderNavItem></NavLink>
            <NavLink to="/"><HeaderNavItem>Resume</HeaderNavItem></NavLink>
          </nav>
      }


    </header>
  )
}

export default Header