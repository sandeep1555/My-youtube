import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux';
import { YOUTUBE_API_KEY } from './useConstant';
import { getChannelInfo } from './VideosSlice';

const useChannelInfo = (channelId) => {



    const dispatch=useDispatch();
    const getchannelProfilepic=async()=>
  {
     const data=await fetch("https://www.googleapis.com/youtube/v3/channels?part=snippet&id="+channelId+"&key="+YOUTUBE_API_KEY)
     const json=await data.json();
     dispatch(getChannelInfo(json.items[0]));
  }
useEffect(()=>
{
   getchannelProfilepic();
},[]) 
}

export default useChannelInfo