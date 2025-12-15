import { useMutation } from "@tanstack/react-query";
import { toast } from "react-toastify";
import { handleAdminLogin } from "../../api/api";

// ✅ Correct name: Admin Login
export const useAdminLoginMutation = () => {
  return useMutation({
    mutationKey: ["admin-login"],
    mutationFn: handleAdminLogin,

    onSuccess: (response) => {
      // 🔥 Server message priority
      const successMessage =
        response?.message ||
        response?.data?.message ||
        "Login successful";

      toast.success(successMessage);
    },

    onError: (error) => {
      // 🔥 Extract backend error safely
      const errorMessage =
        error?.response?.data?.message ||
        error?.response?.data?.msg ||
        "Something went wrong. Please try again.";

      toast.error(errorMessage);

      console.error("Admin login error:", error);
    },
  });
};
