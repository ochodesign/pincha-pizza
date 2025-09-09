import React from "react";
import { motion } from "framer-motion";

const serviciosFoto = [
  {
    titulo: "Bautismos",
    descripcion: "Fotografía profesional para bautismos, recuerdos únicos y emotivos.",
  img: "/img/cards-fotografia/bautismocard.webp"
  },
  {
    titulo: "Escuelas",
    descripcion: "Cobertura fotográfica para actos, eventos y retratos escolares.",
  img: "/img/cards-fotografia/escuelascard.webp"
  },
  {
    titulo: "Fiesta infantil",
    descripcion: "Fotos divertidas y coloridas para fiestas infantiles y temáticas.",
  img: "/img/cards-fotografia/infantilescard.webp"
  }
];

export default function FotografiaEventos() {
  return (
    <section
      className="py-20 relative"
      style={{
        backgroundImage: "url('/img/fotografia-profesional/bg-fotografia-profesional.webp')",
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed',
      }}
    >
  <div className="absolute inset-0 bg-black/60" style={{zIndex:1, pointerEvents:'none'}} />
  <div className="relative z-10 mx-auto px-4 max-w-4xl">
        <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-10 text-center drop-shadow-lg tracking-tight animate-fadein">
          Fotografía profesional
        </h2>
  <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {serviciosFoto.map((serv, i) => (
            <motion.div
              key={i}
              className="w-full rounded-3xl shadow-2xl bg-white p-0 flex flex-col gap-4 border-2 border-[#7a1f2a]/20 transition-all duration-300 hover:scale-105 hover:shadow-4xl hover:border-[#7a1f2a] group"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.7, delay: i * 0.15 }}
              style={{overflow:'hidden', position:'relative'}}
            >
              <div className="relative w-full h-56 mb-4 overflow-hidden">
                <img src={serv.img} alt={serv.titulo} className="w-full h-full object-cover rounded-t-3xl scale-100 group-hover:scale-105 transition-transform duration-500" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-black/10 to-transparent rounded-t-3xl opacity-80 group-hover:opacity-60 transition-all duration-300" />
                <span className="absolute bottom-2 left-2 bg-[#7a1f2a]/80 text-white text-xs px-3 py-1 rounded-full shadow-lg font-semibold tracking-wide">{serv.titulo}</span>
              </div>
              <p className="text-gray-700 text-center px-4 pb-4 font-medium">{serv.descripcion}</p>
            </motion.div>
          ))}
        </div>
      </div>
      <style>{`
  /* Animación ahora con framer-motion */
      `}</style>
    </section>
  );
}
