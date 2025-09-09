import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Instagram, Facebook } from 'lucide-react';

const Contacto = () => {
  const [form, setForm] = useState({
    nombre: '',
    email: '',
    telefono: '',
    consulta: '',
    mensaje: ''
  });
  const [enviado, setEnviado] = useState(false);

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
  const res = await fetch("https://darkslategray-hedgehog-436235.hostingersite.com/backend/contact.php", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(form)
      });
      const data = await res.json();
      if (data.success) {
        setEnviado(true);
        setForm({ nombre: '', email: '', telefono: '', consulta: '', mensaje: '' });
        setTimeout(() => setEnviado(false), 3000);
      } else {
        alert(data.message || "Error al enviar el mensaje");
      }
    } catch {
      alert("No se pudo conectar con el servidor");
    }
  };

  return (
  <section id="contacto" className="relative py-16 bg-[#7a1f2a]">
  <div className="max-w-6xl mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-bold mb-4 text-white drop-shadow">Contacto</h2>
          <p className="text-lg text-white/80 max-w-2xl mx-auto">
            ¿Listo para capturar tus momentos especiales? Contáctame y hablemos sobre tu proyecto fotográfico.
          </p>
        </motion.div>

  <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Información de contacto */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <h3 className="text-2xl font-semibold mb-6 text-white">Información de Contacto</h3>
            
            <div className="flex items-center space-x-4">
              <Mail className="text-red-600" size={24} />
              <div>
                <div className="font-medium text-white">Email</div>
                <div className="text-white/80">karina8a@fotografia.com</div>
              </div>
            </div>

            <div className="flex items-center space-x-4">
              <Phone className="text-red-600" size={24} />
              <div>
                <div className="font-medium text-white">Teléfono</div>
                <div className="text-white/80">+1 (555) 123-4567</div>
              </div>
            </div>

            <div className="flex items-center space-x-4">
              <MapPin className="text-red-600" size={24} />
              <div>
                <div className="font-medium text-white">Ubicación</div>
                <div className="text-white/80">Buenos Aires, Argentina</div>
              </div>
            </div>

            <div className="pt-6">
              <h4 className="font-medium mb-4 text-white">Sígueme en redes sociales</h4>
              <div className="flex space-x-4">
                <a href="#" className="text-red-600 hover:text-black transition-colors">
                  <Instagram size={24} />
                </a>
                <a href="#" className="text-red-600 hover:text-black transition-colors">
                  <Facebook size={24} />
                </a>
              </div>
            </div>
          </motion.div>
          {/* Formulario de contacto */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="relative p-8 rounded-xl shadow-lg border-2 border-white bg-[#5a1620]"
          >
            {/* SVG decorativo superior del formulario */}
            <svg className="absolute -top-8 left-0 w-full h-8" viewBox="0 0 1440 40" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M0,40 C480,0 960,80 1440,40 L1440,0 L0,0 Z" fill="#7a1f2a" />
            </svg>
            <h3 className="text-2xl font-semibold mb-6 text-white drop-shadow">Envíame un mensaje</h3>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="nombre" className="block text-sm font-medium text-white mb-2">
                  Nombre completo
                </label>
                <input
                  type="text"
                  id="nombre"
                  name="nombre"
                  value={form.nombre}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-white rounded-lg focus:ring-2 focus:ring-[#7a1f2a] focus:border-transparent bg-[#7a1f2a] text-white placeholder-white/80"
                  placeholder="Ej: Karina Ochoa"
                />
              </div>
              <div>
                <label htmlFor="consulta" className="block text-sm font-medium text-white mb-2">
                  Tipo de consulta
                </label>
                <select
                  id="consulta"
                  name="consulta"
                  value={form.consulta}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-white rounded-lg focus:ring-2 focus:ring-[#7a1f2a] focus:border-transparent bg-[#7a1f2a] text-white"
                >
                  <option value="" disabled>Selecciona una opción</option>
                  <option value="Almanaques">Almanaques</option>
                  <option value="Servicio">Servicio</option>
                  <option value="Otra consulta">Otra consulta</option>
                </select>
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-white mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={form.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-white rounded-lg focus:ring-2 focus:ring-[#7a1f2a] focus:border-transparent bg-[#7a1f2a] text-white placeholder-white/80"
                  placeholder="Ej: karina@email.com"
                />
              </div>

              <div>
                <label htmlFor="telefono" className="block text-sm font-medium text-white mb-2">
                  Teléfono (opcional)
                </label>
                <input
                  type="tel"
                  id="telefono"
                  name="telefono"
                  value={form.telefono}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-white rounded-lg focus:ring-2 focus:ring-[#7a1f2a] focus:border-transparent bg-[#7a1f2a] text-white placeholder-white/80"
                  placeholder="Ej: 11 1234-5678"
                />
              </div>

              <div>
                <label htmlFor="mensaje" className="block text-sm font-medium text-white mb-2">
                  Mensaje
                </label>
                <textarea
                  id="mensaje"
                  name="mensaje"
                  value={form.mensaje}
                  onChange={handleChange}
                  required
                  rows={4}
                  className="w-full px-4 py-3 border border-white rounded-lg focus:ring-2 focus:ring-[#7a1f2a] focus:border-transparent bg-[#7a1f2a] text-white placeholder-white/80"
                  placeholder="Cuéntame sobre tu proyecto fotográfico..."
                />
              </div>

              <motion.button
                type="submit"
                whileTap={{ scale: 0.95 }}
                className="w-full bg-white text-[#7a1f2a] py-3 rounded-lg font-bold hover:bg-[#7a1f2a] hover:text-white transition-colors border-2 border-white shadow"
              >
                {enviado ? '¡Mensaje enviado!' : 'Enviar mensaje'}
              </motion.button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contacto;
