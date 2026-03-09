"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

const blogs = [
  {
    title: "How to Score 8+ Bands in IELTS in 30 Days",
    desc: "Discover proven strategies, daily practice plans, and expert tips to achieve a high IELTS score quickly.",
    image: "/assets/hero-bg.jpg",
    category: "IELTS",
  },
  {
    title: "PTE vs IELTS: Which Test Should You Choose?",
    desc: "Confused between PTE and IELTS? This guide compares both exams and helps you choose the right one.",
    image: "/assets/hero-bg.jpg",
    category: "PTE",
  },
  {
    title: "Top 7 Tips to Crack Sainik School Entrance Exam",
    desc: "Prepare effectively for the Sainik School exam with these expert tips and smart preparation strategies.",
    image: "/assets/hero-bg.jpg",
    category: "Competitive Exams",
  },
];

export default function BlogsSection() {
  return (
    <section id="blogs" className="relative py-24 bg-gray-50 scroll-mt-32">
        <div className="hidden absolute inset-0 md:flex items-start justify-center pointer-events-none overflow-hidden">

  <h2 className="text-[50px] md:text-[130px] font-extrabold text-[#19125e] opacity-[0.04] tracking-widest whitespace-nowrap uppercase">
    Blog
  </h2>

</div>
      <div className="max-w-7xl mx-auto px-6 lg:px-12">

        {/* Section Header */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-4xl font-bold text-[#19125e] text-center mb-4"
        >
          Latest Blogs & Insights
        </motion.h2>

        <div className="w-20 h-0.75 bg-[#f0c44c] mx-auto mb-12 rounded-full"></div>

        {/* Blog Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogs.map((blog, i) => (
            <motion.div
              key={i}
              whileHover={{ y: -8 }}
              transition={{ duration: 0.3 }}
              className="bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition relative"
            >
              {/* Blog Image */}
              <div className="relative h-52 overflow-hidden">
                <Image
                  src={blog.image}
                  alt={blog.title}
                  fill
                  className="object-cover hover:scale-110 transition duration-500"
                />

                {/* Category Badge */}
                <span className="absolute top-4 left-4 bg-[#f0c44c] text-[#19125e] text-xs font-semibold px-3 py-1 rounded-full">
                  {blog.category}
                </span>
              </div>

              {/* Content */}
              <div className="p-6 flex flex-col gap-3">
                <h3 className="text-lg font-semibold text-[#19125e] leading-snug">
                  {blog.title}
                </h3>

                <p className="text-gray-600 text-sm mb-5">
                  {blog.desc}
                </p>

                <button
                  href="/blog"
                  className="absolute bottom-2 text-[#19125e] font-medium hover:text-[#f0c44c] transition cursor-pointer"
                >
                  Read More →
                </button>
              </div>
            </motion.div>
          ))}
        </div>

        {/* View All Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="flex justify-center mt-16"
        >
          <button
            onClick={() => setShowLeadForm(true)}
            className="bg-[#19125e] text-white px-8 py-4 rounded-lg font-semibold shadow-lg hover:bg-[#f0c44c] hover:text-[#19125e] transition cursor-pointer flex items-center gap-1"
          >
            View All <span><ArrowRight width={18} height={18}/></span>
          </button>
        </motion.div>
      </div>
    </section>
  );
}