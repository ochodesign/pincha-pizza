import FormularioContactoPizzeria from "./components/Pizzeria/FormularioContactoPizzeria";
import TodosProductosPizzeria from "./components/Pizzeria/TodosProductosPizzeria";
import React from "react";
import { Routes, Route } from "react-router-dom";

import HomePizzeria from "./components/Pizzeria/HomePizzeria";
import ServiciosPizzeria from "./components/Pizzeria/ServiciosPizzeria";
import PromosPizzeria from "./components/Pizzeria/PromosPizzeria";
import MenuPizzeria from "./components/Pizzeria/MenuPizzeria";
import CartPizzeria from "./components/Pizzeria/CartPizzeria";
import CartIconPizzeria from "./components/Pizzeria/CartIconPizzeria";
import UbicacionPizzeria from "./components/Pizzeria/UbicacionPizzeria";
import HorariosPizzeria from "./components/Pizzeria/HorariosPizzeria";
import '../styles/tailwind.css';
import { useState } from "react";
import FooterPizzeria from "./components/Pizzeria/FooterPizzeria";

// Número de WhatsApp centralizado para todos los envíos
const WHATSAPP_NUMBER = "5491164623427";


function PizzeriaApp() {
  const [cart, setCart] = useState([]);
  const [showCart, setShowCart] = useState(false);

  const handleAddToCart = (item) => {
    setCart((prev) => {
      const found = prev.find((i) => i.nombre === item.nombre);
      const cantidadAgregar = item.cantidad || 1;
      if (found) {
        return prev.map((i) =>
          i.nombre === item.nombre ? { ...i, cantidad: i.cantidad + cantidadAgregar } : i
        );
      }
      return [...prev, { ...item, cantidad: cantidadAgregar }];
    });
  };

  const handleRemoveFromCart = (item) => {
    setCart((prev) =>
      prev
        .map((i) =>
          i.nombre === item.nombre ? { ...i, cantidad: i.cantidad - 1 } : i
        )
        .filter((i) => i.cantidad > 0)
    );
  };

  const handleSendOrder = () => {
    if (cart.length === 0) return;
    const text = encodeURIComponent(
      '¡Hola! Quiero hacer un pedido:\n' +
        cart.map((i) => `- ${i.nombre} x${i.cantidad}`).join('\n') +
        `\nTotal: $${cart.reduce((acc, i) => acc + i.precio * i.cantidad, 0)}`
    );
  window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${text}`, '_blank');
  };

  return (
  <div className="min-h-screen bg-yellow-50 pt-24">
  <nav className="bg-black text-white py-4 px-6 flex flex-col md:flex-row md:items-center md:justify-between fixed top-0 left-0 w-full z-50 shadow-lg">
        <div className="flex items-center space-x-3 w-full md:w-auto">
          <span className="text-lg md:text-2xl font-extrabold tracking-wide font-sans text-white px-4 py-1 rounded-2xl border-4 border-black shadow-lg w-full md:w-auto whitespace-nowrap overflow-hidden text-ellipsis text-center block" style={{ WebkitTextStroke: '1px black', fontWeight: 900, lineHeight: '1.2' }}>PIZZERIA DEL PINCHA</span>
        </div>
        <div className="flex items-center space-x-4 mt-2 md:mt-0">
          <a href="/" className="hover:underline text-orange-400">Inicio</a>
          <a href="#promos-pizzeria" className="hover:underline text-orange-400">Promociones</a>
          <a href="/productos" className="hover:underline text-orange-400">Productos</a>
          <a href="#formulario-contacto" className="hover:underline text-orange-400">Contacto</a>
          <div className="ml-4 hidden md:block">
            <CartIconPizzeria cartCount={cart.reduce((acc, i) => acc + i.cantidad, 0)} onClick={() => setShowCart((v) => !v)} />
          </div>
        </div>
        {/* Carrito flotante solo en mobile */}
        <div className="fixed bottom-5 right-5 z-50 md:hidden">
          <CartIconPizzeria cartCount={cart.reduce((acc, i) => acc + i.cantidad, 0)} onClick={() => setShowCart((v) => !v)} />
        </div>
      </nav>
      <Routes>
        <Route path="/" element={
          <>
            <HomePizzeria />
            <ServiciosPizzeria />
            <div id="promos-pizzeria">
              <PromosPizzeria onAddToCart={handleAddToCart} />
            </div>
            <TodosProductosPizzeria onAddToCart={handleAddToCart} />
            <UbicacionPizzeria />
            <div id="formulario-contacto">
              <FormularioContactoPizzeria />
            </div>
          </>
        } />
        <Route path="/menu" element={<MenuPizzeria onAddToCart={handleAddToCart} />} />
  <Route path="/productos" element={<TodosProductosPizzeria onAddToCart={handleAddToCart} />} />
        <Route path="/horarios" element={<HorariosPizzeria />} />
      </Routes>
      {showCart && (
        <div className="fixed inset-0 bg-black bg-opacity-40 z-50 flex items-center justify-center" onClick={() => setShowCart(false)}>
          <div onClick={e => e.stopPropagation()}>
            <CartPizzeria cart={cart} onRemove={handleRemoveFromCart} onSend={handleSendOrder} onClose={() => setShowCart(false)} />
          </div>
        </div>
      )}

      <FooterPizzeria />
    </div>
  );
}


function App() {
  return <PizzeriaApp />;
}

export default App;