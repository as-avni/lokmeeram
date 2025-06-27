"use client";

import { useState, useEffect } from "react";
import { db } from "@/lib/firebase";
import { addDoc, doc, updateDoc, collection, getDoc } from "firebase/firestore";
import { useRouter } from "next/navigation";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import Image from "next/image";

type BlogFormData = {
  title: string;
  slug: string;
  excerpt: string;
  content: string;
  image: string;
  date: string;
  createdAt?: string;
  updatedAt?: string;
};

export default function BlogForm({ mode, blogId }: { mode: "create" | "edit"; blogId?: string }) {
  const [form, setForm] = useState<BlogFormData>({
    title: "",
    slug: "",
    excerpt: "",
    content: "",
    image: "",
    date: "",
  });
  const [showDialog, setShowDialog] = useState(false);
  const [dialogMessage, setDialogMessage] = useState("");
  const router = useRouter();

  useEffect(() => {
    if (mode === "edit" && blogId) {
      const loadBlog = async () => {
        const docRef = doc(db, "blogs", blogId);
        const docSnap = await getDoc(docRef);
        if (docSnap.exists()) {
          setForm(docSnap.data() as BlogFormData);
        }
      };
      loadBlog();
    }
  }, [mode, blogId]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleImageUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onloadend = () => {
      setForm((prev) => ({ ...prev, image: reader.result as string }));
    };
    reader.readAsDataURL(file);
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      if (mode === "create") {
        await addDoc(collection(db, "blogs"), {
          ...form,
          createdAt: new Date().toISOString(),
        });
        setDialogMessage("नया ब्लॉग सफलतापूर्वक जोड़ा गया!");
      } else if (mode === "edit" && blogId) {
        await updateDoc(doc(db, "blogs", blogId), {
          ...form,
          updatedAt: new Date().toISOString(),
        });
        setDialogMessage("ब्लॉग सफलतापूर्वक अपडेट किया गया!");
      }
      setShowDialog(true);
    } catch (error) {
      console.error("Blog submission failed:", error);
      setDialogMessage("ब्लॉग जोड़ने में त्रुटि हुई। कृपया पुनः प्रयास करें।");
      setShowDialog(true);
    }
  };

  return (
    <>
      <form
        onSubmit={handleSubmit}
        className="p-6 max-w-5xl mx-auto text-black border-orange-300 hover:border-orange-500 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url('/images/form-bg.jpg')" }}
      >
        <div className="space-y-6">
          <div>
            <label className="block text-xl font-medium mb-2 text-black">शीर्षक</label>
            <Input
              type="text"
              name="title"
              placeholder="शीर्षक"
              value={form.title}
              onChange={handleChange}
              className="w-full border border-orange-300 hover:border-orange-500 px-4 py-2 rounded focus:outline-none focus:ring-2 focus:ring-orange-500 placeholder:text-sm text-black"
              required
            />
          </div>          
          <div>
            <label className="block text-xl font-medium mb-2 text-black">स्लग</label>
            <Input
              type="text"
              name="slug"
              placeholder="स्लग"
              value={form.slug}
              onChange={handleChange}
              className="text-black border-orange-300 hover:border-orange-500"
              required
            />
          </div>
          <div>
            <label className="block text-xl font-medium mb-2 text-black">संक्षेप</label>
            <Textarea
              name="excerpt"
              placeholder="संक्षेप"
              value={form.excerpt}
              onChange={handleChange}
              rows={6}
              className="w-full border border-orange-300 hover:border-orange-500 px-4 py-2 rounded focus:outline-none focus:ring-2 focus:ring-orange-500 placeholder:text-sm text-black"
              required
            />
          </div>
          <div>
            <label className="block text-xl font-medium mb-2 text-black">विवरण</label>
            <Textarea
              name="content"
              placeholder="विवरण"
              value={form.content}
              onChange={handleChange}
              rows={6}
              className="w-full border border-orange-300 hover:border-orange-500 px-4 py-2 rounded focus:outline-none focus:ring-2 focus:ring-orange-500 placeholder:text-sm text-black"
              required
            />
          </div>
          <div>
            <label className="block text-xl font-medium mb-2 text-black">ब्लॉग छवि</label>
            <input
              type="file"
              accept="image/*"
              onChange={handleImageUpload}
              className="w-full border border-orange-300 hover:border-orange-500 px-4 py-2 rounded text-black"
            />
            {form.image && (
              <div className="mt-2 w-full max-w-sm rounded overflow-hidden">
                <Image
                  src={form.image}
                  alt="preview"
                  width={400}
                  height={300}
                  className="w-full h-auto rounded"
                  style={{ objectFit: "cover" }}
                />
              </div>
            )}
          </div>
          <div>
            <label className="block text-xl font-medium mb-2 text-black">तारीख</label>
            <Input
              type="date"
              name="date"
              value={form.date}
              onChange={handleChange}
              className="w-full border border-orange-300 hover:border-orange-500 px-4 py-2 rounded focus:outline-none focus:ring-2 focus:ring-orange-500 placeholder:text-sm text-black"
              required
            />
          </div>
        </div>

        <Button
          type="submit"
          className="mt-6 bg-orange-700 text-white px-6 py-2 rounded hover:bg-orange-800 transition"
        >
          {mode === "create" ? "ब्लॉग जोड़ें" : "ब्लॉग अपडेट करें"}
        </Button>
      </form>

      {showDialog && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
          <div className="bg-white text-black p-6 rounded shadow-md text-center">
            <p className="text-lg font-semibold mb-4">{dialogMessage}</p>
            <Button
              onClick={() => {
                setShowDialog(false);
                router.push("/admin/dashboard");
              }}
              className="bg-orange-700 text-white px-4 py-2 rounded hover:bg-orange-800"
            >
              ठीक है
            </Button>
          </div>
        </div>
      )}
    </>
  );
}