import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import Logo from '../../Assets/IMGS/logo.png'
import { menuData } from '../../Data'
import './Navbar.css'


const Navbar = () => {
    const [Click, setClick] = useState(false)
    const handleClick = () => setClick(!Click)
    const closeMobileMenu = () => setClick(false);

    return (
        <>
            <nav className="Navbar">
                <div className="NavbarContainer">
                    <Link to="/" className="NavbarLogo">
                        <img src={Logo} alt="Logo" />
                        <span>Jenga</span>
                    </Link>
                    <div className="SearchBar">
                        <input type="text" placeholder="Search" />
                        <button className='search' >Search</button>
                    </div>
                    <div className="MenuIcon">
                        <i className={Click ? 'fas fa-times' : 'fas fa-bars'} onClick={handleClick} />
                    </div>
                    <ul className={Click ? 'NavbarMenu active' : 'NavbarMenu'}>
                        {menuData.map((item, index) => {
                            return (
                                <li className='NavItem'>
                                    <Link to={item.link} className='NavLinks' onClick={closeMobileMenu} />
                                    {item.title}
                                </li>
                            )
                        })}
                    </ul>
                </div>
            </nav>
        </>
    );
}

export default Navbar