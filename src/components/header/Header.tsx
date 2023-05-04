import './Header.css'
import HeaderNavItem from './HeaderNavItem'
import {Link, NavLink} from 'react-router-dom'
import React, {RefObject, useEffect, useRef, useState} from 'react'
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
            if (window.innerWidth <= 830) {
                setMobileNavbar(true)
            } else if (window.innerWidth > 830) {
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
                                <li><a href={"#aboutSection"} onClick={() => setMobileNavbarOpen(prev => !prev)}><HeaderNavItem>About</HeaderNavItem></a></li>
                                <li><a href={"#technologiesSection"} onClick={() => setMobileNavbarOpen(prev => !prev)}><HeaderNavItem>Technologies</HeaderNavItem></a>
                                </li>
                                <li><a href={"#experimentsSection"} onClick={() => setMobileNavbarOpen(prev => !prev)}><HeaderNavItem>Experiments</HeaderNavItem></a></li>
                                <li><a href={"#resultsSection"} onClick={() => setMobileNavbarOpen(prev => !prev)}><HeaderNavItem>Results</HeaderNavItem></a></li>
                                <li><a href={"#conclusionSection"} onClick={() => setMobileNavbarOpen(prev => !prev)}><HeaderNavItem>Conclusion</HeaderNavItem></a></li>
                                <li><a href={"#contactSection"} onClick={() => setMobileNavbarOpen(prev => !prev)}><HeaderNavItem>Contact</HeaderNavItem></a></li>
                            </ul>}
                    </nav> :
                    <nav className={`header__navbar`}>
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