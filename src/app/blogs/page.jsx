import BlogCard from "@/components/blogs/BlogCard";
import { getPosts } from "@/lib/api";

export default async function BlogPage() {
  const blogs = await getPosts();

  return (
    <main className="relative bg-[#f7f8fc] min-h-screen pt-40 pb-20 overflow-hidden">
      {/* background glow */}

      <div className="absolute top-0 left-0 w-full h-[400px] bg-linear-to-b from-[#19125e] to-[#19125e]"></div>

      <div className=" relative z-10">
        {/* HERO */}

        <section className="max-w-7xl mx-auto px-6 text-center mb-20 relative">
          <div className="absolute inset-0 hidden md:flex items-center justify-center pointer-events-none opacity-[0.03]">
            <h1 className="text-[120px] md:text-[180px] font-bold text-[#FFFFFF] whitespace-nowrap">
              BLOG
            </h1>
          </div>
          <h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl font-bold text-[#FFFFFF]"
          >
            Explore <span className="text-[#f0c44c]">Our Latest Blogs</span>
          </h1>
        </section>

        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-4 md:px-0">
          {blogs.map((blog) => (
            <BlogCard key={blog.id} blog={blog} />
          ))}
        </div>
      </div>
    </main>
  );
}
