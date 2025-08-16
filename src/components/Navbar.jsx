import React from 'react'
import { NavLink } from 'react-router-dom'
import { assets } from '../assets/assets'

const Navbar = () => {
  return (
    <div>

    <div className='flex justify-between items-center py-5  mx-4 sm:mx-20 xl:mx-32  cursor-pointer'>

      <NavLink to="/">
        <img src={assets.logo} alt="AI-B logo" className="w-40  object-contain" />
      </NavLink>

        <NavLink to="/admin">
          <button className='flex items-center gap-2 rounded-full text-xl cursor-pointer bg-primary text-white px-7 py-3'>
            Login
            <img src={assets.arrow} alt="arrow" className='w-3' />
          </button>
        </NavLink>

    </div>



    <div>
        <ul /*className="flex space-x-15 font-bold"*/>
            <NavLink to="/"> <li></li> </NavLink>
            {/* <NavLink to="/about"> <li>ABOUT</li></NavLink> */}
            <NavLink to="/admin"> <li></li></NavLink>
        </ul>
    </div>

    </div>
    

   
  )
}

export default Navbar
