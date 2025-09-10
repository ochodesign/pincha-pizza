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
        paddingTop: typeof window !== 'undefined' && window.innerWidth < 640 ? '56px' : '96px',
      }}
    >
      <div className="absolute inset-0 bg-black bg-opacity-50"></div>
      <motion.div
        className="relative z-10 flex flex-col items-center"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
  <h1 className="text-5xl sm:text-7xl md:text-8xl lg:text-9xl font-extrabold text-white mb-6 font-chewy drop-shadow-lg tracking-wide uppercase shadow-xl" style={{ WebkitTextStroke: '2px black', fontWeight: 900 }}>
        PIZZERIA DEL PINCHA
      </h1>
      <p className="text-xl text-white max-w-xl mb-6 drop-shadow font-montserrat">
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
      <div className="flex flex-col sm:flex-row gap-4 mt-8">
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
      `}</style>
      </motion.div>
    </section>
  );
};

export default HomePizzeria;
