import React, { useEffect } from 'react'
import { Link, useSearchParams } from 'react-router-dom'
import { YOUTUBE_API_KEY } from '../Constants/useConstant';
import { useDispatch, useSelector } from 'react-redux';
import { getSearchVedio } from '../Constants/VediosSlice';
import SearchList from './SearchList';
import ButtonList from './ButtonList';

const SearchResults = () => {
  const [searchparams] =useSearchParams();
  const suggestiontext=searchparams.get("search_query");
  console.log(suggestiontext)
  const dispatch=useDispatch();
  const searchVedio=useSelector(store=>store.vedios.searchVedio);
  
  useEffect(()=>
  {
    suggestionVedios();
  },[suggestiontext])







const suggestionVedios=async()=>
{
  const data=await fetch("https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=20&q="+suggestiontext+"&key="+YOUTUBE_API_KEY);
  const json=await data.json();
  console.log(json.items);
  dispatch(getSearchVedio(json?.items));
}


  searchVedio && searchVedio.map(vedio=> console.log());

  useEffect(()=>
  {
    suggestionVedios();
  },[])


  
  return (

    searchVedio && 
    <div>
      <ButtonList/>
     {  searchVedio.map((vedio)=>
      (
       
        <Link  key={vedio.id.vedioId} to={"/watch?v="+ vedio.id?.videoId}><SearchList  vedios={vedio} /></Link>
      ))}
     

    </div>
  )
}

export default SearchResults