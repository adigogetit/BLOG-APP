import React from 'react'
import { NavLink } from 'react-router-dom'
import { assets } from '../assets/assets'

const Navbar = () => {
  return (
    <div className='flex justify-between items-center py-5 mx-8 sm:mx-20 xl:mx-32 cursor-pointer'>
          <img src={assets.logo} alt="" className="w-20 h-20 object-contain" />
        <ul className="flex space-x-4">
            <NavLink to="/"> <li>HOME</li> </NavLink>
            <NavLink to="/about"> <li>ABOUT</li></NavLink>
            <NavLink to="/contact_us"> <li>CONTACT</li></NavLink>
        </ul>
      
    </div>
  )
}

export default Navbar
