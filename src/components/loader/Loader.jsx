"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function Loader() {
  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="fixed inset-0 z-[9999] bg-[#e1e1e1] flex items-center justify-center"
    >
      <motion.div
        layoutId="brand-logo"
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: [1, 1.08, 1], opacity: 1 }}
        transition={{
          duration: 1.2,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      >
        <Image
          src="/brightMindsAcademy-logo.jpeg"
          alt="Bright Minds Academy"
          width={230}
          height={80}
          priority
        />
      </motion.div>
    </motion.div>
  );
}