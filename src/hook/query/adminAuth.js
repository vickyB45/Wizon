// src/hooks/queries/useAdminMeQuery.js
import { useQuery } from "@tanstack/react-query";
import { fetchAdminMe } from "../../api/api";

export const useAdminMeQuery = () => {
  return useQuery({
    queryKey: ["admin-me"],
    queryFn: fetchAdminMe,
    retry: false, // 🔥 important: no infinite retry on 401
  });
};
