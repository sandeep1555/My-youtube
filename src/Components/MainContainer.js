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

  const vedios=useSelector(store=>store.vedios);
  const allButton=useSelector(store=>store.config.allButton);
  const musicButton=useSelector(store=>store.config.musicButton);
  const newsButton=useSelector(store=>store.config.newsButton);
  const sportsButton=useSelector(store=>store.config.sportsButtonButton);

  return (
    <div className='flex flex-col '>
   
<ButtonList />

<div>
{allButton &&<CardContainer  vedio={vedios.popularVedio}/>}
{musicButton &&<CardContainer  vedio={vedios.musicVedio}/>}
{newsButton &&<CardContainer  vedio={vedios.newsVedio}/>}
{sportsButton &&<CardContainer  vedio={vedios.sportsVedio}/>}
</div>


     </div>
  )
}

export default MainContainer