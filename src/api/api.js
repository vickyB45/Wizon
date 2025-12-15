import axios from "axios";

// ✅ Backend Base URL
export const axiosBaseUrl = axios.create({
  baseURL: import.meta.env.VITE_BACKEND_API || "http://localhost:5000",
  withCredentials: true,
});
// ✅ Contact form API call
export const handleContactForm = async (formData) => {
  try {
    const response = await axiosBaseUrl.post("/send-mail", formData, {
      withCredentials: true,
      headers: {
        "Content-Type": "application/json",
      },
    });
    return response.data;
  } catch (error) {
    console.error(" Error sending contact form:", error);
    throw error;
  }
};

// Admin Authentication
export const handleAdminLogin = async (loginData) => {
  try {
    const response = await axiosBaseUrl.post(
      "/api/admin/login",
      loginData,
      {
        withCredentials: true,
        headers: {
          "Content-Type": "application/json",
        },
      }
    );

    // success → server response
    return response.data;
  } catch (error) {
    // Let react-query handle error toast
    console.error("Admin login API error:", error);

    // 🔥 IMPORTANT: throw axios error as-is
    throw error;
  }
};


// src/api/api.js
export const fetchAdminMe = async () => {
  const response = await axiosBaseUrl.get("/api/admin/me", {
    withCredentials: true,
  });
  return response.data;
};



// Admin Logout
export const handleAdminLogout = async () => {
  try {
    const response = await axiosBaseUrl.post(
      "/api/admin/logout",
      {},
      {
        withCredentials: true,
      }
    );

    return response.data;
  } catch (error) {
    console.error("Admin logout API error:", error);
    throw error; // let react-query handle toast
  }
};




// =========================================== contacts =========================================//



/* =====================================================
   CONTACTS (ADMIN)
   Base route: /api/contact
===================================================== */

// 🔢 Total contacts count
export const getTotalContacts = async () => {
  const response = await axiosBaseUrl.get("/api/admin/contacts/total", {
    withCredentials: true,
  });
  return response.data;
};

// 📊 Contact stats (total / seen / unseen)
export const getContactStats = async () => {
  const response = await axiosBaseUrl.get("/api/admin/contacts/stats", {
    withCredentials: true,
  });
  return response.data;
};

// 📋 Get all contacts (Admin table)
export const getAllContacts = async () => {
  const response = await axiosBaseUrl.get("/api/admin/contacts", {
    withCredentials: true,
  });
  return response.data;
};

// 🔍 Get single contact by ID
export const getSingleContact = async (id) => {
  const response = await axiosBaseUrl.get(`/api/admin/contacts/${id}`, {
    withCredentials: true,
  });
  return response.data;
};

// 👁 Mark contact as seen
export const markContactAsSeen = async (id) => {
  const response = await axiosBaseUrl.patch(
    `/api/admin/contacts/${id}/seen`,
    {},
    { withCredentials: true }
  );
  return response.data;
};

