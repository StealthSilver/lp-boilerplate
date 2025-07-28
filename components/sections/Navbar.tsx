"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image"; // ✅ Use next/image for optimization

import {
  Navbar,
  NavBody,
  NavItems,
  MobileNav,
  MobileNavHeader,
  MobileNavMenu,
  MobileNavToggle,
  NavbarButton,
} from "@/components/ui/ResizableNavbar";

const NAV_ITEMS = [
  { name: "Services", link: "#services" },
  { name: "Features", link: "#features" },
  { name: "Testimonials", link: "#testimonials" },
  { name: "Contact us", link: "#contact" },
];

const NavbarComponent = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [theme, setTheme] = useState<"dark" | "light">("light");

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const savedTheme = localStorage.getItem("theme") as "dark" | "light" | null;
      if (savedTheme) {
        setTheme(savedTheme);
        document.documentElement.classList.toggle("dark", savedTheme === "dark");
      } else {
        const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
        const defaultTheme = prefersDark ? "dark" : "light";
        setTheme(defaultTheme);
        document.documentElement.classList.toggle("dark", prefersDark);
      }
    }
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === "dark" ? "light" : "dark";
    setTheme(newTheme);
    document.documentElement.classList.toggle("dark", newTheme === "dark");
    localStorage.setItem("theme", newTheme);
  };

  return (
    <Navbar
      className={`top-4 bg-black z-50 max-w-7xl mx-auto rounded-full transition-colors duration-500 ${
        scrolled ? "bg-gray-300 dark:bg-transparent" : "bg-transparent"
      }`}
    >
      <NavBody className="!flex !items-center !justify-between">
       
      <Link href="/" className="flex items-center cursor-pointer">
          <img
            src="/MeshSpire-Dark 1.svg"
            alt="MeshSpire Logo"
            width={140}
            height={100}
            className="object-contain"
          />
        </Link>

        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />

        <NavItems
          items={NAV_ITEMS}
          className={`text-white ${
            scrolled ? "text-gray-900 dark:text-gray-100" : "text-white"
          }`}
        />

        <div className="flex items-center gap-4">
       
          <button
            onClick={toggleTheme}
            aria-label="Toggle Theme"
            className="rounded-full p-2 hover:bg-gray-200 dark:hover:bg-gray-600 transition cursor-pointer"
          >
            {theme === "dark" ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 text-white"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 3v2m0 14v2m9-9h-2M5 12H3m15.364-6.364l-1.414 1.414M7.05 16.95l-1.414 1.414m12.728 0l1.414-1.414M7.05 7.05L5.636 5.636M12 8a4 4 0 100 8 4 4 0 000-8z"
                />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 text-gray-900 dark:text-white"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M21 12.79A9 9 0 1111.21 3a7 7 0 009.79 9.79z"
                />
              </svg>
            )}
          </button>

          
          <NavbarButton
            as={Link}
            href="https://meshspire/signup"
            className="bg-green-600 hover:bg-green-900 text-white font-catamaran font-bold px-10 py-2 rounded-full transition-colors duration-300 cursor-pointer"
            variant="dark"
          >
            Login
          </NavbarButton>
        </div>
      </NavBody>

      <MobileNav>
        <MobileNavHeader>
          <Link href="/" className="inline-block cursor-pointer">
            <Image
              src="/MeshSpire-Dark-1.svg"
              alt="MeshSpire Logo"
              width={120}
              height={85}
              className="object-contain hover:opacity-80 transition-all"
            />
          </Link>
          <MobileNavToggle
            isOpen={mobileOpen}
            onClick={() => setMobileOpen((v) => !v)}
          />
        </MobileNavHeader>

        <MobileNavMenu isOpen={mobileOpen} onClose={() => setMobileOpen(false)}>
          {NAV_ITEMS.map((item) => (
            <a
              key={item.name}
              href={item.link}
              className="font-catamaran text-base font-medium text-white dark:text-neutral-200 py-2 w-full"
              onClick={() => setMobileOpen(false)}
            >
              {item.name}
            </a>
          ))}

          <NavbarButton
            as={Link}
            href="https://meshspire/signup"
            className="w-full bg-green-600 font-catamaran text-white font-bold px-10 py-2 hover:bg-green-900 transition-all duration-300 rounded-full mt-2 cursor-pointer"
            variant="dark"
            onClick={() => setMobileOpen(false)}
          >
            Login
          </NavbarButton>
        </MobileNavMenu>
      </MobileNav>
    </Navbar>
  );
};

export default NavbarComponent;
