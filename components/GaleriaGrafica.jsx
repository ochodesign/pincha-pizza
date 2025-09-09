import React, { useState, useRef } from "react";
import { motion } from "framer-motion";

const galeria = [
  {
    titulo: "Almanaques personalizados",
    imgs: [
      "/img/galeria-grafica/calendario1.webp",
      "/img/galeria-grafica/calendario2.webp",
      "/img/galeria-grafica/calendario3.webp"
    ]
  },
  {
    titulo: "Diseño institucional para colegios",
    imgs: [
      "https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=800&q=80"
    ]
  },
  {
    titulo: "Cuadros personalizados",
    imgs: [
      "https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1526178613658-3f1622045544?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=800&q=80"
    ]
  },
  {
    titulo: "Folletería y flyers",
    imgs: [
      "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=800&q=80"
    ]
  }
];

export default function GaleriaGrafica() {
  const [activeImg, setActiveImg] = useState(Array(galeria.length).fill(0));

  return (
  <section id="galeria-grafica"
      className="py-20 bg-gradient-to-br from-red-50 via-white to-black/5 relative"
      style={{
        backgroundImage: "url('/img/galeria-grafica/bg-section-graficos.webp')",
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed',
      }}
    >
      <div className="mx-auto px-4 max-w-4xl">
        <h2 className="text-4xl md:text-5xl font-extrabold text-red-600 mb-10 text-center drop-shadow-lg tracking-tight animate-fadein">
          Galería de trabajos gráficos
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {galeria.map((card, i) => (
            <motion.div
              key={i}
              className="w-full rounded-xl shadow-xl bg-white p-4 flex flex-col gap-4"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.7, delay: i * 0.15 }}
            >
              <h3 className="text-xl font-bold text-black mb-2 text-center">{card.titulo}</h3>
              <div className="w-full h-64 flex items-center justify-center mb-3">
                <img
                  src={card.imgs[activeImg[i]]}
                  alt={card.titulo}
                  className="w-full h-full object-cover rounded-lg shadow-lg transition-all duration-500"
                  loading="lazy"
                />
              </div>
              <div className="flex gap-2 justify-center items-center">
                {card.imgs.map((img, j) => (
                  <button
                    key={j}
                    className={`w-16 h-16 rounded-lg overflow-hidden border-2 ${activeImg[i] === j ? 'border-[#7a1f2a] shadow-lg' : 'border-gray-200'} focus:outline-none transition-all duration-200`}
                    onClick={() => setActiveImg(arr => arr.map((v, idx) => idx === i ? j : v))}
                  >
                    <img
                      src={img}
                      alt={card.titulo}
                      className="w-full h-full object-cover"
                      loading="lazy"
                    />
                  </button>
                ))}
              </div>
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
