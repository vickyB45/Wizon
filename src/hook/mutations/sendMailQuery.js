import { useMutation } from "@tanstack/react-query";
import { handleContactForm } from "../../api/api";
import { toast } from "react-toastify";

export const useSendMailMutation = () => {
  return useMutation({
    mutationKey: ["sendMail"],
    mutationFn: handleContactForm,
    onSuccess: () => {
      toast.success("Message sent successfully!");
    },
    onError: (error) => {
      console.error("Error:", error);
    },
  });
};
