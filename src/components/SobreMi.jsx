import React from 'react';
import { motion } from 'framer-motion';

const SobreMi = () => {
  return (
    <section id="sobremi" className="py-16 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Imagen */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <img 
              src="https://randomuser.me/api/portraits/women/44.jpg" 
              alt="Karina" 
              className="w-full max-w-md mx-auto rounded-lg shadow-xl object-cover" 
            />
            <div className="absolute -bottom-4 -right-4 bg-black text-white px-4 py-2 rounded-lg">
              <span className="font-bold">Karina 8a</span>
            </div>
          </motion.div>

          {/* Contenido */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            <h2 className="text-4xl font-bold mb-6">Sobre mí</h2>
            
            <div className="space-y-4 text-gray-700">
              <p className="text-lg">
                Soy Karina, fotógrafa profesional apasionada por capturar momentos únicos que cuentan historias. 
                Mi especialidad está en retratos, bodas y eventos, donde cada imagen refleja emociones genuinas y 
                belleza natural.
              </p>
              
              <p>
                Con más de 8 años de experiencia en el mundo de la fotografía, he desarrollado un estilo único 
                que combina técnica profesional con una visión artística personal. Creo que cada fotografía debe 
                ser una obra de arte que perdure en el tiempo.
              </p>
              
              <p>
                Mi enfoque se centra en crear un ambiente cómodo y natural para mis clientes, permitiendo que 
                su verdadera personalidad brille en cada toma. Utilizo equipos de última generación y técnicas 
                avanzadas para garantizar resultados excepcionales.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-6 pt-6">
              <div className="text-center">
                <div className="text-3xl font-bold text-black mb-1">200+</div>
                <div className="text-gray-600">Bodas Fotografiadas</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-black mb-1">500+</div>
                <div className="text-gray-600">Clientes Satisfechos</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-black mb-1">8+</div>
                <div className="text-gray-600">Años de Experiencia</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-black mb-1">50+</div>
                <div className="text-gray-600">Eventos Cubiertos</div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default SobreMi;
