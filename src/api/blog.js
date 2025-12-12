import { axiosBaseUrl } from "./api";

// ✔ Get all blogs
export const getAllBlogs = async () => {
  const res = await axiosBaseUrl.get("/api/blogs");
  return res.data;
};

// ✔ Get single blog
export const getBlogById = async (id) => {
  const res = await axiosBaseUrl.get(`/api/blogs/${id}`);
  return res.data;
};
// ✔ delete single blog
export const deleteBlogById = async (id) => {
  const res = await axiosBaseUrl.delete(`/api/blogs/${id}`);
  return res.data;
};
// ✔ update single blog
export const updateBlogById = async (id, formData) => {
  const res = await axiosBaseUrl.patch(`/api/blogs/${id}`, formData);
  return res.data;
};


// ✔ Create blog
export const createBlog = async (formData) => {
  const res = await axiosBaseUrl.post("/api/blogs", formData);
  return res.data;
};
