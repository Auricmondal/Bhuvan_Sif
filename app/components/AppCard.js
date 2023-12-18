import React from 'react';

const AppCard = () => {
  return (
    <div className='bg-black h-[1265px] md:h-[508px] flex items-center'>
      <div className='h-[1161px] md:h-[396px] w-[1150px] mx-48 flex-auto text-white text-[40px] md:text-[48px] font-extrabold'>
        Application Center
        <div className='flex space-x-5 mt-1'>
          <div className='bg-blue-600 h-[320px] md:h-[320px] w-[320px]'>
            <div className='h-[320px] md:h-[190px] w-[265px] place-content-center text-center mt-16 ml-6'>
              <div className='text-white text-[48px] md:text-[48px] font-bold'>
                Agriculture
              </div>
              <div className='flex items-center mt-20 text-white text-[15.28px] md:text-[15.28px] font-medium text-center'>
                View the agriculture related applications and its resources
              </div>
            </div>
          </div>
          <div className='bg-blue-600 h-[320px] md:h-[320px] w-[320px]'>
            <div className='h-[320px] md:h-[190px] w-[265px] place-content-center text-center mt-16 ml-6'>
              <div className='text-white text-[48px] md:text-[48px] font-bold'>
                Tourism
              </div>
              <div className='flex items-center mt-20 text-white text-[15.28px] md:text-[15.28px] font-medium text-center'>
                View the tourism related applications and its resources
              </div>
            </div>
          </div>
          <div className='bg-blue-600 h-[320px] md:h-[320px] w-[320px]'>
            <div className='h-[320px] md:h-[190px] w-[265px] place-content-center text-center mt-16 ml-6'>
              <div className='text-white text-[48px] md:text-[48px] font-bold'>
                Forestry
              </div>
              <div className='flex items-center mt-20 text-white text-[15.28px] md:text-[15.28px] font-medium text-center'>
                View the forestry related applications and its resources
              </div>
            </div>
          </div>
          <div className='bg-[#A1160A] h-[60px] md:h-[60px] w-[112px] md:w-[112px] my-28 flex place-content-center items-center text-white text-[16px] md:text-[16px] font-bold'>
            Explore
          </div>
        </div>
      </div>
    </div>
  );
};

export default AppCard;
