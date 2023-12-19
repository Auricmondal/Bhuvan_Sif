'use Client'
import Image from 'next/image';
import { useRouter } from 'next/navigation'
import React from 'react'


const NavLinks = ({
    label,
    action,
    icon,
    iconpos,
    rotate,
    size,
    color,
    fw
}) => {
    const router = useRouter();
  return (
    <li
        onClick={()=>{router.push(action)}}
        className={`
        ${color}
        flex
        gap-1
        items-center
        cursor-pointer
        ${fw}
        `}
    >
        {iconpos=='b' && <Image className={rotate} src={icon} width={size} height={size}/> }
        {label}
        {iconpos=='a' && <Image className={rotate} src={icon} width={size} height={size} /> }
    </li>
  )
}

export default NavLinks