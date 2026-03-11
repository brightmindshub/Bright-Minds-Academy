"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Linkedin, Mail } from "lucide-react";
import Link from "next/link";

const faculty = [
  {
    name: "Faculty - 1",
    role: "IELTS & PTE Trainer",
    experience: "8+ Years Experience",
    image: "/assets/dummy_faculty.jpg",
    expertise: ["IELTS", "PTE", "CELPIP"],
    description:
      "Helps students achieve high band scores with proven exam strategies.",
  },
  {
    name: "Faculty - 2",
    role: "English Communication Trainer",
    experience: "6+ Years Experience",
    image: "/assets/dummy_faculty.jpg",
    expertise: ["Spoken English", "Public Speaking", "Personality Development"],
    description:
      "Specializes in improving confidence, fluency, and communication skills.",
  },
  {
    name: "Faculty - 3",
    role: "Competitive Exams Mentor",
    experience: "7+ Years Experience",
    image: "/assets/dummy_faculty.jpg",
    expertise: ["SSC", "Banking", "CUET"],
    description:
      "Guides students with structured preparation strategies for exams.",
  },
  {
    name: "Faculty - 4",
    role: "Academic Mentor",
    experience: "5+ Years Experience",
    image: "/assets/dummy_faculty.jpg",
    expertise: ["Maths", "Science", "English"],
    description:
      "Focuses on strengthening academic foundations for school students.",
  },
];

export default function FacultyPage() {
  return (
    <main className="relative bg-[#f7f8fc] min-h-screen pt-40 pb-20 overflow-hidden">

      {/* BACKGROUND GLOW */}

      <div className="absolute top-0 left-0 w-full h-[450px] bg-linear-to-b from-[#19125e] to-[#19125e]"></div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">

        {/* HERO */}

        <section className="text-center mb-20 relative">
              {/* BACKGROUND TEXT */}

      <div className="absolute inset-0 hidden md:flex items-center justify-center pointer-events-none opacity-[0.03]">

        <h1 className="text-[120px] md:text-[180px] font-bold text-[#FFFFFF] whitespace-nowrap">
          MENTORS
        </h1>

      </div>

          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl font-bold text-[#FFFFFF]"
          >
            Learn From Our <span className="text-[#f0c44c]"> Expert Faculty</span>
          </motion.h1>

          <p className="text-gray-400 mt-4 max-w-2xl mx-auto">
            Our mentors bring years of teaching experience, deep subject
            expertise, and proven strategies that help students achieve
            outstanding results.
          </p>

        </section>

        {/* FACULTY GRID */}

        <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mb-24">

          {faculty.map((teacher, i) => (

            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              className="group bg-white rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition"
            >

              {/* IMAGE */}

              <div className="relative overflow-hidden">

                <Image
                  src={teacher.image}
                  alt={teacher.name}
                  width={400}
                  height={350}
                  className="w-full h-72 object-cover group-hover:scale-105 transition duration-500"
                />

                {/* EXPERIENCE BADGE */}

                <div className="absolute top-4 left-4 bg-white px-3 py-1 rounded-full text-xs font-medium shadow">
                  {teacher.experience}
                </div>

                {/* HOVER OVERLAY */}

                <div className="absolute inset-0 bg-[#19125e]/90 flex flex-col justify-center items-center text-center text-white opacity-0 group-hover:opacity-100 transition p-6">

                  <p className="text-sm mb-4">
                    {teacher.description}
                  </p>

                </div>

              </div>

              {/* CONTENT */}

              <div className="p-6">

                <h3 className="text-lg font-semibold text-[#19125e]">
                  {teacher.name}
                </h3>

                <p className="text-[#f0c44c] text-sm font-medium">
                  {teacher.role}
                </p>

                {/* EXPERTISE TAGS */}

                <div className="flex flex-wrap gap-2 mt-3">

                  {teacher.expertise.map((tag, index) => (

                    <span
                      key={index}
                      className="text-xs bg-[#19125e]/10 text-[#19125e] px-2 py-1 rounded"
                    >
                      {tag}
                    </span>

                  ))}

                </div>

              </div>

            </motion.div>

          ))}

        </section>

        {/* CTA */}

        <section className="bg-linear-to-r from-[#19125e] to-[#2c2375]/90 text-white rounded-2xl p-8 md:p-12 text-center shadow-xl">

          <h2 className="text-2xl md:text-3xl font-semibold mb-4">
            Start Learning With Expert Guidance
          </h2>

          <p className="text-white/80 mb-6 max-w-xl mx-auto">
            Our experienced mentors are ready to help you achieve your
            academic and career goals.
          </p>

          <Link
            href="/contact"
            className="bg-[#f0c44c] text-[#19125e] px-7 py-3 rounded-lg font-medium hover:scale-105 transition inline-block"
          >
            Get Free Counselling
          </Link>

        </section>

      </div>
    </main>
  );
}