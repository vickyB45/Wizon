import React from "react";
import { useNavigate } from "react-router-dom";
import AdminLayout from "../layout/AdminLayout";
import { Mail, Calendar, Eye } from "lucide-react";
import LoaderOverlay from "../components/LoaderOverlay";
import { useAllContactsQuery, useMarkContactSeenMutation } from "../hook/query/contactQuery";

const formatDate = (iso) => {
  try {
    return new Date(iso).toLocaleDateString("en-IN", {
      day: "numeric",
      month: "short",
      year: "numeric",
    });
  } catch {
    return iso;
  }
};

const NewContact = () => {
  const navigate = useNavigate();

  // fetch all contacts
  const { data, isLoading } = useAllContactsQuery();

  // mark seen mutation
  const markSeen = useMarkContactSeenMutation();

  // only unseen contacts
  const unseenContacts =
    data?.data?.filter((c) => c.isSeen === false) || [];

  if (isLoading) {
    return <LoaderOverlay text="Loading new contacts..." />;
  }

  return (
    <AdminLayout>
      <div className="max-w-5xl mx-auto">
        <h1 className="text-xl font-bold text-gray-900 mb-6">
          New Contact Notifications
        </h1>

        {unseenContacts.length > 0 ? (
          <div className="bg-white rounded-xl border border-gray-200 divide-y">
            {unseenContacts.map((c) => (
              <div
                key={c._id}
                onClick={() => {
                  markSeen.mutate(c._id);
                  navigate(`/admin/contacts/${c._id}`);
                }}
                className="p-4 flex items-center justify-between cursor-pointer
                           hover:bg-gray-50 transition"
              >
                {/* LEFT */}
                <div className="flex items-center gap-4 min-w-0">
                  <div className="w-10 h-10 bg-purple-100 text-purple-600
                                  rounded-lg flex items-center justify-center
                                  font-bold text-sm">
                    {c.firstname?.[0]}
                    {c.lastname?.[0]}
                  </div>

                  <div className="min-w-0">
                    <p className="font-semibold text-gray-900 truncate">
                      {c.firstname} {c.lastname}
                    </p>
                    <p className="text-sm text-gray-500 truncate">
                      {c.email}
                    </p>
                    <div className="flex items-center gap-2 text-xs text-gray-400 mt-0.5">
                      <Calendar size={12} />
                      {formatDate(c.createdAt)}
                    </div>
                  </div>
                </div>

                {/* RIGHT */}
                <div className="flex items-center gap-2 text-purple-600 text-sm font-medium">
                  <Eye size={16} />
                  View
                </div>
              </div>
            ))}
          </div>
        ) : (
          // EMPTY STATE
          <div className="bg-white rounded-xl border border-gray-200 p-12 text-center">
            <Mail size={36} className="text-gray-300 mx-auto mb-4" />
            <p className="text-gray-600 font-medium">
              No new contact notifications
            </p>
            <p className="text-sm text-gray-400 mt-1">
              All contacts are seen
            </p>
          </div>
        )}
      </div>
    </AdminLayout>
  );
};

export default NewContact;
