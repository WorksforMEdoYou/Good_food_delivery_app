import React, { useContext } from 'react'
import { StoreContext } from '../../Context/StoreContext'
import Fooditem from '../Fooditem/Fooditem';


const FoodDiaplay = ({category}) => {
    /* First we will get the food list array using the context API */
    const { food_list } = useContext(StoreContext);
  return (
    <div id='food-display'>
      <hr className='w-full h-2 bg-gray-400 rounded-3xl' />
      <h2 className='mt-3 text-3xl text-green-500 text-bold text-center'>Explore the Dishes on the web</h2>
      <div>
        {food_list.map((item,index)=>{
          if(category==="All" || category===item.category){
          return(
            <Fooditem key={index} id={item._id} name={item.name} description={item.description} price={item.price} image={item.image}/> 
            )
          }
          else{
            return null;
          }
        })}
      </div>
    </div>
  )
}

export default FoodDiaplay
