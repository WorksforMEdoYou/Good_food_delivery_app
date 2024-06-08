import React, { useContext, useState } from 'react'
import { StoreContext } from '../Context/StoreContext'
import Emptycart from './Emptycart';
import { deal } from './img/Daily';
import { useNavigate } from 'react-router-dom';
const Cart = () => {

  const {cartItems, food_list, removeFromCart, getTotalCartAmount} = useContext(StoreContext);
  //importing the functions from Store context 
  const [Empty, setEmpty] = useState(true);
  const navigate = useNavigate();
  return (
    <div>
      <div>
        {
        Empty ? <Emptycart setEmpty={setEmpty}/> : <></> }
      </div>
      <div>
        { 
          food_list.map(
            (item) =>{
              if(cartItems[item._id]>0){
                
                return( 
                  <div className='p-1 flex flex-row flex-warp justify-around items-center font-poppins'>
                      <img src={item.image} alt="" height="200px" width="200px" className='rounded-2xl'/>
                      <p>{item.name}</p>
                      <p>rs{item.price}</p>
                      <p>{cartItems[item._id]}</p>
                      <p>rs{item.price*cartItems[item._id]}</p>
                      <p className='text-red-400 font-bold' onClick={()=>removeFromCart(item._id)}>X</p>
                  </div>
                )
              }
              else{
                  return(
                    <></>
                  )
              }
            }
          )
          
        }
        {
          deal.map((item)=>{
            if(cartItems[item._id]>0){
              
              return( 
                <div className='p-1 flex flex-row flex-warp justify-around items-center font-poppins'>
                    <img src={item.image} alt="" height="200px" width="200px" className='rounded-2xl'/>
                    <p>{item.name}</p>
                    <p>rs{item.new_price}</p>
                    <p>{cartItems[item._id]}</p>
                    <p>rs{item.new_price*cartItems[item._id]}</p>
                    <p className='text-red-400 font-bold' onClick={()=>removeFromCart(item._id)}>X</p>
                </div>
                )
            }
            else{
              return(
                <></>
              )
            }
          })
        }
      </div>
      <div>
        <div>
          <h2>Cart Totals</h2>
          <div>
            <div className='flex flex-row gap-3 text-wrap font-poppins w-full justify-center items-center'>
              <p className='flex flex-row justify-start'>Sub total</p>
              <p className='flex flex-row justify-end text-end'>{getTotalCartAmount()}</p>
            </div>
            <hr />
            <div className='flex flex-row gap-3 text-wrap font-poppins w-full justify-center items-center'>
              <p className='flex flex-row justify-start'>Delevery Fee</p>
              <p className='flex flex-row justify-end text-end'>{getTotalCartAmount()===0 ? 0 : 50}</p>
            </div>
            <hr />
            <div className='flex flex-row gap-3 text-wrap font-poppins w-full justify-center items-center'>
              <b className='flex flex-row justify-start'>Total</b>
              <b className='flex flex-row justify-end text-end'>{getTotalCartAmount()===0 ? 0 : getTotalCartAmount()+50}</b>
            </div>           
          </div>
        </div>
        <button onClick={()=> navigate('/order')} className='flex font-bold text-white text-xl justify-center items-center p-3 rounded-lg bg-green-300 font-poppins text-wrap text-center w-fit mb-4'>Prcessed to Checkout</button>
      </div>
    </div>
  )
}

export default Cart
