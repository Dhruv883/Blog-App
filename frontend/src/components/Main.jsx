import React from "react";
import Navbar from "./Navbar";
import BlogCard from "./BlogCard";

const Main = ({ children }) => {
  return (
    <div className="bg-primaryBlue text-white">
      {/* <Navbar />
      {children} */}

      <div className="flex gap-10 justify-center items-center">
        <BlogCard />
        <BlogCard />
        <BlogCard />
      </div>
    </div>
  );
};

export default Main;
