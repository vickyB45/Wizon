import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import {
  getTotalContacts,
  getContactStats,
  getAllContacts,
  getSingleContact,
  markContactAsSeen,
} from "../../api/api";

/* =====================================================
   🔢 TOTAL CONTACTS
===================================================== */
export const useTotalContactsQuery = () => {
  return useQuery({
    queryKey: ["contacts-total"],
    queryFn: getTotalContacts,
  });
};

/* =====================================================
   📊 CONTACT STATS (TOTAL / SEEN / UNSEEN)
===================================================== */
export const useContactStatsQuery = () => {
  return useQuery({
    queryKey: ["contacts-stats"],
    queryFn: getContactStats,
  });
};

/* =====================================================
   📋 ALL CONTACTS (ADMIN TABLE)
===================================================== */
export const useAllContactsQuery = () => {
  return useQuery({
    queryKey: ["contacts"],
    queryFn: getAllContacts,
  });
};

/* =====================================================
   🔍 SINGLE CONTACT (DETAIL PAGE)
===================================================== */
export const useSingleContactQuery = (id) => {
  return useQuery({
    queryKey: ["contact", id],
    queryFn: () => getSingleContact(id),
    enabled: !!id, // 🚀 prevent empty id call
  });
};

/* =====================================================
   👁 MARK CONTACT AS SEEN
===================================================== */
export const useMarkContactSeenMutation = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: markContactAsSeen,
    onSuccess: () => {
      // 🔄 Auto refresh related data
      queryClient.invalidateQueries(["contacts"]);
      queryClient.invalidateQueries(["contacts-stats"]);
    },
  });
};
