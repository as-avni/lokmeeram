"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { fetchBlogs } from "@/lib/blogService";

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

  return (
    <div className="max-w-5xl mx-auto px-4 py-12">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold text-orange-700">डैशबोर्ड</h1>
        <Link href="/admin/create" className="bg-orange-700 text-white px-4 py-2 rounded hover:bg-orange-800">
          ➕ नया ब्लॉग
        </Link>
      </div>
      <ul className="space-y-4">
        {blogs.map((blog: any) => (
          <li key={blog.id} className="p-4 bg-orange-100 rounded">
            <h2 className="text-xl font-bold text-orange-900">{blog.title}</h2>
            <p className="text-sm text-gray-600">{blog.date}</p>
            <div className="flex gap-4 mt-2">
              <Link href={`/admin/edit/${blog.id}`} className="text-blue-600 hover:underline">
                ✏️ संपादित करें
              </Link>
              {/* Add delete logic as needed */}
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}