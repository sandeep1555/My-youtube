import React from 'react'

const Buttons = ({title}) => {
  return (
    <div className='flex m-2 mx-1 p-2'>
      
   <button className='text-bold py-1 px-4 bg-gray-200 rounded-lg'>{title}</button>
    </div>
  )
}

export default Buttons