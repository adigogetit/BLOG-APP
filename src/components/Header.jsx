import React from 'react'
import { assets } from '../assets/assets'

const Header = () => {
  return (
    <div className='mx-8 sm:mx-16 xl:mx-24 relative'>
    
      <div className='text-center mt-20 mb-8'>
        

        <div className='inline-flex justify-center items-center gap-4 px-6 py-1.5 mb-4 border border-primary/40 bg-primary/10 rounded-4xl text-sm text-primary'>

            <p> New-AI Feature Integrated</p>
            <img src={assets.star_icon} alt="" className='w-2.5' />
        </div>
 
        <div>

          <h1 className='text-3xl sm:text-6xl font-semibold sm:leading-16 text-gray-900'> Your Own <span className='text-primary'>Blogging</span><br/>Platfrom</h1>
          <p className='my-6 sm:my-8 max-w-2xl m-auto max-sm:text-xs text-gray-800'>joo karna hai karo yaha par yeah tumari jaga hai and isko tumse koi lee nahi sakta hai this is your place man do it what you want </p>

          <form className='flex justify-between max-w-lg max-sm:scale-75 mx-auto border border-gray-400 bg-white rounded overflow-hidden  '>

            <input className='w-full pl-4 ' type="text" placeholder='Search Here!!' />
            <button className="bg-primary text-white px-8 py-2 m-0.3 hover:scale-105 cursor-pointer" type="submit">Search</button>

          </form>

        </div>
        

      </div>

      <img src={assets.gradientBackground} alt="" className='absolute -top-50 -z-1 opacity-60' />
    </div>
  )
}

export default Header
