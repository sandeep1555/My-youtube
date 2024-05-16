import React, { useEffect } from 'react'
import SideBar from './SideBar'
import { useDispatch, useSelector } from 'react-redux'
import { Outlet, useNavigate } from 'react-router-dom'
import usePopularVideos from '../Constants/usePopularVideos'
import useMusicVideos from '../Constants/useMusicVideos'
import useNewsVideos from "../Constants/useNewsVideos"
import useLiveVideos from '../Constants/useLiveVideos'
import useSportsVideos from '../Constants/useSportsVideos'
import { onAuthStateChanged } from 'firebase/auth'
import { auth } from '../Constants/firebase'
import { adduser, removeuser } from '../Constants/userSilce'


const Body = () => {


  usePopularVideos();
  return (
    <div className='flex m-0'>
           <SideBar/>
          <Outlet/> 
         

    </div>
  )
}

export default Body