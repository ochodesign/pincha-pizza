import React from "react";
import { FaTrash, FaTimes } from "react-icons/fa";

const CartPizzeria = ({ cart, onRemove, onSend, onClose }) => {
  const total = cart.reduce((acc, item) => acc + item.precio * item.cantidad, 0);
  return (
    <aside className="fixed bottom-4 right-4 bg-white border-2 border-orange-400 rounded-xl shadow-lg p-4 w-80 z-50 max-w-full">
      <button
        onClick={onClose}
        className="absolute top-2 right-2 text-orange-600 hover:text-orange-800 p-1 rounded-full focus:outline-none"
        title="Cerrar"
      >
        <FaTimes className="w-5 h-5" />
      </button>
      <h3 className="text-xl font-bold text-orange-600 mb-2">Tu pedido</h3>
      {cart.length === 0 ? (
        <p className="text-gray-500">El carrito está vacío.</p>
      ) : (
        <ul className="mb-2">
          {cart.map((item, idx) => (
            <li key={idx} className="flex justify-between items-center mb-1">
              <span className="text-black">{item.nombre} x{item.cantidad}</span>
              <span className="text-black">${item.precio * item.cantidad}</span>
              <button onClick={() => onRemove(item)} className="ml-2 text-orange-600 hover:text-orange-800 p-1" title="Quitar">
                <FaTrash className="w-4 h-4" />
              </button>
            </li>
          ))}
        </ul>
      )}
      <div className="flex justify-between items-center mt-2">
        <span className="font-bold text-black">Total:</span>
        <span className="font-bold text-orange-700">${total}</span>
      </div>
      <button
        className="mt-4 w-full bg-orange-600 hover:bg-orange-700 text-white py-2 rounded font-bold transition"
        onClick={onSend}
        disabled={cart.length === 0}
      >
        Enviar pedido por WhatsApp
      </button>
    </aside>
  );
};

export default CartPizzeria;
