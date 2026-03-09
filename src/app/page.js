import AboutSection from "@/components/about/AboutSection";
import BlogsSection from "@/components/blogs/BlogSection";
import CoursesSection from "@/components/courses/CoursesSection";
import FaqSection from "@/components/faq/FaqSection";
import HeroSection from "@/components/hero/HeroSection";
import TestimonialsSection from "@/components/testimonials/TestimonialsSection";
import WhyChooseSection from "@/components/whyChoose/WhyChooseSection";

export default function Home() {
  return (
    <>
        <HeroSection/>
        <CoursesSection/>
        <AboutSection/>
        <WhyChooseSection/>
        <TestimonialsSection/>
        <FaqSection/>
        <BlogsSection/>
    </>
  );
}
