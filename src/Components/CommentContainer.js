import React, { useRef, useState } from 'react'
import CommentList from './CommentList'
import Comments from './Comments'
import AddComment from './AddComment';

const CommentContainer = () => {
   

const commentsData=[
    {
        name:"sandeep1",
        text:"nice video",
        replies:[
            {
                name:"sandeepS1",
                text:"nice video",
                replies:[],
            },{
                name:"sandeepS2",
                text:"nice video",
                replies:[
                    {
                        name:"sandeepSS1",
                        text:"nice video",
                        replies:[],
                    },{
                        name:"sandeepSS2",
                        text:"nice video",
                        replies:[{
                            name:"sandeepSSS1",
                            text:"nice video",
                            replies:[],
                        },{
                            name:"sandeepSSS2",
                            text:"nice video",
                            replies:[],
                        },
                    ],
                    }
                ],
            },{
                name:"sandeepS3",
                text:"nice video",
                replies:[],
            }
        ],
    },
    {
        name:"sandeep2",
        text:"nice video",
        replies:[],
    },
    {
        name:"sandeep3",
        text:"nice video",
        replies:[],
    },
    {
        name:"sandeep4",
        text:"nice video",
        replies:[],
    },
    {
        name:"sandeep5",
        text:"nice video",
        replies:[],
    }
]

const [Comments,setComments]=useState([]);

const AddComments=(name,text,parentId=null)=>
    {

        const newComment = {
            id: Date.now(),
            name:name,
      text:text,
      parentId,
      replies: [],
          };
        if(parentId===null) 
            {
                setComments([newComment,...Comments]);
            }
else{
        
        setComments(prevComments => 
            prevComments.map(comment => 
              comment.id === parentId
                ? { ...comment, replies: [ ...comment.replies,newComment] }
                : comment
            )
          );
   
}

    }
    console.log(Comments);


  return (
    <div className='my-4'>
        <h1 className='text-2xl font-bold bg-neutral-100 rounded-lg my- mb-6'>Comments</h1>
        <AddComment  addComment={AddComments} />
        <CommentList data={Comments} addComment={AddComments} />
        



    </div>
  )
}

export default CommentContainer