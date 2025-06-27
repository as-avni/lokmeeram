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
    if (mode === "create") {
      await addDoc(collection(db, "blogs"), form);
    } else if (mode === "edit" && blogId) {
      await updateDoc(doc(db, "blogs", blogId), form);
    }
    router.push("/admin/dashboard");
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      {Object.entries(form).map(([key, value]) => (
        <input
          key={key}
          name={key}
          placeholder={key}
          value={value}
          onChange={handleChange}
          className="w-full border px-4 py-2 rounded"
          required
        />
      ))}
      <button
        type="submit"
        className="bg-orange-700 text-white px-6 py-2 rounded hover:bg-orange-800 transition"
      >
        {mode === "create" ? "ब्लॉग जोड़ें" : "ब्लॉग अपडेट करें"}
      </button>
    </form>
  );
}