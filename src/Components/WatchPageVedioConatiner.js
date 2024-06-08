import React, { useState } from 'react'
import CommentContainer from './CommentContainer'
import { useSelector } from 'react-redux';
import { countToDisplaycount } from '../Constants/useConstant';
import { BellAlertIcon, HandThumbDownIcon, HandThumbUpIcon } from '@heroicons/react/24/solid'; 
const WatchPageVedioConatiner = ({videoinfo,channelinfo,videoId}) => {
    const watchPagevideo=useSelector(store=>store.videos.watchpagevideo);
    const {snippet,statistics}=videoinfo;
    const [liked,setLiked]=useState(false);
    const [unliked,setUnliked]=useState(false);
    const {viewCount}=statistics
    console.log(channelinfo)
const [Subscribe,setSubscribe]=useState(false);

  return (watchPagevideo &&
    <div className='md:w-[850px] overflow-x-hidden '>

<div className='  '>
<iframe  className="rounded-lg md:w-[850px] md:h-[500px] w-[400px] h-[200px]" src={"https://www.youtube.com/embed/"+videoId} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
</div>
<div className='my-1'>
<h1 className=' font-bold md:text-2xl md:max-w-[850px] max-w-[400px]  truncate-2-lines text-lg  '>{snippet.title}</h1>

<div className='flex items-center  md:my-3 my-2 mx-0  md:max-w-[850px] max-w-[400px] justify-between'>
  <div className='flex'>
    <img className="rounded-full bg-gray-400 md:w-10 md:h-10 w-8 h-8"  src={channelinfo?.snippet?.thumbnails?.default?.url}  alt='channelpic'/>   
    <div className='ml-2 flex  flex-col justify-center mt-[-5px] md:mt-[-10px]'>
<h2 className='md:text-lg text-sm font-bold '>{snippet?.channelTitle}</h2>
<p className='md:mt[-10px] md:text-lg text-sm'>{countToDisplaycount(viewCount)}views</p>
</div>
</div>
{Subscribe ? <button className='md:px-4 px-2 text-white bg-black  md:py-2 py-1 rounded-full md:ml-[-250px] md:text-lg text-sm   ' onClick={()=>setSubscribe(!Subscribe)}>Subscribe</button>:
<button className='md:px-4 px-2 text-balck bg-neutral-200  md:py-2 py-1 rounded-full md:ml-[-250px]  md:text-lg text-sm   flex items-center' onClick={()=>setSubscribe(!Subscribe)}><BellAlertIcon className='md:w-[20px] md:h-[20px] w-[15px] h-[15px] mr-2'/>Subscribed</button>}


<div className='flex'>
<button className=' px-2  md:px-4 bg-gray-100 md:py-2 py-1 rounded-l-full border-r-2' onClick={()=>{setLiked(!liked);setUnliked(false)}}><HandThumbUpIcon className={liked?'md:w-[30px] md:h-[30px] w-[20px] h-[20px] text-black':'md:w-[30px] md:h-[30px] w-[20px] h-[20px]] text-gray-400'} /></button>

<button className={'px-2 md:px-4 bg-gray-100  py-1 md:py-2 rounded-r-full'} onClick={()=>{setUnliked(!unliked);setLiked(false)}}><HandThumbDownIcon className={unliked ? "md:w-[30px] md:h-[30px]  w-[20px] h-210px] text-black":'md:w-[30px] md:h-[30px] w-[20px] h-[20px] text-gray-400'}/></button>
{/* <butoon className='px-4 text-black bg-gray-100  py-2 rounded-full font-medium mx-4' >Share</butoon> */}
{/* <button className='bg-gray-100 rounded-full h-10 w-10 ml-4 px-2'><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
  <path stroke-linecap="round" stroke-linejoin="round" d="M6.75 12a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0ZM12.75 12a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0ZM18.75 12a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z" />
</svg>
</button> */}
</div>
</div>


</div>

<div>
<CommentContainer/>
</div>


    </div>
  )
}

export default WatchPageVedioConatiner