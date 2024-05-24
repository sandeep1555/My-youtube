import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { getMovievideo, getMusicvideo, getNewsvideo, getPopularvideo } from '../Constants/VideosSlice';
import { YOUTUBE_API, YOUTUBE_API_KEY } from '../Constants/useConstant';

const useNewsvideos = () => {
    const newsVedio=useSelector(store=>store.videos.newsvideo)
    const dispatch=useDispatch();
    const getMusicvideos= async() =>
    {
        const data=await fetch("https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=30&q=news&type=video&key="+YOUTUBE_API_KEY);
        const json=await data.json();
        
       dispatch(getNewsvideo(json.items));
    }
    useEffect(()=>
    {
      !newsVedio && getMusicvideos() ;
    },[]);
  
}

export default useNewsvideos