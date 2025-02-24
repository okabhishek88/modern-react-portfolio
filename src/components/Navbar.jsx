// Author - Abhishek Chauhan
import "./Navbar.css"
import { useState } from "react"
import { Link, useLocation } from "react-router-dom"

const Navbar = () => {
    const [listNav] = useState([
        {
            name: 'Home',
            to: '/'
        },
        {
            name: 'Skills',
            to: '/skills'
        },
        {
            name: 'Projects',
            to: '/projects'
        },
        {
            name: 'Resources',
            to: '/resources'
        },
        {
            name: 'About me',
            to: '/aboutme'
        }
    ])

    // to get the current route
    const location = useLocation()

    // for hamburger menu for mobile
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
    }

    return (
        <header>
            {/* Logo */}
            <div className="logo">
                <a href="/"><img src="/icons/name-logo.svg" style={{ width: "50px", height: "50px" }} alt="logo" /></a>
            </div>

            {/* Navigation Links */}
            <nav className={`nav-links ${isMobileMenuOpen ? "open" : ""}`}>
                {
                    listNav.map((value, index) => {
                        const isActive = location.pathname === value.to
                        return (
                            <Link key={index} to={value.to} className={isActive ? "active" : ""}>
                                <span>{value.name}</span>
                            </Link>
                        )
                    })
                }
            </nav>

            {/* Hamburger Icon */}
            <div className="hamburger" onClick={toggleMobileMenu}>
                <div className="line"></div>
                <div className="line"></div>
                <div className="line"></div>
            </div>

            {/* Close Button (X) */}
            {isMobileMenuOpen && (
                <button className="close-button" onClick={toggleMobileMenu}>
                    <img src="/icons/cross.svg" alt="close" width={20} height={20} />
                </button>
            )}
        </header>
    )
}


export default Navbar