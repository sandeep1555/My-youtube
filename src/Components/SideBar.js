import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom';

const SideBar = () => {
    const SideBarValue=useSelector(store=>store.config.changeSideBar)
 if(!SideBarValue) return null;
 
    return  (
    <div className='w-2/12 text-center p-2  m-2 shadow-lg min-w-[240px]'>
        <div className=''>
        <ul className='p-2  '>
            <Link to="/"><li className='hover:bg-gray-100 py-2 rounded-lg'>Home</li> </Link>
            <li className='hover:bg-gray-100 py-2 rounded-lg'>Shorts</li>
            <li className='hover:bg-gray-100 py-2 rounded-lg'>Subcription</li>
            <li className='hover:bg-gray-100 py-2 rounded-lg'>YouTube Music</li>
        </ul>
<hr></hr>
        <ul className='p-2'>
            <li className='hover:bg-gray-100 py-2 rounded-lg text-left px-2 text-bold text-xl'>You</li>
            <li className='hover:bg-gray-100 py-2 rounded-lg text-center'>Your Channel</li>
            <li className='hover:bg-gray-100 py-2 rounded-lg text-center'>History</li>
            <li className='hover:bg-gray-100 py-2 rounded-lg text-center'>Your videos</li>
            <li className='hover:bg-gray-100 py-2 rounded-lg text-center'>Watch Later</li>

        </ul>
<hr></hr>
        <ul className='p-2'>
            <li className='py-2 rounded-lg text-left px-2 text-bold text-xl'>Explore</li>
            <li className='hover:bg-gray-100 py-2 rounded-lg text-center'>Trending</li>
            <li className='hover:bg-gray-100 py-2 rounded-lg text-center'>Shopping</li>
            <li className='hover:bg-gray-100 py-2 rounded-lg text-center'>Music</li>
            <li className='hover:bg-gray-100 py-2 rounded-lg text-center'>Gaming</li>
            <li className='hover:bg-gray-100 py-2 rounded-lg text-center'>News</li>
            <li className='hover:bg-gray-100 py-2 rounded-lg text-center'>Sports</li>
            <li className='hover:bg-gray-100 py-2 rounded-lg text-center'>Courses</li>
            <li className='hover:bg-gray-100 py-2 rounded-lg text-center'>Movies</li>
        </ul>
        <hr></hr>

        <ul className='p-2'>
            <li className='hover:bg-gray-100 py-2 rounded-lg text-center'>settings</li>
            <li className='hover:bg-gray-100 py-2 rounded-lg text-center'>Report history</li>
            <li className='hover:bg-gray-100 py-2 rounded-lg text-center'>Help</li>
            <li className='hover:bg-gray-100 py-2 rounded-lg text-center'>send feedback</li>
        </ul>
        </div>
    </div>
  )
}

export default SideBar