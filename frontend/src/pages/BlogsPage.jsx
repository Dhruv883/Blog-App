import React from "react";
import BlogCard from "../components/BlogCard";
import Main from "../components/Main";
import { useQuery } from "@tanstack/react-query";
import { getAllBlogs } from "../services/index/blogs";
import toast from "react-hot-toast";

export const BlogsPage = () => {
  const { data, isLoading, isError } = useQuery({
    queryFn: () => {
      return getAllBlogs();
    },
    queryKey: ["blogs"],
    onError: (error) => {
      toast.error(error.message);
      console.log(error);
    },
  });

  return (
    <Main>
      <section className="flex flex-col gap-16 justify-center items-center p-4 lg:p-10">
        {!isLoading &&
          !isError &&
          data.map((blog) => {
            return <BlogCard key={blog._id} blog={blog} />;
          })}
      </section>
    </Main>
  );
};
