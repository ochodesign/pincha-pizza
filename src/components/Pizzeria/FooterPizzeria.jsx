import React, { useState } from "react";
import { FaWhatsapp, FaInstagram } from "react-icons/fa";
import PoliticasModal from "./PoliticasModal";

const FooterPizzeria = () => {
  const [showPoliticas, setShowPoliticas] = useState(false);
  return (
    <footer className="w-full bg-black text-white py-8 px-4 flex flex-col items-center border-t-4 border-green-500" style={{minHeight:'110px'}}>
      <div className="max-w-6xl w-full flex flex-col md:flex-row justify-between items-center gap-4">
        {/* Logo y datos */}
        <div className="flex flex-col items-center md:items-start gap-2">
          <img src="/img/logo/logo-pincha-pizza.webp" alt="Logo Pizzeria del Pincha" className="h-28 w-auto mb-3 drop-shadow-2xl mx-auto" />
          <h3 className="font-chewy text-2xl text-green-400 mb-1">PIZZERIA DEL PINCHA</h3>
          <span className="text-xs text-green-300 font-bold tracking-wide mb-1">Estadio Ciudad de Caseros</span>
          <p className="text-sm text-gray-300 font-montserrat">Lisandro de la Torre 2597, Caseros, Buenos Aires</p>
          <div className="flex gap-3 mt-1">
            <a href="https://wa.me/5491164623427" target="_blank" rel="noopener noreferrer" className="bg-green-600 hover:bg-green-700 text-white rounded-full p-2 shadow transition" title="WhatsApp"><FaWhatsapp className="w-5 h-5" /></a>
            <a href="https://instagram.com/pizzeriaestudiantes" target="_blank" rel="noopener noreferrer" className="bg-gradient-to-tr from-pink-500 via-red-500 to-yellow-500 hover:from-pink-600 hover:to-yellow-600 text-white rounded-full p-2 shadow transition" title="Instagram"><FaInstagram className="w-5 h-5" /></a>
          </div>
        </div>
        {/* Navegación */}
        <nav className="flex flex-col items-center gap-2">
          <div className="flex gap-6 mb-2">
            <a href="/" className="hover:underline text-white font-bold">Inicio</a>
            <a href="#promos-pizzeria" className="hover:underline text-white font-bold">Promociones</a>
            <a href="/productos" className="hover:underline text-white font-bold">Productos</a>
            <a href="#formulario-contacto" className="hover:underline text-white font-bold">Contacto</a>
          </div>
          <button onClick={() => setShowPoliticas(true)} className="text-xs text-gray-300 underline hover:text-green-400 transition">Políticas y Privacidad</button>
        </nav>
        {/* Derechos y autor */}
        <div className="flex flex-col items-center gap-1">
          <span className="text-xs text-gray-400">&copy; {new Date().getFullYear()} Pizzeria del Pincha. Todos los derechos reservados.</span>
          <span className="text-xs text-gray-600">Sitio realizado por ochodesign</span>
        </div>
      </div>
      <PoliticasModal open={showPoliticas} onClose={() => setShowPoliticas(false)} />
    </footer>
  );
};

export default FooterPizzeria;
