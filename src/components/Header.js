import React, { useEffect } from 'react';
import { signOut } from 'firebase/auth';
import { auth } from '../utils/firebase';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { onAuthStateChanged } from "firebase/auth";
import { useDispatch } from 'react-redux';
import {addUser, removeUser} from "../utils/userSlice";
import { toggleGptsearchView } from '../utils/gptSlice';
import { SUPPORTED_LANGUAGES } from '../utils/languageConstants';
import { changeLanguage } from '../utils/configSlice';



const Header = () => {
  const navigate = useNavigate();
  const user = useSelector(store => store.user);
  const showGptSearch = useSelector((store) => store.gpt.showGptSearch);
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

const handleGptSearchClick = () => {
  dispatch(toggleGptsearchView());
};

const handleLanguageChange = (e) => {
  dispatch(changeLanguage(e.target.value));
}

  return (
    <div className='absolute w-screen px-8  py-2 bg-gradient-to-b from-black z-10 flex flex-col md:flex-row justify-between '>
      <div>
        <img className='w-44 h-12 my-8 bg-opacity-50 mx-auto md:mx-0' src="ReelRushLogo.png" alt='logo'></img>
      </div>

      {user && <div className='flex p-6 justify-between'>
        {showGptSearch && <select className='p-2 m-2 bg-red-700 text-white font-bold rounded-lg' onChange={handleLanguageChange}>
          {SUPPORTED_LANGUAGES.map((lang) => (
            <option key={lang.identifier} value={lang.identifier}>{lang.name}</option>
          ))}
        </select>}

        <button className='py-2 px-4 mx-4 my-2 bg-red-700 text-white font-bold rounded-lg'
        onClick={handleGptSearchClick}>{showGptSearch ? "Home Page": "GPT Search"}</button>

        <img className='hidden md:block w-10 h-10 my-3' src={user?.photoURL} alt='userlogo'></img>

        <button onClick={handleSignOut} className='font-bold text-white m-2'>Sign Out</button>
      </div>
      }

    </div>

    
  )
}

export default Header