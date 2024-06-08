import React, { useContext } from 'react'
import ExploreMenu from '../Components/ExploreMenu/ExploreMenu'
import FoodDiaplay from '../Components/FoodDisplay/FoodDiaplay'
import Fooditem from '../Components/Fooditem/Fooditem'
import { StoreContext } from '../Context/StoreContext'
const MenuList = ({category,setCategory,id,name,price,description,image}) => {
    const { food_list } = useContext(StoreContext);
  return (
    <div>
        <div>
        <ExploreMenu category={category} setCategory={setCategory}/>
        <FoodDiaplay category={category}/>
        </div>
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

export default MenuList
