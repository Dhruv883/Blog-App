import React, { useState } from "react";
import Main from "../components/Main";
import { Link, useParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { getBlog } from "../services/index/blogs";
import toast from "react-hot-toast";

import { generateHTML } from "@tiptap/html";
import Bold from "@tiptap/extension-bold";
import Italic from "@tiptap/extension-italic";
import Document from "@tiptap/extension-document";
import Paragraph from "@tiptap/extension-paragraph";
import Text from "@tiptap/extension-text";

import parse from "html-react-parser";

export const BlogDetail = () => {
  const [body, setBody] = useState(null);

  const { id } = useParams();

  const { data, isLoading, isError } = useQuery({
    queryFn: () => {
      return getBlog({ id });
    },
    queryKey: ["blog"],
    onSuccess: (data) => {
      setBody(
        parse(
          generateHTML(data.body, [Document, Paragraph, Text, Bold, Italic])
        )
      );
    },
    onError: (error) => {
      toast.error(error.message);
      console.log(error);
    },
  });

  console.log(data);

  return (
    <section>
      <Main>
        {!isLoading && !isError && (
          <div className="p-4 flex flex-col gap-5 w-4/5 m-auto">
            <div className="w-full rounded-3xl">
              <img
                src={`/blogImages/${data.photo}`}
                alt=""
                className="rounded-3xl w-full h-full object-fill aspect-video"
              />
            </div>
            <div className="text-2xl py-2">
              <span className="bg-darkBlue text-gray-300 px-3 py-2 rounded-md">
                {data.category}
              </span>
            </div>
            <div className="py-2 text-3xl lg:text-5xl text-primaryYellow font-semibold tracking-wider">
              {data.title}
            </div>
            <div className="text-lg prose prose-strong:text-white prose-sm sm:prose-2xl text-[#ffffff]">
              {body}
            </div>
            <div className="flex flex-wrap items-center text-xl gap-5 text-primaryYellow">
              <span className="text-2xl py-1 text-white rounded-full">
                Tags :
              </span>
              {data.tags.map((tag, index) => {
                return (
                  <span
                    className="bg-brown px-3 py-1 rounded-full text-lg sm:text-xl"
                    key={index}
                  >
                    {tag}
                  </span>
                );
              })}
            </div>
          </div>
        )}
      </Main>
    </section>
  );
};
