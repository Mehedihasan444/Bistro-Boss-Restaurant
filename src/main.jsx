import React from "react";
import ReactDOM from "react-dom/client";

import "./index.css";
import { RouterProvider } from "react-router-dom";
import Router from "./Routes/Routes.jsx";
import { HelmetProvider } from "react-helmet-async";
import AuthProvider from "../Providers/AuthProvider.jsx";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const queryClient = new QueryClient()



ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
     <QueryClientProvider client={queryClient}>
       <AuthProvider>
      <HelmetProvider>
      <div className="max-w-screen mx-auto">
        <RouterProvider router={Router} />
      </div>
    </HelmetProvider>
    </AuthProvider>
    </QueryClientProvider>
   
    
  </React.StrictMode>
);
