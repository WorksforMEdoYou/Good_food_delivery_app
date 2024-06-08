import React, { useContext } from 'react';
import image from './image.png';
import { Link } from 'react-router-dom';
import { StoreContext } from '../../Context/StoreContext';
const Navbar = ({setShowLogin}) => {
    const {getTotalCartAmount} = useContext(StoreContext);
  return (
    <div className='sticky top-0 z-10'>
    <div className='flex p-3 text-white-600 h-full w-full bg-green-200 rounded-md bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-10 border border-gray-100 gap-3 md:justify-between md:text-2xl lg:justify-between lg:text-2xl'>
        <div className='flex space-x-4 md:text-xl '>
            <div className='rounded-xxl'>
                <a href="/"><img src={image} alt="logo" height="100px" width="100px" /></a>
        </div>
    </div>
    <div className='mt-3 '>
    <div className='flex flex-col justify-center items-center gap-2'>
                <div className='flex justify-center cursor-pointer items-center md:gap-10 lg:gap-10 lg:text-wrap md:text-wrap'>
                    <ul className='list-none flex gap-2 '>
                        <li className='hover:text-green-500'><a href="/">Home</a></li>
                        <li className='hover:text-green-500'><a href="#explore-menu">menu</a></li>
                        <li className='hover:text-green-500'><a href="#daily-deals">daily-deals</a></li>
                        <li className='hover:text-green-500'><a href="#footer">Contact-Us</a></li>
                    </ul>
                </div> 
                <div className='flex justify-start w-full bg-white rounded-2xl p-2'>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6 text-green-400">
                        <path stroke-linecap="round" stroke-linejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
                    </svg>
                    {/* search icon */} 
                    <input type="text" placeholder='Search' className='bg-transparent outline-none w-full text-black-500 text-sm ml-3' />
                    <button className='font-poppin bg-transparent text-black-600 h-full text-sm ' >Search</button>
                </div>
            </div>
    </div>

      <div>
        <div className='flex  flex-col justify-center items-center gap-2 md:flex-row md:mt-5 md:gap-3 md:justify-end lg:flex-row lg:mt-5 lg:justify-end lg:gap-3'>
            <div className='flex relative flex-row'>
                <Link to='/cart'>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-10">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 10.5V6a3.75 3.75 0 1 0-7.5 0v4.5m11.356-1.993 1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 0 1-1.12-1.243l1.264-12A1.125 1.125 0 0 1 5.513 7.5h12.974c.576 0 1.059.435 1.119 1.007ZM8.625 10.5a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm7.5 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z" />
                </svg>
                </Link>
                {/* shoppig bag */}
                <div className={getTotalCartAmount()===0 ?'' : 'bg-red-600 text-white rounded-full absolute top-0 left-8 text-center md:lg:h-full'}></div>
                {/* red colored count */}
            </div>
            <button onClick={()=>setShowLogin(true)} className='bg-green-400 p-3 text-white text-sm rounded-3xl md:text-xl'>Sign in / Login</button>
        </div>
      </div>
    </div>
    </div>
  )
}

export default Navbar
