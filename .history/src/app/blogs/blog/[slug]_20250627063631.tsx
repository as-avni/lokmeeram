// pages/blogs/[slug].tsx
import { useRouter } from "next/router";

export default function BlogDetail() {
  const router = useRouter();
  const { slug } = router.query;

  return (
    <div className="max-w-3xl mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold text-orange-800 mb-4">ब्लॉग शीर्षक: {slug}</h1>
      <p className="text-lg text-gray-700">
        यहाँ पर ब्लॉग का पूरा विवरण आएगा। आप markdown सपोर्ट, CMS से content fetch या Firebase integration कर सकते हैं।
      </p>
    </div>
  );
}