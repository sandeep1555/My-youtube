import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { getMovieVedio, getMusicVedio, getPopularVedio } from './VediosSlice';
import { YOUTUBE_API, YOUTUBE_API_KEY } from './useConstant';

const useMusicVedios = () => {

    const dispatch=useDispatch();
    const getMusicVedios= async() =>
    {
        const data=await fetch("https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=30&q=music&type=video&key="+YOUTUBE_API_KEY);
        const json=await data.json();
        console.log(json.items)
       dispatch(getMusicVedio(json.items));
    }
    useEffect(()=>
    {
       getMusicVedios() ;
    },[]);
  
}

export default useMusicVedios