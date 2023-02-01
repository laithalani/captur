import React from 'react'
import Image from 'next/image'
import { FaInstagram } from 'react-icons/fa'

const Instagramlmg = ({socialImg}) => {
  return (
    <div className='relative'>
        <Image src={socialImg} alt='/' className='w-full h-full' layout='responsive'/>
        <div className='group flex justify-center items-center absolute top-0 left-0 right-0 bottom-0 hover:bg-black/50'>
        <p className='text-gray-300 hidden group-hover:block'><FaInstagram size={30}/></p>
        </div>
    </div>
  )
}

export default Instagramlmg