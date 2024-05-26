import './index.css';

import { RouterProvider, createBrowserRouter } from 'react-router-dom';

import App from './App';
import { Page1 } from './pages/page1';
import { Page2 } from './pages/page2';
import React from 'react';
import ReactDOM from 'react-dom/client';
import reportWebVitals from './reportWebVitals';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Page1 />,
  },
  {
    path: '/page2',
    element: <Page2 />,
  },
  {
    path: '/page1',
    element: <Page1 />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <RouterProvider router={router}>
    <App />
  </RouterProvider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
