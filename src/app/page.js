import AboutSection from "@/components/about/AboutSection";
import CoursesSection from "@/components/courses/CoursesSection";
import HeroSection from "@/components/hero/HeroSection";
import TestimonialsSection from "@/components/testimonials/TestimonialsSection";
import WhyChooseSection from "@/components/whyChoose/WhyChooseSection";

export default function Home() {
  return (
    <>
        <HeroSection/>
        <AboutSection/>
        <WhyChooseSection/>
        <CoursesSection/>
        <TestimonialsSection/>
    </>
  );
}
