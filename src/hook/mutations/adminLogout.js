import { useMutation } from "@tanstack/react-query";
import { toast } from "react-toastify";
import { handleAdminLogout } from "../../api/api";

export const useAdminLogout = () => {
  return useMutation({
    mutationKey: ["admin-logout"],
    mutationFn: handleAdminLogout,

    onSuccess: (data) => {
      toast.success(data?.message || "Logged out successfully");
    },

    onError: (error) => {
      const msg =
        error?.response?.data?.message || "Logout failed. Try again.";
      toast.error(msg);
    },
  });
};
