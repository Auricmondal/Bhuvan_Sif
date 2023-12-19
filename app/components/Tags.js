import React from 'react'

const Tags = ({
  label,
  borerColor
}) => {
  return (
    <span
     className={`
      border-2
      ${borerColor}
      inline-block
      w-auto
      py-2
      px-4
      uppercase
      rounded-md
     `}
    >
      {label}
      </span>
  )
}

export default Tags