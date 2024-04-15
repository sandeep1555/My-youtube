import React from 'react'

const Comments = ({data}) => {

const {name,text}=data;




  return (
    <div className='flex items-center'>
        <div>
        <img className='w-[50px] h-[30px]' src="https://static.vecteezy.com/system/resources/previews/019/879/186/non_2x/user-icon-on-transparent-background-free-png.png"/>
        </div>


        <div>
        <h1>{name}</h1>
        <p>{text}</p>
        </div>

    </div>
  )
}

export default Comments