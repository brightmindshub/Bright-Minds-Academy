"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import LeadPopup from "@/components/leadPopup/LeadPopup";
import ContactForm from "@/components/contactForm/ContactForm";
import FAQSection from "@/components/faq/FaqSection";
import { useRouter } from "next/navigation";
import Popup from "@/components/leadPopup/LeadPopup";

const celpipFaqs = [
  {
    question: "What is the CELPIP test and who should take it?",
    answer:
      "CELPIP (Canadian English Language Proficiency Index Program) is an English test designed for Canada immigration, PR, and work purposes. It is ideal for candidates applying through Express Entry or other Canadian pathways.",
  },
  {
    question: "What is CLB and why is it important?",
    answer:
      "CLB (Canadian Language Benchmark) converts your CELPIP score into a level used by immigration authorities. Scoring CLB 9 or above significantly boosts your CRS points and PR chances.",
  },
  {
    question: "How long does CELPIP preparation take?",
    answer:
      "Most students can prepare within 3 to 5 weeks depending on their current English level and target CLB score.",
  },
  {
    question: "How is CELPIP different from IELTS?",
    answer:
      "CELPIP is fully computer-based and focuses on real-life Canadian English tasks like writing emails and responding to situations, while IELTS includes face-to-face speaking and more academic-style questions.",
  },
  {
    question: "Do you provide mock tests and practice materials?",
    answer:
      "Yes, we provide full-length mock tests, practice exercises, and detailed performance analysis to help you improve quickly.",
  },
  {
    question: "Can I take the CELPIP test from home?",
    answer:
      "No, CELPIP must be taken at an official test center, but our preparation can be done completely online from home.",
  },
  {
    question: "What is a good CELPIP score for Canada PR?",
    answer:
      "A score equivalent to CLB 9 or higher is considered ideal as it significantly increases your CRS points and improves PR chances.",
  },
  {
    question: "Do you offer a free demo class?",
    answer:
      "Yes, you can book a free demo class to experience our teaching method and get a personalized study plan.",
  },
];

