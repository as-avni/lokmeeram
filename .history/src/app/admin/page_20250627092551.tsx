"use client";
import { useEffect } from "react";
import { useRouter } from "next/navigation";
import AdminNav from "@/components/AdminNav";

export default function AdminPage() {
  const router = useRouter();

  useEffect(() => {
    router.push("/admin/login");
  }, [router]);

  return (
    <>
      <AdminNav />
    </>
  );
}