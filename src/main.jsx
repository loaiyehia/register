import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Page2 from "./Page2.jsx";
import { DataContext } from "./Context/DataContext.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/page2",
    element: <Page2 />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <DataContext>
      <RouterProvider router={router} />
    </DataContext>
  </React.StrictMode>
);
