"use client";

import { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import {motion} from "framer-motion"

import "swiper/css";
import { ArrowRight } from "lucide-react";
import LeadFormModal from "../hero/LeadFormModal";

const courses = [
  {
    title: "English & Language Tests",
    courses: [
      "IELTS (Academic & General)",
      "PTE (Academic & Core)",
      "Duolingo",
      "CELPIP",
      "OET",
      "Spoken English (Beginner - Advanced)",
      "French",
      "German",
    ],
  },
  {
    title: "Competitive Exams",
    courses: [
      "Sainik School",
      "RIMC",
      "Rashtriya Military School",
      "SSC",
      "CUET",
      "CTET",
      "HTET",
      "Banking Exams",
    ],
  },
  {
    title: "Academics",
    courses: [
      "Class 8 - 10 (Maths, Science, English)",
      "Class 11 - 12 (Maths, Science, English)",
      "Interview Preparation",
      "Personality Development",
    ],
  },
];

const testimonials = [
  {
    name: "Aman Sharma",
    score: "IELTS 8.0",
    video: "/videos/sampleVideo.mp4",
  },
  {
    name: "Priya Mehta",
    score: "PTE 79",
    video: "/videos/sampleVideo.mp4",
  },
  {
    name: "Rahul Singh",
    score: "IELTS 7.5",
    video: "/videos/sampleVideo.mp4",
  },
  {
    name: "Neha Verma",
    score: "IELTS 7.5",
    video: "/videos/sampleVideo.mp4",
  },
];

export default function TestimonialsSection() {
  const swiperRef = useRef(null);
  const [activeVideo, setActiveVideo] = useState(null);
  const [showLeadForm, setShowLeadForm] = useState(false);

  return (
    <section className="relative py-24 bg-[#f7f8fc]">
        {/* Background Watermark Text */}
<div className="hidden absolute inset-0 md:flex items-start justify-center pointer-events-none overflow-hidden">

  <h2 className="text-[50px] md:text-[130px] font-extrabold text-[#19125e] opacity-[0.04] tracking-widest whitespace-nowrap uppercase">
    Testimonials
  </h2>

</div>

      <div className="max-w-7xl mx-auto px-6">

        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-4xl font-bold text-[#19125e] text-center mb-4"
        >
          Students Success Stories
        </motion.h2>

        <div className="w-20 h-[3px] bg-[#f0c44c] mx-auto mb-12 rounded-full"></div>

        {/* Slider + Buttons Row */}
        <div className="flex items-center gap-6">

          {/* Slider */}
          <Swiper
            onSwiper={(swiper) => (swiperRef.current = swiper)}
            spaceBetween={30}
            breakpoints={{
              0: { slidesPerView: 1.2 },
              640: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
            }}
            className="flex-1"
          >
            {testimonials.map((t, i) => (
              <SwiperSlide key={i}>
                <div
                  className="relative rounded-2xl overflow-hidden shadow-xl cursor-pointer group"
                  onClick={() => setActiveVideo(t.video)}
                >

                  <video
                    src={t.video}
                    muted
                    playsInline
                    className="w-full h-[520px] object-cover"
                  />

                  {/* Gradient */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent"></div>

                  {/* Play Button */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="bg-white/30 backdrop-blur-md p-5 rounded-full text-white text-2xl group-hover:scale-110 transition">
                      ▶
                    </div>
                  </div>

                  {/* Text */}
                  <div className="absolute bottom-6 left-6 text-white">
                    <h4 className="text-xl font-semibold">{t.name}</h4>

                    <p className="text-sm text-white/80">
                      Achieved Score:{" "}
                      <span className="font-semibold">{t.score}</span>
                    </p>

                    <div className="text-[#f0c44c] mt-1">★★★★★</div>
                  </div>

                </div>
              </SwiperSlide>
            ))}
          </Swiper>

        </div>

            <div className="flex gap-4 mt-5 justify-center items-center">

           {/* Left Button */}
          <button
            onClick={() => swiperRef.current?.slidePrev()}
            className="w-12 h-12 flex items-center justify-center rounded-full 
            bg-[#19125e] text-white shadow-md hover:bg-[#2c2375] transition cursor-pointer"
          >
            ←
          </button>

          {/* Right Button */}
          <button
            onClick={() => swiperRef.current?.slideNext()}
            className="w-12 h-12 flex items-center justify-center rounded-full 
            bg-[#19125e] text-white shadow-md hover:bg-[#2c2375] transition cursor-pointer"
          >
            →
          </button>
            </div>

      </div>

      {/* Fullscreen Video Modal */}
      {activeVideo && (
        <div className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-6">

          <button
            onClick={() => setActiveVideo(null)}
            className="absolute top-6 right-6 text-white text-3xl cursor-pointer"
          >
            ✕
          </button>

          <video
            src={activeVideo}
            controls
            autoPlay
            className="w-200 max-h-[90vh] rounded-xl"
          />

        </div>
      )}
      <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="flex justify-center mt-16"
        >
          <button
            onClick={() => setShowLeadForm(true)}
            className="bg-[#19125e] text-white px-8 py-4 rounded-lg font-semibold shadow-lg hover:bg-[#f0c44c] hover:text-[#19125e] transition cursor-pointer flex items-center gap-1"
          >
            Start your Success Story <span><ArrowRight width={18} height={18}/></span>
          </button>
        </motion.div>

         <LeadFormModal
                      open={showLeadForm}
                      onClose={() => setShowLeadForm(false)}
                      courses={courses}
                    />
    </section>
  );
}