
import React, { useState } from "react";
// import { motion } from "framer-motion";
import { FaShoppingCart, FaPizzaSlice } from "react-icons/fa";
// Color institucional para h2
const COLOR_H2 = "#A25305";

const productos = [
  // Pizzas
  { nombre: "Muzzarella", descripcion: "Clásica con abundante queso y salsa de tomate.", precio: 3500, img: "/img/productos/pizza1.webp", categoria: "Pizzas" },
  { nombre: "Napolitana", descripcion: "Con tomate en rodajas, ajo y orégano.", precio: 4000, img: "/img/productos/pizza1.webp", categoria: "Pizzas" },
  { nombre: "Fugazzeta", descripcion: "Cebolla, queso y un toque de orégano.", precio: 4000, img: "/img/productos/pizza1.webp", categoria: "Pizzas" },
  { nombre: "Especial", descripcion: "Jamón, morrón, huevo y aceitunas.", precio: 4500, img: "/img/productos/pizza1.webp", categoria: "Pizzas" },
  { nombre: "Calabresa", descripcion: "Longaniza, morrón y queso.", precio: 4500, img: "/img/productos/pizza1.webp", categoria: "Pizzas" },
  { nombre: "Cuatro Quesos", descripcion: "Muzzarella, roquefort, parmesano y reggianito.", precio: 4800, img: "/img/productos/pizza1.webp", categoria: "Pizzas" },
  // Empanadas
  { nombre: "Empanada de Carne", descripcion: "Carne cortada a cuchillo, huevo y aceitunas.", precio: 900, img: "/img/productos/empanadas1.webp", categoria: "Empanadas" },
  { nombre: "Empanada de Pollo", descripcion: "Pollo, cebolla y morrón.", precio: 900, img: "/img/productos/empanadas1.webp", categoria: "Empanadas" },
  { nombre: "Empanada de Jamón y Queso", descripcion: "Jamón cocido y muzzarella.", precio: 900, img: "/img/productos/empanadas1.webp", categoria: "Empanadas" },
  { nombre: "Empanada Capresse", descripcion: "Queso, tomate y albahaca.", precio: 900, img: "/img/productos/empanadas1.webp", categoria: "Empanadas" },
  { nombre: "Empanada de Verdura", descripcion: "Acelga, ricota y parmesano.", precio: 900, img: "/img/productos/empanadas1.webp", categoria: "Empanadas" },
  { nombre: "Empanada de Humita", descripcion: "Choclo, salsa blanca y queso.", precio: 900, img: "/img/productos/empanadas1.webp", categoria: "Empanadas" },
  // Otros menú
  { nombre: "Porción de fainá", descripcion: "Ideal para acompañar tu pizza.", precio: 800, img: "/img/productos/otros-cocacola.webp", categoria: "Otros" },
  { nombre: "Coca-Cola 1.5L", descripcion: "Bebida fría para compartir.", precio: 1800, img: "/img/productos/otros-cocacola.webp", categoria: "Otros" },
  { nombre: "Sprite 1.5L", descripcion: "Refrescante y burbujeante.", precio: 1800, img: "/img/productos/otros-cocacola.webp", categoria: "Otros" },
  { nombre: "Agua 1.5L", descripcion: "Agua mineral sin gas.", precio: 1200, img: "/img/productos/otros-cocacola.webp", categoria: "Otros" },
  { nombre: "Cerveza Quilmes 1L", descripcion: "Bien fría, ideal para compartir.", precio: 2200, img: "/img/productos/otros-cocacola.webp", categoria: "Otros" },
  { nombre: "Postre Helado", descripcion: "Vainilla y chocolate.", precio: 1500, img: "/img/productos/otros-cocacola.webp", categoria: "Otros" },
];

const categorias = ["Pizzas", "Empanadas", "Otros"];

