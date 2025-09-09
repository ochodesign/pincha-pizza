import React, { useState, useEffect, useRef } from "react";
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { motion } from "framer-motion";

const testimonios = [
  {
    nombre: "Colegio San Martín",
    texto: "Excelente calidad en los almanaques y papelería institucional. ¡Super recomendados!"
  },
  {
    nombre: "Empresa VisualPro",
    texto: "Los banners y tarjetas empresariales nos ayudaron a mejorar la imagen de la empresa."
  },
  {
    nombre: "Escuela Creativa",
    texto: "Muy buena atención y asesoramiento en todo el proceso de diseño e impresión."
  }
];

const TestimoniosGrafico = () => {
  const [idx, setIdx] = useState(0);
  const [anim, setAnim] = useState('');
  const total = testimonios.length;
  const prev = () => {
    setAnim('slide-left');
    setTimeout(() => setIdx(idx === 0 ? total - 1 : idx - 1), 100);
  };
  const next = () => {
    setAnim('slide-right');
    setTimeout(() => setIdx(idx === total - 1 ? 0 : idx + 1), 100);
  };
  const touchStartX = useRef(null);

  useEffect(() => {
    const timer = setTimeout(() => {
      setAnim('slide-right');
      setTimeout(() => setIdx(i => (i === total - 1 ? 0 : i + 1)), 100);
    }, 4000);
    return () => clearTimeout(timer);
  }, [idx, total]);

  // Swipe para mobile
  const handleTouchStart = (e) => {
    touchStartX.current = e.touches[0].clientX;
  };
  const handleTouchEnd = (e) => {
    if (touchStartX.current === null) return;
    const deltaX = e.changedTouches[0].clientX - touchStartX.current;
    if (deltaX > 50) prev();
    if (deltaX < -50) next();
    touchStartX.current = null;
  };
  return (
    <section
      className="py-20 relative overflow-hidden"
      style={{
        background: 'linear-gradient(135deg, #fff 0%, #fee2e2 60%, #fff 100%)',
        backgroundRepeat: 'no-repeat',
        backgroundAttachment: 'fixed',
        backgroundSize: 'cover',
        minHeight: '100vh'
      }}
    >
      <div className="absolute inset-0 bg-black/50 pointer-events-none" />
      <div className="max-w-3xl mx-auto px-4">
  <h2 className="text-4xl font-extrabold text-white mb-12 text-center drop-shadow-lg tracking-tight animate-fadein">Testimonios de clientes institucionales</h2>
        <div className="relative flex items-center justify-center min-h-[320px]">
          {/* Flechas solo en desktop */}
          <button
            onClick={prev}
            className="hidden md:flex items-center justify-center absolute -left-14 top-1/2 -translate-y-1/2 w-14 h-14 bg-white border-2 border-[#7a1f2a] text-[#7a1f2a] rounded-full shadow-xl hover:bg-[#7a1f2a] hover:text-white hover:border-red-700 transition-all duration-300 z-10 focus:outline-none"
            aria-label="Anterior"
          >
            <ChevronLeft size={32} strokeWidth={2.5} />
          </button>
          <div className="w-full"
            onTouchStart={handleTouchStart}
            onTouchEnd={handleTouchEnd}
          >
            <motion.div
              className={`bg-white md:bg-gradient-to-r md:from-[#f8f8fa] md:via-white md:to-[#f8f8fa] rounded-2xl shadow-2xl p-8 md:p-12 border-2 border-[#7a1f2a]/10 flex flex-col md:flex-row items-center gap-6 md:gap-10 min-h-[260px] animate-${anim}`}
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              onAnimationEnd={()=>setAnim('')}
            >
              {/* Avatar/Icono */}
              <div className="hidden md:flex items-center justify-center w-24 h-24 rounded-full bg-[#7a1f2a]/10 border-2 border-[#7a1f2a]/30 shadow-lg">
                <svg width="48" height="48" viewBox="0 0 48 48" fill="none">
                  <circle cx="24" cy="24" r="23" fill="#f5f0f2" stroke="#c9aeb4" strokeWidth="2" />
                  <circle cx="24" cy="20" r="6" stroke="#7a1f2a" strokeWidth="2.5" fill="none" />
                  <path d="M16 34c0-4.5 4-7 8-7s8 2.5 8 7" stroke="#7a1f2a" strokeWidth="2.5" fill="none" />
                </svg>
              </div>
              <div className="flex-1">
                <p className="text-gray-700 italic text-lg md:text-xl mb-4 md:mb-6">“{testimonios[idx].texto}”</p>
                <div className="text-[#7a1f2a] font-bold text-right text-base md:text-lg">{testimonios[idx].nombre}</div>
              </div>
            </motion.div>
          </div>
          <button
            onClick={next}
            className="hidden md:flex items-center justify-center absolute -right-14 top-1/2 -translate-y-1/2 w-14 h-14 bg-white border-2 border-[#7a1f2a] text-[#7a1f2a] rounded-full shadow-xl hover:bg-[#7a1f2a] hover:text-white hover:border-red-700 transition-all duration-300 z-10 focus:outline-none"
            aria-label="Siguiente"
          >
            <ChevronRight size={32} strokeWidth={2.5} />
          </button>
        </div>
        <div className="flex justify-center gap-2 mt-8">
          {testimonios.map((_, i) => (
            <button
              key={i}
              className={`w-4 h-2 rounded-full border-2 ${i === idx ? 'bg-[#7a1f2a] border-[#7a1f2a]' : 'bg-gray-300 border-gray-300'} inline-block focus:outline-none transition-all duration-200`}
              onClick={() => {
                setAnim(i > idx ? 'slide-right' : 'slide-left');
                setTimeout(() => setIdx(i), 100);
              }}
              aria-label={`Ir al testimonio ${i + 1}`}
            />
          ))}
        </div>
      </div>
      <style>{`
        @keyframes fadein {
          0% { opacity: 0; transform: translateY(40px); }
          100% { opacity: 1; transform: translateY(0); }
        }
        .animate-fadein {
          animation: fadein 1s cubic-bezier(.4,0,.2,1) both;
        }
        @keyframes slide-right {
          0% { opacity: 0; transform: translateX(60px) scale(0.98); }
          100% { opacity: 1; transform: translateX(0) scale(1); }
        }
        .animate-slide-right {
          animation: slide-right 0.5s cubic-bezier(.4,0,.2,1) both;
        }
        @keyframes slide-left {
          0% { opacity: 0; transform: translateX(-60px) scale(0.98); }
          100% { opacity: 1; transform: translateX(0) scale(1); }
        }
        .animate-slide-left {
          animation: slide-left 0.5s cubic-bezier(.4,0,.2,1) both;
        }
      `}</style>
    </section>
  );
};

export default TestimoniosGrafico;
