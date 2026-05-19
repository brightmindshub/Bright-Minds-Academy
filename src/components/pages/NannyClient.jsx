"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import ContactForm from "@/components/contactForm/ContactForm";
import FAQSection from "@/components/faq/FaqSection";
import { useRouter } from "next/navigation";
import Popup from "@/components/leadPopup/LeadPopup";
import NannyOverview from "@/app/nanny-course/NannyOverview";
import NannyTransformation from "@/app/nanny-course/BeforeAfterNanny";
import NannyCourseUses from "@/app/nanny-course/NannyCourseUses";

const nannyFaqs = [
  {
    question: "What is the Nanny Course and who is it for?",
    answer:
      "The Nanny Course is a professional training program designed for individuals aspiring to work in childcare. It is ideal for those seeking high-paying domestic roles or international opportunities in countries like Canada, the UK, and Australia.",
  },
  {
    question: "How long does the Nanny training usually take?",
    answer:
      "The duration typically ranges from 4 to 12 weeks, depending on the certification level. Our intensive modules are designed to provide comprehensive knowledge of child psychology, safety, and nutrition in a streamlined timeframe.",
  },
  {
    question: "What key skills are covered in the curriculum?",
    answer:
      "The course covers essential pillars of caregiving, including Newborn Care, Pediatric First Aid & CPR, Child Nutrition, Growth Milestones, and Professional Communication for parent-caregiver interactions.",
  },
  {
    question: "Do you provide assistance with job placements or visas?",
    answer:
      "Yes, we offer dedicated support for interview preparation, resume building, and guidance on the documentation required for caregiver visa categories to help you transition into your career smoothly.",
  },
  {
    question: "Can I attend a demo session before joining the course?",
    answer:
      "Absolutely! We offer a free counselling and demo session where you can meet our expert trainers, explore the study materials, and understand how our certification can help you land global opportunities.",
  },
];

