import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { getPopularvideo } from './VideosSlice';
import { YOUTUBE_API, YOUTUBE_API_KEY } from './useConstant';

const usePopularvideos = () => {

    const dispatch=useDispatch();
    const getpopularvideos= async() =>
    {
        const data=await fetch(YOUTUBE_API);
        const json=await data.json();


       const channelIds=json.items.map((video)=>video.snippet.channelId);
       const channelDetailsProm=channelIds.map(async channelId=>
        {
            const data=await fetch("https://www.googleapis.com/youtube/v3/channels?part=snippet&id="+channelId+"&key="+YOUTUBE_API_KEY)
     const json=await data.json();
           return json.items[0]
        });
        const channelDetails = await Promise.all(channelDetailsProm);

         const videosWithChannelDetails= json.items.map((video,index)=>(
         {
              videoInfo:video,
              channelInfo:channelDetails[index],
         }));
         dispatch(getPopularvideo(videosWithChannelDetails));
         console.log(videosWithChannelDetails);
    }
    useEffect(()=>
    {
        getpopularvideos();
    },[]);
  
}

export default usePopularvideos








// const getpopularvideos= async() =>
//     {
//         const data=await fetch(YOUTUBE_API);
//         const json=await data.json();
//      console.log(json.items)
//        dispatch(getPopularvideo(json.items));
//     }
//     useEffect(()=>
//     {
//         getpopularvideos();
//     },[]);