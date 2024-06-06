import React from 'react'
import SideBar from './SideBar'
import usePopularVideos from '../CustomHooks/usePopularVideos'
import { Outlet } from 'react-router-dom';




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