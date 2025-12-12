// src/components/ProtectedRoute.jsx
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

export default function ProtectedRoute({ children }) {
  const reduxAuth = useSelector((state) => state.adminAuth.isAuthenticated);
  const localAuth = JSON.parse(localStorage.getItem("adminAuth"));

  const isAuthenticated = reduxAuth || localAuth;

  if (!isAuthenticated) {
    return <Navigate to="/admin/login" replace />;
  }

  return children;
}
