import React, { useState } from "react";
import { Menu, X } from "lucide-react";
import CartIconPizzeria from "./CartIconPizzeria";

const menuItems = [
  { name: "Inicio", href: "/" },
  { name: "Promociones", href: "#promos-pizzeria" },
  { name: "Productos", href: "/productos" },
  { name: "Contacto", href: "#formulario-contacto" },
];

const HeaderPizzeria = ({ cartCount, onCartClick }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed w-full bg-black text-white z-50 shadow-lg min-h-[60px] md:min-h-[80px]">
      <div className="container mx-auto px-4 flex items-center justify-between h-20 md:h-24">
        {/* Logo (desktop & mobile) */}
        <div className="flex items-center gap-4">
          <a href="/">
            <img
              src="/img/logo/logo-pincha-pizza.webp"
              alt="Logo Pizzeria del Pincha"
              className="h-12 md:h-20 w-auto block drop-shadow-lg"
              style={{ maxWidth: "120px" }}
            />
          </a>
        </div>
        {/* Nav desktop */}
        <nav className="hidden md:flex flex-1 justify-center items-center gap-10">
          {menuItems.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className="text-white hover:text-[#366D58] text-xl font-bold transition-colors"
            >
              {item.name}
            </a>
          ))}
        </nav>
        {/* Cart desktop */}
        <div className="hidden md:flex items-center ml-6">
          <CartIconPizzeria cartCount={cartCount} onClick={onCartClick} />
        </div>
        {/* Burger mobile */}
        <button
          className="md:hidden p-2 rounded-md text-white hover:text-[#366D58] focus:outline-none"
          onClick={() => setIsMenuOpen(true)}
          aria-label="Abrir menú"
        >
          <Menu className="h-8 w-8" />
        </button>
        {/* Mobile menu overlay */}
        {isMenuOpen && (
          <div className="fixed inset-0 bg-black bg-opacity-95 z-50 flex flex-col">
            <div className="flex items-center justify-between px-4 pt-4 pb-2">
              {/* Logo en el menú mobile */}
              <a href="/">
                <img
                  src="/img/logo/logo-pincha-pizza.webp"
                  alt="Logo Pizzeria del Pincha"
                  className="h-12 w-auto block drop-shadow-lg"
                  style={{ maxWidth: "120px" }}
                />
              </a>
              <button
                className="p-2 rounded-md text-white hover:text-[#366D58] focus:outline-none"
                onClick={() => setIsMenuOpen(false)}
                aria-label="Cerrar menú"
              >
                <X className="h-8 w-8" />
              </button>
            </div>
            <nav className="flex flex-col items-center gap-6 mt-8">
              {menuItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="text-white text-2xl font-bold hover:text-[#366D58] transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </a>
              ))}
            </nav>
          </div>
        )}
        {/* Cart mobile (flotante) */}
        <div className="fixed bottom-5 right-5 z-50 md:hidden">
          <CartIconPizzeria cartCount={cartCount} onClick={onCartClick} />
        </div>
      </div>
    </header>
  );
};

export default HeaderPizzeria;
