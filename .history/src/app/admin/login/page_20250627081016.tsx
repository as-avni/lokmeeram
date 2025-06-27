"use client";

export default function AdminLoginPage() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen px-4">
      <h1 className="text-3xl font-bold text-orange-700 mb-4">व्यवस्थापक लॉगिन</h1>
      {/* Implement Firebase Auth here */}
      <button className="bg-orange-700 text-white px-6 py-2 rounded hover:bg-orange-800">
        Google से लॉगिन करें
      </button>
    </div>
  );
}