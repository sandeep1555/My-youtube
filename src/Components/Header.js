import React from 'react'
import { useDispatch } from 'react-redux'
import { getSideBar } from '../Constants/configSlice'

const Header = () => {


    const dispatch=useDispatch();
    const handleSideMenuBar=()=>
    {
        dispatch(getSideBar());
    }
  return (
    <div className="grid grid-flow-col m-2 p-2 sticky">

<div className='flex items-center col-span-1 '>
    <img  onClick={handleSideMenuBar}  className='h-10 cursor-pointer'  alt="menu icon" src="https://w7.pngwing.com/pngs/616/930/png-transparent-hamburger-button-computer-icons-menu-bar-line-thumbnail.png"/>
    <img  className='h-8 px-4'alt='logo' src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b8/YouTube_Logo_2017.svg/1280px-YouTube_Logo_2017.svg.png"/>
</div>


<div className='col-span-10 ml-40 flex'>
    <input  className="w-1/2  rounded-l-full p-2 border border-gray-400" type="text" placeholder='Search ' />
    <button  className='rounded-r-full border border-gray-400 p-2 px-6 bg-gray-100'><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
  <path stroke-linecap="round" stroke-linejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
</svg>
</button>
</div>

<div className='col-span-1'>
    <img alt='user logo' className='h-8'  src="https://static.vecteezy.com/system/resources/previews/019/879/186/non_2x/user-icon-on-transparent-background-free-png.png"/>
</div>




    </div>
  )
}

export default Header