import React, { useEffect } from 'react'
import LiveChat from './LiveChat'
import { useDispatch, useSelector } from 'react-redux'
import { addLivechat } from '../Constants/chatSlice'
import { Namegenerate, makeid } from '../Constants/useConstant'

const LiveChatContainer = () => {


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
    <div className='w-[400px] h-[600px] border-2 border-black flex flex-col-reverse overflow-y-scroll'>

       { liveMessage.map((m)=>(<LiveChat name={m.name} comment={m.comment}/>))}


     

    </div>
  )
}

export default LiveChatContainer