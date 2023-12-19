import React from 'react'

const AppCard = ({
  label,
description,
bgImg,
action
}) => {
  return (
      <div 
      className={`
      ${bgImg}
      bg-cover
      h-[320px] 
      md:h-[320px] 
      max-w-[900px]
      flex
      items-center
      justify-center
      relative
      `}>
        <div className='absolute  opacity-40 bg-black h-full w-full'></div>
          <div className='z-20 text-center p-2'> 
            <h3 className=' text-white text-[32px] font-bold'>
              {label}
            </h3>
            <div className='flex items-center mt-20 text-white text-[15.28px] md:text-[15.28px] font-medium text-center'>
              {description}
            </div>
           </div>
        </div>
  )
}

export default AppCard