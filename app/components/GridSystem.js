import React from 'react'

const GridSystem = ({
  children,
  type
}) => {
  return (
    <div
        className={`
        grid
        gap-4
        ${type=='featured'?'grid-rows-6 md:grid-rows-3 lg:grid-rows-2 lg:grid-cols-4':''}
        ${type=='application'?'md:grid-cols-2 lg:grid-cols-4':''}
        `}
    >
        {children}
    </div>
  )
}

export default GridSystem