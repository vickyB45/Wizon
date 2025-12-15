// src/components/ProtectedRoute.jsx
import { Navigate, useLocation } from "react-router-dom";
import LoaderOverlay from "./LoaderOverlay";
import { useAdminMeQuery } from "../hook/query/adminAuth";

export default function ProtectedRoute({ children }) {
  const location = useLocation();
  const { data, isLoading, isError } = useAdminMeQuery();

  // ⏳ While checking admin session
  if (isLoading) {
    return <LoaderOverlay />;
  }

  // ❌ Not authenticated
  if (isError || !data?.success) {
    return (
      <Navigate
        to="/admin/login"
        replace
        state={{ from: location }} // 🔥 optional but pro
      />
    );
  }

  // ✅ Authenticated
  return children;
}
