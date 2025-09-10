import React, { useState } from "react";
import { FaTrash, FaTimes, FaShoppingCart, FaBoxOpen, FaWhatsapp, FaPlus, FaMinus } from "react-icons/fa";

const CartPizzeria = ({ cart, onRemove, onSend, onClose, onIncrease, onDecrease }) => {
  const [removingIdx, setRemovingIdx] = useState(null);
  const [sending, setSending] = useState(false);
  const [copied, setCopied] = useState(false);
  const total = cart.reduce((acc, item) => acc + item.precio * item.cantidad, 0);
  const cantidadTotal = cart.reduce((acc, item) => acc + item.cantidad, 0);
  return (
    <aside className="fixed bottom-4 right-4 bg-white border border-green-700 rounded-3xl shadow-2xl p-6 w-80 z-50 max-w-full animate-fadeInUp">
      <button
        onClick={onClose}
        className="absolute top-3 right-3 text-green-700 hover:text-green-900 p-2 rounded-full focus:outline-none text-2xl"
        title="Cerrar"
      >
        <FaTimes />
      </button>
      <h3 className="text-2xl font-chewy text-green-800 mb-2 flex items-center gap-2"><FaShoppingCart className="w-7 h-7" />Tu pedido</h3>
      <div className="text-sm text-gray-600 mb-2">{cantidadTotal} producto{cantidadTotal !== 1 ? 's' : ''} en el carrito</div>
      {cart.length === 0 ? (
        <div className="flex flex-col items-center justify-center py-8">
          <FaBoxOpen className="text-green-200 text-6xl mb-2" />
          <div className="text-green-700 font-bold text-lg mb-2">¡Tu carrito está vacío!</div>
          <button onClick={onClose} className="bg-green-600 hover:bg-green-700 text-white font-bold px-6 py-2 rounded-xl shadow transition-all">Seguir comprando</button>
        </div>
      ) : (
        <ul className="mb-3 divide-y divide-green-50">
          {cart.map((item, idx) => (
            <li key={idx} className={`flex justify-between items-center py-2 transition-all ${removingIdx === idx ? 'opacity-40 scale-95' : ''}`}>
              <span className="text-black font-montserrat w-28 truncate">{item.nombre}</span>
              <div className="flex items-center gap-2">
                <button
                  onClick={() => onDecrease(item)}
                  className="bg-green-100 hover:bg-green-200 text-green-700 rounded-full w-7 h-7 flex items-center justify-center text-base font-bold border border-green-200 disabled:opacity-40"
                  disabled={item.cantidad <= 1}
                  title="Quitar uno"
                  aria-label="Quitar uno"
                >
                  <FaMinus />
                </button>
                <span className="text-black font-bold w-6 text-center select-none">{item.cantidad}</span>
                <button
                  onClick={() => onIncrease(item)}
                  className="bg-green-100 hover:bg-green-200 text-green-700 rounded-full w-7 h-7 flex items-center justify-center text-base font-bold border border-green-200"
                  title="Sumar uno"
                  aria-label="Sumar uno"
                >
                  <FaPlus />
                </button>
              </div>
              <span className="text-black font-bold w-16 text-right">${item.precio * item.cantidad}</span>
              <button
                onClick={() => {
                  setRemovingIdx(idx);
                  setTimeout(() => {
                    setRemovingIdx(null);
                    onRemove(item);
                  }, 300);
                }}
                className="ml-2 text-green-700 hover:text-red-600 p-2 rounded-full bg-green-50 hover:bg-red-100 transition-all text-xl shadow-sm"
                title="Quitar"
                aria-label="Quitar producto"
              >
                <FaTrash />
              </button>
            </li>
          ))}
        </ul>
      )}
      <div className="flex justify-between items-center mt-2 text-lg">
        <span className="font-bold text-black">Total:</span>
        <span className="font-extrabold text-green-800 text-2xl drop-shadow">${total}</span>
      </div>
      <a
        href={`https://wa.me/5491164623427?text=${encodeURIComponent(
          '¡Hola! Quiero hacer un pedido:\n' +
          cart.map((i) => `- ${i.nombre} x${i.cantidad}`).join('\n') +
          `\nTotal: $${cart.reduce((acc, i) => acc + i.precio * i.cantidad, 0)}`
        )}`}
        target="_blank"
        rel="noopener noreferrer"
        className={`mt-6 w-full flex items-center justify-center gap-3 bg-[#A25305] hover:bg-orange-700 text-white py-3 rounded-2xl font-extrabold shadow-md transition-all text-lg tracking-wide focus:ring-2 focus:ring-orange-300 ${cart.length === 0 ? 'opacity-60 cursor-not-allowed pointer-events-none' : ''}`}
        aria-label="Enviar pedido por WhatsApp"
      >
        <span className="flex-1 text-center">Continuar</span>
      </a>
      <div className="text-xs text-center text-green-600 mt-2 font-montserrat opacity-80">Recibirás la confirmación en tu WhatsApp</div>
      <div className="mt-4 flex flex-col items-center">
        <span className="text-green-900 font-bold text-sm mb-1">¿Preferís transferir?</span>
        <div className="flex items-center gap-2">
          <span className="bg-green-100 text-green-800 font-mono px-3 py-1 rounded-xl text-base select-all shadow-sm border border-green-200">alias: Loshernys</span>
          <button
            onClick={() => {
              navigator.clipboard.writeText('Loshernys');
              setCopied(true);
              setTimeout(() => setCopied(false), 1200);
            }}
            className="bg-green-600 hover:bg-green-700 text-white px-2 py-1 rounded-lg text-xs font-bold transition-all shadow focus:outline-none border border-green-700"
            style={{ minWidth: 60 }}
          >
            {copied ? '¡Copiado!' : 'Copiar'}
          </button>
        </div>
        <span className="text-xs text-green-700 mt-1 opacity-80">(Alias MercadoPago)</span>
      </div>
      <style>{`
        .animate-fadeInUp { animation: fadeInUp 0.35s cubic-bezier(.4,1.6,.6,1) both; }
        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(40px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </aside>
  );
};

export default CartPizzeria;
