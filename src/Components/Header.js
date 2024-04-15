import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getSideBar } from '../Constants/configSlice'
import { YOUTUBE_SEARCH_SUGGEST } from '../Constants/useConstant';
import { getSearchCache } from '../Constants/suggestionSlice';

const Header = () => {
const [SearchText,setSearchText]=useState("");
const [SuggestionList,setSuggestionList]=useState([]);
const [SuggestionOpen,setSuggestionOpen]=useState(false);

    const dispatch=useDispatch();
    const handleSideMenuBar=()=>
    {
        dispatch(getSideBar());
    }
    const SearchCache=useSelector((store)=>store.searchcache);

const GetYoutubeSuggestion=async()=>
{
  const data=await fetch(YOUTUBE_SEARCH_SUGGEST+SearchText);
  const json=await data.json();
setSuggestionList(json[1]);

dispatch(getSearchCache({
  [SearchText]:json[1],
}))


}
useEffect(()=>
{
  const timer=setTimeout(()=>
  {
    if(SearchCache[SearchText])
    {
      setSuggestionList(SearchCache[SearchText]);
    }
  else
  {
    GetYoutubeSuggestion();
  }
     
  },200);

  return ()=>
  {
    clearTimeout(timer);
  }
},[SearchText])



  return (
    <div className="grid grid-flow-col m-2 p-2 sticky">

<div className='flex items-center col-span-1 '>
    <img  onClick={handleSideMenuBar}  className='h-10 cursor-pointer'  alt="menu icon" src="https://w7.pngwing.com/pngs/616/930/png-transparent-hamburger-button-computer-icons-menu-bar-line-thumbnail.png"/>
    <img  className='h-8 px-4'alt='logo' src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b8/YouTube_Logo_2017.svg/1280px-YouTube_Logo_2017.svg.png"/>
</div>


<div className='col-span-10 ml-40 flex'>

    <input  className="w-1/2  rounded-l-full p-2 border border-gray-400 px-5" type="text" placeholder='Search ' value={SearchText} onChange={(e)=>setSearchText(e.target.value)}  onFocus={()=>setSuggestionOpen(true)} onBlur={()=>setSuggestionOpen(false)} />
    <button  className='rounded-r-full border border-gray-400 p-2 px-6 bg-gray-100'><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
    
  <path stroke-linecap="round" stroke-linejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
</svg>
</button>
{(SuggestionOpen && SearchText.length>0) && <div className='fixed absolute bg-gray-100 opacity-90 my-[43px] w-[27rem] border-gray-100 border p-2 rounded-lg shadow-lg'>
      <ul>
      {SuggestionList.map(List=> <li className='px-3 py-2 hover:bg-gray-100' key={List}>{List}</li>)}
       
      

      </ul>
      </div>}
</div>

<div className='col-span-1'>
    <img alt='user logo' className='h-8'  src="https://static.vecteezy.com/system/resources/previews/019/879/186/non_2x/user-icon-on-transparent-background-free-png.png"/>
</div>




    </div>
  )
}

export default Header