import React, { createContext, useState, useEffect } from 'react'
import ReactDOM from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom"

import './index.css'

import Header from './components/Header/Header';


import FetchSchedule from './components/FetchSchedule/FetchSchedule';
import ShowRoutine from './components/ShowRoutine/ShowRoutine';
import SearchResult from './components/SearchResult/SearchResult';
import ShowCourses from './components/ShowCourses/ShowCourses';
import Courses from './components/Courses/Courses';

export const AllCourseContext = createContext();

const router = createBrowserRouter([
  {
    path: "/",
    element: <Header/>,
    children: [
      {
        path: "/",
        element: <FetchSchedule/>,
      },
      {
        path: "/routine",
        element: <ShowRoutine/>,
      },
      {
        path: "/search",
        element: <SearchResult/>,
      },
      {
        path: "/courses",
        element: <Courses/>,
      }
    ]
  },

]);

// Create a new component that fetches the data and provides the context
function App() {
  const [sections, setSections] = useState([]);

  useEffect(() => {
    fetch('https://usis-cdn.eniamza.com/usisdump.json') // replace with your API URL
      .then(response => response.json())
      .then(data => setSections(data));
  }, []); // Empty dependency array means this effect runs once on mount

  return (
    <AllCourseContext.Provider value={sections}>
      <RouterProvider router ={router}/>
    </AllCourseContext.Provider>
  );
}

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)