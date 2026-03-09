"use client";

import CountUp from "react-countup";
import { motion } from "framer-motion";

const stats = [
  {
    number: 500,
    suffix: "+",
    label: "Students Trained",
  },
  {
    number: 10,
    suffix: "+",
    label: "Years Experience",
  },
  {
    number: 95,
    suffix: "%",
    label: "Success Rate",
  },
  {
    number: 20,
    suffix: "+",
    label: "Courses Offered",
  },
];

export default function StatsSection() {
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
      {stats.map((stat, index) => (
        <motion.div
          key={stat.label}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: index * 0.15 }}
          className="relative bg-white/70 backdrop-blur-md border border-gray-100 rounded-xl p-8 text-center shadow-lg hover:shadow-2xl transition"
        >
          {/* Glow background */}
          <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-[#19125e]/10 to-[#f0c44c]/10 opacity-0 hover:opacity-100 transition"></div>

          {/* Counter */}
          <h3 className="relative text-4xl font-bold text-[#19125e] mb-2">
            <CountUp
              end={stat.number}
              duration={2.5}
              enableScrollSpy
              scrollSpyOnce
            />
            {stat.suffix}
          </h3>

          {/* Label */}
          <p className="relative text-gray-600 text-sm font-medium">
            {stat.label}
          </p>
        </motion.div>
      ))}
    </div>
  );
}