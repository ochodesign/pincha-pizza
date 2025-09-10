import React from "react";
import { FaCheckCircle, FaShoppingCart, FaTimes } from "react-icons/fa";

const ModalProductoAgregado = ({ mensaje, onClose, showGoToCart, onGoToCart }) => (
  <div className="fixed inset-0 z-[999] flex items-end justify-center md:items-center md:justify-center pointer-events-none">
    {/* Fondo blur */}
    <div className="absolute inset-0 bg-black/40 backdrop-blur-sm transition-opacity animate-fadeIn pointer-events-auto" onClick={onClose}></div>
    {/* Modal */}
    <div className="relative bg-white rounded-3xl shadow-2xl px-8 py-7 max-w-xs w-full mb-8 md:mb-0 flex flex-col items-center border-4 border-green-700 animate-zoomIn pointer-events-auto">
      <button onClick={onClose} className="absolute top-3 right-3 text-green-700 hover:text-green-900 p-1 rounded-full focus:outline-none" title="Cerrar">
        <FaTimes className="w-5 h-5" />
      </button>
      <FaCheckCircle className="text-green-600 w-14 h-14 mb-2 animate-bounceIn" />
      <div className="text-green-900 text-xl font-chewy text-center mb-2 drop-shadow">¡Producto agregado!</div>
      <div className="text-green-800 text-lg font-montserrat text-center mb-4">{mensaje}</div>
      <div className="flex gap-3 w-full">
        {showGoToCart && (
          <button onClick={onGoToCart} className="flex-1 flex items-center justify-center gap-2 bg-green-700 hover:bg-green-800 text-white font-bold py-2 rounded-xl shadow transition-all text-base">
            <FaShoppingCart className="w-5 h-5" /> Ir al carrito
          </button>
        )}
        <button onClick={onClose} className="flex-1 flex items-center justify-center gap-2 bg-white border-2 border-green-700 text-green-700 hover:bg-green-50 font-bold py-2 rounded-xl shadow transition-all text-base">
          Seguir comprando
        </button>
      </div>
    </div>
    <style>{`
      @keyframes fadeIn {
        from { opacity: 0; }
        to { opacity: 1; }
      }
      .animate-fadeIn { animation: fadeIn 0.3s; }
      @keyframes zoomIn {
        from { transform: scale(0.7); opacity: 0; }
        to { transform: scale(1); opacity: 1; }
      }
      .animate-zoomIn { animation: zoomIn 0.25s cubic-bezier(.4,1.6,.6,1) both; }
      @keyframes bounceIn {
        0% { transform: scale(0.7); opacity: 0; }
        60% { transform: scale(1.2); opacity: 1; }
        100% { transform: scale(1); }
      }
      .animate-bounceIn { animation: bounceIn 0.5s; }
    `}</style>
  </div>
);

export default ModalProductoAgregado;
