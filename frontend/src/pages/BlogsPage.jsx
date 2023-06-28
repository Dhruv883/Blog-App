import React from "react";
import BlogCard from "../components/BlogCard";
import Main from "../components/Main";

const BlogsPage = () => {
  return (
    <Main>
      <section className="flex flex-col gap-16 justify-center items-center p-4 lg:p-10">
        <BlogCard />
        <BlogCard />
        <BlogCard />
      </section>
    </Main>
  );
};

export default BlogsPage;
