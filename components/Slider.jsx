import React, { useState } from 'react'
import { SliderData } from './SliderData'
import Image from 'next/image'
import {HiArrowCircleLeft, HiArrowCircleRight} from 'react-icons/hi'

const Slider = ({slides}) => {

    const [current, setCurrent] = useState(0)
    const length = slides.length

    const nextSlide = () => {
        setCurrent(current === length -1 ? 0 : current + 1)
    }
    const prevSlide = () => {
        setCurrent(current === 0 ? length - 1 : current - 1)
    }

    if (!Array.isArray(slides) || slides.length <= 0) {
        return null;
    }

  return (
    <div id='gallery' className='max-w-[1240px] mx-auto h-fit'>
        <h1 className='text-2xl font-bold text-center p-4'>Gallery</h1>
        <div className='relative flex justify-center p-4'>
            {SliderData.map((slide, index) => {
                return (
                    <div key={index} className={index === current ? 'opacity-[1] ease-in duration-500' : 'opacity-0'}>
                            <HiArrowCircleLeft onClick={prevSlide} className='absolute top-[50%] left-[30px] text-white/50 cursor-pointer select-none z-[2]' size={40}/>
                            
                            {index === current && (
                            <Image className='object-cover bg-auto w-[1440px] h-[600px]'
                            src={slide.image}
                            alt='/' 
                            width='1440'
                            height='600'
                            />
                            )}
                            <HiArrowCircleRight onClick={nextSlide} className='absolute top-[50%] right-[30px] text-white/50 cursor-pointer select-none z-[2]' size={40}/>
                        </div>
                );
            })}
        </div>
    </div>
  )
}

export default Slider