import React, { useState } from "react";
import Main from "../components/Main";
import Tiptap from "../components/TipTap";
import { Color } from "@tiptap/extension-color";
import ListItem from "@tiptap/extension-list-item";
import TextStyle from "@tiptap/extension-text-style";
import { useEditor } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import toast from "react-hot-toast";
import { useSelector } from "react-redux";

import { useForm } from "react-hook-form";
import { useMutation } from "@tanstack/react-query";
import { createBlog } from "../services/index/blogs";

const CreateBlog = () => {
  const userState = useSelector((state) => state.user.userInfo);
  const token = userState.token;

  const [blog, setBlog] = useState({
    title: "",
    blogImage: "",
    category: "",
    tags: "",
  });

  const handleChange = (e) => {
    setBlog((prevBlog) => ({ ...prevBlog, [e.target.name]: e.target.value }));
  };
  const handlePhoto = (e) => {
    setBlog((prevBlog) => ({ ...prevBlog, blogImage: e.target.files[0] }));
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    let bodyContent = editor.getJSON();
    let tags = blog.tags.split(" ").slice(0);
    const formData = new FormData();
    formData.append("title", blog.title);
    formData.append("blogImage", blog.blogImage);
    formData.append("category", blog.category);
    formData.append("body", JSON.stringify(bodyContent));
    formData.append("tags", tags);

    mutate(formData);
  };

  const { mutate, isLoading } = useMutation({
    mutationFn: (formData) => {
      createBlog({ formData, token });
    },
    onSuccess: (data) => {
      toast.success("Blog Created Successfully");
    },
    onError: (error) => {
      toast.error(error.message);
    },
  });

  const editor = useEditor({
    extensions: [
      Color.configure({ types: [TextStyle.name, ListItem.name] }),
      TextStyle.configure({ types: [ListItem.name] }),
      StarterKit.configure({
        bulletList: {
          keepMarks: true,
          keepAttributes: true,
        },
        orderedList: {
          keepMarks: true,
          keepAttributes: true,
        },
      }),
    ],
    content: `Start Writing . . .`,
  });

  return (
    <Main>
      <section className="p-8 flex flex-col mx-10">
        <span className="text-primaryYellow text-5xl mb-10 self-center">
          Create Blog
        </span>
        <form
          method="POST"
          onSubmit={handleSubmit}
          className="flex flex-col gap-8"
          encType="multipart/form-data"
        >
          <div className="flex flex-col">
            <span className="text-primaryYellow text-2xl font-light">
              Title
            </span>
            <input
              type="text"
              placeholder="Title"
              name="title"
              className="outline-none bg-transparent placeholder:text-xl border-b-2 border-primaryYellow py-2 text-xl "
              maxLength={50}
              minLength={10}
              onChange={handleChange}
              required
            />
          </div>
          <div className="flex flex-col">
            <span className="text-primaryYellow text-2xl font-light">
              Image
            </span>
            <label
              htmlFor="blogImage"
              className="border-b-2 border-primaryYellow flex items-center gap-4 cursor-pointer"
            >
              <img
                src="/assets/uploadImage.svg"
                alt=""
                className="relative -left-3"
              />
              <span className="text-2xl">Upload Image</span>
            </label>
            <input
              type="file"
              name="blogImage"
              id="blogImage"
              hidden
              onChange={handlePhoto}
            />
          </div>
          <div className="flex flex-col">
            <span className="text-primaryYellow text-2xl font-light">
              Category
            </span>
            <input
              type="text"
              placeholder="Category"
              onChange={handleChange}
              name="category"
              className="outline-none bg-transparent placeholder:text-xl border-b-2 border-primaryYellow  py-2 text-xl"
              maxLength={15}
              minLength={5}
              required
            />
          </div>
          <div className="flex flex-col">
            <span className="text-primaryYellow text-2xl font-light mb-2">
              Content
            </span>
            <Tiptap editor={editor} />
          </div>
          <div className="flex flex-col">
            <span className="text-primaryYellow text-2xl font-light">
              Tags (Max - 8)
            </span>
            <input
              type="text"
              placeholder="Tags"
              name="tags"
              onChange={handleChange}
              className="outline-none bg-transparent placeholder:text-xl border-b-2 border-primaryYellow  py-2 text-xl"
              minLength={5}
              maxLength={100}
              required
            />
          </div>
          <div className="self-center">
            <input
              type="submit"
              value="Create Blog"
              disabled={isLoading}
              className="p-3 rounded-lg bg-primaryYellow text-2xl cursor-pointer w-64"
            />
          </div>
        </form>
      </section>
    </Main>
  );
};

export default CreateBlog;
