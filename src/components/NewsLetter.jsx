import React from 'react'

const NewsLetter = () => {
  return (
    <div className='flex flex-col items-center justify-center space-y-2 my-32'>
      <h1 className='md:text-4xl text-2xl font-semibold'>Never Miss a Blog!!</h1>
      <p className='md:text-lg text-gray-800 pb-8'>Subscribe to get the lastest blog and tech news exclusive</p>
      <form className='flex items-center justify-between md:h-13 max-w-2xl h-12 w-full'>
        <input className='border border-gray-600 rounded-md h-full border-r-0 outline-none w-full rounded-r-none px-3 text-gray-700' type='text'
        placeholder='Enter the text ' required/>
        <button type='submit' className='md:px-12 px-8 h-full text-white bg-primary/90 hover:bg-primary transition all cursor-pointer rounded-ms rounded-1-none'>Subscribe!</button>
      </form>
    </div>
  )
}

export default NewsLetter
