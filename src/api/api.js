import axios from "axios";

// ✅ Backend Base URL
const axiosBaseUrl = axios.create({
  
  // baseURL:"https://wizon-backend.vercel.app",
  baseURL:"http://localhost:5000",
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
