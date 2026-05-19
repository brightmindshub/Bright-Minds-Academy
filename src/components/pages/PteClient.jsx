"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import LeadPopup from "@/components/leadPopup/LeadPopup";
import ContactForm from "@/components/contactForm/ContactForm";
import FAQSection from "@/components/faq/FaqSection";
import { useRouter } from "next/navigation";
import Popup from "@/components/leadPopup/LeadPopup";
import BeforeAfter from "@/app/pte/BeforeAfter";
import { PTEOverview } from "@/app/pte/PTEoverview";

const pteFaqs = [
  {
    question: "What is PTE and why should I take it?",
    answer:
      "PTE (Pearson Test of English) is an English language proficiency test widely accepted by universities, employers, and immigration authorities worldwide. It offers fast results and is recognized for study, work, and migration.",
  },
  {
    question: "How long does PTE preparation usually take?",
    answer:
      "Preparation time varies but typically ranges from 3 to 6 weeks depending on your English skills and target score. Consistent practice and expert guidance help accelerate your progress.",
  },
  {
    question: "What are the key sections of the PTE exam?",
    answer:
      "The PTE exam consists of Speaking & Writing, Reading, and Listening sections. It tests real-life English skills in an integrated format.",
  },
  {
    question: "Do you offer mock tests and practice materials for PTE?",
    answer:
      "Yes, we provide full-length mock tests, detailed practice exercises, and personalized feedback to help you improve your performance and confidence.",
  },
  {
    question: "Can I attend a demo class before enrolling?",
    answer:
      "Definitely! We offer free demo classes so you can experience our teaching style and understand how we tailor our courses to help you achieve your target PTE score.",
  },
];

