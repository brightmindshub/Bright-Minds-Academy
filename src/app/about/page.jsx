"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Users, Award, BookOpen, Target } from "lucide-react";
import Link from "next/link";

export default function AboutPage() {
  return (
    <main className="relative bg-[#f7f8fc] min-h-screen pt-40 pb-20 overflow-hidden">

      {/* BACKGROUND GLOW */}

      <div className="absolute top-0 left-0 w-full h-[500px] bg-linear-to-b from-[#19125e]/10 to-transparent"></div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">

        {/* HERO SECTION */}

        <section className="grid lg:grid-cols-2 gap-12 items-center mb-28">

          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
          >

            <span className="bg-[#19125e]/10 text-[#19125e] px-4 py-1 rounded-full text-sm font-medium">
              About Our Academy
            </span>

            <h1 className="text-4xl md:text-5xl font-bold text-[#19125e] mt-6 leading-[110%]">
              Building Bright Futures Through
              <span className="text-[#f0c44c]"> Quality Education</span>
            </h1>

            <p className="text-gray-600 mt-6 text-lg leading-relaxed">
              BrightMinds Academy helps students succeed in language tests,
              competitive exams, and academics through structured learning,
              expert faculty, and personalized mentoring.
            </p>

            <p className="text-gray-600 mt-4">
              Our goal is not just to teach but to build confidence,
              communication skills, and strong academic foundations that
              empower students to achieve their dreams.
            </p>

            {/* STATS */}

            <div className="grid grid-cols-3 gap-6 mt-10">

              <div>
                <p className="text-3xl font-bold text-[#19125e]">500+</p>
                <p className="text-sm text-gray-600">Students Trained</p>
              </div>

              <div>
                <p className="text-3xl font-bold text-[#19125e]">10+</p>
                <p className="text-sm text-gray-600">Expert Teachers</p>
              </div>

              <div>
                <p className="text-3xl font-bold text-[#19125e]">10+</p>
                <p className="text-sm text-gray-600">Years Experience</p>
              </div>

            </div>

            <Link
              href="/contact"
              className="inline-block mt-8 bg-[#19125e] text-white px-6 py-3 rounded-lg hover:bg-[#f0c44c] hover:text-[#19125e] transition"
            >
              Get Free Counselling
            </Link>

          </motion.div>

          {/* IMAGE SIDE */}

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            className="relative"
          >

            <Image
              src="/assets/about_page.jpg"
              alt="BrightMinds Academy"
              width={550}
              height={400}
              className="rounded-2xl shadow-2xl object-cover"
            />

            {/* floating badge */}

            <div className="absolute -bottom-6 -left-4 bg-white shadow-xl rounded-xl p-4">

              <p className="text-sm text-gray-500">Student Rating</p>

              <p className="text-xl font-semibold text-[#19125e]">
                ⭐ 4.9 / 5
              </p>

            </div>

          </motion.div>

        </section>

        {/* MISSION VISION */}

        <section className="grid md:grid-cols-2 gap-10 mb-28">

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-white rounded-2xl p-8 shadow-xl border border-gray-100"
          >

            <h2 className="text-2xl font-semibold text-[#19125e] mb-4">
              Our Mission
            </h2>

            <p className="text-gray-600 leading-relaxed">
              BrightMinds Academy: Mastering the scores that open doors. We provide premium support and training to turn your study-abroad dreams into a reality.
            </p>

          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="bg-white rounded-2xl p-8 shadow-xl border border-gray-100"
          >

            <h2 className="text-2xl font-semibold text-[#19125e] mb-4">
              Our Vision
            </h2>

            <p className="text-gray-600 leading-relaxed">
              We aim to bridge the gap between ambition and reality by equipping students with the scores and skills to pursue their passion on a global stage. We strive to be the catalyst that helps parents secure the bright future they envision for their children.
            </p>

          </motion.div>

        </section>

        {/* WHY CHOOSE US */}

        <section className="mb-28">

          <div className="text-center mb-14 relative">
                  {/* FLOATING TEXT BACKGROUND */}

      <div className="absolute inset-0 hidden md:flex items-center justify-center pointer-events-none opacity-[0.03]">

        <h1 className="text-[120px] md:text-[160px] font-bold text-[#19125e] whitespace-nowrap">
          BRIGHTMINDS
        </h1>

      </div>

            <h2 className="text-3xl font-bold text-[#19125e]">
              Why Choose BrightMinds?
            </h2>

            <p className="text-gray-600 mt-3">
              A learning environment built to help you succeed.
            </p>

          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">

            {[
              {
                icon: Users,
                title: "Expert Faculty",
                text: "Experienced teachers dedicated to student success.",
              },
              {
                icon: BookOpen,
                title: "Structured Learning",
                text: "Carefully designed programs for maximum improvement.",
              },
              {
                icon: Award,
                title: "Proven Results",
                text: "Students consistently achieve high scores.",
              },
              {
                icon: Target,
                title: "Personal Mentorship",
                text: "Guidance tailored to every student.",
              },
            ].map((item, i) => {
              const Icon = item.icon;

              return (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 40 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.1 }}
                  className="bg-white p-7 rounded-xl shadow-lg border border-gray-100 hover:shadow-2xl hover:-translate-y-1 transition"
                >

                  <div className="bg-[#19125e]/10 w-12 h-12 flex items-center justify-center rounded-lg mb-4">
                    <Icon className="text-[#19125e]" size={22} />
                  </div>

                  <h3 className="font-semibold text-[#19125e] mb-2">
                    {item.title}
                  </h3>

                  <p className="text-gray-600 text-sm">
                    {item.text}
                  </p>

                </motion.div>
              );
            })}

          </div>

        </section>

        {/* CTA */}

        <section className="bg-linear-to-r from-[#19125e] to-[#2c2375] text-white rounded-2xl p-10 md:p-14 text-center shadow-2xl">

          <h2 className="text-2xl md:text-3xl font-semibold mb-4">
            Start Your Learning Journey Today
          </h2>

          <p className="text-white/80 mb-6 max-w-xl mx-auto">
            Join BrightMinds Academy and take the first step towards achieving
            your academic and career goals.
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