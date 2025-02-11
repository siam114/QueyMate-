import { Link, NavLink } from "react-router-dom";
import logo from '../assets/logo1.png'
import { useContext, useState } from "react";
import { IoCloseSharp } from "react-icons/io5";
import { IoMdMenu } from "react-icons/io";
import { AuthContext } from "../context/AuthProvider";
import { Tooltip as ReactTooltip } from 'react-tooltip';


const Navbar = () => {
  const [open, setOpen] = useState(false);
  const { user, logOut } = useContext(AuthContext);

  const links = (
    <div className="flex flex-col md:flex-row gap-2 md:gap-5 font-semibold">
      <NavLink to="/">Home</NavLink>
      <NavLink to="/all-queries">Queries</NavLink>
      <NavLink to="/recommandation-me">Recommendations For Me</NavLink>
      <NavLink to="/my-queries">My Queries</NavLink>
      <NavLink to="/my-recommandation">My recommendations</NavLink>
    </div>
  );
  const links1 =(
    <div className="flex flex-col md:flex-row gap-2 md:gap-5 font-semibold">
        <NavLink to="/">Home</NavLink>
        <NavLink to="/all-queries">Queries</NavLink>
        <NavLink to='/about'>About Us</NavLink>
    </div>
  )
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
          <p className="font-bold ml-2 text-2xl text-[#09b850]">QueryMate</p>
         </div>
        </Link>
      </div>

      <div className="navbar-center hidden lg:flex">
        {user? (
          <ul className="menu menu-horizontal px-1">
          {links}
          </ul>
        ) :(
          <ul className="menu menu-horizontal px-1">
          {links1}
         </ul>
        )}
      </div>

      <div className="navbar-end">
        {user && user?.photoURL ? (
          <div className="flex flex-col items-center">
            <img
             data-tooltip-id="user-tooltip"
             data-tooltip-content={user?.displayName || "No username available"}
              className="w-10 h-10 rounded-full"
              src={user?.photoURL}
              alt=''
            />
            {/* <p> {user && user.email}</p> */}
            <ReactTooltip id="user-tooltip" place="left" type="dark" effect="float" />
          </div>
        ) : null}

        {user && user?.email ? (
          <button onClick={logOut} className="btn btn-sm font-semibold ml-3">
            Log-Out
          </button>
        ) : (
          <Link to="/auth/login" className="btn btn-sm font-semibold ml-3">
            Login
          </Link>
        )}
      </div>
    </div>
  );
};

export default Navbar;
