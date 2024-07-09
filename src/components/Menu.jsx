import React, {useState, useEffect, useRef, useCallback} from 'react';
import { useLocation, useNavigate } from 'react-router-dom'
import '../styles/Menu.css'

function Menu() {
    const [isOpen, setIsOpen] = useState(false)
    const [isMobile, setIsMobile] = useState(window.innerWidth < 900)
    const [isScrolled, setIsScrolled] = useState(false)
    const location = useLocation()
    const navigate = useNavigate()
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

    const handleClickOutside = useCallback((event)=> {
        if(menuRef.current && !menuRef.current.contains(event.target)) {
            setIsOpen(false)
        }
    }, [menuRef, setIsOpen]);

    useEffect(()=> {
        document.addEventListener('mousedown', handleClickOutside)
        return ()=> {
            document.removeEventListener('mousedown', handleClickOutside)
        }
    }, [handleClickOutside])


    const handleNav = (sectionId)=> {
        const section = document.getElementById(sectionId)
        if (sectionId === 'Portfolio') {
            navigate('/portfolio')
        }
        else {
            if (location.pathname !== '/') {
                navigate('/')
                setTimeout(()=> {
                    const section = document.getElementById(sectionId)
                    if (sectionId === 'root') {
                        section.scrollIntoView()

                    }
                    else if (sectionId === 'About') {
                        section.scrollIntoView()
                    }
                }, 100)
            }
            else {
                if (section) {
                    section.scrollIntoView();
                  }
            }
        }
    }

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
                    <li
                        onClick={()=> handleNav('root')}
                        className='menu-item'
                       >Home
                    </li>
                    <li
                        className='menu-item'
                        onClick={()=> handleNav('About')}
                        >About
                    </li>
                    <li 
                        className='menu-item'
                        onClick={()=> handleNav('Portfolio')}
                        >Portfolio
                    </li>
                    </ul>
                )}
            </div>) : (
            <div className="menu-content">
                <ul className="menu-options">
                <li
                        className='menu-item'
                        onClick={()=> handleNav('root')}
                       >Home
                    </li>
                    <li
                        className='menu-item'
                        onClick={()=> handleNav('About')}
                        >About
                    </li>
                    <li 
                        className='menu-item'
                        onClick={()=> handleNav('Portfolio')}
                        >Portfolio
                    </li>
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