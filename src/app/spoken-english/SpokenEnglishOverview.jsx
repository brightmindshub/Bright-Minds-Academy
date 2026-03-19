"use client";

import { motion } from "framer-motion";

export function SpokenEnglishOverview({ setOpen }) {
  const modules = [
    {
      title: "Beginner",
      icon: "🗣️",
      description:
        "Start speaking confidently in daily situations. Learn basic sentence structures, pronunciation, and vocabulary for everyday conversations.",
    },
    {
      title: "Intermediate",
      icon: "💬",
      description:
        "Enhance fluency, grammar accuracy, and conversational skills. Practice expressing ideas clearly and naturally in different scenarios.",
    },
    {
      title: "Advanced",
      icon: "🎯",
      description:
        "Master complex sentence structures, idiomatic expressions, and professional communication. Speak with clarity and confidence in formal and informal contexts.",
    },
    {
      title: "Pronunciation & Accent",
      icon: "🔊",
      description:
        "Focus on correct sounds, stress, intonation, and reducing mother tongue influence for clear, understandable speech.",
    },
    {
      title: "Public Speaking & Presentation",
      icon: "📢",
      description:
        "Learn to present ideas confidently, structure talks, and engage an audience effectively.",
    },
  ];

  return (
    <section className="relative py-15 bg-linear-to-b from-white to-[#f7f8fc] overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">

        {/* HERO HEADER */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-center max-w-4xl mx-auto"
        >
          <p className="text-[#19125e] font-semibold mb-3 border-b-2 border-[#f0c44c] inline-block pb-1 text-lg">
            Spoken English Program
          </p>

          <h2 className="text-4xl font-extrabold text-[#19125e] leading-tight mt-4">
            Speak Confidently, Naturally & Professionally
          </h2>

          <p className="mt-2 text-gray-600 text-lg md:text-xl leading-relaxed">
            Transform your English communication skills with our structured program, interactive lessons, and expert guidance. Gain fluency, confidence, and clarity in speaking.
          </p>

        </motion.div>

        {/* MODULES SECTION */}
        <div className="mt-10 grid md:grid-cols-2 gap-10">
          {modules.map((module, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.15 }}
              className="bg-white p-5 rounded-3xl shadow-xl hover:shadow-2xl transition border flex flex-col md:flex-row items-start gap-4"
            >
              <div className="text-5xl">{module.icon}</div>
              <div>
                <h3 className="text-2xl font-bold text-[#19125e] mb-3">{module.title}</h3>
                <p className="text-gray-700 text-lg">{module.description}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* END CTA */}
        <div className="mt-16 text-center">
          <button
            onClick={() => setOpen(true)}
            className="bg-[#19125e] text-white px-12 py-4 rounded-full font-semibold shadow-xl hover:scale-105 transition transform cursor-pointer"
          >
            Improve Your Spoken English
          </button>
        </div>
      </div>
    </section>
  );
}