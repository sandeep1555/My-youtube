import React, { useEffect, useState } from 'react'
import CardContainer from './CardContainer'
import { YOUTUBE_API } from '../Constants/useConstant';
import Buttons from './Buttons';
import ButtonList from './ButtonList';
import LiveChat from './LiveChat';
import { useDispatch } from 'react-redux';
import { addLivechat } from '../Constants/chatSlice';


const MainContainer = () => {

    // const dispatch=useDispatch();

    // useEffect(()=>
    // {
    //      setInterval(()=>
    //      {
    //          dispatch(addLivechat())
    //      },2000)
    // },[])

  return (
    <div className='flex flex-col '>
   
<ButtonList/>
<CardContainer/>


     </div>
  )
}

export default MainContainer