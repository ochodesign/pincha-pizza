import React, { useState } from "react";

const preguntas = [
  {
    pregunta: "¿Qué materiales utilizan para la impresión?",
    respuesta: "Trabajamos con papeles premium, vinilos, cartulinas y materiales resistentes para cada producto."
  },
  {
    pregunta: "¿Puedo pedir diseños personalizados?",
    respuesta: "Sí, todos los productos se diseñan a medida según tu necesidad y marca."
  },
  {
    pregunta: "¿Realizan envíos?",
    respuesta: "Sí, enviamos a todo el país y coordinamos entregas en colegios y empresas."
  },
  {
    pregunta: "¿Cuánto tarda el proceso?",
    respuesta: "El tiempo depende del producto, pero siempre priorizamos la calidad y la entrega puntual."
  }
];

export default function PreguntasGrafico() {
  const [openIdx, setOpenIdx] = useState(null);
  return (
    <section className="py-16 bg-[#f8f8fa]">
      <div className="max-w-3xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-[#7a1f2a] mb-10 text-center">Preguntas frecuentes</h2>
        <div className="space-y-6">
          {preguntas.map((item, idx) => (
            <div key={idx} className="bg-white rounded-xl shadow border-2 border-[#7a1f2a]/10 overflow-hidden">
              <button
                className="w-full flex justify-between items-center px-6 py-5 text-left font-semibold text-lg text-[#7a1f2a] focus:outline-none"
                onClick={() => setOpenIdx(openIdx === idx ? null : idx)}
                aria-expanded={openIdx === idx}
              >
                {item.pregunta}
                <span className={`ml-2 transition-transform duration-200 ${openIdx === idx ? 'rotate-180' : ''}`}>▼</span>
              </button>
              {openIdx === idx && (
                <div className="px-6 pb-5 text-gray-700 animate-fadein">
                  {item.respuesta}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
      <style>{`
        @keyframes fadein {
          0% { opacity: 0; transform: translateY(-10px); }
          100% { opacity: 1; transform: translateY(0); }
        }
        .animate-fadein {
          animation: fadein 0.3s ease;
        }
      `}</style>
    </section>
  );
}

