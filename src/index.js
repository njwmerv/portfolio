import './index.css';
import React from 'react';
import NavBar from './Components/NavBar.jsx';
import HomePage from './Pages/HomePage.jsx';
import ReactDOM from 'react-dom/client';
import ProjectPage from './Pages/ProjectsPage.jsx';
import reportWebVitals from './reportWebVitals.js';
import {createBrowserRouter, RouterProvider} from 'react-router-dom';

const router = createBrowserRouter([
  {
    path:'/',
    element:
      <>
        <NavBar/>
        <HomePage/>
      </>
  },
  {
    path:'/projects',
    element:
      <>
        <NavBar/>
        <ProjectPage/>
      </>
  }
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
