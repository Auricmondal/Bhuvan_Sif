import React from 'react'

const Footer = () => {
  return (
    <div>
      <div className=' bg-black md:flex relative md:justify-items-start'>

        {/* Describing the links */}
        <div className=' md:w-1/2 md:left-0 md:grid md:grid-rows-3 md:mt-16 mb-12 md:mb-12 mx-16 md:mx-20 justify-center md:justify-center'>
          <p className=' text-white font-bold text-2xl text-center md:mt-0 md:text-left '>Useful Links</p>
          <hr/>
          <p className='text-white -mt-1 md:-mt-6 font-normal md:text-xl text-center md:text-left'>Discussion Forums</p>
          <p className='text-white md:-mt-7 font-normal md:text-xl text-center md:text-left'>Terms and Conditions</p>
          <p className='text-white font-normal md:text-xl text-center md:text-left'>Bhuvan User Handbooks</p>

          <br />

          <p className=' text-white font-bold text-2xl text-center md:text-left'>Downloads</p>
          <hr/>
          <p className='text-white md:mt-1 font-normal md:text-xl text-center md:text-left'>Mobile Bhuvan</p>
          <p className='text-white font-normal md:text-xl text-center md:text-left'> Point of Interest V2.0 Android App</p>
          <p className='text-white font-normal md:text-xl text-center md:text-left'>Bhuvan Locate Android App</p>

          <br />

          <p className=' text-white font-bold text-2xl text-center md:text-left'>Web Information Manager Links</p>
          <hr/>
          <p className='text-white md:mt-1 font-normal md:text-xl text-center md:text-left'>Bhuvan Geo Portal & Web Services Group(BGWSG) National Remote Censing Centre Indian Space Research Organization of</p>
          <p className='text-white font-normal md:text-xl text-center md:text-left'>Government of India, Hyderabad - 500 037, INDIA</p>
          <p className='text-white font-normal md:text-xl text-center md:text-left'>E-mail: bhuvan@nrsc.gov.in</p>
          <p className='text-white font-normal md:text-xl text-center md:text-left'>Phone: +91-40-2388 4588/89</p>
        </div>

        {/* Space of map refernce */}
        <div className=' h-[200px] md:h-full md:w-1/2 md:right-0 md:grid md:mb-0 ml-10 mr-10 md:mr-20'>
          <p className=' text-white tracking-normal font-bold text-4xl md:mt-14 mb-8 md:mb-20 text-center md:text-left'>Satellite Map</p>
          
          {/* <div id="map" className="-mt-6 md:-mt-16 h-3/5 relative md:relative overflow-hidden border border-white text-white rounded-lg">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d54017.31553547189!2d76.34498859466238!3d32.20201507890016!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3905db27f502831b%3A0xc3c166f4c4b7e252!2sHimachal%20Pradesh%20Cricket%20Association%20Stadium%2C%20Dharamshala!5e0!3m2!1sen!2sin!4v1703000640353!5m2!1sen!2sin"
              width="100%"
              height="100%"
              frameborder="0"
              style="border:0"
              allowfullscreen
            ></iframe>
          </div> */}


          <div id="map" className=" -mt-6 md:-mt-16 h-3/5 relative md:relative overflow-hidden border border-white text-white rounded-lg">map</div>


        
          
          {/* <div id='map' className=' w-full h-3/5 md:h-1/2 -mt-5 md:-mt-60 md:mb-12 items-center box-border md:box-border border md:border rounded-lg md:rounded-lg'></div> */}
        </div>
      </div>


      {/* Bottom footer */}
      <div className=' bg-[#141414] grid-rows-2 md:flex md:h-[100px] md:justify-items-start'>
        <div className=' md:w-1/2 md:left md:grid ml-24 mx-20'>
          <p className=' text-white tracking-wide font-normal md:mt-9 text-xl md:text-2xl md:text-left'><b><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class=" mr-1 inline-block bi bi-c-circle" viewBox="0 0 16 16">
            <path d="M1 8a7 7 0 1 0 14 0A7 7 0 0 0 1 8Zm15 0A8 8 0 1 1 0 8a8 8 0 0 1 16 0ZM8.146 4.992c-1.212 0-1.927.92-1.927 2.502v1.06c0 1.571.703 2.462 1.927 2.462.979 0 1.641-.586 1.729-1.418h1.295v.093c-.1 1.448-1.354 2.467-3.03 2.467-2.091 0-3.269-1.336-3.269-3.603V7.482c0-2.261 1.201-3.638 3.27-3.638 1.681 0 2.935 1.054 3.029 2.572v.088H9.875c-.088-.879-.768-1.512-1.729-1.512Z"/>
          </svg></b>Bhuvan: ISRO/NRSC, 2023</p>
        </div>

        <div className=' md:w-1/2 md:right md:grid ml-10 md:ml-40 justify-center'>
          <p className=' text-white tracking-wide font-normal md:mt-9 text-xl md:text-2xl md:items-center'>Last Updated: Tuesday, 19-12-2023 13:47</p>
        </div>
      </div>
    </div>
  )
}

export default Footer