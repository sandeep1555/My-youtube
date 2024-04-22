import React, { useRef, useState } from 'react'
import { CheckValidation } from '../Constants/useConstant';

import { createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile } from "firebase/auth";
import { useDispatch } from 'react-redux';
import { adduser } from '../Constants/userSilce';
import { auth } from '../Constants/firebase';
const LogIn = () => {
const email=useRef(null);
const password=useRef(null);
const name=useRef(null)
const [signInform,setsignInform]=useState(true);
const [Errormessage,setErrorMessage]=useState(null);

const dispatch=useDispatch();
const handleSignInbutton=()=>
{
    const message=CheckValidation(email.current.value,password.current.value);
 
setErrorMessage(message);
if(message) return;

    if(signInform)
    {
      

        signInWithEmailAndPassword(auth, email.current.value, password.current.value)
          .then((userCredential) => {

            const user = userCredential.user;
 
          })
          .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            setErrorMessage("user not found,please sign up")
          });
    }
    else{



        createUserWithEmailAndPassword(auth, email.current.value, password.current.value)
          .then((userCredential) => {
 
            const user = userCredential.user;
            console.log(auth.currentUser)
            updateProfile(user,{
                displayName:name.current.value
            })
            .then(()=>
            {
                const {uid,email,displayName,}=auth.currentUser;
            dispatch(adduser({uid:uid,email:email,displayName:displayName}))   
            })
            .catch((error)=>
            {
               setErrorMessage(error.message);
            })
  
          })
          .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            setErrorMessage()
            // ..
          });


    }
}




  return (
    <form onSubmit={(e)=>e.preventDefault()}>
    <div className='flex items-center justify-center h-[100vh] bg-gray-200'>
<div className='p-10  flex  justify-between w-8/12 bg-white rounded-xl'>
        <div className=" h-[100px]">
            <img   alt="google logo"className="h-[80px] w-[80px] bg-white m-2"src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c1/Google_%22G%22_logo.svg/768px-Google_%22G%22_logo.svg.png"/>
            <h1 className=' font-medium text-2xl m-2'>{signInform ? "Sign in" : "Sign Up"} </h1>
            <h3 className='m-2'>to continue  to  YouTube</h3>
        </div>

        <div className='my-14 mx-10  flex flex-col p-5'>
            <div className='flex flex-col my-4'>
                {!signInform && <div className='flex flex-col my-6'>
                    <label>User Name</label>
                    <input  ref={name}className='p-2 w-[300px] border-2 border-gray-300 rounded-lg' type="text" placeholder='Username'/></div>}
          <label>Email:</label>
            <input ref={email} className='p-2  w-[300px] bg-white border-2 border-gray-300 rounded-lg' type="text" alt='email' placeholder='Email or phone'/>
            </div>
            <div className='flex flex-col my-2'>
            <label>New password:</label>
            <input  ref={password} className="p-2  w-[300px] border-2 border-gray-300 rounded-lg" type="password" alt='password' placeholder={signInform?'password':"create new password"}/>

           {!signInform  && 
           <div className='flex flex-col my-6'>
           <label> re-enter new password:</label>
           <input  className="p-2   w-[300px] border-2 border-gray-300 rounded-lg" type="password" alt='password' placeholder="re-enter password"/>
           </div>}
            </div>
            <p className='text-red-600 p-2 flex '><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
  <path stroke-linecap="round" stroke-linejoin="round" d="M12 9v3.75m9-.75a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9 3.75h.008v.008H12v-.008Z" />
</svg>
{Errormessage}</p>
            <div className={ signInform ?'flex items-center justify-center': "flex  items-center "}>
                <button className='border m-2 p-2 border-black w-[140px]' onClick={()=>setsignInform(!signInform)}>{signInform?"create account":"have account,sign in"}</button>
                <button  onClick={handleSignInbutton} className='border m-2  mx-4 p-2 border-black'>{signInform?"Signin":"SignUp"}</button>

            </div>
            
        </div>
      </div>
    </div>
    </form>
  )
}

export default LogIn