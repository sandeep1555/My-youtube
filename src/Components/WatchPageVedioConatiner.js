import React from 'react'
import CommentContainer from './CommentContainer'
import { useSelector } from 'react-redux';

const WatchPageVedioConatiner = ({videoId}) => {
    const watchPagevideo=useSelector(store=>store.videos.watchpagevideo);
    const {snippet}=watchPagevideo
  return (watchPagevideo &&
    <div>

<div className='col-span-11 m-2 p-2 '>

<iframe  className="rounded-lg" width="950" height="500" src={"https://www.youtube.com/embed/"+videoId} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
<h1 className='p-2  font-bold text-2xl max-w-[950px]'>{snippet.title}</h1>
<div className='flex items-center'>
    <img className="rounded-full bg-gray-400 w-12 h-12"  />
    <div>
<h2 className='mx-2 text-l font-bold '>{watchPagevideo?.snippet?.channelTitle}</h2>
<p className='mx-2'>{watchPagevideo?.statistics?.viewCount}views</p>
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


    </div>
  )
}

export default WatchPageVedioConatiner