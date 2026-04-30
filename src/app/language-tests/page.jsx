"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { useSearchParams } from "next/navigation";
import ContactForm from "@/components/contactForm/ContactForm";

const courses = {
  ielts: {
    name: "IELTS",
    tagline: "Achieve your dream band score",
    description:
      "Comprehensive IELTS preparation covering all modules with expert guidance and real exam strategies.",
    features: [
      "Reading, Writing, Listening & Speaking",
      "Daily practice sessions",
      "Mock tests with band evaluation",
      "Personal feedback & improvement plan",
    ],
  },
  pte: {
    name: "PTE",
    tagline: "Fast-track your PTE success",
    description:
      "AI-based PTE training with real exam simulation and score boosting techniques.",
    features: [
      "Computer-based practice",
      "Speaking & pronunciation drills",
      "Real exam simulation",
      "Score improvement strategies",
    ],
  },
  duolingo: {
    name: "Duolingo",
    tagline: "Quick and smart preparation",
    description:
      "Prepare for Duolingo English Test with structured practice and proven techniques.",
    features: [
      "Adaptive test strategies",
      "Vocabulary & grammar focus",
      "Practice tests",
      "Time management training",
    ],
  },
  celpip: {
    name: "CELPIP",
    tagline: "Canadian English Test Preparation",
    description:
      "Focused CELPIP preparation with real exam patterns and scoring techniques.",
    features: [
      "Listening & speaking mastery",
      "Writing task practice",
      "Mock tests",
      "Score improvement tips",
    ],
  },
  oet: {
    name: "OET",
    tagline: "For healthcare professionals",
    description:
      "Specialized English training for healthcare professionals preparing for OET.",
    features: [
      "Medical vocabulary training",
      "Role-play speaking practice",
      "Writing case notes",
      "Mock exams",
    ],
  },
  spoken: {
    name: "Spoken English",
    tagline: "Fluency from beginner to advanced",
    description:
      "Improve your spoken English confidence with practical sessions and real-life conversations.",
    features: [
      "Daily speaking practice",
      "Grammar correction",
      "Confidence building",
      "Interview preparation",
    ],
  },
  french: {
    name: "French",
    tagline: "Learn a global language",
    description:
      "Structured French language program for beginners to advanced learners.",
    features: [
      "Speaking & listening",
      "Grammar & vocabulary",
      "Certification preparation",
      "Interactive sessions",
    ],
  },
  german: {
    name: "German",
    tagline: "Master German step-by-step",
    description:
      "Learn German with structured levels and real-life communication practice.",
    features: [
      "A1 to B2 levels",
      "Conversation practice",
      "Exam preparation",
      "Interactive learning",
    ],
  },
};

export default function EnglishCoursesPage() {
  const searchParams = useSearchParams();
  const courseParam = searchParams.get("course");

  const [active, setActive] = useState("ielts");

  // URL se auto select
  useEffect(() => {
    if (courseParam && courses[courseParam]) {
      setActive(courseParam);
    }
  }, [courseParam]);

  return (
    <main className="bg-[#f7f8fc] min-h-screen">
      {/* HERO */}

      <section className="pt-40 pb-15 text-center bg-[#19125e] relative">
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-4xl md:text-5xl font-bold text-[#FFFFFF] relative"
        >
          <div className="absolute inset-0 hidden md:flex items-center justify-center pointer-events-none opacity-[0.03]">
            <h1 className="text-[120px] md:text-[180px] font-bold text-[#FFFFFF] whitespace-nowrap pt-10">
              LANGUAGE
            </h1>
          </div>
          English & <span className="text-[#f0c44c]"> Language Courses</span>
        </motion.h1>

        <p className="text-gray-400 mt-4 max-w-2xl mx-auto">
          Choose your course and start your journey today.
        </p>
      </section>

      {/* MAIN */}

      <section className="max-w-7xl mx-auto px-6 pb-20 mt-5">
        <div className="grid lg:grid-cols-3 gap-10">
          {/* LEFT TABS */}
          <div className="lg:col-span-1">
            {/* MOBILE DROPDOWN */}
            <div className="lg:hidden">
              <select
                value={active}
                onChange={(e) => setActive(e.target.value)}
                className="w-full border border-gray-300 px-4 py-3 rounded-xl focus:outline-none focus:border-[#19125e] bg-white shadow-sm"
              >
                {Object.entries(courses).map(([key, course]) => (
                  <option key={key} value={key}>
                    {course.name}
                  </option>
                ))}
              </select>
            </div>

            {/* DESKTOP TABS */}
            <div className="hidden lg:block bg-white rounded-2xl shadow-lg p-4 sticky top-32 h-fit">
              {Object.entries(courses).map(([key, course]) => (
                <button
                  key={key}
                  onClick={() => setActive(key)}
                  className={`w-full text-left px-4 py-3 rounded-lg mb-1 transition cursor-pointer
        ${
          active === key
            ? "bg-[#19125e] text-white"
            : "hover:bg-gray-100 text-[#19125e]"
        }`}
                >
                  {course.name}
                </button>
              ))}
            </div>
          </div>

          {/* RIGHT CONTENT */}

          <motion.div
            key={active}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="lg:col-span-2 bg-white rounded-2xl shadow-xl p-4 md:p-8"
          >
            <h2 className="text-3xl font-semibold text-[#19125e] mb-2">
              {courses[active].name}
            </h2>

            <p className="text-[#f0c44c] mb-4">{courses[active].tagline}</p>

            <p className="text-gray-600 mb-6">{courses[active].description}</p>

            <div className="grid md:grid-cols-2 gap-4 mb-8">
              {courses[active].features.map((item, i) => (
                <div key={i} className="bg-[#f7f8fc] p-4 rounded-lg">
                  ✔ {item}
                </div>
              ))}
            </div>

            <div className="border-t pt-8">
              <h3 className="text-xl font-semibold mb-4 text-[#19125e]">
                Enquire for {courses[active].name}
              </h3>

              <ContactForm
                courses={[
                  {
                    title: "English",
                    courses: Object.values(courses).map((c) => c.name),
                  },
                ]}
                defaultCourse={courses[active].name}
              />
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
