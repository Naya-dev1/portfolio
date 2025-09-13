import React, { useState } from "react";
// import { Link } from "react-router-dom";
import { useTheme } from "../context/ThemeContext";
import heroImage from "../assets/WhatsApp Image 2025-09-10 at 21.25.20 (1).jpeg";

const faqs = {
  // Greetings
  // Greetings
  hi: "Hey there! I’m Stephanie’s AI assistant 😊. Ask about my full-stack services or Projects page!",
  hello:
    "Hey there! I’m Stephanie’s AI assistant 😊. Ask about my full-stack services or Projects page!",
  hey: "Hey there! I’m Stephanie’s AI assistant 😊. Ask about my full-stack services or Projects page!",

  // Services
  "what services do you offer":
    "I offer full-stack web development with React, Tailwind CSS, Node.js, and MongoDB/PostgreSQL. I also provide maintenance and optimization. Check my Projects or Contact page!",

  // Project Timeline and Process
  "how long does it take to complete a project":
    "A simple website takes 2–4 weeks, depending on scope. Contact me to discuss your project!",
  "what is your design process":
    "I gather requirements, build responsive frontends with React, and develop APIs with Node.js. I test and iterate for quality. See Projects for examples!",
  "do you provide maintenance after project completion":
    "Yes, I offer maintenance for bug fixes and updates. Contact me to set it up!",

  // Contact and Availability
  "how can i contact you":
    "Use the Contact page or email stephaniechi74@gmail.com. Links are in Contact!",
  "are you available for freelance":
    "Yes, I’m open to freelance full-stack projects. Contact me to discuss!",
  "can you join a team":
    "I’m open to full-stack team roles. Connect via the Contact page!",

  // About
  "where are you based":
    "I’m based in Lagos, Nigeria, building full-stack apps. Contact me to connect!",
};

const Home = () => {
  const { theme } = useTheme();
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    {
      sender: "bot",
      text: "Hi! I’m your AI assistant. Ask about my full-stack services or projects!",
    },
  ]);
  const [input, setInput] = useState("");

  const handleSend = () => {
    if (!input.trim()) return;

    const userMessage = { sender: "user", text: input };
    setMessages((prev) => [...prev, userMessage]);

    const reply =
      faqs[input.toLowerCase().trim()] ||
      "Hi! I’m not sure how to answer that 😊. Please tell me more via the Contact page or email stephaniechi74@gmail.com!";
    const botMessage = { sender: "bot", text: reply };
    setMessages((prev) => [...prev, botMessage]);
    setInput("");
  };

  const bgColor = theme === "dark" ? "bg-gray-900" : "bg-white";
  const textColor = theme === "dark" ? "text-white" : "text-gray-800";
  const subTextColor = theme === "dark" ? "text-gray-300" : "text-gray-700";

  return (
    <section
      id="home"
      className={`min-h-screen pt-25 flex flex-col md:flex-row items-center justify-between pb-5 px-6 md:px-16 relative overflow-hidden ${bgColor} ${textColor}`}
    >
      {/* Left Side - Text */}
      <div className="flex-1 text-center md:text-left space-y-6 z-10 mt-10 md:mt-0">
        <h1 className="text-5xl font-bold mb-4">
          Hi, I’m <span className="text-[#1A4D8F]">Onyekwelibe Stephanie</span>{" "}
        </h1>
        <p className={`text-lg mb-6 max-w-xl mx-auto md:mx-0 ${subTextColor}`}>
          I’m a frontend developer passionate about crafting modern, responsive,
          and interactive web experiences. I focus on building clean, functional
          interfaces that are both creative and user-friendly.
        </p>
        <div className="space-x-4 flex flex-wrap justify-center md:justify-start gap-4">
          <a
            href="#projects"
            className="px-6 py-3 bg-[#1A4D8F] text-white font-medium rounded-xl shadow-md hover:bg-[#123566] transition"
          >
            View Projects
          </a>
          <a
            href="#contact"
            className="px-6 py-3 border border-[#1A4D8F] text-[#1A4D8F] font-medium rounded-xl hover:bg-[#1A4D8F] hover:text-white transition"
          >
            Contact Me
          </a>
        </div>
      </div>

      {/* Right Side - Image */}
      <div className="flex-1 flex justify-center mt-12 md:mt-0 relative w-full md:w-auto z-10">
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-56 h-56 md:w-72 md:h-72 bg-[#1A4D8F]/20 rounded-full filter blur-3xl -z-10"></div>

        <img
          src={heroImage}
          alt="Naya"
          className="w-56 h-56 md:w-100 md:h-100 object-cover rounded-full border-4 border-[#1A4D8F] shadow-lg relative z-20"
        />
      </div>

      {/* AI Assistant Button */}
      <button
        onClick={() => setIsOpen(true)}
        className="fixed bottom-6 right-6 w-14 h-14 rounded-full bg-[#1A4D8F] text-white shadow-lg hover:scale-110 transition-transform z-20"
      >
        🤖
      </button>

      {/* Modal */}
      {isOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-black/50 z-50">
          <div
            className={`rounded-xl shadow-lg w-full max-w-md p-4 flex flex-col ${bgColor} ${textColor}`}
          >
            {/* Header */}
            <div className="flex justify-between items-center border-b pb-2 mb-2 border-gray-300">
              <h2 className="font-semibold">AI Assistant</h2>
              <button
                onClick={() => setIsOpen(false)}
                className="text-gray-500 hover:text-black"
              >
                ✕
              </button>
            </div>

            {/* Messages */}
            <div className="flex-1 max-h-80 overflow-y-auto mb-4 space-y-2 scrollbar-hide">
              {messages.map((msg, i) => (
                <div
                  key={i}
                  className={`p-2 rounded-lg max-w-[80%] ${
                    msg.sender === "user"
                      ? "ml-auto bg-gray-800 text-white"
                      : "bg-gray-200 text-black"
                  }`}
                >
                  {msg.text}
                </div>
              ))}
            </div>

            {/* Input */}
            <div className="flex">
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Ask me something..."
                className="flex-1 border rounded-l-lg px-3 py-2 outline-none bg-transparent text-current"
                onKeyDown={(e) => e.key === "Enter" && handleSend()}
              />
              <button
                onClick={handleSend}
                className="px-4 py-2 bg-[#1A4D8F] text-white rounded-r-lg hover:bg-[#123566] transition"
              >
                Send
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Home;
