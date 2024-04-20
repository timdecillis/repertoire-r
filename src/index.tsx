import * as React from "react";
import { createRoot } from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
} from "react-router-dom";
import Root from './routes/root';
import Contact from './routes/contact';
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
  {
    path: "contacts/:contactId",
    element: <Contact/>
  },
]);

createRoot(document.getElementById("root")!).render(
  <RouterProvider router={router} />
);