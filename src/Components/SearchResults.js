import React, { useEffect } from 'react'
import { Link, useSearchParams } from 'react-router-dom'
import { YOUTUBE_API_KEY } from '../Constants/useConstant';
import { useDispatch, useSelector } from 'react-redux';
import { getSearchvideo } from '../Constants/VideosSlice';
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
 
  dispatch(getSearchvideo(json?.items));
}

  useEffect(()=>
  {
    suggestionvideos();
  },[])




  
  return (

    searchvideo && 
    <div>
      <ButtonList/>
     {  searchvideo.map((video)=>
      (
       
        <Link  key={video.id.videoId} to={"/watch?v="+ video.id?.videoId}><SearchList  videos={video} /></Link>
      ))}
     

    </div>
  )
}

export default SearchResults