import React, { useState } from "react";
import AdminLayout from "../layout/AdminLayout";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { useCreateBlogMutation } from "../hooks/blogQueries";

export default function AdminAddBlog() {
  const navigate = useNavigate();
  const createBlog = useCreateBlogMutation();

  const [title, setTitle] = useState("");
  const [excerpt, setExcerpt] = useState("");
  const [content, setContent] = useState("");
  const [tags, setTags] = useState("");
  const [imageUrl, setImageUrl] = useState("");
  const [status, setStatus] = useState("Published");

  // Generate slug (optional)
  function generateSlug(text) {
    return text
      .toLowerCase()
      .trim()
      .replace(/ /g, "-")
      .replace(/[^\w-]+/g, "");
  }

  function handlePublish() {
    if (!title || !excerpt || !content) {
      toast.error("Please fill all required fields!");
      return;
    }

    const blogData = {
      title,
      excerpt,
      content,
      tags: tags.split(",").map((t) => t.trim()).filter(Boolean),
      featuredImage: imageUrl,
      status,
      slug: generateSlug(title),
    };

    createBlog.mutate(blogData, {
      onSuccess: () => {
        toast.success(
          status === "Published"
            ? "Blog published successfully!"
            : "Blog saved as draft!"
        );

        // Reset fields
        setTitle("");
        setExcerpt("");
        setContent("");
        setTags("");
        setImageUrl("");
        setStatus("Published");

        navigate("/admin/all-blog");
      },
      onError: () => {
        toast.error("Failed to create blog. Try again.");
      },
    });
  }

  return (
    <AdminLayout>
      <div className="max-w-4xl mx-auto bg-white p-8 rounded-2xl shadow-md">
        <h1 className="text-3xl heading font-bold mb-6 text-gray-800">
          Add New Blog
        </h1>

        <div className="space-y-6 text">

          {/* TITLE */}
          <div>
            <label className="font-semibold text-gray-700">Blog Title</label>
            <input
              type="text"
              placeholder="Enter blog title"
              className="w-full p-3 border rounded-lg mt-2 focus:ring-2 focus:ring-black outline-none"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
          </div>

          {/* EXCERPT */}
          <div>
            <label className="font-semibold text-gray-700">Excerpt</label>
            <textarea
              placeholder="Short description about the blog"
              className="w-full p-3 border rounded-lg mt-2 h-24 resize-none focus:ring-2 focus:ring-black outline-none"
              value={excerpt}
              onChange={(e) => setExcerpt(e.target.value)}
            />
          </div>

          {/* CONTENT */}
          <div>
            <label className="font-semibold text-gray-700">Content</label>
            <textarea
              placeholder="Write the full blog content here..."
              className="w-full p-3 border rounded-lg mt-2 min-h-[250px] focus:ring-2 focus:ring-black outline-none"
              value={content}
              onChange={(e) => setContent(e.target.value)}
            />
          </div>

          {/* TAGS */}
          <div>
            <label className="font-semibold text-gray-700">Tags</label>
            <input
              type="text"
              placeholder="example: nextjs, seo, design"
              className="w-full p-3 border rounded-lg mt-2 focus:ring-2 focus:ring-black outline-none"
              value={tags}
              onChange={(e) => setTags(e.target.value)}
            />
            <p className="text-xs text-gray-500 mt-1">
              Separate tags with commas
            </p>
          </div>

          {/* IMAGE URL */}
          <div>
            <label className="font-semibold text-gray-700">
              Featured Image URL
            </label>
            <input
              type="text"
              placeholder="https://example.com/image.jpg"
              className="w-full p-3 border rounded-lg mt-2 focus:ring-2 focus:ring-black outline-none"
              value={imageUrl}
              onChange={(e) => setImageUrl(e.target.value)}
            />

            {imageUrl && (
              <img
                src={imageUrl}
                className="w-full mt-4 rounded-lg shadow-md"
                onError={() => {
                  toast.error("Invalid Image URL");
                  setImageUrl("");
                }}
              />
            )}
          </div>

          {/* STATUS FIELD */}
          <div>
            <label className="font-semibold text-gray-700">Blog Status</label>
            <select
              className="w-full p-3 border rounded-lg mt-2 focus:ring-2 focus:ring-black outline-none"
              value={status}
              onChange={(e) => setStatus(e.target.value)}
            >
              <option value="Published">Published</option>
              <option value="Draft">Save as Draft</option>
            </select>
          </div>

          {/* SUBMIT */}
          <button
            className="w-full bg-black text-white py-3 rounded-xl font-semibold text-lg hover:bg-gray-900 transition"
            onClick={handlePublish}
            disabled={createBlog.isLoading}
          >
            {createBlog.isLoading
              ? "Saving..."
              : status === "Published"
              ? "Publish Blog"
              : "Save Draft"}
          </button>
        </div>
      </div>
    </AdminLayout>
  );
}
