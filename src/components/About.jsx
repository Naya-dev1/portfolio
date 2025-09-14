import React from "react";
import { Link } from "react-router-dom";
import { FaBook, FaLaptopCode, FaRocket, FaSchool } from "react-icons/fa";
import { useTheme } from "../context/ThemeContext";
import heroImage from "../assets/WhatsApp Image 2025-09-10 at 21.25.20 (1).jpeg";

const About = () => {
  const { theme } = useTheme();

  // Colors based on theme
  const bgColor = theme === "dark" ? "bg-gray-900" : "bg-white";
  const textColor = theme === "dark" ? "text-white" : "text-gray-800";
  const subTextColor = theme === "dark" ? "text-gray-300" : "text-gray-700";
  const timelineTextColor =
    theme === "dark" ? "text-gray-300" : "text-gray-700";
  const lineColor = theme === "dark" ? "bg-gray-700" : "bg-gray-300";

  return (
    <section
      id="about"
      className={`relative overflow-hidden min-h-screen py-20 px-6 md:px-[100px] ${bgColor} ${textColor}`}
    >
      {/* Background circles */}
      <div className="absolute -top-20 -left-20 w-72 h-72 bg-[#1A4D8F] opacity-10 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute top-40 right-10 w-96 h-96 bg-[#1A4D8F] opacity-5 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute bottom-10 left-1/2 w-80 h-80 bg-[#1A4D8F] opacity-5 rounded-full blur-3xl pointer-events-none -translate-x-1/2"></div>

      {/* Two-column layout */}
      <div className="relative flex flex-col md:flex-row items-center md:items-start max-w-6xl mx-auto gap-10">
        {/* Image */}
        <div className="w-full md:w-1/2 flex justify-center md:justify-start">
          <img
            src={heroImage}
            alt="Adham Dannaway"
            className="w-64 h-64 md:w-80 md:h-80 object-cover rounded-full border-4 border-[#1A4D8F] shadow-lg"
          />
        </div>

        {/* About text */}
        <div className="w-full md:w-1/2 text-center md:text-left space-y-6">
          <h2 className="text-4xl font-bold text-[#1A4D8F]">About Me</h2>
          <p className={`text-lg leading-relaxed ${subTextColor}`}>
            My journey into{" "}
            <span className="text-[#1A4D8F] font-semibold">tech</span> started
            with a love for{" "}
            <span className="text-[#1A4D8F]">reading novels </span>. That
            curiosity led me to discover{" "}
            <span className="text-[#1A4D8F] font-semibold">programming</span> —
            writing things that may seem abstract to others but result in
            beautiful, functional designs. I expanded my skills by learning at{" "}
            <span className="text-[#1A4D8F] font-semibold">TechStudio</span>,
            enhancing my knowledge and building confidence. As a creative at
            heart, coding is the perfect blend of logic and art. When I’m not
            coding, I’m most likely reading or vibing to music .
          </p>

          {/* CTA Buttons */}
          <div className="mt-6 flex justify-center md:justify-start gap-4">
            <a
              href="/DOC-20250901-WA0040._20250914_092314_0000.pdf"
              download
              className="px-6 py-3 bg-[#1A4D8F] text-white rounded-lg shadow-md hover:bg-[#123566] transition"
            >
              Download CV
            </a>
            <a
              href="#contact"
              className="px-6 py-3 border border-[#1A4D8F] text-[#1A4D8F] rounded-lg hover:bg-[#1A4D8F] hover:text-white transition"
            >
              Hire Me
            </a>
          </div>
        </div>
      </div>

      {/* Timeline */}
      <div className="relative mt-16 max-w-4xl mx-auto flex flex-col md:flex-row items-center justify-between">
        {/* Line behind icons */}
        <div
          className={`absolute top-5 left-0 w-full h-[2px] hidden md:block ${lineColor}`}
        ></div>

        {[
          {
            icon: <FaBook size={24} />,
            text: "Started with Novels",
          },
          {
            icon: <FaLaptopCode size={24} />,
            text: "Self-learning Code",
          },
          {
            icon: <FaSchool size={24} />,
            text: "Learning at TechStudio",
          },
          {
            icon: <FaRocket size={24} />,
            text: "Building Projects",
          },
        ].map((step, index) => (
          <div
            key={index}
            className="flex flex-col items-center mb-8 md:mb-0 w-full md:w-1/4 hover:scale-105 transition transform"
          >
            <div className="bg-[#1A4D8F] text-white p-4 rounded-full shadow-md z-10">
              {step.icon}
            </div>
            <p className={`mt-3 font-medium text-center ${timelineTextColor}`}>
              {step.text}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default About;
