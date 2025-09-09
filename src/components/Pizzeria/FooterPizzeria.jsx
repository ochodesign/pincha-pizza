import React from "react";

const FooterPizzeria = () => (
  <footer className="w-full bg-black text-white py-6 px-4 flex flex-col items-center border-t-4 border-orange-500" style={{minHeight:'90px'}}>
  <div className="max-w-5xl w-full flex flex-col md:flex-row justify-between items-center gap-2">
      <div className="text-center md:text-left">
        <h3 className="font-chewy text-2xl text-orange-400 mb-1">PIZZERIA DEL PINCHA</h3>
        <p className="text-sm text-gray-300 font-montserrat">Av. Justo José de Urquiza 3400, Caseros, Buenos Aires</p>
        <p className="text-sm text-gray-300 font-montserrat">WhatsApp: <a href="https://wa.me/5491164623427" className="text-orange-400 underline font-bold">+54 9 11 6462-3427</a></p>
      </div>
      <div className="flex flex-col items-center gap-1">
        <span className="text-xs text-gray-400">&copy; {new Date().getFullYear()} Pizzeria del Pincha. Todos los derechos reservados.</span>
        <span className="text-xs text-gray-600">Sitio realizado por ochodesign</span>
      </div>
    </div>
  </footer>
);

export default FooterPizzeria;
