import Contact from "@/components/contact/Contact";
import HeroSection from "@/components/home/hero/HeroSection";
import Projects from "@/components/projects/Projects";
import Skills from "@/components/skills/Skills";
import AnimationLayout from "@/layout/AnimationLayout";
import { Toaster } from "react-hot-toast";

export default function Home() {
  return (
    <AnimationLayout>
      <HeroSection/>
      <Projects/>
      <Skills/>
      <Contact/>
      <Toaster/>
    </AnimationLayout>
  );
}
