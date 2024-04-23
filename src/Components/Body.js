import React, { useEffect } from 'react'
import SideBar from './SideBar'
import MainContainer from './MainContainer'
import { useDispatch, useSelector } from 'react-redux'
import { Outlet, useNavigate } from 'react-router-dom'
import usePopularvideos from '../Constants/usePopularvideos'
import useMusicvideos from '../Constants/useMusicvideos'
import useNewsvideos from "../Constants/useNewsVideos"
import useLivevideos from '../Constants/useLivevideos'
import useSportsvideos from '../Constants/useSportsvideos'
import { onAuthStateChanged } from 'firebase/auth'
import { auth } from '../Constants/firebase'
import { adduser, removeuser } from '../Constants/userSilce'


const Body = () => {
const dispatch=useDispatch();
const navigate=useNavigate();
  usePopularvideos();
  useMusicvideos();
  useNewsvideos();
  useLivevideos();
  useSportsvideos();
  useEffect(()=>
  {

const unsubsribe=onAuthStateChanged(auth, (user) => {
if (user) {
  
  const {uid,email,displayName,photoURL}  = user;
  dispatch(adduser({uid:uid,email: email,displayName:displayName,photoURL: photoURL}));
  navigate("/");
 
} else {
  dispatch(removeuser());
  navigate("/");
  
}
return ()=> unsubsribe();
});
  },[]);


  return (
    <div className='flex'>
           <SideBar/>
          <Outlet/> 
         

    </div>
  )
}

export default Body