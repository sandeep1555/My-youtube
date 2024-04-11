
import { Provider } from 'react-redux';
import './App.css';
import Body from './Components/Body';
import Header from './Components/Header';
import appStore from './Constants/appStore';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import MainContainer from './Components/MainContainer';
import WatchPage from './Components/WatchPage';


const appRouter= createBrowserRouter([
  {
    path:"/",
    element:<Body/>,
    children:[
      {
      path:"/",
      element:<MainContainer/>,
    },
    {
      path:"watch",
      element:<WatchPage/>
    }
    ]
  }
])


function App() {
  return (
     



    <Provider store={appStore}>
    <div >

          <Header/>
         <RouterProvider router={appRouter}></RouterProvider>
      
    </div>
    </Provider>
  );
}

export default App;
