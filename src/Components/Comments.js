import React, { useRef, useState } from 'react'
import { useSelector } from 'react-redux';
import AddComment from './AddComment';
import CommentList from './CommentList';

const Comments = ({data,addComment}) => {

const {name,text}=data;
const [ShowReply,setShowReply]=useState(false);

const handleReplybutton=()=>
  {
 setShowReply(!ShowReply)
  }
  return (
    <div>
<div className='flex items-center'>
        <img alt='profile' className='w-[50px] h-[30px]' src="https://static.vecteezy.com/system/resources/previews/019/879/186/non_2x/user-icon-on-transparent-background-free-png.png"/>
        <div>
          <p>{name}</p>
          <p>{text}</p>
          </div>
    </div>
    <div className='pl-10'>
      <button onClick={handleReplybutton}>reply</button>
      {ShowReply && 
        <AddComment  addComment={addComment} parentId={data.id} />
  }
  {data.replies && data.replies.length > 0 && (
        <CommentList data={data.replies} addComment={addComment} />
      )}

    </div>
    </div>
    
  )
}

export default Comments