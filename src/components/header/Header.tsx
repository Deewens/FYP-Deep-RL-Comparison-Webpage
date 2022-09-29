import './Header.css'
import HeaderNavItem from './HeaderNavItem'
import { NavLink } from 'react-router-dom'

type Props = {
  color?: 'primary' | 'transparent',
  position?: 'absolute' | 'relative'
}

function Header(props: Props) {
  return (
    <header className={
      `header
      ${props.color === 'transparent' ? 'header--color-transparent' : 'header--color-primary'}
      ${props.position === 'absolute' ? 'header--position-absolute' : ''}`
    }>
      <nav className="header__navbar">
        <HeaderNavItem><NavLink to="/">About</NavLink></HeaderNavItem>
        <HeaderNavItem><NavLink to="/projects/games">Games</NavLink></HeaderNavItem>
        <HeaderNavItem><NavLink to="/projects/web">Web</NavLink></HeaderNavItem>
        <HeaderNavItem><NavLink to="/projects/softwares">Softwares</NavLink></HeaderNavItem>
        <HeaderNavItem>Resume</HeaderNavItem>
      </nav>
    </header>
  )
}

export default Header