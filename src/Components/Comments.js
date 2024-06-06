import React, { useState } from 'react'
import { useSelector } from 'react-redux';
import AddComment from './AddComment';
import CommentList from './CommentList';
import { HandThumbDownIcon, HandThumbUpIcon } from '@heroicons/react/24/solid';

const Comments = ({data,addComment}) => {
const user=useSelector(store=>store.user)
const {name,text}=data;
const [ShowReply,setShowReply]=useState(false);

const handleReplybutton=()=>
  {
 setShowReply(!ShowReply)
  }
  return (
    <div>
<div className='flex items-center my-2 '>
{user ? (
        <div className="w-[40px] h-[40px]  bg-blue-500 rounded-full flex  justify-center text-white text-3xl p-[2px] ">
          <span>{user.displayName[0].toUpperCase()}</span>
        </div>
      ) : (
        <button className="flex p-1 font-bold">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            class="w-10 h-10"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M17.982 18.725A7.488 7.488 0 0 0 12 15.75a7.488 7.488 0 0 0-5.982 2.975m11.963 0a9 9 0 1 0-11.963 0m11.963 0A8.966 8.966 0 0 1 12 21a8.966 8.966 0 0 1-5.982-2.275M15 9.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
            />
          </svg>
        </button>
      )}
        <div className='px-2'>
          <p>{name}</p>
          <p>{text}</p>
          </div>
    </div>
    <div className='ml-14 mt-[-5px] flex items-center '>
      <button><HandThumbUpIcon  className='w-[20px] h-[20px] text-gray-400 mx-1'/></button>
      <button><HandThumbDownIcon className='w-[20px] h-[20px] text-gray-400 mx-1'/></button>
      <button onClick={handleReplybutton} className='text-sm font-bold px-4'>reply</button>
      </div>
      {ShowReply && 
      <div className=''>
        <AddComment  addComment={addComment} parentId={data.id} />
        </div>
  }
  {data.replies && data.replies.length > 0 && (
          <div className={data.parentId? "ml-14":""}>
        <CommentList data={data.replies} addComment={addComment} />
        </div>
      )}

   
    </div>
    
  )
}

export default Comments