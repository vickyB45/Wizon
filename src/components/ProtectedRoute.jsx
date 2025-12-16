// src/components/ProtectedRoute.jsx
import { Navigate, useLocation } from "react-router-dom";
import LoaderOverlay from "./LoaderOverlay";
import { useAdminMeQuery } from "../hook/query/adminAuth";
import { toast } from "react-toastify";

export default function ProtectedRoute({ children, allowGuest = false }) {
  const location = useLocation();
  const { data, isLoading, isError } = useAdminMeQuery();

  if (isLoading) {
    return <LoaderOverlay />;
  }

  // 🔁 LOGIN PAGE LOGIC
  if (allowGuest) {
    // admin already logged in → dashboard bhejo
    if (data?.success) {
      return <Navigate to="/admin" replace />;
    }
    return children;
  }

  // 🔐 PROTECTED ADMIN ROUTES
  if (isError || !data?.success) {
    return (
      <>
      
      <Navigate
        to="/admin/login"
        replace
        state={{ from: location }}
      />
      {toast.error("Unauthorized, Login first.")}
      </>
        );
  }

  return children;
}
