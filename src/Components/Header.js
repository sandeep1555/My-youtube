import React, { useContext, useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { closeSideBar, getSideBar } from '../Constants/configSlice'
import { YOUTUBE_API_KEY, YOUTUBE_SEARCH_SUGGEST } from '../Constants/useConstant';
import { getSearchCache } from '../Constants/suggestionSlice';
import { Link, useNavigate } from 'react-router-dom';
import LogIn from './LogIn';
import { getAuth, onAuthStateChanged, signOut } from 'firebase/auth';
import { adduser, removeuser } from '../Constants/userSilce';
import { auth } from '../Constants/firebase';

const Header = () => {
const [SearchText,setSearchText]=useState("");
const [SuggestionList,setSuggestionList]=useState(null);
const [SuggestionOpen,setSuggestionOpen]=useState(false);
const user=useSelector(store=>store.user);


    const dispatch=useDispatch();
    const navigate=useNavigate();
    const handleSideMenuBar=()=>
    {
        dispatch(getSideBar());
    }
    const SearchCache=useSelector((store)=>store.searchcache);

    const handleSignout=()=>
    {
signOut(auth).then(() => {
  navigate("/");

}).catch((error) => {
    navigate("/");
  
});
    }


    
    

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

const onClickSuggestion=(e)=>

{
    const suggestiontext=(e.target.innerText).split(" ").join("+");

    setSearchText(e.target.innerText)
    setSuggestionOpen(false);
    dispatch(closeSideBar());
     navigate("/results?search_query="+suggestiontext);
     

}
const handleSignInbutton=()=>
{
  navigate("/login");

}




  return (
    <div className="grid grid-flow-col m-2 p-2 sticky">

<div className='flex items-center col-span-2 '>
    <img  onClick={handleSideMenuBar}  className='h-10 cursor-pointer'  alt="menu icon" src="https://w7.pngwing.com/pngs/616/930/png-transparent-hamburger-button-computer-icons-menu-bar-line-thumbnail.png"/>
    <img  className='h-8 px-4'alt='logo' src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b8/YouTube_Logo_2017.svg/1280px-YouTube_Logo_2017.svg.png"/>
</div>


<div className='col-span-11 ml-40 flex'>

    <input  className="w-7/12 rounded-l-full p-2 border border-gray-400 px-5" type="text" placeholder='Search ' value={SearchText} onChange={(e)=>setSearchText(e.target.value)}  onFocus={()=>setSuggestionOpen(true)} onBlur={()=>setSuggestionOpen(false)} />
    <button  className='rounded-r-full border border-gray-400 p-2 px-6 bg-gray-100'><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
    
  <path stroke-linecap="round" stroke-linejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
</svg>
</button>
{(SuggestionOpen && SearchText.length>0) && <div className='fixed absolute bg-gray-100 opacity-90 my-[43px] w-[470px] border-gray-100 border px-2 rounded-xl shadow-lg mt-[52px]'>
      <ul>
      {SuggestionList.map((List)=> <li onMouseDown={(e)=>onClickSuggestion(e)} className='px-3 py-2 hover:bg-gray-300 rounded-lg'   key={List} >{List}</li>)}
       
      

      </ul>
      </div>}
</div>

<div className="">
  <div className='flex border border-blue-500 hover:bg-blue-200 rounded-full my-2 items-center w-[120px] text-blue-500'>

{!user && <button  onClick={handleSignInbutton} className='flex p-1 font-bold' ><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
  <path stroke-linecap="round" stroke-linejoin="round" d="M17.982 18.725A7.488 7.488 0 0 0 12 15.75a7.488 7.488 0 0 0-5.982 2.975m11.963 0a9 9 0 1 0-11.963 0m11.963 0A8.966 8.966 0 0 1 12 21a8.966 8.966 0 0 1-5.982-2.275M15 9.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
</svg>
Sign in</button>} 

{user && <button  onClick={handleSignout} className='flex p-1 font-bold' ><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
  <path stroke-linecap="round" stroke-linejoin="round" d="M17.982 18.725A7.488 7.488 0 0 0 12 15.75a7.488 7.488 0 0 0-5.982 2.975m11.963 0a9 9 0 1 0-11.963 0m11.963 0A8.966 8.966 0 0 1 12 21a8.966 8.966 0 0 1-5.982-2.275M15 9.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
</svg>
Sign out</button>}
    
    </div>
    
</div>




    </div>
  )
}

export default Header;