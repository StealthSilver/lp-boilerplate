"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
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
import { IconSun, IconMoon } from "@tabler/icons-react";

const NAV_ITEMS = [
  { name: "Services", link: "#services" },
  { name: "Features", link: "#features" },
  { name: "Testimonials", link: "#testimonials" },
  { name: "Contact us", link: "#contact" },
];

const NavbarComponent = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [theme, setTheme] = useState<"dark" | "light">("dark");

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme === "dark" || savedTheme === "light") {
      setTheme(savedTheme);
      document.documentElement.classList.toggle("dark", savedTheme === "dark");
    } else {
      const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
      setTheme(prefersDark ? "dark" : "light");
      document.documentElement.classList.toggle("dark", prefersDark);
    }
  }, []);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === "dark" ? "light" : "dark";
    setTheme(newTheme);
    localStorage.setItem("theme", newTheme);
    document.documentElement.classList.toggle("dark", newTheme === "dark");
  };

  return (
    <Navbar
      className={`top-4 z-50 max-w-7xl mx-auto rounded-full transition-colors duration-500 ${
        scrolled ? "bg-gray-300 dark:bg-black" : "bg-transparent"
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

        <NavItems
          items={NAV_ITEMS}
          className={`text-white ${scrolled ? "text-gray-900 dark:text-gray-100" : "text-white"}`}
        />

        <div className="flex items-center gap-4">
          <button
            onClick={toggleTheme}
            aria-label="Toggle Theme"
            className="rounded-full p-2 hover:bg-gray-200 dark:hover:bg-gray-600 transition cursor-pointer"
          >
            {theme === "dark" ? (
              <IconSun key="sun" className="text-yellow-400" size={20} />
            ) : (
              <IconMoon key="moon" className="text-gray-700" size={20} />
            )}
          </button>

          <NavbarButton
            as={Link}
            href="/login"
            className="bg-green-600 hover:bg-green-900 text-white font-catamaran font-bold px-10 py-2 rounded-full transition-colors duration-300 cursor-pointer"
            variant="dark"
          >
            Login
          </NavbarButton>
        </div>
      </NavBody>

      <MobileNav>
        <MobileNavHeader>
          <Link href="/" className="flex items-center cursor-pointer">
            <img
              src="/MeshSpire-Dark 1.svg"
              alt="MeshSpire Logo"
              width={120}
              height={85}
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
            href="/login"
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
