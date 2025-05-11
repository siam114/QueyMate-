import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import {
  RouterProvider,
} from "react-router-dom";
import router from './router/router';
import AuthProvider from './context/AuthProvider';
import { Toaster } from 'react-hot-toast';
import { HelmetProvider } from "react-helmet-async";

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <HelmetProvider>
       <AuthProvider>
    <RouterProvider router={router} />
    <Toaster position='top-right' reverseOrder={false} />
    </AuthProvider>
    </HelmetProvider>
  </StrictMode>,
)
