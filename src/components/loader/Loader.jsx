"use client";

import { motion } from "framer-motion";

export default function Loader() {
  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.8, ease: "easeInOut" }}
      className="fixed inset-0 z-[9999] bg-[#f8f9fa] flex flex-col items-center justify-center overflow-hidden px-6"
    >
      <motion.div 
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 0.04 }}
        transition={{ duration: 2 }}
        className="absolute w-[300px] h-[300px] md:w-[600px] md:h-[600px] bg-[#19125e] rounded-full blur-[60px] md:blur-[100px]"
      />

      <motion.div
        layoutId="brand-logo"
        className="relative flex flex-col items-center w-full max-w-sm md:max-w-none"
      >
        <motion.h1
          initial={{ letterSpacing: "-0.05em", opacity: 0, filter: "blur(10px)" }}
          animate={{ 
            letterSpacing: "0.05em",
            opacity: 1, 
            filter: "blur(0px)",
          }}
          transition={{
            duration: 1.5,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="text-3xl sm:text-3xl md:text-5xl font-black text-[#19125e] uppercase text-center leading-[1.1]"
        >
          Bright Minds <br className="block md:hidden" /> 
          <span className="text-[#f0c44c]">Academy</span>
        </motion.h1>

        <motion.div 
          initial={{ width: 0 }}
          animate={{ width: "100%" }}
          transition={{ duration: 1.5, ease: "easeInOut" }}
          className="h-[2px] bg-[#f0c44c] mt-6 relative overflow-hidden"
          style={{ width: '80px' }}
        >
           <motion.div 
            animate={{ x: ["-100%", "100%"] }}
            transition={{ repeat: Infinity, duration: 1.5, ease: "linear" }}
            className="absolute inset-0 bg-white/50 w-full"
           />
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 0.4, y: 0 }}
          transition={{ delay: 0.8, duration: 1 }}
          className="mt-6 text-[8px] md:text-[10px] font-bold tracking-[0.2em] md:tracking-[0.4em] text-[#19125e] uppercase text-center max-w-[250px] md:max-w-none leading-relaxed"
        >
          Excellence in Language & Academics
        </motion.p>
      </motion.div>
    </motion.div>
  );
}