import React from 'react'

const SearchList = ({vedio}) => {

    const {snippet}=vedio;
    const {channelTitle,title,thumbnails}=snippet;

  return (
    <div className='flex p-2 m-2 '>
        <div className='m-2'>
        <img  alt='img' className="rounded-lg w-[500px]" src={thumbnails.medium.url} />
        </div>

        <div className='w-72 m-2'>
            <p className='font-medium w-72 text-xl '>{title}</p>
            <p cl>{channelTitle}</p>
            {/* <p>{viewCount} views</p> */}
        </div>
        
    </div>
  )
}

export default SearchList