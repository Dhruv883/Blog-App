import React from "react";

const BlogCard = () => {
  return (
    <div className="flex flex-col items-center md:flex-row rounded-2xl font-FiraSans pt-5 pb-2 shadow-blueShadow">
      <div className="px-3 lg:px-0 w-full h-[275px] md:w-[300px] md:h-[300px] md:-translate-x-12 lg:-translate-x-20 overflow-hidden rounded-2xl  shadow-blueShadow">
        <img
          src="/assets/art.jpg"
          alt=""
          className="rounded-2xl w-full h-full object-cover"
        />
      </div>
      <div className="p-4 md:-translate-x-6 flex flex-col gap-2">
        <div className="py-2 text-3xl lg:text-4xl md:max-w-2xl md:max-h-12 overflow-hidden text-primaryYellow font-semibold tracking-wider">
          Card Title Topic
        </div>
        <div className="flex flex-col">
          <span className="text-lg tracking-wide">@dhruv883</span>
          <span className="bg-primaryYellow h-[5px] w-24 rounded-[3px] my-1"></span>
        </div>
        <div className="py-3 md:max-w-[400px] lg:max-w-[700px] max-h-64 lg:max-h-32 overflow-hidden">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Praesentium
          dolores doloremque, quia eos laboriosam assumenda fuga consequuntur
          obcaecati omnis sunt impedit iusto aspernatur, aperiam veniam
          consequatur vitae ipsa temporibus quaerat non perspiciatis at placeat
          distinctio. Lorem ipsum dolor sit amet consectetur, adipisicing elit.
          Cum provident est sapiente neque ex, corporis velit dolorem optio quis
          eius voluptate eveniet praesentium alias adipiscilllll
        </div>
        <div className="flex py-1">
          <a
            href=""
            className="rounded-[50px] font-medium bg-darkBlue py-2 px-6 tracking-wider mt-2"
          >
            READ MORE
          </a>
        </div>
        <div className="text-md text-primaryYellow flex flex-wrap items-center gap-4 tracking-wide max-w-2xl mt-3">
          <span className="bg-brown px-3 py-1 rounded-full">iOS</span>
          <span className="bg-brown px-3 py-1 rounded-full">Database</span>
          <span className="bg-brown px-3 py-1 rounded-full">Travel</span>
          <span className="bg-brown px-3 py-1 rounded-full">Design</span>
          <span className="bg-brown px-3 py-1 rounded-full">Nature</span>
        </div>
      </div>
    </div>
  );
};

export default BlogCard;
