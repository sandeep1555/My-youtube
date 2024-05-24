import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { getLivevideo, getMovievideo, getMusicvideo, getPopularvideo } from '../Constants/VideosSlice';
import { YOUTUBE_API, YOUTUBE_API_KEY } from '../Constants/useConstant';

const useLivevideos = () => {

    const liveVedio=useSelector(store=>store.videos.livevideo)
    const dispatch=useDispatch();
   
    const getLivevideos= async() =>
    {
        const data=await fetch("https://www.googleapis.com/youtube/v3/search?part=snippet&q=music&type=video&maxResults=30&key="+YOUTUBE_API_KEY);
        const json=await data.json();
       const liveVideosId= json.items.map((video)=>video.id.videoId).join(",");



      if(liveVideosId)
      {const dataId=await fetch("https://www.googleapis.com/youtube/v3/videos?id="+liveVideosId+"&key="+YOUTUBE_API_KEY+"&part=snippet&part=statistics");
       const jsonId=await dataId.json();
       dispatch(getLivevideo(jsonId.items))
       console.log(jsonId.items)

    }
       else{
        return [];
       }
    }
   
    useEffect(()=>
    { 

    !liveVedio && getLivevideos() ;
    },[]);
  
}

export default useLivevideos