import { Navigate, Route } from "react-router-dom";
import { useSession } from "./useSession";

const PrivateRoute = ({ element, requireAuth, ...rest }) => {
    const { usuario } = useSession();

    if (requireAuth && !usuario) {
        return <Navigate to="/login" />;
    }
    return <Route {...rest} element={element} />;
};

export default PrivateRoute;
