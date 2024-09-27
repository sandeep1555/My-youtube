import React, { useRef, useState } from "react";
import { CheckValidation } from "../Constants/useConstant";

import {createUserWithEmailAndPassword,signInWithEmailAndPassword,updateProfile,} from "firebase/auth";
import { useDispatch } from "react-redux";
import { adduser } from "../Constants/userSilce";
import { auth } from "../Constants/firebase";
import { useNavigate } from "react-router-dom";
import CopyButton from "./CopyButton";
const LogIn = () => {
  const email = useRef(null);
  const password = useRef(null);
  const name = useRef('');
  const Confirmpassword=useRef('');
  const navigate = useNavigate();
  const [signInform, setsignInform] = useState(true);
  const [Errormessage, setErrorMessage] = useState(null);
  const [signInButton,setSignInButton]=useState("Sign In");
  const [signUpButton,setSignUpButton]=useState("Sign Up");
  const [showCredentials,setshowCredentails]=useState(false);

  const dispatch = useDispatch();
  const handleSignInbutton = () => {

    const message = CheckValidation(
      email.current.value,
      password.current.value,
      Confirmpassword?.current?.value,
      name?.current?.value,
    );

    setErrorMessage(message);
    if (message) return;

    if (signInform) {
      setSignInButton(<svg aria-hidden="true" class="w-7 h-6 mx-2 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor"/>
      <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill"/>
  </svg>)
      signInWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          const user = userCredential.user;

          navigate("/");
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessage("user not found,please sign up");
          setSignInButton("Sign In")
        });
    } else {
      setSignUpButton(<svg aria-hidden="true" class="w-7 h-6 mx-2 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor"/>
      <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill"/>
  </svg>)
      createUserWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          const user = userCredential.user;
          updateProfile(user, {
            displayName: name.current.value,
          })
            .then(() => {
              const { uid, email, displayName } = auth.currentUser;
              dispatch(
                adduser({ uid: uid, email: email, displayName: displayName })
              );
              navigate("/");
            })
            .catch((error) => {

              setErrorMessage(error.message);
            });
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessage(errorCode + errorMessage);
          setSignUpButton("Sign Up")
          // ..
        });
    }
  };
  const handleWithoutSignIn=()=>
  {
    navigate("/")
  }

  const handleCredentails=()=>
  {
    setshowCredentails(!showCredentials)
  }
  return (
 
    <form onSubmit={(e) => e.preventDefault()}>
      <div className="flex items-center justify-center h-[100vh] bg-gray-200 ">
 
        <div className="md:p-10  flex  justify-between md:w-8/12 w-11/12 bg-white rounded-xl">
          <div className=" md:h-[100px] md:p-0 py-10">
            <img
              alt="google logo"
              className="md:h-[80px] md:w-[80px] h-[40px] w-[40px] bg-white m-2"
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c1/Google_%22G%22_logo.svg/768px-Google_%22G%22_logo.svg.png"
            />
            <h1 className=" font-medium text-2xl m-2">
              {signInform ? "Sign in" : "Sign Up"}{" "}
            </h1>
            <h3 className="m-2">to continue to YouTube</h3>
          </div>

          <div className="md:my-5 md:mx-10  flex flex-col p-5">
            <div className="flex flex-col mt-2">
              {!signInform && (
                <div className="flex flex-col my-2">
                  <label>User Name:</label>
                  <input
                    ref={name}
                    className="p-2 md:w-[300px] w-[250px] border-2 border-gray-300 rounded-lg"
                    type="text"
                    placeholder="Username"
                  />
                </div>
              )}
                </div>
                <div className="flex flex-col my-2">
              <label>Email:</label>
              <input
                ref={email}
                className="p-2  md:w-[300px] w-[250px] bg-white border-2 border-gray-300 rounded-lg"
                type="text"
                alt="email"
                placeholder="Email or phone"
              />
              </div>
          
            <div className="flex flex-col my-2">
              <label>New password:</label>
              <input
                ref={password}
                className="p-2  md:w-[300px] w-[250px] border-2 border-gray-300 rounded-lg"
                type="password"
                alt="password"
                placeholder={signInform ? "password" : "create new password"}
              />

              {!signInform && (
                <div className="flex flex-col mt-6 mb-2">
                  <label> re-enter new password:</label>
                  <input
                  ref={Confirmpassword}
                    className="p-2   md:w-[300px] w-[250px] border-2 border-gray-300 rounded-lg"
                    type="password"
                    alt="password"
                    placeholder="re-enter password"
                  />
                </div>
              )}
            </div>
            {Errormessage && (
              <p className="text-red-600 px-2 py-2 flex w-[300px] ">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  class="w-6 h-6"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M12 9v3.75m9-.75a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9 3.75h.008v.008H12v-.008Z"
                  />
                </svg>
                {Errormessage}
              </p>
            )}
            <div
              className={
                signInform
                  ? "flex items-center justify-start mt-4 max-w-[300px] "
                  : "flex  items-center justify-between max-w-[300px] "
              }
            >
              <button
                className={"border my-2  px-3 border-black w-[140px] rounded-lg text-sm "+ (signInform ? "py-3":"py-1")}
                onClick={() => setsignInform(!signInform)}
              >
                {signInform ? "Create Account" : "Have account,Sign In"}
              </button>
              <button
                onClick={() => handleSignInbutton()}
                className={"border my-2  mx-6 px-3 w-[80px] md:w-auto  border-black rounded-lg text-sm "+ (signInform ? "py-3":"py-[14px]")}
              >
                {signInform ? signInButton : signUpButton}
              </button>
              
            </div>
            <div className=" ">
            <h1 className="ml-[-490px] mt-3">continue without SignIn,<span className="cursor-pointer underline text-blue-600" onClick={handleWithoutSignIn}>click here</span></h1>
            {signInform && <div className="my-4 mt-[-25px]">
        <span >Demo Credentials,<span onClick={handleCredentails} className="hover:underline cursor-pointer text-blue-600 ">{showCredentials ?"hide":"show"}</span></span>
        {showCredentials && 
        <div className="my-2">
          <p>Email:demo123@gmail.com<CopyButton text={"demo123@gmail.com"}/></p>
          <p>Password:Demo@123<CopyButton text={"Demo@123"}/></p>
          </div>}
      </div>}
            </div>
          </div>

        </div>

      </div>



    </form>
 

  );
};

export default LogIn;
