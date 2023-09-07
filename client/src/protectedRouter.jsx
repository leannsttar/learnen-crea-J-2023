import { useEffect } from "react";
import { useSession } from "./components/Header/useSession";
import { useNavigate } from "react-router-dom";

const ProtectedRoute = ({children, needLogged=true}) => {
  const navigate = useNavigate();
  const { usuario } = useSession ();

  useEffect(()=> {
    if(!usuario && needLogged) return navigate("/login");

    if(usuario && !needLogged) return navigate("/redirect")
    
  },[])

  return children
}

export default ProtectedRoute