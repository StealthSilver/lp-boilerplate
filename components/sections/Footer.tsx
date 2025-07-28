import React from "react";
import Link from "next/link";
import { FaGithub, FaTwitter, FaLinkedin } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

const Footer = () => {
  return (
    <footer id="contact" className="py-4 px-4 mt-20 top-10 flex items-center bg-slate-800 max-w-7xl mx-auto justify-center flex-col gap-4 rounded-3xl">
      <div className="flex flex-col items-center justify-center">
        <div className="mt-10">
          <Link href="/">
            <img
              src="/MeshSpire-Dark 1.svg"
              alt="Dashboard dark"
              width={250}
              height={100}
            />
          </Link>
        </div>

        <div className="flex items-center font-catamaran gap-16 mt-16">
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

      
      <div className="flex items-center justify-center gap-[40px] text-slate-400 mt-10 text-xl">
        <a href="https://github.com" target="_blank" rel="noopener noreferrer">
          <FaGithub className="hover:text-white transition-colors duration-300" />
        </a>
        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
          <FaTwitter className="hover:text-white transition-colors duration-300" />
        </a>
        <a href="mailto:someone@example.com">
          <MdEmail className="hover:text-white transition-colors duration-300" />
        </a>
        <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
          <FaLinkedin className="hover:text-white transition-colors duration-300" />
        </a>
      </div>

     
      <div className="w-[65%] h-[0.5px] bg-slate-600 mt-8" />

      <p className="text-sm text-slate-400">
        &copy; {new Date().getFullYear()} MeshSpire. All rights reserved
      </p>
    </footer>
  );
};

export default Footer;
