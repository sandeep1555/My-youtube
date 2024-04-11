import React from 'react'
import VedioCard from './VedioCard';

const SideList = ({info}) => {
    const {snippet,statistics}=info;

    const {channelTitle,title,thumbnails}=snippet;

    const {viewCount}=statistics;


  return (

    <div className='m-1  p-2 cursor-pointer flex flex-row ' >
        <div className='w-[220px] '>
        <img  alt="img" className="rounded-xl p-2" src={thumbnails.medium.url} />
        </div>

        <div className='w-56  ' >
            <p className='font-bold text-sm  '>{title}</p>
            <p cl>{channelTitle}</p>
            <p>{viewCount} views</p>
        </div>

    </div>
  )
}

export default SideList