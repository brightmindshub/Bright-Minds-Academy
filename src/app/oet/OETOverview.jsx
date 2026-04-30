"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export function OETOverview({ setOpen }) {
  return (
    <section className="py-28 bg-linear-to-b from-white to-[#f7f8fc] overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">

        {/* HEADER */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-center max-w-3xl mx-auto"
        >
          <p className="text-[#19125e] font-semibold mb-3 border-b-2 border-[#f0c44c] inline-block pb-1">
            OET Overview
          </p>

          <h2 className="text-4xl font-bold text-[#19125e]">
            Understand the OET Exam Clearly
          </h2>

          <p className="mt-6 text-gray-600 text-lg">
            Learn how the Occupational English Test evaluates your communication skills in real healthcare scenarios.
          </p>
        </motion.div>

        {/* TOP SECTION */}
        <div className="mt-16 grid md:grid-cols-3 gap-8">

          {/* WHAT IS OET */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            whileHover={{ y: -8 }}
            className="bg-white p-8 rounded-2xl shadow-md hover:shadow-xl transition border"
          >
            <div className="text-3xl mb-4"><Image src={"/assets/OET.webp"} width={100} height={50} alt="ielts"/></div>


            <p className="text-gray-600">
              OET (Occupational English Test) is an English language test designed specifically for healthcare professionals such as nurses, doctors, and pharmacists.
            </p>

            <p className="mt-4 text-gray-600 text-sm">
              It assesses your ability to communicate effectively in medical settings and is accepted in countries like the UK, Australia, New Zealand, and more.
            </p>
          </motion.div>

          {/* MODULES */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            whileHover={{ y: -8 }}
            className="bg-white p-8 rounded-2xl shadow-md hover:shadow-xl transition border md:col-span-2"
          >
            <div className="text-3xl mb-4">🩺</div>

            <h3 className="text-xl font-semibold text-[#19125e] mb-4">
              OET Test Modules Explained
            </h3>

            <div className="grid sm:grid-cols-2 gap-5 text-gray-600">

              <div>
                <p className="font-semibold text-[#19125e]">Listening</p>
                <p className="text-sm">
                  Understand patient consultations and healthcare discussions.
                </p>
              </div>

              <div>
                <p className="font-semibold text-[#19125e]">Reading</p>
                <p className="text-sm">
                  Interpret medical texts, articles, and workplace documents.
                </p>
              </div>

              <div>
                <p className="font-semibold text-[#19125e]">Writing</p>
                <p className="text-sm">
                  Write profession-specific letters such as referrals or discharge notes.
                </p>
              </div>

              <div>
                <p className="font-semibold text-[#19125e]">Speaking</p>
                <p className="text-sm">
                  Role-play scenarios like patient interaction and consultations.
                </p>
              </div>

            </div>

            <p className="mt-5 text-sm text-gray-500">
              Each module is tailored to your specific healthcare profession.
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
              OET Exam Pattern
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
                  ["Listening", "45 mins", "Healthcare-related audio"],
                  ["Reading", "60 mins", "Medical texts & tasks"],
                  ["Writing", "45 mins", "Profession-specific letter"],
                  ["Speaking", "20 mins", "Role-play scenarios"],
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
             Get Your Free OET Strategy
          </button>
        </div>
      </div>
    </section>
  );
}