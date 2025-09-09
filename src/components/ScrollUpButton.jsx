import React, { useState, useEffect } from "react";
import { FaArrowUp } from "react-icons/fa";

const ScrollUpButton = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setVisible(window.scrollY > 300);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <button
      onClick={scrollToTop}
      className={`fixed bottom-8 right-8 z-50 p-3 rounded-full bg-blue-600 text-white shadow-lg transition-opacity duration-300 hover:bg-blue-700 focus:outline-none ${visible ? "opacity-100" : "opacity-0 pointer-events-none"}`}
      aria-label="Volver arriba"
    >
      <FaArrowUp size={22} />
    </button>
  );
};

export default ScrollUpButton;
