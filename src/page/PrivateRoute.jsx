import { useContext } from "react";
import { AuthContext } from "../context/AuthProvider";
import { Navigate, useLocation } from "react-router-dom";
import Loading from "./Loading";
import PropTypes from 'prop-types';

const PrivateRoute = ({children}) => {
    const { user,loading } = useContext(AuthContext);
    const location = useLocation();
    // console.log(location);
    if(loading){
        return <Loading/>
    }
    if(user && user?.email){
        return children;
    }
    return <Navigate state={location.pathname} to={'/auth/login'}></Navigate>
};

PrivateRoute.propTypes = {
    children: PropTypes.node.isRequired,
  };

export default PrivateRoute;