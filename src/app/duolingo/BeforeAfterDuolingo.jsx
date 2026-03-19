"use client";

import { motion } from "framer-motion";

export function BeforeAfterDuolingo({ setOpen }) {
  return (
    <section className="py-28 bg-linear-to-b from-[#f7f8fc] to-white">
      <div className="max-w-7xl mx-auto px-6">

        {/* HEADER */}
        <div className="text-center max-w-3xl mx-auto">
          <p className="text-[#19125e] font-semibold mb-3 border-b-2 border-[#f0c44c] inline-block pb-1">
            Your Transformation
          </p>

          <h2 className="text-4xl font-bold text-[#19125e]">
            From Confused to High Scorer
          </h2>

          <p className="mt-2 text-gray-600 text-lg">
            See how our training helps you master the adaptive Duolingo test and achieve your target score.
          </p>
        </div>

        {/* GRID */}
        <div className="mt-20 grid md:grid-cols-2 gap-10">

          {/* BEFORE */}
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            className="bg-red-50 border border-red-100 p-10 rounded-3xl"
          >
            <h3 className="text-2xl font-bold text-red-600 mb-6">
              ❌ Before
            </h3>

            <ul className="space-y-4 text-gray-700">
              <li>• Confused about adaptive test format</li>
              <li>• Struggles with quick question changes</li>
              <li>• Weak vocabulary & sentence formation</li>
              <li>• Nervous speaking on camera</li>
              <li>• No clear preparation strategy</li>
              <li>• Low score (80–95)</li>
            </ul>
          </motion.div>

          {/* AFTER */}
          <motion.div
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            className="bg-green-50 border border-green-100 p-10 rounded-3xl"
          >
            <h3 className="text-2xl font-bold text-green-600 mb-6">
              ✅ After
            </h3>

            <ul className="space-y-4 text-gray-700">
              <li>• Clear understanding of adaptive system</li>
              <li>• Quick response & accuracy improvement</li>
              <li>• Strong vocabulary & grammar control</li>
              <li>• Confident speaking responses</li>
              <li>• Smart strategies for each question type</li>
              <li>• Achieves target score (110–130+)</li>
            </ul>
          </motion.div>
        </div>

        {/* CTA */}
        <div className="mt-12 text-center">
          <button
            onClick={() => setOpen(true)}
            className="bg-[#19125e] text-white px-10 py-4 rounded-full font-semibold shadow-lg hover:scale-105 transition cursor-pointer"
          >
            Start Your Duolingo Preparation
          </button>
        </div>
      </div>
    </section>
  );
}