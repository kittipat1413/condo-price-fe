import React, {useState} from 'react'
import {GiHamburgerMenu} from 'react-icons/gi'
import {FaRegTimesCircle} from 'react-icons/fa'
import {BsBuilding} from 'react-icons/bs'

import './Navbar.css'

const Navbar = () => {

    const[click, setClick] = useState(false)
    const handleClick = () => setClick(!click)

    return (
        <div className='navbar'>
            <div className='container'>
                <h1><span><BsBuilding />Condo</span>ForSale</h1>
                <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                    <li><a href='#'>Home</a></li>
                    <li><a href='#'>Search</a></li>
                    <li><a href='#'>About</a></li>
                    <li><a href='#'>Contact</a></li>
                </ul>
                <div className='hamburger' onClick={handleClick}>
                    {click ? (<FaRegTimesCircle className='icon' />) : (<GiHamburgerMenu className='icon' />)}
                
                </div>
            </div>
        </div>
    )
}

export default Navbar