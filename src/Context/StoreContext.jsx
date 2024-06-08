import { createContext, useEffect, useState } from "react";
import { food_list } from "../assets/assets";
export const StoreContext = createContext(null)
const StoreContextProvider = (props) => {
    const [cartItems,setCartItems] = useState({}); //this is initialized with a {} curleybrazzers.
    /* added the functionality for the add to cart and remove from cart */
    const addToCart = (itemId) => {
        // checking the user had added the item as first time in the cart
        //in that case we create a entry
        if (!cartItems[itemId]) {
            setCartItems((prev)=>({...prev,[itemId]:1}))
            /*
                 It is using the setCartItems function, which is likely a state setter function from the useState hook in React.
                The function takes an argument itemId which is presumably the ID of an item that has been added to a shopping cart.
                The function updates the cartItems state by creating a new object that contains all the previous items in the cart (using the spread operator ...prev) and then adding the new item with a quantity of 1.
                So, in summary, this code is adding an item to a shopping cart with a quantity of 1.
            */
        }
        else{ //if the item is already in the cart.
            setCartItems((prev)=>({...prev,[itemId]:prev[itemId]+1}))
            /*
             It is a function that updates the state of a component, specifically the cartItems state.
             The function setCartItems is a state setter function, which is typically returned by the useState hook in React. It is used to update the state of a component.
             The function takes a callback function as an argument, which receives the previous state as an argument. The callback function returns a new state object that is merged with the previous state using the spread operator (...).
             The new state object has a single property, itemId, which is incremented by 1. This suggests that the cartItems state is an object that maps item IDs to quantities, and this function is used to increment the quantity of a particular item in the cart.
            */
        }
    }

    const removeFromCart = (itemId) => {
        setCartItems((prev)=>({...prev,[itemId]:prev[itemId]-1}))
        //before the addToCart function's if statemet which creates a entry and if that product id is not available in our cart item
    }

    useEffect(()=>{
        console.log(cartItems);
    },[cartItems]) //when the cartitem is changed it print the console

    const getTotalCartAmount=()=>{
        let totalAmount = 0;
        for(const item in cartItems){
            if(cartItems[item]>0){
            let itemInfo = food_list.find((product)=>product._id===item);
            totalAmount += itemInfo.price*cartItems[item]
            }
        }
        return totalAmount;
    }

    const contextValue = {
        food_list,
        //now we can access the foodlist anywhere
        cartItems,
        setCartItems,
        addToCart,
        removeFromCart,
        getTotalCartAmount
    }

    return (
        <StoreContext.Provider value={contextValue}>
            {props.children}
        </StoreContext.Provider>
    )
}
export default StoreContextProvider;