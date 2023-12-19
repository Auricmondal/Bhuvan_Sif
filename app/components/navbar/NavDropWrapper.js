'use client'
import useDropdown from '@/app/hooks/useDropdown'
import React from 'react'

const NavDropWrapper = ({
    children
}) => {
  const dropdown = useDropdown();
  return (
    <div
    className={`
        ${dropdown.isOpen?'translate-y-0':'translate-y-[-100%]'}
        ${dropdown.isOpen?'opacity-100':'opacity-0'}
        p-8
        bg-black
        fixed
        top-[80px]
        z-40
        w-[500px]
        left-[50%]
        ml-[-250px]
        hidden
        md:grid
        grid-cols-2
        gap-4
    `}
    >
        {children}
    </div>
  )
}

export default NavDropWrapper