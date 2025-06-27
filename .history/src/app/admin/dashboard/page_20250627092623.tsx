"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { fetchBlogs } from "@/lib/blogService";
import { deleteDoc, doc } from "firebase/firestore";
import { db } from "@/lib/firebase";

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
const [dialogVisible, setDialogVisible] = useState(false);
const [selectedBlogId, setSelectedBlogId] = useState<string | null>(null);

useEffect(() => {
    fetchBlogs().then(setBlogs);
}, []);

const confirmDelete = (id: string) => {
    setSelectedBlogId(id);
    setDialogVisible(true);
};

const handleDelete = async () => {
    if (!selectedBlogId) return;
    try {
    await deleteDoc(doc(db, "blogs", selectedBlogId));
    setBlogs((prevBlogs) => prevBlogs.filter((blog) => blog.id !== selectedBlogId));
    } catch (error) {
    console.error("ब्लॉग हटाने में त्रुटि:", error);
    } finally {
    setDialogVisible(false);
    setSelectedBlogId(null);
    }
};

return (
    <AdminNav />
    <div className="max-w-5xl mx-auto px-4 py-12 mt-20">
    <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold text-orange-700">डैशबोर्ड</h1>
        <Link href="/admin/create" className="bg-orange-700 text-white px-4 py-2 rounded hover:bg-orange-800">
        ➕ नया ब्लॉग
        </Link>
    </div>

    <ul className="space-y-4">
        {blogs.map((blog: Blog) => (
        <li key={blog.id} className="p-4 bg-orange-100 rounded">
            <h2 className="text-xl font-bold text-orange-900">{blog.title}</h2>
            <p className="text-sm text-gray-600">{blog.date}</p>
            <div className="flex gap-4 mt-2">
            <Link href={`/admin/edit/${blog.id}`} className="text-blue-600 hover:underline">
                ✏️ संपादित करें
            </Link>
            <button
                onClick={() => confirmDelete(blog.id)}
                className="text-red-600 hover:underline"
            >
                🗑️ हटाएं
            </button>
            </div>
        </li>
        ))}
    </ul>

    {dialogVisible && (
        <div className="fixed inset-0 bg-black bg-opacity-30 flex items-center justify-center z-50">
        <div className="bg-white p-6 rounded shadow-md text-center">
            <p className="text-lg font-semibold mb-4 text-black">क्या आप वाकई इस ब्लॉग को हटाना चाहते हैं?</p>
            <div className="flex justify-center gap-4">
            <button
                onClick={handleDelete}
                className="bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700"
            >
                हाँ
            </button>
            <button
                onClick={() => {
                setDialogVisible(false);
                setSelectedBlogId(null);
                }}
                className="bg-gray-300 text-gray-800 px-4 py-2 rounded hover:bg-gray-400"
            >
                नहीं
            </button>
            </div>
        </div>
        </div>
    )}
    </div>
);
}