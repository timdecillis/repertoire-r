// import React from 'react';
// import ReactDOM from 'react-dom/client';
// import './index.css';
import App from './App';
// import reportWebVitals from './reportWebVitals';

// const root = ReactDOM.createRoot(
//   document.getElementById('root') as HTMLElement
// );
// root.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>
// );

// reportWebVitals(console.log);

import * as React from "react";
import { createRoot } from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
} from "react-router-dom";
import Root from './routes/root';
import ErrorPage from './error-page';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root/>,
    errorElement: <ErrorPage/>
  },
  {
    path: "about",
    element: <div>About Foo</div>
  },
]);

createRoot(document.getElementById("root")!).render(
  <RouterProvider router={router} />
);