// pages/blogs.tsx
"use client";
import Link from "next/link";

export default function BlogsPage() {
  const blogPosts = [
    {
      title: "रामचरितमानस: एक आध्यात्मिक धरोहर",
      slug: "ramcharitmanas-ek-adhyatmik-dharohar",
      excerpt: "श्रीरामचरितमानस भारतीय संस्कृति की आत्मा है। इसमें जीवन जीने की कला और आदर्शों की व्याख्या की गई है।",
      date: "27 जून 2025"
    },
    {
      title: "लोक में राम: धर्म और समाज का संगम",
      slug: "lok-mein-ram-dharm-aur-samaj",
      excerpt: "राम केवल एक धार्मिक पात्र नहीं बल्कि लोकजीवन के आदर्श पुरुष हैं। उनका आदर्श समाज की दिशा तय करता है।",
      date: "20 जून 2025"
    }
  ];

  return (
    <div className="max-w-5xl mx-auto px-4 py-12">
      <h1 className="text-3xl md:text-5xl font-bold text-center text-orange-700 mb-10">हमारे ब्लॉग</h1>
      <div className="grid md:grid-cols-2 gap-6">
        {blogPosts.map((post, idx) => (
          <div key={idx} className="p-6 bg-orange-100 rounded-lg shadow-md hover:shadow-lg transition">
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