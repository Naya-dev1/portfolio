import React from "react";
import { useTheme } from "../context/ThemeContext";
import intro from "/intro-dropdown.png";
import goal from "/Goal.png";
import belle from "/belle-full.png";
import world from "/world app.png";
import port from "/portfolio.png";
import contact from "/contact.png";

const projects = [
  {
    name: "INTRO DROP-DOWN",
    image: intro,
    description:
      "A simple dropdown menu built with HTML and CSS to practice UI basics.",
    tech: ["HTML", "CSS", "tailwind"],
    demo: "https://intro-dropdown-two.vercel.app",
    code: "https://github.com/Naya-dev1/INTRO-DROPDOWN.git",
    category: "started",
  },
  {
    name: "Goal Website",
    image: goal,
    description:
      "A clean and responsive landing page designed around goals and productivity.",
    tech: ["React", "TailwindCSS", "Node.js"],
    demo: "https://goal-front-taupe.vercel.app",
    code: "https://github.com/Naya-dev1/Goal-Front.git",
    category: "going",
  },
  {
    name: "Portfolio",
    image: port,
    description:
      "My personal portfolio showcasing projects, skills, and contact info.",

    tech: ["React", "Javascript", "Tailwind"],
    demo: "portfolio-ruby-beta-hur346pclt.vercel.app",
    code: "https://github.com/Naya-dev1/portfolio.git",
    category: "going",
  },
  {
    name: "Contact Form",
    image: contact,
    description: "A functional contact form with validation and clean UI.",
    tech: ["HTML", "CSS", "JS"],
    demo: "https://contact-form-weld-sigma.vercel.app",
    code: "https://github.com/Naya-dev1/Contact-Form.git",
    category: "started",
  },
  {
    name: "World Website",
    image: world,
    description:
      "A world-themed informational site built with React and JavaScript.",

    tech: ["HTML", "Javascript", "React"],
    demo: "https://world-app-gules.vercel.app",
    code: "https://github.com/Naya-dev1/WORLD-APP.git",
    category: "going",
  },

  {
    name: "BELLE-FULL E-COMMERCE WEBSITE",
    image: belle,
    description:
      "An e-commerce platform with a shopping cart and checkout flow.",
    tech: ["React", "Css", "Tailwind"],
    demo: "https://belle-full-nine.vercel.app",
    code: "https://github.com/Naya-dev1/BELLE-FULL.git",
    category: "started",
  },
];

const ProjectCard = ({ project, theme }) => {
  // Card is always white
  const cardBg = "bg-white";

  // Text colors
  const textColor = theme === "dark" ? "text-gray-900" : "text-gray-800";
  const descColor = theme === "dark" ? "text-gray-700" : "text-gray-700";

  // Buttons match section background
  // Light/Dark mode colors
  const btnLiveDemo =
    theme === "dark"
      ? "bg-[#1A4D8F] text-white hover:bg-gray-800"
      : "bg-[#1A4D8F] text-white hover:bg-[#123566]";

  const btnSourceCode =
    theme === "dark"
      ? "border border-gray-900 text-gray-900 hover:bg-gray-900 hover:text-white"
      : "border border-[#1A4D8F] text-[#1A4D8F] hover:bg-[#1A4D8F] hover:text-white";

  return (
    <div
      className={`rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 ${cardBg}`}
    >
      <div
        className="h-64 bg-cover bg-center"
        style={{ backgroundImage: `url(${project.image})` }}
      ></div>

      <div className="p-4 text-center">
        <h3 className={`text-xl font-semibold mb-2 ${textColor}`}>
          {project.name}
        </h3>
        <p className={`${descColor} mb-2`}>{project.description}</p>
        <div className="flex flex-wrap justify-center gap-2 mb-4">
          {project.tech.map((tech, i) => (
            <span
              key={i}
              className="bg-[#1A4D8F] text-white px-2 py-1 rounded text-sm"
            >
              {tech}
            </span>
          ))}
        </div>
        <div className="flex justify-center gap-4">
          <a
            href={project.demo}
            target="_blank"
            className={`px-4 py-2 rounded-lg transition ${btnLiveDemo}`}
          >
            Live Demo
          </a>
          <a
            href={project.code}
            target="_blank"
            className={`px-4 py-2 rounded-lg transition ${btnSourceCode}`}
          >
            Source Code
          </a>
        </div>
      </div>
    </div>
  );
};

const Project = () => {
  const { theme } = useTheme();
  const sectionBg = theme === "dark" ? "bg-gray-900" : "bg-white";

  return (
    <section
      id="projects"
      className={`relative overflow-hidden min-h-screen px-6 md:px-16 py-20 ${sectionBg}`}
    >
      {/* Background circles */}
      <div className="absolute -top-20 -left-20 w-72 h-72 bg-[#1A4D8F] opacity-10 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute top-40 right-10 w-96 h-96 bg-[#1A4D8F] opacity-5 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute bottom-10 left-1/2 w-80 h-80 bg-[#1A4D8F] opacity-5 rounded-full blur-3xl pointer-events-none -translate-x-1/2"></div>

      <h2 className="text-4xl font-bold mb-12 text-center text-[#1A4D8F]">
        Projects
      </h2>

      {/* How It Started */}
      <div className="mb-16">
        <h3 className="text-2xl font-semibold mb-6 text-[#1A4D8F]">
          How It Started
        </h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {projects
            .filter((p) => p.category === "started")
            .map((project, i) => (
              <ProjectCard key={i} project={project} theme={theme} />
            ))}
        </div>
      </div>

      {/* How It's Going */}
      <div>
        <h3 className="text-2xl font-semibold mb-6 text-[#1A4D8F]">
          How It’s Going
        </h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {projects
            .filter((p) => p.category === "going")
            .map((project, i) => (
              <ProjectCard key={i} project={project} theme={theme} />
            ))}
        </div>
      </div>
    </section>
  );
};

export default Project;
