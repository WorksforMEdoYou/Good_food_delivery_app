import React, { useContext } from 'react';
import empty from './img/emptycart.png';
import { StoreContext } from '../Context/StoreContext';
const Emptycart = ({ setEmpty }) => {
  const { getTotalCartAmount } = useContext(StoreContext);

    if (getTotalCartAmount()===0) {
        return(
            <div className='flex flex-col mt-5 mb-5 justify-center items-center'>
            <div>
                <img src={empty} alt="" className='rounded-2xl' height="300px" width="300px"/>
            </div>
            <p className='text-xl text-wrap text-center font-poppins font-bold text-green-600'>Cart is empty</p>
      </div>
        )
    } 
    else {
        return (
            setEmpty(false)
        );
    }
};

export default Emptycart;