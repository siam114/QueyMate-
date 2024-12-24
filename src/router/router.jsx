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
import MyQueries from "../component/MyQueries";
import UpdateQueries from "../page/UpdateQueries";
import DetailsPage from "../page/DetailsPage";
import MyRecommand from "../component/MyRecommand";
import RecommendationMe from "../component/RecommendationMe";

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
        },
        {
          path: '/my-queries',
          element: <MyQueries/>
        },
        {
          path: '/update/:id',
          element: <UpdateQueries/>
        },
        {
          path: '/query/:id',
          element: <DetailsPage/>
        },
        {
          path: '/my-recommandation',
          element: <MyRecommand/>
        },
        {
          path: '/recommandation-me',
          element: <RecommendationMe/>
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