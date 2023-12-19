import React from 'react'

const GridSystem = ({children}) => {
  return (
    <div
        className='
        grid
        gap-4
        grid-rows-6
        md:grid-rows-3
        lg:grid-rows-2
        lg:grid-cols-4
        '
    >
        {children}
    </div>
  )
}

export default GridSystem