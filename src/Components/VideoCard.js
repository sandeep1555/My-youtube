import React, { useEffect } from 'react'
import { YOUTUBE_API_KEY } from '../Constants/useConstant';
import { useDispatch, useSelector } from 'react-redux';
import { getChannelInfo } from '../Constants/VideosSlice';
import useChannelInfo from '../Constants/useChannelInfo';


const VideoCard = ({videoinfo,channelinfo}) => {


    const {snippet,statistics}=videoinfo;
    const {channelTitle,title,thumbnails}=snippet;
   const {viewCount}=statistics;

 const handleVideoContainerClick = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (

    <div className='m-2  p-2 cursor-pointer  rounded-lg  w-[300px]'  onClick={handleVideoContainerClick}>
        <div >
        <img  alt='img' className="rounded-lg" src={thumbnails.medium.url} />
        </div>

        <div className=' flex  flex-row w-[400px]'>
          <div className=' mr-2 mt-2 '  >
           <img  alt='img' className="rounded-full w-[40px] h-[40px] " src={channelinfo.snippet.thumbnails.default.url}/>
          </div>
          <div className='w-[230px]'>
            <p className='font-bold   '>{title}</p>
            <p cl>{channelTitle}</p>
         <p>{viewCount} views</p>
         </div>
        </div>

    </div>
  )
}

export default VideoCard