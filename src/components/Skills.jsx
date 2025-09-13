import { FaReact, FaNodeJs, FaCss3Alt, FaHtml5 } from "react-icons/fa";
import { SiTailwindcss, SiJavascript } from "react-icons/si";
import { useTheme } from "../context/ThemeContext";

const skills = [
  { name: "React", icon: <FaReact size={40} />, level: 90, description: "Building dynamic UI and SPAs with React and Hooks." },
  { name: "Node.js", icon: <FaNodeJs size={40} />, level: 80, description: "Backend development, REST APIs, and server-side logic." },
  { name: "TailwindCSS", icon: <SiTailwindcss size={40} />, level: 85, description: "Responsive and modern designs with utility-first CSS." },
  { name: "JavaScript", icon: <SiJavascript size={40} />, level: 95, description: "Core language for dynamic web applications." },
  { name: "HTML5", icon: <FaHtml5 size={40} />, level: 95, description: "Semantic markup and accessibility best practices." },
  { name: "CSS3", icon: <FaCss3Alt size={40} />, level: 90, description: "Styling, layouts, animations, and responsive design." },
];

const Skills = () => {
  const { theme } = useTheme();

  // Colors based on theme
  const sectionBg = theme === "dark" ? "bg-gray-900" : "bg-white";
  const cardFrontBg = theme === "dark" ? "bg-gray-800" : "bg-[#E0F0FF]";
  const cardBackBg = theme === "dark" ? "bg-gray-700" : "bg-white";
  const textColor = theme === "dark" ? "text-white" : "text-gray-800";
  const descriptionColor = theme === "dark" ? "text-gray-300" : "text-gray-700";

  return (
    <section
      id="skills"
      className={`relative min-h-screen flex flex-col items-center justify-center px-6 md:px-16 py-20 overflow-hidden ${sectionBg}`}
    >
      <h2 className="text-4xl font-bold mb-12 text-center text-[#1A4D8F]">
        My Skills
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 w-full max-w-6xl">
        {skills.map((skill, index) => (
          <div key={index} className="group perspective">
            {/* Card */}
            <div className="relative w-full h-56 md:h-64 rounded-xl shadow-lg transition-transform duration-500 transform-style preserve-3d group-hover:rotate-y-180">

              {/* Front */}
              <div className={`absolute w-full h-full ${cardFrontBg} rounded-xl shadow-lg flex flex-col items-center justify-center backface-hidden p-4`}>
                <div className="mb-3" style={{ color: "#1A4D8F" }}>{skill.icon}</div>
                <h3 className={`text-xl font-semibold ${textColor}`}>{skill.name}</h3>

                {/* Progress Bar */}
                <div className="w-24 h-2 bg-[#1A4D8F]/20 rounded-full mt-2">
                  <div
                    className="h-2 bg-[#1A4D8F] rounded-full"
                    style={{ width: `${skill.level}%` }}
                  ></div>
                </div>
              </div>

              {/* Back */}
              <div className={`absolute w-full h-full ${cardBackBg} p-4 rounded-xl shadow-lg flex items-center justify-center text-center rotate-y-180 backface-hidden`}>
                <p className={descriptionColor}>{skill.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
