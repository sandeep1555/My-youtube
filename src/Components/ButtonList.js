import React from 'react'
import Buttons from './Buttons'
import { useDispatch, useSelector } from 'react-redux'
import CardContainer from './CardContainer';
import { addAllButton, addLiveButton, addMusicButton, addNewsButton } from '../Constants/configSlice';



const ButtonList = () => {

 
  const dispatch=useDispatch();
  const AllButton=useSelector(store=>store.config.allButton);
  const MusicButton=useSelector(store=>store.config.musicButton);
  const NewsButton=useSelector(store=>store.config.newsButton);
  const LiveButton=useSelector(store=>store.config.liveButton);

  const Allfunction=()=>
  {
    dispatch(addAllButton());
    
  }
const Musicfunction=()=>
{
   dispatch(addMusicButton())
}

const NewsFunction=()=>
{
   dispatch(addNewsButton());
}
const liveFunction=()=>
{
  dispatch(addLiveButton());
}
  return (
  

<div className='flex  flex-col'>
  <div className='flex'>
 <Buttons title="All"   button={AllButton}  functionOnclick={Allfunction} />
 <Buttons title="Music"  button={MusicButton} functionOnclick={Musicfunction}/>
 <Buttons title="News"  button={NewsButton} functionOnclick={NewsFunction}/>
 <Buttons title="Live"  button={LiveButton} functionOnclick={liveFunction}/>
 </div>

    </div>

 
  )
}

export default ButtonList