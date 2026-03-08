"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";

export default function LeadFormModal({ open, onClose, courses }) {
  const [form, setForm] = useState({
    name: "",
    phone: "",
    email: "",
    course: "",
    query: "",
  });

  const [errors, setErrors] = useState({});

  // handle input change
  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  // simple validation
  const validate = () => {
    const newErrors = {};
    if (!form.name) newErrors.name = "Name is required";
    if (!form.phone) newErrors.phone = "Phone is required";
    else if (!/^\d{10}$/.test(form.phone))
      newErrors.phone = "Phone must be 10 digits";
    if (!form.email) newErrors.email = "Email is required";
    else if (
      !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(form.email)
    )
      newErrors.email = "Invalid email address";
    if (!form.course) newErrors.course = "Select a course";
    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    setErrors(validationErrors);
    if (Object.keys(validationErrors).length === 0) {
      console.log("Form Submitted:", form);
      alert("Thank you! Your query has been submitted.");
      onClose();
      setForm({
        name: "",
        phone: "",
        email: "",
        course: "",
        query: "",
      });
    }
  };

  return (
    <AnimatePresence>
      {open && (
        <>
          {/* Overlay */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.5 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black z-40"
            onClick={onClose}
          />

          {/* Modal */}
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.8, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-50 w-full max-w-lg bg-white rounded-xl shadow-xl p-6 border border-[#19125e]"
          >
            {/* Header */}
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-xl font-semibold text-[#19125e]">
                Please share your details with us
              </h2>
              <button onClick={onClose} className="cursor-pointer">
                <X size={24} />
              </button>
            </div>

            {/* Form */}
            <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
              <div>
                <input
                  type="text"
                  name="name"
                  placeholder="Full Name"
                  value={form.name}
                  onChange={handleChange}
                  className="w-full border border-gray-300 px-4 py-2 rounded-lg focus:outline-none focus:border-[#19125e]"
                />
                {errors.name && (
                  <p className="text-red-500 text-sm mt-1">{errors.name}</p>
                )}
              </div>

              <div>
                <input
                  type="text"
                  name="phone"
                  placeholder="Phone Number"
                  value={form.phone}
                  onChange={handleChange}
                  className="w-full border border-gray-300 px-4 py-2 rounded-lg focus:outline-none focus:border-[#19125e]"
                />
                {errors.phone && (
                  <p className="text-red-500 text-sm mt-1">{errors.phone}</p>
                )}
              </div>

              <div>
                <input
                  type="email"
                  name="email"
                  placeholder="Email"
                  value={form.email}
                  onChange={handleChange}
                  className="w-full border border-gray-300 px-4 py-2 rounded-lg focus:outline-none focus:border-[#19125e]"
                />
                {errors.email && (
                  <p className="text-red-500 text-sm mt-1">{errors.email}</p>
                )}
              </div>

              <div>
                <select
  name="course"
  value={form.course}
  onChange={handleChange}
  className="w-full border border-gray-300 px-4 py-2 rounded-lg focus:outline-none focus:border-[#19125e]"
>
  <option value="">Select Course Interested</option>
  {courses.map((cat) =>
    cat.courses.map((c, idx) => (
      <option key={`${cat.title}-${idx}`} value={c}>
        {c}
      </option>
    ))
  )}
</select>
                {errors.course && (
                  <p className="text-red-500 text-sm mt-1">{errors.course}</p>
                )}
              </div>

              <div>
                <textarea
                  name="query"
                  placeholder="Your Query"
                  value={form.query}
                  onChange={handleChange}
                  rows={3}
                  className="w-full border border-gray-300 px-4 py-2 rounded-lg focus:outline-none focus:border-[#19125e]"
                />
              </div>

              <button
                type="submit"
                className="bg-[#19125e] text-white px-6 py-3 rounded-lg hover:bg-[#f0c44c] hover:text-[#19125e] transition"
              >
                Submit
              </button>
            </form>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}