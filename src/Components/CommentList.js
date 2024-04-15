import React from 'react'
import Comments from './Comments'

const CommentList = ({data}) => {

      

  return (
    <div className=''>
        {data.map((comment)=>
        (
            <>
            <div>
           <Comments data={comment} />
           </div>

           <div className='pl-5 border-l-2 border-black ml-5'>
              
              <CommentList data={comment.replies}/>
            </div>
            </>
        ))}
      

    </div>
  )
}

export default CommentList