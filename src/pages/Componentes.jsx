import React from "react";
import Header from "../components/Header";
import BotonWhatsapp from "../components/BotonWhatsapp";
import BotonAlFormulario from "../components/BotonAlFormulario";
// Puedes importar más componentes reutilizables aquí

function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-200 py-10 mt-8">
      <div className="container mx-auto px-4 text-center text-xs">&copy; {new Date().getFullYear()} MiMarca. Todos los derechos reservados.</div>
    </footer>
  );
}

function ComponentesPage() {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col">
      <Header />
      <main className="flex-1 container mx-auto px-4 py-12">
        <h1 className="text-3xl font-bold mb-8 text-center text-gray-800">Componentes Reutilizables</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Botón WhatsApp */}
          <div className="bg-white rounded-xl shadow p-6 flex flex-col items-center gap-4">
            <h2 className="text-xl font-semibold mb-2">Botón WhatsApp</h2>
            <BotonWhatsapp telefono="5491112345678" mensaje="¡Hola! Quiero más info sobre tu servicio." />
          </div>
          {/* Botón al Formulario */}
          <div className="bg-white rounded-xl shadow p-6 flex flex-col items-center gap-4">
            <h2 className="text-xl font-semibold mb-2">Botón al Formulario</h2>
            <BotonAlFormulario />
          </div>
          {/* Aquí puedes agregar más bloques para otros componentes */}
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default ComponentesPage;
