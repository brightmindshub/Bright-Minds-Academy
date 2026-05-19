"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import {
  Monitor,
  BookOpen,
  Users,
  Wifi,
  Presentation,
  Coffee,
} from "lucide-react";
import Link from "next/link";
import GallerySection from "@/components/gallery/GallerySection";

const galleryImages = [
  "/assets/dummy_campus_image.webp",
  "/assets/dummy_campus_image.webp",
  "/assets/dummy_campus_image.webp",
  "/assets/dummy_campus_image.webp",
  "/assets/dummy_campus_image.webp",
  "/assets/dummy_campus_image.webp",
];

const facilities = [
  {
    icon: Monitor,
    title: "Smart Classrooms",
    text: "Modern classrooms equipped with digital boards and presentation tools for interactive learning.",
  },
  {
    icon: BookOpen,
    title: "Study Resources",
    text: "Access to curated study material, practice tests, and exam-focused resources.",
  },
  {
    icon: Users,
    title: "Small Batch Sizes",
    text: "Limited students per batch to ensure personalized attention and better learning.",
  },
  {
    icon: Wifi,
    title: "High-Speed WiFi",
    text: "Students can access online learning platforms and digital resources seamlessly.",
  },
  {
    icon: Presentation,
    title: "Practice Sessions",
    text: "Regular mock tests, speaking practice sessions, and doubt clearing classes.",
  },
  {
    icon: Coffee,
    title: "Comfortable Environment",
    text: "A calm and motivating learning environment designed for student focus.",
  },
];

export default function CampusClient() {
  return (
    <main className="relative bg-[#f7f8fc] min-h-screen pt-40 pb-20 overflow-hidden">
      {/* background glow */}

      <div className="absolute top-0 left-0 w-full h-[400px] bg-linear-to-b from-[#19125e] to-[#19125e]"></div>

      <div className=" relative z-10">
        {/* HERO */}

        <section className="max-w-7xl mx-auto px-6 text-center mb-20 relative">
          <div className="absolute inset-0 hidden md:flex items-center justify-center pointer-events-none opacity-[0.03]">
            <h1 className="text-[120px] md:text-[180px] font-bold text-[#FFFFFF] whitespace-nowrap">
              CAMPUS
            </h1>
          </div>
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl font-bold text-[#FFFFFF]"
          >
            Explore <span className="text-[#f0c44c]">Our Campus</span>
          </motion.h1>

          <p className="text-gray-400 mt-4 max-w-2xl mx-auto">
            BrightMinds Academy provides a modern learning environment with
            experienced faculty, advanced resources, and a supportive atmosphere
            where students can thrive.
          </p>
        </section>

        {/* CAMPUS INTRO */}

        <section className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center mb-24">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
          >
            <h2 className="text-3xl font-semibold text-[#19125e] mb-4 pt-10">
              A Place Designed for Learning
            </h2>

            <p className="text-gray-600 leading-relaxed mb-4">
              Our institute is designed to create a productive and motivating
              learning environment where students can focus on achieving their
              goals.
            </p>

            <p className="text-gray-600 leading-relaxed">
              With modern classrooms, expert faculty, and a friendly community,
              BrightMinds Academy ensures every student receives the best
              support for their academic journey.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
          >
            {/* <Image
              src="/assets/hero-bg.jpg"
              alt="BrightMinds Academy Campus"
              width={600}
              height={400}
              className="rounded-2xl shadow-xl object-cover"
            /> */}
            <div className="relative z-10 shadow-2xl rounded-[2.5rem] overflow-hidden border-2 border-white aspect-[6/5]">
    <video
      src="/videos/AcademyReel.mp4"
      poster="/assets/gallery/academy5.jpeg"
      autoPlay
      loop
      muted
      playsInline
      className="w-full h-full object-cover"
    />
  </div>
          </motion.div>
        </section>

        {/* FACILITIES */}

        <section className="max-w-7xl mx-auto px-6 mb-24">
          <div className="text-center mb-14">
            <h2 className="text-3xl font-bold text-[#19125e]">
              Campus Facilities
            </h2>

            <p className="text-gray-600 mt-2">
              Everything students need for effective learning.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {facilities.map((item, i) => {
              const Icon = item.icon;

              return (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 40 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.1 }}
                  className="bg-white p-6 rounded-xl shadow-lg border border-gray-100 hover:shadow-2xl hover:-translate-y-1 transition"
                >
                  <div className="bg-[#19125e]/10 w-12 h-12 flex items-center justify-center rounded-lg mb-4">
                    <Icon className="text-[#19125e]" size={22} />
                  </div>

                  <h3 className="font-semibold text-[#19125e] mb-2">
                    {item.title}
                  </h3>

                  <p className="text-gray-600 text-sm">{item.text}</p>
                </motion.div>
              );
            })}
          </div>
        </section>

        <GallerySection/>

        {/* VIDEO SECTION */}

        {/* <section className="max-w-7xl mx-auto px-6 mb-24">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-[#19125e]">Campus Tour</h2>

            <p className="text-gray-600 mt-2">
              Watch a quick tour of BrightMinds Academy.
            </p>
          </div>

          <div className="rounded-2xl overflow-hidden shadow-xl">
            <iframe
              className="w-full h-[420px]"
              src="https://www.youtube.com/embed/YOUR_VIDEO_ID"
              title="Campus Tour"
              allowFullScreen
            ></iframe>
          </div>
        </section> */}

        {/* CTA */}

        <section className="w-full md:max-w-7xl mx-auto bg-linear-to-r from-[#19125e] to-[#2c2375] text-white rounded-none md:rounded-2xl p-12 text-center shadow-xl">
          <h2 className="text-3xl font-semibold mb-4">
            Visit Our Campus Today
          </h2>

          <p className="text-white/80 mb-6 max-w-xl mx-auto">
            Experience our learning environment and meet our expert faculty in
            person.
          </p>

          <Link
            href="/contact"
            className="bg-[#f0c44c] text-[#19125e] px-7 py-3 rounded-lg font-medium hover:scale-105 transition inline-block"
          >
            Book a Campus Visit
          </Link>
        </section>
      </div>
    </main>
  );
}
