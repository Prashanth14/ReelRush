import React, { useEffect } from 'react';
import { signOut } from 'firebase/auth';
import { auth } from '../utils/firebase';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { onAuthStateChanged } from "firebase/auth";
import { useDispatch } from 'react-redux';
import {addUser, removeUser} from "../utils/userSlice";



const Header = () => {
  const navigate = useNavigate();
  const user = useSelector(store => store.user);
  const dispatch = useDispatch();

  const handleSignOut = () => {
    signOut(auth).then(() => {}).catch((error) => {
      // An error happened.
      navigate("/error");
    });
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
        if (user) {
          const {uid, email, displayName, photoURL} = user;
          //update redux store
          dispatch(addUser({uid: uid, email: email, displayName, photoURL: photoURL}));
          navigate("/browse");
        } else {
          // User is signed out
          dispatch(removeUser());
          //After signout redirect browser to login page
          navigate("/");
        }
    });
    return () => unsubscribe();
},[]);

  return (
    <div className='absolute w-screen px-8  py-2 bg-gradient-to-b from-black z-10 flex justify-between'>
      <div>
        <img className='w-44 bg-opacity-50' src="ReelRushLogo.png" alt='logo'></img>
      </div>

      {user && <div className='flex p-6'>
        <img className='w-12 h-12' src={user?.photoURL} alt='userlogo'></img>
        <button onClick={handleSignOut} className='font-bold text-white m-2'>Sign Out</button>
      </div>
      }

    </div>

    
  )
}

export default Header