import React, { useState } from 'react'
const LoginPopup = ({setShowLogin}) => {
  const [currState, setCurrState] = useState("Sign Up"); //setting it initially as Sign Up
  return (
    <div className=' fixed top-36 p-3 w-fit z-20 rounded-md bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-30 border border-gray-100'>
      <div>
        <div>
          <form>
            <div className='flex flex-row flex-wrap gap-3'>
              <h2 className='text-green-600'>{currState}</h2>
              <svg xmlns="http://www.w3.org/2000/svg" onClick={()=>setShowLogin(false)} fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6 text-red-500">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M6 18 18 6M6 6l12 12" />
              </svg>
              {
                //setting it when we click a X icon it get clsed
              }
            </div>
            <div className='flex flex-col gap-2 p-3'>
              {currState==="Login"?<></>: //currentstate is Login it display nothing and if it getting false it display the div 
              <div className='flex flex-row gap-2 rounded-xl w-ful backdrop-blur shadow-md group-target:bg-gray-200 items-center'>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-7 ml-1 text-green-600">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M17.982 18.725A7.488 7.488 0 0 0 12 15.75a7.488 7.488 0 0 0-5.982 2.975m11.963 0a9 9 0 1 0-11.963 0m11.963 0A8.966 8.966 0 0 1 12 21a8.966 8.966 0 0 1-5.982-2.275M15 9.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                </svg>
                <input type="text" placeholder='Name' required  className='p-2 w-full border-none rounded-xl bg-transparent text-black'/>
              </div>
              }
              <div className='flex flex-row gap-2 rounded-xl w-full backdrop-blur shadow-md group-target:bg-gray-200 items-cente'>
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-7 ml-1 text-green-600">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75" />
                  </svg>
                <input type="email" placeholder='E-mail' required  className='p-2 w-full border-none rounded-xl bg-transparent text-black'/>
              </div>
              <div className='flex flex-row gap-2 rounded-xl w-full backdrop-blur shadow-md group-target:bg-gray-200 items-center'>
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-7 ml-1 text-green-600">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M16.5 10.5V6.75a4.5 4.5 0 1 0-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 0 0 2.25-2.25v-6.75a2.25 2.25 0 0 0-2.25-2.25H6.75a2.25 2.25 0 0 0-2.25 2.25v6.75a2.25 2.25 0 0 0 2.25 2.25Z" />
                  </svg>
                <input type="password" required placeholder='Password' className='p-2 w-full border-none rounded-xl bg-transparent text-black'/>
              </div> 
            </div>
            <button className='rounded-3xl text-white bg-green-300 font-bold p-2'>{currState==="Sign Up" ? "Create account" : "Login"}</button>
            {
              //showing a Current state 
            }
            <div className='flex flex-row flex-wrap gap-1'>
              <input type="checkbox" required className='checked:bg-blue-400'/>
              <p className='text-warp text-gray-400'>By continuing, i agree to the terms and conditions & private policy</p>
            </div>
            {currState==="Login"? // if login is true it display the "create account " if it flase "Already have a account"
            <p>Create a new account? <span className='text-sky-600 cursor-pointer' onClick={()=>setCurrState("Sign Up")}>Click here.</span></p>
            :<p>Already have an account? <span className='text-sky-600 cursor-pointer' onClick={()=>setCurrState("Login")}>Login here</span></p>
            } 
          </form>
        </div>
      </div>
    </div>
  )
}

export default LoginPopup
