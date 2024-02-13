import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import './index.css'
import router from './router/Router.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />,
)
