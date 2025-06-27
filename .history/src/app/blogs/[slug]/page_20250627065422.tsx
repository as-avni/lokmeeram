"us"

import { useRouter } from "next/router";
import { blogPosts } from "@/lib/blogData"; // adjust path if needed
import Image from "next/image";

export default function BlogDetail() {
  const router = useRouter();
  const { slug } = router.query;

  if (!slug) return null;

  const post = blogPosts.find((p) => p.slug === slug);

  if (!post) {
    return <p className="text-center text-red-500 mt-20">ब्लॉग नहीं मिला।</p>;
  }

  return (
    <div className="max-w-3xl mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold text-orange-800 mb-4">{post.title}</h1>
      <p className="text-sm text-gray-600 mb-6">{post.date}</p>
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