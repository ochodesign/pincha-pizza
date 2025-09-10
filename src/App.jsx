import FormularioContactoPizzeria from "./components/Pizzeria/FormularioContactoPizzeria";
import TodosProductosPizzeria from "./components/Pizzeria/TodosProductosPizzeria";
import React, { useRef } from "react";
import ModalProductoAgregado from "./components/Pizzeria/ModalProductoAgregado";
import { Routes, Route } from "react-router-dom";

import HomePizzeria from "./components/Pizzeria/HomePizzeria";
import ServiciosPizzeria from "./components/Pizzeria/ServiciosPizzeria";
import PromosPizzeria from "./components/Pizzeria/PromosPizzeria";
import MenuPizzeria from "./components/Pizzeria/MenuPizzeria";
import CartPizzeria from "./components/Pizzeria/CartPizzeria";
import CartIconPizzeria from "./components/Pizzeria/CartIconPizzeria";
import HeaderPizzeria from "./components/Pizzeria/HeaderPizzeria";
import UbicacionPizzeria from "./components/Pizzeria/UbicacionPizzeria";
import HorariosPizzeria from "./components/Pizzeria/HorariosPizzeria";
import '../styles/tailwind.css';
import { useState } from "react";
import FooterPizzeria from "./components/Pizzeria/FooterPizzeria";
import ScrollUpButton from "./components/Pizzeria/ScrollUpButton";
import BurgerMenu from "./components/Pizzeria/BurgerMenu";

// Número de WhatsApp centralizado para todos los envíos
const WHATSAPP_NUMBER = "5491164623427";



function PizzeriaApp() {
  const [cart, setCart] = useState([]);
  const [showCart, setShowCart] = useState(false);
  const [showAdded, setShowAdded] = useState(false);
  const [addedMsg, setAddedMsg] = useState("");
  const addedTimeout = useRef();

  // Agregar producto al carrito (desde productos/promos)
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
    setAddedMsg(`Agregaste ${item.cantidad || 1} ${item.nombre}${(item.cantidad || 1) > 1 ? 's' : ''} al carrito.`);
    setShowAdded(true);
    if (addedTimeout.current) clearTimeout(addedTimeout.current);
    addedTimeout.current = setTimeout(() => setShowAdded(false), 2500);
  };

  // Disminuir cantidad de un producto
  const handleDecreaseQty = (item) => {
    setCart((prev) =>
      prev
        .map((i) =>
          i.nombre === item.nombre ? { ...i, cantidad: i.cantidad - 1 } : i
        )
        .filter((i) => i.cantidad > 0)
    );
  };

  // Aumentar cantidad de un producto
  const handleIncreaseQty = (item) => {
    setCart((prev) =>
      prev.map((i) =>
        i.nombre === item.nombre ? { ...i, cantidad: i.cantidad + 1 } : i
      )
    );
  };

  // Eliminar producto completamente
  const handleRemoveFromCart = (item) => {
    setCart((prev) => prev.filter((i) => i.nombre !== item.nombre));
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
  <div className="min-h-screen bg-yellow-50">
    <HeaderPizzeria
      cartCount={cart.reduce((acc, i) => acc + i.cantidad, 0)}
      onCartClick={() => setShowCart((v) => !v)}
    />
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
            <CartPizzeria
              cart={cart}
              onRemove={handleRemoveFromCart}
              onSend={handleSendOrder}
              onClose={() => setShowCart(false)}
              onIncrease={handleIncreaseQty}
              onDecrease={handleDecreaseQty}
            />
          </div>
        </div>
      )}

  <FooterPizzeria />
  <ScrollUpButton hidden={showCart} />
      {/* Modal de producto agregado mejorado */}
      {showAdded && (
        <ModalProductoAgregado
          mensaje={addedMsg}
          onClose={() => setShowAdded(false)}
          showGoToCart={true}
          onGoToCart={() => {
            setShowAdded(false);
            setShowCart(true);
          }}
        />
      )}
    </div>
  );
}


function App() {
  return <PizzeriaApp />;
}

export default App;