import React, { useState } from "react";
import AdminMensajes from "./AdminMensajes";
import EstadisticasVisitas from "../components/EstadisticasVisitas";
import { FaEnvelope, FaChartLine } from "react-icons/fa";

function AdminPanel() {
  const [seccionActiva, setSeccionActiva] = useState("mensajes");
  const usuario = localStorage.getItem("usuario");
  const rol = localStorage.getItem("rol");

  let bienvenida = "¡Bienvenido, administrador!";
  if (usuario === "karina") {
    bienvenida = "¡Bienvenida Karina a tu panel de administración!";
  }

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-start py-10">
      <div className="bg-white p-8 rounded-lg shadow-md text-center mb-8 w-full max-w-4xl">
        <h2 className="text-2xl font-bold mb-6 text-red-800">Panel de Administración</h2>
        <p className="mb-4">{bienvenida}</p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-4">
          <a href="/" className="text-sm text-red-700 underline">Ir al sitio principal</a>
          <button
            onClick={() => {
              localStorage.removeItem("rol");
              window.location.href = "/admin";
            }}
            className="text-sm text-gray-700 underline ml-4 bg-gray-200 px-4 py-2 rounded hover:bg-gray-300"
          >
            Cerrar sesión
          </button>
        </div>
        
        {/* Navegación de secciones */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center mt-6">
          <button 
            onClick={() => setSeccionActiva("mensajes")}
            className={`flex items-center gap-2 px-6 py-3 rounded-lg font-medium transition-colors ${
              seccionActiva === "mensajes" 
                ? "bg-red-600 text-white" 
                : "bg-gray-200 text-gray-700 hover:bg-gray-300"
            }`}
          >
            <FaEnvelope /> Mensajes de Contacto
          </button>
          <button 
            onClick={() => setSeccionActiva("estadisticas")}
            className={`flex items-center gap-2 px-6 py-3 rounded-lg font-medium transition-colors ${
              seccionActiva === "estadisticas" 
                ? "bg-red-600 text-white" 
                : "bg-gray-200 text-gray-700 hover:bg-gray-300"
            }`}
          >
            <FaChartLine /> Estadísticas de Visitas
          </button>
        </div>
      </div>
      
      {/* Contenido de la sección activa */}
      {seccionActiva === "mensajes" && <AdminMensajes />}
      {seccionActiva === "estadisticas" && <EstadisticasVisitas />}
    </div>
  );
}

export default AdminPanel;
