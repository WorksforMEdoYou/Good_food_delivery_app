import React, { useContext } from 'react'
import { assets } from '../../assets/assets'
import { StoreContext } from '../../Context/StoreContext';

const Fooditem = ({id,name,price,description,image}) => {
    //in this component we will get the image, price, description, id of the food as a props 
    //from the food display component

    //adding functionalities
    const {cartItems,addToCart,removeFromCart} = useContext(StoreContext);
  return (
    <div className='flex flex-col p-3 justify-center items-center'>
        <div className='flex gap-2 mt-3 md:lg:gap-24'>
            <div>
                <img src={image} alt="imagevalue" className='rounded-xl' />
               
            </div>
            <div className='flex flex-col flex-wrap justify-center mb-2 md:lg:gap-2'>
                <p className='text-xl md:lg:text-3xl font-bold font-poppins'>{name}</p>
                <p className='text-xl md:lg:text-3xl font-bold font-poppins'>Rs:{price+100}</p>
                {
                    //if the item count is greater than 0 then we will show the add to cart button
                    //otherwise we will show the add to cart button
                    !cartItems[id]
                    ? <img src={assets.add_icon_white} onClick={()=>addToCart(id)} alt="add icon" className='w-10 h-10' />
                    : <div className='flex gap-2'>
                        <img onClick={()=>removeFromCart(id)} src={assets.remove_icon_red} alt="" />
                        <p>{cartItems[id]}</p>
                        <img onClick={()=>addToCart(id)} src={assets.add_icon_green} alt="" />
                    </div>
                }
                <img  src={assets.rating_starts} alt="" className='w-fit' />
                <p className='text-sm text-wrap md:lg:text-2xl font-poppins text-gray-400'>{description}</p>
            </div>
      </div>
        <hr className='w-full bg-gray-400 rounded-lg mt-2'/>
    </div>
  )
}

export default Fooditem
