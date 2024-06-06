
import './App.css';
import Body from './Components/Body';
import Header from './Components/Header';
import {  createBrowserRouter } from 'react-router-dom';
import MainContainer from './Components/MainContainer';
import WatchPage from './Components/WatchPage';
import SearchResults from './Components/SearchResults';
import LogIn from './Components/LogIn';





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
