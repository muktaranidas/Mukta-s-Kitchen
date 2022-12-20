import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../../contexts/AuthProvider/AuthProvider";

const Header = () => {
  const { user, logOut } = useContext(AuthContext);

  const handleLogOut = () => {
    logOut().then().catch();
  };

  const navItems = (
    <>
      <li className="font-semibold">
        <Link to="/">Home</Link>
        {/* <Link to="/blog">Blog</Link> */}
        {user?.email ? (
          <>
            <Link to="/my-reviews">My Reviews</Link>
            <Link to="/add-service">Add service</Link>
            <button onClick={handleLogOut}>
              <Link to="/login">LogOut</Link>
            </button>
          </>
        ) : (
          <Link to="/login">Login</Link>
        )}
      </li>
    </>
  );

  return (
    <div className="navbar h-20 bg-base-100">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
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
            className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
          >
            {navItems}
          </ul>
        </div>
        <a className="btn btn-ghost normal-case text-xl">Mukta's kitchen</a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal p-0">{navItems}</ul>
      </div>
      {/* <div className="navbar-end">
        <a className="btn">Get started</a>
      </div> */}
    </div>
  );
};

export default Header;
