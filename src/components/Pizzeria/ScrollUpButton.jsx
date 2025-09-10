import React, { useEffect, useState } from "react";
import { FaArrowUp } from "react-icons/fa";

const ScrollUpButton = ({ hidden = false }) => {

  const [visible, setVisible] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    let ticking = false;
    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          const currentScrollY = window.scrollY;
          // Solo mostrar si scroll > 300 y el usuario scrollea hacia arriba
          if (currentScrollY > 300 && currentScrollY < lastScrollY) {
            setVisible(true);
          } else {
            setVisible(false);
          }
          setLastScrollY(currentScrollY);
          ticking = false;
        });
        ticking = true;
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
    // eslint-disable-next-line
  }, [lastScrollY]);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const shouldShow = visible && !hidden;

  return (
    <button
      onClick={scrollToTop}
      className={`fixed bottom-20 right-8 z-[9999] bg-[#A25305] hover:bg-green-700 text-white p-2.5 rounded-full shadow-2xl transition-all duration-300 border-4 border-white focus:outline-none ${shouldShow ? 'opacity-100' : 'opacity-0 pointer-events-none'} md:bottom-3 md:right-8`}
      aria-label="Volver arriba"
      style={{ boxShadow: '0 4px 24px 0 #0004', right: '1.2rem', bottom: '4.6rem' }}
    >
      <FaArrowUp className="w-4 h-4" />
      <style>{`
        @media (max-width: 768px) {
          .fixed.bottom-3.right-8 {
            right: 1.2rem !important;
            bottom: 1.2rem !important;
          }
        }
      `}</style>
    </button>
  );
};

export default ScrollUpButton;
