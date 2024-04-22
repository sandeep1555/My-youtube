import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux';
import { useParams, useSearchParams } from 'react-router-dom'
import { closeSideBar } from '../Constants/configSlice';
import SideList from './SideList';
import { YOUTUBE_API, YOUTUBE_API_BYID, YOUTUBE_API_KEY } from '../Constants/useConstant';
import CommentContainer from './CommentContainer';
import LiveChat from './LiveChat';
import LiveChatContainer from './LiveChatContainer';

const WatchPage = () => {

  
const [watchPageVedio,setwatchPageVedio]=useState([]);
const [SideListVedio,setSideListVedio]=useState([]);
const dispatch=useDispatch();
    const [serachparams]=useSearchParams();
    const vedioId=serachparams.get("v");
    const categoryId= watchPageVedio?.snippet?.categoryId;
    console.log(vedioId);
  
   


useEffect(()=>
{
   dispatch(closeSideBar());
})

const getVedioByid=async()=>
{
    const data=await fetch("https://www.googleapis.com/youtube/v3/videos?id="+vedioId+"&key="+YOUTUBE_API_KEY+"&part=snippet&part=statistics%2CcontentDetails");
const json=await data.json();
setwatchPageVedio(json.items[0])
console.log(json)

}
useEffect(()=>
{
    getVedioByid();
},[]);


  const CategoryVedios=async()=>
  {
    const data=await fetch("https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=20&order=date&vedioCategoryId="+categoryId+"&key="+YOUTUBE_API_KEY);
    const json=await data.json();
    setSideListVedio(json.items)
    
  }
useEffect(()=>
{
 watchPageVedio && CategoryVedios();

},[])





if(watchPageVedio && SideListVedio)
  return  (
    <div className='flex flex-row'>
    <div className='col-span-11 m-2 p-2 '>

<iframe  className="rounded-lg" width="950" height="500" src={"https://www.youtube.com/embed/"+vedioId} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
<h1 className='p-2  font-bold text-2xl max-w-[950px]'>{watchPageVedio.snippet?.title}</h1>
<div className='flex items-center'>
    <img className="rounded-full bg-gray-400 w-12 h-12"  src=""/>
    <div>
<h2 className='mx-2 text-l font-bold '>{watchPageVedio.snippet?.channelTitle}</h2>
<p className='mx-2'>{watchPageVedio.statistics?.viewCount}views</p>
</div>
<button className='px-4 text-white bg-black mx-3 py-2 rounded-full '>Subcribe</button>
<button className=' ml-[210px] px-4 bg-gray-100 py-2 rounded-l-full border-r-2 pr-10 '>👍🏻</button>

<button className='px-4 bg-gray-100  py-2 rounded-r-full '>👎🏻</button>
<butoon className='px-4 text-black bg-gray-100  py-2 rounded-full font-medium mx-4' >Share</butoon>
<button className='px-4 text-black bg-gray-100  py-2 rounded-full font-medium '>Download</button>
<button className='bg-gray-100 rounded-full h-10 w-10 ml-4 px-2'><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
  <path stroke-linecap="round" stroke-linejoin="round" d="M6.75 12a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0ZM12.75 12a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0ZM18.75 12a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z" />
</svg>
</button>
</div>

<CommentContainer/>
    </div>
    <div className='flex flex-col'>
 {SideListVedio.map((vedio=>(
  <SideList  key={vedio.id} info={vedio}/>
 )))}

 <LiveChatContainer/>



   </div>
    </div>
  )
}

export default WatchPage