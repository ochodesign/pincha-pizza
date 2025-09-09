import React from "react";
import { FaMapMarkerAlt } from "react-icons/fa";

const WHATSAPP_NUMBER = "5491164623427";

const UbicacionPizzeria = () => (
  <section className="bg-white py-12 px-4 flex flex-col items-center">
    <h2 className="text-4xl font-chewy text-orange-600 mb-6 flex items-center gap-2 drop-shadow"><FaMapMarkerAlt className="text-orange-500 w-8 h-8" />¿Dónde estamos?</h2>
    <iframe
      title="Ubicación Pizzería Buffet Estudiantes"
      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3282.123456789!2d-58.563456789!3d-34.6091234567!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95bcc7e123456789%3A0x123456789abcdef!2sBuffet%20de%20Estudiantes%20Caseros!5e0!3m2!1ses-419!2sar!4v1690000000000!5m2!1ses-419!2sar"
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
        className="bg-orange-600 hover:bg-orange-700 text-white font-bold px-6 py-2 rounded-full shadow-lg transition-all text-lg font-montserrat"
      >
        Cómo llegar
      </a>
    </div>
    <div className="mt-6 text-center">
      <p className="text-black font-bold text-lg font-montserrat">Av. Justo José de Urquiza 3400, Caseros, Buenos Aires</p>
  <p className="text-gray-700 font-montserrat">WhatsApp: <a href={`https://wa.me/${WHATSAPP_NUMBER}`} className="text-orange-600 underline font-bold">+54 9 11 6462-3427</a></p>
      <p className="text-gray-700 font-montserrat">Email: <a href="mailto:contacto@pizzeriaestudiantes.com" className="text-orange-600 underline font-bold">contacto@pizzeriaestudiantes.com</a></p>
      <p className="text-gray-700 font-montserrat">¡Te esperamos con la mejor pizza!</p>
    </div>
  </section>
);

export default UbicacionPizzeria;
