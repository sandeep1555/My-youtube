import React from 'react'


const SideList = ({info}) => {

const {snippet}=info;

const handleVideoContainerClick = () => {
  // Scroll to the top of the page when the video container is clicked
  window.scrollTo({ top: 0, behavior: 'smooth' });
};


  return (

    <div className='flex ' onClick={handleVideoContainerClick} >
        <div className='w-[220px] '>
        <img  alt="img" className="rounded-xl p-2" src={snippet.thumbnails.medium.url} />
        </div>

        <div className='w-56  ' >
            <p className='font-bold text-sm  '>{snippet.title}</p>
            <p cl>{snippet.channelTitle}</p>
            <p>views</p>
        </div>

     </div>
  )
 }

export default SideList