
import { Provider, useDispatch, useSelector } from 'react-redux';
import './App.css';
import Body from './Components/Body';
import Header from './Components/Header';
import appStore from './Constants/appStore';
import { RouterProvider, createBrowserRouter, useNavigate } from 'react-router-dom';
import MainContainer from './Components/MainContainer';
import WatchPage from './Components/WatchPage';
import SearchResults from './Components/SearchResults';
import LogIn from './Components/LogIn';
import { useEffect } from 'react';
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { adduser, removeuser } from './Constants/userSilce';
import { auth } from './Constants/firebase';




function App() {

  return (
    <div>
          <Header/>
           <Body/>
      
    </div>)
  }
export const appRouter= createBrowserRouter([
  {
    path:"/",
    element:<App/>,
    children:[
      {
      path:"/",
      element:<MainContainer/>,
    },
    {
      path:"/watch",
      element:<WatchPage/>
    },
    {
      path:"/results",
      element:<SearchResults/>,
    }
    
    ]
  },
  {
    path:"/login",
    element:<LogIn/>
  }
])


export default App;
