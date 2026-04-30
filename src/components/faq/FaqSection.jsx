"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import LeadFormModal from "../hero/LeadFormModal";

export default function FAQSection({
  faqs = [],
  courses = [],
  showPopup = true,
  title = "Frequently Asked Questions",
}) {

  const [activeIndex, setActiveIndex] = useState(0);
  const [showLeadPopup, setShowLeadPopup] = useState(false);
  const [showLeadModal, setShowLeadModal] = useState(false);
  const [hasClosedPopup, setHasClosedPopup] = useState(false);

  useEffect(() => {
    if (!showPopup) return;

    const handleScroll = () => {
      if (hasClosedPopup) return;

      const section = document.getElementById("faq-section");
      if (!section) return;

      const scrollPos = window.scrollY + window.innerHeight;
      const triggerPos = section.offsetTop + 200;

      if (scrollPos > triggerPos) {
        setShowLeadPopup(true);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [hasClosedPopup, showPopup]);

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section id="faq-section" className="py-24 bg-[#f7f8fc] relative">
      <div className="hidden absolute inset-0 md:flex items-start justify-center pointer-events-none overflow-hidden">

  <h2 className="text-[50px] md:text-[130px] font-extrabold text-[#19125e] opacity-[0.04] tracking-widest whitespace-nowrap uppercase">
    FAQ
  </h2>

</div>

      <div className="max-w-4xl mx-auto px-6">

        {/* Heading */}
        <div className="text-center mb-14">
          <h2 className="text-4xl font-bold text-[#19125e] mb-4">
            {title}
          </h2>
          <div className="w-20 h-[3px] bg-[#f0c44c] mx-auto rounded-full"></div>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => {
            const isOpen = activeIndex === index;

            return (
              <div
                key={index}
                className="border border-gray-200 rounded-xl overflow-hidden shadow-sm hover:scale-105 transition"
              >
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full flex justify-between items-center p-6 text-left font-semibold text-[#19125e]"
                >
                  {faq.question}

                  <motion.span
                    animate={{ rotate: isOpen ? 45 : 0 }}
                    className="text-2xl font-bold"
                  >
                    +
                  </motion.span>
                </button>

                <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      className="overflow-hidden"
                    >
                      <div className="px-6 pb-6 text-gray-600">
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

      {/* POPUP */}
      <AnimatePresence>
        {showPopup && showLeadPopup && (
          <motion.div
            initial={{ y: 200, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 200, opacity: 0 }}
            className="fixed bottom-8 left-8 w-80 bg-[#19125e] text-white rounded-xl shadow-2xl p-6 z-50"
          >
            <h4 className="text-lg font-semibold">
              Have more questions?
            </h4>
            <p className="text-sm text-white/80">
              Our experts will help you.
            </p>

            <button
              onClick={() => setShowLeadModal(true)}
              className="bg-[#f0c44c] text-[#19125e] px-4 py-2 mt-3 rounded-lg font-semibold"
            >
              Get Expert Advice
            </button>

            <button
              onClick={() => {
                setShowLeadPopup(false);
                setHasClosedPopup(true);
              }}
              className="absolute top-2 right-2"
            >
              ✕
            </button>
          </motion.div>
        )}
      </AnimatePresence>

      {/* MODAL */}
      <LeadFormModal
        open={showLeadModal}
        onClose={() => setShowLeadModal(false)}
        courses={courses}
      />
    </section>
  );
}