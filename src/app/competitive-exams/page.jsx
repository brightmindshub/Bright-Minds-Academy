"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { useSearchParams } from "next/navigation";
import ContactForm from "@/components/contactForm/ContactForm";

const courses = {
sainik: {
name: "Sainik School",
tagline: "Prepare for a disciplined future",
description:
"Comprehensive preparation for Sainik School entrance exams with expert faculty and structured learning.",
features: [
"Complete syllabus coverage",
"Daily practice & doubt sessions",
"Mock tests & performance tracking",
"Interview preparation",
],
},
rimc: {
name: "RIMC",
tagline: "Crack one of the toughest exams",
description:
"Focused training program for Rashtriya Indian Military College entrance exam.",
features: [
"Written exam preparation",
"English & Maths focus",
"Interview guidance",
"Regular assessments",
],
},
rms: {
name: "Rashtriya Military School",
tagline: "Build leadership from early stage",
description:
"Structured coaching for RMS entrance exam with emphasis on academics and discipline.",
features: [
"Concept clarity sessions",
"Mock exams",
"SSB interview basics",
"Doubt clearing sessions",
],
},
ssc: {
name: "SSC",
tagline: "Government job preparation",
description:
"Complete preparation for SSC exams with subject-wise training and mock practice.",
features: [
"Quantitative aptitude",
"Reasoning & English",
"Previous year papers",
"Mock test series",
],
},
cuet: {
name: "CUET",
tagline: "Secure admission in top universities",
description:
"Prepare for CUET with subject-specific guidance and exam strategies.",
features: [
"Domain subject preparation",
"Mock tests",
"Time management",
"Exam strategy sessions",
],
},
ctet: {
name: "CTET",
tagline: "Become a certified teacher",
description:
"Complete CTET preparation with pedagogy and subject knowledge training.",
features: [
"Child pedagogy",
"Subject-wise practice",
"Mock tests",
"Doubt solving",
],
},
htet: {
name: "HTET",
tagline: "State-level teaching exam prep",
description:
"Targeted preparation for HTET with updated syllabus and practice sessions.",
features: [
"Subject coverage",
"Mock tests",
"Previous year questions",
"Strategy sessions",
],
},
banking: {
name: "Banking Exams",
tagline: "Secure your banking career",
description:
"Prepare for IBPS, SBI, and other banking exams with expert guidance.",
features: [
"Reasoning & aptitude",
"English preparation",
"Mock interviews",
"Full-length test series",
],
},
};

export default function CompetitiveCoursesPage() {
const searchParams = useSearchParams();
const courseParam = searchParams.get("course");

const [active, setActive] = useState("sainik");

useEffect(() => {
if (courseParam && courses[courseParam]) {
setActive(courseParam);
}
}, [courseParam]);

return ( <main className="bg-[#f7f8fc] min-h-screen">

  {/* HERO */}

  <section className="pt-40 pb-15 text-center bg-[#19125e] relative">

    <motion.h1
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      className="text-4xl md:text-5xl font-bold text-[#FFFFFF] relative"
    >

      <div className="absolute inset-0 hidden md:flex items-center justify-center pointer-events-none opacity-[0.03]">
        <h1 className="text-[120px] md:text-[180px] font-bold text-white whitespace-nowrap pt-10">
          EXAMS
        </h1>
      </div>

      Competitive <span className="text-[#f0c44c]">Exams</span>

    </motion.h1>

    <p className="text-gray-400 mt-4 max-w-2xl mx-auto">
      Prepare for top competitive exams with expert guidance and structured programs.
    </p>

  </section>

  {/* MAIN */}

  <section className="max-w-7xl mx-auto px-6 pb-20 mt-5">

    <div className="grid lg:grid-cols-3 gap-10">

      {/* LEFT */}

      <div className="lg:col-span-1">

        {/* MOBILE DROPDOWN */}
        <div className="lg:hidden">
          <select
            value={active}
            onChange={(e) => setActive(e.target.value)}
            className="w-full border border-gray-300 px-4 py-3 rounded-xl"
          >
            {Object.entries(courses).map(([key, course]) => (
              <option key={key} value={key}>
                {course.name}
              </option>
            ))}
          </select>
        </div>

        {/* DESKTOP */}
        <div className="hidden lg:block bg-white rounded-2xl shadow-lg p-4 sticky top-32">
          {Object.entries(courses).map(([key, course]) => (
            <button
              key={key}
              onClick={() => setActive(key)}
              className={`w-full text-left px-4 py-3 rounded-lg mb-1 transition cursor-pointer
              ${active === key
                  ? "bg-[#19125e] text-white"
                  : "hover:bg-gray-100 text-[#19125e]"}`}
            >
              {course.name}
            </button>
          ))}
        </div>

      </div>

      {/* RIGHT */}

      <motion.div
        key={active}
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        className="lg:col-span-2 bg-white rounded-2xl shadow-xl p-4 md:p-8"
      >

        <h2 className="text-3xl font-semibold text-[#19125e] mb-2">
          {courses[active].name}
        </h2>

        <p className="text-[#f0c44c] mb-4">
          {courses[active].tagline}
        </p>

        <p className="text-gray-600 mb-6">
          {courses[active].description}
        </p>

        <div className="grid md:grid-cols-2 gap-4 mb-8">
          {courses[active].features.map((item, i) => (
            <div key={i} className="bg-[#f7f8fc] p-4 rounded-lg">
              ✔ {item}
            </div>
          ))}
        </div>

        {/* FORM */}

        <div className="border-t pt-8">

          <h3 className="text-xl font-semibold mb-4 text-[#19125e]">
            Enquire for {courses[active].name}
          </h3>

          <ContactForm
            courses={[
              {
                title: "Competitive Exams",
                courses: Object.values(courses).map(c => c.name),
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
