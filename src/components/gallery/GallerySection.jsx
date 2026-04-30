"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

const galleryImages = [
  "/assets/gallery/g2.jpeg",
  "/assets/gallery/g3.jpeg",
//   "/assets/gallery/g4.jpeg",
  "/assets/gallery/academy1.jpeg",
  "/assets/gallery/g5.jpeg",
  "/assets/gallery/g6.jpeg",
  "/assets/gallery/g7.jpeg",
  "/assets/gallery/academy2.jpeg",
  "/assets/gallery/g8.jpeg",
  "/assets/gallery/g9.jpeg",
  "/assets/gallery/academy5.jpeg",
  "/assets/gallery/g10.jpeg",
  //   "/assets/gallery/g11.jpeg",
  "/assets/gallery/academy3.jpeg",
  "/assets/gallery/g12.jpeg",
  "/assets/gallery/g13.jpeg",
  "/assets/gallery/g14.jpeg",
  "/assets/gallery/academy4.jpeg",
  "/assets/gallery/g15.jpeg",
  //   "/assets/gallery/g16.jpeg",
  //   "/assets/gallery/g17.jpeg",
  //   "/assets/gallery/g18.jpeg",
  "/assets/gallery/academy6.jpeg",
  "/assets/gallery/academy7.jpeg",
];

const InfiniteGallery = () => {
  return (
    <section className="py-20 bg-[#f0c44c] overflow-hidden mb-24">
      <div className="text-center mb-14 relative z-10">
        <h2 className="text-3xl font-bold text-[#19125e]">
          Life at BrightMinds
        </h2>

        <p className="text-gray-600 mt-2">
          A glimpse of our classrooms, activities, and student environment.
        </p>
      </div>

      <div className="relative w-full overflow-hidden flex">
        <motion.div
          className="flex gap-6 flex-nowrap"
          animate={{ x: ["0%", "-50%"] }}
          transition={{
            repeat: Infinity,
            ease: "linear",
            duration: 100,
          }}
          style={{ width: "fit-content" }}
        >
          {[...galleryImages, ...galleryImages].map((img, i) => (
            <div
              key={i}
              className="w-[300px] md:w-[400px] lg:w-[450px] flex-shrink-0"
            >
              <div className="overflow-hidden rounded-[2rem] shadow-sm group border border-gray-100">
                <Image
                  src={img}
                  alt={`Campus Moment ${i}`}
                  width={500}
                  height={350}
                  className="w-full h-[200px] md:h-[320px] object-cover group-hover:scale-105 transition-transform duration-700"
                />
              </div>
            </div>
          ))}
        </motion.div>

        <div className="pointer-events-none absolute inset-y-0 left-0 w-5 md:w-32 bg-gradient-to-r from-white to-transparent z-10"></div>
        <div className="pointer-events-none absolute inset-y-0 right-0 w-5 md:w-32 bg-gradient-to-l from-white to-transparent z-10"></div>
      </div>
    </section>
  );
};

export default InfiniteGallery;
