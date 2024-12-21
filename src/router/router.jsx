import {
    createBrowserRouter,
  } from "react-router-dom";
import MainLayout from "../layout/MainLayout";
import Home from "../page/Home";
import ErrorPage from "../page/ErrorPage";

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
  ]);
  export default router;