"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import Logo from "./Logo";
import { FaDownload } from "react-icons/fa6";
import { MdLightMode, MdDarkMode } from "react-icons/md";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import LinkButton from "../LinkButton";
import Sidebar from "./Sidebar";

export const navLinks = [
  {url: "#home", label: "Home"},
  {url: "#skills", label: "Skills"},
  {url: "#projects", label: "Projects"},
  {url: "#contact", label: "Contact"},
];


function Navbar() {
  const [isSidebarOpen, setSidebarOpen] = useState(false);
  const [mounted, setMounted] = useState(false)
  const [navBg, setNavBg] = useState(false);

  useEffect(() => {
    setMounted(true)
  }, [])

  useEffect(() => {
    const navHandler = () => {
      if (window.scrollY < 90) setNavBg(false);
      if (window.scrollY >= 90) setNavBg(true);
    }

    window.addEventListener("scroll", navHandler);

    return () => {
      return window.removeEventListener("scroll", navHandler);
    }
  }, []);

  return (
    <nav className={`fixed top-0 z-50 w-full h-18 transition-all duration-300 ${navBg ? "backdrop-blur-lg bg-background/70 shadow shadow-border" : ""}`}>
      <div className="w-[90%] h-full mx-auto flex justify-between items-center">
        <Logo/>
      
        <div className="hidden md:flex items-center gap-8 bg-surface px-3 py-2 rounded-full border border-border hover:shadow hover:shadow-accent transition-all duration-200">
            {navLinks.map((link) => (
              <Link href={link.url} key={link.url} className="py-1 px-4 hover:bg-accent rounded-full transition-colors duration-200">
                {link.label}</Link>
            ))}
        </div>
      
        <div className="flex gap-2">
          <LinkButton href="/documents/Sanskriti_Garg.pdf" text="Resume" download icon={FaDownload} iconPosition="left" rounded/>

          <button className="md:hidden block z-90" onClick={() => setSidebarOpen(!isSidebarOpen)}>
            {isSidebarOpen ? (
               <AiOutlineClose className="w-8 h-8"/>
              ) : (
                <AiOutlineMenu className="w-8 h-8"/>
            )}
          </button>
        </div>

        <Sidebar isSidebarOpen={isSidebarOpen} setSidebarOpen={setSidebarOpen}/>
      </div>
    </nav>
  );
}

export default Navbar;
