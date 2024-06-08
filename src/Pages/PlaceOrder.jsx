import React, { useContext } from 'react'
import { StoreContext } from '../Context/StoreContext'

const PlaceOrder = () => {
  const {getTotalCartAmount} = useContext(StoreContext);
  return (
    <form className='grid justify-evenly items-center mt-5 mb-5'>
      <div>
          <p className='text-xl text-green-400 text-wrap mb-3'>Delevery information</p>
          <div className='flex justify-around gap-2'>
            <input type="text" placeholder='firstname' required/>
            <input type="text" placeholder='secondname' required/>
          </div>
          <div className='flex justify-around gap-2'>
            <input type="email" placeholder='E-mail' required/>
            <input type="text" placeholder='Street' required/>
          </div>
          <div className='flex justify-around gap-2'>
            <input type="text" placeholder='city' required/>
            <input type="text" placeholder='State' required/>
          </div>
          <div className='flex justify-around gap-2'>
            <input type="text" placeholder='country' required/>
            <input type="text" placeholder='Phone number' required/>
          </div>
      </div>
      <div className='mt-5'>
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
              <p className='flex flex-row justify-end text-end'>{getTotalCartAmount()===0?0:50}</p>
            </div>
            <hr />
            <div className='flex flex-row gap-3 text-wrap font-poppins w-full justify-center items-center'>
              <b className='flex flex-row justify-start'>Total</b>
              <b className='flex flex-row justify-end text-end'>{getTotalCartAmount()===0?0:getTotalCartAmount()+50}</b>
            </div>           
          </div>
        </div>
      </div>
      <button className='p-2 bg-green-400 font-poppins font-bold text-xl'>Proceed to Payment</button>
    </form>
  )
}

export default PlaceOrder
