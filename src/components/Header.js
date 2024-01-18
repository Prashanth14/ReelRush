import React from 'react';
import { signOut } from 'firebase/auth';
import { auth } from '../utils/firebase';
import { useNavigate } from 'react-router-dom';

const Header = () => {
  const navigate = useNavigate();

  const handleSignOut = () => {
    signOut(auth).then(() => {
      // Sign-out successful.
      navigate("/");
    }).catch((error) => {
      // An error happened.
      navigate("/error");
    });
  };

  return (
    <div className='absolute w-screen px-8  py-2 bg-gradient-to-b from-black z-10 flex justify-between'>
      <div>
        <img className='w-44 bg-opacity-100' src="ReelRushLogo.png" alt='logo'></img>
      </div>

      <div className='flex p-6'>
        <img className='w-12 h-12' src='userLogo.png' alt='userlogo'></img>
        <button onClick={handleSignOut} className='font-bold text-white m-2'>Sign Out</button>
    </div>

    </div>

    
  )
}

export default Header