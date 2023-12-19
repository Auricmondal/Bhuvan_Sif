'use Client'
import useDropdown from '@/app/hooks/useDropdown';
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
    const {isOpen,onClose,onOpen}= useDropdown();
    const handlClick=()=>{
      if(label=='Solution')
        {
          if(isOpen)
            onClose()
        onOpen()
      }
      if(isOpen)
      onClose()

      router.push(action)

    }
  return (
    <li
        onClick={handlClick}
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