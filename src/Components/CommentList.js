import React from 'react'
import Comments from './Comments'

const CommentList = ({data,addComment}) => {

      

  return (
    <div className=''>
        {data && data.map((comment)=> 
        <div>
          <Comments key={comment.id} data={comment} addComment={addComment}  />
          <div className='pl-5'>
          </div>
          </div>
        )}
    </div>
  )
}

export default CommentList