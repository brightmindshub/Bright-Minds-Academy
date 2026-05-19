"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import ContactForm from "@/components/contactForm/ContactForm";
import FAQSection from "@/components/faq/FaqSection";
import { useRouter } from "next/navigation";
import Popup from "@/components/leadPopup/LeadPopup";
import { OETOverview } from "@/app/oet/OETOverview";
import { BeforeAfterOET } from "@/app/oet/BeforeAfterOET";

const oetFaqs = [
  {
    question: "What is OET and who should take it?",
    answer:
      "OET (Occupational English Test) is an English language test for healthcare professionals seeking to work abroad. It assesses listening, reading, writing, and speaking skills in medical contexts.",
  },
  {
    question: "How long does OET preparation usually take?",
    answer:
      "Preparation time varies depending on your current English level, but most students can achieve their target grade in 4–6 weeks with focused practice.",
  },
  {
    question: "Do you provide mock tests for OET?",
    answer:
      "Yes! We provide full-length OET mock tests with real exam scenarios and detailed feedback to help you improve before the real test.",
  },
  {
    question: "Can I take a demo class before enrolling?",
    answer:
      "Absolutely! You can book a free demo class to experience our teaching style and understand how we help you achieve your target grade.",
  },
  {
    question: "How is OET different from IELTS?",
    answer:
      "OET is specifically designed for healthcare professionals with tasks based on real medical situations. IELTS is more general and academic in nature.",
  },
  {
    question: "Do you offer personalized feedback?",
    answer:
      "Yes, our certified trainers provide detailed feedback on your writing, speaking, and clinical notes, tailored to your profession.",
  },
  {
    question: "What grade do I need to work abroad?",
    answer:
      "Most countries and healthcare boards require a minimum of grade B in each module. Our courses are designed to help you achieve that efficiently.",
  },
];

const features = [
  {
    title: "Healthcare-Focused Training",
    desc: "Practice real-life patient communication in English, tailored to your profession.",
    icon: "🩺",
  },
  {
    title: "OET Exam Simulation",
    desc: "Get hands-on practice with tasks that mimic the real OET test format.",
    icon: "💻",
  },
  {
    title: "Expert Feedback",
    desc: "Receive detailed evaluations for writing, speaking, and clinical notes.",
    icon: "👨‍🏫",
  },
  {
    title: "Personalized Study Plan",
    desc: "Tailored study roadmap to target your weak areas and improve efficiently.",
    icon: "🗂️",
  },
  {
    title: "Fast-Track Preparation",
    desc: "Achieve your required grade in 4–6 weeks with structured guidance.",
    icon: "⚡",
  },
  {
    title: "Daily Practice System",
    desc: "Structured daily exercises for listening, reading, writing, and speaking.",
    icon: "📅",
  },
  {
    title: "Professional Mentorship",
    desc: "1:1 guidance from certified OET trainers for continuous improvement.",
    icon: "🧑‍⚕️",
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

export default function OetClient() {
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
        title="Score Higher in OET Test"
        description="Book a FREE demo class & get a personalized study plan."
      >
        <ContactForm
          courses={[{ title: "English", courses: ["OET"] }]}
          defaultCourse="OET"
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
              OET Preparation Course
            </p>
         <h1 className="text-4xl md:text-5xl font-bold text-[#19125e] leading-[110%]">
  Achieve Your <span className="text-[#f0c44c]">OET Success {""}</span> 
  
  and Advance Your Healthcare Career
</h1>

<p className="text-gray-600 mt-6 max-w-lg">
  Master OET with BrightMinds: personalized coaching, real patient case simulations, 
  and expert strategies to help you achieve the grade you need to work abroad.
</p>

<div className="mt-6 space-y-2 text-gray-700">
  <p>✔ Real-life healthcare communication practice</p>
  <p>✔ Personalized study plan & feedback</p>
  <p>✔ Writing & speaking tasks evaluated by experts</p>
  <p>✔ 1:1 mentorship from certified OET trainers</p>
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
            src="/assets/oet-asset.svg"
            alt="PTE Student"
            className="w-full md:w-[520px] h-[350px] md:h-[600px]  rounded-2xl  relative z-10"
          />


        </motion.div>
      </div>
    </section>

    <OETOverview setOpen={setOpen}/>
    <BeforeAfterOET setOpen={setOpen}/>

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
            <span className="text-[#f0c44c]">BrightMinds</span> for OET?
          </h2>

          <p className="text-gray-600 mt-4">
            Everything you need to achieve a high OET score — smart tools,
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
          {/* EMPTY LEFT SPACE (important for layout) */}
          <div className="hidden md:block"></div>

          {/* RIGHT CONTENT */}
          <div className="text-white max-w-md ml-auto">
            {/* HEADING */}
            <h2 className="text-3xl md:text-4xl font-bold mb-6 leading-tight text-[#19125e]">
              Free OET preparation study tips
            </h2>

            {/* FORM */}
            <div className="bg-white p-6 rounded-2xl shadow-xl text-black">
              <ContactForm
                courses={[{ title: "English", courses: ["OET"] }]}
                defaultCourse="OET"
              />
            </div>
          </div>
        </div>
      </section>

      <FAQSection
        courses={courses}
        faqs={oetFaqs}
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
