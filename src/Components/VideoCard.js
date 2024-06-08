import React from 'react'
import { countToDisplaycount } from '../Constants/useConstant';


const VideoCard = ({videoinfo,channelinfo}) => {


    const {snippet,statistics}=videoinfo;
    const {channelTitle,title,thumbnails}=snippet;
   const {viewCount}=statistics;

 const handleVideoContainerClick = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };


  return (

    <div className='m-2  p-2 cursor-pointer  rounded-lg  w-[400px] md:w-[300px]'  onClick={handleVideoContainerClick}>
        <div >
        <img  alt='img' className="rounded-lg" src={thumbnails.medium.url} />
        </div>

        <div className=' flex  flex-row w-[300px]'>
          <div className=' mr-2 mt-2 '  >
           <img  alt='img' className="rounded-full w-[40px] h-[40px] " src={channelinfo.snippet.thumbnails.default.url}/>
          </div>
          <div className='w-[230px] '>
            <p className='font-bold truncate-2-lines'>{title}</p>
            <p className='text-gray-600'>{channelTitle}</p>
         <p className='text-gray-600'>{countToDisplaycount(viewCount)} views</p>
         </div>
        </div>

    </div>
  )
}

export default VideoCard