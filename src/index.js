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
import Header from './components/Header';
import IpadPage from './pages/Ipad';
import MacPage from './pages/Mac';
import IphonePage from './pages/Iphone';
import WatchPage from './pages/Watch';
import AirpodsPage from './pages/Airpods';
import ProductPage from './pages/ProductPage';
import Footer from './components/Footer';


const router = createBrowserRouter([
  {
    path: "/",
    element: <DefaultLayout>
      <Header>
      </Header>
      <HomePage></HomePage>
    </DefaultLayout>,

  }, {
    path: "/mac",
    element: <DefaultLayout>
      <Header />
      <MacPage></MacPage>
    </DefaultLayout>,
  }, {
    path: "/iPad",
    element: <DefaultLayout>
      <Header />
      <IpadPage />
    </DefaultLayout>,
  },
  {
    path: "/iPhone",
    element: <DefaultLayout>
      <Header />
      <IphonePage />
    </DefaultLayout>,
  }, {
    path: "/Watch",
    element: <DefaultLayout>
      <Header />
      <WatchPage />
    </DefaultLayout>,
  }, {
    path: "/Airpods",
    element: <DefaultLayout>
      <Header />
      <AirpodsPage />
    </DefaultLayout>,
  }, {
    path: "/:type/:id",
    element: <DefaultLayout>
      <Header />
      <ProductPage />
      <Footer />
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


