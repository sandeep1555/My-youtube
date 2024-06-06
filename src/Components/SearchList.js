import React from 'react'
import { countToDisplaycount } from '../Constants/useConstant';

const SearchList = ({videoinfo,channelinfo}) => {


  const {snippet}=videoinfo;
  const {channelTitle,title,thumbnails,description}=snippet;
  const {statistics}=channelinfo;
  const {viewCount}=statistics;
 
  const handleVideoContainerClick = () => {
  
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };



  return (
    <div className='flex p-2 m-2 ' onClick={handleVideoContainerClick}>
        <div className='m-2  w-4/12'>
        <img  alt='img' className="rounded-lg w-[500px]" src={thumbnails.medium.url} />
        </div>

        <div className=' m-2 w-7/12'>
            <p className='font-medium  text-xl '>{title}</p>
            <p className='text-gray-600 text-sm'>{countToDisplaycount(viewCount)} views</p>
            <div className='flex items-center my-2'>
            <img  alt='img' className="rounded-full w-[40px] h-[40px] " src={channelinfo.snippet.thumbnails.default.url}/>
            <p className='mx-2 text-gray-600'>{channelTitle}</p>
            </div>
            
            <p className='mt-4 text-sm text-gray-600'> {description}</p>
            
        </div>
        
    </div>
  )
}

export default SearchList