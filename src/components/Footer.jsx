import React from 'react'
import { assets, footer_data } from '../assets/assets'
import { div, li } from 'motion/react-client'

const Footer = () => {
  return (
    <div className='px-4 md:px-16 lg:px-24 xl:px-32 bg-gray-100/50'>
      <div className='flex flex-col md:flex-row items-start justify-between gap-10 py-20 border-b border-gray-600 text-gray-700'>

        <div>
            <img src={assets.logo} alt="logo" className='w-22 sm:w-44' />
            <p className='mt-6 max-w-[410px]'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Modi nobis quisquam aliquid, itaque voluptatem in?
            </p>
        </div>

        <div className='flex flex-wrap justify-evenly w-full md:1/2 gap-5'>
            {footer_data.map((section,index)=>(
                <div key={index} >
                    <h3 className='font-semibold text-base text-gray-600 md-2 md:md-5'>{section.title}</h3>
                    <ul className='text-sm space-y-1'>
                        {section.links.map((link,i)=>(
                            <li key={i}>
                                <a href="#" className='hover:underline transition'>{link}</a>
                            </li>
                        ))}
                    </ul>
                </div>
            ))}

        </div>

      </div>
      <p className='py-4 text-gray-700 text-center text-sm ms:text-base'>
        Copyright 2025 @ AI-B - AlL RIGHTS RESERVED!!
      </p>
    </div>
  )
}

export default Footer
