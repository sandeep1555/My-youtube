import React from 'react'
import {  useSelector } from 'react-redux';


const Buttons = ({buttonname,getCategory}) => {
    

    const activeButton=useSelector(store=>store.config.activeButton);

  return (
    <div>
    <button  onClick={()=>getCategory(buttonname)} className={`mr-2 px-4 py-1 rounded-lg font-medium ${ activeButton === buttonname ? 'bg-black text-white' : 'bg-gray-200 text-black'
          }`}>{buttonname}</button>
    </div>
  )
        }
export default Buttons