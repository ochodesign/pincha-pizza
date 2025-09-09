
import React from "react";
import Header from "../components/Header";
import { Link } from "react-router-dom";
import TodoApp from "./TodoApp";

function Recreo() {
  return (
    <>
      <Header currentPage="Recreo" />
      <Header currentPage="Recreo" />
      <main className="max-w-3xl mx-auto mt-24 p-4">
        <nav className="mb-4 text-sm text-gray-500">
          <Link to="/" className="hover:underline text-blue-600">Inicio</Link> / Recreo
        </nav>
        <h1 className="text-3xl font-bold mb-6">Zona de Recreo</h1>
        <section className="mb-8">
          <h2 className="text-xl font-semibold mb-2">Ejercicio: Lista de Tareas (To-Do List)</h2>
          <p className="mb-4 text-gray-600">Agregá, completá y eliminá tareas. Hecho con React y Tailwind.</p>
          <TodoApp />
        </section>
      </main>
      {/* Fin del contenido de la página */}
    </>
  );
}

export default Recreo;
