import React from 'react'

const VedioCard = ({info}) => {
    console.log(info);
    const {snippet,statistics}=info;

    const {channelTitle,title,thumbnails}=snippet;

    const {viewCount}=statistics


  return (

    <div className='w-72 m-2  p-2 cursor-pointer  rounded-lg' >
        <div>
        <img  className="rounded-lg" src={thumbnails.medium.url} />
        </div>

        <div className=''>
            <p className='font-bold'>{title}</p>
            <p>{channelTitle}</p>
            <p>{viewCount} views</p>
        </div>

    </div>
  )
}

export default VedioCard