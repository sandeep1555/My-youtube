import React from 'react'
import SideBar from './SideBar'

import { Outlet} from 'react-router-dom'
import usePopularVideos from '../CustomHooks/usePopularVideos'



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