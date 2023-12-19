'use client'
import Image from 'next/image';
import { useRouter } from 'next/navigation'
import React from 'react'
import useHamMenu from '../hooks/useHamMenu';


const Button = ({
  label,
  action,
  size,
  bg,
  color,
  icon,
  iconpos,
  rotate,
  btnSize,
  rounded,
  align,
  width,
  type,key
}) => {
  const router = useRouter();
  const {isOpen,onClose,onOpen}= useHamMenu();
    const handlClick=()=>{
      if(type=='ham')
        {
          if(isOpen)
            onClose()
        onOpen()
      }
      if(isOpen)
      onClose()
      if(action)
      router.push(action)

    }

  return (
    <button
    key={key?key:''}
      className={`
        ${bg}
        ${color}
        ${size=='small'? 'w-auto h-[33px] p-2':size=='md'?'p-4 h-[32px] md:h-auto':size=='lg'?'text-lg py-4 px-8':'p-4'}
        font-bold
        ${rounded?rounded:'rounded-sm'}
        flex
        ${width}
        items-center
        ${align=='left'?'justify-between':'justify-center'}
        gap-1
      `}
     onClick={handlClick}
    >
      {iconpos=='b' && <Image className={rotate} src={icon} width={btnSize} height={btnSize}/> }
      {label}
      {iconpos=='a' && <Image className={rotate} src={icon} width={btnSize} height={btnSize}/> }
    </button>
  )
}

export default Button