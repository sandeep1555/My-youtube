import React from 'react'
import Comments from './Comments'

const CommentList = ({data,addComment}) => {

      

  return (
    <div className=''>
        {data && data.map((comment)=> 
        <div className='pl-[20px]'>
          <Comments key={comment.id} data={comment} addComment={addComment}  />
         
          </div>
        )}
    </div>
  )
}

export default CommentList