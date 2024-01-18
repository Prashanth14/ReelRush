import React, { useEffect } from 'react';
import Login from './Login';
import Browse from './Browse';
import { RouterProvider, createBrowserRouter} from 'react-router-dom';
import { onAuthStateChanged } from "firebase/auth";
import {auth} from "../utils/firebase";
import { useDispatch } from 'react-redux';
import {addUser, removeUser} from "../utils/userSlice";



const Body = () => {
    //hooks
    const dispatch = useDispatch();

    const appRouter = createBrowserRouter([
        {
            path: "/",
            element: <Login />
        },
        {
            path: "/browse",
            element: <Browse />
        },
    ]);

    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            if (user) {
              const {uid, email, displayName, photoURL} = user;
              //update redux store
              dispatch(addUser({uid: uid, email: email, displayName, photoURL: photoURL}));
              
            } else {
              // User is signed out
              dispatch(removeUser());
              //After signout redirect browser to main page
            }
        });
    },[]);

  return (
    <div>
        <RouterProvider router={appRouter}/>
    </div>
  )
}

export default Body