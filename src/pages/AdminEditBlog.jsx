import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import AdminLayout from "../layout/AdminLayout";
import { toast } from "react-toastify";

import LoaderOverlay from "../components/LoaderOverlay";
import {
  useBlogQuery,
  useUpdateBlogMutation
} from "../hooks/blogQueries";

export default function AdminEditBlog() {
  const { id } = useParams();
  const navigate = useNavigate();

  // Fetch blog by ID from backend
  const { data, isLoading, isError } = useBlogQuery(id);

  // Mutation for update
  const updateMutation = useUpdateBlogMutation(id);

  const blog = data?.blog;

  // Local States
  const [title, setTitle] = useState("");
  const [excerpt, setExcerpt] = useState("");
  const [content, setContent] = useState("");
  const [tags, setTags] = useState("");
  const [imageUrl, setImageUrl] = useState("");
  const [status, setStatus] = useState("Published");

  // 🔥 Load blog details into form
  useEffect(() => {
    if (!blog) return;

    setTitle(blog.title);
    setExcerpt(blog.excerpt);
    setContent(blog.content);
    setTags(blog.tags?.join(", ") || "");
    setImageUrl(blog.featuredImage);
    setStatus(blog.status || "Published");
  }, [blog]);

  const handleUpdate = () => {
    if (!title || !excerpt || !content) {
      toast.error("Please fill all required fields");
      return;
    }

    const formData = {
      title,
      excerpt,
      content,
      tags: tags.split(",").map((t) => t.trim()).filter(Boolean),
      featuredImage: imageUrl,
      status,
    };

    updateMutation.mutate(formData, {
      onSuccess: () => {
        toast.success("Blog updated successfully!");
        navigate("/admin/all-blog");
      },
      onError: () => {
        toast.error("Failed to update blog");
      },
    });
  };

  // 🔄 Loading state
  if (isLoading) return <LoaderOverlay text="Loading blog details..." />;

  if (isError || !blog)
    return (
      <AdminLayout>
        <h2 className="text-xl text-red-600 font-semibold">
          Blog not found or URL invalid.
        </h2>
      </AdminLayout>
    );

  return (
    <AdminLayout>
      <div className="max-w-4xl mx-auto bg-white p-8 rounded-2xl shadow-md">
        <h1 className="text-3xl font-bold mb-6">Edit Blog</h1>

        <div className="space-y-6">

          {/* TITLE */}
          <div>
            <label className="font-semibold text-gray-700">Blog Title</label>
            <input
              type="text"
              className="w-full p-3 border rounded-lg mt-2"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
          </div>

          {/* EXCERPT */}
          <div>
            <label className="font-semibold text-gray-700">Excerpt</label>
            <textarea
              className="w-full p-3 border rounded-lg mt-2 h-24 resize-none"
              value={excerpt}
              onChange={(e) => setExcerpt(e.target.value)}
            />
          </div>

          {/* CONTENT */}
          <div>
            <label className="font-semibold text-gray-700">Content</label>
            <textarea
              className="w-full p-3 border rounded-lg mt-2 min-h-[250px]"
              value={content}
              onChange={(e) => setContent(e.target.value)}
            />
          </div>

          {/* TAGS */}
          <div>
            <label className="font-semibold text-gray-700">Tags</label>
            <input
              type="text"
              className="w-full p-3 border rounded-lg mt-2"
              value={tags}
              onChange={(e) => setTags(e.target.value)}
            />
            <p className="text-xs text-gray-500 mt-1">Comma separated tags</p>
          </div>

          {/* STATUS */}
          <div>
            <label className="font-semibold text-gray-700">Status</label>
            <select
              className="w-full p-3 border rounded-lg mt-2"
              value={status}
              onChange={(e) => setStatus(e.target.value)}
            >
              <option value="Published">Published</option>
              <option value="Draft">Draft</option>
            </select>
          </div>

          {/* IMAGE URL */}
          <div>
            <label className="font-semibold text-gray-700">
              Featured Image URL
            </label>
            <input
              type="text"
              className="w-full p-3 border rounded-lg mt-2"
              value={imageUrl}
              onChange={(e) => setImageUrl(e.target.value)}
            />

            {imageUrl && (
              <img
                src={imageUrl}
                alt="Preview"
                className="w-full mt-4 rounded-lg shadow"
                onError={() => {
                  toast.error("Invalid image URL");
                  setImageUrl("");
                }}
              />
            )}
          </div>

          <button
            className="w-full bg-black text-white py-3 rounded-xl font-semibold"
            onClick={handleUpdate}
            disabled={updateMutation.isLoading}
          >
            {updateMutation.isLoading ? "Saving..." : "Update Blog"}
          </button>
        </div>
      </div>
    </AdminLayout>
  );
}
