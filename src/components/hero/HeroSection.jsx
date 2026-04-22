"use client";

import { motion } from "framer-motion";
import { ArrowRight, CheckCircle } from "lucide-react";
import Image from "next/image";
import { useState } from "react";
import LeadFormModal from "./LeadFormModal";
import GeneralLeadModal from "./GeneralLeadModal";

const floatingCourses = [
  { name: "IELTS", position: "top-6 -left-6" },
  { name: "SSC", position: "top-16 -right-8" },
  { name: "Spoken English", position: "bottom-16 -left-10" },
  { name: "CUET", position: "bottom-6 right-6" },
  { name: "German", position: "top-1/2 -right-10" },
];

const courseCategories = [
  {
    title: "English & Language Tests",
    courses: [
      "IELTS (Academic & General)",
      "PTE (Academic & Core)",
      "French",
      "German",
      "Professional Nanny Course",
      "Duolingo",
      "CELPIP",
      "OET",
      "Spoken English (Beginner - Advanced)",
    ],
  },
  {
    title: "Competitive Exams",
    courses: [
      "Sainik School",
      "RIMC",
      "Rashtriya Military School",
      "SSC",
      "CUET",
      "CTET",
      "HTET",
      "Banking Exams",
    ],
  },
  {
    title: "Academics",
    courses: [
      "Class 8 - 10 (Maths, Science, English)",
      "Class 11 - 12 (Maths, Science, English)",
      "Interview Preparation",
      "Personality Development",
    ],
  },
];

export default function Hero() {
  const [leadFormOpen, setLeadFormOpen] = useState(false);

  return (
    <section className="pt-40 pb-20 bg-linear-to-br from-[#19125e]/10 via-white to-[#f0c44c]/20 overflow-hidden">
      <GeneralLeadModal />

      <div className="max-w-7xl mx-auto px-6 lg:px-12 grid lg:grid-cols-2 gap-12 items-center">
        <div>
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl lg:text-5xl font-black text-[#19125e] leading-[1.1]"
          >
            Unlock Your Potential with{" "}
            <span className="text-[#f0c44c]">BrightMinds Academy</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="mt-6 text-gray-600 text-lg leading-relaxed"
          >
            Master language tests, competitive exams, and academic subjects with
            our expert trainers, small batches, and proven strategies for
            guaranteed improvement.
          </motion.p>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="mt-6 space-y-3"
          >
            {[
              "Expert Trainers of All Subjects",
              "Small Batches & Personalized Attention",
              "Mock Tests & Detailed Feedback",
              "Personality Development & Interview Preparation",
            ].map((item) => (
              <div key={item} className="flex items-center gap-2">
                <CheckCircle size={20} className="text-[#f0c44c]" />
                <span className="text-gray-700 font-medium">{item}</span>
              </div>
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="flex gap-4 mt-10"
          >
            <button
              onClick={() => setLeadFormOpen(true)}
              className="bg-[#19125e] text-white px-8 py-4 rounded-2xl hover:bg-[#f0c44c] hover:text-[#19125e] transition-all flex gap-2 items-center cursor-pointer shadow-xl font-bold active:scale-95"
            >
              Book Free Demo <ArrowRight size={20} />
            </button>
          </motion.div>

          <LeadFormModal
            open={leadFormOpen}
            onClose={() => setLeadFormOpen(false)}
            courses={courseCategories}
          />
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="relative"
        >
          <div className="relative z-10 shadow-2xl rounded-[2.5rem] overflow-hidden border-8 border-white">
            <Image
              src="/assets/hero-bg.jpg"
              alt="IELTS Preparation"
              width={600}
              height={500}
              className="object-cover"
              priority
            />
          </div>

          {floatingCourses.map((course, index) => (
            <motion.div
              key={course.name}
              animate={{ y: [0, -12, 0] }}
              transition={{
                delay: index * 0.3,
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className={`hidden md:block absolute z-20 ${course.position} bg-white/90 backdrop-blur-md border border-[#f0c44c]/30 shadow-lg px-5 py-2.5 rounded-2xl text-sm font-bold text-[#19125e]`}
            >
              {course.name}
            </motion.div>
          ))}

          <div className="absolute -bottom-8 -right-4 md:-right-8 bg-[#f0c44c] text-[#19125e] px-6 py-4 rounded-2xl shadow-2xl font-black z-30 transform rotate-3">
            10+ YEARS EXPERIENCE
          </div>
        </motion.div>
      </div>
    </section>
  );
}
