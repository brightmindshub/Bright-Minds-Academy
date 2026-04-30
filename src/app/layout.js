import { Poppins } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/navbar/Navbar";
import WhatsAppChat from "@/components/whatsappChat/WhatsAppChat";
import Footer from "@/components/footer/Footer";
import LoaderWrapper from "@/components/loader/LoaderWrapper";

const isDev = process.env.SITE_TYPE === "dev";

const poppins = Poppins({
  subsets: ["latin"],
  variable: "--font-poppins",
  weight: ["400", "600", "700"],
  style: ["normal", "italic"],
});

export const metadata = {
  title: "BrightMinds Academy",
  description: "Excellence in Language & Academics",
  robots: isDev
    ? {
        index: false,
        follow: false,
      }
    : {
        index: true,
        follow: true,
      },
};

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

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={poppins.variable}>
      <body className="antialiased font-sans">
        <LoaderWrapper>
          <WhatsAppChat courses={courses} />
          <Navbar />
          {children}
          <Footer />
        </LoaderWrapper>
      </body>
    </html>
  );
}