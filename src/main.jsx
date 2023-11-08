import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'

import { RouterProvider, createBrowserRouter } from "react-router-dom";

import Home from './pages/Home';
import Dynamic from './pages/Dynamic';
import SignIn from './pages/SignIn';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/dynamic",
    element: <Dynamic />,
    children: [
      {
        path: ':name',
        element: <Dynamic />
      }
    ]
  },
  {
    path:"/signin",
    element: <SignIn/>
  }
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
