import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { AddtoggleButton, addAllButton, addMusicButton, addNewsButton } from '../Constants/configSlice';
import CardContainer from './CardContainer';


const Buttons = ({title,button,functionOnclick}) => {


 
  return (
    <div className='flex m-2 mx-1 p-2'>
      
   <button  onClick={functionOnclick} className={button ?  "bg-black text-white text-bold py-1 px-4  rounded-lg":"bg-gray-200 text-bold py-1 px-4  rounded-lg"}>{title}</button>
    </div>
  )
}

export default Buttons