/* eslint-disable no-undef */
import React, { useState } from 'react'
import './Home.css'
import ExploreMenu from '../Components/ExploreMenu/ExploreMenu'
import FoodDiaplay from '../Components/FoodDisplay/FoodDiaplay'
import DailyDeals from './DailyDeals'


const Home = () => {
    const [name,Setname] = useState("Tradition is Healthy")
    function changeName(){
        const Text_Values = ["Food is medicene", "Eat Healthy Work Healthy", "Food For Life", "Food to Happy", "Health is important", "Health is Wealth", "Food for Diet"]
        const random = Math.floor(Math.random() * Text_Values.length)
        Setname(Text_Values[random])
    }
    window.setInterval(changeName, 7000);
    // this is for text changing 
    
    const [category,setCategory] = useState("All");


  return (
    <div className='scroll-smooth'>
        <div className='bg-cover bg-center h-screen background_image_file mt-0' >
            <h1 className='backtext flex flex-wrap flex-col text-4xl font-poppins font-bold text-gray-100 p-3 relative top-56 left-2 md:lg:text-7xl'>{name} 
              <h4 className='text-2xl text-wrap text-slate-300 mt-5 md:lg:text-5xl md:lg:mt-5'>Craving something delicious? <br />Get your favorite meals delivered hot and fresh.</h4>
              <a href="#explore-menu">
              <button className='flex flex-row mt-4 p-3 bg-green-600 text-gray-100 font-poppins gap-2 text-lg w-fit h-full rounded-3xl md:lg:text-3xl md:lg:mt-4 md:lg:items-center'>Shop now
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6 text-white-600">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
                </svg>
              </button>
              </a>
            </h1>
        </div>
        <ExploreMenu category={category} setCategory={setCategory}/>
        <FoodDiaplay category={category}/>
        <DailyDeals/>  
    </div>
  )
}
 
export default Home
