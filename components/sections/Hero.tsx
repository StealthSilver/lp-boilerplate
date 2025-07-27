"use client";

import React from "react";
import { BackgroundBeamsWithCollision } from "../ui/BackgroundBeams";

const Hero = () => {
  return (
    <section className="relative max-w-7xl mx-auto pt-12 px-4 flex flex-col items-center justify-center overflow-hidden">
      {/* Background beams */}
      <div className="absolute inset-0 z-[-1] flex items-center justify-center">
  <div className="w-[850px] h-full mx-auto">
    <BackgroundBeamsWithCollision children={undefined} />
  </div>
</div>


      <div className="relative z-10 flex flex-col items-center justify-center pt-6">
        <button
          className="bg-slate-900 text-white font-small font-catamaran px-14 py-1 hover:bg-black transition-all duration-300 rounded-full border border-white"
          style={{ borderWidth: "0.5px" }}
        >
          Launching Oct 2025
        </button>

        {/* Spotlight wrapper */}
        <div className="relative inline-block pt-20">
          <h1 className="md:text-6xl text-4xl font-khula font-extrabold text-white tracking-tighter relative z-10">
            Fastest and most efficient
          </h1>
        </div>

        <h1 className="md:text-6xl text-4xl pt-4 font-khula font-extrabold text-white tracking-tighter">
          way to learn
        </h1>

        <p className="md:text-xl font-catamaran pt-10 text-lg text-white text-center">
          A super fast peer to peer learning platform
        </p>
        <p className="md:text-xl font-catamaran pt-2 text-lg text-white text-center">
          Find the teacher which is most suited to your learning style
        </p>

        <div className="flex items-center justify-center pt-12 gap-[120px]">
          <button className="bg-green-600 font-catamaran text-white font-bold px-14 py-2 hover:bg-green-900 transition-all duration-300 rounded-full w-[200px]">
            Login
          </button>
          <button className="bg-black font-catamaran text-white font-bold px-14 py-2 hover:bg-white hover:text-black transition-all duration-300 rounded-full border border-white w-[200px]">
            Contact us
          </button>
        </div>
      </div>

      <img
        src="/Dashboard-dark.png"
        alt="Dashboard dark"
        width={1280}
        height={750}
        className="w-[80%] h-full object-contain sticky top-0 right-0 border-[10px] mt-[136px] border-gray-600 rounded-2xl z-10"
      />
    </section>
  );
};

export default Hero;
