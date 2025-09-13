import { useState, useEffect, useRef } from "react";
import { useTheme } from "../context/ThemeContext";

const QuoteBreak = () => {
  const { theme } = useTheme();

  // Colors based on theme
  const bgColor = theme === "dark" ? "bg-gray-900" : "bg-white";
  const textColor = theme === "dark" ? "text-white" : "text-gray-700";

  const quotes = [
    "Turning ideas into code, one pixel at a time.",
    "Creativity meets logic in every project I build.",
    "I don’t just write code; I tell stories through it.",
    "Design, develop, and delight — that’s my mantra.",
    "Learning never stops; neither does my curiosity.",
  ];

  const [currentQuote, setCurrentQuote] = useState(0);
  const [displayedText, setDisplayedText] = useState("");
  const charIndexRef = useRef(0);
  const timeoutRef = useRef(null);
  const isMountedRef = useRef(false);

  useEffect(() => {
    if (isMountedRef.current) return; // Skip duplicate runs in Strict Mode
    isMountedRef.current = true;

    const fullText = quotes[currentQuote];
    charIndexRef.current = 0;
    setDisplayedText("");

    const typeQuote = () => {
      if (charIndexRef.current < fullText.length) {
        setDisplayedText(fullText.slice(0, charIndexRef.current + 1));
        charIndexRef.current += 1;
        timeoutRef.current = setTimeout(typeQuote, 50);
      } else {
        timeoutRef.current = setTimeout(() => {
          setCurrentQuote((prev) => (prev + 1) % quotes.length);
        }, 5000);
      }
    };

    typeQuote();

    return () => {
      isMountedRef.current = false;
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
  }, [currentQuote]);

  return (
    <div
      className={`relative w-full h-60 md:h-80 flex items-center justify-center px-6 overflow-hidden ${bgColor}`}
    >
      {/* Background floating circles */}
      <div className="absolute top-8 left-8 w-16 h-16 bg-[#1A4D8F]/10 rounded-full animate-float-slow"></div>
      <div className="absolute bottom-10 right-10 w-20 h-20 bg-[#1A4D8F]/10 rounded-full animate-float-slow"></div>
      <div className="absolute top-20 right-16 w-12 h-12 bg-[#1A4D8F]/8 rounded-full animate-float-slow"></div>

      <p className={`relative text-center md:text-xl lg:text-2xl italic max-w-2xl font-medium ${textColor}`}>
        {displayedText}
        <span className="animate-blink">|</span>
      </p>
    </div>
  );
};

export default QuoteBreak;
