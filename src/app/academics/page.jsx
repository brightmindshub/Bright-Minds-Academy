"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { useSearchParams } from "next/navigation";
import ContactForm from "@/components/contactForm/ContactForm";

const courses = {
class8to10: {
name: "Class 8 - 10 (Maths, Science, English)",
tagline: "Strong foundation for higher studies",
description:
"Comprehensive coaching for Class 8-10 covering Maths, Science, and English with interactive sessions and regular assessments.",
features: [
"Concept clarity & practice",
"Daily assignments",
"Periodic tests & feedback",
"Exam preparation guidance",
],
},
class11to12: {
name: "Class 11 - 12 (Maths, Science, English)",
tagline: "Excel in your board exams",
description:
"Focused programs for Class 11-12 students, covering key concepts, problem-solving techniques, and exam-oriented practice.",
features: [
"Advanced problem-solving",
"Interactive learning",
"Board exam pattern practice",
"Personalized mentoring",
],
},
interviewPrep: {
name: "Interview Preparation",
tagline: "Crack interviews with confidence",
description:
"Structured training for academic and competitive interviews with mock sessions and personalized guidance.",
features: [
"Resume & profile building",
"Mock interviews",
"Communication & confidence skills",
"Personal feedback",
],
},
personalityDev: {
name: "Personality Development",
tagline: "Build your confidence & soft skills",
description:
"Enhance your communication, leadership, and interpersonal skills through structured personality development programs.",
features: [
"Communication & public speaking",
"Leadership workshops",
"Confidence building exercises",
"Teamwork & social skills",
],
},
};

export default function AcademicsCoursesPage() {
const searchParams = useSearchParams();
const courseParam = searchParams.get("course");

const [active, setActive] = useState("class8to10");

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
          ACADEMICS
        </h1>
      </div>

      Academics & <span className="text-[#f0c44c]">Learning Programs</span>

    </motion.h1>

    <p className="text-gray-400 mt-4 max-w-2xl mx-2 md:mx-auto">
      Achieve academic excellence with our structured programs and expert guidance.
    </p>

  </section>

  {/* MAIN */}

  <section className="max-w-7xl mx-auto px-6 pb-20 mt-5">

    <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">

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

        {/* LEAD FORM */}

        <div className="border-t pt-8">
          <h3 className="text-xl font-semibold mb-4 text-[#19125e]">
            Enquire for {courses[active].name}
          </h3>

          <ContactForm
            courses={[
              {
                title: "Academics",
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
