"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import LeadFormModal from "../hero/LeadFormModal";

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

const faqs = [
  {
    question: "Which English exams do you prepare students for?",
    answer:
      "We provide expert coaching for IELTS, PTE, CELPIP, and other English proficiency exams required for studying or migrating abroad.",
  },
  {
    question: "Do you offer online classes?",
    answer:
      "Yes, BrightMinds offers both online and offline classes so students can learn in the most convenient way.",
  },
  {
    question: "How long does the preparation course take?",
    answer:
      "Most students complete their preparation within 4–8 weeks depending on their current level and target score.",
  },
  {
    question: "Do you provide study material?",
    answer:
      "Yes, we provide comprehensive study material including practice tests, mock exams, and expert guidance.",
  },
  {
    question: "Can I take a demo class before enrolling?",
    answer:
      "Absolutely! We offer free demo classes so you can experience our teaching methodology before joining.",
  },
];

export default function FAQSection() {

  // first FAQ open by default
  const [activeIndex, setActiveIndex] = useState(0);
    const [showLeadPopup, setShowLeadPopup] = useState(false);
   const [showLeadModal, setShowLeadModal] = useState(false);
   const [hasClosedPopup, setHasClosedPopup] = useState(false);

 useEffect(() => {
  const handleScroll = () => {
    if (hasClosedPopup) return; // don't show again if closed

    const scrollPos = window.scrollY + window.innerHeight;
    const triggerPos = document.getElementById("faq-section")?.offsetTop + 800;

    if (scrollPos > triggerPos) {
      setShowLeadPopup(true);
    }
  };

  window.addEventListener("scroll", handleScroll);
  return () => window.removeEventListener("scroll", handleScroll);
}, [hasClosedPopup]);

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section id="faq-section" className="py-24 bg-linear-to-br from-[#19125e]/10 via-white to-[#f0c44c]/10bg-[#f7f8fc] relative">
        <div className="hidden absolute inset-0 md:flex items-start justify-center pointer-events-none overflow-hidden">

  <h2 className="text-[50px] md:text-[130px] font-extrabold text-[#19125e] opacity-[0.04] tracking-widest whitespace-nowrap uppercase">
    FAQ
  </h2>

</div>
      <div className="max-w-4xl mx-auto px-6">

        {/* Heading */}
        <div className="text-center mb-14">
          <h2 className="text-4xl font-bold text-[#19125e] mb-4">
            Frequently Asked Questions
          </h2>
          <div className="w-20 h-[3px] bg-[#f0c44c] mx-auto rounded-full"></div>
        </div>

        <div className="space-y-4">

          {faqs.map((faq, index) => {
            const isOpen = activeIndex === index;

            return (
              <div
                key={index}
                className="border border-gray-200 rounded-xl overflow-hidden shadow-sm hover:scale-105 transition ease-in"
              >

                {/* Question */}
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full flex justify-between items-center p-6 text-left font-semibold text-[#19125e] cursor-pointer"
                >

                  {faq.question}

                  {/* Animated Icon */}
                  <motion.span
                    animate={{ rotate: isOpen ? 45 : 0 }}
                    transition={{ duration: 0.3 }}
                    className="text-2xl font-bold text-[#19125e]"
                  >
                    +
                  </motion.span>

                </button>

                {/* Answer */}
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      key="content"
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{
                        duration: 0.35,
                        ease: "easeInOut",
                      }}
                      className="overflow-hidden"
                    >
                      <div className="px-6 pb-6 text-gray-600 leading-relaxed">
                        {faq.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>

              </div>
            );
          })}

        </div>

      </div>

       {/* Lead Form Popup */}
      <AnimatePresence>
        {showLeadPopup && (
          <motion.div
            initial={{ y: 200, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 200, opacity: 0 }}
            transition={{ type: "spring", stiffness: 120 }}
            className="fixed bottom-8 left-8 w-80 bg-[#19125e] text-white rounded-xl shadow-2xl p-6 flex flex-col gap-3 z-50"
          >
            <h4 className="text-lg font-semibold">
              Have more questions?
            </h4>
            <p className="text-white/80 text-sm">
              Fill out your details and our experts will reach out to you.
            </p>
            <button
              onClick={() => setShowLeadModal(true)}
              className="bg-[#f0c44c] text-[#19125e] px-4 py-2 rounded-lg font-semibold hover:brightness-105 transition cursor-pointer"
            >
              Get Expert Advice
            </button>
            <button
              onClick={() => {
    setShowLeadPopup(false);
    setHasClosedPopup(true);
  }}
              className="absolute top-2 right-2 text-white text-lg font-bold cursor-pointer"
            >
              ✕
            </button>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Lead Form Modal */}
      <LeadFormModal
        open={showLeadModal}
        onClose={() => setShowLeadModal(false)}
        courses={courses}
      />
    </section>
  );
}