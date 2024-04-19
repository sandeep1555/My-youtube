import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App, { appRouter } from './App';
import reportWebVitals from './reportWebVitals';
import { Provider } from 'react-redux';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import appStore from './Constants/appStore';
import Body from './Components/Body';
import MainContainer from './Components/MainContainer';
import WatchPage from './Components/WatchPage';
import SearchResults from './Components/SearchResults';


const root = ReactDOM.createRoot(document.getElementById('root'));


root.render(
  <React.StrictMode>
  
  <Provider store = {appStore}>
   <RouterProvider router={appRouter}/>
  </Provider>
  </React.StrictMode>
  
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
