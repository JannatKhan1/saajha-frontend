import React from 'react'
import {Link, NavLink} from 'react-router-dom'
import '../index.css'

export const Navbar = ({ scrollToHome, scrollToAbout, scrollToContact }) => {
  return (
    <nav>
            <Link to='/' className='nav-title' onClick={scrollToHome}>
                Saajha
            </Link>
                    <NavLink to='/About' onClick={scrollToAbout}>About</NavLink>
                    <NavLink to='/NGOs'>NGOs</NavLink>
                    <NavLink to='/FAQs'>FAQs</NavLink>
                    <NavLink to='/ContactUs' onClick={scrollToContact}>Contact Us</NavLink>
                    <NavLink to='/LoginSignup'>Login/SignUp</NavLink>
    </nav>
  )
}