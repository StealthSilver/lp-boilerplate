import React from "react";
import Link from "next/link";
import Icon from "@/app/favicon.svg"

const Navbar = () => {
  return (
    <nav className="sticky bg-slate-950 rounded-full top-4 right-0 z-50 max-w-7xl mx-auto py-4 px-10 flex justify-between items-center">
      <Link href="/">
        <img
          src="/MeshSpire-Dark 1.svg"
          alt="Dashboard dark"
          width={140}
          height={100}
        />

        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
      </Link>
      <div className="flex items-center font-catamaran gap-32">
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
      <div>
        <button className="bg-green-600 font-catamaran text-white font-bold px-10 py-2 hover:bg-green-900 transition-all duration-300 rounded-full">
          Login
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
