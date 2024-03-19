"use client";
import React, { useState } from "react";
import Link from "next/link";
import NavLink from "./NavLink";
import { HeartIcon, XMarkIcon } from "@heroicons/react/24/solid";
import MenuOverlay from "./MenuOverlay";

const navLinks = [
  {
    title: "Experience",
    path: "#experience",
  },
  {
    title: "Projects",
    path: "#projects",
  },
  {
    title: "Contact",
    path: "#contact",
  },
];

const Navbar = () => {
  const [navbarOpen, setNavbarOpen] = useState(false);
  return (
    <nav>
      <div className="flex flex-wrap items-center justify-between mx-auto p-7">
        <Link
          href={"/"}
          className="bellabooFont text-5xl text-[#e66d8de2] pl-5"
        >
          gladli
        </Link>
        <div className="mobile-menu block md:hidden">
          {!navbarOpen ? (
            <button onClick={() => setNavbarOpen(true)} className="flex items-center px-3 py-2 text-[#e66d8de2] hover:text-[#e89bb0]">
              <HeartIcon className="h-5 w-5" />
            </button>
          ) : (
            <button onClick={() => setNavbarOpen(false)} className="flex items-center px-3 py-2 text-[#e66d8de2] hover:text-[#e89bb0]">
              <XMarkIcon className="h-5 w-5" />
            </button>
          )}
        </div>
        <div className='menu hidden md:block md:w-auto id="navbar"'>
          <ul className="flex p-4 md:p-0 md:flex-row md:space-x-8">
            {navLinks.map((link, index) => (
              <li key={index}>
                <NavLink href={link.path} title={link.title} />
              </li>
            ))}
          </ul>
        </div>
      </div>
      {navbarOpen ? <MenuOverlay links={navLinks} /> : null}
    </nav>
  );
};

export default Navbar;