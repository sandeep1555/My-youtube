
import { Provider } from 'react-redux';
import './App.css';
import Body from './Components/Body';
import Header from './Components/Header';
import appStore from './Constants/appStore';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import MainContainer from './Components/MainContainer';
import WatchPage from './Components/WatchPage';
import SearchResults from './Components/SearchResults';




function App() {

   
  return (
     
    <div>
          <Header/>
           <Body/>
      
    </div>
   
  );
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
      path:"watch",
      element:<WatchPage/>
    },
    {
      path:"results",
      element:<SearchResults/>,
    },
    ]
  }
])

export default App;
