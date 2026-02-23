"use client";
import Image from "next/image";
import AnimatedIntro from "./AnimatedIntro";
import LinkButton from "@/components/general/LinkButton";
import { FaArrowRight } from "react-icons/fa6";
import Projects from "@/components/projects/Projects";

function HeroSection() {
  return (
    <section id="home" className="h-screen relative flex justify-center items-center overflow-hidden flex-col">
        
      <div className="absolute z-10 flex flex-col items-center">

        {/* image */}
        <div className="relative w-36 h-36 rounded-full border-2 border-accent">
          <div className="absolute inset-0 rounded-full blur-lg animate-pulse opacity-60 bg-linear-to-r from-accent to-primary/80 w-40 h-40"/>
          <Image src="/my-photo.jpeg" alt="My picture" className="rounded-full object-cover" fill/>
        </div>

        <h1 className="my-6 text-center text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-wide text-transparent bg-clip-text bg-linear-to-r to-primary from-surface">Hi, I am Sanskriti Garg</h1>
        <AnimatedIntro/>
        <LinkButton href="#projects" icon={FaArrowRight} iconPosition="right" text="See my work"/>
      </div>

    </section>
  )
}

export default HeroSection;
