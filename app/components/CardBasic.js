'use client'
import { useRouter } from 'next/navigation'
import React from 'react'

const CardBasic = ({
  bg,
  label,
  action
}) => {
  const router = useRouter();
  return (
    <div 
    key={label}
    onClick={()=>{router.push(action)}} 
    className='max-w-[900px] flex flex-col h-[126px] justify-center items-center gap-2 bg-[#212121] rounded-lg shadow-lg cursor-pointer'>
    <div className={`h-[80%] ${bg} bg-cover bg-center w-full rounded-lg`}>
    </div>
    <h3 className='font-bold text-white mb-4'>{label}</h3>
    </div>
  )
}

export default CardBasic