import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { getMovievideo, getMusicvideo, getPopularvideo, getSportsvideo } from '../Constants/VideosSlice';
import { YOUTUBE_API, YOUTUBE_API_KEY } from '../Constants/useConstant';

const useSportsvideos = () => {
    const sportsVedio=useSelector(store=>store.videos.sportsvideo)
    const dispatch=useDispatch();
    const getSportvideos= async() =>
    {
        const data=await fetch("https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=30&q=sports&type=video&key="+YOUTUBE_API_KEY);
        const json=await data.json();
    
       dispatch(getSportsvideo(json.items));
    }
    useEffect(()=>
    {
      !sportsVedio && getSportvideos() ;
    },[]);
  
}

export default useSportsvideos