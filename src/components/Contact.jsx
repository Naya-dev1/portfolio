import React, { useRef, useEffect } from "react";
import emailjs from "@emailjs/browser";
import { FaGithub, FaLinkedin, FaTwitter, FaWhatsapp } from "react-icons/fa";
import { MdEmail, MdLocationOn } from "react-icons/md";
import toast from "react-hot-toast";
import { useTheme } from "../context/ThemeContext";

const Contact = () => {
  const form = useRef();
  const { theme } = useTheme();

  useEffect(() => {
    emailjs.init("BfGHJMa65lYeKfs3Q"); // Your EmailJS Public Key
  }, []);

  const sendEmail = (e) => {
    e.preventDefault();
    if (!form.current.checkValidity()) {
      form.current.reportValidity();
      toast.error("Please fill out all required fields.");
      return;
    }

    emailjs
      .sendForm(
        "service_546tnwn",
        "template_vc6z2wq",
        form.current,
        "BfGHJMa65lYeKfs3Q"
      )
      .then(
        (result) => {
          toast.success("Message sent successfully ✅");
          form.current.reset();
        },
        (error) => {
          toast.error("Failed to send message ❌, try again.");
        }
      );
  };

  // Colors based on theme
  const bgColor = theme === "dark" ? "bg-gray-900" : "bg-white";
  const cardBorder = theme === "dark" ? "border-gray-700" : "border-gray-100";
  const inputBorder =
    theme === "dark"
      ? "border-gray-600 bg-gray-900 text-white"
      : "border-gray-300 bg-white text-gray-800";
  const textColor = theme === "dark" ? "text-white" : "text-gray-800";
  const subTextColor = theme === "dark" ? "text-gray-300" : "text-gray-700";

  return (
    <section
      id="contact"
      className={`min-h-screen px-6 md:px-16 py-20 flex flex-col md:flex-row items-center justify-center gap-12 ${bgColor} ${textColor}`}
    >
      {/* Left side: contact details */}
      <div className="flex-1 space-y-6 max-w-md text-center md:text-left">
        <h2 className="text-4xl font-bold text-[#1A4D8F]">Let’s Connect</h2>
        <p className={`text-lg ${subTextColor}`}>
          Have a project in mind or just want to say hi? I’d love to hear from
          you. Let’s build something amazing together.
        </p>
        <div className="space-y-4">
          <div
            className={`flex items-center justify-center md:justify-start gap-3 ${subTextColor}`}
          >
            <MdEmail className="text-[#1A4D8F] text-2xl" />
            <span>stephaniechi74@gmail.com</span>
          </div>
          <div
            className={`flex items-center justify-center md:justify-start gap-3 ${subTextColor}`}
          >
            <MdLocationOn className="text-[#1A4D8F] text-2xl" />
            <span> Lagos, Nigeria</span>
          </div>
        </div>
       <div className="flex justify-center md:justify-start gap-4 mt-6">
  <a
    href="https://wa.me/2349023141764"
    target="_blank"
    rel="noopener noreferrer"
    className={`p-3 rounded-full transition shadow-md ${
      theme === "dark"
        ? "bg-gray-800 text-white hover:bg-gray-700"
        : "bg-[#1A4D8F] text-white hover:bg-[#123566]"
    }`}
  >
    <FaWhatsapp className="text-xl" />
  </a>
  <a
    href="https://github.com/YOUR_GITHUB"
    target="_blank"
    rel="noopener noreferrer"
    className={`p-3 rounded-full transition shadow-md ${
      theme === "dark"
        ? "bg-gray-800 text-white hover:bg-gray-700"
        : "bg-[#1A4D8F] text-white hover:bg-[#123566]"
    }`}
  >
    <FaGithub className="text-xl" />
  </a>
  <a
    href="https://linkedin.com/in/YOUR_LINKEDIN"
    target="_blank"
    rel="noopener noreferrer"
    className={`p-3 rounded-full transition shadow-md ${
      theme === "dark"
        ? "bg-gray-800 text-white hover:bg-gray-700"
        : "bg-[#1A4D8F] text-white hover:bg-[#123566]"
    }`}
  >
    <FaLinkedin className="text-xl" />
  </a>
  {/* <a
    href="https://twitter.com/YOUR_TWITTER"
    target="_blank"
    rel="noopener noreferrer"
    className={`p-3 rounded-full transition shadow-md ${
      theme === "dark"
        ? "bg-gray-800 text-white hover:bg-gray-700"
        : "bg-[#1A4D8F] text-white hover:bg-[#123566]"
    }`}
  >
    <FaTwitter className="text-xl" />
  </a> */}
</div>

      </div>

      {/* Right side: contact form */}
      <div
        className={`flex-1 max-w-md w-full ${bgColor} p-8 rounded-xl shadow-lg border ${cardBorder}`}
      >
        <h3 className="text-2xl font-semibold mb-6 text-center text-[#1A4D8F]">
          Send a Message
        </h3>
        <form ref={form} onSubmit={sendEmail} className="space-y-4">
          <input
            type="text"
            name="user_name"
            placeholder="Name"
            required
            className={`w-full px-4 py-2 rounded-lg outline-none focus:ring-2 focus:ring-[#1A4D8F] border ${inputBorder}`}
          />
          <input
            type="email"
            name="user_email"
            placeholder="Email"
            required
            className={`w-full px-4 py-2 rounded-lg outline-none focus:ring-2 focus:ring-[#1A4D8F] border ${inputBorder}`}
          />
          <textarea
            name="message"
            placeholder="Message"
            rows={5}
            required
            className={`w-full px-4 py-2 rounded-lg outline-none focus:ring-2 focus:ring-[#1A4D8F] border ${inputBorder}`}
          ></textarea>
          <button
            type="submit"
            className="w-full px-4 py-3 bg-[#1A4D8F] text-white font-medium rounded-lg hover:bg-[#123566] transition"
          >
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
