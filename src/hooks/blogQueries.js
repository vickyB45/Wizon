import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { 
    getAllBlogs,
  getBlogById, 
  createBlog, 
  updateBlogById,
  deleteBlogById, 
} from "../api/blog";

// ⭐ Fetch all blogs
export const useBlogsQuery = () => {
  return useQuery({
    queryKey: ["blogs"],
    queryFn: getAllBlogs,
  });
};

// ⭐ Fetch single blog by ID
export const useBlogQuery = (id) => {
  return useQuery({
    queryKey: ["blog", id],
    queryFn: () => getBlogById(id),
    enabled: !!id,
  });
};

// ⭐ Create blog
export const useCreateBlogMutation = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: createBlog,
    onSuccess: () => {
      queryClient.invalidateQueries(["blogs"]); // auto refresh list
    },
  });
};

// ⭐ Update blog
export const useUpdateBlogMutation = (id) => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (formData) => updateBlogById(id, formData),
    onSuccess: () => {
      queryClient.invalidateQueries(["blogs"]);
      queryClient.invalidateQueries(["blog", id]);
    },
  });
};

// ⭐ Delete blog
export const useDeleteBlogMutation = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: deleteBlogById,
    onSuccess: () => {
      queryClient.invalidateQueries(["blogs"]);
    },
  });
};
