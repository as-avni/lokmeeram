"use client";

import { useParams } from "next/navigation";
import { blogPosts } from "@/lib/blogData";
import Image from "next/image";

export default function BlogDetail() {
  const { slug } = useParams();

  if (!slug || typeof slug !== "string") return null;

  const post = blogPosts.find((p) => p.slug === slug);

  if (!post) {
    return <p className="text-center text-red-500 mt-20">ब्लॉग नहीं मिला।</p>;
  }

  return (
    <div className="max-w-3xl mx-auto px-4 py-12 mt-20">
      <h1 className="text-4xl font-bold text-orange-800 mb-1">{post.title}</h1>
      <p className="text-lg text-gray-600 font-s mb-1">लेखक: लोक में राम टीम</p>
      <p className="text-lg font-semibold text-gray-600 mb-4">{post.date}</p>
      <Image
        src={post.image}
        alt={post.title}
        width={800}
        height={400}
        className="rounded-md mb-6"
      />
      <p className="text-lg text-gray-700 whitespace-pre-line">{post.content}</p>
    </div>
  );
}