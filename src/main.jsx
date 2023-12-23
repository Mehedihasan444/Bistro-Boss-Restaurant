import React from "react";
import ReactDOM from "react-dom/client";

import "./index.css";
import { RouterProvider } from "react-router-dom";
import Router from "./Routes/Routes.jsx";
import { HelmetProvider } from "react-helmet-async";
import AuthProvider from "../Providers/AuthProvider.jsx";
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthProvider>
      <HelmetProvider>
      <div className="max-w-screen mx-auto">
        <RouterProvider router={Router} />
      </div>
    </HelmetProvider>
    </AuthProvider>
    
  </React.StrictMode>
);
