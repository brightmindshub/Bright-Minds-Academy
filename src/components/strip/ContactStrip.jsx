"use client";

import React from "react";
import { motion } from "framer-motion";
import { Phone, Mail } from "lucide-react";

export default function ContactStrip() {
  const contactData = [
    { type: "call", name: "BMA Office", value: "+91 1149841622", link: "tel:+911149841622" },
    { type: "whatsapp", name: "Jeena John", value: "+91 9217669989", link: "tel:919217669989" },
    { type: "whatsapp", name: "Seema Sharma", value: "+91 8826380767", link: "tel:918826380767" },
    { type: "email", name: "Email", value: "info@brightmindshub.in", link: "mailto:info@brightmindshub.in" },
  ];

  return (
    <div className="bg-[#19125e] text-white text-sm overflow-hidden">
      <div className="max-w-7xl mx-auto flex items-center h-10 relative">
        
        <motion.div
          className="flex items-center whitespace-nowrap gap-16"
          animate={{ x: ["0%", "-50%"] }}
          transition={{
            repeat: Infinity,
            ease: "linear",
            duration: 25,
          }}
          style={{ width: "fit-content" }}
        >
          {[...contactData, ...contactData].map((item, i) => (
            <div key={i} className="flex items-center gap-3">
              {item.type === "email" ? (
                <Mail size={14} className="text-[#f0c44c]" />
              ) : (
                <Phone size={14} className="text-[#f0c44c]" />
              )}
              
              <div className="flex items-center gap-1.5">
                <span className="text-[10px] md:text-xs font-medium uppercase tracking-widest text-white/70">
                  {item.name}:
                </span>
                <a
                  href={item.link}
                  target={item.type === "whatsapp" ? "_blank" : "_self"}
                  className="text-xs md:text-sm font-bold hover:text-[#f0c44c] transition-colors"
                >
                  {item.value}
                </a>
              </div>

              <div className="ml-4 w-1 h-1 bg-white/20 rounded-full" />
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  );
}