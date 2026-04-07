"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X, Phone, Mail, ChevronDown } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { courseCategories } from "@/data/courses";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [courseOpen, setCourseOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [mobileCoursesOpen, setMobileCoursesOpen] = useState(false);
  const [aboutOpen, setAboutOpen] = useState(false);
  const [mobileAboutOpen, setMobileAboutOpen] = useState(false);
  const router = useRouter();

  const getCourseLink = (category, course) => {
    if (category.page === "language-tests") {
      return `/${course.slug}`;
    }
    return `/${category.page}?course=${course.slug}`;
  };

  const handleScrollToSection = (id) => {
    const element = document.getElementById(id);

    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }

    setMenuOpen(false); // close mobile menu
  };

  // navbar background change on scroll
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className="fixed top-0 w-full z-50">
      {/* CONTACT STRIP */}
      <div className="bg-[#19125e] text-white text-sm">
        <div className="max-w-7xl mx-auto px-6 flex justify-center md:justify-end items-center gap-8 h-10">
          <div className="flex gap-6">
            <div className="flex items-center gap-2">
              <Phone size={16} className="text-[#f0c44c]" />
              <span className="text-xs md:text-sm">+91 9217669989</span>
            </div>

            <div className="flex items-center gap-2">
              <Mail size={16} className="text-[#f0c44c]" />
              <span className="text-xs md:text-sm">
                brightmindsacademy413@gmail.com
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* MAIN NAVBAR */}
      <motion.nav
        initial={{ y: -40, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        className={`transition-all duration-300 ${
          scrolled ? "bg-white shadow-lg" : "bg-white"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex items-center justify-between h-20">
            {/* LOGO */}
            <Link href={"/"}>
              <motion.div layoutId="brand-logo">
                <Image
                  src="/brightMindsAcademy-logo.jpeg"
                  alt="logo"
                  width={230}
                  height={80}
                />
              </motion.div>
            </Link>

            {/* DESKTOP MENU */}
            <div className="hidden lg:flex items-center gap-8">
              {/* ABOUT MEGA MENU */}

              <div
                className="relative"
                onMouseEnter={() => setAboutOpen(true)}
                onMouseLeave={() => setAboutOpen(false)}
              >
                <button className="flex items-center gap-1 text-[#19125e] font-medium relative group">
                  About Us
                  <ChevronDown size={16} />
                  <span className="absolute left-0 -bottom-1 h-[2px] w-0 bg-[#f0c44c] transition-all group-hover:w-full"></span>
                </button>

                <AnimatePresence>
                  {aboutOpen && (
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 10 }}
                      exit={{ opacity: 0, y: 20 }}
                      transition={{ duration: 0.3 }}
                      className="absolute left-1/2 -translate-x-1/2 top-6 bg-white shadow-xl rounded-xl p-6 w-[250px]"
                    >
                      <div className="flex flex-col gap-3">
                        <button
                          onClick={() => router.push("/about")}
                          className="text-left text-gray-600 hover:text-[#f0c44c] text-md cursor-pointer"
                        >
                          BrightMinds Academy
                        </button>

                        {/* <button
                          onClick={() => router.push("/faculty")}
                          className="text-left text-gray-600 hover:text-[#f0c44c] text-md cursor-pointer"
                        >
                          Our Faculty
                        </button> */}

                        <button
                          onClick={() => router.push("/campus")}
                          className="text-left text-gray-600 hover:text-[#f0c44c] text-md cursor-pointer"
                        >
                          Our Campus
                        </button>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {/* COURSES MEGA MENU */}
              <div
                className="relative"
                onMouseEnter={() => setCourseOpen(true)}
                onMouseLeave={() => setCourseOpen(false)}
              >
                <button className="flex items-center gap-1 text-[#19125e] font-medium relative group">
                  Courses
                  <ChevronDown size={16} />
                  <span className="absolute left-0 -bottom-1 h-[2px] w-0 bg-[#f0c44c] transition-all group-hover:w-full"></span>
                </button>

                <AnimatePresence>
                  {courseOpen && (
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 10 }}
                      exit={{ opacity: 0, y: 20 }}
                      transition={{ duration: 0.3 }}
                      className="absolute left-1/2 -translate-x-1/2 top-6 bg-white shadow-2xl rounded-xl p-8 w-200"
                    >
                      <div className="grid grid-cols-2 gap-10">
                        {courseCategories.map((category) => (
                          <div key={category.title}>
                            <h3 className="text-[#19125e] font-semibold mb-3 border-b pb-2">
                              {category.title}
                            </h3>

                            <div className="flex flex-col gap-2">
                              {category.courses.map((course) => (
                                <button
                                  key={course.slug}
                                  onClick={() => {
                                    const href = getCourseLink(
                                      category,
                                      course,
                                    );

                                    router.push(href);

                                    // force scroll top
                                    requestAnimationFrame(() => {
                                      window.scrollTo(0, 0);
                                    });

                                    setCourseOpen(false);
                                  }}
                                  className="text-left text-gray-600 hover:text-[#f0c44c] text-sm cursor-pointer"
                                >
                                  {course.name}
                                </button>
                              ))}
                            </div>
                          </div>
                        ))}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              <button
                onClick={() => handleScrollToSection("results")}
                className="relative group text-[#19125e] cursor-pointer"
              >
                Results
                <span className="absolute left-0 -bottom-1 h-[2px] w-0 bg-[#f0c44c] transition-all group-hover:w-full"></span>
              </button>

              <button
                onClick={() => handleScrollToSection("blogs")}
                className="relative group text-[#19125e] cursor-pointer"
              >
                Blogs
                <span className="absolute left-0 -bottom-1 h-[2px] w-0 bg-[#f0c44c] transition-all group-hover:w-full"></span>
              </button>

              <button
                onClick={() => handleScrollToSection("faq-section")}
                className="relative group text-[#19125e] cursor-pointer"
              >
                FAQs
                <span className="absolute left-0 -bottom-1 h-[2px] w-0 bg-[#f0c44c] transition-all group-hover:w-full"></span>
              </button>

              <button
                onClick={() => {
                  router.push("/contact");
                }}
                className="bg-[#19125e] text-white px-5 py-2 rounded-lg hover:bg-[#f0c44c] hover:text-[#19125e] transition"
              >
                Contact us
              </button>
            </div>

            {/* MOBILE MENU BUTTON */}
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="lg:hidden text-[#19125e]"
            >
              {menuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </motion.nav>
      <AnimatePresence>
        {menuOpen && (
          <>
            {/* Overlay */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.4 }}
              exit={{ opacity: 0 }}
              onClick={() => setMenuOpen(false)}
              className="fixed inset-0 bg-black z-40"
            />

            {/* Drawer */}
            <motion.div
              initial={{ x: 320 }}
              animate={{ x: 0 }}
              exit={{ x: 320 }}
              transition={{ duration: 0.3 }}
              className="fixed top-0 right-0 h-full w-75 bg-white z-50 shadow-xl p-6 overflow-y-auto"
            >
              {/* Drawer Header */}
              <div className="flex items-center justify-end mb-6">
                <button onClick={() => setMenuOpen(false)}>
                  <X size={26} />
                </button>
              </div>

              {/* Navigation Links */}
              <div className="flex flex-col gap-5">
                {/* MOBILE ABOUT MENU */}

                <div>
                  <button
                    onClick={() => setMobileAboutOpen(!mobileAboutOpen)}
                    className="flex items-center justify-between w-full font-semibold text-[#19125e]"
                  >
                    About Us
                    <ChevronDown
                      size={18}
                      className={`transition-transform ${
                        mobileAboutOpen ? "rotate-180" : ""
                      }`}
                    />
                  </button>

                  <AnimatePresence>
                    {mobileAboutOpen && (
                      <motion.div
                        initial={{ height: 0 }}
                        animate={{ height: "auto" }}
                        exit={{ height: 0 }}
                        className="overflow-hidden mt-3 flex flex-col gap-2 pl-2"
                      >
                        <button
                          onClick={() => {
                            setMenuOpen(false);
                            router.push("/about");
                          }}
                          className="text-left text-gray-600 text-sm"
                        >
                          BrightMinds Academy
                        </button>

                        {/* <button
                          onClick={() => {
                            setMenuOpen(false);
                            router.push("/faculty");
                          }}
                          className="text-left text-gray-600 text-sm"
                        >
                          Our Faculty
                        </button> */}

                        <button
                          onClick={() => {
                            setMenuOpen(false);
                            router.push("/campus");
                          }}
                          className="text-left text-gray-600 text-sm"
                        >
                          Our Campus
                        </button>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>

                {/* Courses Section */}
                <div>
                  <button
                    onClick={() => setMobileCoursesOpen(!mobileCoursesOpen)}
                    className="flex items-center justify-between w-full font-semibold text-[#19125e]"
                  >
                    Courses
                    <ChevronDown
                      size={18}
                      className={`transition-transform ${
                        mobileCoursesOpen ? "rotate-180" : ""
                      }`}
                    />
                  </button>

                  <AnimatePresence>
                    {mobileCoursesOpen && (
                      <motion.div
                        initial={{ height: 0 }}
                        animate={{ height: "auto" }}
                        exit={{ height: 0 }}
                        className="overflow-hidden mt-3 flex flex-col gap-4"
                      >
                        {courseCategories.map((category) => (
                          <div key={category.title}>
                            <p className="font-semibold text-[#19125e] text-sm">
                              {category.title}
                            </p>

                            <div className="flex flex-col gap-2 pl-3 mt-1">
                              {category.courses.map((course) => (
                                <button
                                  key={course.slug}
                                  onClick={() => {
                                    const href = getCourseLink(
                                      category,
                                      course,
                                    );

                                    setMenuOpen(false);
                                    router.push(href);

                                    requestAnimationFrame(() => {
                                      window.scrollTo(0, 0);
                                    });
                                  }}
                                  className="text-left text-gray-600 text-sm"
                                >
                                  {course.name}
                                </button>
                              ))}
                            </div>
                          </div>
                        ))}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>

                <button
                  onClick={() => handleScrollToSection("results")}
                  className="text-left text-[#19125e]"
                >
                  Results
                </button>

                <button
                  onClick={() => handleScrollToSection("blogs")}
                  className="text-left text-[#19125e]"
                >
                  Blogs
                </button>

                <button
                  onClick={() => handleScrollToSection("faq-section")}
                  className="text-left text-[#19125e]"
                >
                  FAQs
                </button>

                <button
                  onClick={() => {
                    setMenuOpen(false);
                    router.push("/contact");
                  }}
                  className="bg-[#19125e] text-white text-center py-2 rounded-lg mt-2"
                >
                  Contact Us
                </button>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </header>
  );
}
