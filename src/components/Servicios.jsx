import React from 'react';
import { motion } from 'framer-motion';
import { Camera, Heart, Users, Calendar } from 'lucide-react';

const Servicios = () => {
  const servicios = [
    {
      icon: <Camera size={32} />,
      titulo: 'Retratos Profesionales',
      descripcion: 'Sesiones personalizadas para capturar tu esencia única con estilo profesional.',
      precio: 'Desde $150'
    },
    {
      icon: <Heart size={32} />,
      titulo: 'Fotografía de Bodas',
      descripcion: 'Cobertura completa de tu día especial, desde la preparación hasta la celebración.',
      precio: 'Desde $800'
    },
    {
      icon: <Users size={32} />,
      titulo: 'Eventos Sociales',
      descripcion: 'Fotografía para eventos corporativos, fiestas familiares y celebraciones especiales.',
      precio: 'Desde $400'
    },
    {
      icon: <Calendar size={32} />,
      titulo: 'Sesiones Temáticas',
      descripcion: 'Sesiones creativas con conceptos únicos para proyectos especiales.',
      precio: 'Desde $200'
    }
  ];

  return (
    <section id="servicios" className="py-16 bg-gray-50">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-bold mb-4">Servicios</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Ofrezco una amplia gama de servicios fotográficos profesionales, 
            adaptados a tus necesidades específicas y presupuesto.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {servicios.map((servicio, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              whileHover={{ y: -10, boxShadow: '0 20px 40px rgba(0,0,0,0.1)' }}
              className="bg-white rounded-xl p-6 shadow-lg text-center"
            >
              <div className="mb-4 text-gray-700 flex justify-center">
                {servicio.icon}
              </div>
              <h3 className="text-xl font-semibold mb-3">{servicio.titulo}</h3>
              <p className="text-gray-600 mb-4 text-sm">{servicio.descripcion}</p>
              <div className="text-lg font-bold text-black mb-4">{servicio.precio}</div>
              <button className="w-full bg-black text-white py-2 rounded-lg hover:bg-gray-800 transition-colors">
                Consultar
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Servicios;
