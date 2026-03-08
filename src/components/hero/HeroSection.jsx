"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, CheckCircle } from "lucide-react";
import Image from "next/image";
import { useState } from "react";
import LeadFormModal from "./LeadFormModal";

const floatingCourses = [
  { name: "IELTS", position: "top-6 -left-6" },
  { name: "PTE", position: "top-16 -right-8" },
  { name: "Spoken English", position: "bottom-16 -left-10" },
  { name: "French", position: "bottom-6 right-6" },
  { name: "German", position: "top-1/2 -right-10" },
];

const courseCategories = [
  {
    title: "English & Language Tests",
    courses: [
      "IELTS (Academic & General)",
      "PTE (Academic & Core)",
      "Duolingo",
      "CELPIP",
      "OET",
      "Spoken English (Beginner - Advanced)",
      "French",
      "German",
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
    <section className="pt-40 pb-20 bg-linear-to-br from-[#19125e]/10 via-white to-[#f0c44c]/20">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 grid lg:grid-cols-2 gap-12 items-center">
        <div>
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl lg:text-5xl font-bold text-[#19125e] leading-[110%]"
          >
            Achieve Your Dream Score in{" "}
            <span className="text-[#f0c44c]">IELTS & PTE</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="mt-6 text-gray-600 text-lg"
          >
            Join Bright Minds Academy and prepare for IELTS, PTE, Spoken
            English, and Competitive Exams with expert faculty and proven
            strategies.
          </motion.p>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="mt-6 space-y-3"
          >
            {[
              "Certified Trainers",
              "Small Batch Size",
              "Mock Tests & Personal Feedback",
              "Interview & Personality Development",
            ].map((item) => (
              <div key={item} className="flex items-center gap-2">
                <CheckCircle size={20} className="text-[#f0c44c]" />
                <span className="text-gray-700">{item}</span>
              </div>
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="flex gap-4 mt-8"
          >
            <button
              onClick={() => setLeadFormOpen(true)}
              className="bg-[#19125e] text-white px-6 py-3 rounded-lg hover:bg-[#f0c44c] hover:text-[#19125e] transition flex gap-1 items-center cursor-pointer"
            >
              Book Free Demo <span><ArrowRight width={20} height={20}/></span>
            </button>
          </motion.div>
          <LeadFormModal
  open={leadFormOpen}
  onClose={() => setLeadFormOpen(false)}
  courses={courseCategories}
/>
        </div>

        <motion.div
          initial={{ opacity: 0, x: 80 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="relative"
        >
          <Image
            src="/assets/hero-bg.jpg"
            alt="IELTS Preparation"
            width={600}
            height={500}
            className="rounded-xl shadow-lg"
          />

          {floatingCourses.map((course, index) => (
            <motion.div
              key={course.name}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: [0, -10, 0] }}
              transition={{
                delay: index * 0.2,
                duration: 3,
                repeat: Infinity,
              }}
              className={`hidden md:block absolute ${course.position} bg-white border border-[#f0c44c] shadow-md px-4 py-2 rounded-full text-sm font-medium text-[#19125e]`}
            >
              {course.name}
            </motion.div>
          ))}

          <div className="absolute -bottom-6 -left-4 md:-left-6 bg-[#f0c44c] text-[#19125e] px-5 py-3 rounded-lg shadow-lg font-semibold">
            10+ Years of Experience
          </div>
        </motion.div>
      </div>
    </section>
  );
}
