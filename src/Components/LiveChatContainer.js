import React, { useEffect, useRef, useState } from 'react'
import LiveChat from './LiveChat'
import { useDispatch, useSelector } from 'react-redux'
import { addLivechat } from '../Constants/chatSlice'
import { Namegenerate, makeid } from '../Constants/useConstant'

const LiveChatContainer = () => {


const [commenttext,setcommenttext]=useState(null);
    const liveMessage=useSelector(store=>store.livechat.Livechat)
const dispatch=useDispatch()
useEffect(()=>
{
 const timer= setInterval(()=>
  {
dispatch(addLivechat({name:Namegenerate(),comment:makeid(10),}))
  },2000)

  return ()=>clearInterval(timer)
},[])





  return (
    <form onSubmit={(e)=>{
      e.preventDefault();
      dispatch(addLivechat({name:"demo",comment:commenttext}));
      setcommenttext("");
      

    }} className='w-[400px] h-[600px] border-2 border-black flex flex-col-reverse overflow-y-scroll'>
       <div className='flex  items-center'>
        <div className=''>
        <input onChange={(e)=>setcommenttext(e.target.value)}  value={commenttext} className='p-2 border border-gray-200 ml-2 my-2  rounded-lg w-[300px] ' type='text' placeholder='type your comment'/>
        </div>
        <div className=''>
          <button className="px-4 py-2 bg-black text-white rounded-lg m-2" >Send</button>
        </div>
       </div>

       { liveMessage.map((m)=>(<LiveChat name={m.name} comment={m.comment}/>))}

      


     

    </form>
  )
}

export default LiveChatContainer