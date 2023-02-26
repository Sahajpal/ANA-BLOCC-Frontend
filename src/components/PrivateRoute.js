import { useSelector } from "react-redux";
import { Navigate, Outlet } from "react-router-dom";

function PrivateRoute() {
  const token = useSelector((state) => state.auth.token);

  return token ? <Outlet /> : <Navigate to="/" />;
}

export default PrivateRoute;
