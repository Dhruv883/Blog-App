import React, { useState, useEffect } from "react";
import { NavLink, useNavigate, Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { MdKeyboardArrowDown } from "react-icons/md";
import { logout } from "../store/actions/user";

const Navbar = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const userState = useSelector((state) => state.user);

  const [profileDropdown, setProfileDropdown] = useState(false);

  const [showMenu, setShowMenu] = useState(false);

  const menuItems = [
    { name: "Home" },
    { name: "Blogs" },
    { name: "Sign Up" },
    { name: "Sign In" },
  ];

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  const logoutHandler = () => {
    dispatch(logout());
  };

  return (
    <section className="flex justify-between pl-4 pr-14 items-center pt-1">
      <div className="text-2xl flex justify-center items-center p-3">
        <img
          src="/assets/logos/png/logo-no-background.png"
          alt=""
          className="w-28"
        />
      </div>
      <div className="hidden md:flex gap-8 text-xl">
        <span className="p-2">
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive
                ? "text-primaryYellow"
                : "border-b-2 border-primaryBlue hover:border-primaryYellow py-1 px-2"
            }
          >
            Home
          </NavLink>
        </span>
        <span className="p-2">
          <NavLink
            to="/blogs"
            className={({ isActive }) =>
              isActive
                ? "text-primaryYellow"
                : "border-b-2 border-primaryBlue hover:border-primaryYellow py-1 px-2"
            }
          >
            Blogs
          </NavLink>
        </span>

        {userState.userInfo ? (
          <>
            <span
              className={`${
                profileDropdown
                  ? "border-primaryYellow rounded-md"
                  : "border-primaryBlue"
              } py-2 px-5 border-2`}
            >
              <button
                className={`flex justify-center items-center gap-2 border-b-2 border-primaryBlue ${
                  profileDropdown
                    ? ""
                    : "hover:border-b-2 hover:border-b-primaryYellow"
                }`}
                onClick={() => {
                  setProfileDropdown(!profileDropdown);
                }}
              >
                <span>{userState.userInfo.username}</span>
                <span>
                  <MdKeyboardArrowDown
                    className={`${profileDropdown ? "rotate-180" : null}`}
                  />
                </span>
              </button>
            </span>
            {/* Dropdown Menu */}
            {profileDropdown && (
              <div className="border-2 border-primaryYellow flex flex-col absolute right-10 top-24 bg-primaryBlue p-4 px-8 gap-2 rounded-xl shadow-2xl mr-3">
                <NavLink to="/profile" className="hover:text-primaryYellow">
                  Profile
                </NavLink>

                <NavLink to="/create" className="hover:text-primaryYellow">
                  Create Blog
                </NavLink>

                <NavLink
                  to="/"
                  onClick={logoutHandler}
                  className="hover:text-primaryYellow"
                >
                  Logout
                </NavLink>
              </div>
            )}
          </>
        ) : (
          <>
            <span className="p-2">
              <NavLink
                to="/signup"
                className={({ isActive }) =>
                  isActive
                    ? "text-primaryYellow"
                    : "border-b-2 border-primaryBlue hover:border-primaryYellow py-1 px-2"
                }
              >
                Sign Up
              </NavLink>
            </span>
            <span className="p-2">
              <NavLink
                to="/signin"
                className={({ isActive }) =>
                  isActive
                    ? "text-primaryYellow"
                    : "border-b-2 border-primaryBlue hover:border-primaryYellow py-1 px-2"
                }
              >
                Sign In
              </NavLink>
            </span>
          </>
        )}
      </div>
      <div className="md:hidden absolute right-3">
        <button onClick={toggleMenu}>
          <img src="/assets/hamburger.svg" alt="" />
        </button>
      </div>

      {showMenu && (
        <div className="md:hidden absolute top-0 left-0 w-full h-full text-2xl bg-primaryBlue">
          <div className="md:hidden absolute right-3 pt-4">
            <button onClick={toggleMenu}>
              <img src="/assets/hamburger.svg" alt="" />
            </button>
          </div>
          <div className="flex flex-col items-center pt-20 gap-5">
            {menuItems.map((menuItem, index) => {
              return (
                <span
                  className="px-2 py-1 border-b-2 border-primaryBlue hover:border-primaryYellow"
                  key={index}
                >
                  <a href="">{menuItem.name}</a>
                </span>
              );
            })}
          </div>
        </div>
      )}
    </section>
  );
};

export default Navbar;
