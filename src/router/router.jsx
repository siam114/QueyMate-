import {
    createBrowserRouter,
  } from "react-router-dom";
import MainLayout from "../layout/MainLayout";
import Home from "../page/Home";
import ErrorPage from "../page/ErrorPage";
import Register from "../page/Register";
import LogIn from "../page/LogIn";
import AuthLayout from "../layout/AuthLayout";
import AddQueries from "../page/AddQueries";
import AllQueries from "../page/AllQueries";

  const router = createBrowserRouter([
    {
      path: "/",
      element: <MainLayout/>,
      errorElement: <ErrorPage/>,
      children:[
        {
            path: '/',
            element: <Home/>
        },
        {
          path: '/add-queries',
          element: <AddQueries/>
        },
        {
          path: '/all-queries',
          element: <AllQueries/>
        }
      ]
    },
    {
      path: '/auth',
      element: <AuthLayout/>,
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