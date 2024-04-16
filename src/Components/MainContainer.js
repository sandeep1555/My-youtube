import React, { useEffect, useState } from 'react'
import CardContainer from './CardContainer'
import { YOUTUBE_API } from '../Constants/useConstant';
import Buttons from './Buttons';
import ButtonList from './ButtonList';
import LiveChat from './LiveChat';
import { useDispatch, useSelector } from 'react-redux';
import { addLivechat } from '../Constants/chatSlice';
import usePopularVedios from '../Constants/usePopularVedios';


const MainContainer = () => {

   
  

  return (
    <div className='flex flex-col '>
   
<ButtonList />

{/* {toggleButton &&

<CardContainer  vedio={vedios.sportsVedio}/>} */}



     </div>
  )
}

export default MainContainer