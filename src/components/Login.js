import React, { useRef, useState } from 'react'
import Header from './Header';
import { checkValidData } from '../utils/validate';
import {createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile } from "firebase/auth";
import {auth} from "../utils/firebase"
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { addUser } from '../utils/userSlice';


const Login = () => {
  //hooks
  const [isSignInForm, setIsSignInForm] = useState(true);
  const [errorMessage, setErrorMessage] = useState(null);
  
  const fullName = useRef(null);
  const email = useRef(null);
  const password = useRef(null);

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleButtonClick = () => {
    const message = isSignInForm ?
    checkValidData(email.current.value, password.current.value)
    : checkValidData(email.current.value, password.current.value, fullName.current.value);
    
    setErrorMessage(message);
    //if there is any error message just return
    if(message) return;

    //If data is valid then we can proceed to Sign In/Sign Up
    if(!isSignInForm){
      //Sign Up logic here
      createUserWithEmailAndPassword(auth, email.current.value, password.current.value)
        .then((userCredential) => {
          // Signed up 
          const user = userCredential.user;
          console.log(user);
          
          updateProfile(user, {
            displayName: fullName.current.value, photoURL: "https://avatars.githubusercontent.com/u/29571853?v=4"
          }).then(() => { 
              const {uid, email, displayName, photoURL} = auth.currentUser;
              //update redux store
              dispatch(addUser({uid: uid, email: email, displayName, photoURL: photoURL}));

            // Profile updated!
            navigate("/browse");

          }).catch((error) => {
            // An error occurred
            setErrorMessage(error.message);
          });
         
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessage(errorCode + "-"+errorMessage);
        });

    }else{
      //Sign In logic here
      signInWithEmailAndPassword(auth, email.current.value, password.current.value)
        .then((userCredential) => {
          // Signed in 
          const user = userCredential.user;
          console.log(user);
          //redirecting to browse page after successful sign In/ sign Up
          navigate("/browse");
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessage(errorCode+"-"+errorMessage);
        });
    }
  };

  const toggleSignInForm= () => {
    setIsSignInForm(!isSignInForm);
    setErrorMessage(null);
  }
  return (
    <div>
      <div className='absolute'>
      <Header />
        <img src="https://assets.nflxext.com/ffe/siteui/vlv3/df6621a3-890c-4ca0-b698-90bd5152f3d1/1abd43b5-b8a4-47ae-9e04-4ea437fef33e/US-en-20240107-trifectadaily-perspective_alpha_website_large.jpg" alt='logo' />
      </div>

      <form onSubmit={(e) => e.preventDefault()} className='w-3/12 absolute p-12 bg-black my-36 mx-auto right-0 left-0 text-white rounded-lg bg-opacity-80'>

        <h1 className='font-bold text-3xl py-4'>{isSignInForm? "Sign In": "Sign Up"}</h1>

        {!isSignInForm && (<input ref={fullName} type='text' placeholder='Full Name' className='p-4 my-4 w-full bg-gray-700'></input>)}

        <input ref={email} type='text' placeholder='Email Address' className='p-4 my-4 w-full bg-gray-700'></input>

        <input ref={password} type='password' placeholder='Password' className='p-4 my-4 w-full bg-gray-700'></input>

        <p className='text-red-500 font-bold text-lg py-2'>{errorMessage}</p>

        <button className='p-4 my-6 bg-red-700 w-full rounded-lg' onClick={handleButtonClick}>{isSignInForm? "Sign In": "Sign Up"}
        </button>

        <p className='py-4 cursor-pointer' onClick={toggleSignInForm}>{isSignInForm? "New to ReelRush? Sign Up Now": "Already registered? Sign In Now"}</p>

      </form>
    </div>


  )
};

export default Login