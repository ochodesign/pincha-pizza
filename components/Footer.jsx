import React from 'react';
import { Instagram, Facebook, Mail, Phone } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-black text-white py-12">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo y descripción igual al header */}
          <div className="md:col-span-2">
            <h1 className="text-3xl font-serif italic text-red-600 mb-1">Karina Ochoa</h1>
            <p className="text-sm text-red-600 font-light tracking-wider mb-4">DISEÑO GRÁFICO · BUENOS AIRES</p>
            <p className="text-gray-400 mb-4">
              Especialista en diseño gráfico institucional, imprenta y comunicación visual. Soluciones creativas para empresas, eventos y marcas. Diseño de piezas gráficas, branding, papelería, flyers, catálogos y más.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Instagram size={24} />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Facebook size={24} />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Mail size={24} />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Phone size={24} />
              </a>
            </div>
          </div>

          {/* Enlaces rápidos */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Enlaces Rápidos</h4>
            <ul className="space-y-2">
              <li>
                <a href="#hero" className="text-gray-400 hover:text-white transition-colors">
                  Home
                </a>
              </li>
              <li>
                <a href="#servicios" className="text-gray-400 hover:text-white transition-colors">
                  Almanaques / Servicios
                </a>
              </li>
              <li>
                <a href="#galeria-grafica" className="text-gray-400 hover:text-white transition-colors">
                  Galería
                </a>
              </li>
              <li>
                <a href="#contacto" className="text-gray-400 hover:text-white transition-colors">
                  Contacto
                </a>
              </li>
            </ul>
          </div>

          {/* Servicios */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Servicios</h4>
            <ul className="space-y-2">
              <li className="text-gray-400">Retratos Profesionales</li>
              <li className="text-gray-400">Fotografía de Bodas</li>
              <li className="text-gray-400">Eventos Sociales</li>
              <li className="text-gray-400">Sesiones Temáticas</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
          <p className="text-gray-400">
            © 2025 Karina 8a. Todos los derechos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
