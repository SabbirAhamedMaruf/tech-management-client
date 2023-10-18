import { useContext } from "react";
import { AuthContext } from "../Context/AuthProvider";
import { Navigate } from "react-router-dom";
import { PropTypes } from "prop-types";

const PrivateRoutes = ({ children }) => {
  const { user, loading } = useContext(AuthContext);
  if (loading) {
    return;
  }
  if (user) {
    return children;
  }
  return <Navigate to="/Login">Login</Navigate>;
};

PrivateRoutes.propTypes = {
  children: PropTypes.node,
};

export default PrivateRoutes;
