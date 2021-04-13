import React, {useState} from 'react'
import {Link} from 'react-router-dom'

const Navbar = () => {
    const [click, setClick] = useState(false);
    const handleClick = ()=> setClick(!click);
    const closeMobileMenu = ()=> setClick(false);
    return (
        <>

        <div className="navbar">
            <div className="navbar-container">
                <Link to='/' className="navbar-logo">
                    kingmuffy <i className="fab fa-typo3"/>
                     </Link>
                <div className='menu-icon' onClick={handleClick}>
                    <i className={click ? 'fas fa-times' : 'fas fa-bars'} />

                </div>
                <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                <li className='nav-item'>
                <Link to='/' className='nav-links' onClick={closeMobileMenu}>
                    Home
                </Link>

                </li>
                <li className='nav-item'>
                <Link to='/services' className='nav-links' onClick={closeMobileMenu}>
                    services
                </Link>

                </li>
                <li className='nav-item'>
                <Link to='/project' className='nav-links' onClick={closeMobileMenu}>
                    Project
                </Link>

                </li>
                <li className='nav-item'>
                <Link to='/' className='nav-links-mobile' onClick={closeMobileMenu}>
                    contact me
                </Link>

                </li>
                </ul>

            </div>

        </div>
        

            
        </>
    )
}

export default Navbar
