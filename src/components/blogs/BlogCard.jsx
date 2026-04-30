import Image from "next/image";
import Link from "next/link";

export default function BlogCard({ blog }) {
  const image =
    blog._embedded?.["wp:featuredmedia"]?.[0]?.source_url ||
    "/assets/hero-bg.jpg";

  const formattedDate = new Date(blog.date).toLocaleDateString("en-US", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });

  return (
    <div className="group bg-white rounded-2xl overflow-hidden shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_20px_50px_rgba(25,18,94,0.12)] transition-all duration-500 border border-gray-50 flex flex-col h-full relative">
      {/* Image Container */}
      <div className="relative h-64 overflow-hidden">
        <Image
          src={image}
          alt={blog.title.rendered}
          fill
          className="object-cover transition-transform duration-1000 ease-in-out group-hover:scale-105"
        />

        {/* Badges Overlay */}
        <div className="absolute top-5 left-5 right-5 flex justify-between items-start">
          <span className="bg-[#f0c44c] text-[#19125e] text-[10px] uppercase tracking-[0.15em] font-bold px-4 py-1.5 rounded-full shadow-xl">
            Blog
          </span>

          {/* Floating Date Glassmorphism */}
          <div className="bg-white/80 backdrop-blur-md px-3 py-1 rounded-lg shadow-sm border border-white/20">
            <p className="text-[#19125e] text-[11px] font-bold tracking-tight">
              {formattedDate}
            </p>
          </div>
        </div>
      </div>

      {/* Content Area */}
      <div className="p-4 flex flex-col grow relative">
        <div className="flex items-center gap-3 mb-2">
          <div className="w-8 h-[2px] bg-[#f0c44c]" />
        </div>

        <h3
          className="text-xl font-bold text-[#19125e] leading-snug mb-2 group-hover:text-[#f0c44c] transition-colors duration-300"
          dangerouslySetInnerHTML={{ __html: blog.title.rendered }}
        />

        <div
          className="text-gray-500 text-sm leading-relaxed mb-14 line-clamp-3 font-normal"
          dangerouslySetInnerHTML={{ __html: blog.excerpt.rendered }}
        />

        {/* Footer Actions */}
        <div className="absolute bottom-8 left-4 right-8 flex items-center justify-between pt-6">
          <Link
            href={`/blogs/${blog.slug}`}
            className="group/btn relative inline-flex items-center gap-2 text-[#19125e] font-bold text-xs tracking-widest overflow-hidden w-full"
          >
            <span>READ ARTICLE</span>
            <div className="flex items-center transition-transform duration-300 group-hover/btn:translate-x-1">
              <svg
                className="w-4 h-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2.5"
                  d="M17 8l4 4m0 0l-4 4m4-4H3"
                />
              </svg>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}
