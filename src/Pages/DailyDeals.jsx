import React from 'react'
import { useContext } from 'react'
import { deal } from './img/Daily'
import { assets } from '../assets/assets'
import { StoreContext } from '../Context/StoreContext'
const DailyDeals = () => {
  const {cartItems,addToCart,removeFromCart} = useContext(StoreContext);
  return (
    <div id='daily-deals' className='grid justify-center items-center'>
        <h1 className='text-center text-3xl text-green-600 font-poppins'>DAILY DEALS</h1>
      {deal.map((item)=>{
        return(
           <div className='mt-6 mb-4'>
                <div className='flex flex-row gap-30 border-gray-400 rounded-md'>
                  <div className='rounded-xl'>
                    <img src={item.image} alt="" height="200px" width="300px" className='rounded-xl'/>
                  </div>
                  <div className='gap-3 ml-10'>
                    <h3 className='text-3xl text-wrap font-poppins'>{item.name}</h3>
                    <div className='flex flex-wrap gap-3 mt-3 '>
                      <del className='text-xl text-red-600'>Rs:{item.old_price}</del>
                      <p className='text-2xl text-green-600'>Rs:{item.new_price}</p>
                      
                        {
                          //if the item count is greater than 0 then we will show the add to cart button
                          //otherwise we will show the add to cart button
                          !cartItems[item._id]
                          ? <img src={assets.add_icon_white} onClick={()=>addToCart(item._id)} alt="add icon" className='w-10 h-10' />
                          : <div className='flex gap-2'>
                              <img onClick={()=>removeFromCart(item._id)} src={assets.remove_icon_red} alt="" />
                              <p>{cartItems[item._id]}</p>
                              <img onClick={()=>addToCart(item._id)} src={assets.add_icon_green} alt="" />
                          </div>
                      }
                      
                    </div>
                    <p className='text-sm text-gray-400 text-wrap'>{item.description}</p>
                  </div>
                </div>
           </div>
        )
      })}
    </div>
  )
}

export default DailyDeals
