import React from "react";
import { useState } from "react";
const Navbar = () => {
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

  return (
    <section className="flex justify-between pl-4 pr-20 items-center pt-1">
      <div className="text-2xl flex justify-center items-center p-3">
        <img
          src="/assets/logos/png/logo-no-background.png"
          alt=""
          className="w-28"
        />
      </div>
      <div className="hidden md:flex gap-8 text-xl ">
        {menuItems.map((menuItem) => {
          return (
            <span className="p-2 border-b-2 border-primaryBlue hover:border-primaryYellow">
              <a href="">{menuItem.name}</a>
            </span>
          );
        })}
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
            {menuItems.map((menuItem) => {
              return (
                <span className="p-2 border-b-2 border-primaryBlue hover:border-primaryYellow">
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
