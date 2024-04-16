import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { AddtoggleButton } from '../Constants/configSlice';
import CardContainer from './CardContainer';

const Buttons = ({titles}) => {

  const dispatch=useDispatch();
  const vedios=useSelector(store=>store.vedios)
  const toggleButton=useSelector(store=>store.config.toggleButton);

  const OnclickAll=()=>
  {
    dispatch(AddtoggleButton());
    toggleButton && <CardContainer  vedio={vedios.popularVedio}/>
  }
  return (
    <div className='flex m-2 mx-1 p-2'>
      
   <button  onClick={OnclickAll} className='text-bold py-1 px-4 bg-gray-200 rounded-lg'>All</button>
    </div>
  )
}

export default Buttons