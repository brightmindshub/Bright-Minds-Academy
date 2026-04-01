"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import ContactForm from "@/components/contactForm/ContactForm";
import FAQSection from "@/components/faq/FaqSection";
import { useRouter } from "next/navigation";
import Popup from "@/components/leadPopup/LeadPopup";
import { IELTSOverview } from "./IeltsOverview";
import { WhyChooseUs } from "./WhyChooseUs";

const ieltsFaqs = [
  {
    question: "What is IELTS and why is it important?",
    answer:
      "IELTS (International English Language Testing System) is a globally recognized English proficiency test required for studying, working, or migrating abroad. It is accepted by universities, employers, and immigration authorities in countries like Canada, UK, Australia, and more.",
  },
  {
    question: "How long does IELTS preparation take?",
    answer:
      "Preparation usually takes 4 to 8 weeks depending on your current English level and target band score. Beginners may need more time, while intermediate learners can achieve their desired score faster with proper guidance.",
  },
  {
    question: "What is the difference between Academic and General IELTS?",
    answer:
      "IELTS Academic is for students applying to universities or higher education, while IELTS General is for migration or work purposes. The listening and speaking sections are the same, but reading and writing sections differ.",
  },
  {
    question: "Do you provide mock tests and practice materials?",
    answer:
      "Yes, we provide full-length mock tests, practice questions, and detailed performance analysis to help you understand your strengths and improve weak areas effectively.",
  },
  {
    question: "Can I take a demo class before enrolling?",
    answer:
      "Absolutely! We offer a free demo class so you can experience our teaching style, interact with trainers, and understand how the course will help you achieve your target band score.",
  },
];

const courses = [
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

export default function IELTSPage() {
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
    <main className="bg-white pt-20 md:pt-24">
      <Popup
  open={open}
  setOpen={setOpen}
  title="Get Your Target Band Score"
  description="Book a FREE demo class & get a personalized study plan."
>
  <ContactForm
    courses={[{ title: "English", courses: ["IELTS"] }]}
    defaultCourse="IELTS"
  />
</Popup>

      <section className="relative min-h-[60vh] md:min-h-[80vh] flex items-center overflow-hidden">
        {/* RIGHT IMAGE */}
        <div className="absolute right-0 top-0 w-1/2 h-full hidden md:block">
          <img
            src="/assets/ielts-page.webp"
            alt="IELTS Student"
            className="w-full h-full object-cover"
          />
          {/* Soft fade overlay */}
          <div className="absolute inset-0 " />
        </div>

        {/* LEFT CONTENT */}
        <div className="relative z-10 max-w-7xl mx-auto px-6 w-full">
          <div className="max-w-xl">
            {/* Small Label */}
            <p className="text-[#19125e] font-semibold mb-3 border-l-4 border-[#f0c44c] pl-3">
              IELTS Coaching Program
            </p>

            {/* Heading */}
            <h1 className="text-4xl md:text-5xl font-bold text-[#19125e] leading-tight">
              Prepare for IELTS with{" "}
              <span className="text-[#2a1fa0]">Expert Trainers</span>
            </h1>

            {/* Subtext */}
            <p className="mt-6 text-gray-600 text-lg">
              Get the band score you need with structured training, real exam
              strategies, and personalised feedback.
            </p>

            {/* Bullet Points */}
            <ul className="mt-6 space-y-2 text-gray-700">
              <li>• Flexible batch timings</li>
              <li>• Live + recorded classes</li>
              <li>• 24/7 doubt support</li>
            </ul>

            {/* CTA */}
            <button
              onClick={() => setOpen(true)}
              className="mt-8 bg-[#f0c44c] text-[#19125e] px-8 py-4 rounded-full font-semibold shadow-lg hover:scale-105 transition"
            >
              Book Free Demo
            </button>
          </div>
        </div>
      </section>

      <IELTSOverview setOpen={setOpen}/>
      <WhyChooseUs setOpen={setOpen}/>

      <section className="py-24 bg-[#f7f8fc] overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">
          {/* RIGHT IMAGE + FLOATING CARDS */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <img src="/assets/hero-bg.jpg" className="rounded-2xl shadow-xl" />

            {/* Speaking */}
            <div className="absolute top-4 md:top-10 left-[-30px] md:left-[-40px] bg-white p-4 rounded-xl shadow-lg w-36">
              <div className="text-red-500 text-xl mb-1">💬</div>
              <p className="text-sm font-semibold">Speaking</p>
            </div>

            {/* Reading */}
            <div className="absolute top-[-40px] md:top-[-20px] right-10 bg-white p-4 rounded-xl shadow-lg w-36">
              <div className="text-red-500 text-xl mb-1">📖</div>
              <p className="text-sm font-semibold">Reading</p>
            </div>

            {/* Writing */}
            <div className="absolute bottom-[-20px] left-10 bg-white p-4 rounded-xl shadow-lg w-36">
              <div className="text-red-500 text-xl mb-1">✍️</div>
              <p className="text-sm font-semibold">Writing</p>
            </div>

            {/* Listening */}
            <div className="absolute bottom-10 right-[-40px] bg-white p-4 rounded-xl shadow-lg w-36">
              <div className="text-red-500 text-xl mb-1">🔊</div>
              <p className="text-sm font-semibold">Listening</p>
            </div>
          </motion.div>
          {/* LEFT CONTENT */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-[#19125e] leading-tight">
              Get closer to your target <br /> IELTS band score
            </h2>

            <ul className="mt-8 space-y-5 text-gray-700">
              {[
                "Prepare for Academic or General Training IELTS",
                "Improve test-related skills in listening, reading, writing and speaking",
                "Gain test awareness and understand exam format",
                "Develop effective test strategies and techniques",
                "Choose the best IELTS course for your needs",
                "Be confident and fully prepared on test day",
              ].map((item, i) => (
                <li key={i} className="flex gap-3 items-start">
                  <span className="text-red-500 text-xl mt-1">✔</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>

            <button
              onClick={() => setOpen(true)}
              className="mt-10 bg-[#f0c44c] text-[#19125e] px-8 py-4 rounded-full font-semibold shadow-lg hover:scale-105 transition"
            >
              Explore Program for Free
            </button>
          </motion.div>
        </div>
      </section>

      <section className="relative py-24 overflow-hidden">
        {/* BACKGROUND */}
        <div className="absolute inset-0 bg-[#f0c44c]" />

        {/* CURVED IMAGE LEFT */}
        <div className="absolute left-0 top-0 h-full w-[45%] hidden md:block overflow-hidden rounded-r-[300px]">
          <img
            src="/assets/ielts-asset.webp"
            alt="IELTS Student"
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
          <div className="text-white max-w-md ml-auto px-0 md:px-0">
            {/* HEADING */}
            <h2 className="text-3xl md:text-4xl font-bold mb-6 leading-tight text-[#19125e]">
              Free IELTS preparation study tips
            </h2>

            {/* FORM */}
            <div className="bg-white p-6 rounded-2xl shadow-xl text-black">
              <ContactForm
                courses={[{ title: "English", courses: ["IELTS"] }]}
                defaultCourse="IELTS"
              />
            </div>
          </div>
        </div>
      </section>

      <FAQSection
        courses={courses}
        faqs={ieltsFaqs}
        showPopup={false}
        title="Want to Know More ?"
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
