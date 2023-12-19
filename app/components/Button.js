'use client'
import Image from 'next/image';
import { useRouter } from 'next/navigation'
import React from 'react'


const Button = ({
  label,
  action,
  size,
  bg,
  color,
  icon,
  iconpos,
  rotate,
  btnSize
}) => {
  const router = useRouter();
  return (
    <button
      className={`
        ${bg}
        ${color}
        ${size=='small'? 'w-auto h-[33px] p-2':size='md'?'p-4 h-[32px] md:h-auto':''}
        font-bold
        rounded-sm
        flex
        items-center
        justify-center
        gap-1
      `}
     onClick={() => router.push(action)}
    >
      {iconpos=='b' && <Image className={rotate} src={icon} width={btnSize} height={btnSize}/> }
      {label}
      {iconpos=='a' && <Image className={rotate} src={icon} width={btnSize} height={btnSize}/> }
    </button>
  )
}

export default Button