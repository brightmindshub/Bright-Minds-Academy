"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ChevronRight, ScanEye } from "lucide-react";

const RESULTS = Array.from({ length: 11 }, (_, i) => ({
  id: i + 1,
  src: `/assets/results/score${i + 1}.jpeg`,
}));

export default function StudentResults() {
  const [selectedImg, setSelectedImg] = useState(null);

  return (
    <section className="py-20 md:py-25 bg-[#19125e] overflow-hidden" id="results">
      <div className="max-w-350 mx-auto px-6">
        
        <div className="flex flex-col mb-20 gap-8 text-center">
          <div className="space-y-4">
            <motion.p 
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="text-[#f0c44c] text-[10px] font-black uppercase tracking-[0.6em]"
            >
              Documenting Excellence
            </motion.p>
            <h2 className="text-4xl md:text-8xl font-black text-white uppercase italic tracking-tighter leading-none">
              The Scoreboard
            </h2>
          </div>
          
          
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          {RESULTS.map((item, i) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 1, }}
              whileInView={{ opacity: 1, }}
              transition={{ duration: 0.8, delay: i * 0.05 }}
              onClick={() => setSelectedImg(item.src)}
              className="relative group cursor-pointer overflow-hidden rounded-sm border border-white/5"
            >
              <img
                src={item.src}
                alt="Result Card"
                className="w-full h-full object-cover group-hover:scale-105 transition-all duration-700 ease-out"
              />
              
              {/* <div className="absolute inset-0 bg-black/40 group-hover:bg-transparent transition-colors duration-500" /> */}
              
              <div className="absolute bottom-0 left-0 w-full p-6 translate-y-full group-hover:translate-y-0 transition-transform duration-500 flex justify-between items-center ">
                <span className="text-white text-[10px] font-black uppercase tracking-[0.2em]">View </span>
                <ScanEye className="text-[#f0c44c]" size={18} />
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {selectedImg && (
          <div className="fixed inset-0 z-[500] flex items-center justify-center p-4">
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedImg(null)}
              className="absolute inset-0 bg-black/50 backdrop-blur-md"
            />
            
            <motion.div 
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              className="relative max-h-[90vh] w-auto z-10 group"
            >
              <button 
                onClick={() => setSelectedImg(null)}
                className="absolute -top-10 right-1 flex flex-col items-center gap-2 text-white/50 hover:text-[#f0c44c] transition-colors"
              >
                <X size={32} strokeWidth={1} />
                {/* <span className="text-[9px] font-black uppercase tracking-[0.4em]">Close</span> */}
              </button>

              <div className="relative border border-white/10 shadow-[0_0_80px_rgba(0,0,0,0.5)]">
                <img
                  src={selectedImg}
                  alt="Full view"
                  className="max-h-[80vh] w-auto object-contain"
                />
                
                <div className="absolute top-0 left-0 w-full h-full pointer-events-none border-[20px] border-black/5" />
              </div>

              <div className="mt-8 flex items-center justify-between border-t border-white/5 pt-4">
                <div className="flex items-center gap-4">
                   <div className="w-8 h-[1px] bg-[#f0c44c]" />
                   <p className="text-white text-[10px] font-black uppercase tracking-[0.5em]">Bright Minds Official</p>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}