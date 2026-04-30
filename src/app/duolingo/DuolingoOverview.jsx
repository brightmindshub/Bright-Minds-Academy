"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export function DuolingoOverview({ setOpen }) {
  return (
    <section className="py-18 bg-linear-to-b from-white to-[#f7f8fc] overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">

        {/* HEADER */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-center max-w-3xl mx-auto"
        >
          <p className="text-[#19125e] font-semibold mb-3 border-b-2 border-[#f0c44c] inline-block pb-1">
            Duolingo Test Overview
          </p>

          <h2 className="text-4xl font-bold text-[#19125e]">
            Understand the Duolingo English Test
          </h2>

          <p className="mt-2 text-gray-600 text-lg">
            Learn how the Duolingo test works, its adaptive format, and how you can achieve your target score quickly from home.
          </p>
        </motion.div>

        {/* TOP SECTION */}
        <div className="mt-16 grid md:grid-cols-3 gap-8">

          {/* WHAT IS DUOLINGO */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            whileHover={{ y: -8 }}
            className="bg-white p-8 rounded-2xl shadow-md hover:shadow-xl transition border"
          >
            <div className="text-3xl mb-4"><Image src={"/assets/duolingo.avif"} width={100} height={50} alt="ielts"/></div>

            <p className="text-gray-600">
              The Duolingo English Test is a modern, fully online English proficiency exam that you can take from home using your computer.
            </p>

            <p className="mt-4 text-gray-600 text-sm">
              It is accepted by thousands of universities worldwide and provides fast, affordable, and flexible testing compared to traditional exams.
            </p>
          </motion.div>

          {/* MODULES */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            whileHover={{ y: -8 }}
            className="bg-white p-8 rounded-2xl shadow-md hover:shadow-xl transition border md:col-span-2"
          >
            <div className="text-3xl mb-4">🧠</div>

            <h3 className="text-xl font-semibold text-[#19125e] mb-4">
              Test Format & Skills
            </h3>

            <div className="grid sm:grid-cols-2 gap-5 text-gray-600">

              <div>
                <p className="font-semibold text-[#19125e]">Adaptive Questions</p>
                <p className="text-sm">
                  Difficulty adjusts based on your answers in real-time.
                </p>
              </div>

              <div>
                <p className="font-semibold text-[#19125e]">Reading & Writing</p>
                <p className="text-sm">
                  Sentence completion, vocabulary, and writing tasks.
                </p>
              </div>

              <div>
                <p className="font-semibold text-[#19125e]">Listening</p>
                <p className="text-sm">
                  Audio-based questions to test comprehension skills.
                </p>
              </div>

              <div>
                <p className="font-semibold text-[#19125e]">Speaking</p>
                <p className="text-sm">
                  Record spoken responses using your microphone.
                </p>
              </div>

            </div>

            <p className="mt-5 text-sm text-gray-500">
              The test adapts to your level, making it shorter and more efficient than traditional exams.
            </p>
          </motion.div>
        </div>

        {/* TABLE */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="mt-20 bg-white rounded-3xl shadow-xl overflow-hidden"
        >
          <div className="p-8 border-b">
            <h3 className="text-2xl font-bold text-[#19125e]">
              Duolingo Test Pattern
            </h3>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left">
              <thead className="bg-[#19125e] text-white">
                <tr>
                  <th className="p-4">Section</th>
                  <th className="p-4">Duration</th>
                  <th className="p-4">Details</th>
                </tr>
              </thead>

              <tbody className="text-gray-700">
                {[
                  ["Introduction", "5 mins", "Rules & setup"],
                  ["Adaptive Test", "45 mins", "Mixed skill questions"],
                  ["Speaking & Writing Sample", "10 mins", "Recorded responses"],
                ].map((row, i) => (
                  <tr key={i} className="border-b hover:bg-gray-50">
                    <td className="p-4 font-medium">{row[0]}</td>
                    <td className="p-4">{row[1]}</td>
                    <td className="p-4">{row[2]}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </motion.div>

        {/* CTA */}
        <div className="mt-14 text-center">
          <button
            onClick={() => setOpen(true)}
            className="bg-[#f0c44c] text-[#19125e] px-10 py-4 rounded-full font-semibold shadow-lg hover:scale-105 transition cursor-pointer"
          >
            Get Your Free Duolingo Strategy
          </button>
        </div>
      </div>
    </section>
  );
}