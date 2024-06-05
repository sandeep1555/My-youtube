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
    const Islive= watchPagevideo?.videoInfo?.snippet?.liveBroadcastContent;
    console.log(Islive)



const getvideoByid=async() =>
{
    const data=await fetch("https://www.googleapis.com/youtube/v3/videos?id="+videoId+"&key="+YOUTUBE_API_KEY+"&part=snippet&part=statistics%2CcontentDetails");
const json=await data.json();
const videodetails=json.items[0];
const channelIds=json.items[0]?.snippet?.channelId;
       const channelDetailsProm=async()=>
        {
            const data=await fetch("https://www.googleapis.com/youtube/v3/channels?part=snippet&id="+channelIds+"&key="+YOUTUBE_API_KEY)
     const json=await data.json();

           return json.items[0]
        };
        const channelDetails = await channelDetailsProm();

        const  videosWithChannelDetails=
         {
              videoInfo:videodetails && videodetails,
              channelInfo:channelDetails,
         };
         dispatch(getWatchPagevideo(videosWithChannelDetails));



}
useEffect(()=>
{
    getvideoByid();
    dispatch(closeSideBar());
},[videoId]);

  return   ( 
<div className='flex my-4 px-12 '>

   {watchPagevideo && <WatchPageVedioConatiner videoId={videoId} videoinfo={watchPagevideo.videoInfo} channelinfo={watchPagevideo.channelInfo}/>} 
   <div className=''>
      {Islive === 'live' && <div className=''><LiveChatContainer/></div>}
      <div>
      <SideConatiner categoryId={categoryId}  />
      </div>
      </div>


</div>



  
  )
}

export default WatchPage