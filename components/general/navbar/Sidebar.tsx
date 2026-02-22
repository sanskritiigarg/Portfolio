"use client"
import React from "react";
import { navLinks } from "./Navbar";
import Link from "next/link";

interface SidebarProps {
  isSidebarOpen: boolean;
  setSidebarOpen: (value: boolean | ((prev: boolean) => boolean)) => void;
}

function Sidebar({isSidebarOpen, setSidebarOpen}: SidebarProps) {
  const showMenu = isSidebarOpen ? "translate-x-0" : "translate-x-full"
  return (
    <>
      {/* inset Background */}
      <div className={`md:hidden fixed inset-0 transform z-50 bg-background/40 w-full h-screen transition-all ${showMenu}`}/>

      <div className={`md:hidden fixed flex items-center justify-center flex-col h-screen z-80 w-[60%] space-y-2 tranform transition-all delay-150 right-0 top-0 border-l border-border bg-surface px-4 ${showMenu}`}>
        {navLinks.map((link) => (
          <Link href={link.url} key={link.url} className="flex justify-center w-full py-4 px-6 rounded-lg hover:bg-primary/80 transition-all duration-200 text-center font-medium text-base" onClick={() => setSidebarOpen(!isSidebarOpen)}>{link.label}</Link>
        ))}
      </div>
    </>
  );
}

export default Sidebar;
