"use client";

import { motion } from "framer-motion";
import { CheckCircle, Target, Award } from "lucide-react";

export default function AboutSection() {
  return (
    <section className="relative py-20 overflow-hidden bg-linear-to-br from-[#19125e]/10 via-white to-[#f0c44c]/10" id="about">
      <div className="hidden absolute inset-0 md:flex items-start justify-center pointer-events-none overflow-hidden">

  <h2 className="text-[50px] md:text-[130px] font-extrabold text-[#19125e] opacity-[0.04] tracking-widest whitespace-nowrap uppercase">
    Bright Minds
  </h2>

</div>
      {/* Decorative background blobs */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute top-[-120px] left-[-120px] w-[420px] h-[420px] bg-[#19125e]/20 rounded-full blur-2xl"></div>
        <div className="absolute bottom-[-120px] right-[-120px] w-[420px] h-[420px] bg-[#f0c44c]/30 rounded-full blur-2xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        {/* Section Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-4xl font-bold text-[#19125e] text-center mb-4 relative"
        >
          About Us
        </motion.h2>

        {/* Decorative underline below heading */}
        <div className="w-20 h-[3px] bg-[#f0c44c] mx-auto mb-12 rounded-full"></div>

        {/* Academy Description */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-gray-700 text-lg text-center max-w-3xl mx-auto mb-16"
        >
          Bright Minds Academy empowers students to achieve their full potential across 
          language proficiency tests, competitive exams, and academic courses. 
          We provide premium guidance, personalized mentorship, and proven strategies 
          to help students excel in IELTS, PTE, CELPIP, Duolingo, Spoken English, 
          Sainik School, RIMC, SSC, CUET, and school academics — ensuring success in every path they choose.
        </motion.p>

        {/* Mission & Vision Section */}
        <div className="grid lg:grid-cols-2 gap-10">

          {/* Mission Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="relative bg-white rounded-xl shadow-lg p-8 flex flex-col gap-4"
          >
            <div className="flex items-center gap-3">
              <Target size={28} className="text-[#f0c44c]" />
              <h3 className="text-2xl font-semibold text-[#19125e]">Our Mission</h3>
            </div>
            <p className="text-gray-700">
              BrightMinds Academy: Mastering the scores that open doors. We provide premium support and training to turn your study-abroad dreams into a reality.
            </p>
            <ul className="flex flex-col gap-2 mt-2">
              <li className="flex items-center gap-2 text-gray-700">
                <CheckCircle size={18} className="text-[#f0c44c]" />
                Certified Trainers Across Domains
              </li>
              <li className="flex items-center gap-2 text-gray-700">
                <CheckCircle size={18} className="text-[#f0c44c]" />
                Mock Tests & Personalized Feedback
              </li>
              <li className="flex items-center gap-2 text-gray-700">
                <CheckCircle size={18} className="text-[#f0c44c]" />
                Individualized Learning Plans
              </li>
            </ul>
          </motion.div>

          {/* Vision Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="relative bg-white rounded-xl shadow-lg p-8 flex flex-col gap-4"
          >
            <div className="flex items-center gap-3">
              <Award size={28} className="text-[#f0c44c]" />
              <h3 className="text-2xl font-semibold text-[#19125e]">Our Vision</h3>
            </div>
            <p className="text-gray-700">
              We aim to bridge the gap between ambition and reality by equipping students with the scores and skills to pursue their passion on a global stage. We strive to be the catalyst that helps parents secure the bright future they envision for their children.
            </p>
            <ul className="flex flex-col gap-2 mt-2">
              <li className="flex items-center gap-2 text-gray-700">
                <CheckCircle size={18} className="text-[#f0c44c]" />
                CELTA & Domain-Certified Trainers
              </li>
              <li className="flex items-center gap-2 text-gray-700">
                <CheckCircle size={18} className="text-[#f0c44c]" />
                10+ Years of Education Expertise
              </li>
              <li className="flex items-center gap-2 text-gray-700">
                <CheckCircle size={18} className="text-[#f0c44c]" />
                Excellence Across All Courses
              </li>
            </ul>
          </motion.div>

        </div>
      </div>
    </section>
  );
}