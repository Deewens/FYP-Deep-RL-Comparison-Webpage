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
        <HeaderNavItem><NavLink to="/about">About</NavLink></HeaderNavItem>
        <HeaderNavItem><NavLink to="/projects/games">Games</NavLink></HeaderNavItem>
        <HeaderNavItem>Web</HeaderNavItem>
        <HeaderNavItem>Softwares</HeaderNavItem>
        <HeaderNavItem>Resume</HeaderNavItem>
      </nav>
    </header>
  )
}

export default Header