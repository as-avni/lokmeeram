"use client";

import { useState, useEffect } from "react";
import { db } from "@/lib/firebase";
import { addDoc, doc, updateDoc, collection, getDoc } from "firebase/firestore";
import { useRouter } from "next/navigation";

export default function BlogForm({ mode, blogId }: { mode: "create" | "edit"; blogId?: string }) {
  const [form, setForm] = useState({ title: "", slug: "", excerpt: "", content: "", image: "", date: "" });
  const router = useRouter();

  useEffect(() => {
    if (mode === "edit" && blogId) {
      const loadBlog = async () => {
        const docRef = doc(db, "blogs", blogId);
        const docSnap = await getDoc(docRef);
        if (docSnap.exists()) {
          setForm(docSnap.data() as any);
        }
      };
      loadBlog();
    }
  }, [mode, blogId]);

  const handleChange = (e: any) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

const handleSubmit = async (e: any) => {
  e.preventDefault();
  try {
    if (mode === "create") {
      await addDoc(collection(db, "blogs"), {
        ...form,
        createdAt: new Date().toISOString(), // ✅ add timestamp
      });
    } else if (mode === "edit" && blogId) {
      await updateDoc(doc(db, "blogs", blogId), {
        ...form,
        updatedAt: new Date().toISOString(), // ✅ optional: update timestamp
      });
    }
    router.push("/admin/dashboard");
  } catch (error) {
    console.error("Blog submission failed:", error);
    alert("ब्लॉग जोड़ने में त्रुटि हुई। कृपया पुनः प्रयास करें।");
  }
};

  return (
    <form onSubmit={handleSubmit} className="space-y-6 bg-white p-6 rounded shadow-md">
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">शीर्षक</label>
        <input
          type="text"
          name="title"
          placeholder="शीर्षक"
          value={form.title}
          onChange={handleChange}
          className="w-full border border-gray-300 px-4 py-2 rounded focus:outline-none focus:ring-2 focus:ring-orange-500"
          required
        />
      </div>
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">स्लग</label>
        <input
          type="text"
          name="slug"
          placeholder="स्लग"
          value={form.slug}
          onChange={handleChange}
          className="w-full border border-gray-300 px-4 py-2 rounded focus:outline-none focus:ring-2 focus:ring-orange-500"
          required
        />
      </div>
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">संक्षेप</label>
        <textarea
          name="excerpt"
          placeholder="संक्षेप"
          value={form.excerpt}
          onChange={handleChange}
          rows={3}
          className="w-full border border-gray-300 px-4 py-2 rounded focus:outline-none focus:ring-2 focus:ring-orange-500"
          required
        />
      </div>
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">विवरण</label>
        <textarea
          name="content"
          placeholder="विवरण"
          value={form.content}
          onChange={handleChange}
          rows={6}
          className="w-full border border-gray-300 px-4 py-2 rounded focus:outline-none focus:ring-2 focus:ring-orange-500"
          required
        />
      </div>
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">छवि URL</label>
        <input
          type="text"
          name="image"
          placeholder="छवि URL"
          value={form.image}
          onChange={handleChange}
          className="w-full border border-gray-300 px-4 py-2 rounded focus:outline-none focus:ring-2 focus:ring-orange-500"
          required
        />
      </div>
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">तारीख</label>
        <input
          type="date"
          name="date"
          value={form.date}
          onChange={handleChange}
          className="w-full border border-gray-300 px-4 py-2 rounded focus:outline-none focus:ring-2 focus:ring-orange-500"
          required
        />
      </div>
      <button
        type="submit"
        className="bg-orange-700 text-white px-6 py-2 rounded hover:bg-orange-800 transition"
      >
        {mode === "create" ? "ब्लॉग जोड़ें" : "ब्लॉग अपडेट करें"}
      </button>
    </form>
  );
}