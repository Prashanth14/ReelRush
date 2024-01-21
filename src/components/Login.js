import React, { useRef, useState } from 'react'
import Header from './Header';
import { checkValidData } from '../utils/validate';
import {createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile } from "firebase/auth";
import {auth} from "../utils/firebase"
import { useDispatch } from 'react-redux';
import { addUser } from '../utils/userSlice';
import { BG_URL } from '../utils/constants';


const Login = () => {
  //hooks
  const [isSignInForm, setIsSignInForm] = useState(true);
  const [errorMessage, setErrorMessage] = useState(null);
  
  const fullName = useRef(null);
  const email = useRef(null);
  const password = useRef(null);

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
          
          updateProfile(user, {
            displayName: fullName.current.value, photoURL: "userLogo.png"
          }).then(() => { 
              const {uid, email, displayName, photoURL} = auth.currentUser;
              //update redux store
              dispatch(addUser({uid: uid, email: email, displayName, photoURL: photoURL}));

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
        <img src={BG_URL} alt='logo' />
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