"use client";

import { motion } from "framer-motion";

export default function NannyTransformation({ setOpen }) {
  return (
    <section className="pt-10 pb-18 bg-linear-to-b from-[#f7f8fc] to-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">

        {/* HEADER */}
        <div className="text-center max-w-3xl mx-auto">
          {/* <p className="text-[#19125e] font-semibold mb-3 border-b-2 border-[#f0c44c] inline-block pb-1">
            Career Transformation
          </p> */}

          <h2 className="text-4xl font-bold text-[#19125e]">
            From Aspiring to <span className="text-[#f0c44c]">Professional Nanny</span>
          </h2>

          <p className="mt-2 text-gray-600 text-lg">
            Bridge the gap between basic babysitting and professional caregiving with international standards and certification.
          </p>
        </div>

        {/* GRID */}
        <div className="mt-20 grid md:grid-cols-2 gap-10 items-center">

          {/* BEFORE */}
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="relative bg-red-50 border border-red-100 p-10 rounded-3xl shadow-sm"
          >
            <div className="absolute -top-4 left-6 bg-red-500 text-white px-4 py-1 rounded-full text-sm font-semibold shadow">
              Before Training
            </div>

            <h3 className="text-2xl font-bold text-red-600 mb-6 mt-2">
              Unskilled Caregiver
            </h3>

            <ul className="space-y-4 text-gray-700">
              <li>• Limited knowledge of child psychology</li>
              <li>• Unaware of emergency first aid/CPR</li>
              <li>• Struggles with structured meal planning</li>
              <li>• No formal certification for visa work</li>
              <li>• Lack of professional interview skills</li>
              <li>• Limited to low-paying local roles</li>
            </ul>
          </motion.div>

          {/* AFTER */}
          <motion.div
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="relative bg-green-50 border border-green-100 p-10 rounded-3xl shadow-sm"
          >
            <div className="absolute -top-4 left-6 bg-green-500 text-white px-4 py-1 rounded-full text-sm font-semibold shadow">
              After Training
            </div>

            <h3 className="text-2xl font-bold text-green-600 mb-6 mt-2">
              Certified Professional
            </h3>

            <ul className="space-y-4 text-gray-700">
              <li>• Expert in child growth & milestones</li>
              <li>• Certified in Pediatric First Aid & CPR</li>
              <li>• Mastery in balanced child nutrition</li>
              <li>• ISO Certified Diploma for global roles</li>
              <li>• Confident in embassy/parent interviews</li>
              <li>• Eligible for high-paying international jobs</li>
            </ul>
          </motion.div>
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-14 text-center"
        >
          <button
            onClick={() => setOpen(true)}
            className="bg-[#19125e] text-white px-10 py-4 rounded-full font-semibold shadow-lg hover:scale-105 transition cursor-pointer"
          >
            Start Your Journey Today
          </button>
        </motion.div>
      </div>
    </section>
  );
}