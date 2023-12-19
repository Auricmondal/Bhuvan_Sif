'use client'
import Image from 'next/image'
import { useRouter } from 'next/navigation'
import React from 'react'

const Input = ({
    placeholder,
    action,
    icon,
    iconpos,
    iconSize,
    bgcol
}) => {
    const router= useRouter();
  return (
    <label className='relative w-full  '>
        {iconpos=='b' && <Image className='absolute left-4 top-0' src={icon} width={iconSize} height={iconSize} onClick={()=>{router.push(action)}}/> }
        <input className={`${bgcol?bgcol:'bg-white'} w-full p-4 shadow-xl rounded-md outline-none active:bg-slate-200`} type="text" placeholder={placeholder}/>
        {iconpos=='a' && <Image className='absolute right-4 top-0' src={icon} width={iconSize} height={iconSize} onClick={()=>{router.push(action)}}/> }
    </label>
  )
}

export default Input