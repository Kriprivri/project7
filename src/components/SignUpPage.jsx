
import React from 'react';
import { Link } from "react-router-dom";
import { useState } from 'react'

const SignUpPage = () => {
  const [isVisible,setIsVisible]=useState(false)
  const [isConfirmPasswordVisible, setIsConfirmPasswordVisible] = useState(false);


  const handleShowConfirmPassword = () => {
    setIsConfirmPasswordVisible(!isConfirmPasswordVisible)
  }

  const handleShowPassword=()=>{

    setIsVisible(!isVisible)

  }
  const handleFormSubmit=(e)=>{
    e.preventDefault()

  }
  return (
    <div className='h-screen w-full flex bg-gray-200 overflow-hidden px-10 py-8 gap-4'>
     
        <img className="w-[55%] h-full overflow-hidden rounded-2xl" src='/assets/login.jpg'/>
      
      
    <form
      className="w-[45%] bg-white flex flex-col items-center  rounded-2xl"
      onSubmit={
        handleFormSubmit
      }
    >
    <p className=' text-blue-800 text-center text-4xl font-bold mt-6'> Sign Up and Start Learning</p>
      {/* Email Field */}
     <div className='text-center space-y-4 mt-14 w-full px-20'>
     <div>
        <label
          htmlFor="email"
          className="block text-lg font-serif font-semibold text-gray-700 mb-3"
        >
          Email
        </label>
        <input
          type="email"
          name="email"
          id="email"
         
          placeholder="Enter your email"
          className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
        />
      </div>

      {/* Username Field */}
      <div>
        <label
          htmlFor="username"
          className="block text-lg font-serif font-semibold text-gray-700 mb-3"
        >
          Username
        </label>
        <input
          type="text"
          name="username"
          id="username"
         
          placeholder="Enter your username"
          className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
        />
      </div>

      {/* Password Field */}
      <div>
        <label
          htmlFor="password"
          className="block text-lg font-serif font-semibold text-gray-700 mb-3"
        >
          Password
        </label>
      <div className='flex justify-between'>
        <input
          type={isVisible?"text":"password"}          
          name="password"
          id="password"
         
          placeholder="Enter your password"
          className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
        />
        <div className='ml-4 mt-3'>
        <button onClick={handleShowPassword}>{isVisible?"Hide":"Show"}</button>
        </div>
        
        </div>
      </div>

      {/* Confirm Password Field */}
      <div>
        <label
          htmlFor="confirmPassword"
          className="block text-lg font-serif font-semibold text-gray-700 mb-3"
        >
          Confirm Password
        </label>
 <div className=' flex'>
 <input
          type={isConfirmPasswordVisible?"text":"password"}    
          name="confirmPassword"
          id="confirmPassword"
          
          placeholder="Confirm your password"
          className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
        />
         <div className='ml-4 mt-3'>
        <button onClick={handleShowConfirmPassword}>{isConfirmPasswordVisible?"Hide":"Show"}</button>
        </div>
 </div>
      </div>

      {/* Submit Button */}
      <div>
        <button
          type="submit"
          className="bg-blue-800 mt-6 text-white rounded-2xl py-2 px-5 font-semibold hover:bg-blue-600"
        >
          Sign Up
        </button>
         {/* Navigation Link */}
      <p className="text-black mt-4 font-medium">
        Already have an account?{" "}
        <Link to="/login" className="text-blue-500 font-semibold hover:underline">
          Login
        </Link>
      </p>
      </div>
     </div>
    </form>
</div>
    
  )
}

export default SignUpPage
