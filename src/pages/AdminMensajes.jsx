
// Función para formatear el número de WhatsApp correctamente para Argentina
function formatearTelefonoWsp(telefono) {
  let num = (telefono + "").replace(/[^0-9]/g, "");
  if (num.startsWith("0")) num = num.substring(1);
  if (num.startsWith("549")) return num;
  if (num.length === 10 && num.startsWith("11")) return "549" + num;
  if (num.length === 10) return "549" + num;
  if (num.length === 8) return "549351" + num;
  return num;
}

import React, { useEffect, useState } from "react";
import { FaEnvelope, FaWhatsapp, FaCheck, FaSearch, FaFileExcel, FaEdit, FaTrash, FaTimes, FaSave, FaExclamationTriangle } from "react-icons/fa";
import * as XLSX from "xlsx";
import { saveAs } from "file-saver";

function AdminMensajes() {
  const [mensajes, setMensajes] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const [search, setSearch] = useState("");
  const [editando, setEditando] = useState(null);
  const [eliminando, setEliminando] = useState(null);
  const [formEdit, setFormEdit] = useState({
    nombre: "",
    email: "",
    telefono: "",
    consulta: "",
    mensaje: ""
  });

  useEffect(() => {
    fetch("https://darkslategray-hedgehog-436235.hostingersite.com/backend/get-contactos.php")
      .then((res) => res.json())
      .then((data) => {
        if (data.success) {
          setMensajes(data.contactos);
        } else {
          setError(data.message || "Error al cargar los mensajes");
        }
        setLoading(false);
      })
      .catch(() => {
        setError("No se pudo conectar con el backend");
        setLoading(false);
      });
  }, []);

  const marcarLeido = async (id) => {
    try {
      const res = await fetch("https://darkslategray-hedgehog-436235.hostingersite.com/backend/marcar-leido.php", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: `id=${id}`
      });
      const data = await res.json();
      if (data.success) {
        setMensajes((prev) => prev.map((m) => m.id === id ? { ...m, leido: 1 } : m));
      }
    } catch {}
  };

  const iniciarEdicion = (mensaje) => {
    setFormEdit({
      nombre: mensaje.nombre,
      email: mensaje.email,
      telefono: mensaje.telefono || "",
      consulta: mensaje.consulta,
      mensaje: mensaje.mensaje
    });
    setEditando(mensaje.id);
  };

  const cancelarEdicion = () => {
    setEditando(null);
    setFormEdit({
      nombre: "",
      email: "",
      telefono: "",
      consulta: "",
      mensaje: ""
    });
  };

  const guardarEdicion = async () => {
    try {
      const res = await fetch("https://darkslategray-hedgehog-436235.hostingersite.com/backend/editar-contacto.php", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          id: editando,
          ...formEdit
        })
      });
      
      if (!res.ok) {
        throw new Error(`Error HTTP: ${res.status}`);
      }
      
      const data = await res.json();
      if (data.success) {
        setMensajes((prev) => prev.map((m) => 
          m.id === editando ? { ...m, ...formEdit } : m
        ));
        cancelarEdicion();
        setError(""); // Limpiar errores previos
        setSuccess("Contacto actualizado correctamente");
        setTimeout(() => setSuccess(""), 3000);
      } else {
        throw new Error(data.error || "Error al actualizar el contacto");
      }
    } catch (error) {
      console.error("Error actualizando contacto:", error);
      setError(`Error al actualizar el contacto: ${error.message}`);
    }
  };

  const eliminarContacto = async (id, nombre) => {
    try {
      console.log('Eliminando contacto:', id);
      const res = await fetch("https://darkslategray-hedgehog-436235.hostingersite.com/backend/eliminar-contacto.php", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ id: Number(id) })
      });
      console.log('Respuesta eliminar:', res);
      if (!res.ok) {
        throw new Error(`Error HTTP: ${res.status}`);
      }
      const data = await res.json();
      console.log('Data eliminar:', data);
      if (data.success) {
        setMensajes((prev) => prev.filter((m) => m.id !== id));
        setEliminando(null);
        setError("");
        setSuccess("Contacto eliminado correctamente");
        setTimeout(() => setSuccess(""), 3000);
      } else {
        throw new Error(data.error || "Error al eliminar el contacto");
      }
    } catch (error) {
      console.error("Error eliminando contacto:", error);
      setError(`Error al eliminar el contacto: ${error.message}`);
      setEliminando(null);
    }
  };

  const iniciarEliminacion = (mensaje) => {
    setEliminando(mensaje);
  };

  const cancelarEliminacion = () => {
    setEliminando(null);
  };

  const exportarExcel = () => {
    const ws = XLSX.utils.json_to_sheet(mensajes);
    const wb = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb, ws, "Mensajes");
    const excelBuffer = XLSX.write(wb, { bookType: "xlsx", type: "array" });
    saveAs(new Blob([excelBuffer], { type: "application/octet-stream" }), "mensajes-contacto.xlsx");
  };

  const mensajesFiltrados = mensajes.filter((msg) => {
    const texto = `${msg.nombre} ${msg.email} ${msg.telefono} ${msg.consulta} ${msg.mensaje}`.toLowerCase();
    return texto.includes(search.toLowerCase());
  });

  if (loading) return <div>Cargando mensajes...</div>;

  // Resumen de mensajes
  const totalMensajes = mensajes.length;
  const nuevosMensajes = mensajes.filter(m => m.leido === 0 || m.leido === '0' || m.leido === false).length;

  return (
    <div className="p-6 max-w-4xl mx-auto">
      {/* Mensajes de éxito y error */}
      {success && (
        <div className="mb-4 p-4 bg-green-100 border border-green-400 text-green-700 rounded">
          {success}
        </div>
      )}
      {error && (
        <div className="mb-4 p-4 bg-red-100 border border-red-400 text-red-700 rounded">
          {error}
        </div>
      )}
      
      <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-6 gap-4">
        <div>
          <h3 className="text-xl font-bold text-red-800 mb-2">Mensajes de Contacto</h3>
          <div className="flex gap-6 text-sm">
            <span className="bg-red-100 text-red-700 px-3 py-1 rounded font-semibold">Nuevos: {nuevosMensajes}</span>
            <span className="bg-gray-100 text-gray-700 px-3 py-1 rounded font-semibold">Total: {totalMensajes}</span>
          </div>
        </div>
        <div className="flex gap-2 items-center mt-4 md:mt-0">
          <input
            type="text"
            placeholder="Buscar..."
            value={search}
            onChange={e => setSearch(e.target.value)}
            className="border rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-red-400"
          />
          <button onClick={exportarExcel} className="bg-green-600 text-white px-3 py-2 rounded flex items-center gap-2 hover:bg-green-700">
            <FaFileExcel /> Exportar Excel
          </button>
        </div>
      </div>
      {mensajesFiltrados.length === 0 ? (
        <div>No hay mensajes.</div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {mensajesFiltrados.map((msg) => (
            <div key={msg.id} className={`relative bg-white rounded-xl shadow-lg p-6 border-l-4 ${(msg.leido === 0 || msg.leido === '0' || msg.leido === false) ? 'border-red-600' : 'border-gray-400'}`}>
              {(msg.leido === 0 || msg.leido === '0' || msg.leido === false) && (
                <span className="absolute top-2 right-2 bg-red-600 text-white text-xs px-2 py-1 rounded">Nuevo</span>
              )}
              
              {/* Nombre y botones de contacto */}
              <div className={`mb-3 flex items-center justify-between ${(msg.leido === 0 || msg.leido === '0' || msg.leido === false) ? 'mt-6' : ''}`}>
                <span className="font-bold text-lg text-red-800">{msg.nombre}</span>
                <div className="flex gap-2">
                  {msg.telefono && (
                    <a 
                      href={`https://wa.me/${formatearTelefonoWsp(msg.telefono)}?text=Hola ${msg.nombre}, te contacto desde la web de Karina 8a. Vi tu consulta sobre \"${msg.consulta}\" y me gustaría ayudarte.`}
                      target="_blank" 
                      rel="noopener noreferrer" 
                      title="Conectar por WhatsApp con un click"
                      className="bg-green-500 text-white px-3 py-1 rounded-full text-sm hover:bg-green-600 flex items-center gap-1 transition-colors"
                    >
                      <FaWhatsapp size={16} />
                      WhatsApp
                    </a>
                  )}


                  <a 
                    href={`mailto:${msg.email}?subject=Re: ${msg.consulta}&body=Hola ${msg.nombre},%0D%0A%0D%0ARecibí tu consulta sobre "${msg.consulta}" y me gustaría responderte.%0D%0A%0D%0ASaludos,%0D%0AKarina 8a`}
                    title="Enviar email con un click" 
                    className="bg-blue-500 text-white px-3 py-1 rounded-full text-sm hover:bg-blue-600 flex items-center gap-1 transition-colors"
                  >
                    <FaEnvelope size={16} />
                    Email
                  </a>
                </div>
              </div>

              {/* Datos de contacto visibles */}
              <div className="mb-3 p-3 bg-gray-50 rounded-lg">
                <div className="grid grid-cols-1 gap-2 text-sm">
                  <div className="flex flex-col">
                    <strong className="text-gray-600 mb-1">Email:</strong>
                    <span className="text-blue-600 break-all">{msg.email}</span>
                  </div>
                  {msg.telefono && (
                    <div className="flex flex-col">
                      <strong className="text-gray-600 mb-1">WhatsApp:</strong>
                      <span className="text-green-600">{msg.telefono}</span>
                    </div>
                  )}
                </div>
              </div>

              <div className="mb-1 text-gray-700"><strong>Consulta:</strong> {msg.consulta}</div>
              <div className="mb-2 text-gray-700"><strong>Mensaje:</strong> {msg.mensaje}</div>
              <div className="text-xs text-gray-500 mb-3">{msg.fecha}</div>
              
              <div className="flex gap-2 items-center flex-wrap">
                {(msg.leido === 0 || msg.leido === '0' || msg.leido === false) && (
                  <button onClick={() => marcarLeido(msg.id)} className="bg-red-600 text-white px-3 py-1 rounded flex items-center gap-1 hover:bg-red-700 transition-colors">
                    <FaCheck /> Marcar como leído
                  </button>
                )}
                <button onClick={() => iniciarEdicion(msg)} className="bg-blue-600 text-white px-3 py-1 rounded flex items-center gap-1 hover:bg-blue-700 transition-colors">
                  <FaEdit /> Editar
                </button>
                <button onClick={() => iniciarEliminacion(msg)} className="bg-red-500 text-white px-3 py-1 rounded flex items-center gap-1 hover:bg-red-600 transition-colors">
                  <FaTrash /> Eliminar
                </button>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Modal de edición */}
      {editando && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-lg max-w-md w-full max-h-[90vh] overflow-y-auto">
            <div className="p-6">
              <div className="flex justify-between items-center mb-4">
                <h3 className="text-lg font-bold text-red-800">Editar Contacto</h3>
                <button onClick={cancelarEdicion} className="text-gray-500 hover:text-gray-700">
                  <FaTimes size={20} />
                </button>
              </div>
              
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Nombre</label>
                  <input
                    type="text"
                    value={formEdit.nombre}
                    onChange={(e) => setFormEdit({...formEdit, nombre: e.target.value})}
                    className="w-full border rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-red-400"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                  <input
                    type="email"
                    value={formEdit.email}
                    onChange={(e) => setFormEdit({...formEdit, email: e.target.value})}
                    className="w-full border rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-red-400"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">WhatsApp</label>
                  <input
                    type="text"
                    value={formEdit.telefono}
                    onChange={(e) => setFormEdit({...formEdit, telefono: e.target.value})}
                    className="w-full border rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-red-400"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Consulta</label>
                  <select
                    value={formEdit.consulta}
                    onChange={(e) => setFormEdit({...formEdit, consulta: e.target.value})}
                    className="w-full border rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-red-400"
                  >
                    <option value="Almanaques">Almanaques</option>
                    <option value="Servicio">Servicio</option>
                    <option value="Otra consulta">Otra consulta</option>
                  </select>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Mensaje</label>
                  <textarea
                    value={formEdit.mensaje}
                    onChange={(e) => setFormEdit({...formEdit, mensaje: e.target.value})}
                    rows={4}
                    className="w-full border rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-red-400"
                  />
                </div>
              </div>
              
              <div className="flex gap-2 mt-6">
                <button onClick={guardarEdicion} className="flex-1 bg-green-600 text-white px-4 py-2 rounded flex items-center justify-center gap-2 hover:bg-green-700 transition-colors">
                  <FaSave /> Guardar
                </button>
                <button onClick={cancelarEdicion} className="flex-1 bg-gray-500 text-white px-4 py-2 rounded flex items-center justify-center gap-2 hover:bg-gray-600 transition-colors">
                  <FaTimes /> Cancelar
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Modal de confirmación de eliminación */}
      {eliminando && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-lg max-w-md w-full">
            <div className="p-6">
              <div className="flex items-center mb-4">
                <div className="mx-auto flex-shrink-0 flex items-center justify-center h-12 w-12 rounded-full bg-red-100">
                  <FaExclamationTriangle className="h-6 w-6 text-red-600" />
                </div>
              </div>
              
              <div className="text-center">
                <h3 className="text-lg font-medium text-gray-900 mb-2">
                  Confirmar eliminación
                </h3>
                <p className="text-sm text-gray-500 mb-4">
                  ¿Estás seguro de que deseas eliminar el contacto de <strong>{eliminando.nombre}</strong>?
                </p>
                <p className="text-xs text-gray-400 mb-6">
                  Esta acción no se puede deshacer.
                </p>
              </div>
              
              <div className="flex gap-3">
                <button 
                  onClick={cancelarEliminacion}
                  className="flex-1 bg-gray-300 text-gray-700 px-4 py-2 rounded hover:bg-gray-400 transition-colors font-medium"
                >
                  Cancelar
                </button>
                <button 
                  onClick={() => eliminarContacto(eliminando.id, eliminando.nombre)}
                  className="flex-1 bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700 transition-colors font-medium"
                >
                  Eliminar
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default AdminMensajes;
