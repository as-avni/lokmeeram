"use client";

import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
import { collection, getDocs } from "firebase/firestore";
import { db } from "@/lib/firebase";
import Image from "next/image";

export default function BlogDetail() {
  const { slug } = useParams();
  const [post, setPost] = useState<any | null>(null);

  useEffect(() => {
    async function getData() {
      const snapshot = await getDocs(collection(db, "blogs"));
      const blogs = snapshot.docs.map(doc => doc.data());
      const match = blogs.find(b => b.slug === slug);
      setPost(match);
    }

    if (slug) getData();
  }, [slug]);

  if (!post) return <p className="text-center mt-20">लोड हो रहा है...</p>;

  return (
    <div className="max-w-3xl mx-auto px-4 py-12 mt-20">
      <h1 className="text-4xl font-bold text-orange-800 mb-1">{post.title}</h1>
      <p className="text-lg text-gray-600 font-semibold mb-1">लेखक: लोक में राम टीम</p>
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