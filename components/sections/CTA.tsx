import React from "react";

const CTA = () => {
  return (
    <section className="relative py-20 px-4 mt-20 mb-24 flex flex-col items-center justify-center max-w-7xl mx-auto rounded-2xl shadow-md gap-12">
      
      <div className="absolute inset-0 w-full bg-grid pointer-events-none rounded-2xl" aria-hidden="true"  style={{
        // horizontal fade on edges using mask-image
        WebkitMaskImage: 'linear-gradient(to right, transparent 0%, black 40%, black 60%, transparent 100%)',
      maskImage: 'linear-gradient(to right, transparent 0%, black 40%, black 60%, transparent 100%)',
      }} />
      
     
      <div className="absolute inset-0 w-full h-full bg-black rounded-2xl opacity-90" aria-hidden="true" />
      
      
      <div className="relative flex flex-col items-center justify-center gap-2">
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
    </section>
  );
};

export default CTA;
