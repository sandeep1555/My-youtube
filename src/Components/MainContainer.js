import React, { useEffect, useState } from 'react'
import CardContainer from './CardContainer'
import { YOUTUBE_API } from '../Constants/useConstant';
import Buttons from './Buttons';
import ButtonList from './ButtonList';

const MainContainer = () => {

    

  return (
    <div className='flex flex-col '>
   
<ButtonList/>
<CardContainer/>

     </div>
  )
}

export default MainContainer