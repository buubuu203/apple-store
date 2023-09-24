import React from 'react';
import ReactDOM from 'react-dom/client';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import './assets/fonts/sf-pro-display-cufonfonts/SFPRODISPLAYMEDIUM.OTF';
import './index.css';
import DefaultLayout from './layouts/DefaultLayout';
import HomePage from './pages/HomePage';
import Mac from './pages/Mac';
const router = createBrowserRouter([
  {
    path: "/",
    element: <DefaultLayout>
      <HomePage></HomePage>
    </DefaultLayout>,

  }, {
    path: "/Mac",
    element: <DefaultLayout>
      <Mac></Mac>
    </DefaultLayout>,
  }, {
    path: "/iPad",
    element: <DefaultLayout>
    </DefaultLayout>,
  },
  {
    path: "/iPhone",
    element: <DefaultLayout>
    </DefaultLayout>,
  }, {
    path: "/Watch",
    element: <DefaultLayout>
    </DefaultLayout>,
  }, {
    path: "/Airpods",
    element: <DefaultLayout>
    </DefaultLayout>,
  }
  // {
  //   path: "/Home",
  //   element: <DefaultLayout>
  //     <HomePage></HomePage>
  //   </DefaultLayout>,
  // }
]);
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />

  </React.StrictMode>
);


