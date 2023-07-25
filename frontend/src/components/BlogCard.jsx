import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import { generateHTML } from "@tiptap/html";
import Bold from "@tiptap/extension-bold";
import Italic from "@tiptap/extension-italic";
import Document from "@tiptap/extension-document";
import Paragraph from "@tiptap/extension-paragraph";
import Text from "@tiptap/extension-text";

import parse from "html-react-parser";

const BlogCard = ({ blog }) => {
  const [bodyMain, setBodyMain] = useState(null);
  const { _id, title, category, photo, tags, user } = blog;
  const { name, username } = user;

  useEffect(() => {
    setBodyMain(
      parse(generateHTML(blog.body, [Document, Paragraph, Text, Bold, Italic]))
    );
  }, []);

  return (
    <div className="flex flex-col items-center md:flex-row  rounded-2xl font-FiraSans pt-5 pb-2 shadow-blueShadow">
      <div className="px-3 lg:px-0 w-full h-[275px] md:w-[300px] md:h-[300px] md:-translate-x-0 lg:-translate-x-20 overflow-hidden rounded-2xl  lg:shadow-blueShadow ">
        <img
          src={`/blogImages/${photo}`}
          alt=""
          className="rounded-2xl w-full h-full object-cover"
        />
      </div>
      <div className="p-4 lg:-translate-x-6 flex flex-col gap-2">
        <div className="py-2 text-3xl lg:text-4xl md:max-w-2xl md:max-h-12 overflow-hidden text-primaryYellow font-semibold tracking-wider">
          {title}
          {/* MAX-35 char */}
        </div>
        <div className="flex flex-col w-max">
          <span className="text-lg tracking-wide ">
            @{username}
            {/* MAX-15 */}
          </span>
          <span className="bg-primaryYellow h-[5px] w-full rounded-[3px] my-1"></span>
        </div>
        <div className="py-3 md:max-w-[400px] lg:max-w-[700px] max-h-64 lg:max-h-32 overflow-hidden text-lg">
          {bodyMain}
          {/* Max-60 */}
        </div>
        <div className="flex py-1">
          <Link
            to={`/blogs/${_id}`}
            className="rounded-[50px] font-medium bg-darkBlue py-2 px-6 tracking-wider mt-2"
          >
            READ MORE
          </Link>
        </div>
        <div className="text-base text-primaryYellow flex flex-wrap items-center gap-4 max-w-2xl mt-3 tracking-wide">
          {tags.map((tag, index) => {
            return (
              <span className="bg-brown px-3 py-1 rounded-full" key={index}>
                {tag}
              </span>
            );
          })}

          {/* MAX-8 TAGS */}
        </div>
      </div>
    </div>
  );
};

export default BlogCard;
