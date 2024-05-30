import React, { useEffect } from 'react'
import SideBar from './SideBar'

import { Outlet, useNavigate} from 'react-router-dom'
import usePopularVideos from '../CustomHooks/usePopularVideos'
import { onAuthStateChanged } from 'firebase/auth'
import { adduser, removeuser } from '../Constants/userSilce'
import { useDispatch } from 'react-redux'
import { auth } from '../Constants/firebase'



const Body = () => {
 
 


  usePopularVideos();
  return (
    <div className='flex '>
           <SideBar/>
          <Outlet/> 
         

    </div>
  )
}

export default Body