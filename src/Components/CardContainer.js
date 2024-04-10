import React, { useEffect, useState } from 'react'
import { YOUTUBE_API } from '../Constants/useConstant';
import VedioCard from './VedioCard';

const CardContainer = () => {

    const [popularVedio,setpopularVedio]=useState([]);
    useEffect(()=>
        {
            getpopularVedios();
        },[]);
    
    
    const getpopularVedios= async() =>
    {
        const data=await fetch(YOUTUBE_API);
        const json=await data.json();
        setpopularVedio(json.items)
    }

    
  return (
    <div className='flex flex-wrap m-2 overflow-y-scroll h-screen '>
        {popularVedio.map((vedio)=>
        (
            <VedioCard key={vedio.id} info={vedio}/>
        ))}
        
    </div>
  )
}

export default CardContainer