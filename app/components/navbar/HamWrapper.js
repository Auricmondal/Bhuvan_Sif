'use client'
import useHamMenu from '@/app/hooks/useHamMenu'
import React from 'react'

const HamWrapper = ({children}) => {
    const hammenu= useHamMenu();
  return (
    <div
    className={`
        w-full
        py-8
        px-4
        overscroll-y-auto
        h-full
        bg-black
        fixed
        top-0
        left-0
        z-50
        ${hammenu.isOpen?'translate-y-0':'translate-y-[-100%]'}
        ${hammenu.isOpen?'opacity-100':'opacity-0'}
    `}
    >
        {children}
    </div>
  )
}

export default HamWrapper