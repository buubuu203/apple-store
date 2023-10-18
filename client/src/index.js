import React, { Fragment } from 'react';
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
import SignIn from './pages/Login/SignIn';
import SignUp from './pages/SignUp/SignUp';
import Drawer from './components/Drawer';
import ShoppingCart from './pages/ShoppingCart';
import CheckOut from './pages/CheckOut';

const router = createBrowserRouter([
  {
    path: "/",
    element: <DefaultLayout>
      <Fragment>
        <Header>
        </Header>
        <HomePage></HomePage>
      </Fragment>
    </DefaultLayout>,

  }, {
    path: "/macbook",
    element: <DefaultLayout>
      <Fragment>
        <Header />
        <MacPage></MacPage>
      </Fragment>
    </DefaultLayout>,
  }, {
    path: "/iPad",
    element: <DefaultLayout>
      <Fragment>
        <Header />
        <IpadPage />
      </Fragment>
    </DefaultLayout>,
  },
  {
    path: "/iPhone",
    element: <DefaultLayout>
      <Fragment>
        <Header />
        <IphonePage />
      </Fragment>
    </DefaultLayout>,
  }, {
    path: "/Watch",
    element: <DefaultLayout>
      <Fragment>
        <Header />
        <WatchPage />
      </Fragment>
    </DefaultLayout>,
  }, {
    path: "/Airpods",
    element: <DefaultLayout>
      <Fragment>
        <Header />
        <AirpodsPage />
      </Fragment>
    </DefaultLayout>,
  }, {
    path: "/:type/:id",
    element: <DefaultLayout>

      <ProductPage />

    </DefaultLayout>,
  },
  {
    path: "/SignIn",
    element:
      <SignIn />

  }, {
    path: "/SignUp",
    element:
      <SignUp />

  },
  {
    path: '/Drawer',
    element:
      <Drawer />
  }, {
    path: '/ShoppingCart',
    element:
      <ShoppingCart />
  },
  {
    path: '/CheckOut',
    element:
      <CheckOut />
  },

]);
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />

  </React.StrictMode>
);


