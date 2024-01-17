import React, { useState } from 'react'
import Header from './Header';

const Login = () => {
  const [isSignInForm, setIsSignInForm] = useState(true);

  const toggleSignInForm= () => {
    setIsSignInForm(!isSignInForm);
  }
  return (
    <div>
      <div className='absolute'>
      <Header />
        <img src="https://assets.nflxext.com/ffe/siteui/vlv3/df6621a3-890c-4ca0-b698-90bd5152f3d1/1abd43b5-b8a4-47ae-9e04-4ea437fef33e/US-en-20240107-trifectadaily-perspective_alpha_website_large.jpg" alt='logo' />
      </div>

      <form className='w-3/12 absolute p-12 bg-black my-36 mx-auto right-0 left-0 text-white rounded-lg bg-opacity-80'>
        <h1 className='font-bold text-3xl py-4'>{isSignInForm? "Sign In": "Sign Up"}</h1>

        {!isSignInForm && (<input type='text' placeholder='Full Name' className='p-4 my-4 w-full bg-gray-700'></input>)}

        <input type='text' placeholder='Email Address' className='p-4 my-4 w-full bg-gray-700'></input>

        <input type='password' placeholder='Password' className='p-4 my-4 w-full bg-gray-700'></input>

        <button className='p-4 my-6 bg-red-700 w-full rounded-lg'>{isSignInForm? "Sign In": "Sign Up"}
        </button>

        <p className='py-4 cursor-pointer' onClick={toggleSignInForm}>{isSignInForm? "New to ReelRush? Sign Up Now": "Already registered? Sign In Now"}</p>

      </form>
    </div>


  )
};

export default Login