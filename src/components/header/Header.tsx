import './Header.css'
import HeaderNavItem from './HeaderNavItem'

function Header() {
  return (
    <header className="header">
      <nav className="header__navbar">
        <HeaderNavItem>About</HeaderNavItem>
        <HeaderNavItem>Games</HeaderNavItem>
        <HeaderNavItem>Web</HeaderNavItem>
        <HeaderNavItem>Softwares</HeaderNavItem>
        <HeaderNavItem>Resume</HeaderNavItem>
      </nav>
    </header>
  )
}

export default Header