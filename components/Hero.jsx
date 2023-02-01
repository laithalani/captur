import React from 'react'

const Hero = ({heading, message}) => {
  return (
    <div id='home' className='flex items-center justify-center h-screen mb-12 bg-fixed bg-center bg-cover custom-img'>
        {/* {Overlay} */}
        <div className='bg-black/40 absolute top-0 left-0 right-0 bottom-0 z-[2]'/>
        <div className='z-[2] text-white p-5 mt-[-10rem]'>
            <h2 className='text-5xl font-bold'>{heading}</h2>
            <p className='py-5 text-lg'>{message}</p>
            <button className='px-8 py-2 border duration-200 hover:text-blue-500'>Book</button>
        </div>
    </div>
  )
}

export default Hero