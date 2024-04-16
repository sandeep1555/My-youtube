import React from 'react'
import SideBar from './SideBar'
import MainContainer from './MainContainer'
import { useSelector } from 'react-redux'
import { Outlet } from 'react-router-dom'
import usePopularVedios from '../Constants/usePopularVedios'
import useMusicVedios from '../Constants/useMusicVedios'
import useNewsVedios from '../Constants/useNewsVedios'
import useLiveVedios from '../Constants/useLiveVedios'
import useSportsVedios from '../Constants/useSportsVedios'

const Body = () => {

  usePopularVedios();
  useMusicVedios();
  useNewsVedios();
  useLiveVedios();
  useSportsVedios();


  return (
    <div className='flex'>
           <SideBar/>
          <Outlet/> 
         

    </div>
  )
}

export default Body