const TodosProductosPizzeria = ({ onAddToCart }) => {

  const [categoria, setCategoria] = useState("Pizzas");
  const [verMas, setVerMas] = useState(6);
  // Estado para cantidades por producto (por índice en productosFiltrados)
  const [cantidades, setCantidades] = useState({});

  const productosFiltrados = productos.filter(p => p.categoria === categoria);
  const mostrarVerMas = productosFiltrados.length > verMas;

  // Resetear cantidades al cambiar de categoría
  React.useEffect(() => {
    setCantidades({});
  }, [categoria]);

  return (
    <section
      className="flex flex-col items-center px-1 sm:px-4 mt-6 sm:mt-12"
    >
      <div className="w-full max-w-6xl py-4 sm:py-12 px-0 sm:px-4 flex flex-col items-center bg-transparent sm:bg-white rounded-none sm:rounded-3xl shadow-none sm:shadow-2xl">
        <h2
          className="text-5xl sm:text-6xl font-chewy mb-10 drop-shadow font-extrabold text-center leading-tight"
          style={{ color: COLOR_H2 }}
        >
          Todos los productos
        </h2>
        <div className="w-full flex flex-col sm:flex-row gap-3 mb-8 justify-center py-1 px-1 relative items-center">
          {categorias.map(cat => (
            <button
              key={cat}
              onClick={() => { setCategoria(cat); setVerMas(6); }}
              className={`px-6 py-2 rounded-full font-extrabold text-base sm:text-lg font-montserrat border-2 transition-all duration-200 whitespace-nowrap shadow ${
                categoria === cat
                  ? 'bg-[#366D58] text-white border-[#366D58] shadow-lg'
                  : 'bg-white text-black border-[#366D58] hover:bg-[#eaf4f1]'
              }`}
              style={{ minWidth: 110 }}
            >
              {cat}
            </button>
          ))}
          <div className="absolute left-0 right-0 -bottom-2 h-2 flex items-end pointer-events-none">
            <div className="w-full h-1 bg-gray-300 rounded-full mx-2" />
          </div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 w-full">
          {productosFiltrados.slice(0, verMas).map((prod, idx) => {
            const cantidad = cantidades[idx] || 1;
            return (
              <div
                key={idx}
                className="relative bg-white rounded-3xl shadow-xl border-2 border-[#d2e6df] flex flex-col items-center p-8 transition-transform duration-200 hover:-translate-y-2 hover:shadow-green-300 group overflow-hidden"
              >
                {/* Número de producto */}
                <span className="absolute top-4 right-4 bg-green-100 text-[#366D58] text-base font-extrabold px-3 py-1 rounded-full shadow z-10 select-none">
                  #{idx + 1}
                </span>
                {/* Badge de categoría */}
                <span className="absolute top-4 left-4 bg-[#366D58] text-white text-xs font-extrabold px-4 py-1 rounded-full shadow-md z-10 uppercase tracking-wide opacity-90">
                  {prod.categoria}
                </span>
                {/* Imagen destacada */}
                <div className="w-full h-44 sm:h-56 flex items-center justify-center mb-4 overflow-hidden rounded-2xl border-2 border-[#366D58] bg-gradient-to-br from-green-50 to-green-100 relative">
                  <img
                    src={prod.img}
                    alt={prod.nombre}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110 group-hover:rotate-1 drop-shadow-xl"
                    onError={e => e.target.style.display='none'}
                  />
                </div>
                <h3 className="text-2xl font-bold text-[#222] mb-1 text-center font-chewy drop-shadow-sm group-hover:text-green-700 transition-colors">{prod.nombre}</h3>
                <p className="text-gray-600 mb-3 text-center min-h-[48px] font-montserrat text-base group-hover:text-black transition-colors">{prod.descripcion}</p>
                {/* Precio grande */}
                <div className="flex items-center justify-center mb-4">
                  <span className="text-3xl font-extrabold text-[#366D58] bg-white border-2 border-[#366D58] px-6 py-2 rounded-full shadow">${prod.precio}</span>
                </div>
                {/* Controles de cantidad */}
                <div className="flex items-center gap-2 mb-2">
                  <button
                    className="w-8 h-8 rounded-full bg-[#eaf4f1] text-[#366D58] text-2xl font-extrabold flex items-center justify-center border border-[#366D58] hover:bg-[#366D58] hover:text-white transition-colors leading-none p-0"
                    style={{lineHeight: '1', fontSize: '1.5rem'}}
                    onClick={() => setCantidades(q => ({ ...q, [idx]: Math.max(1, (q[idx] || 1) - 1) }))}
                    aria-label="Restar"
                    type="button"
                  >
                    <span className="flex items-center justify-center w-full h-full">–</span>
                  </button>
                  <span className="text-xl font-bold w-8 text-center select-none">{cantidad}</span>
                  <button
                    className="w-8 h-8 rounded-full bg-[#eaf4f1] text-[#366D58] text-2xl font-extrabold flex items-center justify-center border border-[#366D58] hover:bg-[#366D58] hover:text-white transition-colors leading-none p-0"
                    style={{lineHeight: '1', fontSize: '1.5rem'}}
                    onClick={() => setCantidades(q => ({ ...q, [idx]: (q[idx] || 1) + 1 }))}
                    aria-label="Sumar"
                    type="button"
                  >
                    <span className="flex items-center justify-center w-full h-full">+</span>
                  </button>
                </div>
                {/* Botón agregar al carrito */}
                {onAddToCart && (
                  <button
                    onClick={() => onAddToCart({ ...prod, cantidad })}
                    className="bg-[#366D58] hover:bg-green-700 text-white font-bold py-2 px-8 rounded-full text-lg shadow-md transition-colors duration-200 tracking-wide mt-2 flex items-center gap-2 focus:outline-none focus:ring-2 focus:ring-green-400"
                  >
                    <FaShoppingCart className="w-5 h-5" />
                    Agregar al carrito
                  </button>
                )}
              </div>
            );
          })}
        </div>
        {mostrarVerMas && (
          <button
            onClick={() => setVerMas(v => v + 6)}
            className="mt-8 px-8 py-2 rounded-full bg-orange-500 text-white font-bold text-lg shadow-lg hover:bg-orange-600 transition-all"
          >
            Ver más
          </button>
        )}
      </div>
  </section>
  );
};

export default TodosProductosPizzeria;
