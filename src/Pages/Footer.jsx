import React from 'react'
import imagefile from './image.png'
import { assets } from '../assets/assets';
const Footer = () => {
  const currentYear  = () => {
    return new Date().getFullYear();
  }
  return (
    <div className='bg-green-300' id='footer'>
      <div className='flex flex-col text-warp flex-warp p-3 md:lg:flex-row justify-between items-center'>
          <div className='flex gap-2'>
            <div className='founded-full overflow-hidden'>
                <img src={imagefile} alt="" height="200px" width="200px"/>
            </div>
            <div className='flex flex-col gap-2 text-warp flex-wrap'>
              <h1 className='text-red-600 text-3xl'>Good Food</h1>
              <p className="text-red-300 ">Good Food is a restaurant that serves delicious food. We are located in the heart</p>
              <div className='flex flex-row gap-1'>
                  <img src={assets.app_store} alt="" height="100px" width="100px"/>
                  <img src={assets.play_store} alt="" height="100px" width="100px"/>
              </div>
            </div>  
          </div>
          <div className='text-xl flex-col justify-start mt-3 items-start text-center'>
              <h1 className='mb-3'>Contact Us</h1>
              <div className='gap-2 flex'>
              <a href="https://www.facebook.com/login.php/"><img src={assets.facebook_icon} alt="" /></a>
              <a href="https://x.com/"><img src={assets.twitter_icon} alt="" /></a>
              <a href="www.linkedin.com/in/rajesh-kumar-a83136233"><img src={assets.linkedin_icon} alt="" /></a>
              </div>       
          </div>
      </div>

      <h2 className='text-center font-bold text-xl font-poppins mb-3'>Our COMPANY</h2>
      <ul className='text-center list-none text-md text-white gap-2 font-poppins'>
        <li><a href="/">Home</a></li>
        <li>About Us</li>
        <li>Delevery</li>
        <li>Privacy Policy</li>
      </ul>
      <div>
        <hr size="2" className='mt-3'/>
        <div className='text-center text-md font-bold'>
          Copyright © {currentYear()}
        </div>
      </div>
    </div>
  )
}

export default Footer
