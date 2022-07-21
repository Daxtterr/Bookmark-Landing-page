import React from "react";
import hero from "../images/illustration-hero.svg";

const HeroSection = () => {
  return (
    <div className=" w-11/12 mx-auto flex flex-col-reverse items-center py-16 justify-between lg:flex-row">
      <div className="space-y-8">
        <h1 className="mt-12 text-4xl font-medium text-center lg:text-left lg:mt-0">
          A Simple Bookmark
          <br /> Manager
        </h1>
        <p className="text-slate-500 text-center lg:text-left">
          A clean and simple interface to organize <br className="lg:hidden"/> your favorite&nbsp; 
           <br className="hidden lg:block"/>
           websites. Open a new <br className="lg:hidden"/>browser tab and see your sites load&nbsp;<br className="lg:hidden"/>
           <br className="hidden lg:block"  />
          instantly. Try it for free.
        </p>
        <div className="space-x-4 lg:space-y-8">
          <button className="border shadow-md bg-blue-700 py-2 px-4 rounded-md text-white font-medium hover:text-blue-900 hover:border-blue-900 hover:bg-white">
            Get it on Chrome
          </button>
          <button className="border shadow-md py-2 px-4 bg-neutral-200 rounded-md text-black font-medium hover:border-black hover:bg-white">
            Get it on Firefox
          </button>
        </div>
      </div>
      <div className="">
        <div className="bg-blue-700 h-1/4 w-5/6 top-48 absolute lg:top-72 -right-0 -z-10 rounded-l-full md:w-8/12 md:h-96 lg:h-1/2 lg:w-5/12"></div>
        <img className="" src={hero} alt="" />
      </div>
    </div>
  );
};

export default HeroSection;
