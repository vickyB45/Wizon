import { useParams, Link } from "react-router-dom";
import LoaderOverlay from "../components/LoaderOverlay";
import { useSingleContactQuery } from "../hook/query/contactQuery";
import {
  ArrowLeft,
  User,
  Mail,
  Phone,
  Building2,
  Calendar,
  MessageSquare,
  DollarSign,
  Target,
  Eye,
  EyeOff,
  Clock,
} from "lucide-react";
import AdminLayout from "../layout/AdminLayout";

export default function ContactDetails() {
  const { id } = useParams();
  const { data, isLoading, isError } = useSingleContactQuery(id);
  const contact = data?.data;

  if (isLoading) return <LoaderOverlay />;

  if (isError || !contact) {
    return (
      <AdminLayout>
        <div className="min-h-screen flex items-center justify-center bg-gray-50">
          <div className="text-center">
            <MessageSquare className="mx-auto mb-3 text-gray-400" size={36} />
            <h2 className="text-lg font-semibold">Contact not found</h2>
            <Link
              to="/admin/contacts"
              className="mt-3 inline-flex items-center gap-2 text-sm text-gray-600 hover:underline"
            >
              <ArrowLeft size={16} />
              Back to contacts
            </Link>
          </div>
        </div>
      </AdminLayout>
    );
  }

  return (
    <AdminLayout>
      <div className="min-h-screen  p-4 sm:p-6">
        <div className="max-w-5xl mx-auto">

          {/* BACK */}
          <Link
            to="/admin/contacts"
            className="inline-flex items-center gap-2 text-sm text-gray-600 hover:text-gray-900 mb-4"
          >
            <ArrowLeft size={16} />
            Back to Contacts
          </Link>

          {/* HEADER */}
          <div className="bg-white border border-gray-200 rounded-xl p-6 mb-6">
            <div className="flex items-center justify-between gap-4 flex-wrap">
              <div className="flex items-center gap-4">
                <div className="w-14 h-14 bg-gray-900 text-white rounded-lg flex items-center justify-center font-bold">
                  {contact.firstname[0]}
                  {contact.lastname[0]}
                </div>
                <div>
                  <h1 className="text-xl font-bold text-gray-900">
                    {contact.firstname} {contact.lastname}
                  </h1>
                  <div className="flex items-center gap-3 text-xs text-gray-500 mt-1">
                    <span className="flex items-center gap-1">
                      <Clock size={12} />
                      {new Date(contact.createdAt).toLocaleString()}
                    </span>
                    <span className="flex items-center gap-1">
                      <Calendar size={12} />
                      {contact.source || "Direct"}
                    </span>
                  </div>
                </div>
              </div>

              <span
                className={`px-3 py-1 rounded-md text-xs font-semibold ${
                  contact.isSeen
                    ? "bg-green-100 text-green-700"
                    : "bg-amber-100 text-amber-700"
                }`}
              >
                {contact.isSeen ? (
                  <span className="flex items-center gap-1">
                    <Eye size={14} /> Seen
                  </span>
                ) : (
                  <span className="flex items-center gap-1">
                    <EyeOff size={14} /> Unseen
                  </span>
                )}
              </span>
            </div>
          </div>

          {/* CONTENT GRID */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">

            {/* LEFT */}
            <div className="lg:col-span-2 space-y-6">

              {/* CONTACT INFO */}
              <Section title="Contact Information" icon={<User size={16} />}>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <InfoCard label="First Name" value={contact.firstname} />
                  <InfoCard label="Last Name" value={contact.lastname} />
                  <InfoCard label="Email" value={contact.email} />
                  <InfoCard label="Phone" value={contact.phone} />
                </div>
              </Section>

              {/* BUSINESS INFO */}
              <Section title="Business Details" icon={<Building2 size={16} />}>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <InfoCard label="Brand Name" value={contact.brandname} />
                  <InfoCard
                    label="Monthly Budget"
                    value={contact.monthlyBudget ? `₹${contact.monthlyBudget}` : "-"}
                  />
                  <InfoCard
                    label="Meta Ads Interest"
                    value={contact.metaAds}
                    badge={contact.metaAds?.toLowerCase() === "yes"}
                  />
                  <InfoCard label="Source" value={contact.source} />
                </div>
              </Section>

              {/* MESSAGE */}
              <Section title="Message" icon={<MessageSquare size={16} />}>
                <p className="text-sm text-gray-700 whitespace-pre-wrap">
                  {contact.description || "No message provided"}
                </p>
              </Section>
            </div>

            {/* RIGHT */}
            <div className="space-y-6">

              {/* QUICK STATS */}
              <div className="bg-white border border-gray-200 rounded-xl p-5">
                <h3 className="text-sm font-semibold mb-4 text-gray-900">
                  Quick Stats
                </h3>
                <Stat label="Status" value={contact.isSeen ? "Reviewed" : "Pending"} highlight={!contact.isSeen} />
                <Stat label="Date" value={new Date(contact.createdAt).toLocaleDateString()} />
                <Stat label="Time" value={new Date(contact.createdAt).toLocaleTimeString()} />
                <Stat label="Contact ID" value={contact._id.slice(-8).toUpperCase()} />
              </div>

              {/* ACTIONS */}
              <div className="bg-white border border-gray-200 rounded-xl p-5">
                <h3 className="text-sm font-semibold mb-4 text-gray-900">
                  Quick Actions
                </h3>
                <a
                  href={`mailto:${contact.email}`}
                  className="block text-center text-sm font-medium border border-gray-300 rounded-md py-2 mb-2 hover:bg-gray-100"
                >
                  Send Email
                </a>
                <a
                  href={`tel:${contact.phone}`}
                  className="block text-center text-sm font-medium border border-gray-300 rounded-md py-2 hover:bg-gray-100"
                >
                  Call Now
                </a>
              </div>

            </div>
          </div>

        </div>
      </div>
    </AdminLayout>
  );
}

/* ---------------- COMPONENTS ---------------- */

function Section({ title, icon, children }) {
  return (
    <div className="bg-white border border-gray-200 rounded-xl">
      <div className="px-5 py-3 border-b border-gray-200 flex items-center gap-2 text-sm font-semibold text-gray-900">
        {icon}
        {title}
      </div>
      <div className="p-5">{children}</div>
    </div>
  );
}

function InfoCard({ label, value, badge }) {
  return (
    <div className="border border-gray-200 rounded-lg p-3">
      <p className="text-xs text-gray-500 mb-1">{label}</p>
      <div className="flex items-center justify-between">
        <p className="text-sm font-medium text-gray-900 break-all">
          {value || "-"}
        </p>
        {badge && (
          <span className="text-xs bg-gray-900 text-white px-2 py-0.5 rounded-full">
            YES
          </span>
        )}
      </div>
    </div>
  );
}

function Stat({ label, value, highlight }) {
  return (
    <div className="flex justify-between text-sm py-2 border-b border-gray-100 last:border-0">
      <span className="text-gray-500">{label}</span>
      <span className={`font-medium ${highlight ? "text-amber-600" : "text-gray-900"}`}>
        {value}
      </span>
    </div>
  );
}
