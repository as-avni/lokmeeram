"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { fetchBlogs } from "@/lib/blogService";
import { deleteDoc, doc } from "firebase/firestore";
import { db } from "@/lib/firebase";

type Blog = {
  id: string;
  slug?: string;
  title?: string;
  image?: string;
  date?: string;
  excerpt?: string;
};

export default function AdminDashboard() {
  const [blogs, setBlogs] = useState<Blog[]>([]);

  useEffect(() => {
    fetchBlogs().then(setBlogs);
  }, []);

  const handleDelete = async (id: string) => {
    const confirmDelete = confirm("क्या आप वाकई इस ब्लॉग को हटाना चाहते हैं?");
    if (!confirmDelete) return;
    try {
      await deleteDoc(doc(db, "blogs", id));
      setBlogs((prevBlogs) => prevBlogs.filter((blog) => blog.id !== id));
    } catch (error) {
      console.error("ब्लॉग हटाने में त्रुटि:", error);
      alert("ब्लॉग हटाया नहीं जा सका।");
    }
  };

  return (
    <div className="max-w-5xl mx-auto px-4 py-12 mt-20">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold text-orange-700">डैशबोर्ड</h1>
        <Link href="/admin/create" className="bg-orange-700 text-white px-4 py-2 rounded hover:bg-orange-800">
          ➕ नया ब्लॉग
        </Link>
      </div>
      <ul className="space-y-4">
        {blogs.map((blog: Blog) => (
          <li key={blog.id} className="p-4 bg-orange-100 rounded">
            <h2 className="text-xl font-bold text-orange-900">{blog.title}</h2>
            <p className="text-sm text-gray-600">{blog.date}</p>
            <div className="flex gap-4 mt-2">
              <Link href={`/admin/edit/${blog.id}`} className="text-blue-600 hover:underline">
                ✏️ संपादित करें
              </Link>
              <button
                onClick={() => handleDelete(blog.id)}
                className="text-red-600 hover:underline"
              >
                🗑️ हटाएं
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}