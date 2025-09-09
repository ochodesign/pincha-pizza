import React from 'react';
import { motion } from 'framer-motion';

const Home = () => {
  return (
    <section id="home" className="relative h-screen flex items-center justify-center bg-black pt-16">
      <img 
        src="https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=1200&q=80" 
        alt="Karina 8a" 
        className="absolute inset-0 w-full h-full object-cover opacity-60" 
      />
      <div className="relative z-10 text-center text-white">
        <motion.h1 
          initial={{ opacity: 0, y: 40 }} 
          animate={{ opacity: 1, y: 0 }} 
          transition={{ duration: 1 }} 
          className="text-5xl md:text-7xl font-bold mb-4"
        >
          Karina 8a
        </motion.h1>
        <motion.p 
          initial={{ opacity: 0, y: 20 }} 
          animate={{ opacity: 1, y: 0 }} 
          transition={{ delay: 0.5, duration: 1 }} 
          className="text-xl md:text-2xl mb-6"
        >
          Fotógrafa Profesional | Retratos, Bodas, Eventos
        </motion.p>
        <motion.button
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 1, duration: 0.8 }}
          className="px-8 py-3 bg-white text-black font-medium rounded-full hover:bg-gray-200 transition-all duration-300 transform hover:scale-105 shadow-lg"
        >
          Ver Portfolio
        </motion.button>
      </div>
    </section>
  );
};

export default Home;
