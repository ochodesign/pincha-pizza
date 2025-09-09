import React from "react";
import { FaPizzaSlice, FaClock, FaBoxOpen, FaMoneyBillWave } from "react-icons/fa";

const servicios = [
  {
    icon: <FaPizzaSlice className="text-orange-500 w-10 h-10" />,
    titulo: "Pizzas artesanales",
    descripcion: "Masa casera, ingredientes frescos y recetas tradicionales."
  },
  {
    icon: <FaClock className="text-orange-500 w-10 h-10" />,
    titulo: "Atención rápida",
    descripcion: "Ideal para estudiantes y trabajadores con poco tiempo."
  },
  {
    icon: <FaBoxOpen className="text-orange-500 w-10 h-10" />,
    titulo: "Pedidos para llevar",
    descripcion: "Llevate tu pizza favorita o hacé tu pedido por WhatsApp."
  },
  {
    icon: <FaMoneyBillWave className="text-orange-500 w-10 h-10" />,
    titulo: "Precios accesibles",
    descripcion: "Menú pensado para el bolsillo estudiantil."
  }
];

const ServiciosPizzeria = () => (
  <section className="bg-orange-50 py-12 px-4 flex flex-col items-center">
    <h2 className="text-4xl font-chewy text-orange-600 mb-8 drop-shadow">Nuestros servicios</h2>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-3xl w-full">
      {servicios.map((serv, idx) => (
        <div key={idx} className="flex items-center bg-white rounded-2xl shadow-lg p-6 border-2 border-orange-100 gap-4 hover:scale-105 transition-transform">
          <span>{serv.icon}</span>
          <div>
            <h3 className="text-2xl font-bold text-black mb-1 font-chewy">{serv.titulo}</h3>
            <p className="text-gray-700 font-montserrat">{serv.descripcion}</p>
          </div>
        </div>
      ))}
    </div>
  </section>
);

export default ServiciosPizzeria;
