import React, { useEffect, useState } from 'react'
import { YOUTUBE_API } from '../Constants/useConstant';
import videoCard from './VideoCard';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getPopularvideo } from '../Constants/VideosSlice';
import usePopularvideos from '../Constants/usePopularvideos';

const CardContainer = ({video}) => {
  
  return (
   
    <div className='w-12/12  m-2 flex flex-wrap ml-[90px] '>
        {   video&&  video.map((video)=>
        (
           <Link key={video.id} to={"/watch?v="+video.id?.videoId}><videoCard  info={video}/></Link> 
        ))}
        
    </div>
  )
}

export default CardContainer