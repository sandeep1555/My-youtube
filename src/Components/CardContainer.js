import React, { useEffect, useState } from 'react'
import { YOUTUBE_API } from '../Constants/useConstant';
import VedioCard from './VedioCard';
import { Link } from 'react-router-dom';

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
    <div className='w-10/12  m-2 flex flex-wrap '>
        {popularVedio.map((vedio)=>
        (
           <Link to={"/watch?v="+vedio.id}><VedioCard key={vedio.id} info={vedio}/></Link> 
        ))}
        
    </div>
  )
}

export default CardContainer