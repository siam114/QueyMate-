import { Outlet } from "react-router-dom";
import Navbar from "../component/Navbar";
import Footer from "../component/Footer";

const MainLayout = () => {
    return (
        <div>
            <Navbar/>
            <div className="pt-[55px]">
            <Outlet/>
            </div>
            <Footer/>
        </div>
    );
};

export default MainLayout;