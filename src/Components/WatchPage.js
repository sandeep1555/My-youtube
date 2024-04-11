import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux';
import { useParams, useSearchParams } from 'react-router-dom'
import { closeSideBar } from '../Constants/configSlice';
import SideList from './SideList';
import { YOUTUBE_API, YOUTUBE_API_BYID, YOUTUBE_API_KEY } from '../Constants/useConstant';

const WatchPage = () => {
const [watchPageVedio,setwatchPageVedio]=useState([]);
    const [popularVedio,setpopularVedio]=useState([]);
const dispatch=useDispatch();
    const [serachparams]=useSearchParams();
    const vedioId=serachparams.get("v");

useEffect(()=>
{
   dispatch(closeSideBar());
})


const getpopularVedios= async() =>
{
const data=await fetch(YOUTUBE_API);
const json=await data.json();
setpopularVedio(json.items)
}

useEffect(()=>
{
    getpopularVedios();
},[]);

const getVedioByid=async()=>
{
    const data=await fetch("https://www.googleapis.com/youtube/v3/videos?id="+vedioId+"&key="+YOUTUBE_API_KEY+"&part=snippet&part=statistics");
const json=await data.json();
setwatchPageVedio(json.items[0])
console.log(json.items[0])

}
useEffect(()=>
{
    getVedioByid();
},[]);






  return (
    <div className='flex flex-row'>
    <div className='col-span-11 m-2 p-2 '>

<iframe  className="rounded-lg" width="950" height="600" src={"https://www.youtube.com/embed/"+vedioId} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
<h1 className='p-2  font-bold text-2xl'>{watchPageVedio.snippet?.title}</h1>

    </div>
    <div className='flex flex-col'>
 { popularVedio.map((vedio)=>
 (
    <SideList  key={vedio.id} info={vedio}/>
 ))}
   </div>
    </div>
  )
}

export default WatchPage