import ContactClient from '@/components/pages/ContactClient'
import React from 'react'

export const metadata = {
  title: "Contact us | BrightMinds",
  description: "Get in touch with BrightMinds for course details, admissions, and expert guidance. Contact our team for language training and exam preparation support.",
  alternates: {
    canonical: "https://brightmindshub.in/contact"
  },
};

const ContactPage = () => {
  return (
    <ContactClient/>
  )
}

export default ContactPage
