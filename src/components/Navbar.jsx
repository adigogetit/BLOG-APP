import React from 'react'
import { NavLink } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className='navbar'>
        <ul>
            <NavLink to="/"> <li>HOME</li> </NavLink>
            <NavLink to="/about"> <li>ABOUT</li></NavLink>
        </ul>
      
    </div>
  )
}

export default Navbar
