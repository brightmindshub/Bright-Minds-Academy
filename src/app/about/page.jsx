import AboutPageClient from '@/components/pages/AboutPageClient'
import React from 'react'

export const metadata = {
  title: "About us | BrightMinds",
  description: "Learn more about BrightMinds, a trusted institute offering language training, exam preparation, and skill-based courses with experts and practical learning.",
  alternates: {
    canonical: "https://brightmindshub.in/about"
  },
};

const AboutPage = () => {
  return (
    <AboutPageClient/>
  )
}

export default AboutPage
