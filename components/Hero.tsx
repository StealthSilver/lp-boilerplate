import React from "react";

const Hero = () => {
  return (
    <section className="max-w-7xl mx-auto pt-12 px-4 flex flex-col items-center justify-center">
      <div className="flex flex-col items-center justify-center pt-6">
        <button className="bg-slate-900 text-white font-small font-catamaran px-14 py-1 hover:bg-black transition-all duration-300 rounded-full border border-white"
          style={{ borderWidth: '0.5px' }} >
          Launching Oct 2025
        </button>
        <h1 className="md:text-6xl text-4xl pt-20 font-khula font-extrabold text-white tracking-tighter items-center">
          Fastest and most efficient 
        </h1>
        <h1 className="md:text-6xl text-4xl pt-4 font-khula font-extrabold text-white tracking-tighter items-center">
          way to learn
        </h1>
        <p className="md:text-xl font-catamaran pt-10 text-lg text-white">
        A super fast peer to peer learning platform
        </p>
        <p className="md:text-xl font-catamaran pt-2 text-lg text-white">
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
        width={975}
        height={638}
        className="w-[80%] h-full object-contain sticky top-0 right-0 border-[10px] mt-[120px] border-gray-600 rounded-2xl"
      />
    </section>
  );
};

export default Hero;
