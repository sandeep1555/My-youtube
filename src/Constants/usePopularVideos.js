import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { getPopularvideo } from './VideosSlice';
import { YOUTUBE_API } from './useConstant';

const usePopularvideos = () => {

    const dispatch=useDispatch();
    const getpopularvideos= async() =>
    {
        const data=await fetch(YOUTUBE_API);
        const json=await data.json();

       dispatch(getPopularvideo(json.items));
    }
    useEffect(()=>
    {
        getpopularvideos();
    },[]);
  
}

export default usePopularvideos