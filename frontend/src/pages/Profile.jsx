import React from "react";
import Main from "../components/Main";
import BlogCard from "../components/BlogCard";
import { useQuery } from "@tanstack/react-query";
import { useSelector } from "react-redux";
import toast from "react-hot-toast";
import { getUserBlogs } from "../services/index/users";
import { deleteBlog } from "../services/index/blogs";
import { useMutation } from "@tanstack/react-query";

const Profile = () => {
  const userState = useSelector((state) => state.user.userInfo);
  const token = userState.token;
  const username = userState.username;

  const { data, isLoading, isError, refetch } = useQuery({
    queryFn: () => {
      return getUserBlogs({ token });
    },
    queryKey: ["blogs"],
    onError: (error) => {
      toast.error(error.message);
      console.log(error);
    },
  });

  const { mutate } = useMutation({
    mutationFn: (id) => {
      return deleteBlog({ id, token });
    },
    onSuccess: () => {
      toast.success("Blog Deleted Successfully");
      refetch();
    },
    onError: (error) => {
      toast.error(error.message);
    },
  });
  return (
    <Main>
      <section className="flex flex-col gap-16 justify-center items-end p-4 lg:p-10">
        <span className="text-5xl font-medium self-center">
          <span className="text-primaryYellow">{username}'s</span> Blogs
        </span>
        {!isLoading &&
          !isError &&
          data.map((blog, index) => {
            return (
              <div
                className="flex flex-col md:flex-row justify-center"
                key={index}
              >
                <BlogCard key={blog._id} blog={blog} />
                <div className="relative -top-20 -right-80 md:right-24 md:top-8 h-16 w-16 rounded-full p-2 cursor-pointer hover:bg-[rgba(255,255,255,0.07)]">
                  <img
                    src="/assets/delete.svg"
                    alt="delete"
                    srcSet=""
                    onClick={() => {
                      mutate(blog._id);
                    }}
                  />
                </div>
              </div>
            );
          })}
      </section>
    </Main>
  );
};

export default Profile;
