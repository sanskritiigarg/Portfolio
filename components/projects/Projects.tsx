import React from "react";
import Header from "../general/Header";
import ProjectCard from "./ProjectCard";

const projects = [
  {
    title: "Notes Drill",
    image: "/projects/notes-drill.png",
    description:
      "An AI-powered learning platform that converts PDFs into quizzes, flashcards, summaries, and document-grounded Q&A.",
    links: [
      { label: "Github", url: "https://github.com/sanskritiigarg/Notes-Drill" },
      { label: "Gitlab", url: "https://gitlab.com/sanskritiigarg/Notes-Drill" },
    ],
    live: "https://notes-drill.vercel.app/",
  },
  {
    title: "Stitches",
    image: "/projects/stitches.png",
    description:
      " a scalable MERN e-commerce platform with clean REST APIs, modular backend architecture, and secure JWT-based authentication.",
    links: [
      { label: "Github", url: "https://github.com/sanskritiigarg/Stitches" },
    ],
    live: "https://stitches-store.vercel.app/",
  },
];

function Projects() {
  return (
    <section id="projects">
      <Header title="My Projects" />
      <div className="w-[80%] mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 overflow-hidden">
        {projects.map((project) => (
          <ProjectCard
            key={project.title}
            title={project.title}
            image={project.image}
            description={project.description}
            links={project.links}
            live={project.live}
          />
        ))}
      </div>
    </section>
  );
}

export default Projects;
