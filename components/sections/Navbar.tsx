"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";

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
      let appliedTheme: "dark" | "light" = "light";
      if (savedTheme) {
        appliedTheme = savedTheme;
      } else {
        const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
        appliedTheme = prefersDark ? "dark" : "light";
      }
      setTheme(appliedTheme);
      if (appliedTheme === "dark") {
        document.documentElement.classList.add("dark");
      } else {
        document.documentElement.classList.remove("dark");
      }
    }
  }, []);


  const toggleTheme = () => {
    const newTheme = theme === "dark" ? "light" : "dark";
    setTheme(newTheme);
    if (newTheme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
    localStorage.setItem("theme", newTheme);
  };

  return (
    <Navbar
      className={`overflow-hidden py-4 top-4 bg-black z-50 max-w-7xl mx-auto rounded-full transition-colors duration-500 ${scrolled ? "bg-gray-300 dark:bg-transparent" : "bg-transparent"
        }`}
    >
      <NavBody className="!flex !items-center !justify-between w-full">
       

       
        <div className="hidden md:flex w-full items-center justify-between">
        
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
            className={`text-white ${scrolled ? "text-gray-900 dark:text-gray-100" : "text-white"}`}
          />

          
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
        <MobileNavHeader className="flex items-center justify-between px-4 md:hidden">
       
          <Link href="/" className="flex items-center cursor-pointer">
            <img
              src="/MeshSpire-Dark 1.svg"
              alt="MeshSpire Logo"
              width={140}
              height={100}
              className="object-contain"
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
