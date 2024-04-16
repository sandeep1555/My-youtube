import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { getLiveVedio, getMovieVedio, getMusicVedio, getPopularVedio } from './VediosSlice';
import { YOUTUBE_API, YOUTUBE_API_KEY } from './useConstant';

const useLiveVedios = () => {

    const dispatch=useDispatch();
    const getLiveVedios= async() =>
    {
        const data=await fetch("https://www.googleapis.com/youtube/v3/search?part=snippet&eventType=live&type=video&key="+YOUTUBE_API_KEY);
        const json=await data.json();
        console.log(json.items)
       dispatch(getLiveVedio(json.items));
    }
    useEffect(()=>
    {
       getLiveVedios() ;
    },[]);
  
}

export default useLiveVedios