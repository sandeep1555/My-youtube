import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { getMovievideo, getMusicvideo, getNewsvideo, getPopularvideo } from './VideosSlice';
import { YOUTUBE_API, YOUTUBE_API_KEY } from './useConstant';

const useNewsvideos = () => {

    const dispatch=useDispatch();
    const getMusicvideos= async() =>
    {
        const data=await fetch("https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=30&q=news&type=video&key="+YOUTUBE_API_KEY);
        const json=await data.json();
        
       dispatch(getNewsvideo(json.items));
    }
    useEffect(()=>
    {
       getMusicvideos() ;
    },[]);
  
}

export default useNewsvideos