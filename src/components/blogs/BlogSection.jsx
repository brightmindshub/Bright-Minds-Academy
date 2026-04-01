import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { getPosts } from "@/lib/api";
import BlogCard from "./BlogCard";

export default async function BlogsSection() {
  const blogs = await getPosts();

  return (
    <section id="blogs" className="relative py-24 bg-gray-50 scroll-mt-32">
      <div className="hidden absolute inset-0 md:flex items-start justify-center pointer-events-none overflow-hidden">
        <h2 className="text-[50px] md:text-[130px] font-extrabold text-[#19125e] opacity-[0.04] tracking-widest whitespace-nowrap uppercase">
          Blog
        </h2>
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <h2 className="text-4xl font-bold text-[#19125e] text-center mb-4">
          Latest Blogs & Insights
        </h2>

        <div className="w-20 h-0.75 bg-[#f0c44c] mx-auto mb-12 rounded-full"></div>

        {/* Blog Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogs.slice(0, 3).map((blog) => (
            <BlogCard key={blog.id} blog={blog} />
          ))}
        </div>

        {/* View All */}
        <div className="flex justify-center mt-16">
          <Link
            href="/blogs"
            className="bg-[#19125e] text-white px-8 py-4 rounded-lg font-semibold shadow-lg hover:bg-[#f0c44c] hover:text-[#19125e] transition flex items-center gap-1"
          >
            View All <ArrowRight width={18} height={18} />
          </Link>
        </div>
      </div>
    </section>
  );
}
