import React, {useState} from 'react'
import {Link, NavLink} from 'react-router-dom'
import '../index.css'

export const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false)
  return (
    <nav>
        <Link to='/' className='nav-title'>
            Saajha
        </Link>
        <div className='menu' onClick={()=>{
            setMenuOpen(!menuOpen);
        }}>
            <span></span>
            <span></span>
            <span></span>
        </div>
        <ul className={menuOpen ? 'open' : ''}>
            <li>
                <NavLink to=''>About</NavLink>
            </li>
            <li>
                <NavLink to='/NGOs'>NGOs</NavLink>
            </li>
            {/* <li>
                <NavLink to='/Services'>Services</NavLink>
            </li> */}
            <li>
                <NavLink to='/FAQs'>FAQs</NavLink>
            </li>
            <li>
                <NavLink to='/LoginSignup'>Login/SignUp</NavLink>
            </li>
        </ul>
    </nav>
  )
}
