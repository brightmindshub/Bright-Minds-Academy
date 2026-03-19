import { motion } from "framer-motion";

export function WhyChooseUs({ setOpen }) {
  return (
    <section className="py-28 bg-white">
      <div className="max-w-7xl mx-auto px-6">

        {/* HEADER */}
        <div className="text-center max-w-3xl mx-auto">
          <p className="text-[#19125e] font-semibold mb-3 border-b-2 border-[#f0c44c] inline-block pb-1">
            Why Choose Us
          </p>

          <h2 className="text-4xl font-bold text-[#19125e]">
            From Confused to Confident
          </h2>

          <p className="mt-2 text-gray-600 text-lg">
            We don’t just teach IELTS — we transform your performance.
          </p>
        </div>

        {/* BEFORE VS AFTER */}
        <div className="mt-20 grid md:grid-cols-2 gap-10">

          {/* BEFORE */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            className="bg-red-50 p-10 rounded-3xl border border-red-100"
          >
            <h3 className="text-2xl font-bold text-red-600 mb-6">
              ❌ Before Joining
            </h3>

            <ul className="space-y-4 text-gray-700">
              <li>• Confused about exam format</li>
              <li>• Low confidence in speaking</li>
              <li>• Poor writing structure</li>
              <li>• No clear strategy</li>
              <li>• Stuck at low band score</li>
            </ul>
          </motion.div>

          {/* AFTER */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            className="bg-green-50 p-10 rounded-3xl border border-green-100"
          >
            <h3 className="text-2xl font-bold text-green-600 mb-6">
              ✅ After Training With Us
            </h3>

            <ul className="space-y-4 text-gray-700">
              <li>• Clear understanding of exam</li>
              <li>• Confident & fluent speaking</li>
              <li>• Structured high-scoring writing</li>
              <li>• Proven test strategies</li>
              <li>• Achieve target band score</li>
            </ul>
          </motion.div>
        </div>

        {/* FEATURES */}
        <div className="mt-20 grid md:grid-cols-3 gap-8">
          {[
            "Expert Trainers with Proven Results",
            "Personalised Study Plans",
            "Real Exam Mock Tests",
            "Detailed Performance Analysis",
            "Flexible Batches (Online + Offline)",
            "24/7 Doubt Support",
          ].map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              whileHover={{ y: -6 }}
              className="bg-[#f7f8fc] p-6 rounded-xl shadow-sm hover:shadow-md"
            >
              <p className="font-semibold text-[#19125e]">✔ {item}</p>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-16 text-center">
          <button
            onClick={() => setOpen(true)}
            className="bg-[#19125e] text-white px-10 py-4 rounded-full font-semibold shadow-lg hover:scale-105 transition cursor-pointer"
          >
            Book Your Free Demo Now
          </button>
        </div>
      </div>
    </section>
  );
}