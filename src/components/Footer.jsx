import { useTheme } from "../context/ThemeContext";

const Footer = () => {
  const { theme } = useTheme();

  const bgColor = theme === "dark" ? "bg-gray-900" : "bg-white";
  const textColor = theme === "dark" ? "text-gray-300" : "text-gray-700";
  const borderColor = theme === "dark" ? "border-gray-700" : "border-gray-300";

  return (
    <footer className={`py-12 text-center border-t ${bgColor} ${borderColor}`}>
      <h1 className="text-2xl font-bold text-[#1A4D8F]">Stephanie</h1>
      <p className={`mt-2 text-sm ${textColor}`}>
        Designing clean and modern web experiences.
      </p>
      <p className={`mt-4 text-xs opacity-80 ${textColor}`}>
        © {new Date().getFullYear()} Naya. All rights reserved.
      </p>
    </footer>
  );
};

export default Footer;
