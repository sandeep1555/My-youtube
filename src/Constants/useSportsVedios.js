import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { getMovieVedio, getMusicVedio, getPopularVedio, getSportsVedio } from './VediosSlice';
import { YOUTUBE_API, YOUTUBE_API_KEY } from './useConstant';

const useSportsVedios = () => {

    const dispatch=useDispatch();
    const getSportVedios= async() =>
    {
        const data=await fetch("https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=30&q=sports&type=video&key="+YOUTUBE_API_KEY);
        const json=await data.json();
        console.log(json.items)
       dispatch(getSportsVedio(json.items));
    }
    useEffect(()=>
    {
       getSportVedios() ;
    },[]);
  
}

export default useSportsVedios