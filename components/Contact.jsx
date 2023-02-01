import React from 'react'

const Contact = () => {
  return (
    <div className='max-w-[1240px] m-auto p-4 h-full'>
        <h1 className='text-2xl font-bold text-center p-4'>Let's work together</h1>
        <form className='max-w-[600px] m-auto pb-16'>
            <div className='grid grid-cols-2 gap-2'>
                <input className='border shadow-lg p-3' type="text" required placeholder='Name'/>
                <input className='border shadow-lg p-3' type="email" required placeholder='Email' />
            </div>
            <input className='border shadow-lg p-3 w-full my-2' type="text" placeholder='Subject' />
            <textarea required className='border shadow-lg p-3 w-full resize-none' cols="30" rows="10" placeholder='Message'></textarea>
            <button className='border w-full shadow-lg p-3 mt-2'>Submit</button>
        </form>
    </div>
  )
}

export default Contact