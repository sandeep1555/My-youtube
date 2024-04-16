import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { getPopularVedio } from './VediosSlice';
import { YOUTUBE_API } from './useConstant';

const usePopularVedios = () => {

    const dispatch=useDispatch();
    const getpopularVedios= async() =>
    {
        const data=await fetch(YOUTUBE_API);
        const json=await data.json();
        console.log(json.items)
       dispatch(getPopularVedio(json.items));
    }
    useEffect(()=>
    {
        getpopularVedios();
    },[]);
  
}

export default usePopularVedios