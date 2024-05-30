import React from 'react'
import CommentList from './CommentList'

const CommentContainer = () => {


const commentsData=[
    {
        name:"sandeep",
        text:"nice video",
        replies:[
            {
                name:"sandeep",
                text:"nice video",
                replies:[],
            },{
                name:"sandeep",
                text:"nice video",
                replies:[
                    {
                        name:"sandeep",
                        text:"nice video",
                        replies:[],
                    },{
                        name:"sandeep",
                        text:"nice video",
                        replies:[{
                            name:"sandeep",
                            text:"nice video",
                            replies:[],
                        },{
                            name:"sandeep",
                            text:"nice video",
                            replies:[],
                        },
                    ],
                    }
                ],
            },{
                name:"sandeep",
                text:"nice video",
                replies:[],
            }
        ],
    },
    {
        name:"sandeep",
        text:"nice video",
        replies:[],
    },
    {
        name:"sandeep",
        text:"nice video",
        replies:[],
    },
    {
        name:"sandeep",
        text:"nice video",
        replies:[],
    },
    {
        name:"sandeep",
        text:"nice video",
        replies:[],
    }
]



  return (
    <div className='my-4'>
        <h1 className='text-xl font-bold'>Comments</h1>
        <CommentList data={commentsData}/>


    </div>
  )
}

export default CommentContainer