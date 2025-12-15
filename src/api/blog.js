import { axiosBaseUrl } from "./api";

// Common config for credentials
const authConfig = {
  withCredentials: true,
};

// ✔ Get all blogs (public, but safe to include)
export const getAllBlogs = async () => {
  const res = await axiosBaseUrl.get("/api/blogs", authConfig);
  return res.data;
};

// ✔ Get single blog (public)
export const getBlogById = async (id) => {
  const res = await axiosBaseUrl.get(`/api/blogs/${id}`, authConfig);
  return res.data;
};

// ✔ Delete single blog (admin protected)
export const deleteBlogById = async (id) => {
  const res = await axiosBaseUrl.delete(`/api/blogs/${id}`, authConfig);
  return res.data;
};

// ✔ Update single blog (admin protected)
export const updateBlogById = async (id, formData) => {
  const res = await axiosBaseUrl.patch(
    `/api/blogs/${id}`,
    formData,
    authConfig
  );
  return res.data;
};

// ✔ Create blog (admin protected)
export const createBlog = async (formData) => {
  const res = await axiosBaseUrl.post(
    "/api/blogs",
    formData,
    authConfig
  );
  return res.data;
};
