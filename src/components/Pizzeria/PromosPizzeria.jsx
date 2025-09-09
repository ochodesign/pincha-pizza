import React from "react";

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
      <h2 className="text-4xl font-chewy text-orange-600 mb-8 drop-shadow sticky top-24 z-30 bg-opacity-80 bg-white rounded-xl px-6 py-2 shadow-lg">Promociones</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl w-full">
        {promos.map((promo, idx) => (
          <div
            key={idx}
            className="relative bg-black rounded-3xl border-4 border-orange-500 shadow-[0_8px_32px_0_rgba(0,0,0,0.65)] p-6 flex flex-col items-center transition-transform duration-500 hover:scale-110 hover:rotate-[-2deg] hover:shadow-orange-400/80 group animate-fadeIn overflow-hidden"
          >
            <span className="absolute top-0 left-0 bg-gradient-to-r from-orange-500 via-orange-400 to-yellow-400 text-black text-xs font-extrabold px-5 py-1.5 rounded-br-2xl z-20 shadow-xl animate-bounce">¡Oferta!</span>
            <img
              src={promo.img}
              alt={promo.nombre}
              className="w-full h-40 object-cover rounded-xl mb-3 border-4 border-orange-400 shadow-xl group-hover:scale-125 group-hover:rotate-3 transition-transform duration-500"
              style={{filter: 'drop-shadow(0 0 16px #ff9800cc)'}}
              onError={e => e.target.style.display='none'}
            />
            <h3
              className="text-4xl font-extrabold text-orange-400 mb-3 drop-shadow-2xl text-center group-hover:text-orange-200 transition-colors duration-300 font-chewy border-b-4 border-orange-500 px-3 py-1 bg-black/70 rounded-xl shadow-orange-900/80"
              style={{
                textShadow: '0 4px 18px #ff9800, 0 2px 0 #000',
                letterSpacing: '1.5px',
              }}
            >
              {promo.nombre}
            </h3>
            <p className="text-orange-300 mb-2 font-montserrat text-center text-base group-hover:text-orange-400 transition-colors duration-300">{promo.descripcion}</p>
            <span className="text-2xl font-extrabold text-orange-400 mb-2 font-montserrat drop-shadow group-hover:text-orange-200 transition-colors duration-300">${promo.precio}</span>
            {onAddToCart && (
              <button
                onClick={() => onAddToCart({...promo, nombre: promo.nombre, precio: promo.precio})}
                className="bg-gradient-to-r from-orange-500 via-orange-400 to-yellow-400 hover:from-orange-400 hover:to-orange-500 text-black px-7 py-2.5 rounded-full font-bold transition font-montserrat flex items-center gap-2 mt-3 shadow-2xl text-lg group-hover:scale-110 group-hover:-rotate-1 animate-pulse focus:outline-none focus:ring-4 focus:ring-orange-400/60"
                style={{
                  textShadow: '0 2px 8px rgba(255,255,255,0.7), 0 1px 0 #fff',
                  letterSpacing: '1px',
                }}
              >
                ¡Quiero esta promo!
              </button>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default PromosPizzeria;
