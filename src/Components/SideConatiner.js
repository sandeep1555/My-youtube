import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import SideList from './SideList'
import { getSideListvideo } from '../Constants/VideosSlice'
import { YOUTUBE_API_KEY } from '../Constants/useConstant'

const SideConatiner = ({categoryId,Islive}) => {


    const sideListVideo=useSelector(store=>store.videos.sidelistvideo)
    const dispatch=useDispatch();

    


    const Categoryvideos=async()=>
    {
      const data=await fetch("https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=20&order=date&videosCategoryId="+categoryId+"&key="+YOUTUBE_API_KEY);
      const json=await data.json();
  
    const channelIds=json?.items?.map((video)=>video.snippet.channelId);
    const channelDetailsProm=channelIds.map(async channelId=>
     {
         const data=await fetch("https://www.googleapis.com/youtube/v3/channels?part=snippet,statistics&id="+channelId+"&key="+YOUTUBE_API_KEY)
  const json=await data.json();

        return json.items[0]
     });
     const channelDetails = await Promise.all(channelDetailsProm);
  
      const videosWithChannelDetails= json?.items?.map((video,index)=>(
      {
           videoInfo:video,
           channelInfo:channelDetails[index],
      }));
      dispatch(getSideListvideo(videosWithChannelDetails));
  
      
      
    }
  useEffect(()=>
  {
    Categoryvideos();
  
  },[])


  return (
    <div>
     

<div className='flex flex-col md:mx-3'>


 { sideListVideo && sideListVideo.map((video)=>(
  <div className=''>
  <Link  key={video.videoInfo.id} to={video.videoInfo.id.videoId ? ("/watch?v="+video.videoInfo.id.videoId):("/watch?v="+video.videoInfo.id)} ><SideList videoinfo={video.videoInfo} channelinfo={video.channelInfo}/></Link>
  </div>
 ))
 }
 </div>


    </div>
  )
}

export default SideConatiner