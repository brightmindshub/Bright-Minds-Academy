"use client";

import ContactForm from "@/components/contactForm/ContactForm";
import { motion } from "framer-motion";
import { Phone, Mail, MapPin, Star, MessageSquare, MessageCircle } from "lucide-react";
import Image from "next/image";

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

export default function ContactPage() {
  return (
    <main className="relative bg-[#f7f8fc] min-h-screen pt-40 pb-20">

      {/* subtle background glow */}

     <div className="absolute top-0 left-0 w-full h-[450px] bg-linear-to-b from-[#19125e] to-[#19125e]"></div>


      <div className="max-w-7xl mx-auto px-6 relative z-10">

        {/* PAGE HEADER */}

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-5 md:mb-20 relative"
        >
            <div className="absolute inset-0 hidden md:flex items-center justify-center pointer-events-none opacity-[0.03]">

        <h1 className="text-[120px] md:text-[180px] font-bold text-[#FFFFFF] whitespace-nowrap">
          CONTACT
        </h1>

      </div>
          <h1 className="text-4xl md:text-5xl font-bold text-[#FFFFFF]">
            Connect <span className="text-[#f0c44c]"> with us</span>
          </h1>

        </motion.div>


        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="group bg-white rounded-2xl p-8 shadow-[0_10px_40px_-15px_rgba(0,0,0,0.1)] border border-gray-100 hover:border-[#f0c44c]/50 transition-all duration-300"
          >
            <div className="flex flex-col h-full space-y-6">
              <div className="flex items-center gap-4">
                <div className="bg-[#19125e] p-3 rounded-xl shadow-lg shadow-[#19125e]/20 group-hover:scale-110 transition-transform">
                  <Phone className="text-white" size={24} />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-[#19125e]">Call Us</h3>
                  <a href="tel:+911149841622" className="text-sm font-semibold text-gray-600 hover:text-[#19125e] transition-colors">
                    +91 1149841622 - BMA Office
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4 pt-6 border-t border-gray-100">
                <div className="bg-[#25D366] p-3 rounded-xl shadow-lg shadow-[#25D366]/20 group-hover:scale-110 transition-transform">
                  {/* <MessageCircle className="text-white" size={24} /> */}
                  <Image src={"/assets/whatsappIcon.svg"} height={24} width={24} alt="whatsappIcon"/>
                </div>
                <div className="space-y-3 flex-1">
                  {/* <h3 className="text-lg font-bold text-[#19125e]">WhatsApp</h3> */}
                  <div className="flex flex-col gap-2">
                    <a href="https://wa.me/919217669989" className="flex items-center justify-between p-2.5 rounded-xl bg-green-50 text-[#19125e] font-bold text-sm hover:bg-green-500 hover:text-white transition-all flex-col">
                      +91 9217669989 <span>(Jeena John)</span>
                      {/* <MessageCircle size={14} /> */}
                    </a>
                    <a href="https://wa.me/918826380767" className="flex items-center justify-between p-2.5 rounded-xl bg-green-50 text-[#19125e] font-bold text-sm hover:bg-green-500 hover:text-white transition-all flex-col">
                      +91 8826380767 <span>(Seema Sharma)</span>
                      {/* <MessageCircle size={14} /> */}
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="group bg-white rounded-2xl p-8 shadow-[0_10px_40px_-15px_rgba(0,0,0,0.1)] border border-gray-100 hover:border-[#f0c44c]/50 transition-all duration-300 flex flex-col justify-center"
          >
            <div className="flex items-center gap-4 mb-6">
              <div className="bg-[#19125e] p-3 rounded-xl shadow-lg shadow-[#19125e]/20 group-hover:scale-110 transition-transform">
                <Mail className="text-white" size={24} />
              </div>
              <div>
                <h3 className="text-lg font-bold text-[#19125e]">Email Us</h3>
                <p className="text-xs text-gray-400 uppercase tracking-wider font-medium">Response within 24hrs</p>
              </div>
            </div>
            <a href="mailto:info@brightmindshub.in" className="block p-4 rounded-xl bg-gray-50 font-semibold text-[#19125e] hover:bg-[#19125e] hover:text-white transition-all text-center break-all">
              info@brightmindshub.in
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="group bg-white rounded-2xl p-8 shadow-[0_10px_40px_-15px_rgba(0,0,0,0.1)] border border-gray-100 hover:border-[#f0c44c]/50 transition-all duration-300 flex flex-col justify-center"
          >
            <div className="flex items-center gap-4 mb-6">
              <div className="bg-[#19125e] p-3 rounded-xl shadow-lg shadow-[#19125e]/20 group-hover:scale-110 transition-transform">
                <MapPin className="text-white" size={24} />
              </div>
              <div>
                <h3 className="text-lg font-bold text-[#19125e]">Visit Us</h3>
                <p className="text-xs text-gray-400 uppercase tracking-wider font-medium">New Delhi, India</p>
              </div>
            </div>
            <p className="text-gray-600 leading-relaxed font-medium bg-gray-50 p-4 rounded-xl text-sm">
              RZ-58-61, Vashisht Park, Pankha Road, Near Sagarpur Bus Stand, Delhi - 46
            </p>
          </motion.div>
        </div>

<div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
  
  <motion.div
    initial={{ opacity: 0, x: -40 }}
    animate={{ opacity: 1, x: 0 }}
    className="lg:col-span-7 space-y-6"
  >
    <div>
      <h2 className="text-3xl font-black text-[#19125e]">Get Free Counselling</h2>
      <p className="text-gray-500 mt-2">Fill the form and our experts will contact you shortly.</p>
    </div>

    <ContactForm courses={courses} />
  </motion.div>

  <motion.div
    initial={{ opacity: 0, x: 40 }}
    animate={{ opacity: 1, x: 0 }}
    className="lg:col-span-5 space-y-6"
  >
    <div className="relative rounded-[2.5rem] overflow-hidden shadow-2xl h-[450px] border-[8px] border-white ring-1 ring-gray-100">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3502.6864231732075!2d77.0974953793457!3d28.60918260000001!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d1bf150b9df15%3A0xfc2fd93fcf89179a!2sBrightminds%20Academy%20(BMA)!5e0!3m2!1sen!2sin!4v1773056348422!5m2!1sen!2sin"
        className="w-full h-full border-0 transition-all duration-1000"
        loading="lazy"
      />
      
      <div className="absolute bottom-6 left-6 right-6 bg-white/90 backdrop-blur-md shadow-xl rounded-2xl p-5 border border-white/50">
        <p className="font-bold text-[#19125e]">Campus</p>
        <p className="text-xs text-gray-500 mt-1 leading-relaxed">
          RZ-58-61, Pankha Road, New Delhi
        </p>
      </div>
    </div>
    
    <a
      href="https://wa.me/919217669989"
      target="_blank"
      className="flex items-center justify-center gap-3 bg-green-50 text-green-700 py-4 rounded-2xl font-bold hover:bg-green-600 hover:text-white transition-all group"
    >
      <MessageSquare className="group-hover:scale-110 transition" />
      Chat on WhatsApp
    </a>
  </motion.div>
</div>

      </div>
    </main>
  );
}