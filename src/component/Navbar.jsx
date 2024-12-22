import { Link, NavLink } from "react-router-dom";
import logo from '../assets/logo1.png'
import { useState } from "react";
import { IoCloseSharp } from "react-icons/io5";
import { IoMdMenu } from "react-icons/io";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  const links = (
    <div className="flex flex-col md:flex-row gap-2 md:gap-5 font-semibold">
      <NavLink to="/">Home</NavLink>
      <NavLink to="/a">Queries</NavLink>
      <NavLink to="/c">Recommendations For Me</NavLink>
      <NavLink to="/d">My Queries</NavLink>
      <NavLink to="/d">My recommendations</NavLink>
    </div>
  );
  return (
    <div className="navbar w-full mx-auto md:px-10 py-2 ">
      <div className="navbar-start">
      <div className="dropdown">
          <div
            tabIndex={0}
            onClick={() => setOpen(!open)}
            className="btn btn-sm !px-1.5 text-xl lg:hidden "
          >
            {open === true ? <IoCloseSharp /> : <IoMdMenu />}
          </div>
          {open && (
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100  font-semibold text-black rounded-box z-[50] mt-3 w-52 p-5 shadow"
            >
              {links}
            </ul>
          )}
        </div>
        <Link to='/'>
         <div className="flex gap-.5 items-center">
          <img className="sm:w-10 sm:h-10 w-8 h-8 ml-1 rounded-full" src={logo} alt="" />
          <a className="font-bold ml-2 text-2xl text-[#09b850]">QueryMate</a>
         </div>
        </Link>
      </div>

      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{links}</ul>
      </div>

      <div className="navbar-end">
        <Link to="/auth/login" className="btn btn-sm font-semibold ml-3">
          Login
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
