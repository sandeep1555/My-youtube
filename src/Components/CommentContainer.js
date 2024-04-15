import React from 'react'
import Comments from './Comments'
import CommentList from './CommentList'

const CommentContainer = () => {


const commentsData=[
    {
        name:"sandeep",
        text:"nice vedio",
        replies:[
            {
                name:"sandeep",
                text:"nice vedio",
                replies:[],
            },{
                name:"sandeep",
                text:"nice vedio",
                replies:[
                    {
                        name:"sandeep",
                        text:"nice vedio",
                        replies:[],
                    },{
                        name:"sandeep",
                        text:"nice vedio",
                        replies:[{
                            name:"sandeep",
                            text:"nice vedio",
                            replies:[],
                        },{
                            name:"sandeep",
                            text:"nice vedio",
                            replies:[],
                        },
                    ],
                    }
                ],
            },{
                name:"sandeep",
                text:"nice vedio",
                replies:[],
            }
        ],
    },
    {
        name:"sandeep",
        text:"nice vedio",
        replies:[],
    },
    {
        name:"sandeep",
        text:"nice vedio",
        replies:[],
    },
    {
        name:"sandeep",
        text:"nice vedio",
        replies:[],
    },
    {
        name:"sandeep",
        text:"nice vedio",
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