const features = [
  {
    title: "Canada-Focused Preparation",
    desc: "Learn real-life English used in Canadian workplaces and daily communication.",
    icon: "🇨🇦",
  },
  {
    title: "Real CELPIP Test Simulation",
    desc: "Practice on a platform that replicates the actual CELPIP exam interface.",
    icon: "💻",
  },
  {
    title: "CLB 9+ Score Strategy",
    desc: "Master proven techniques to achieve CLB 9 or higher for PR success.",
    icon: "🎯",
  },
  {
    title: "AI Speaking & Writing Feedback",
    desc: "Get instant evaluation and improve your responses with detailed insights.",
    icon: "🤖",
  },
  {
    title: "Task-Based Training",
    desc: "Learn how to handle emails, surveys, and real-life scenarios effectively.",
    icon: "📝",
  },
  {
    title: "Expert Mentorship",
    desc: "1:1 guidance from certified trainers to improve your weak areas.",
    icon: "👨‍🏫",
  },
  {
    title: "Fast-Track Preparation",
    desc: "Achieve your target score in just 3–5 weeks with structured plans.",
    icon: "⚡",
  },
  {
    title: "Full-Length Mock Tests",
    desc: "Track your progress with real exam-level mock tests and analysis.",
    icon: "📊",
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

export default function CelpipPage() {
  const router = useRouter();
  const [open, setOpen] = useState(false);

  useEffect(() => {
  const headerOffset = 600;

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
        title="Score Higher in CELPIP Test"
        description="Book a FREE demo class & get a personalized study plan."
      >
        <ContactForm
          courses={[{ title: "English", courses: ["CELPIP"] }]}
          defaultCourse="CELPIP"
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
          <h1 className="text-4xl md:text-5xl font-bold text-[#19125e] leading-tight">
  Crack <span className="text-[#f0c44c]">CELPIP Test</span>
  <br />
  for Canada PR & Work
</h1>

<p className="text-gray-600 mt-6 max-w-lg">
  Achieve your target CELPIP score with real test simulations,
  AI-based practice, and expert strategies designed for Canadian
  immigration success.
</p>

{/* FEATURES LIST */}
<div className="mt-6 space-y-2 text-gray-700">
  <p>✔ Canada-focused English test preparation</p>
  <p>✔ Real CELPIP exam simulation platform</p>
  <p>✔ AI-based speaking & writing evaluation</p>
  <p>✔ Task-based strategies for all modules</p>
  <p>✔ Fast-track preparation (3–5 weeks)</p>
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
            src="/assets/celpip-asset.png"
            alt="PTE Student"
            className="w-full md:w-[520px] h-full  rounded-2xl  relative z-10"
          />


        </motion.div>
      </div>
    </section>

    <section className="py-24 bg-[#f9fbff]">
  <div className="max-w-7xl mx-auto px-6">

    {/* HEADER */}
    <div className="text-center max-w-3xl mx-auto">
      <h2 className="text-3xl md:text-4xl font-bold text-[#19125e]">
        Understand CELPIP Scores for{" "}
        <span className="text-[#2a7de1]">Canada PR</span>
      </h2>

      <p className="text-gray-600 mt-4">
        Your CELPIP score directly impacts your CRS points and PR chances.
        Here’s how scores convert to CLB levels.
      </p>
    </div>

    {/* TABLE */}
    <div className="mt-12 overflow-x-auto">
      <table className="w-full bg-white rounded-2xl shadow-xl overflow-hidden">
        <thead className="bg-[#19125e] text-white">
          <tr>
            <th className="py-4 px-6 text-left">CELPIP Score</th>
            <th className="py-4 px-6 text-left">CLB Level</th>
            <th className="py-4 px-6 text-left">PR Impact</th>
          </tr>
        </thead>

        <tbody className="text-gray-700">
          <tr className="border-b">
            <td className="py-4 px-6">12</td>
            <td className="py-4 px-6 font-semibold">CLB 12</td>
            <td className="py-4 px-6 text-green-600 font-medium">
              Maximum CRS Points 🚀
            </td>
          </tr>

          <tr className="border-b">
            <td className="py-4 px-6">10 - 11</td>
            <td className="py-4 px-6 font-semibold">CLB 10–11</td>
            <td className="py-4 px-6 text-green-600">
              Excellent PR Chances
            </td>
          </tr>

          <tr className="border-b">
            <td className="py-4 px-6">9</td>
            <td className="py-4 px-6 font-semibold">CLB 9</td>
            <td className="py-4 px-6 text-green-500">
              High CRS Boost ⭐
            </td>
          </tr>

          <tr className="border-b">
            <td className="py-4 px-6">7 - 8</td>
            <td className="py-4 px-6 font-semibold">CLB 7–8</td>
            <td className="py-4 px-6 text-yellow-600">
              Minimum PR Eligibility
            </td>
          </tr>

          <tr>
            <td className="py-4 px-6">Below 7</td>
            <td className="py-4 px-6 font-semibold">Below CLB 7</td>
            <td className="py-4 px-6 text-red-500">
              Low PR Chances
            </td>
          </tr>
        </tbody>
      </table>
    </div>

    {/* INSIGHT BOX */}
    <div className="mt-12 bg-[#2a7de1]/10 border border-[#2a7de1]/20 rounded-2xl p-6 text-center">
      <h3 className="text-xl font-semibold text-[#19125e]">
        Target CLB 9 or Above
      </h3>

      <p className="text-gray-700 mt-2 max-w-2xl mx-auto">
        Scoring CLB 9+ can significantly increase your CRS points and
        improve your chances of receiving an Invitation to Apply (ITA)
        for Canada PR.
      </p>
    <button onClick={()=> setOpen(true)} className="mt-6 bg-[#19125e] text-white px-6 py-3 rounded-full cursor-pointer hover:scale-105 transition hover:bg-[#f0c44c] hover:text-[#19125e]">
  Get Your Target CLB Score Plan
</button>
    </div>
  </div>
</section>

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
            Why Choose{" "}
            <span className="text-[#f0c44c]">BrightMinds</span> for CELPIP?
          </h2>

          <p className="text-gray-600 mt-4">
            Everything you need to achieve a high CELPIP score — smart tools,
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
          <div className="hidden md:block"></div>

          {/* RIGHT CONTENT */}
          <div className="text-white max-w-md ml-auto">
            {/* HEADING */}
            <h2 className="text-3xl md:text-4xl font-bold mb-6 leading-tight text-[#19125e]">
              Free CELPIP preparation study tips
            </h2>

            {/* FORM */}
            <div className="bg-white p-6 rounded-2xl shadow-xl text-black">
              <ContactForm
                courses={[{ title: "English", courses: ["CELPIP"] }]}
                defaultCourse="CELPIP"
              />
            </div>
          </div>
        </div>
      </section>

      <FAQSection
        courses={courses}
        faqs={celpipFaqs}
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
