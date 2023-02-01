import React from 'react'
import img1 from '../public/img1.jpg'
import img2 from '../public/img2.jpg'
import img3 from '../public/img3.jpg'
import img4 from '../public/img4.jpg'
import img5 from '../public/img5.jpg'
import img6 from '../public/img6.jpg'
import Instagramlmg from './Instagramlmg'

const Instagram = () => {

    const imgs =[img1,img2,img3,img4,img5,img6];
  return (
    <div className='max-w-[1240px] mx-auto text-center py-24'>
        <p className='text-2xl font-bold'>Follow me on Instagram</p>
        <p className='pb-4'>@Captur</p>
        <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-2 p-4'>
            {imgs.map((index) => (
            <Instagramlmg socialImg ={index}/>
            ))}
        </div>
    </div>
  )
}

export default Instagram