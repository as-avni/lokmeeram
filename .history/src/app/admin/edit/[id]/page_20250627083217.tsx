"use client";

import { useParams } from "next/navigation";
import BlogForm from "@/components/BlogForm";

export default function EditBlogPage() {
  const { id } = useParams();

  return (
    <div className="max-w-3xl mx-auto px-4 py-12 mt-">
      <h1 className="text-3xl font-bold text-orange-700 mb-6">ब्लॉग संपादित करें</h1>
      <BlogForm mode="edit" blogId={id as string} />
    </div>
  );
}