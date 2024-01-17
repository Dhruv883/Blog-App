import React from "react";
import Main from "../components/Main";

export const HomePage = () => {
  return (
    <Main>
      <section className="flex justify-center lg:justify-evenly items-center">
        <div className="hidden lg:block">
          <img src="/assets/home.svg" alt="" className=" w-[575px] h-[550px]" />
        </div>
        <div className="md:w-3/5 lg:w-1/2 flex flex-col p-5 gap-6">
          <h1 className="text-3xl lg:text-5xl font-semibold text-primaryYellow tracking-wide leading-tight">
            Experience the Joy of Writing and Connect with Like-minded
            Individuals
          </h1>
          <p className="md:text-lg">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt
            excepturi unde, nulla iure quos beatae possimus voluptatum,
            similique voluptates accusamus dolorem adipisci perspiciatis
            doloribus incidunt.
          </p>
          {/* Search Bar */}
          <div className="flex items-center py-2 gap-2 text-xl">
            <input
              type="text"
              placeholder="Search Blog by Tag..."
              className="bg-transparent p-2 border-2 border-darkBlue focus:border-primaryYellow w-3/4 outline-none rounded-md"
            />

            <button className="py-2 px-[10px] rounded-md bg-primaryYellow">
              <img src="/assets/search.svg" alt="" />
            </button>
          </div>
          <div className="flex flex-wrap items-center text-xl md:text-2xl gap-x-7 gap-y-5">
            <span className="font-semibold">Popular Tags :</span>

            <span className="text-primaryYellow bg-brown px-2 py-1 rounded-md">
              AI/ML
            </span>
            <span className="text-primaryYellow bg-brown px-2 py-1 rounded-md">
              Design
            </span>
            <span className="text-primaryYellow bg-brown px-2 py-1 rounded-md">
              User Interface
            </span>
          </div>
        </div>
      </section>
    </Main>
  );
};
