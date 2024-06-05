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
    <div className='w-[850px] '>

<div className='  '>
<iframe  className="rounded-lg" width="850" height="500" src={"https://www.youtube.com/embed/"+videoId} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
</div>
<div className='my-1'>
<h1 className=' font-bold text-2xl max-w-[850px] truncate-1-lines '>{snippet.title}</h1>

<div className='flex items-center  my-2 mx-0  max-w-[850px] justify-between'>
  <div className='flex'>
    <img className="rounded-full bg-gray-400 w-10 h-10"  src={channelinfo?.snippet?.thumbnails?.default?.url}  alt='channelpic'/>   
    <div className='ml-2 flex  flex-col justify-center '>
<h2 className=' text-l font-bold '>{snippet?.channelTitle}</h2>
<p className='mt[-10px]'>{countToDisplaycount(viewCount)}views</p>
</div>
</div>
{Subscribe ? <button className='px-4 text-white bg-black  py-2 rounded-full ml-[-250px] ' onClick={()=>setSubscribe(!Subscribe)}>Subscribe</button>:
<button className='px-4 text-balck bg-neutral-200  py-2 rounded-full ml-[-250px]  flex' onClick={()=>setSubscribe(!Subscribe)}><BellAlertIcon className='w-[20px] h-[20px] mr-2'/>Subscribed</button>}


<div className='flex'>
<button className='  px-4 bg-gray-100 py-2 rounded-l-full border-r-2' onClick={()=>{setLiked(!liked);setUnliked(false)}}><HandThumbUpIcon className={liked?'w-[30px] h-[30px] text-black':'w-[30px] h-[30px] text-gray-400'} /></button>

<button className={'px-4 bg-gray-100  py-2 rounded-r-full'} onClick={()=>{setUnliked(!unliked);setLiked(false)}}><HandThumbDownIcon className={unliked ? "w-[30px] h-[30px] text-black":'w-[30px] h-[30px] text-gray-400'}/></button>
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