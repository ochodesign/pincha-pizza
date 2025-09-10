import React from "react";
import { motion } from "framer-motion";
import { FaMapMarkerAlt } from "react-icons/fa";

const WHATSAPP_NUMBER = "5491164623427";

const UbicacionPizzeria = () => (
  <section
    className="relative py-12 px-4 flex flex-col items-center bg-white"
    style={{
      backgroundImage: "url('/img/bg-maps/bg-maps-section.webp')",
      backgroundAttachment: 'fixed',
      backgroundPosition: 'center',
      backgroundRepeat: 'no-repeat',
      backgroundSize: 'cover',
      zIndex: 1
    }}
  >
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.7, ease: 'easeOut' }}
      className="w-full flex flex-col items-center"
    >
      <motion.h2
        className="text-5xl sm:text-6xl font-chewy mb-10 drop-shadow font-extrabold text-center leading-tight"
        style={{ color: '#A25305' }}
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.7 }}
        transition={{ duration: 0.7, ease: 'easeOut' }}
      >
        ¿Dónde estamos?
      </motion.h2>
  <iframe
      title="Cancha de Estudiantes de Caseros"
      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3282.099964964839!2d-58.5563856!3d-34.6063572!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95bcb820452557af:0xb5bab51d59422c52!2sClub%20Atl%C3%A9tico%20Estudiantes!5e0!3m2!1ses-419!2sar!4v1690000000000!5m2!1ses-419!2sar"
      width="100%"
      height="300"
      style={{ border: 0 }}
      allowFullScreen=""
      loading="lazy"
      referrerPolicy="no-referrer-when-downgrade"
      className="rounded-lg shadow-lg max-w-xl w-full"
    ></iframe>
  <div className="flex justify-center mt-4">
      <a
        href="https://www.google.com/maps/dir/-34.6034779,-58.5550066/Club+Atl%C3%A9tico+Estudiantes,+Lisandro+de+la+Torre+2597+Caseros,+1678+Buenos+Aires/@-34.6049539,-58.5582138,18z/data=!3m1!4b1!4m9!4m8!1m1!4e1!1m5!1m1!1s0x95bcb820452557af:0xb5bab51d59422c52!2m2!1d-58.5563856!2d-34.6063572?entry=ttu&g_ep=EgoyMDI1MDkwMy4wIKXMDSoASAFQAw%3D%3D"
        target="_blank"
        rel="noopener noreferrer"
  className="bg-green-600 hover:bg-green-700 text-white font-bold px-6 py-2 rounded-full shadow-lg transition-all text-lg font-montserrat"
      >
        Cómo llegar
      </a>
    </div>
  <div className="mt-6 text-center bg-white/90 rounded-xl p-6 shadow-lg max-w-xl mx-auto">
  <p className="text-[#222] font-bold text-lg font-montserrat mb-2">Lisandro de la Torre 2597, Caseros, Buenos Aires</p>
      <p className="text-[#222] font-montserrat mb-1">WhatsApp: <a href={`https://wa.me/${WHATSAPP_NUMBER}`} className="text-green-700 underline font-bold">+54 9 11 6462-3427</a></p>
      <p className="text-[#222] font-montserrat mb-1">Email: <a href="mailto:contacto@pizzeriaestudiantes.com" className="text-green-700 underline font-bold">contacto@pizzeriaestudiantes.com</a></p>
      <p className="text-green-800 font-chewy text-xl mt-4 drop-shadow">¡Te esperamos con la mejor pizza!</p>
    </div>
    </motion.div>
  </section>
);

export default UbicacionPizzeria;
