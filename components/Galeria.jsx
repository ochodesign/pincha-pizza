import React from 'react';
import { motion } from 'framer-motion';

const Galeria = () => {
  const imagenes = [
    'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=800&q=80',
    'https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=800&q=80', 
    'https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=800&q=80',
    'https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?auto=format&fit=crop&w=800&q=80',
    'https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=800&q=80',
    'https://images.unsplash.com/photo-1606103586461-9bb26b72cbbc?auto=format&fit=crop&w=800&q=80',
    'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=800&q=80',
    'https://images.unsplash.com/photo-1481349518771-20055b2a7b24?auto=format&fit=crop&w=800&q=80'
  ];

  return (
    <section id="galeria" className="py-16 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-bold mb-4">Galería</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Una selección de mis trabajos más destacados en retratos, bodas y eventos especiales.
            Cada imagen cuenta una historia única.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {imagenes.map((imagen, index) => (
            <motion.div 
              key={index} 
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ scale: 1.05 }} 
              className="relative overflow-hidden rounded-lg shadow-lg group cursor-pointer"
            >
              <img 
                src={imagen} 
                alt={`Galería ${index + 1}`} 
                className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-110" 
              />
              <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                <span className="text-white text-lg font-medium">Ver más</span>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="text-center mt-12">
          <button className="bg-red-600 text-white px-4 py-2 rounded-lg shadow hover:bg-black transition-colors border-2 border-white">
            Ver Galería Completa
          </button>
        </div>
      </div>
    </section>
  );
};

export default Galeria;
