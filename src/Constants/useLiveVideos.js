import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { getLivevideo, getMovievideo, getMusicvideo, getPopularvideo } from './VideosSlice';
import { YOUTUBE_API, YOUTUBE_API_KEY } from './useConstant';

const useLivevideos = () => {

    const dispatch=useDispatch();
    const getLivevideos= async() =>
    {
        const data=await fetch("https://www.googleapis.com/youtube/v3/search?part=snippet&eventType=live&type=video&key="+YOUTUBE_API_KEY);
        const json=await data.json();
    
       dispatch(getLivevideo(json.items));
    }
    useEffect(()=>
    {
       getLivevideos() ;
    },[]);
  
}

export default useLivevideos