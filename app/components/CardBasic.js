
import React from 'react'

const CardBasic = () => {
  return (
    <div className='max-w-[900px] flex flex-col h-[126px] justify-center items-center gap-2 bg-[#212121] rounded-lg shadow-lg'>
    <div className={`h-[80%] bg-[url('/assets/images/agriculture.jpg')] bg-cover bg-center w-full rounded-lg`}>
    </div>
    <h3 className='font-bold text-white mb-4'>Thematic Services</h3>
    </div>
  )
}

export default CardBasic