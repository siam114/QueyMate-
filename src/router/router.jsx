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
import PrivateRoute from "../page/PrivateRoute";
import About from "../page/About";

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
          element: <PrivateRoute><AddQueries/></PrivateRoute>
        },
        {
          path: '/all-queries',
          element: <AllQueries/>
        },
        {
          path: '/my-queries',
          element: <PrivateRoute><MyQueries/></PrivateRoute>
        },
        {
          path: '/update/:id',
          element: <PrivateRoute><UpdateQueries/></PrivateRoute>
        },
        {
          path: '/query/:id',
          element: <PrivateRoute><DetailsPage/></PrivateRoute>
        },
        {
          path: '/my-recommandation',
          element: <PrivateRoute><MyRecommand/></PrivateRoute>
        },
        {
          path: '/recommandation-me',
          element: <PrivateRoute><RecommendationMe/></PrivateRoute>
        },
        {
          path: '/about',
          element: <About/>
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