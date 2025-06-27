// // pages/blogs.tsx
// import Link from "next/link";
// import Image from "next/image";
// import { blogPosts } from "@/lib/blogData";

// export default function BlogsPage() {
//     return (
//         <div className="max-w-5xl mx-auto px-4 py-12 mt-20">
//         <h1 className="text-3xl md:text-5xl font-bold text-center text-orange-700 mb-10">ब्लॉग</h1>
//         <div className="grid md:grid-cols-2 gap-6">
//             {blogPosts.map((post, idx) => (
//             <div key={idx} className="p-6 bg-orange-100 rounded-lg shadow-md hover:shadow-lg transition">
//                 <Image
//                 src={post.image}
//                 alt={post.title}
//                 width={600}
//                 height={300}
//                 className="rounded-md mb-4 object-cover w-full h-48"
//                 />
//                 <h2 className="text-2xl font-bold text-orange-800">{post.title}</h2>
//                 <p className="text-sm text-gray-600 mt-1">{post.date}</p>
//                 <p className="mt-2 text-gray-700">{post.excerpt}</p>
//                 <Link href={`/blogs/${post.slug}`} className="text-orange-600 font-semibold mt-4 inline-block hover:underline">
//                 और पढ़ें →
//                 </Link>
//             </div>
//             ))}
//         </div>
//         </div>
//     );
// }

"use client";

import { useEffect, useState } from "react";
import { fetchBlogs } from "@/lib/blogService";
import Image from "next/image";
import Link from "next/link";

type BlogPost = {
  id: string;
  slug: string;
  title: string;
  image: string;
  date: string;
  excerpt: string;
};

export default function BlogsPage() {
  const [blogs, setBlogs] = useState<BlogPost[]>([]);

useEffect(() => {
  fetchBlogs().then((data) => {
    console.log("Fetched Blogs: ", data);
    // Ensure each blog has all required BlogPost fields
    const formattedBlogs: BlogPost[] = data.map((item: {
      id: string;
      slug?: string;
      title?: string;
      image?: string;
      date?: string;
      excerpt?: string;
    }) => ({
      id: item.id,
      slug: item.slug ?? "",
      title: item.title ?? "",
      image: item.image ?? "",
      date: item.date ?? "",
      excerpt: item.excerpt ?? "",
    }));
    setBlogs(formattedBlogs);
  });
}, []);

  return (
    <div className="max-w-5xl mx-auto px-4 py-12">
      <h1 className="text-3xl md:text-5xl font-bold text-center text-orange-700 mb-10">हमारे ब्लॉग</h1>
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