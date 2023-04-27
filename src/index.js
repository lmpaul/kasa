import React from 'react';
import ReactDOM from 'react-dom/client';
import './style/index.css';

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import routerConfig from './router';
const router = createBrowserRouter(routerConfig)

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <>
    <RouterProvider router={router} />
  </>
);