const courses = [
  {
    title: "English & Language Tests",
    courses: [
      "PTE (Academic & Core)",
      "IELTS (Academic & General)",
      "Duolingo",
      "CELPIP",
      "OET",
      "Spoken English (Beginner - Advanced)",
      "French",
      "German",
      "Professional Nanny Course,"
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

export default function NannyClient() {
  const router = useRouter();
  const [open, setOpen] = useState(false);
  useEffect(() => {
    const headerOffset = 200;

    window.scrollTo({ top: 0 });

    setTimeout(() => {
      window.scrollBy({
        top: -headerOffset,
        behavior: "smooth",
      });
    }, 50);
  }, []);

  useEffect(() => {
    const timer = setTimeout(() => {
      setOpen(true);
    }, 6000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <main className="bg-white pt-5">
      <Popup
        open={open}
        setOpen={setOpen}
        title="Enroll Now "
        description="Book a FREE demo class & get a personalized study plan."
      >
        <ContactForm
          courses={[{ title: "English", courses: ["Professional Nanny Course"] }]}
          defaultCourse="Professional Nanny Course"
        />
      </Popup>

      <section className="relative overflow-hidden pt-35 pb-24 bg-gradient-to-r from-[#fdfcfb] via-[#f7f8fc] to-[#ffffff]">
        <div className="absolute top-[-100px] left-[-100px] w-[300px] h-[300px] bg-[#19125e]/15 rounded-full blur-3xl" />
        <div className="absolute bottom-[-120px] right-[-100px] w-[350px] h-[350px] bg-[#f0c44c]/20 rounded-full blur-3xl" />

        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 items-center gap-10 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-[#19125e] font-semibold mb-3 border-l-4 border-[#f0c44c] pl-3">
              Professional Caregiving Program
            </p>
            <h1 className="text-4xl md:text-5xl font-bold text-[#19125e] leading-tight">
              Start Your Career as a{" "}
              <span className="text-[#f0c44c]">Certified Nanny</span>
            </h1>

            <p className="text-gray-600 mt-6 max-w-lg">
              Master the art of childcare with our comprehensive training
              program. From newborn care to early childhood education, get the
              skills and global certification needed to work worldwide.
            </p>

            <div className="mt-6 space-y-2 text-gray-700">
              <p className="flex items-center gap-2">
                <span className="text-[#f0c44c]">✔</span> Child Growth and
                Behavior
              </p>
              <p className="flex items-center gap-2">
                <span className="text-[#f0c44c]">✔</span> Child Psychology &
                Nutrition
              </p>
              <p className="flex items-center gap-2">
                <span className="text-[#f0c44c]">✔</span> Hygiene and
                Cleanliness
              </p>
              <p className="flex items-center gap-2">
                <span className="text-[#f0c44c]">✔</span> Safety and First Aid
              </p>
              <p className="flex items-center gap-2">
                <span className="text-[#f0c44c]">✔</span> Communication with
                Children
              </p>
            </div>

            <button
              onClick={() => setOpen(true)}
              className="mt-8 bg-[#19125e] text-white px-7 py-3 rounded-full shadow-xl hover:scale-105 hover:shadow-2xl transition duration-300"
            >
              Get Free Counselling
            </button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7 }}
            className="relative flex justify-center"
          >
            <img
              src="/assets/NannyCourseHero.webp"
              alt="Professional Nanny Training"
              className="w-full md:w-[520px] h-[400px] md:h-[450px] object-cover rounded-2xl shadow-2xl relative z-10"
            />

            <div className="absolute w-[350px] h-[350px] border-2 border-[#19125e]/10 rounded-full top-10 animate-pulse" />
          </motion.div>
        </div>
      </section>
      <NannyCourseUses />

      <NannyTransformation setOpen={setOpen} />
      <NannyOverview />

      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0 bg-[#f0c44c]" />

        <div className="absolute left-0 top-0 h-full w-[45%] hidden md:block overflow-hidden rounded-r-[300px]">
          <img
            src="/assets/pte-asset.jpg"
            alt="PTE Student"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/40"></div>
        </div>

        <div className="relative z-10 max-w-7xl px-6 grid md:grid-cols-2 gap-12 items-center justify-center">
          <div className="hidden md:block"></div>

          <div className="text-white max-w-md ml-auto px-0">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 leading-tight text-[#19125e]">
              Enquire Now for Nanny course
            </h2>

            <div className="bg-white p-6 rounded-2xl shadow-xl text-black">
              <ContactForm
                courses={[{ title: "English", courses: ["Professional Nanny Course"] }]}
                defaultCourse="Professional Nanny Course"
              />
            </div>
          </div>
        </div>
      </section>

      <FAQSection
        courses={courses}
        faqs={nannyFaqs}
        showPopup={false}
        title="Want to Know More?"
      />

      <section className="py-20 bg-gradient-to-r from-[#f0c44c] via-[#e6bb3c] to-[#d8a724]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-12">
            <div className="relative w-full md:w-1/2">
              <div className="overflow-hidden rounded-[40px] shadow-xl ring-4 ring-[#19125e]">
                <img
                  src="/assets/support.jpg"
                  alt="Support"
                  className="w-full h-[420px] object-cover transition-transform duration-500 hover:scale-105"
                />
              </div>
            </div>

            <div className="w-full md:w-1/2 text-center md:text-left text-[#19125e]">
              <h2 className="text-4xl md:text-5xl font-extrabold mb-6 leading-tight">
                Need Help?
                <br />
                <span className="text-[#2a1fa0]">We’re Here For You</span>
              </h2>

              <p className="text-lg mb-8 max-w-lg mx-auto md:mx-0 leading-relaxed">
                Have any questions or need assistance? Our expert support team
                is available 24/7 to guide you through your journey. Don’t
                hesitate to reach out — we're always ready to help.
              </p>

              <button
                onClick={() => router.push("/contact")}
                className="bg-[#19125e] hover:bg-[#2a1fa0] text-white px-10 py-4 rounded-3xl font-semibold shadow-lg transition transform hover:scale-105 cursor-pointer"
              >
                Contact us
              </button>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
