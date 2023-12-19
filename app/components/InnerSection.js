import React from 'react'

const InnerSection=React.FC= ({children}) => {
  return (
    <div 
    className='
    py-8
    lg:py-12
    '>
        {children}
    </div>
  )
}

export default InnerSection