import React from "react";
import { motion } from "framer-motion";

const fondoImg = [
  "img/galeria/galeria1.webp",
  "img/galeria/galeria2.webp",
  "img/galeria/galeria3.webp",
  "img/galeria/galeria4.webp"
];

export default function HeroExtraordinario() {
  return (
  <section id="hero" className="relative w-full h-screen flex items-center justify-center overflow-hidden bg-black">
      {/* Fondo responsive: desktop y mobile */}
      <div className="absolute inset-0 w-full h-full z-0">
        <picture>
          <source media="(max-width: 768px)" srcSet="img/bg-hero/herobgmb.webp" />
          <img
            src="img/bg-hero/herobgdk.webp"
            alt="Servicios gráficos fondo"
            className="object-cover w-full h-full opacity-70 mix-blend-normal animate-hero-bg"
          />
        </picture>
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/80" />
      </div>
      <style>{`
        @keyframes hero-bg {
          0% { transform: scale(1) translateY(0); opacity: 0.7; }
          50% { transform: scale(1.05) translateY(-10px); opacity: 0.85; }
          100% { transform: scale(1) translateY(0); opacity: 0.7; }
        }
        .animate-hero-bg {
          animation: hero-bg 8s ease-in-out infinite;
        }
      `}</style>
      {/* Contenido principal animado */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="relative z-10 text-center px-6 max-w-2xl mx-auto"
      >
        <h1 className="text-white text-4xl md:text-6xl font-extrabold mb-4 drop-shadow-lg">
          Soluciones gráficas integrales para colegios, marcas y eventos
        </h1>
        <p className="text-white text-lg md:text-2xl font-medium mb-8 drop-shadow-md">
          Tarjetería, cuadros, folletería, video y más. Todo lo que tu marca necesita para destacar en el mundo digital e impreso.
        </p>
        <a
          href="#contacto"
          className="inline-block bg-red-600 hover:bg-red-700 text-white font-bold py-3 px-8 rounded-full shadow-lg text-lg transition-all duration-300"
        >
          Solicitá tu presupuesto
        </a>
      </motion.div>
      {/* Animación slider fondo */}
      <style>{`
        @keyframes slider {
          0% { transform: translateX(0); }
          100% { transform: translateX(-25%); }
        }
        .animate-slider {
          animation: slider 16s linear infinite alternate;
        }
      `}</style>
    </section>
  );
}
