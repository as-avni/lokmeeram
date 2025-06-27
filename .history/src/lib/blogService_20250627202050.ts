// src/lib/blogService.ts
import { collection, getDocs } from "firebase/firestore";
import { db } from "./firebase"; // make sure path is correct

export async function fetchBlogs() {
  const snapshot = await getDocs(collection(db, "blogs"));
  const blogs = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
  console.log("🔥 Blogs fetched from Firestore:", blogs);
  return blogs;
}