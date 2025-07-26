import React from "react";
import Card from "./Card";
const Content = () => {
  return (
    <section className="py-12 px-4 mt-32 flex flex-col items-center justify-center mx-4 bg-black rounded-2xl shadow-md gap-12">
      <div className="flex flex-col items-center justify-center gap-2">
      <h1 className="md:text-6xl text-4xl pt-20 font-khula font-extrabold text-white tracking-tighter items-center">
          Your All-in-one Learning 
        </h1>
        <h1 className="md:text-6xl text-4xl pt-4 font-khula font-extrabold text-white tracking-tighter items-center">
          Companion
        </h1>
        <button className="bg-green-600 mt-20 font-catamaran text-white font-bold px-14 py-2 hover:bg-green-900 transition-all duration-300 rounded-full w-[200px]">
          Login
        </button>
       
      </div>
      <div className="flex flex-col items-center justify-center gap-5">
        {/* <Card />
        <Card />
        <Card /> */}
      </div>
    </section>
  );
};

export default Content;
