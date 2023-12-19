import React from 'react'

const Latest = () => {
  return (
    <div className='bg-white h-[56px] py-[124] flex items-center'>
      <div className='bg-[#A1160A] h-full w-[280px] md:w-[250px] text-sm sm:text-[16px] px-2 sm:pl-8 md:pl-16 flex items-center text-white font-medium' >
        <p>Latest Update</p>
      </div>
      <div className='pl-4 w-full font-semibold overflow-hidden'>
        <div className='scrolling-text'>
        First census of water bodies under the Scheme Irrigation Census
        </div>
      </div>
    </div>
  )
}

export default Latest