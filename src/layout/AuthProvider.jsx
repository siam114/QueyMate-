import { Outlet } from "react-router-dom";
import Navbar from "../component/Navbar";

const AuthProvider = () => {
    return (
        <div>
            <Navbar/>
            <Outlet/>
        </div>
    );
};

export default AuthProvider;