import React, { useState } from "react";
import { motion } from "framer-motion";
import { FaWhatsapp, FaUserAlt, FaEnvelope, FaCommentDots, FaPhoneAlt, FaInstagram } from "react-icons/fa";

const WHATSAPP_NUMBER = "5491164623427";

const FormularioContactoPizzeria = () => {
  const [form, setForm] = useState({ nombre: "", email: "", whatsapp: "", mensaje: "" });
  const [enviado, setEnviado] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setEnviado(true);
    // Enviar mensaje por WhatsApp con formato correcto
    const text = encodeURIComponent(
      `Hola! Soy ${form.nombre}\nEmail: ${form.email}\nWhatsApp: ${form.whatsapp}\nMensaje: ${form.mensaje}`
    );
    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${text}`, '_blank');
  };

  return (
    <motion.section
      className="bg-green-50 py-12 px-4 flex flex-col items-center"
      style={{
        backgroundImage: "url(/img/bg-pincha-cubiertos/bg-pincha-cubiertos.webp)",
        backgroundSize: '400px',
        backgroundRepeat: 'repeat',
        backgroundPosition: 'center',
      }}
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.7, ease: 'easeOut' }}
    >
      <motion.h2
        className="text-5xl sm:text-6xl font-chewy mb-4 drop-shadow font-extrabold text-center leading-tight"
        style={{ color: '#A25305' }}
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.7 }}
        transition={{ duration: 0.7, ease: 'easeOut' }}
      >
        Contacto
      </motion.h2>
      <p className="text-xl font-montserrat font-semibold text-[#234] mb-6 text-center max-w-xl drop-shadow-sm bg-white/80 rounded-xl px-6 py-3 mx-auto">
        ¿Tenés dudas, sugerencias o querés hacer un pedido especial?<br/>
        <span className="text-green-700 font-bold">¡Escribinos y te responderemos a la brevedad!</span>
      </p>
      <div className="flex justify-center gap-6 mb-6">
        <a
          href="https://wa.me/5491164623427"
          target="_blank"
          rel="noopener noreferrer"
          title="WhatsApp"
          className="rounded-full bg-white shadow-lg w-14 h-14 flex items-center justify-center text-green-600 hover:bg-green-600 hover:text-white transition-all text-3xl border-2 border-green-100 hover:border-green-600"
        >
          <FaWhatsapp />
        </a>
        <a
          href="https://instagram.com/pizzeriaestudiantes"
          target="_blank"
          rel="noopener noreferrer"
          title="Instagram"
          className="rounded-full bg-white shadow-lg w-14 h-14 flex items-center justify-center text-green-600 hover:bg-green-600 hover:text-white transition-all text-3xl border-2 border-green-100 hover:border-green-600"
        >
          <FaInstagram />
        </a>
      </div>
      {enviado ? (
        <div className="bg-green-100 text-green-800 px-6 py-4 rounded shadow mb-4">¡Gracias por tu mensaje! Te responderemos pronto.</div>
      ) : (
  <form onSubmit={handleSubmit} className="bg-white rounded-2xl shadow-xl p-8 w-full max-w-md flex flex-col gap-5 border-2 border-green-200 font-montserrat">
          <div className="relative flex items-center">
            <FaUserAlt className="absolute left-3 text-green-600 w-5 h-5" />
            <input
              type="text"
              name="nombre"
              placeholder="Tu nombre"
              value={form.nombre}
              onChange={handleChange}
              required
              className="pl-10 border border-green-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-green-400 text-lg w-full"
            />
          </div>
          <div className="relative flex items-center">
            <FaEnvelope className="absolute left-3 text-green-600 w-5 h-5" />
            <input
              type="email"
              name="email"
              placeholder="Tu email"
              value={form.email}
              onChange={handleChange}
              required
              className="pl-10 border border-green-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-green-400 text-lg w-full"
            />
          </div>
          <div className="relative flex items-center">
            <FaWhatsapp className="absolute left-3 text-green-600 w-5 h-5" />
            <input
              type="text"
              name="whatsapp"
              placeholder="Tu WhatsApp"
              value={form.whatsapp}
              onChange={handleChange}
              required
              className="pl-10 border border-green-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-green-400 text-lg w-full"
            />
          </div>
          <div className="w-full">
            <textarea
              name="mensaje"
              placeholder="Escribe tu mensaje..."
              value={form.mensaje}
              onChange={handleChange}
              required
              rows={4}
              className="border border-green-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-green-400 text-lg w-full"
            ></textarea>
          </div>
          <button
            type="submit"
            className="flex items-center justify-center gap-2 bg-green-600 hover:bg-green-700 text-white font-bold py-2 rounded-lg transition text-lg shadow"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M8 12h8m0 0l-4-4m4 4l-4 4" />
            </svg>
            Enviar mensaje
          </button>
        </form>
      )}
  </motion.section>
  );
};

export default FormularioContactoPizzeria;
