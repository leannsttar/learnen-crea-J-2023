import axios from "axios";
import { createContext, useEffect, useState } from "react";
const SessionContext = createContext();

const obtenerPerfil = async (token) => {
  try {
    const configHeaders = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };
    const data = await axios.get("http://localhost:5000/perfil", configHeaders);
    return data;
  } catch (error) {
    return error;
  }
};

const SessionProvider = ({ children }) => {
  const [usuario, setUsuario] = useState({});
  const [loading, setLoading] = useState(true);

  const perfil = async () => {
    try {
      setLoading(true);
      const token = localStorage.getItem("token");
      const { data } = await obtenerPerfil(token ?? "");
      setUsuario(data);
      setLoading(false);
    } catch (error) {
      setLoading(false);
    }
  };

  const login = (usuario) => {
    localStorage.setItem("token", usuario.token);
    perfil();
  };
  const logout = () => {
    setUsuario({});
    localStorage.removeItem("token");
    window.location.href = "/";
  };

  useEffect(() => {
    perfil();
  }, []);



  if (loading) return <p>Cargando...</p>;

  return (
    <SessionContext.Provider
      value={{
        usuario,
        login,
        logout,
      }}
    >
      {children}
    </SessionContext.Provider>
  );
};

export { SessionContext, SessionProvider };
