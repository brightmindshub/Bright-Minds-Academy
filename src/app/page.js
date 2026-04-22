export const dynamic = "force-dynamic";

import AboutSection from "@/components/about/AboutSection";
import BlogsSection from "@/components/blogs/BlogSection";
import CoursesSection from "@/components/courses/CoursesSection";
import FaqSection from "@/components/faq/FaqSection";
import HeroSection from "@/components/hero/HeroSection";
import StudentResults from "@/components/results/StudentResults";
import TestimonialsSection from "@/components/testimonials/TestimonialsSection";
import WhyChooseSection from "@/components/whyChoose/WhyChooseSection";

const courses = [
  {
    title: "English & Language Tests",
    courses: [
      "IELTS (Academic & General)",
      "PTE (Academic & Core)",
      "French",
      "German",
      "Professional Nanny Course",
      "Duolingo",
      "CELPIP",
      "OET",
      "Spoken English (Beginner - Advanced)",
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

const faqs = [
  {
    question: "Which exams do you prepare students for?",
    answer:
      "We provide expert coaching for IELTS, PTE, French, German and other English proficiency exams required for studying or migrating abroad.",
  },
  {
    question: "Do you offer online classes?",
    answer:
      "Yes, BrightMinds offers both online and offline classes so students can learn in the most convenient way.",
  },
  {
    question: "How long does the preparation course take?",
    answer:
      "Most students complete their preparation within 4–8 weeks depending on their current level and target score.",
  },
  {
    question: "Do you provide study material?",
    answer:
      "Yes, we provide comprehensive study material including practice tests, mock exams, and expert guidance.",
  },
  {
    question: "Can I take a demo class before enrolling?",
    answer:
      "Absolutely! We offer free demo classes so you can experience our teaching methodology before joining.",
  },
];

export default function Home() {
  return (
    <>
        <HeroSection/>
        <CoursesSection/>
        <AboutSection/>
        <WhyChooseSection/>
        <StudentResults/>
        <TestimonialsSection/>
        <FaqSection faqs={faqs} courses={courses}/>
        <BlogsSection/>
    </>
  );
}
