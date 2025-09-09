import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const menuItems = [
  { name: 'Inicio', href: '#hero' },
  { name: 'Almanaques', href: '#servicios' },
  { name: 'Galería', href: '#galeria-grafica' },
  { name: 'Servicios', href: '#servicios' },
  { name: 'Contacto', href: '#contacto' },
  ];

  return (
  <header className="fixed w-full bg-white shadow-sm z-50 border-b-4 border-red-600">
  <div className="container mx-auto px-4 pr-4">
        <div className="flex justify-between items-center h-24">
          {/* Logo */}
          <div className="flex-shrink-0">
            <h1 className="text-3xl font-serif italic text-black">Karina Ochoa</h1>
            <p className="text-sm text-red-600 font-light tracking-wider">BUENOS AIRES</p>
          </div>

          {/* Menú de escritorio */}
          <nav className="hidden md:flex space-x-8">
            {menuItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-black hover:text-red-600 transition-colors duration-200 tracking-wide uppercase text-sm"
              >
                {item.name}
              </a>
            ))}
          </nav>

          {/* Botón de menú móvil */}
          <button
            type="button"
            className="md:hidden p-2 rounded-md text-gray-600 hover:text-gray-900 hover:bg-gray-100"
            onClick={toggleMenu}
          >
            {isMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>
        </div>

        {/* Menú móvil */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {menuItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="block px-3 py-2 rounded-md text-base font-medium text-gray-600 hover:text-gray-900 hover:bg-gray-100"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </a>
              ))}
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
