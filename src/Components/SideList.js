import React, { useEffect, useState } from 'react'
import videoCard from './VideoCard';
import { YOUTUBE_API_KEY } from '../Constants/useConstant';

const SideList = ({info}) => {

const {snippet}=info;

  

  return (

    <div className='flex ' >
        <div className='w-[220px] '>
        <img  alt="img" className="rounded-xl p-2" src={snippet.thumbnails.medium.url} />
        </div>

        <div className='w-56  ' >
            <p className='font-bold text-sm  '>{snippet.title}</p>
            <p cl>{snippet.channelTitle}</p>
            <p>views</p>
        </div>

     </div>
  )
 }

export default SideList