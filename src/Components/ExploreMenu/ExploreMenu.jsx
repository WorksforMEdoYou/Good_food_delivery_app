import React from 'react'
import {menu_list} from '../../assets/assets';
const ExploreMenu = ({category,setCategory}) => {

  return (
    <div className='mt-3' id='explore-menu'>
        <h1 className='text-center text-2xl font-bold text-green-500 font-poppins text-wrap'>Explore the world of Foods.</h1>
        <p className='text-center text-xl font-thin text-gray-700 text-wrap'>Choose a dishes and explore the gratest taste in foods.</p>
        <div className='grid grid-cols-4 justify-center items-center p-3 gap-1 mr-2 md:lg:grid-cols-8'>
            {menu_list.map((item,index)=>{
                return(
                    <div onClick={()=>{setCategory(prev=>prev===item.menu_name?"All":item.menu_name)}} className='mt-3' key={index}>
                        <img className={category===item.menu_name?"ring-2 rounded-full ring-green-600 active:ring ":""}  src={item.menu_image} alt=""/>
                        <p className="font-poppins text-wrap text-center text-base md:lg:mr-5">{item.menu_name}</p>
                    </div>
                )
            })}
        </div>
    </div>
  )
}

export default ExploreMenu
