import React from "react";
import { motion } from "framer-motion";
// Color institucional para h2
const COLOR_H2 = "#A25305";
import { FaPizzaSlice, FaClock, FaBoxOpen, FaMoneyBillWave, FaCreditCard } from "react-icons/fa";
import { MdDeliveryDining } from "react-icons/md";

const servicios = [
  {
    icon: <FaPizzaSlice className="text-[#366D58] w-10 h-10" />,
    titulo: "Pizzas artesanales",
    descripcion: "Masa casera, ingredientes frescos y recetas tradicionales."
  },
  {
    icon: <FaClock className="text-[#366D58] w-10 h-10" />,
    titulo: "Atención rápida",
  descripcion: "¡Pedí y en minutos estás disfrutando tu pizza!"
  },
  {
  icon: <MdDeliveryDining className="text-[#366D58] w-12 h-12" />,
    titulo: "Delivery sin cargo",
  descripcion: "Delivery rápido y sin cargo en Caseros y alrededores."
  },
  {
    icon: <FaCreditCard className="text-[#366D58] w-10 h-10" />,
    titulo: "Todos los medios de pago",
    descripcion: "Aceptamos tarjetas, billeteras virtuales y efectivo."
  }
];

const ServiciosPizzeria = () => (
  <section
    className="py-12 px-4 flex flex-col items-center"
  >
  {/* Fondo removido por pedido */}
    <header className="w-full max-w-3xl">
      <motion.h2
        className="text-5xl sm:text-6xl font-chewy mb-10 drop-shadow font-extrabold text-center leading-tight"
        style={{ color: COLOR_H2 }}
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.7 }}
        transition={{ duration: 0.7, ease: 'easeOut' }}
      >
        Nuestros servicios
      </motion.h2>
    </header>
  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl w-full">
    {servicios.map((serv, idx) => (
      <motion.article
        key={idx}
        className="flex flex-col items-center bg-white rounded-3xl shadow-2xl p-8 border border-[#d2e6df] hover:shadow-green-200 hover:scale-[1.04] transition-all duration-300 group relative overflow-hidden"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.4 }}
        transition={{ duration: 0.7, ease: 'easeOut', delay: idx * 0.13 }}
      >
        <div className="flex items-center justify-center w-20 h-20 rounded-full bg-[#eaf4f1] mb-5 shadow-md group-hover:bg-[#366D58] transition-colors">
          {React.cloneElement(serv.icon, { className: 'w-10 h-10 text-[#366D58] group-hover:text-white transition-colors' })}
        </div>
        <h3 className="text-2xl sm:text-3xl font-extrabold text-[#366D58] mb-2 font-chewy leading-snug text-center drop-shadow-lg">{serv.titulo}</h3>
        <p className="text-gray-700 font-montserrat text-base sm:text-lg text-center mb-2">{serv.descripcion}</p>
      </motion.article>
    ))}
  </div>
  </section>
);

export default ServiciosPizzeria;
