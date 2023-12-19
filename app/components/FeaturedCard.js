'use client'
import { useRouter } from 'next/navigation'
import React from 'react'
const FeaturedCard = ({
    label,
    imageUrl,
    type,
    action
}) => {
    const router =useRouter();
  return (

        <div 
        className={`
         ${imageUrl}
         bg-cover
         ${type=='2r2c'? 'md:col-span-2 row-span-2':type=='2r'?'row-span-2':''}
         text-center
         min-h-[190px]
         flex
         items-center
         justify-center
         shadow-lg 
         relative
         cursor-pointer
         `}
         onClick={()=>{router.push(action)}}
         >
            <div className='absolute opacity-40 bg-black h-full w-full'></div>
                <p className='z-10 text-white font-bold text-4xl text-center'>{label}</p>
            </div>
        
    

  )
}

export default FeaturedCard
