import React from "react";

const HeroGrafico = () => (
  <section className="bg-gradient-to-br from-[#7a1f2a] to-[#5a1620] py-20 text-center text-white">
    <div className="max-w-3xl mx-auto px-4 flex flex-col items-center">
  <img src="/img/galeria/galeria1.webp" alt="Ejemplo de productos gráficos institucionales" className="w-full max-w-md rounded-xl shadow-lg mb-8 object-cover" />
      <h1 className="text-4xl md:text-5xl font-bold mb-6 drop-shadow-lg">Soluciones gráficas para colegios y empresas</h1>
      <p className="text-lg md:text-xl mb-8 text-white/80">Diseño, impresión y creatividad en productos visuales: almanaques, tarjetas, cuadros, banners, papelería y más.</p>
      <a href="#contacto" className="inline-block bg-white text-[#7a1f2a] font-bold px-8 py-3 rounded-lg shadow hover:bg-[#7a1f2a] hover:text-white transition-colors border-2 border-white">Solicitar presupuesto</a>
    </div>
  </section>
);

export default HeroGrafico;
