import React from 'react'

const Section= ({children}) => {
  return (
    <div 
    className='
    py-12 
    px-4 
    md:px-8 
    lg:px-16 
    lg:py-16
    '>
        {children}
    </div>
  )
}

export default Section