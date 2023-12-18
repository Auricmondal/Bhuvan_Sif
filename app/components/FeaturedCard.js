import React from 'react'
import Image from 'next/image'
const FeaturedCard = () => {
  return (
    <div>
        <div className=' py-4 text-center md:text-left md:ml-12 font-extrabold text-5xl'>Featured</div>

        <div className=' bg-white ml-5 md:ml-9 md:h-[1150] md:flex items-center'>
            <div className=' bg-red-400 mb-4 ml-4 h-[390px] md:h-[390px] w-[420px] md:w-[720px] place-content-center flex-row items-center rounded-md overflow-hidden shadow-lg text-black'>
                <p className=' mt-40 md:mt-44 font-bold text-4xl text-center mb-2'>Map</p>
            </div>
            
            <div className=' bg-red-400 mb-4 ml-4 h-[398px] md:h-[390px] w-[420px] md:w-[310px] place-content-center flex-row items-center rounded-md overflow-hidden shadow-lg text-black'>
                <p className=' mt-40 md:mt-44 font-bold text-4xl text-center mb-2'>Weather</p>
            </div>
            <div className=' flex-row'>
                <div className=' bg-red-400 md:mb-2 md:mr-9 mb-4 ml-4 h-[196px] md:h-[190px] w-[420px] md:w-[370px] place-content-start flex-col items-center rounded-md overflow-hidden shadow-lg text-black'>
                    <p className=' mt-20 md:mt-20 font-bold text-4xl text-center mb-2'>Data Archives</p>
                </div>
                <div className=' bg-red-400 md:mr-9 mb-4 ml-4 h-[203px] md:h-[190px] w-[420px] md:w-[370px] place-content-center flex-col items-center rounded-md overflow-hidden shadow-lg text-black'>
                <p className=' mt-20 md:mt-16 font-bold text-4xl text-center mb-2'>Vista</p>
                </div>
            </div>
        </div>
    </div>
    
  )
}

export default FeaturedCard