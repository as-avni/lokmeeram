import BlogForm from "@/components/BlogForm";

export default function CreateBlogPage() {
  return (
    <div className="max-w-3xl mt-20 mx-auto px-4 py-12">
      <h1 className="text-3xl font-bold text-orange-700 mb- ">नया ब्लॉग जोड़ें</h1>
      <BlogForm mode="create" />
    </div>
  );
}