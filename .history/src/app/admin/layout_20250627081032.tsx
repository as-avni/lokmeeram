export default function AdminLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-orange-700 text-white px-6 py-4">
        <h1 className="text-xl font-bold">Lok Me Ram Admin Panel</h1>
      </header>
      <main>{children}</main>
    </div>
  );
}