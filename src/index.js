import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import  { appRouter } from './App';
import reportWebVitals from './reportWebVitals';
import { Provider } from 'react-redux';
import { RouterProvider} from 'react-router-dom';
import appStore from './Constants/appStore';



const root = ReactDOM.createRoot(document.getElementById('root'));


root.render(
  <React.StrictMode>
  <Provider store = {appStore}>
   <RouterProvider router={appRouter}>
   </RouterProvider>
  </Provider>
  
  </React.StrictMode>
  
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
