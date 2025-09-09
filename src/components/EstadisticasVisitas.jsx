import React, { useEffect, useState } from "react";
import { FaEye, FaUsers, FaCalendarDay, FaCalendarWeek, FaCalendarAlt, FaChartLine } from "react-icons/fa";

function EstadisticasVisitas() {
  const [estadisticas, setEstadisticas] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    fetch("https://darkslategray-hedgehog-436235.hostingersite.com/backend/get-estadisticas.php")
      .then((res) => res.json())
      .then((data) => {
        if (data.success) {
          setEstadisticas(data.estadisticas);
        } else {
          setError(data.error || "Error al cargar las estadísticas");
        }
        setLoading(false);
      })
      .catch(() => {
        setError("No se pudo conectar con el backend");
        setLoading(false);
      });
  }, []);

  if (loading) return <div className="p-4">Cargando estadísticas...</div>;
  if (error) return <div className="p-4 text-red-600">{error}</div>;

  const formatFecha = (fecha) => {
    const date = new Date(fecha);
    return date.toLocaleDateString('es-ES', { 
      weekday: 'short', 
      day: 'numeric', 
      month: 'short' 
    });
  };

  return (
    <div className="p-6 max-w-4xl mx-auto">
      <h2 className="text-2xl font-bold text-red-800 mb-6 flex items-center gap-2">
        <FaChartLine /> Estadísticas de Visitantes
      </h2>
      
      {/* Cards principales */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
        <div className="bg-gradient-to-r from-blue-500 to-blue-600 text-white rounded-xl p-6 shadow-lg">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-blue-100 text-sm">Visitantes Hoy</p>
              <p className="text-3xl font-bold">{estadisticas.visitantes_hoy}</p>
            </div>
            <FaCalendarDay size={40} className="text-blue-200" />
          </div>
        </div>

        <div className="bg-gradient-to-r from-green-500 to-green-600 text-white rounded-xl p-6 shadow-lg">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-green-100 text-sm">Esta Semana</p>
              <p className="text-3xl font-bold">{estadisticas.visitantes_semana}</p>
            </div>
            <FaCalendarWeek size={40} className="text-green-200" />
          </div>
        </div>

        <div className="bg-gradient-to-r from-purple-500 to-purple-600 text-white rounded-xl p-6 shadow-lg">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-purple-100 text-sm">Este Mes</p>
              <p className="text-3xl font-bold">{estadisticas.visitantes_mes}</p>
            </div>
            <FaCalendarAlt size={40} className="text-purple-200" />
          </div>
        </div>

        <div className="bg-gradient-to-r from-red-500 to-red-600 text-white rounded-xl p-6 shadow-lg">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-red-100 text-sm">Total Visitantes</p>
              <p className="text-3xl font-bold">{estadisticas.total_visitantes}</p>
              <p className="text-red-200 text-xs">Únicos</p>
            </div>
            <FaUsers size={40} className="text-red-200" />
          </div>
        </div>

        <div className="bg-gradient-to-r from-yellow-500 to-orange-500 text-white rounded-xl p-6 shadow-lg">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-yellow-100 text-sm">Total Visitas</p>
              <p className="text-3xl font-bold">{estadisticas.total_visitas}</p>
              <p className="text-yellow-200 text-xs">Todas</p>
            </div>
            <FaEye size={40} className="text-yellow-200" />
          </div>
        </div>
      </div>

      {/* Gráfico de visitas por día */}
      <div className="bg-white rounded-xl shadow-lg p-6">
        <h3 className="text-lg font-bold text-gray-800 mb-4">Visitantes por Día (Últimos 7 días)</h3>
        {estadisticas.visitas_por_dia && estadisticas.visitas_por_dia.length > 0 ? (
          <div className="space-y-3">
            {estadisticas.visitas_por_dia.map((dia) => {
              const porcentaje = estadisticas.visitantes_semana > 0 
                ? (dia.visitantes / estadisticas.visitantes_semana) * 100 
                : 0;
              
              return (
                <div key={dia.fecha} className="flex items-center gap-4">
                  <div className="w-20 text-sm text-gray-600">
                    {formatFecha(dia.fecha)}
                  </div>
                  <div className="flex-1 bg-gray-200 rounded-full h-6 relative">
                    <div 
                      className="bg-gradient-to-r from-blue-500 to-purple-500 h-6 rounded-full flex items-center justify-center text-white text-sm font-medium"
                      style={{ width: `${Math.max(porcentaje, 10)}%` }}
                    >
                      {dia.visitantes > 0 && dia.visitantes}
                    </div>
                  </div>
                  <div className="w-16 text-sm text-gray-600 text-right">
                    {dia.visitantes} {dia.visitantes === 1 ? 'visitante' : 'visitantes'}
                  </div>
                </div>
              );
            })}
          </div>
        ) : (
          <p className="text-gray-500 text-center py-8">No hay datos de visitas disponibles</p>
        )}
      </div>

      <div className="mt-6 text-center text-sm text-gray-500">
        <p>Los visitantes únicos se contabilizan por IP. Las visitas repetidas de la misma IP en 30 minutos se consideran como una sola visita.</p>
      </div>
    </div>
  );
}

export default EstadisticasVisitas;
