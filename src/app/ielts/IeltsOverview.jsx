"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export function IELTSOverview({ setOpen }) {
  return (
    <section className="py-20 bg-linear-to-b from-white to-[#f7f8fc] overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">

        {/* HEADER */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto"
        >
          <p className="text-[#19125e] font-semibold mb-3 border-b-2 border-[#f0c44c] inline-block pb-1">
            IELTS Overview
          </p>

          <h2 className="text-4xl font-bold text-[#19125e] leading-tight">
            Understand the IELTS Exam Clearly
          </h2>

          <p className="mt-2 text-gray-600 text-lg">
            Get complete clarity on the IELTS test format, modules, and scoring system — so you can prepare with confidence and achieve your target band score.
          </p>
        </motion.div>

        {/* TOP SECTION */}
        <div className="mt-16 grid md:grid-cols-3 gap-8">

          {/* WHAT IS IELTS */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            whileHover={{ y: -8 }}
            transition={{ duration: 0.5 }}
            className="bg-white p-8 rounded-2xl shadow-md hover:shadow-xl transition border"
          >
            <div className="text-3xl mb-4"><Image src={"/assets/ielts.png"} width={100} height={50} alt="ielts"/></div>

            {/* <h3 className="text-xl font-semibold text-[#19125e] mb-3">
              What is IELTS?
            </h3> */}

            <p className="text-gray-600 leading-relaxed">
              IELTS (International English Language Testing System) is the
              world’s most trusted English proficiency test for study, work,
              and migration. It evaluates your ability to communicate in
              real-life situations across four key skills.
            </p>

            <p className="mt-4 text-gray-600 text-sm">
              Accepted by 11,000+ organisations including universities,
              employers, and immigration authorities in countries like
              Canada, UK, Australia, and New Zealand.
            </p>
          </motion.div>

          {/* MODULES (BIG CARD) */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            whileHover={{ y: -8 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="bg-white p-8 rounded-2xl shadow-md hover:shadow-xl transition border md:col-span-2"
          >
            <div className="text-3xl mb-4">📚</div>

            <h3 className="text-xl font-semibold text-[#19125e] mb-4">
              IELTS Modules Explained
            </h3>

            <div className="grid sm:grid-cols-2 gap-5 text-gray-600">

              <div>
                <p className="font-semibold text-[#19125e]">Listening</p>
                <p className="text-sm">
                  Understand conversations, lectures, and different English accents.
                </p>
              </div>

              <div>
                <p className="font-semibold text-[#19125e]">Reading</p>
                <p className="text-sm">
                  Analyze passages, identify key ideas, and answer comprehension questions.
                </p>
              </div>

              <div>
                <p className="font-semibold text-[#19125e]">Writing</p>
                <p className="text-sm">
                  Complete structured tasks like essays, reports, and letters.
                </p>
              </div>

              <div>
                <p className="font-semibold text-[#19125e]">Speaking</p>
                <p className="text-sm">
                  Face-to-face interview to assess fluency, pronunciation, and confidence.
                </p>
              </div>

            </div>

            <p className="mt-5 text-sm text-gray-500">
              Each module is scored individually and contributes equally to your overall band score.
            </p>
          </motion.div>
        </div>

        {/* TABLE SECTION */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mt-20 bg-white rounded-3xl shadow-xl overflow-hidden"
        >
          <div className="p-8 border-b">
            <h3 className="text-2xl font-bold text-[#19125e]">
              IELTS Exam Pattern
            </h3>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left">
              <thead className="bg-[#19125e] text-white">
                <tr>
                  <th className="p-4">Module</th>
                  <th className="p-4">Duration</th>
                  <th className="p-4">Details</th>
                </tr>
              </thead>

              <tbody className="text-gray-700">
                {[
                  ["Listening", "30 mins", "4 recordings, 40 questions"],
                  ["Reading", "60 mins", "3 passages, 40 questions"],
                  ["Writing", "60 mins", "2 tasks (essay + report/letter)"],
                  ["Speaking", "11–14 mins", "Face-to-face interview"],
                ].map((row, i) => (
                  <tr
                    key={i}
                    className="border-b hover:bg-gray-50 transition"
                  >
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
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="mt-14 text-center"
        >
          <button
            onClick={() => setOpen(true)}
            className="bg-[#f0c44c] text-[#19125e] px-10 py-4 rounded-full font-semibold shadow-lg hover:scale-105 transition cursor-pointer"
          >
            Get Your Free Band Strategy
          </button>
        </motion.div>
      </div>
    </section>
  );
}