import { IoMoonOutline, IoSunnyOutline, IoCloseOutline, IoMenuOutline } from "react-icons/io5";
import { useState } from "react";
import { useTheme } from "../context/ThemeContext";
import logo from "../assets/WhatsApp Image 2025-09-10 at 21.25.20 (1).jpeg";

const Navbar = () => {
  const { theme, toggleTheme } = useTheme();
  const [menuOpen, setMenuOpen] = useState(false);

  const sections = ["home", "about", "skills", "projects", "contact"];

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      window.location.hash = id; // updates URL hash
    }
    setMenuOpen(false); // close mobile menu
  };

  const textColor = theme === "dark" ? "text-white" : "text-gray-800";

  return (
    <nav className={`fixed w-full top-0 z-50 backdrop-blur-md border-b py-4 transition-colors duration-300 ${theme === "dark" ? "bg-gray-900 border-gray-700" : "bg-white/95 border-gray-200"}`}>
      <div className="max-w-6xl mx-auto flex justify-between items-center px-6 md:px-16">
        {/* Logo */}
        <img
          src={logo}
          alt="logo"
          className="w-14 h-14 rounded-full border-3 border-[#1A4D8F] cursor-pointer"
          onClick={() => scrollToSection("home")}
        />

        {/* Desktop Menu */}
        <div className={`hidden md:flex space-x-8 font-medium ${textColor}`}>
          {sections.map((section) => (
            <button
              key={section}
              onClick={() => scrollToSection(section)}
              className={`hover:text-[#1A4D8F] transition-colors capitalize`}
            >
              {section}
            </button>
          ))}
        </div>

        {/* Right Side */}
        <div className="flex items-center space-x-4">
          {/* Theme Toggle */}
          <button
            onClick={toggleTheme}
            className={`p-2 rounded-full transition-colors ${theme === "dark" ? "bg-gray-800" : "bg-gray-100"}`}
          >
            {theme === "dark" ? (
              <IoSunnyOutline className="w-5 h-5 text-yellow-400" />
            ) : (
              <IoMoonOutline className="w-5 h-5 text-gray-800" />
            )}
          </button>

          {/* Mobile Menu Toggle */}
          <button
            className={`md:hidden p-2 rounded transition-colors ${theme === "dark" ? "bg-gray-800" : "bg-gray-100"}`}
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? <IoCloseOutline className="w-6 h-6" /> : <IoMenuOutline className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Dropdown */}
      {menuOpen && (
        <div className={`md:hidden transition-colors ${theme === "dark" ? "bg-gray-900 border-gray-700 text-white" : "bg-white border-gray-200 text-gray-800"}`}>
          <div className="flex flex-col space-y-4 px-6 py-4 font-medium">
            {sections.map((section) => (
              <button
                key={section}
                onClick={() => scrollToSection(section)}
                className="hover:text-[#1A4D8F] capitalize text-left"
              >
                {section}
              </button>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
