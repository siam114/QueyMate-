import { Outlet } from "react-router-dom";
import Navbar from "../component/Navbar";

const AuthLayout = () => {
    return (
        <div>
            <Navbar/>
            <Outlet/>
        </div>
    );
};

export default AuthLayout;