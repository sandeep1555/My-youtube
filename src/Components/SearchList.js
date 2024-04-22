import React from 'react'

const SearchList = ({vedios}) => {

    const {snippet}=vedios;
    const {channelTitle,title,thumbnails,description}=snippet;

  return (
    <div className='flex p-2 m-2 '>
        <div className='m-2'>
        <img  alt='img' className="rounded-lg w-[500px]" src={thumbnails.medium.url} />
        </div>

        <div className=' m-2'>
            <p className='font-medium  text-xl '>{title}</p>
            <p className='mt-10'>{channelTitle}</p>
            <p className='mt-4'> {description}</p>
            {/* <p>{viewCount} views</p> */}
        </div>
        
    </div>
  )
}

export default SearchList