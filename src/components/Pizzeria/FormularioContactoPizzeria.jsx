import React, { useState } from "react";
import { FaWhatsapp, FaUserAlt, FaEnvelope, FaCommentDots, FaPhoneAlt } from "react-icons/fa";

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
    <section className="bg-orange-50 py-12 px-4 flex flex-col items-center">
      <h2 className="text-4xl font-chewy text-orange-600 mb-2 flex items-center gap-2 drop-shadow">
        <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8 text-orange-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M21 12c0-4.97-4.03-9-9-9s-9 4.03-9 9c0 4.97 4.03 9 9 9 1.61 0 3.13-.41 4.44-1.13l3.25.87a1 1 0 001.22-1.22l-.87-3.25A8.96 8.96 0 0021 12z" />
        </svg>
        Contacto
      </h2>
      <p className="text-gray-700 font-montserrat mb-6 text-center max-w-md">¿Tenés dudas, sugerencias o querés hacer un pedido especial? Escribinos y te responderemos a la brevedad.</p>
      {enviado ? (
        <div className="bg-green-100 text-green-800 px-6 py-4 rounded shadow mb-4">¡Gracias por tu mensaje! Te responderemos pronto.</div>
      ) : (
  <form onSubmit={handleSubmit} className="bg-white rounded-2xl shadow-xl p-8 w-full max-w-md flex flex-col gap-5 border-2 border-orange-200 font-montserrat">
          <div className="relative flex items-center">
            <FaUserAlt className="absolute left-3 text-orange-400 w-5 h-5" />
            <input
              type="text"
              name="nombre"
              placeholder="Tu nombre"
              value={form.nombre}
              onChange={handleChange}
              required
              className="pl-10 border border-orange-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-orange-400 text-lg w-full"
            />
          </div>
          <div className="relative flex items-center">
            <FaEnvelope className="absolute left-3 text-orange-400 w-5 h-5" />
            <input
              type="email"
              name="email"
              placeholder="Tu email"
              value={form.email}
              onChange={handleChange}
              required
              className="pl-10 border border-orange-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-orange-400 text-lg w-full"
            />
          </div>
          <div className="relative flex items-center">
            <FaWhatsapp className="absolute left-3 text-orange-400 w-5 h-5" />
            <input
              type="text"
              name="whatsapp"
              placeholder="Tu WhatsApp"
              value={form.whatsapp}
              onChange={handleChange}
              required
              className="pl-10 border border-orange-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-orange-400 text-lg w-full"
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
              className="border border-orange-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-orange-400 text-lg w-full"
            ></textarea>
          </div>
          <button
            type="submit"
            className="flex items-center justify-center gap-2 bg-orange-600 hover:bg-orange-700 text-white font-bold py-2 rounded-lg transition text-lg shadow"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M8 12h8m0 0l-4-4m4 4l-4 4" />
            </svg>
            Enviar mensaje
          </button>
        </form>
      )}
    </section>
  );
};

export default FormularioContactoPizzeria;
