import React, { useState } from "react";
import { motion } from "framer-motion";

const HomePizzeria = () => {
  const [pulsePromo, setPulsePromo] = useState(false);
  const [pulseProd, setPulseProd] = useState(false);

  const handlePulse = (setter) => {
    setter(true);
    setTimeout(() => setter(false), 350);
  };

  return (
    <section
      className="relative flex flex-col items-center justify-center text-center p-6 bg-black"
      style={{
        minHeight: '100vh',
        height: '100dvh',
        backgroundImage: 'url(/img/bg-hero/bg-hero-pizza.webp)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed',
        paddingTop: typeof window !== 'undefined' && window.innerWidth < 640 ? '140px' : '160px',
  paddingBottom: 0,
      }}
    >
      <div className="absolute inset-0 bg-black bg-opacity-50"></div>
      <motion.div
        className="relative z-10 flex flex-col items-center"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
  <h1
  className="relative text-5xl sm:text-6xl md:text-8xl lg:text-[6.5rem] font-extrabold mb-6 font-chewy tracking-wide uppercase shadow-2xl drop-shadow-2xl animate-hero-pop"
    style={{
      background: 'linear-gradient(90deg, #fff 0%, #222 100%)',
      WebkitBackgroundClip: 'text',
      WebkitTextFillColor: 'transparent',
      WebkitTextStroke: '2.5px #000',
      textShadow: '0 4px 32px #000a, 0 2px 0 #fff',
      fontWeight: 900,
      zIndex: 2,
      padding: '0.25em 0.5em',
      borderRadius: '1.5rem',
      boxShadow: '0 8px 32px #0004',
      backdropFilter: 'blur(2px)',
      backgroundColor: 'rgba(0,0,0,0.05)'
    }}
  >
  <span className="px-4 py-2 bg-black bg-opacity-30 rounded-2xl shadow-lg inline-block">
      PIZZERIA DEL PINCHA
    </span>
  </h1>
      <p
  className="text-base sm:text-xl text-white max-w-xl mb-6 drop-shadow font-montserrat px-2 sm:px-0"
        style={{
          background: 'rgba(0,0,0,0.7)',
          borderRadius: '1.25rem',
          border: '2px solid rgba(255,255,255,0.12)',
          boxShadow: '0 2px 16px #0008',
          padding: '1rem',
          marginLeft: 'auto',
          marginRight: 'auto',
          maxWidth: '100%',
        }}
      >
        ¡Bienvenido a la mejor pizza de Caseros!<br />
        Disfrutá nuestras pizzas recién horneadas, ambiente estudiantil y atención rápida. ¡Vení a probarlas!
      </p>
      {/*
      <div className="flex gap-4 mt-2">
        <span className="inline-flex items-center gap-1 text-orange-300 text-2xl">...</span>
        <span className="inline-flex items-center gap-1 text-orange-300 text-2xl">...</span>
      </div>
      */}
      <div className="mt-8 mb-2">
        <span className="inline-flex items-center gap-1 text-white text-base sm:text-xl font-bold bg-black bg-opacity-90 px-2 sm:px-4 py-1 sm:py-2 rounded-full shadow-lg border-2 border-white whitespace-nowrap">
          <svg xmlns='http://www.w3.org/2000/svg' className='w-5 h-5 sm:w-6 sm:h-6 text-white' fill='none' viewBox='0 0 24 24' stroke='currentColor' strokeWidth={2}><path strokeLinecap='round' strokeLinejoin='round' d='M17.657 16.657L13.414 20.9a2 2 0 01-2.828 0l-4.243-4.243a8 8 0 1111.314 0z' /><circle cx='12' cy='12' r='3' /></svg>
          Estadio Ciudad de Caseros
        </span>
      </div>
  <div className="flex flex-col sm:flex-row gap-4 mt-8 mb-8 sm:mb-0">
        <button
          type="button"
          className={`bg-green-600 hover:bg-green-700 text-white font-bold py-3 px-8 rounded-full text-xl shadow-lg transition-colors duration-200 ${pulsePromo ? 'animate-ping-short' : ''}`}
          onClick={() => {
            handlePulse(setPulsePromo);
            const promos = document.getElementById('promos-pizzeria');
            if (promos) {
              promos.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }
          }}
          style={{ position: 'relative', zIndex: 1 }}
        >
          Ver Promociones
        </button>
        <a
          href="/productos"
          className={`bg-white hover:bg-gray-100 text-green-700 font-bold py-3 px-8 rounded-full text-xl shadow-lg border-2 border-green-600 transition-colors duration-200 ${pulseProd ? 'animate-ping-short' : ''}`}
          onClick={() => handlePulse(setPulseProd)}
          style={{ position: 'relative', zIndex: 1 }}
        >
          Ver Productos
        </a>
      </div>
      <style>{`
        @keyframes ping-short {
          0% { transform: scale(1); box-shadow: 0 0 0 0 #A2530555; }
          50% { transform: scale(1.08); box-shadow: 0 0 0 8px #A2530522; }
          100% { transform: scale(1); box-shadow: 0 0 0 0 #A2530500; }
        }
        .animate-ping-short {
          animation: ping-short 0.35s cubic-bezier(0.4,0,0.2,1);
        }
        @keyframes hero-pop {
          0% { transform: scale(0.98) rotate(-1deg); opacity: 0.7; }
          60% { transform: scale(1.04) rotate(1deg); opacity: 1; }
          100% { transform: scale(1) rotate(0deg); opacity: 1; }
        }
        .animate-hero-pop {
          animation: hero-pop 1.1s cubic-bezier(0.4,0,0.2,1);
        }
      `}</style>
      </motion.div>
    </section>
  );
};

export default HomePizzeria;
