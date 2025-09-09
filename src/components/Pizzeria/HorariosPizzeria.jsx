import React from "react";

const HorariosPizzeria = () => (
  <section className="bg-white py-8 px-4 flex flex-col items-center">
    <h2 className="text-2xl font-bold text-orange-600 mb-4 font-sans">Horarios de atención</h2>
    <ul className="text-black text-lg">
      <li>Lunes a Viernes: 11:00 a 23:00</li>
      <li>Sábados: 18:00 a 00:00</li>
      <li>Domingos: Cerrado</li>
    </ul>
  </section>
);

export default HorariosPizzeria;
