import React, { useRef } from 'react'
import { useSelector } from 'react-redux';

const Comments = ({data}) => {

const {name,text}=data;
const handlecommentEnter=(e)=>
  {
  if(e.key==="Enter")
  {
    <Comments/>
  }
}

  return (
    <div className='flex items-center'>
        <div>
        <img alt='profile' className='w-[50px] h-[30px]' src="https://static.vecteezy.com/system/resources/previews/019/879/186/non_2x/user-icon-on-transparent-background-free-png.png"/>
        </div>


        <div>

      {<input type={text}  placeholder='write your comment' onKeyDown={handlecommentEnter}  />}
        </div>

    </div>
  )
}

export default Comments