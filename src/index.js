import React from 'react';
import ReactDOM from 'react-dom/client';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import './assets/fonts/sf-pro-display-cufonfonts/SFPRODISPLAYMEDIUM.OTF';
import Navbar from './components/NavBar';
import './index.css';
import DefaultLayout from './layouts/DefaultLayout';
import HomePage from './pages/HomePage';
const router = createBrowserRouter([
  {
    path: "/",
    element: <Navbar></Navbar>,

  },
  {
    path: "/Home",
    element: <DefaultLayout>
      <HomePage></HomePage>
    </DefaultLayout>,
  }
]);
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />

  </React.StrictMode>
);


