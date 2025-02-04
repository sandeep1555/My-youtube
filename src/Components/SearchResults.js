import React, { useEffect } from 'react'
import { Link, useSearchParams } from 'react-router-dom'
import { YOUTUBE_API_KEY } from '../Constants/useConstant';
import { useDispatch, useSelector } from 'react-redux';
import { getSearchvideo} from '../Constants/VideosSlice';
import SearchList from './SearchList';
import ButtonList from './ButtonList';

const SearchResults = () => {
  const [searchparams] =useSearchParams();
  const suggestiontext=searchparams.get("search_query");
  const dispatch=useDispatch();
  const searchvideo=useSelector(store=>store.videos.searchvideo);
  
  useEffect(()=>
  {
    suggestionvideos();
  },[suggestiontext])
  
const suggestionvideos=async()=>
{
  const data=await fetch("https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=20&q="+suggestiontext+"&key="+YOUTUBE_API_KEY);
  const json=await data.json();
  const channelIds=json.items.map((video)=>video?.snippet?.channelId);
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
         dispatch(getSearchvideo(videosWithChannelDetails));
}

  useEffect(()=>
  {
    suggestionvideos();
  },[])

 




  
  return (

    searchvideo && 
    <div className=''>
      <div className='md:ml-[-66px] ml-0 mt-4'>
      <ButtonList/>
      </div>
      <p className='ml-[38px] mt-4 text-gray-600'>Showing results for <span  className='font-bold'>{suggestiontext}</span> </p>
     { searchvideo && searchvideo.map((video)=>
      (
        <div className='my-4' >

       
        <Link  key={video.videoInfo.id} to={video.videoInfo.id.videoId ? ("/watch?v="+video.videoInfo.id.videoId):("/watch?v="+video.videoInfo.id)}><SearchList  videoinfo={video.videoInfo} channelinfo={video.channelInfo}  /></Link>
        </div>
      ))}
     

    </div>
  )
}

export default SearchResults