const courses = [
  {
    title: "English & Language Tests",
    courses: [
      "PTE (Academic & Core)",
      "IELTS (Academic & General)",
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

const features = [
  {
    title: "AI-Powered Scoring",
    desc: "Get instant feedback with scoring identical to the real PTE system.",
    icon: "🤖",
  },
  {
    title: "Real Exam Simulation",
    desc: "Practice on a platform that mirrors the actual PTE interface.",
    icon: "🖥️",
  },
  {
    title: "79+ Score Strategy",
    desc: "Learn proven frameworks used by top scorers to maximize results.",
    icon: "🎯",
  },
  {
    title: "Expert Mentorship",
    desc: "1:1 guidance from certified PTE trainers at every step.",
    icon: "👨‍🏫",
  },
  {
    title: "Daily Practice System",
    desc: "Structured daily tasks to improve speaking, writing & reading.",
    icon: "📅",
  },
  {
    title: "Fast-Track Program",
    desc: "Achieve your target score in just 4–6 weeks.",
    icon: "⚡",
  },
];

export default function PteClient() {
  const router = useRouter();
  const [open, setOpen] = useState(false);
  useEffect(() => {
    const headerOffset = 200;

    window.scrollTo({ top: 0 });

    setTimeout(() => {
      window.scrollBy({
        top: -headerOffset,
        behavior: "smooth",
      });
    }, 50);
  }, []);

  useEffect(() => {
    const timer = setTimeout(() => {
      setOpen(true);
    }, 6000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <main className="bg-white pt-5">
      <Popup
        open={open}
        setOpen={setOpen}
        title="Score Higher in PTE"
        description="Book a FREE demo class & get a personalized study plan."
      >
        <ContactForm
          courses={[{ title: "English", courses: ["PTE"] }]}
          defaultCourse="PTE"
        />
      </Popup>

      <section className="relative overflow-hidden pt-40 pb-24 bg-gradient-to-r from-[#eef4ff] via-[#f7f8fc] to-[#ffffff]">
        {/* 🔵 Background Effects */}
        <div className="absolute top-[-100px] left-[-100px] w-[300px] h-[300px] bg-[#19125e]/20 rounded-full blur-3xl" />
        <div className="absolute bottom-[-120px] right-[-100px] w-[350px] h-[350px] bg-[#f0c44c]/30 rounded-full blur-3xl" />

        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 items-center gap-10 relative z-10">
          {/* LEFT CONTENT */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-[#19125e] font-semibold mb-3 border-l-4 border-[#f0c44c] pl-3">
              PTE Preparation Program
            </p>
            <h1 className="text-4xl md:text-5xl font-bold text-[#19125e] leading-tight">
              Smart <span className="text-[#f0c44c]">PTE Preparation</span>
              <br />
              Starts Here
            </h1>

            <p className="text-gray-600 mt-6 max-w-lg">
              Achieve your target PTE score faster with AI-powered mock tests,
              real exam simulations, and expert mentorship designed for success.
            </p>

            {/* NEW FEATURES LIST */}
            <div className="mt-6 space-y-2 text-gray-700">
              <p>✔ Real exam-like practice platform</p>
              <p>✔ Personalized study plan</p>
              <p>✔ Daily speaking & writing feedback</p>
              <p>✔ 1:1 mentor support</p>
            </div>

            <button
              onClick={() => setOpen(true)}
              className="mt-8 bg-[#19125e] text-white px-7 py-3 rounded-full shadow-xl hover:scale-105 hover:shadow-2xl transition duration-300"
            >
              Book Free Demo
            </button>
          </motion.div>

          {/* RIGHT IMAGE */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7 }}
            className="relative flex justify-center"
          >
            {/* Image */}
            <img
              src="/assets/pte-student.jpg"
              alt="PTE Student"
              className="w-full md:w-[520px] h-[350px] md:h-[600px] object-cover rounded-2xl shadow-2xl relative z-10"
            />

            {/* Glow Ring */}
            <div className="absolute w-[350px] h-[350px] border-2 border-[#19125e]/20 rounded-full top-10 animate-pulse" />
          </motion.div>
        </div>
      </section>

      <PTEOverview setOpen={setOpen} />
      <BeforeAfter setOpen={setOpen} />

      <section className="relative py-24 bg-[#f9fbff] overflow-hidden">
        {/* 🌈 Background Glow */}
        <div className="absolute top-[-100px] left-[-100px] w-[300px] h-[300px] bg-[#19125e]/10 rounded-full blur-3xl" />
        <div className="absolute bottom-[-120px] right-[-100px] w-[300px] h-[300px] bg-[#f0c44c]/20 rounded-full blur-3xl" />

        <div className="max-w-7xl mx-auto px-6 relative z-10">
          {/* HEADER */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center max-w-3xl mx-auto"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-[#19125e]">
              Why Choose <span className="text-[#f0c44c]">BrightMinds</span> for
              PTE?
            </h2>

            <p className="text-gray-600 mt-4">
              Everything you need to achieve a high PTE score — smart tools,
              expert guidance, and a system designed for fast results.
            </p>
          </motion.div>

          {/* FEATURES GRID */}
          <div className="grid md:grid-cols-3 gap-8 mt-16">
            {features.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                viewport={{ once: true }}
                className="group relative p-[1px] rounded-2xl bg-gradient-to-br from-[#19125e]/20 to-[#f0c44c]/30 hover:scale-[1.03] transition duration-300"
              >
                {/* Glass Card */}
                <div className="bg-white/80 backdrop-blur-xl rounded-2xl p-6 h-full shadow-lg group-hover:shadow-2xl transition">
                  {/* ICON */}
                  <div className="w-12 h-12 flex items-center justify-center rounded-full bg-[#19125e]/10 text-xl mb-4">
                    {item.icon}
                  </div>

                  {/* TITLE */}
                  <h3 className="text-lg font-semibold text-[#19125e]">
                    {item.title}
                  </h3>

                  {/* DESC */}
                  <p className="text-gray-600 text-sm mt-2 leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>

          {/* 🔥 TRUST BAR */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            viewport={{ once: true }}
            className="mt-20 bg-white rounded-2xl shadow-xl p-8 grid md:grid-cols-3 text-center gap-6"
          >
            <div>
              <h3 className="text-2xl font-bold text-[#19125e]">100+</h3>
              <p className="text-gray-600 text-sm">Students Trained</p>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-[#19125e]">79+</h3>
              <p className="text-gray-600 text-sm">Average Score</p>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-[#19125e]">4–6 Weeks</h3>
              <p className="text-gray-600 text-sm">Fast Track Result</p>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="relative py-24 overflow-hidden">
        {/* BACKGROUND */}
        <div className="absolute inset-0 bg-[#f0c44c]" />

        {/* CURVED IMAGE LEFT */}
        <div className="absolute left-0 top-0 h-full w-[45%] hidden md:block overflow-hidden rounded-r-[300px]">
          <img
            src="/assets/pte-asset.jpg"
            alt="PTE Student"
            className="w-full h-full object-cover"
          />
          {/* OPTIONAL OVERLAY */}
          <div className="absolute inset-0 bg-black/40"></div>
        </div>

        {/* CONTENT */}
        <div className="relative z-10 max-w-7xl px-6 grid md:grid-cols-2 gap-12 items-center justify-center">
          {/* EMPTY LEFT SPACE (important for layout) */}
          <div className="hidden md:block"></div>

          {/* RIGHT CONTENT */}
          <div className="text-white max-w-md ml-auto px-0">
            {/* HEADING */}
            <h2 className="text-3xl md:text-4xl font-bold mb-6 leading-tight text-[#19125e]">
              Free PTE preparation study tips
            </h2>

            {/* FORM */}
            <div className="bg-white p-6 rounded-2xl shadow-xl text-black">
              <ContactForm
                courses={[{ title: "English", courses: ["PTE"] }]}
                defaultCourse="PTE"
              />
            </div>
          </div>
        </div>
      </section>

      <FAQSection
        courses={courses}
        faqs={pteFaqs}
        showPopup={false}
        title="Want to Know More?"
      />

      <section className="py-20 bg-gradient-to-r from-[#f0c44c] via-[#e6bb3c] to-[#d8a724]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-12">
            {/* LEFT IMAGE */}
            <div className="relative w-full md:w-1/2">
              <div className="overflow-hidden rounded-[40px] shadow-xl ring-4 ring-[#19125e]">
                <img
                  src="/assets/support.jpg"
                  alt="Support"
                  className="w-full h-[420px] object-cover transition-transform duration-500 hover:scale-105"
                />
              </div>
            </div>

            {/* RIGHT CONTENT */}
            <div className="w-full md:w-1/2 text-center md:text-left text-[#19125e]">
              <h2 className="text-4xl md:text-5xl font-extrabold mb-6 leading-tight">
                Need Help?
                <br />
                <span className="text-[#2a1fa0]">We’re Here For You</span>
              </h2>

              <p className="text-lg mb-8 max-w-lg mx-auto md:mx-0 leading-relaxed">
                Have any questions or need assistance? Our expert support team
                is available 24/7 to guide you through your journey. Don’t
                hesitate to reach out — we're always ready to help.
              </p>

              <button
                onClick={() => router.push("/contact")}
                className="bg-[#19125e] hover:bg-[#2a1fa0] text-white px-10 py-4 rounded-3xl font-semibold shadow-lg transition transform hover:scale-105 cursor-pointer"
              >
                Contact us
              </button>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
