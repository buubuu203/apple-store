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
import SignIn from './components/SignIn';
import SignUp from './components/SignUp';
import Drawer from './components/Drawer';
import ShoppingCart from './pages/ShoppingCart';

const router = createBrowserRouter([
  {
    path: "/",
    element: <DefaultLayout>
      <Header>
      </Header>
      <HomePage></HomePage>
    </DefaultLayout>,

  }, {
    path: "/macbook",
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


]);
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />

  </React.StrictMode>
);


