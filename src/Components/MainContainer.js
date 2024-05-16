import React from 'react'
import CardContainer from './CardContainer'

import ButtonList from './ButtonList';

import { useSelector } from 'react-redux';



const MainContainer = () => {

  const videos=useSelector(store=>store.videos);
  const activeButton=useSelector(store=>store.config.activeButton);
  return (
    <div className='flex flex-col  overflow-y-auto h-screen'>
   
<ButtonList />

<div className=''>
{activeButton==='All' &&<CardContainer  video={videos.popularvideo}/>}
{activeButton==='Music' &&<CardContainer  video={videos.musicvideo}/>}
{activeButton==='News' &&<CardContainer  video={videos.newsvideo}/>}

{activeButton==='Live' &&<CardContainer  video={videos.livevideo}/>}
</div>


     </div>
  )
}

export default MainContainer