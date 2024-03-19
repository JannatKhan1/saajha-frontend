import React from 'react'
import {Link, NavLink} from 'react-router-dom'
import '../index.css'

export const Navbar = ({ scrollToHome, scrollToAbout, scrollToContact }) => {
  return (
    <nav>
            <Link to='/' className='nav-title' onClick={scrollToHome}>
                Saajha
            </Link>
            <ul>
                <li>
                    <NavLink to='/About' onClick={scrollToAbout}>About</NavLink>
                </li>
                <li>
                    <NavLink to='/NGOs'>NGOs</NavLink>
                </li>
                <li>
                    <NavLink to='/FAQs'>FAQs</NavLink>
                </li>
                <li>
                    <NavLink to='/ContactUs' onClick={scrollToContact}>Contact Us</NavLink>
                </li>    
                <li>
                    <NavLink to='/LoginSignup'>Login/SignUp</NavLink>
                </li>
                </ul>
    </nav>
  )
}