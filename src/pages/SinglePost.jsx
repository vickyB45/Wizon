import { useParams } from "react-router-dom";
import ImagePreviewModal from "../components/ImagePreviewModal";
import LoaderOverlay from "../components/LoaderOverlay";
import { useBlogQuery } from "../hooks/blogQueries";
import { useState } from "react";

// 📌 FORMAT FULL DATE + TIME (IST)
function formatDateTime(timestamp) {
  if (!timestamp) return "";
  const date = new Date(timestamp);
  return date.toLocaleString("en-IN", {
    year: "numeric",
    month: "long",
    day: "numeric",
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
    hour12: true,
  });
}

export default function SinglePost() {
  const { id } = useParams();

  // Backend fetch
  const { data, isLoading, isError } = useBlogQuery(id);

  // For preview modal
  const [previewOpen, setPreviewOpen] = useState(false);
  const [previewImage, setPreviewImage] = useState("");

  // Extract blog safely
  const post = data?.blog;

  // Loading UI
  if (isLoading) return <LoaderOverlay text="Loading blog..." />;

  // Error or not found UI
  if (isError || !post)
    return (
      <div className="max-w-3xl mx-auto py-20 px-4 text-center text-gray-500">
        Blog not found...
      </div>
    );

  return (
    <div className="max-w-4xl mx-auto py-10 px-4 text">

      {/* FEATURED IMAGE - CLICK TO PREVIEW */}
      <div
        className="w-full h-64 md:h-[70vh] overflow-hidden rounded-xl mb-6 bg-gray-100 shadow cursor-pointer group"
        onClick={() => {
          setPreviewImage(post.featuredImage);
          setPreviewOpen(true);
        }}
      >
        <img
          src={post.featuredImage}
          alt={post.title}
          className="w-full h-full object-cover group-hover:scale-105 transition-all duration-300"
        />
      </div>

      {/* TAGS */}
      {post.tags?.length > 0 && (
        <div className="flex flex-wrap gap-2 mb-4">
          {post.tags.map((tag, i) => (
            <span
              key={i}
              className="px-3 py-1 text-xs font-medium bg-gray-100 border rounded-full text-gray-700"
            >
              #{tag}
            </span>
          ))}
        </div>
      )}

      {/* TITLE */}
      <h1 className="text-3xl md:text-4xl font-extrabold leading-snug mb-3">
        {post.title}
      </h1>

      {/* EXCERPT */}
      {post.excerpt && (
        <p className="text-lg text-gray-600 mb-6">{post.excerpt}</p>
      )}

      {/* AUTHOR + DATE */}
      <p className="text-gray-500 text-sm mb-6">
        {post.author || "Admin"} • {formatDateTime(post.createdAt)}
      </p>

      {/* CONTENT (HTML) */}
      <div
        className="prose prose-sm md:prose-lg max-w-none prose-img:rounded-xl prose-headings:font-bold"
        dangerouslySetInnerHTML={{ __html: post.content }}
      />

      {/* IMAGE PREVIEW MODAL */}
      <ImagePreviewModal
        open={previewOpen}
        image={previewImage}
        onClose={() => setPreviewOpen(false)}
      />
    </div>
  );
}
