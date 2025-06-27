

import Link from "next/link";

export default function AdminNav() {
  return (
    <nav className="bg-orange-100 border-b border-orange-300 p-4 shadow-md">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <div className="text-2xl font-bold text-orange-800">
          Admin Panel
        </div>
        <div className="space-x-6">
          <Link href="/admin/dashboard" className="text-orange-700 hover:text-orange-900 font-medium">Dashboard</Link>
          <Link href="/admin/blogs" className="text-orange-700 hover:text-orange-900 font-medium">Blogs</Link>
          <Link href="/admin/logout" className="text-orange-700 hover:text-orange-900 font-medium">Logout</Link>
        </div>
      </div>
    </nav>
  );
}