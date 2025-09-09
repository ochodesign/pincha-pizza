import React from "react";

// Componente simple: Botón que abre WhatsApp con un mensaje predefinido
function BotonWhatsapp({ telefono = "5491123456789", mensaje = "¡Hola! Quiero más info." }) {
  const url = `https://wa.me/${telefono}?text=${encodeURIComponent(mensaje)}`;
  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className="inline-flex items-center gap-2 px-4 py-2 bg-green-500 hover:bg-green-600 text-white rounded-lg shadow transition font-semibold text-base"
      title="Contactar por WhatsApp"
    >
      <span role="img" aria-label="WhatsApp"></span>
      Soy Un Btn WhatsApp
    </a>
  );
}

export default BotonWhatsapp;
