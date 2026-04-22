"use client";

import { motion } from "framer-motion";
import { Users, MessageCircle, BookOpen, Laptop } from "lucide-react";
import { useState } from "react";
import LeadFormModal from "@/components/hero/LeadFormModal";
import StatsSection from "./StatsSection";

const features = [
  {
    title: "Expert Trainers",
    desc: "Learn from highly experienced trainers who have helped hundreds of students achieve their target scores.",
    icon: Users,
  },
  {
    title: "Personalized Attention",
    desc: "Regular feedback and individual strategies for IELTS, PTE, French, German and other English tests.",
    icon: MessageCircle,
  },
  {
    title: "Comprehensive Study Materials",
    desc: "Structured notes, practice tests and exam-focused resources for better preparation.",
    icon: BookOpen,
  },
  {
    title: "Flexible Classes",
    desc: "Choose between offline classroom training or convenient online learning.",
    icon: Laptop,
  },
];

const courses = [
  {
    title: "English & Language Tests",
    courses: [
      "IELTS (Academic & General)",
      "PTE (Academic & Core)",
      "Spoken English (Beginner - Advanced)",
      "French",
      "German",
      "Professional Nanny Course",
      "Duolingo",
      "CELPIP",
      "OET",
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

export default function WhyChooseSection() {
  const [showLeadForm, setShowLeadForm] = useState(false);

  return (
    <section className="relative py-24 overflow-hidden bg-linear-to-br from-[#19125e]/10 via-white to-[#f0c44c]/10">
      <div className="hidden absolute inset-0 md:flex items-start justify-center pointer-events-none overflow-hidden">
        <h2 className="text-[50px] md:text-[130px] font-extrabold text-[#19125e] opacity-[0.04] tracking-widest whitespace-nowrap uppercase">
          Why Us?
        </h2>
      </div>
      {/* Decorative background blobs */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-[-120px] left-[-120px] w-[420px] h-[420px] bg-[#19125e]/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-[-120px] right-[-120px] w-[420px] h-[420px] bg-[#f0c44c]/30 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-4xl font-bold text-[#19125e] text-center mb-4"
        >
          Why Choose BrightMinds?
        </motion.h2>

        <div className="w-20 h-[3px] bg-[#f0c44c] mx-auto mb-12 rounded-full"></div>

        {/* Student Rating */}
        <div className="flex justify-center mb-10">
          <div className="flex items-center gap-3 bg-white shadow-lg px-6 py-3 rounded-full border border-gray-100">
            {/* Stars */}
            <div className="flex text-[#f0c44c] text-lg">★ ★ ★ ★ ★</div>

            <p className="text-gray-700 text-sm font-medium">
              <span className="font-semibold text-[#19125e]">4.9/5 Rating</span>{" "}
              from 500+ Students
            </p>
          </div>
        </div>

        {/* Stats */}
        <StatsSection />

        {/* Success Banner */}
        <div className="relative mb-16">
          <div className="bg-linear-to-r from-[#19125e] to-[#2c2375] text-white rounded-xl p-8 shadow-xl text-center">
            <h3 className="text-2xl font-semibold mb-2">
              Empowering Students to Excel Globally
            </h3>

            <p className="text-white/80 max-w-3xl mx-auto text-md">
              At BrightMinds Academy, we equip students with the knowledge,
              skills, and confidence to succeed in language proficiency tests,
              competitive exams, and academic courses like IELTS, PTE, French, German and other English proficiency courses. We guide learners every step of the way to achieve
              their study-abroad and career dreams.
            </p>
          </div>

          {/* Glow */}
          <div className="absolute -z-10 inset-0 blur-3xl bg-[#19125e]/20 rounded-xl"></div>
        </div>

        {/* Features */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;

            return (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.15 }}
                className="bg-white p-6 rounded-xl shadow-lg hover:shadow-2xl transition-all group"
              >
                {/* Icon */}
                <div className="w-14 h-14 flex items-center justify-center rounded-xl bg-[#19125e]/10 text-[#19125e] mb-4 group-hover:bg-[#f0c44c]/20 transition">
                  <Icon size={28} />
                </div>

                <h3 className="text-xl font-semibold text-[#19125e] mb-2">
                  {feature.title}
                </h3>

                <p className="text-gray-600 text-sm leading-relaxed">
                  {feature.desc}
                </p>
              </motion.div>
            );
          })}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="flex justify-center mt-16"
        >
          <button
            onClick={() => setShowLeadForm(true)}
            className="bg-[#19125e] text-white px-8 py-4 rounded-lg font-semibold shadow-lg hover:bg-[#f0c44c] hover:text-[#19125e] transition cursor-pointer"
          >
            Book Free Consultation
          </button>
        </motion.div>
      </div>

      {/* Lead Form Modal */}
      <LeadFormModal
        open={showLeadForm}
        onClose={() => setShowLeadForm(false)}
        courses={courses}
      />
    </section>
  );
}
