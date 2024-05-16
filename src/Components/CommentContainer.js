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
    <div>
        <h1>Comments</h1>
        <CommentList data={commentsData}/>


    </div>
  )
}

export default CommentContainer