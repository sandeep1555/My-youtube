import React, { useEffect, useState } from 'react'
import CardContainer from './CardContainer'
import { YOUTUBE_API } from '../Constants/useConstant';
import Buttons from './Buttons';

const MainContainer = () => {

    

  return (
    <div className='col-span-10'>
<div className='flex flex-row'>
    <Buttons title="All"/>
    <Buttons title="Music"/>
    <Buttons title="News"/>
    <Buttons title="Dhee"/>
    <Buttons title="Live"/>
    <Buttons title="Game Shows"/>
    </div>
    <div>
<CardContainer/>
     </div>
     
    </div>
  )
}

export default MainContainer