import React from "react";
import { FaShoppingCart } from "react-icons/fa";

const CartIconPizzeria = ({ cartCount, onClick }) => (
  <button
    onClick={onClick}
  className="relative flex items-center justify-center w-10 h-10 bg-green-600 hover:bg-green-700 rounded-full shadow text-white transition focus:outline-none"
    title="Ver carrito"
  >
    <FaShoppingCart className="w-6 h-6" />
    {cartCount > 0 && (
  <span className="absolute -top-1 -right-1 bg-black text-green-400 text-xs font-bold rounded-full px-2 py-0.5">
        {cartCount}
      </span>
    )}
  </button>
);

export default CartIconPizzeria;
