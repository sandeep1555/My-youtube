import React from 'react'

const LiveChat = ({name,comment}) => {
  return (
    <div className='border-2 boder-black  p-2 '>

     <div className='flex items-center'>
     <img alt="user-logo" className='h-8'   src="https://static.vecteezy.com/system/resources/previews/019/879/186/non_2x/user-icon-on-transparent-background-free-png.png"/>
     <span className='font-bols px-2'>{name}</span>
     <span>{comment}</span>
     </div>


    </div>
  )
}

export default LiveChat