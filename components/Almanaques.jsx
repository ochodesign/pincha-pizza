import React from 'react';
import { motion } from 'framer-motion';

const Almanaques = () => {
  const almanaques = [
    {
      año: '2024',
      titulo: 'Almanaque Fotográfico 2024',
      descripcion: 'Colección de mis mejores fotografías del año',
      imagen: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=600&q=80'
    },
    {
      año: '2023',
      titulo: 'Retratos & Paisajes 2023',
      descripcion: 'Una selección especial de retratos y paisajes',
      imagen: 'https://images.unsplash.com/photo-1481349518771-20055b2a7b24?auto=format&fit=crop&w=600&q=80'
    },
    {
      año: '2022',
      titulo: 'Momentos Especiales 2022',
      descripcion: 'Bodas y eventos más memorables del año',
      imagen: 'https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=600&q=80'
    }
  ];

  return (
    <section id="almanaques" className="py-16 bg-gray-50">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-bold mb-4">Almanaques</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Explora mis colecciones anuales de fotografías, cuidadosamente seleccionadas 
            para crear almanaques únicos que capturan la esencia de cada año.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {almanaques.map((almanaque, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              whileHover={{ scale: 1.05 }}
              className="bg-white rounded-lg shadow-lg overflow-hidden cursor-pointer"
            >
              <img 
                src={almanaque.imagen} 
                alt={almanaque.titulo}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <span className="text-2xl font-bold text-gray-800">{almanaque.año}</span>
                <h3 className="text-xl font-semibold mt-2 mb-3">{almanaque.titulo}</h3>
                <p className="text-gray-600 mb-4">{almanaque.descripcion}</p>
                  <button className="w-full bg-red-600 text-white py-2 rounded-lg shadow hover:bg-black transition-colors border-2 border-white">
                  Ver Almanaque
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Almanaques;
