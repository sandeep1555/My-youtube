import React from 'react'

import VideoCard from './VideoCard';
import { Link } from 'react-router-dom';



const CardContainer = ({video}) => {


  return (
   
    <div className='w-12/12  m-2 flex flex-wrap md:ml-[90px] ml-[45px] ' >
        {   video&&  video.map((video)=>
        (
          
           <Link    key={video.videoInfo.id} to={video.videoInfo.id.videoId ? ("/watch?v="+video.videoInfo.id.videoId):("/watch?v="+video.videoInfo.id)}><VideoCard  videoinfo={video.videoInfo} channelinfo={video.channelInfo}/></Link> 
        ))}
        
    </div>
  )
}

export default CardContainer


