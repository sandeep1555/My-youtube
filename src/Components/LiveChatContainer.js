import React, { useEffect, useState } from 'react'
import LiveChat from './LiveChat'
import { useDispatch, useSelector } from 'react-redux'
import { addLivechat } from '../Constants/chatSlice'
import { Namegenerate, makeid } from '../Constants/useConstant'
import { XMarkIcon } from '@heroicons/react/24/solid'

const LiveChatContainer = () => {

const [showLive,setShowLive]=useState(true);
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


const handleshowLive=()=>
  {
    setShowLive(!showLive);
  }


  return (
    <div className='mb-2'>
    <div className=' bg-white mt-[0px] p-3 px-4 w-[450px] flex items-center z-20 ml-[20px] rounded-t-lg border boder-gray-200'>
        <h1 className=''>Live Chat </h1>
        <span className='w-[30px] h-[30px]   ml-[310px] cursor-pointer' onClick={handleshowLive}><XMarkIcon/></span>
        </div>
   {showLive && <form onSubmit={(e)=>{
      e.preventDefault();
      dispatch(addLivechat({name:"demo",comment:commenttext}));
      setcommenttext("");
      

    }} className='relative w-[450px] h-[500px] border  border-gray-500 flex flex-col-reverse overflow-y-scroll scroll mx-5 rounded-b-lg .scrollbar-hidden'>
      
       

       <div className='flex  items-center'>
        <div className=''>
        <input onChange={(e)=>setcommenttext(e.target.value)}  value={commenttext} className='p-2 border border-gray-200 ml-2 my-2  rounded-lg w-[350px] ' type='text' placeholder='type your comment'/>
        </div>
        <div className=''>
          <button className="px-4 py-2 bg-black text-white rounded-lg m-2" >Send</button>
        </div>
       </div>

       { liveMessage.map((m)=>(<LiveChat name={m.name} comment={m.comment}/>))}

      


     

    </form>}
    </div>
  )
}

export default LiveChatContainer