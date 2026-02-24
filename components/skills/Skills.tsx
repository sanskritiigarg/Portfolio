import React from "react";
import Header from "../general/Header";
import { FaCss3, FaDocker, FaGitAlt, FaGithub, FaGitlab, FaHtml5, FaJava, FaNodeJs, FaPython, FaReact } from "react-icons/fa6";
import { IoLogoJavascript } from "react-icons/io";
import { SiExpress, SiMongodb, SiMysql, SiRedux, SiTypescript } from "react-icons/si";
import { RiNextjsFill, RiTailwindCssFill } from "react-icons/ri";
import SkillCard from "./SkillCard";

const skills = [
  {
    name: "Java",
    icon: FaJava
  },
  {
    name: "JavaScript",
    icon: IoLogoJavascript
  },
  {
    name: "Python",
    icon: FaPython
  },
  {
    name: "TypeScript",
    icon: SiTypescript
  },
  {
    name: "MySQL",
    icon: SiMysql
  },
  {
    name: "HTML",
    icon: FaHtml5
  },
  {
    name: "CSS",
    icon: FaCss3
  },
  {
    name: "Tailwind CSS",
    icon: RiTailwindCssFill
  },
  {
    name: "React",
    icon: FaReact
  },
  {
    name: "Node.js",
    icon: FaNodeJs
  },
  {
    name: "Express.js",
    icon: SiExpress
  },
  {
    name: "MongoDB",
    icon: SiMongodb
  },
  {
    name: "Next.js",
    icon: RiNextjsFill
  },
  {
    name: "Redux Toolkit",
    icon: SiRedux
  },
  {
    name: "Docker",
    icon: FaDocker
  },
  {
    name: "Git",
    icon: FaGitAlt
  },
  {
    name: "Gitlab",
    icon: FaGitlab
  },
  {
    name: "Github",
    icon: FaGithub
  },
]

function Skills() {
  return (
    <section id="skills" className="mt-4">
      <Header title="My Skills" />
      <div className="flex flex-wrap justify-center gap-6 px-12">
        {skills.map((skill, index) => (
          <SkillCard key={index} name={skill.name} icon={skill.icon} />
        ))}
      </div>
    </section>
  )
}

export default Skills;
