import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";

const BurgerMenu = ({ children }) => {
  const [open, setOpen] = useState(false);

  return (
    <div className="md:hidden">
      {!open && (
        <button
          className="text-white text-3xl p-2 focus:outline-none"
          onClick={() => setOpen((v) => !v)}
          aria-label={open ? "Cerrar menú" : "Abrir menú"}
          style={{zIndex: 60, position: 'relative'}}
        >
          <FaBars />
        </button>
      )}
      <AnimatePresence>
        {open && (
          <motion.div
            key="burger-menu"
            initial={{ y: -100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -100, opacity: 0 }}
            transition={{ duration: 0.3, type: "spring" }}
            className="fixed top-0 left-0 w-full h-2/3 bg-black bg-opacity-95 z-50 flex flex-col items-center pt-8 px-4 text-2xl font-bold rounded-b-3xl shadow-2xl"
            onClick={() => setOpen(false)}
          >
            <button
              className="absolute top-4 right-6 text-white text-4xl p-2 focus:outline-none"
              onClick={e => { e.stopPropagation(); setOpen(false); }}
              aria-label="Cerrar menú"
              style={{zIndex: 100}}
            >
              <FaTimes />
            </button>
            <motion.div
              onClick={e => e.stopPropagation()}
              className="w-full flex flex-col items-center gap-10 mt-8 mb-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ delay: 0.1, duration: 0.2 }}
            >
              {children}
            </motion.div>
            <motion.img
              src="/img/logo/logo-pincha-pizza.webp"
              alt="Logo Pizzeria del Pincha"
              className="h-16 w-auto mt-6 drop-shadow-lg"
              style={{ maxWidth: '120px' }}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              transition={{ delay: 0.2, duration: 0.2 }}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};



// Componente contenedor simple, sin efecto scroll
BurgerMenu.Container = function BurgerMenuContainer({ children }) {
  return (
    <div className="md:flex flex-col items-center w-full md:w-auto">
      {children}
    </div>
  );
};

export default BurgerMenu;
