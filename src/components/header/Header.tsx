import './Header.css'
import HeaderNavItem from './HeaderNavItem'
import {Link, NavLink} from 'react-router-dom'
import React, {RefObject, useEffect, useState} from 'react'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {solid} from '@fortawesome/fontawesome-svg-core/import.macro'

type Props = {
    color?: 'primary' | 'transparent',
    position?: 'absolute' | 'relative' | 'fixed',
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
      ${props.position === 'absolute' && 'header--position-absolute'}
      ${props.position === 'fixed' && 'header--position-fixed'}`
        }>
            {
                mobileNavbar ?
                    <nav className={`header__nav-mobile ${mobileNavbarOpen && 'header__nav-mobile--background'}`}>
                        <button className="header__nav-mobile-btn" onClick={() => setMobileNavbarOpen(prev => !prev)}>
                            {
                                mobileNavbarOpen
                                    ? <FontAwesomeIcon size="2x" icon={solid('xmark')}/>
                                    : <FontAwesomeIcon size="2x" icon={solid('bars')}/>
                            }
                        </button>
                        {mobileNavbarOpen &&
                            <ul
                                className={`header__nav-mobile-items`}>
                                <li><NavLink to="/"><HeaderNavItem>About</HeaderNavItem></NavLink></li>
                                <li><NavLink to="/projects/games"><HeaderNavItem>Research
                                    Question</HeaderNavItem></NavLink></li>
                                <li><NavLink to="/projects/apps"><HeaderNavItem>Experiments</HeaderNavItem></NavLink>
                                </li>
                                <li><NavLink to="/resume"><HeaderNavItem>Resume</HeaderNavItem></NavLink></li>
                            </ul>}
                    </nav> :
                    <nav className="header__navbar">
                        <a href={"#aboutSection"}><HeaderNavItem>About</HeaderNavItem></a>
                        <a href={"#technologiesSection"}><HeaderNavItem>Technologies</HeaderNavItem></a>
                        <a href={"#experimentsSection"}><HeaderNavItem>Experiments</HeaderNavItem></a>
                        <a href={"#resultsSection"}><HeaderNavItem>Results</HeaderNavItem></a>
                        <a href={"#conclusionSection"}><HeaderNavItem>Conclusion</HeaderNavItem></a>
                        <a href={"#contactSection"}><HeaderNavItem>Contact</HeaderNavItem></a>
                    </nav>
            }
        </header>
    )
}

export default Header