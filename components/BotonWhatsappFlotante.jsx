import React from "react";
import { FaWhatsapp } from "react-icons/fa";

const BotonWhatsappFlotante = ({ telefono = "5491112345678", mensaje = "¡Hola! Vi tu web y quiero más info." }) => {
  const url = `https://wa.me/${telefono}?text=${encodeURIComponent(mensaje)}`;
  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-8 left-8 z-50 bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-lg flex items-center justify-center transition-colors"
      aria-label="WhatsApp"
    >
      <FaWhatsapp size={28} />
    </a>
  );
};

export default BotonWhatsappFlotante;
