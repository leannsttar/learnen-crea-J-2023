import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useSession } from "./components/Header/useSession";


export const Redirect = () => {
    const { usuario } = useSession();
    const navigate = useNavigate();
  
    useEffect(() => {
      if (usuario.role == "admin") {
        navigate("/dashboard");
        return
      }
      if (usuario.role == "cliente") {
        navigate("/");
        return
      }
  
      navigate("/")
    }, [usuario]);
  
    return <div>Redirect</div>;
  };