import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { closeSideBar, getSideBar } from "../Constants/configSlice";
import {  YOUTUBE_SEARCH_SUGGEST } from "../Constants/useConstant";
import { getSearchCache } from "../Constants/suggestionSlice";
import { useNavigate } from "react-router-dom";

import { onAuthStateChanged, signOut } from "firebase/auth";

import { auth } from "../Constants/firebase";
import { adduser, removeuser } from "../Constants/userSilce";
import { Bars3Icon } from "@heroicons/react/16/solid";

const Header = () => {

  const [SearchText, setSearchText] = useState("");
  const [SuggestionList, setSuggestionList] = useState();
  const [SuggestionOpen, setSuggestionOpen] = useState(false);
  const [showAccount, setShowAccount] = useState(false);
  const user = useSelector((store) => store.user);

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleSideMenuBar = () => {
    dispatch(getSideBar());
  };
  const SearchCache = useSelector((store) => store.searchcache);

  const handleSignout = () => {
    signOut(auth)
      .then(() => {
        navigate("/");
        window.location.reload();
        dispatch(removeuser());
      })
      .catch((error) => {
 
      });
  };

  useEffect(() => {
    const unsubsribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        const { uid, email, displayName, photoURL } = user;

        dispatch(
          adduser({
            uid: uid,
            email: email,
            displayName: displayName,
            photoURL: photoURL,
          })
        );
        navigate("/");
      } else {
        dispatch(removeuser());
        navigate("/");
      }
      return () => unsubsribe();
    });
  }, []);

  const GetYoutubeSuggestion = async () => {
    const data = await fetch(YOUTUBE_SEARCH_SUGGEST +SearchText);

<<<<<<< HEAD
    console.log(data)
    const json = await data.json();
    console.log(json)
=======
    
    const json = await data.json();

>>>>>>> saved-work
    setSuggestionList(json.items);

    dispatch(
      getSearchCache({
        [SearchText]: json.items,
      })
    );
  };

<<<<<<< HEAD
  console.log(SuggestionList && SuggestionList)

=======
>>>>>>> saved-work
  useEffect(() => {
    const timer = setTimeout(() => {
      if (SearchCache[SearchText]) {
        setSuggestionList(SearchCache[SearchText]);
      } else {
        GetYoutubeSuggestion();
      }
    }, 200);

    return () => {
      clearTimeout(timer);
    };
  }, [SearchText]);

  const onClickSuggestion = (e) => {
    const suggestiontext = e.target.innerText.split(" ").join("+");

    setSearchText(e.target.innerText);
    setSuggestionOpen(true);
    dispatch(closeSideBar());
    navigate("/results?search_query=" + suggestiontext);
  };
  const handleSignInbutton = () => {
    navigate("/login");
  };
  const logoclick = () => {
    navigate("/");
    window.location.reload();
  };

  const handleAccountMouseEnter = () => {
    setShowAccount(true);
  };
  const handleAccountMouseLeave = () => {
    setShowAccount(false);
  };
  const handleSearchButton=()=>
    {
      const suggestiontext = SearchText.split(" ").join("+");
      dispatch(closeSideBar());

      navigate("/results?search_query=" + suggestiontext);
    }

  return (
    <div className=" w-screen md:m-2 md:p-2  m-1 p-1 flex justify-between   bg-white items-center">
      <div className="flex items-center ">
        <Bars3Icon
          onClick={handleSideMenuBar}
          className="h-10 cursor-pointer md:w-[30px] w-[20px] "
          alt="menu icon"
          src="https://w7.pngwing.com/pngs/616/930/png-transparent-hamburger-button-computer-icons-menu-bar-line-thumbnail.png"
        />
        <img
          onClick={logoclick}
          className="cursor-pointer h-5  md:h-8 md:px-4 md:w-[200px] w-[100px] "
          alt="logo"
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b8/YouTube_Logo_2017.svg/1280px-YouTube_Logo_2017.svg.png"
        />
      </div>

      <div className="flex md:w-[500px] w-[185px] h-7 md:h-auto  md:mr-[90px]">
        <input
          className="w-10/12  rounded-l-full md:p-2 p-1  border border-gray-400 md:px-5 px-2 "
          type="text"
          placeholder="Search "
          value={SearchText}
          onChange={(e) => setSearchText(e.target.value)}
          onFocus={() => setSuggestionOpen(true)}
          onBlur={() => setSuggestionOpen(false)}
        />
        <button className="rounded-r-full   w-2/12  border border-gray-400 md:p-2 p-1  md:px-6 px-4 bg-gray-100" onClick={handleSearchButton}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            class="md:w-6 md:h-6 w-4 h-4 ml-[-8px] md:ml-0"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
            />
          </svg>
        </button>
        {SuggestionOpen && SearchText.length > 0 && (
<<<<<<< HEAD
          <div className={`absolute bg-gray-100 opacity-100 my-[43px] w-[500px] ${SuggestionList.length>3 ?  "h-[300px]" : "h-auto" }  overflow-y-scroll border-gray-100 border px-2 rounded-xl shadow-lg mt-[52px] cursor-pointer`}>
=======
          <div className={`absolute bg-gray-100 opacity-100 my-[43px] w-[500px] ${(SuggestionList &&SuggestionList.length>3) ?  "h-[300px]" : "h-auto" }  overflow-y-scroll border-gray-100 border px-2 rounded-xl shadow-lg mt-[52px] cursor-pointer`}>
>>>>>>> saved-work
            <ul>
              {SuggestionList && SuggestionList.map((List) => (
                <li
                  onMouseDown={(e) => onClickSuggestion(e)}
                  className="px-3 py-2 hover:bg-gray-300 rounded-lg"
                  key={List?.id?.videoId}
                >
                  {List?.snippet?.title}
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>

      {user ? (
        <div
          className="relative md:mx-14"
          onMouseEnter={handleAccountMouseEnter}
          onMouseLeave={handleAccountMouseLeave}
        >
          <div className="w-[40px] h-[40px]  bg-blue-500 rounded-full flex  justify-center text-white text-3xl p-[2px] ">
            <span>{user.displayName ? user.displayName[0].toUpperCase() : "!" }</span>
          </div>
          {showAccount && (
            <div className="absolute ml-[-70px]">
              <button onClick={() => handleSignout()}>
                {"Hey " + user.displayName}
                <span className="hover:underline text-blue-500">,Sign Out</span>
              </button>
            </div>
          )}
        </div>
      ) : (
        <div className="flex  border border-gray-400 justify-center hover:bg-blue-100 rounded-full md:my-2 items-center w-[50px] md:w-[100px] text-blue-500 md:mx-4 ">
          <button
            onClick={() => handleSignInbutton()}
            className="flex p-1 font-bold text-center text-[7px] md:text-lg items-center"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              class="md:w-6 md:h-6 w-3 h-3"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M17.982 18.725A7.488 7.488 0 0 0 12 15.75a7.488 7.488 0 0 0-5.982 2.975m11.963 0a9 9 0 1 0-11.963 0m11.963 0A8.966 8.966 0 0 1 12 21a8.966 8.966 0 0 1-5.982-2.275M15 9.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
              />
            </svg>
            Sign in
          </button>
        </div>
      )}
    </div>
  );
};

export default Header;
