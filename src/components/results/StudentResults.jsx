"use client";

import React, { useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ArrowRight, ScanEye } from "lucide-react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

const RESULTS = Array.from({ length: 11 }, (_, i) => ({
  id: i + 1,
  src: `/assets/results/score${i + 1}.jpeg`,
}));

export default function StudentResults() {
  const [selectedImg, setSelectedImg] = useState(null);
  const swiperRef = useRef(null);

  return (
    <section className="relative py-24 bg-[#19125e] overflow-hidden" id="results">
      <div className="hidden absolute inset-0 md:flex items-start justify-center pointer-events-none overflow-hidden">
        <h2 className="text-[50px] md:text-[180px] font-extrabold text-white opacity-[0.03] tracking-widest whitespace-nowrap uppercase italic">
          Scoreboard
        </h2>
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="flex flex-col mb-16 text-center">
          <motion.p 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-[#f0c44c] text-[10px] font-black uppercase tracking-[0.6em] mb-4"
          >
            Documenting Excellence
          </motion.p>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-6xl font-black text-white uppercase italic tracking-tighter"
          >
            The Scoreboard
          </motion.h2>
          <div className="w-20 h-[3px] bg-[#f0c44c] mx-auto mt-6 rounded-full"></div>
        </div>

        {/* Swiper Slider */}
        <div className="relative group">
          <Swiper
            onSwiper={(swiper) => (swiperRef.current = swiper)}
            spaceBetween={25}
            breakpoints={{
              0: { slidesPerView: 1.2 },
              640: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
              1280: { slidesPerView: 4 },
            }}
            className="pb-12"
          >
            {RESULTS.map((item, i) => (
              <SwiperSlide key={item.id}>
                <motion.div
                  whileHover={{ y: -10 }}
                  transition={{ duration: 0.4 }}
                  onClick={() => setSelectedImg(item.src)}
                  className="relative aspect-[3/4] rounded-[2rem] overflow-hidden shadow-2xl border border-white/10 cursor-pointer group/card bg-black/20"
                >
                  <img
                    src={item.src}
                    alt={`Result ${item.id}`}
                    className="w-full h-full object-cover group-hover/card:scale-110 transition-transform duration-700"
                  />
                  
                  {/* Hover Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#19125e] via-transparent to-transparent opacity-0 group-hover/card:opacity-90 transition-opacity duration-500 flex items-end justify-center p-8">
                     <div className="flex flex-col items-center gap-2 transform translate-y-4 group-hover/card:translate-y-0 transition-transform duration-500">
                        <div className="w-12 h-12 rounded-full bg-[#f0c44c] flex items-center justify-center text-[#19125e]">
                            <ScanEye size={24} />
                        </div>
                        <span className="text-white text-[10px] font-black uppercase tracking-widest">View Scorecard</span>
                     </div>
                  </div>
                </motion.div>
              </SwiperSlide>
            ))}
          </Swiper>

          {/* Slider Navigation Controls */}
          <div className="flex gap-4 mt-8 justify-center items-center">
            <button
              onClick={() => swiperRef.current?.slidePrev()}
              className="w-14 h-14 flex items-center justify-center rounded-2xl bg-white/5 text-white border border-white/10 shadow-xl hover:bg-[#f0c44c] hover:text-[#19125e] transition-all cursor-pointer"
            >
              <ArrowRight className="rotate-180" />
            </button>
            <button
              onClick={() => swiperRef.current?.slideNext()}
              className="w-14 h-14 flex items-center justify-center rounded-2xl bg-white/5 text-white border border-white/10 shadow-xl hover:bg-[#f0c44c] hover:text-[#19125e] transition-all cursor-pointer"
            >
              <ArrowRight />
            </button>
          </div>
        </div>
      </div>

      {/* Lightbox / Modal for Large View */}
      <AnimatePresence>
        {selectedImg && (
          <div className="fixed inset-0 z-[500] flex items-center justify-center p-4">
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedImg(null)}
              className="absolute inset-0 bg-black/90 backdrop-blur-xl"
            />
            
            <motion.div 
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="relative max-h-[90vh] z-10"
            >
              <button 
                onClick={() => setSelectedImg(null)}
                className="absolute -top-12 right-0 text-white/50 hover:text-[#f0c44c] transition-colors p-2"
              >
                <X size={32} strokeWidth={1.5} />
              </button>

              <div className="relative border border-white/10 rounded-2xl overflow-hidden shadow-[0_0_80px_rgba(0,0,0,0.5)]">
                <img
                  src={selectedImg}
                  alt="Full result view"
                  className="max-h-[80vh] w-auto object-contain"
                />
              </div>

              <div className="mt-6 flex items-center justify-center gap-4">
                <div className="w-10 h-[1px] bg-[#f0c44c]" />
                <p className="text-white text-[10px] font-black uppercase tracking-[0.5em]">Verified BrightMinds Success</p>
                <div className="w-10 h-[1px] bg-[#f0c44c]" />
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}