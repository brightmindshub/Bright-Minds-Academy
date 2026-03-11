"use client";

import ContactForm from "@/components/contactForm/ContactForm";
import { motion } from "framer-motion";
import { Phone, Mail, MapPin, Star } from "lucide-react";

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

          {/* <p className="text-gray-600 mt-4 max-w-xl mx-auto text-sm md:text-base">
            Have questions about our courses? <br />
            Our counsellors are here to guide you.
          </p> */}
        </motion.div>

        {/* CONTACT CARDS */}

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-16">

          {[
            {
              icon: Phone,
              title: "Call Us",
              value: "+91 9217669989",
            },
            {
              icon: Mail,
              title: "Email",
              value: "brightmindsacademy413@gmail.com",
            },
            {
              icon: MapPin,
              title: "Visit Us",
              value:
                "RZ-58-61, Vashisht Park, Pankha Road, Near Sagarpur Bus Stand, New Delhi - 110046",
            },
          ].map((item, i) => {
            const Icon = item.icon;

            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.2 }}
                className="group bg-white rounded-xl shadow-lg p-6 flex items-start gap-4 border border-gray-100 hover:shadow-2xl hover:-translate-y-1 transition"
              >
                <div className="bg-[#19125e]/10 p-3 rounded-lg group-hover:scale-110 transition">
                  <Icon className="text-[#19125e]" size={22} />
                </div>

                <div>
                  <p className="text-sm text-gray-500">{item.title}</p>
                  <p className="font-semibold text-[#19125e] text-sm md:text-base">
                    {item.value}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* FORM + MAP */}

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

          {/* FORM SECTION */}

          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >

            {/* form header */}

            <div>

              <h2 className="text-2xl font-semibold text-[#19125e]">
                Get Free Counselling
              </h2>

              <p className="text-gray-600 text-sm mt-1">
                Fill the form and our experts will contact you shortly.
              </p>

            </div>

            <ContactForm courses={courses} />

            {/* whatsapp option */}

            <a
              href="https://wa.me/919217669989"
              target="_blank"
              className="flex items-center justify-center gap-2 text-green-600 font-medium hover:underline"
            >
              Chat with us on WhatsApp
            </a>

          </motion.div>

          {/* MAP SECTION */}

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="relative rounded-2xl overflow-hidden shadow-xl h-[420px]"
          >

            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3502.6864231732075!2d77.0974953793457!3d28.60918260000001!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d1bf150b9df15%3A0xfc2fd93fcf89179a!2sBrightminds%20Academy%20(BMA)!5e0!3m2!1sen!2sin!4v1773056348422!5m2!1sen!2sin"
              className="w-full h-full border-0"
              loading="lazy"
            />

            {/* overlay card */}

            <div className="absolute bottom-6 left-6 bg-white shadow-xl rounded-xl p-4 max-w-[220px]">

              <p className="font-semibold text-[#19125e] text-sm">
                BrightMinds Academy
              </p>

              <p className="text-xs text-gray-600 mt-1">
                New Delhi
              </p>

            </div>

          </motion.div>

        </div>

      </div>
    </main>
  );
}