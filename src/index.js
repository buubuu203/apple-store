import React from 'react';
import ReactDOM from 'react-dom/client';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import './assets/fonts/sf-pro-display-cufonfonts/SFPRODISPLAYMEDIUM.OTF';
import './index.css';
import Header from './components/Header';
import HomePage from './pages/HomePage';
import DefaultLayout from './layouts/DefaultLayout';
const router = createBrowserRouter([
  {
    path: "/",
    element: <Header></Header>,

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


