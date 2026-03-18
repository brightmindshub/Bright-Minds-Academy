"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { courseCategories } from "@/data/courses";
import Image from "next/image";
import LeadFormModal from "../hero/LeadFormModal";
import { ArrowRight } from "lucide-react";
import { useRouter } from "next/navigation";

export default function CoursesSection() {
  const [activeTab, setActiveTab] = useState(courseCategories[0].title);
  const [showLeadForm, setShowLeadForm] = useState(false);
  const router = useRouter();

  // Find the current category object
  const currentCategory = courseCategories.find(cat => cat.title === activeTab);
  const activeCourses = currentCategory ? currentCategory.courses : [];

  return (
    <section className="relative py-20 bg-linear-to-r from-[#19125e]/5 via-white to-[#f0c44c]/10">
      <div className="hidden absolute inset-0 md:flex items-start justify-center pointer-events-none overflow-hidden">
        <h2 className="text-[50px] md:text-[130px] font-extrabold text-[#19125e] opacity-[0.04] tracking-widest whitespace-nowrap uppercase">
          Our Courses
        </h2>
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-4xl font-bold text-[#19125e] text-center mb-4 relative"
        >
          Courses Offered
        </motion.h2>

        <div className="w-20 h-0.75 bg-[#f0c44c] mx-auto mb-12 rounded-full"></div>

        {/* Tabs */}
        <div className="flex justify-center gap-4 mb-12 flex-wrap">
          {courseCategories.map(cat => (
            <button
              key={cat.title}
              onClick={() => setActiveTab(cat.title)}
              className={`px-4 py-2 rounded-lg font-medium transition border cursor-pointer ${
                activeTab === cat.title
                  ? "bg-[#19125e] text-white"
                  : "bg-white text-[#19125e] hover:bg-[#f0c44c] hover:text-[#19125e]"
              }`}
            >
              {cat.title}
            </button>
          ))}
        </div>

        {/* Course Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {activeCourses.map((course, idx) => (
            <motion.div
              key={course.slug}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              className="relative bg-white rounded-xl shadow-lg overflow-hidden flex flex-col group hover:shadow-2xl transition-all"
            >
              {/* Image */}
              <div className="relative h-44 w-full overflow-hidden">
                <Image
                  src={course.img || "/placeholder-course.jpg"}
                  alt={course.name}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                  priority
                />
                {/* Overlay on hover */}
                {/* <div
                  onClick={() => setShowLeadForm(true)}
                  className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 flex items-center justify-center cursor-pointer transition-opacity"
                >
                  <span className="text-white font-semibold bg-[#f0c44c]/90 px-4 py-2 rounded-lg">
                    Enquire Now
                  </span>
                </div> */}
              </div>

              {/* Details */}
              <div className="p-6 flex flex-col gap-4 flex-1">
                <h3 className="text-xl font-semibold text-[#19125e]">{course.name}</h3>
                <p className="text-gray-600 text-sm">{course.desc || "Learn and excel in this course with expert guidance."}</p>

                <button
                  onClick={() => {
                    if (currentCategory.title === "English & Language Tests") {
                      router.push(`/${course.slug}`);
                    } else {
                      router.push(`/${currentCategory.page}?course=${course.slug}`);
                    }
                  }}
                  className="mt-auto text-center bg-[#19125e] text-white py-2 rounded-lg hover:bg-[#f0c44c] hover:text-[#19125e] transition shadow-md flex gap-1 justify-center items-center cursor-pointer"
                >
                  Read More <span><ArrowRight width={18} height={18} /></span>
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Lead Form Modal */}
      <LeadFormModal
        open={showLeadForm}
        onClose={() => setShowLeadForm(false)}
        courses={courseCategories}
      />
    </section>
  );
}