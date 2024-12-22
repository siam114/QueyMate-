import {
    createBrowserRouter,
  } from "react-router-dom";
import MainLayout from "../layout/MainLayout";
import Home from "../page/Home";
import ErrorPage from "../page/ErrorPage";
import Register from "../page/Register";
import AuthProvider from "../layout/AuthProvider";
import LogIn from "../page/LogIn";

  const router = createBrowserRouter([
    {
      path: "/",
      element: <MainLayout/>,
      errorElement: <ErrorPage/>,
      children:[
        {
            path: '/',
            element: <Home/>
        }
      ]
    },
    {
      path: '/auth',
      element: <AuthProvider/>,
      errorElement: <ErrorPage/>,
      children: [
        {
          path: '/auth/login',
          element: <LogIn/>
        },
        {
          path: '/auth/register',
          element: <Register/>
        }
      ]
    }
  ]);
  export default router;