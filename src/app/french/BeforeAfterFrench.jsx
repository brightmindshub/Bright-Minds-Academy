"use client";

import { motion } from "framer-motion";

export function BeforeAfterFrench({ setOpen }) {
  return (
    <section className="py-18 bg-linear-to-b from-[#f7f8fc] to-white overflow-x-hidden">
      <div className="max-w-7xl mx-auto px-6">

        {/* HEADER */}
        <div className="text-center max-w-3xl mx-auto">
          <p className="text-[#19125e] font-semibold mb-3 border-b-2 border-[#f0c44c] inline-block pb-1 text-lg">
            French Language Transformation
          </p>

          <h2 className="text-4xl font-bold text-[#19125e] leading-tight">
            From Hesitant Beginner to Confident French Speaker
          </h2>

          <p className="mt-2 text-gray-600 text-lg leading-relaxed">
            Build fluency, improve pronunciation, and speak French confidently in daily and professional situations with our structured program.
          </p>
        </div>

        {/* BEFORE & AFTER GRID */}
        <div className="mt-20 grid md:grid-cols-2 gap-10">

          {/* BEFORE */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="bg-red-50 border border-red-100 p-10 rounded-3xl shadow-lg"
          >
            <h3 className="text-2xl font-bold text-red-600 mb-6">❌ Before</h3>
            <ul className="space-y-4 text-gray-700">
              <li>• Hesitant to speak French in real situations</li>
              <li>• Limited vocabulary & grammar understanding</li>
              <li>• Pronunciation and accent challenges</li>
              <li>• Fear of conversations with native speakers</li>
              <li>• Difficulty understanding French media or conversations</li>
              <li>• Low confidence in communication</li>
            </ul>
          </motion.div>

          {/* AFTER */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="bg-green-50 border border-green-100 p-10 rounded-3xl shadow-lg"
          >
            <h3 className="text-2xl font-bold text-green-600 mb-6">✅ After</h3>
            <ul className="space-y-4 text-gray-700">
              <li>• Speak French confidently in daily & professional settings</li>
              <li>• Use grammar and vocabulary correctly and naturally</li>
              <li>• Clear pronunciation and reduced accent</li>
              <li>• Comfortable conversing with native speakers</li>
              <li>• Understand French media and conversations easily</li>
              <li>• High confidence in communication and presentations</li>
            </ul>
          </motion.div>
        </div>

        {/* CTA */}
        <div className="mt-12 text-center">
          <button
            onClick={() => setOpen(true)}
            className="bg-[#19125e] text-white px-12 py-4 rounded-full font-semibold shadow-lg hover:scale-105 transition transform cursor-pointer"
          >
            Start Learning French Today
          </button>
        </div>
      </div>
    </section>
  );
}