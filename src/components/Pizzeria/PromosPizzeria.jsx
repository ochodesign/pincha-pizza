import React, { useState } from "react";

// Color institucional para h2
const COLOR_H2 = "#A25305";

const promos = [
  {
    nombre: "Promo Estudiante",
    descripcion: "2 porciones de muzza + gaseosa 500ml",
    precio: 2200,
    img: "/img/promos/estudiante.jpg"
  },
  {
    nombre: "Combo Familiar",
    descripcion: "2 pizzas grandes + 1 fainá + 2 gaseosas 1.5L",
    precio: 12000,
    img: "/img/promos/familiar.jpg"
  },
  {
    nombre: "Promo Mediodía",
    descripcion: "Porción de pizza + fainá + bebida",
    precio: 1500,
    img: "/img/promos/mediodia.jpg"
  },
  {
    nombre: "Combo Amigos",
    descripcion: "3 pizzas a elección + 3 gaseosas 1.5L",
    precio: 18000,
    img: "/img/promos/amigos.jpg"
  },
  {
    nombre: "Promo Noche",
    descripcion: "Pizza grande + 2 porciones de fainá + bebida",
    precio: 7000,
    img: "/img/promos/noche.jpg"
  },
  {
    nombre: "Combo Individual",
    descripcion: "Pizza chica + bebida 500ml",
    precio: 3500,
    img: "/img/promos/individual.jpg"
  }
];

const PromosPizzeria = ({ onAddToCart }) => {
  // Estado para cantidades por promo
  const [cantidades, setCantidades] = useState(Array(promos.length).fill(1));

  const handleChangeCantidad = (idx, delta) => {
    setCantidades((prev) => {
      const nuevo = [...prev];
      nuevo[idx] = Math.max(1, nuevo[idx] + delta);
      return nuevo;
    });
  };

  return (
    <section
      className="py-12 px-4 flex flex-col items-center"
      style={{
        backgroundImage: 'url(/img/promociones/bg-promo.webp)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed',
      }}
    >
      <h2
        className="text-5xl sm:text-6xl font-chewy mb-10 drop-shadow font-extrabold text-center leading-tight sticky top-24 z-30 bg-opacity-80 bg-white rounded-xl px-6 py-2 shadow-lg"
        style={{ color: COLOR_H2 }}
      >
        Promociones
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl w-full">
        {promos.map((promo, idx) => (
          <div
            key={idx}
            className="relative bg-white rounded-3xl border-2 border-[#366D58] shadow-xl p-8 flex flex-col items-center transition-transform duration-300 hover:scale-105 group overflow-hidden"
          >
            <span className="absolute top-0 left-0 bg-[#366D58] text-white text-xs font-extrabold px-5 py-1.5 rounded-br-2xl z-20 shadow animate-bounce">¡Oferta!</span>
            <h3 className="text-3xl font-chewy text-green-700 mb-3 text-center drop-shadow-2xl font-extrabold bg-white/80 px-4 py-2 rounded-xl border-b-4 border-green-400 shadow-lg">
              {promo.nombre}
            </h3>
            <p className="text-lg text-[#222] font-montserrat mb-4 text-center">{promo.descripcion}</p>
            <div className="flex items-center justify-center mb-4">
              <span className="text-3xl font-extrabold text-[#366D58] bg-white border-2 border-[#366D58] px-6 py-2 rounded-full shadow">${promo.precio}</span>
            </div>
            <div className="flex items-center gap-2 mb-2">
              <button
                className="w-8 h-8 rounded-full bg-[#eaf4f1] text-[#366D58] text-2xl font-bold flex items-center justify-center border border-[#366D58] hover:bg-[#366D58] hover:text-white transition-colors"
                onClick={() => handleChangeCantidad(idx, -1)}
                aria-label="Restar"
                type="button"
              >
                –
              </button>
              <span className="text-xl font-bold w-8 text-center select-none">{cantidades[idx]}</span>
              <button
                className="w-8 h-8 rounded-full bg-[#eaf4f1] text-[#366D58] text-2xl font-bold flex items-center justify-center border border-[#366D58] hover:bg-[#366D58] hover:text-white transition-colors"
                onClick={() => handleChangeCantidad(idx, 1)}
                aria-label="Sumar"
                type="button"
              >
                +
              </button>
            </div>
            {onAddToCart && (
              <button
                onClick={() => onAddToCart({ ...promo, nombre: promo.nombre, precio: promo.precio, cantidad: cantidades[idx] })}
                className="bg-[#366D58] hover:bg-green-700 text-white font-bold py-2 px-8 rounded-full text-lg shadow-md transition-colors duration-200 tracking-wide mt-2"
              >
                Agregar al carrito
              </button>
            )}
          </div>
        ))}
      </div>
  </section>
  );
};

export default PromosPizzeria;
