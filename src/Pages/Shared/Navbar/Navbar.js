import React, { useContext } from "react";
import { Link } from "react-router-dom";
import logo from "../../../assets/images/logo.png";
import { AuthContext } from "../../../contexts/AuthProvider/AuthProvider";

const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);

  const handleLogOut = () => {
    logOut()
      .then(() => {})
      .catch((error) => console.error(error));
  };

  const menuItems = (
    <React.Fragment>
      <li>
        <Link className="text-white font-semibold" to="/">
          Home
        </Link>
      </li>
      <li>
        <Link className="text-white font-semibold" to="/products">
          Products
        </Link>
      </li>
      <li>
        <Link className="text-white font-semibold" to="/blog">
          Blog
        </Link>
      </li>
      {user?.uid ? (
        <>
          <li>
            <Link className="text-white font-semibold" to="/dashboard">
              Dashboard
            </Link>
          </li>
          <li>
            <button className="text-white font-semibold" onClick={handleLogOut}>
              Log out
            </button>
          </li>
        </>
      ) : (
        <li>
          <Link className="text-white font-semibold" to="/login">
            Login
          </Link>
          <Link className="text-white font-semibold" to="/signUp">
            Sign up
          </Link>
        </li>
      )}
    </React.Fragment>
  );
  return (
    <div className="navbar bg-slate-900 flex justify-between">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="text-white btn-white lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-slate-900 rounded-box w-52 "
          >
            {menuItems}
          </ul>
        </div>
        <Link to="/" className="flex justify-center items-center">
          <img className="w-8 md:w-14 lg:w-14 md:ml-2 " src={logo} alt="" />
          <Link
            to="/"
            className="font-bold normal-case text-white  md:text-xl lg:text-2xl ml-2"
          >
            Laptotech
          </Link>
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal p-0">{menuItems}</ul>
      </div>
      <label
        htmlFor="dashboard-drawer"
        tabIndex={0}
        className="text-white btn-white lg:hidden"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M4 6h16M4 12h8m-8 6h16"
          />
        </svg>
      </label>
    </div>
  );
};

export default Navbar;
