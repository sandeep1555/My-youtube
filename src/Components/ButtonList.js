import React  from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {  setactiveButton } from '../Constants/configSlice';
import Buttons from './Buttons';
import { YOUTUBE_API_KEY } from '../Constants/useConstant';
import { getLivevideo, getMusicvideo, getNewsvideo, getSportsvideo } from '../Constants/VideosSlice';
import {  useNavigate } from 'react-router-dom';



const ButtonList = () => {
 const navigate=useNavigate();
const buttonList=['All','Music','News','Live'];
const dispatch=useDispatch();
const activeButton=useSelector(store=>store.config.activeButton);

const handleButtonClick = async(buttonName) => {

  const data=await fetch("https://www.googleapis.com/youtube/v3/search?part=snippet&q="+buttonName+"&type=video&maxResults=30&key="+YOUTUBE_API_KEY);
   const json=await data.json();
  const liveVideosId= json.items.map((video)=>video?.id?.videoId).join(",");



 if(liveVideosId)
 {const dataId=await fetch("https://www.googleapis.com/youtube/v3/videos?id="+liveVideosId+"&key="+YOUTUBE_API_KEY+"&part=snippet&part=statistics");
  const jsonId=await dataId.json();

   
  const channelIds=jsonId.items.map((video)=>video.snippet.channelId);
  const channelDetailsProm=channelIds.map(async channelId=>
   {
       const data=await fetch("https://www.googleapis.com/youtube/v3/channels?part=snippet&id="+channelId+"&key="+YOUTUBE_API_KEY)
const json=await data.json();
      return json.items[0]
   });
   const channelDetails = await Promise.all(channelDetailsProm);

    const videosWithChannelDetails= jsonId.items.map((video,index)=>(
    {
         videoInfo:video,
         channelInfo:channelDetails[index],
    }));

  buttonName==="Live" && dispatch(getLivevideo(videosWithChannelDetails))
  buttonName==="Music" && dispatch(getMusicvideo(videosWithChannelDetails))
  buttonName==="News" && dispatch(getNewsvideo(videosWithChannelDetails))
  buttonName==="Sports" && dispatch(getSportsvideo(videosWithChannelDetails))
dispatch(setactiveButton((buttonName === activeButton ? 'All' : buttonName)));
navigate("/")
 }
}
  return (
  

<div className='flex  flex-col pt-2 md:pt-0'>
  <div className='flex md:px-4 md:mx-[90px] ml-[10px]  '>
    {buttonList.map((name)=>
    (
     <Buttons key={name}  buttonname={name} getCategory={handleButtonClick}   />
    ))}

 </div>

    </div>

 
  )
}


export default ButtonList