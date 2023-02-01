import Image from 'next/image'
import React from 'react'

const Portfolio = () => {
  return (
    <div className='max-w-[1240px] mx-auto py-16 text-center'>
        <h1 className='text-2xl font-bold p-4'>Beautiful Photos</h1>
        <div className='grid grid-rows-none md:grid-cols-5 p-4 gap-4'>
            <div className='w-full h-full col-span-2 md:col-span-3 row-span-2'>
                <Image className='mx-auto' src='https://images.unsplash.com/photo-1593097220896-3d599e7cac7e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80' 
                width={677}
                height={451}
                alt='/'
                />
            </div>
            <div className='w-full h-full'>
                <Image className='mx-auto' src='https://images.unsplash.com/photo-1571702080583-f1e2746f3d0d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80'
                width={315}
                height={217}
                />
            </div>
            <div className='w-full h-full'>
                <Image className='mx-auto' src='https://images.unsplash.com/photo-1572186305383-484a525fdd38?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80'
                width={315}
                height={217}
                />
            </div>
            <div className='w-full h-full'>
                <Image className='mx-auto' src='https://images.unsplash.com/flagged/photo-1554998383-0aad9e0ec470?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80'
                width={315}
                height={217}
                />
            </div>
            <div className='w-full h-full'>
                <Image className='mx-auto' src='https://images.unsplash.com/photo-1551041777-575d3855ca71?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80'
                width={315}
                height={217}
                />
            </div>
        </div>
    </div>
  )
}

export default Portfolio