import React, { useState } from "react";

const PoliticasModal = ({ open, onClose }) => (
  open ? (
    <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/60 backdrop-blur-sm">
      <div className="bg-white rounded-2xl shadow-2xl max-w-lg w-full p-8 relative animate-fadeInUp">
        <button onClick={onClose} className="absolute top-3 right-3 text-green-700 hover:text-green-900 p-2 rounded-full focus:outline-none text-xl font-bold">×</button>
        <h2 className="text-2xl font-chewy text-[#A25305] mb-4 text-center">Políticas y Privacidad</h2>
        <div className="text-gray-700 font-montserrat text-sm space-y-3 max-h-[60vh] overflow-y-auto">
          <p><b>Privacidad:</b> Tus datos solo se usan para gestionar tu pedido y nunca se comparten con terceros.</p>
          <p><b>Política de Cookies:</b> Este sitio utiliza cookies técnicas para mejorar la experiencia de usuario.</p>
          <p><b>Condiciones de uso:</b> Al realizar un pedido aceptás nuestras condiciones de servicio y política de privacidad.</p>
          <p>Para más información, contactanos por WhatsApp o Instagram.</p>
        </div>
      </div>
      <style>{`
        .animate-fadeInUp { animation: fadeInUp 0.3s cubic-bezier(.4,1.6,.6,1) both; }
        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(40px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </div>
  ) : null
);

export default PoliticasModal;
