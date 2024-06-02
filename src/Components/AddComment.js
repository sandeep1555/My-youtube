
import React, { useRef, useState } from "react";
import { useSelector } from "react-redux";
import EmojiPicker from "emoji-picker-react";
import { FaceFrownIcon, FaceSmileIcon } from "@heroicons/react/24/solid";

const AddComment = ({ addComment ,parentId=null}) => {
  const user = useSelector((store) => store.user);
  const [inputText, setInputaText] = useState('');
  const [OnFocus, setOnFocus] = useState(false);
  const [OpenEmoji,setOpenEmoji]=useState(false);
  const [selectedemoji,setselectedEmoji]=useState('');
  const handleSendClick = () => {
    const name = user ? user.displayName : "demo";
    addComment(name, inputText,parentId);
    setInputaText("");
    setselectedEmoji("");
    setOnFocus(false);

  };
const onEmojiClick=(event, emojiObject) => {
  setInputaText(prevInput => prevInput + event.emoji);
};
  console.log(inputText)
  return (
    <div>
    <div className="flex ">
      {user ? (
        <div className="w-[40px] h-[40px]  bg-blue-500 rounded-full flex  justify-center text-white text-3xl p-[2px] ">
          <span>{user.displayName[0].toUpperCase()}</span>
        </div>
      ) : (
        <button className="flex p-1 font-bold">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            class="w-10 h-10"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M17.982 18.725A7.488 7.488 0 0 0 12 15.75a7.488 7.488 0 0 0-5.982 2.975m11.963 0a9 9 0 1 0-11.963 0m11.963 0A8.966 8.966 0 0 1 12 21a8.966 8.966 0 0 1-5.982-2.275M15 9.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
            />
          </svg>
        </button>
      )}
      <div className="mb-4 mx-2 w-full "  onFocus={() => setOnFocus(true)}
          >
        <input 
          className={OnFocus ?"border-b-black border-b-2 w-full focus:outline-none":" border-b-gray-200 border-b-2 w-full focus:outline-none"}
          value={inputText}
          placeholder="type your comment"
         
          onChange={(e) => setInputaText(e.target.value)}
        />

        {OnFocus &&<div className="flex justify-between">
          <div>
            <button className="mt-1" onClick={()=>setOpenEmoji(!OpenEmoji)}><FaceSmileIcon className='w-[30px] h-[30px] text-gray-400'/></button>
         { OpenEmoji &&  <div >
          <EmojiPicker onEmojiClick={onEmojiClick}/>
          </div>}
          </div>
          <div>
            <button className="pt-1 px-2 " onClick={handleSendClick}>
              Cancel
            </button>
            <button className="pt-1 px-2" onClick={handleSendClick}>
              Comment
            </button>
          </div>
        </div>}
      </div>
    </div>
    </div>
  );
};

export default AddComment;
