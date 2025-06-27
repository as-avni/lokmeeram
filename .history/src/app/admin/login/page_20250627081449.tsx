"use client";

import { useEffect } from "react";
import { getAuth, signInWithPopup, GoogleAuthProvider, onAuthStateChanged } from "firebase/auth";
import { app } from "@/lib/firebase";

export default function AdminLoginPage() {
  const auth = getAuth(app);
  const provider = new GoogleAuthProvider();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        // You can redirect to the admin dashboard or another page
        console.log("User signed in:", user);
      }
    });

    return () => unsubscribe();
  }, [auth]);

  const handleGoogleLogin = async () => {
    try {
      await signInWithPopup(auth, provider);
    } catch (error) {
      console.error("Login error:", error);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen px-4">
      <h1 className="text-3xl font-bold text-orange-700 mb-4">व्यवस्थापक लॉगिन</h1>
      <button
        onClick={handleGoogleLogin}
        className="bg-orange-700 text-white px-6 py-2 rounded hover:bg-orange-800"
      >
        Google से लॉगिन करें
      </button>
    </div>
  );
}