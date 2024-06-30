import React, {useState, useEffect, useRef} from 'react';
import { Link } from 'react-scroll';
import { NavLink } from "react-router-dom";
import { NavHashLink } from 'react-router-hash-link';
import './styles/Menu.css'

function Menu() {
    const [isOpen, setIsOpen] = useState(false)
    const [isMobile, setIsMobile] = useState(window.innerWidth < 900)
    const [isScrolled, setIsScrolled] = useState(false)
    const menuRef = useRef(null)

    const handleScroll = ()=> {
        if (window.scrollY > 50) {
            setIsScrolled(true)
        } else {
            setIsScrolled(false)
        }
    }
    useEffect(()=> {
        window.addEventListener('scroll', handleScroll, { passive: true })
        return ()=> {
            window.removeEventListener('scroll', handleScroll)
        }
    })

    const handleResize = ()=> {
        setIsMobile(window.innerWidth < 900)
        if (window.innerWidth > 900) {
            setIsOpen(false)
        }
    }
    useEffect(()=> {
        window.addEventListener('resize', handleResize)
        return () => {
            window.removeEventListener('resize', handleResize)
        }
    })

    const OpenMenu = ()=> {
        setIsOpen(!isOpen);
    }

    const handleClickOutside = (event)=> {
        if(menuRef.current && !menuRef.current.contains(event.target)) {
            setIsOpen(false)
        }
    }
    useEffect(()=> {
        document.addEventListener('mousedown', handleClickOutside)
        return ()=> {
            document.removeEventListener('mousedown', handleClickOutside)
        }
    })

    return(
        <div className={`${isScrolled ? 'header shrink' : 'header'}`}>
            {isMobile ? (
            <div className="menu-content" ref={menuRef}>
                <img 
                    onClick={OpenMenu} 
                    className= 'menuicon'
                    src={`${!isOpen ? 'src/icons/menu_ico.png' : 'src/icons/close_ico.png'}`}>
                </img>
                {isOpen && (
                    <ul className="menu-options">
                        <NavHashLink
                        className='menu-item'
                        to="/#top"
                       >Home
                    </NavHashLink>
                    <NavHashLink
                        className='menu-item'
                        to="/#About"
                        >About
                    </NavHashLink>
                    <NavLink 
                        className='menu-item'
                        to="/portfolio"
                        >Portfolio
                    </NavLink>
                    </ul>
                )}
            </div>) : (
            <div className="menu-content">
                <ul className="menu-options">
                    <NavHashLink
                        className='menu-item'
                        to="/#top"
                       >Home
                    </NavHashLink>
                    <NavHashLink
                        className='menu-item'
                        to="/#About"
                        >About
                    </NavHashLink>
                    <NavLink 
                        className='menu-item'
                        to="/portfolio"
                        >Portfolio
                    </NavLink>
                </ul>
            </div>
            )}
            {!isOpen && (
        <div>
            <p className="title">Mariano Ocaranza</p>
        </div>
        )}
        </div>
    )
}

export default Menu