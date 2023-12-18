import { useRouter } from 'next/navigation'
import React from 'react'


const Button = ({
  label,
  action,
  size,
  bg,
  color
}) => {
  const router = useRouter();
  return (
    <button
      className={`
        ${bg}
        ${color}
        ${size=='small'? 'w-[82px] h-[33px]':''}
        font-bold
        rounded-sm
      `}
     onClick={() => router.push(action)}
    >
      {label}
    </button>
  )
}

export default Button