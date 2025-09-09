
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function AdminLogin() {
  const [usuario, setUsuario] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    try {
      const res = await fetch("https://darkslategray-hedgehog-436235.hostingersite.com/backend/login.php", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ usuario, password })
      });
      const data = await res.json();
      if (data.success) {
        localStorage.setItem("rol", data.rol);
        localStorage.setItem("usuario", usuario);
        navigate("/admin/panel");
      } else {
        setError(data.error || "Usuario o contraseña incorrectos");
      }
    } catch {
      setError("Error de conexión");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <form
        onSubmit={handleSubmit}
        className="bg-white p-8 rounded-lg shadow-md flex flex-col items-center"
        style={{ minWidth: 320 }}
      >
        <h2 className="text-2xl font-bold mb-6 text-center text-red-800">Acceso Admin</h2>
        <input
          type="text"
          placeholder="Usuario"
          value={usuario}
          onChange={e => setUsuario(e.target.value)}
          className="border rounded px-4 py-2 w-full text-center mb-4"
          autoFocus
        />
        <div className="relative w-full mb-4">
          <input
            type={showPassword ? "text" : "password"}
            placeholder="Contraseña"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="border rounded px-4 py-2 w-full text-center pr-10"
          />
          <button
            type="button"
            onClick={() => setShowPassword((v) => !v)}
            className="absolute right-2 top-1/2 transform -translate-y-1/2 text-gray-600"
            tabIndex={-1}
            aria-label={showPassword ? "Ocultar contraseña" : "Mostrar contraseña"}
          >
            {showPassword ? (
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="#991B1B" strokeWidth="2" d="M3 12s3.5-7 9-7 9 7 9 7-3.5 7-9 7-9-7-9-7Z"/><circle cx="12" cy="12" r="3" stroke="#991B1B" strokeWidth="2"/></svg>
            ) : (
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="#991B1B" strokeWidth="2" d="M3 12s3.5-7 9-7 9 7 9 7-3.5 7-9 7-9-7-9-7Z"/><circle cx="12" cy="12" r="3" stroke="#991B1B" strokeWidth="2"/><path stroke="#991B1B" strokeWidth="2" d="M2 2l20 20"/></svg>
            )}
          </button>
        </div>
        {error && <div className="text-red-600 mb-2">{error}</div>}
        <button
          type="submit"
          className="bg-red-800 text-white px-6 py-2 rounded font-semibold w-full"
        >
          Ingresar
        </button>
        <a href="/" className="mt-4 text-sm text-red-700 underline">Ir al sitio principal</a>
      </form>
    </div>
  );
}

export default AdminLogin;
