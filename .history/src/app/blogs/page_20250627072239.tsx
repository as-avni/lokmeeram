"use client";

import { useEffect, useState } from "react";
import { fetchBlogs } from "@/lib/blogData";
import Image from "next/image";
import Link from "next/link";

export default function BlogsPage() {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    fetchBlogs().then(setBlogs);
  }, []);

  return (
    <div className="max-w-5xl mx-auto px-4 py-12">
      <h1 className="text-3xl md:text-5xl font-bold text-center text-orange-700 mb-10">हमारे ब्लॉग</h1>
      <div className="text-right mb-6">
        <Link href="/admin" className="inline-block bg-orange-700 text-white px-4 py-2 rounded hover:bg-orange-800 transition">
          ➕ नया ब्लॉग जोड़ें
        </Link>
      </div>
      <div className="grid md:grid-cols-2 gap-6">
        {blogs.map((post) => (
          <div key={post.slug} className="p-6 bg-orange-100 rounded-lg shadow-md hover:shadow-lg transition">
            <Image
              src={post.image}
              alt={post.title}
              width={600}
              height={300}
              className="rounded-md mb-4 object-cover w-full h-48"
            />
            <h2 className="text-2xl font-bold text-orange-800">{post.title}</h2>
            <p className="text-sm text-gray-600 mt-1">{post.date}</p>
            <p className="mt-2 text-gray-700">{post.excerpt}</p>
            <Link href={`/blogs/${post.slug}`} className="text-orange-600 font-semibold mt-4 inline-block hover:underline">
              और पढ़ें →
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}