import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { getMovievideo, getMusicvideo, getPopularvideo } from './VideosSlice';
import { YOUTUBE_API, YOUTUBE_API_KEY } from './useConstant';

const useMusicvideos = () => {


    const dispatch=useDispatch();
    const getMusicvideos= async() =>
    {
        const data=await fetch("https://www.googleapis.com/youtube/v3/search?part=snippet&q=music&type=video&maxResults=30&key="+YOUTUBE_API_KEY);
        const json=await data.json();

       dispatch(getMusicvideo(json.items));
    }
    useEffect(()=>
    {
       getMusicvideos() ;
    },[]);

  
}

export default useMusicvideos