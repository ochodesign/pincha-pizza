import React from "react";

const menu = [
  { nombre: "Muzzarella", descripcion: "Clásica con abundante queso y salsa de tomate.", precio: 3500 },
  { nombre: "Napolitana", descripcion: "Con tomate en rodajas, ajo y orégano.", precio: 4000 },
  { nombre: "Fugazzeta", descripcion: "Cebolla, queso y un toque de orégano.", precio: 4000 },
  { nombre: "Especial", descripcion: "Jamón, morrón, huevo y aceitunas.", precio: 4500 },
  { nombre: "Calabresa", descripcion: "Longaniza, morrón y queso.", precio: 4500 },
  { nombre: "Porción de fainá", descripcion: "Ideal para acompañar tu pizza.", precio: 800 },
  { nombre: "Coca-Cola 1.5L", descripcion: "Bebida fría para compartir.", precio: 1800 },
];

const MenuPizzeria = ({ onAddToCart }) => (
  <section className="bg-white py-8 px-4 max-w-2xl mx-auto">
    <h2 className="text-3xl font-bold text-orange-600 mb-6 font-sans">Menú</h2>
    <ul className="space-y-4">
      {menu.map((item, idx) => (
        <li key={idx} className="flex flex-col md:flex-row md:items-center md:justify-between bg-orange-50 rounded-lg p-4 shadow border border-orange-200">
          <div>
            <span className="block text-xl font-semibold text-black">{item.nombre}</span>
            <span className="block text-gray-700 text-sm">{item.descripcion}</span>
          </div>
          <div className="flex items-center mt-2 md:mt-0">
            <span className="text-lg font-bold text-orange-700 mr-4">${item.precio}</span>
            <button onClick={() => onAddToCart(item)} className="bg-orange-500 hover:bg-orange-600 text-white px-3 py-1 rounded font-bold transition">Agregar</button>
          </div>
        </li>
      ))}
    </ul>
  </section>
);

export default MenuPizzeria;
