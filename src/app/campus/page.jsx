import CampusClient from '@/components/pages/CampusClient'
import React from 'react'

export const metadata = {
  title: "Our Campus | BrightMinds",
  description: "Explore the BrightMinds campus and experience a positive learning environment with modern classrooms, expert trainers, and student-focused facilities.",
  alternates: {
    canonical: "https://brightmindshub.in/campus"
  },
};

const CampusPage = () => {
  return (
    <CampusClient/>
  )
}

export default CampusPage
