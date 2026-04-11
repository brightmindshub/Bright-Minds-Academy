"use client";

import Image from "next/image";
import Link from "next/link";
import {
  Mail,
  Phone,
  MapPin,
  Facebook,
  Instagram,
  Linkedin,
  Twitter,
} from "lucide-react";
import { courseCategories } from "@/data/courses";
import { useRouter } from "next/navigation";

export default function Footer() {
  const router = useRouter();

  return (
    <footer className="bg-[#19125e] text-white relative pt-16 pb-8 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 grid grid-cols-1 md:grid-cols-4 gap-12">
        <div className="flex flex-col gap-4">
          <Link href="/">
            <Image
              src="/BrightMindsAcademyLogo.png"
              alt="BrightMinds Academy"
              width={240}
              height={60}
              className="object-contain"
            />
          </Link>
          <p className="text-gray-300">
            BrightMinds Academy helps students achieve top scores in IELTS, PTE,
            CELPIP, Duolingo & competitive exams with expert guidance.
          </p>

          <div className="flex gap-8 mt-2">
            <Link href="#" className="hover:text-[#f0c44c] transition">
              <Facebook size={20} />
            </Link>
            <Link href="#" className="hover:text-[#f0c44c] transition">
              <Instagram size={20} />
            </Link>
            <Link href="#" className="hover:text-[#f0c44c] transition">
              <Linkedin size={20} />
            </Link>
            <Link href="#" className="hover:text-[#f0c44c] transition">
              <Twitter size={20} />
            </Link>
          </div>
        </div>

        <div>
          <h4 className="text-xl font-semibold mb-4">Quick Links</h4>
          <ul className="flex flex-col gap-2 text-gray-300">
            <li>
              <Link href="/about" className="hover:text-[#f0c44c] transition">
                About Us
              </Link>
            </li>
            <li>
              <Link href="/reviews" className="hover:text-[#f0c44c] transition">
                Student Reviews
              </Link>
            </li>
            <li>
              <Link href="/blogs" className="hover:text-[#f0c44c] transition">
                Blogs
              </Link>
            </li>
            <li>
              <Link
                href="/faq-section"
                className="hover:text-[#f0c44c] transition"
              >
                FAQs
              </Link>
            </li>
            <li>
              <Link href="/contact" className="hover:text-[#f0c44c] transition">
                Contact us
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <h4 className="text-xl font-semibold mb-4">Our Courses</h4>
          {courseCategories.map((cat) => (
            <div key={cat.title} className="mb-4">
              <h5 className="text-md font-semibold text-[#f0c44c] mb-2">
                {cat.title}
              </h5>
              <ul className="flex flex-col gap-1 text-gray-300">
                {cat.courses.map((c) => {
                  const isLanguageCategory = cat.page === "language-tests";
                  const href = isLanguageCategory
                    ? `/${c.slug}`
                    : `/${cat.page}?course=${c.slug}`;

                  return (
                    <li key={c.slug}>
                      <button
                        onClick={() => {
                          router.push(href);
                          setTimeout(() => {
                            window.scrollTo(0, 0);
                          }, 50);
                        }}
                        className="hover:text-[#f0c44c] transition text-sm text-left cursor-pointer"
                      >
                        {c.name}
                      </button>
                    </li>
                  );
                })}
              </ul>
            </div>
          ))}
        </div>

        <div className="flex flex-col gap-4">
          <h4 className="text-xl font-semibold mb-4">Contact Info</h4>
          <ul className="flex flex-col gap-4 text-gray-300">
            <li>
              <div className="flex items-center gap-2 mb-2">
                <Phone size={18} className="text-[#f0c44c]" />
                <a href="tel:+911149841622" className="hover:text-[#f0c44c] transition">
                  +91 1149841622
                </a>
              </div>
              <div className="flex flex-col gap-2">
                <a
                  href="https://wa.me/919217669989"
                  className="flex items-center gap-2 hover:text-[#f0c44c] transition"
                >
                  <Image 
                    src="/assets/whatsappIcon.svg" 
                    alt="WhatsApp" 
                    width={18} 
                    height={18} 
                  />
                  +91 9217669989
                </a>
                <a
                  href="https://wa.me/918826380767"
                  className="flex items-center gap-2 hover:text-[#f0c44c] transition"
                >
                  <Image 
                    src="/assets/whatsappIcon.svg" 
                    alt="WhatsApp" 
                    width={18} 
                    height={18} 
                  />
                  +91 8826380767
                </a>
              </div>
            </li>
            <li className="flex items-center gap-2">
              <Mail size={18} className="text-[#f0c44c]" />
              <a href="mailto:info@brightmindshub.in" className="hover:text-[#f0c44c] transition">
                info@brightmindshub.in
              </a>
            </li>
            <li className="flex items-start gap-2">
              <MapPin size={18} className="text-[#f0c44c] shrink-0 mt-1" />
              <span className="text-sm">
                RZ- 58-61, Vashisht Park, Pankha Road, Near Sagarpur bus
                stand, New Delhi - 110046
              </span>
            </li>
          </ul>

          <div className="mt-4">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3502.6864231732075!2d77.0974953793457!3d28.60918260000001!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d1bf150b9df15%3A0xfc2fd93fcf89179a!2sBrightminds%20Academy%20(BMA)!5e0!3m2!1sen!2sin!4v1773056348422!5m2!1sen!2sin"
              className="w-full h-46 rounded-xl border-0"
              allowFullScreen=""
              loading="lazy"
            ></iframe>
          </div>
        </div>
      </div>

      <div className="mt-12 border-t border-white/20 pt-6 text-center text-gray-400 text-sm">
        © {new Date().getFullYear()} BrightMinds Academy. All rights reserved.
      </div>

      <div className="absolute -z-10 top-0 left-0 w-64 h-64 bg-[#f0c44c]/10 rounded-full blur-3xl"></div>
      <div className="absolute -z-10 bottom-0 right-0 w-64 h-64 bg-[#19125e]/20 rounded-full blur-3xl"></div>
    </footer>
  );
}