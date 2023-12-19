import React from 'react'

const Footer = () => {
  return (
    <div>
      <div className=' md:h-[700px] bg-black md:flex relative md:justify-items-start'>

        {/* Describing the links */}
        <div className=' md:w-1/2 md:left-0 md:grid md:mt-16 mb-12 md:mb-12 mx-16 md:mx-20 justify-center md:justify-center'>
          <p className=' text-white  text-center pt-5 md:pt-0 md:text-left  '>Useful Links</p>
          <hr className='mb-2'/>
          <p className='text-white -mt-0.5 font-normal md:text-lg text-center md:text-left'>Discussion Forums</p>
          <p className='text-white font-normal md:text-lg text-center md:text-left'>Terms and Conditions</p>
          <p className='text-white font-normal md:text-lg text-center md:text-left'>Bhuvan User Handbooks</p>

          <br />

          <p className=' text-white  text-center md:text-left '>Downloads</p>
          <hr className='mb-2'/>
          <p className='text-white md:mt-1 font-normal md:text-lg text-center md:text-left'>Mobile Bhuvan</p>
          <p className='text-white font-normal md:text-lg text-center md:text-left'> Point of Interest V2.0 Android App</p>
          <p className='text-white font-normal md:text-lg text-center md:text-left'>Bhuvan Locate Android App</p>

          <br />

          <p className=' text-white  text-center md:text-left '>Web Information Manager Links</p>
          <hr className='mb-2'/>
          <p className='text-white md:mt-1 font-normal md:text-md text-center md:text-left'>Bhuvan Geo Portal & Web Services Group(BGWSG) National Remote Censing Centre Indian Space Research Organization of</p>
          <p className='text-white font-normal text-center md:text-lg md:text-left'>Government of India, Hyderabad - 500 037, INDIA</p>
          <p className='text-white font-normal text-center md:text-lg md:text-left'>E-mail: bhuvan@nrsc.gov.in</p>
          <p className='text-white font-normal text-center md:text-lg md:text-left'>Phone: +91-40-2388 4588/89</p>
        </div>

        {/* Space of map refernce */}
        <div className=' md:h-full md:w-1/2 md:right-0 pb-12 md:grid md:-mb-2 ml-10 mr-10 md:mr-20'>
          <p className=' text-white tracking-normal font-bold text-4xl md:mt-14 mb-8 md:mb-0 text-center md:text-left'>Satellite Map</p>
            <div id="map" className="-mt-6 h-[150px] md:h-[540px] md:mt-2 relative overflow-hidden border border-white text-white rounded-lg">
              <iframe
                width="100%"
                height="540px"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d487590.4103947137!2d78.04575705250217!3d17.301064695181328!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb9b8c7ca520bb%3A0x9bf9b84d93759396!2sNRSC%20ISRO!5e0!3m2!1sen!2sin!4v1703012784059!5m2!1sen!2sin"
                frameBorder="0"
                allowFullScreen=""
                aria-hidden="false"
                tabIndex="0">
              </iframe>
            </div>
        </div>
      </div>


      {/* Bottom footer */}
      <div className=' bg-[#141414] text-white gap-1 flex flex-col sm:flex-row justify-between items-center px-4 md:px-16 py-4'>
        
          <p className=' text-sm  md:text-left'>&#169; Bhuvan: ISRO/NRSC, 2023</p>
          <p className='text-sm  text-center'>Last Updated: Tuesday, 19-12-2023 13:47</p>
        
      </div>
    </div>
  )
};

export default Footer