import React, { useState} from 'react';
import { BsChevronCompactLeft, BsChevronCompactRight } from 'react-icons/bs';
import {RxDotFilled} from 'react-icons/rx'

const Featured = () => {
  
    const sliders = [
        {
            url: 'https://res.cloudinary.com/ehizeex-shop/image/upload/v1672672076/NetflixApp/burger_emxbtv.jpg'
          },
          {
            url: 'https://images.unsplash.com/photo-1588315029754-2dd089d39a1a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8cGl6emF8ZW58MHwwfDB8fHww&auto=format&fit=crop&w=500&q=60'
          },
          {
            url: 'https://images.unsplash.com/photo-1605291535356-3ff47e120bc4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDJ8fHxlbnwwfHx8fHw%3D&auto=format&fit=crop&w=500&q=60',
          },
    ]
    const [currentIndex, setCurrentIndex] = useState(0);

    const prevSlider = () => {
        const isFirstSlide = currentIndex === 0
        const newIndex = isFirstSlide ? sliders.length -1 : currentIndex -1
        setCurrentIndex(newIndex)
    }

    const nextSlider = () => {
        const isLastIndex = currentIndex === sliders.length -1
        const newIndex = isLastIndex ? 0: currentIndex +1 
        setCurrentIndex(newIndex)
    }

    const moveToNextSlide = (slideIndex) => {
        setCurrentIndex(slideIndex)
    }
  return (
    <div className='max-w-[1520px] h-[500px] w-full py-4 px-4 relative group'>
       <div className='w-full h-full rounded-2xl bg-center bg-cover duration-500 '
       style= {{backgroundImage:`url(${sliders[currentIndex].url})`}}
       ></div>
       <div className='hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] left-5 text-2xl rounded-full p-2 bg-orange-700 text-white cursor-pointer'>
        <BsChevronCompactLeft onClick={prevSlider}/>
       </div>
       <div className='hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] right-5 text-2xl rounded-full p-2 bg-orange-700 text-white cursor-pointer'>
        <BsChevronCompactRight onClick={nextSlider}/>
       </div>
       <div className='flex top-4 justify-center py-4'>
        {
            sliders.map((sliderItems, slideIndex)=>(
                <div
                key={slideIndex}
                onClick={()=>moveToNextSlide(slideIndex) }
                 className='text-2xl cursor-pointer'>
                    <RxDotFilled/>
                </div>
            ))
        }
       </div>
    </div>
  )
}

export default Featured
