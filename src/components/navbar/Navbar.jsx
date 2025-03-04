import React, { useContext, useState } from "react";
import { NavLink } from "react-router-dom";
import logo from "../../assets/logo/logo.jpeg";
import profileImage from "../../assets/logo/profile.jpeg";
import { IoMoon, IoSunny } from "react-icons/io5";
import AuthContext from "../../context/AuthContext/AuthContext";
import "./Navbar.css";

const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);
  const [dark, setDark] = useState(false);

  const darkModeHandler = () => {
    setDark(!dark);
    document.body.classList.toggle("dark");
  };
  // console.log(user);
  // console.log(user);
  const handleLogOut = () => {
    logOut().then(() => {
      // console.log('success logout');
    });
  };

  return (
    <div className="navbar sticky top-0 bg-red-300 bg-opacity-80 backdrop-blur-md shadow-md md:px-5 transition-all duration-300 z-40">
      {/* Navbar Start */}
      <div className="navbar-start">
        <div className="dropdown lg:hidden">
          <label tabIndex={0} className="btn btn-ghost rounded-full text-red-500 border-2 border-red-600 mr-2">
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
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-gray-100 rounded-box w-52"
          >
            <NavLink to="/">Home</NavLink>
            <NavLink to="/availableCars">Available Cars</NavLink>
            {user ? (
              <>
                <button
                  onClick={handleLogOut}
                  className="text-red-600 font-bold"
                >
                  Logout
                </button>
              </>
            ) : (
              <NavLink to="/login">Login</NavLink>
            )}
          </ul>
        </div>
        <div className="flex items-center gap-4">
          <img src={logo} alt="Logo" className="w-12 h-12 rounded-full" />
          <NavLink
            to="/"
            className="text-sm md:text-2xl font-bold tracking-wide"
            style={{ color: "#e11d48" }}
          >
            Rent A Car
          </NavLink>
        </div>
      </div>

      {/* Navbar Center */}
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal gap-4">
          <NavLink to="/">Home</NavLink>

          <NavLink to="/availableCars">Available Cars</NavLink>
          {user ? (
            <>
              <button onClick={logOut} className="text-red-600 font-bold">
                Logout
              </button>
            </>
          ) : (
            <li>
              <NavLink className="font-bold" to="/login">
                Login
              </NavLink>
            </li>
          )}
        </ul>
      </div>

      {/* Navbar End */}
      <div className="navbar-end flex items-center gap-4">
        {/* Dark/Light Toggle */}
        <button onClick={darkModeHandler} className="btn btn-ghost">
          {dark ? <IoSunny /> : <IoMoon />}
        </button>
        {/* Profile & Dropdown */}
        {user && (
          <div className="dropdown relative z-20 flex items-center">
            <label tabIndex={0} className="btn btn-ghost">
              {user?.photoURL ? (
                <img
                  src={user.photoURL}
                  alt="User Profile"
                  className="w-12 h-12 border-2 border-red-700 rounded-full mx-auto mb-4 object-cover"
                />
              ) : (
                <p className="text-gray-500">Loading Profile Image...</p>
              )}
            </label>
            <ul
              tabIndex={0}
              className="menu dropdown-content absolute right-0 mt-56 p-2 shadow bg-gray-100 rounded-box w-52"
            >
              <NavLink to="/addCar">Add Car</NavLink>
              <NavLink to="/myCars">My Cars</NavLink>
              <NavLink to="/myBookings">My Bookings</NavLink>
              <NavLink to="/myProfile">Profile</NavLink>
              <button onClick={handleLogOut} className="text-red-600 font-bold">
                Logout
              </button>
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
