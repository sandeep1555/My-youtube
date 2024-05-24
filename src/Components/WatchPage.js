import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Link, useSearchParams } from 'react-router-dom'
import { closeSideBar } from '../Constants/configSlice';
import SideList from './SideList';
import {  YOUTUBE_API_KEY } from '../Constants/useConstant';
import CommentContainer from './CommentContainer';
import LiveChatContainer from './LiveChatContainer';
import { getSideListvideo, getWatchPagevideo } from '../Constants/VideosSlice';
import SideConatiner from './SideConatiner';
import WatchPageVedioConatiner from './WatchPageVedioConatiner';

const WatchPage = () => {

  const watchPagevideo=useSelector(store=>store.videos.watchpagevideo);
const dispatch=useDispatch();
    const [serachparams]=useSearchParams();
    const videoId=serachparams.get("v");
    const categoryId= watchPagevideo?.snippet?.categoryId;
 
    


const getvideoByid=async()=>
{
    const data=await fetch("https://www.googleapis.com/youtube/v3/videos?id="+videoId+"&key="+YOUTUBE_API_KEY+"&part=snippet&part=statistics%2CcontentDetails");
const json=await data.json();
dispatch(getWatchPagevideo(json.items[0]));
}
useEffect(()=>
{
    getvideoByid();
    dispatch(closeSideBar());
},[]);

  return   ( 
<div className='flex'>

   {watchPagevideo&& <WatchPageVedioConatiner videoId={videoId}/>} 
<SideConatiner categoryId={categoryId}  />
</div>

  
  )
}

export default WatchPage