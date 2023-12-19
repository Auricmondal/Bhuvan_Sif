import React from 'react'

const InnerSection= ({children}) => {
  return (
    <div 
    className='
    pt-8
    pb-4
    lg:pt-12
    lg:pb-6
    '>
        {children}
    </div>
  )
}

export default InnerSection