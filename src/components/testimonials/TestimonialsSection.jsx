"use client";

import { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { motion, AnimatePresence } from "framer-motion";
import "swiper/css";
import { ArrowRight, Play, X, User, Star } from "lucide-react";
import LeadFormModal from "../hero/LeadFormModal";

const courses = [
  {
    title: "English & Language Tests",
    courses: [
      "IELTS (Academic & General)",
      "PTE (Academic & Core)",
      "Spoken English (Beginner - Advanced)",
      "French",
      "German",
      "Professional Nanny Course",
      "Duolingo",
      "CELPIP",
      "OET",
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
    name: "Sahil",
    score: "IELTS 7.5",
    youtubeId: "9FRq3MmcB0k",
  },
  {
    name: "Devanshu",
    score: "IELTS 7.0",
    youtubeId: "-r4gAFQ5W8k",
  },
  {
    name: "Hemant Uniyal",
    score: "IELTS 7.5",
    youtubeId: "wp_s7UzfsFw",
  },
  {
    name: "Simranpreet Kaur",
    score: "IELTS 6.5",
    youtubeId: "_dCGvCh21-I",
  },
  {
    name: "Vibhor Dabas",
    score: "IELTS 8.0",
    youtubeId: "oAtb_RtJjEI",
  },
  {
    name: "Khushi Dabas",
    score: "IELTS 7.5",
    youtubeId: "utD4I6Fu3XU",
  },
  {
    name: "Ashmeet Kaur",
    score: "PTE Score: 75",
    youtubeId: "oGvRHiq1x-k",
  },
  {
    name: "Rashmeet Kaur",
    score: "IELTS student",
    youtubeId: "tdovjRlDcfg",
  },
  {
    name: "Gurpreet Singh",
    score: "IELTS student",
    youtubeId: "aT7Avlx0ZJM",
  },
  {
    name: "Akashdeep Singh",
    score: "PTE student",
    youtubeId: "rtOjHbPRjok",
  },
  {
    name: "Jaskaran Singh",
    score: "PTE student",
    youtubeId: "a16ydCuDbjI",
  },
  {
    name: "Harjas Singh",
    score: "PTE student",
    youtubeId: "2dm8-kpnv_c",
  },
];

export default function TestimonialsSection() {
  const swiperRef = useRef(null);
  const [activeVideoId, setActiveVideoId] = useState(null);
  const [showLeadForm, setShowLeadForm] = useState(false);

  return (
    <section className="relative py-24 bg-[#f7f8fc] overflow-hidden" id="reviews">
      <div className="hidden absolute inset-0 md:flex items-start justify-center pointer-events-none overflow-hidden">
        <h2 className="text-[50px] md:text-[130px] font-extrabold text-[#19125e] opacity-[0.04] tracking-widest whitespace-nowrap uppercase">
          Testimonials
        </h2>
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-4xl font-black text-[#19125e] text-center mb-4"
        >
          Student Success Stories
        </motion.h2>

        <div className="w-20 h-[3px] bg-[#f0c44c] mx-auto mb-12 rounded-full"></div>

        <div className="relative group">
          <Swiper
            onSwiper={(swiper) => (swiperRef.current = swiper)}
            spaceBetween={30}
            breakpoints={{
              0: { slidesPerView: 1.1 },
              640: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
            }}
            className="pb-12"
          >
            {testimonials.map((t, i) => (
              <SwiperSlide key={i}>
                <motion.div
                  whileHover={{ y: -10 }}
                  className="relative rounded-[2.5rem] overflow-hidden shadow-2xl bg-black aspect-[9/16] group/card cursor-pointer border border-white/10"
                  onClick={() => setActiveVideoId(t.youtubeId)}
                >
                  <img
                    src={`https://img.youtube.com/vi/${t.youtubeId}/maxresdefault.jpg`}
                    alt={t.name}
                    className="w-full h-full object-cover opacity-70 group-hover/card:scale-110 transition-transform duration-700"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-[#19125e] via-transparent to-transparent opacity-90"></div>

                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-20 h-20 bg-white/20 backdrop-blur-xl border border-white/30 rounded-full flex items-center justify-center text-white transition-all duration-500 group-hover/card:scale-110 group-hover/card:bg-[#f0c44c] group-hover/card:text-[#19125e]">
                      <Play fill="currentColor" size={32} className="ml-1" />
                    </div>
                  </div>

                  <div className="absolute bottom-8 left-8 right-8">
                    <div className="flex items-center gap-2 text-[#f0c44c] mb-2">
                       <Star size={14} fill="currentColor" />
                       <span className="text-[10px] font-black uppercase tracking-widest">Verified</span>
                    </div>
                    <h4 className="text-2xl font-black text-white uppercase italic tracking-tight">{t.name}</h4>
                    <p className="text-sm text-white/60 font-bold uppercase tracking-wider mb-2">
                      <span className="text-white">{t.score}</span>
                    </p>
                    <div className="flex text-[#f0c44c] gap-0.5">
                      {[...Array(5)].map((_, i) => <Star key={i} size={12} fill="currentColor" />)}
                    </div>
                  </div>
                </motion.div>
              </SwiperSlide>
            ))}
          </Swiper>

          <div className="flex gap-4 mt-8 justify-center items-center">
            <button
              onClick={() => swiperRef.current?.slidePrev()}
              className="w-14 h-14 flex items-center justify-center rounded-2xl bg-white text-[#19125e] shadow-xl hover:bg-[#19125e] hover:text-white transition-all cursor-pointer border border-gray-100"
            >
              <ArrowRight className="rotate-180" />
            </button>
            <button
              onClick={() => swiperRef.current?.slideNext()}
              className="w-14 h-14 flex items-center justify-center rounded-2xl bg-white text-[#19125e] shadow-xl hover:bg-[#19125e] hover:text-white transition-all cursor-pointer border border-gray-100"
            >
              <ArrowRight />
            </button>
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="flex justify-center mt-16"
        >
          <button
            onClick={() => setShowLeadForm(true)}
            className="bg-[#19125e] text-white px-10 py-5 rounded-2xl font-black text-xs uppercase tracking-[0.2em] shadow-2xl hover:bg-[#f0c44c] hover:text-[#19125e] transition-all cursor-pointer flex items-center gap-3 active:scale-95"
          >
            Start your Success Story <ArrowRight size={18}/>
          </button>
        </motion.div>
      </div>

      <AnimatePresence>
        {activeVideoId && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-[#0a0a0c]/95 backdrop-blur-xl z-[200] flex items-center justify-center p-4 md:p-12"
          >
            <button
              onClick={() => setActiveVideoId(null)}
              className="absolute top-8 right-8 text-white/50 hover:text-white transition-colors cursor-pointer p-2 bg-white/10 rounded-full"
            >
              <X size={32} />
            </button>

            <motion.div 
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="w-full max-w-4xl aspect-video rounded-3xl overflow-hidden shadow-[0_0_100px_rgba(240,196,76,0.1)] border border-white/10 bg-black"
            >
              <iframe
                className="w-full h-full"
                src={`https://www.youtube.com/embed/${activeVideoId}?autoplay=1&rel=0`}
                title="Student Testimonial"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              ></iframe>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <LeadFormModal
        open={showLeadForm}
        onClose={() => setShowLeadForm(false)}
        courses={courses}
      />
    </section>
  );
}