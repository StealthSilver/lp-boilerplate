import React from "react";
import Link from "next/link";
const Footer = () => {
  return (
    <footer className="py-4 px-4 mt-20 top-10 flex items-center bg-neutral-800  max-w-7xl mx-auto justify-center flex-col gap-4 rounded-full">
      <div className="flex flex-col items-center  justify-center max-w-sm">
        <Link href="/">
          <h1 className="text-4xl mt-6 font-extrabold text-orange-50 tracking-tighter transition-all duration-300">
            MeshSpire
          </h1>
        </Link>
        <div className="flex items-center font-catamaran gap-24 mt-10">
        <Link
          href="#services"
          className="text-slate-400 font-medium tracking-tight hover:text-white transition-all duration-300"
        >
          Services
        </Link>
        <Link
          href="#features"
          className="text-slate-400 font-medium tracking-tight hover:text-white transition-all duration-300"
        >
          Features
        </Link>
        <Link
          href="#testimonials"
          className="text-slate-400 font-medium tracking-tight hover:text-white transition-all duration-300"
        >
          Testimonials
        </Link>
        <Link
          href="#contact"
          className="text-slate-400 font-medium tracking-tight hover:text-white transition-all duration-300"
        >
         Contact us
        </Link>
       
      </div>
      </div>
      <p className="text-sm text-slate-600">
        &copy; {new Date().getFullYear()} MeshSpire. All rights reserved
      </p>
    </footer>
  );
};

export default Footer;
