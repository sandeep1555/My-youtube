import React from 'react'

const VedioCard = ({info}) => {
    const {snippet,statistics}=info;

    const {channelTitle,title,thumbnails}=snippet;

    const {viewCount}=statistics


  return (

    <div className='m-2  p-2 cursor-pointer  rounded-lg  w-[300px]' >
        <div>
        <img  alt='img' className="rounded-lg" src={thumbnails.medium.url} />
        </div>

        <div className='w-72'>
            <p className='font-bold w-72 '>{title}</p>
            <p cl>{channelTitle}</p>
            <p>{viewCount} views</p>
        </div>

    </div>
  )
}

export default VedioCard