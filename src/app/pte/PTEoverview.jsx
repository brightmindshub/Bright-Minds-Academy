"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export function PTEOverview({ setOpen }) {
  return (
    <section className="py-28 bg-linear-to-b from-white to-[#f7f8fc] overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">

        {/* HEADER */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto"
        >
          <p className="text-[#19125e] font-semibold mb-3 border-b-2 border-[#f0c44c] inline-block pb-1">
            PTE Overview
          </p>

          <h2 className="text-4xl font-bold text-[#19125e] leading-tight">
            Understand the PTE Exam Clearly
          </h2>

          <p className="mt-2 text-gray-600 text-lg">
            Learn how the PTE test works, its AI-based scoring system, and how you can achieve your target score faster.
          </p>
        </motion.div>

        {/* TOP SECTION */}
        <div className="mt-16 grid md:grid-cols-3 gap-8">

          {/* WHAT IS PTE */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            whileHover={{ y: -8 }}
            transition={{ duration: 0.5 }}
            className="bg-white p-8 rounded-2xl shadow-md hover:shadow-xl transition border"
          >
            <div className="text-3xl mb-4"><Image src={"/assets/pte.jpg"} width={100} height={50} alt="pte"/></div>

            <p className="text-gray-600 leading-relaxed">
              PTE (Pearson Test of English) is a fully computer-based English proficiency test designed for study, work, and migration. It uses AI technology to evaluate your performance objectively.
            </p>

            <p className="mt-4 text-gray-600 text-sm">
              Accepted by universities and governments in countries like Australia, Canada, UK, and New Zealand with results typically available within 24–48 hours.
            </p>
          </motion.div>

          {/* MODULES */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            whileHover={{ y: -8 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="bg-white p-8 rounded-2xl shadow-md hover:shadow-xl transition border md:col-span-2"
          >
            <div className="text-3xl mb-4">📚</div>

            <h3 className="text-xl font-semibold text-[#19125e] mb-4">
              PTE Test Modules Explained
            </h3>

            <div className="grid sm:grid-cols-2 gap-5 text-gray-600">

              <div>
                <p className="font-semibold text-[#19125e]">Speaking & Writing</p>
                <p className="text-sm">
                  Combined section testing pronunciation, fluency, and written communication.
                </p>
              </div>

              <div>
                <p className="font-semibold text-[#19125e]">Reading</p>
                <p className="text-sm">
                  Evaluate comprehension, vocabulary, and ability to interpret texts.
                </p>
              </div>

              <div>
                <p className="font-semibold text-[#19125e]">Listening</p>
                <p className="text-sm">
                  Understand lectures, conversations, and summarize spoken content.
                </p>
              </div>

              <div>
                <p className="font-semibold text-[#19125e]">Integrated Skills</p>
                <p className="text-sm">
                  Tasks combine multiple skills (e.g., listening + writing or reading + speaking).
                </p>
              </div>

            </div>

            <p className="mt-5 text-sm text-gray-500">
              PTE evaluates multiple skills together, making it different from traditional tests like IELTS.
            </p>
          </motion.div>
        </div>

        {/* TABLE */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mt-20 bg-white rounded-3xl shadow-xl overflow-hidden"
        >
          <div className="p-8 border-b">
            <h3 className="text-2xl font-bold text-[#19125e]">
              PTE Exam Pattern
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
                  ["Speaking & Writing", "54–67 mins", "Read aloud, repeat sentence, essay writing"],
                  ["Reading", "29–30 mins", "Multiple choice, re-order paragraphs"],
                  ["Listening", "30–43 mins", "Summarize audio, fill in blanks"],
                ].map((row, i) => (
                  <tr key={i} className="border-b hover:bg-gray-50 transition">
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
            Get Your Free PTE Strategy
          </button>
        </motion.div>
      </div>
    </section>
  );
}