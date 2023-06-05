import React from 'react';
import ReactDOM from 'react-dom/client';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import './App.css';
import reportWebVitals from './reportWebVitals';
import About from './About';
import App from './App';
import Home from './Home';
import Clients from './Clients';
import Services from './Services';



const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <div>ErrorPage</div>,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/services",
        element: <Services />,
      },
      {
        path: "/clients",
        element: <Clients />,
      },
    ],
  },
  {
    path: "*",
    element: <div>ErrorPage</div>,
  }
]);


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
