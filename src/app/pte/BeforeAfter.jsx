"use client";

import { motion } from "framer-motion";

export default function BeforeAfter({ setOpen }) {
  return (
    <section className="pb-18 bg-gradient-to-b from-[#f7f8fc] to-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">

        {/* HEADER */}
        <div className="text-center max-w-3xl mx-auto">
          <p className="text-[#19125e] font-semibold mb-3 border-b-2 border-[#f0c44c] inline-block pb-1">
            Your PTE Transformation
          </p>

          <h2 className="text-4xl font-bold text-[#19125e]">
            From Struggling to Scoring High
          </h2>

          <p className="mt-2 text-gray-600 text-lg">
            See how our PTE training helps you master AI scoring, improve accuracy, and achieve your target score faster.
          </p>
        </div>

        {/* GRID */}
        <div className="mt-20 grid md:grid-cols-2 gap-10 items-center">

          {/* BEFORE */}
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="relative bg-red-50 border border-red-100 p-10 rounded-3xl shadow-sm"
          >
            <div className="absolute -top-4 left-6 bg-red-500 text-white px-4 py-1 rounded-full text-sm font-semibold shadow">
              Before
            </div>

            <h3 className="text-2xl font-bold text-red-600 mb-6 mt-2">
              Confused Test Taker
            </h3>

            <ul className="space-y-4 text-gray-700">
              <li>• No understanding of AI scoring system</li>
              <li>• Struggles with speaking on microphone</li>
              <li>• Low fluency & pronunciation issues</li>
              <li>• Confused by integrated tasks</li>
              <li>• Poor time management during exam</li>
              <li>• Stuck at low PTE score (40–50)</li>
            </ul>
          </motion.div>

          {/* AFTER */}
          <motion.div
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="relative bg-green-50 border border-green-100 p-10 rounded-3xl shadow-sm"
          >
            <div className="absolute -top-4 left-6 bg-green-500 text-white px-4 py-1 rounded-full text-sm font-semibold shadow">
              After
            </div>

            <h3 className="text-2xl font-bold text-green-600 mb-6 mt-2">
              High-Scoring Candidate
            </h3>

            <ul className="space-y-4 text-gray-700">
              <li>• Clear understanding of AI scoring logic</li>
              <li>• Confident speaking with proper mic technique</li>
              <li>• Improved fluency & pronunciation</li>
              <li>• Mastery of integrated question types</li>
              <li>• Strong time management strategies</li>
              <li>• Achieves target score (65+ / 79+)</li>
            </ul>
          </motion.div>
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="mt-10 text-center"
        >
          <button
            onClick={() => setOpen(true)}
            className="bg-[#19125e] text-white px-10 py-4 rounded-full font-semibold shadow-lg hover:scale-105 transition cursor-pointer"
          >
            Book Free Demo
          </button>
        </motion.div>
      </div>
    </section>
  );
}