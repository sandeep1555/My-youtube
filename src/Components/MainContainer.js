import React, { useEffect, useState } from 'react'
import CardContainer from './CardContainer'
import { YOUTUBE_API } from '../Constants/useConstant';
import Buttons from './Buttons';
import ButtonList from './ButtonList';
import LiveChat from './LiveChat';
import { useDispatch, useSelector } from 'react-redux';
import { addLivechat } from '../Constants/chatSlice';
import usePopularvideos from '../Constants/usePopularvideos';


const MainContainer = () => {

  const videos=useSelector(store=>store.videos);
  const allButton=useSelector(store=>store.config.allButton);
  const musicButton=useSelector(store=>store.config.musicButton);
  const newsButton=useSelector(store=>store.config.newsButton);
  const sportsButton=useSelector(store=>store.config.sportsButton);
const liveButton=useSelector(store=>store.config.liveButton)
  return (
    <div className='flex flex-col '>
   
<ButtonList />

<div>
{allButton &&<CardContainer  video={videos.popularvideo}/>}
{musicButton &&<CardContainer  video={videos.musicvideo}/>}
{newsButton &&<CardContainer  video={videos.newsvideo}/>}

{liveButton &&<CardContainer  video={videos.livevideo}/>}
</div>


     </div>
  )
}

export default MainContainer