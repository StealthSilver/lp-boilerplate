"use client";

import React from "react";
import Link from "next/link";

const NAV_ITEMS = [
  { name: "Services", link: "#services" },
  { name: "Features", link: "#features" },
  { name: "Testimonials", link: "#testimonials" },
  { name: "Contact us", link: "#contact" },
];

const Navbar = () => {
  return (
    <nav className="sticky top-0 z-50 w-full bg-black border-b border-gray-600 border-[0.5px]">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">
        <Link href="/" className="flex items-center cursor-pointer">
          <img
            src="/logo.svg"
            alt="MeshSpire Logo"
            width={140}
            height={60}
            className="object-contain"
          />
        </Link>

        <div className="hidden md:flex items-center gap-8">
          {NAV_ITEMS.map((item) => (
            <Link
              key={item.name}
              href={item.link}
              className="text-white hover:text-gray-300 transition-colors duration-200 font-medium"
            >
              {item.name}
            </Link>
          ))}
        </div>

        <Link
          href="https://meshspire/signup"
          className="bg-green-600 hover:bg-green-800 text-white font-bold px-6 py-2 rounded-full transition-colors duration-300"
        >
          Login
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
