// src/hooks/queries/useAdminMeQuery.js
import { useQuery } from "@tanstack/react-query";
import { systemStatus } from "../../api/api";

export const useSystemHelth = () => {
  return useQuery({
    queryKey: ["system-helth"],
    queryFn: systemStatus,
    retry: false, 
  });
};