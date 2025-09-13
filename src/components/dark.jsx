import React from "react";
import intro from "/intro-dropdown.png";
import goal from "/Goal.png";
import belle from "/belle-full.png";
import world from "/world app.png";
import travel from "/travel .png";

const projects = [
  {
    name: "Basic HTML Website",
    image: intro,
    description: "My very first website built with HTML and CSS.",
    tech: ["HTML", "CSS"],
    demo: "https://your-demo-link.com",
    code: "https://github.com/your-username/html-website",
    category: "started",
  },
  {
    name: "Portfolio Website",
    image: goal,
    description: "A responsive portfolio showcasing my projects and skills.",
    tech: ["React", "TailwindCSS", "Vite"],
    demo: "https://world-app-gules.vercel.app/",
    code: "https://github.com/Naya-dev1/WORLD-APP",
    category: "going",
  },
  {
    name: "Chat App",
    image: "/projects/chatapp.png",
    description: "Real-time chat application with user authentication.",
    tech: ["React", "Node.js", "Socket.io"],
    demo: "https://your-demo-link.com",
    code: "https://github.com/your-username/chatapp",
    category: "going",
  },
  {
    name: "Landing Page",
    image: belle,
    description: "A simple landing page built with HTML/CSS/JS.",
    tech: ["HTML", "CSS", "JS"],
    demo: "https://your-demo-link.com",
    code: "https://github.com/your-username/landing-page",
    category: "started",
  },
  {
    name: "MERN Blog",
    image: world,
    description: "Full-stack blog application with MongoDB, Express, React, Node.js.",
    tech: ["MongoDB", "Express", "React", "Node.js"],
    demo: "https://your-demo-link.com",
    code: "https://github.com/your-username/mern-blog",
    category: "going",
  },
  {
    name: "Travel",
    image: travel,
    description: "A basic JS calculator to practice DOM manipulation.",
    tech: ["JavaScript", "HTML", "CSS"],
    demo: "https://your-demo-link.com",
    code: "https://github.com/your-username/calculator-app",
    category: "started",
  },
];

const ProjectCard = ({ project }) => (
  <div className="rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 bg-white">
    <div
      className="h-64 bg-cover bg-center"
      style={{ backgroundImage: `url(${project.image})` }}
    ></div>

    <div className="p-4 text-center">
      <h3 className="text-xl font-semibold mb-2 text-gray-800">{project.name}</h3>
      <p className="text-gray-600 mb-2">{project.description}</p>
      <div className="flex flex-wrap justify-center gap-2 mb-4">
        {project.tech.map((tech, i) => (
          <span
            key={i}
            className="bg-[#0057B7] text-white px-2 py-1 rounded text-sm"
          >
            {tech}
          </span>
        ))}
      </div>
      <div className="flex justify-center gap-4">
        <a
          href={project.demo}
          target="_blank"
          className="px-4 py-2 bg-[#0057B7] text-white rounded-lg font-medium 
                     hover:bg-[#0073FF] hover:scale-105 hover:shadow-md transition-all duration-300"
        >
          Live Demo
        </a>
        <a
          href={project.code}
          target="_blank"
          className="px-4 py-2 border border-[#0057B7] text-[#0057B7] rounded-lg font-medium
                     hover:bg-[#0057B7] hover:text-white hover:shadow-md transition-all duration-300"
        >
          Source Code
        </a>
      </div>
    </div>
  </div>
);

const Project = () => {
  return (
    <section className="min-h-screen bg-gradient-to-b from-white via-[#F7F5FA] to-white px-6 md:px-16 py-20">
      <h2 className="text-4xl font-bold mb-12 text-center text-gray-800">Projects</h2>

      {/* How It Started */}
      <div className="mb-16">
        <h3 className="text-2xl font-semibold mb-6 text-gray-700">How It Started</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {projects
            .filter((p) => p.category === "started")
            .map((project, i) => (
              <ProjectCard key={i} project={project} />
            ))}
        </div>
      </div>

      {/* How It's Going */}
      <div>
        <h3 className="text-2xl font-semibold mb-6 text-gray-700">How It’s Going</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {projects
            .filter((p) => p.category === "going")
            .map((project, i) => (
              <ProjectCard key={i} project={project} />
            ))}
        </div>
      </div>
    </section>
  );
};

export default Project;
