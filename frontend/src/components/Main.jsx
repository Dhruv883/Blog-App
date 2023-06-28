import React from "react";
import Navbar from "./Navbar";

const Main = ({ children }) => {
  return (
    <div className="bg-primaryBlue text-white min-h-screen min-w-screen overflow-x-hidden">
      <Navbar />
      {children}
    </div>
  );
};

export default Main;
