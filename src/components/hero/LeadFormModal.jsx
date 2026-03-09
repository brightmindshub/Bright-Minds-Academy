"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, CheckCircle } from "lucide-react";

export default function LeadFormModal({ open, onClose, courses }) {
  const apiUrl = process.env.NEXT_PUBLIC_LEAD_FORM_API;
  const [form, setForm] = useState({
    name: "",
    phone: "",
    email: "",
    course: "",
    query: "",
  });

  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const validate = () => {
    const newErrors = {};

    if (!form.name.trim()) {
      newErrors.name = "Name is required";
    } else if (!/^[A-Za-z\s]{2,}$/.test(form.name)) {
      newErrors.name = "Enter a valid name";
    }

    if (!form.phone) {
      newErrors.phone = "Phone number is required";
    } else if (!/^[6-9]\d{9}$/.test(form.phone)) {
      newErrors.phone = "Enter a valid 10 digit mobile number";
    }

    if (!form.email) {
      newErrors.email = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
      newErrors.email = "Enter a valid email";
    }

    if (!form.course) {
      newErrors.course = "Please select a course";
    }

    return newErrors;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const validationErrors = validate();
    setErrors(validationErrors);

    if (Object.keys(validationErrors).length === 0) {
      try {
        setLoading(true);

        const res = await fetch("/api/lead",
          {
            method: "POST",
            body: JSON.stringify(form),
          }
        );

        const data = await res.json();

        if (data.result === "success") {
          setSuccess(true);

          setForm({
            name: "",
            phone: "",
            email: "",
            course: "",
            query: "",
          });
        }
      } catch (error) {
        alert("Submission failed. Try again.");
      } finally {
        setLoading(false);
      }
    }
  };

  /* SUCCESS SCREEN */

  if (success) {
    return (
      <AnimatePresence>
        <motion.div
          className="fixed inset-0 z-[10000] bg-black/70 backdrop-blur-sm flex items-center justify-center p-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <motion.div
            initial={{ scale: 0.7, opacity: 0, y: 40 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            transition={{ duration: 0.45, ease: "easeOut" }}
            className="bg-white rounded-2xl shadow-2xl max-w-md w-full p-8 text-center relative"
          >
            <button
              onClick={() => {
                setSuccess(false);
                onClose();
              }}
              className="absolute right-4 top-4 text-gray-500 hover:text-black"
            >
              <X size={20} />
            </button>

            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.2, type: "spring" }}
              className="flex justify-center mb-4"
            >
              <CheckCircle size={60} className="text-green-500" />
            </motion.div>

            <h2 className="text-2xl font-semibold text-[#19125e] mb-3">
              Submission Successful
            </h2>

            <p className="text-gray-600 mb-6">
              Thank you for reaching out to BrightMinds Academy. Our team will
              contact you shortly.
            </p>

            <button
              onClick={() => {
                setSuccess(false);
                onClose();
              }}
              className="bg-[#19125e] text-white px-6 py-2 rounded-lg hover:bg-[#f0c44c] hover:text-[#19125e] transition cursor-pointer"
            >
              Go to website
            </button>
          </motion.div>
        </motion.div>
      </AnimatePresence>
    );
  }

  return (
    <AnimatePresence>
      {open && (
        <>
          {/* Overlay */}

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.6 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black backdrop-blur-sm z-40"
            onClick={onClose}
          />

          {/* Modal */}

          <motion.div
            initial={{ scale: 0.8, opacity: 0, y: 40 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.8, opacity: 0 }}
            transition={{ duration: 0.35 }}
            className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-50 w-95 md:w-full max-w-lg bg-white rounded-2xl shadow-2xl p-6 border border-[#19125e]"
          >
            {/* Header */}

            <div className="flex items-center justify-between mb-6">
              <h2 className="text-xl font-semibold text-[#19125e]">
                Please share your details
              </h2>

              <button onClick={onClose}>
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
                  type="tel"
                  name="phone"
                  placeholder="Phone Number"
                  value={form.phone}
                  maxLength={10}
                  onChange={(e) => {
                    const value = e.target.value.replace(/\D/g, "");
                    setForm({ ...form, phone: value });
                  }}
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

              <textarea
                name="query"
                placeholder="Your Query"
                value={form.query}
                onChange={handleChange}
                rows={3}
                className="w-full border border-gray-300 px-4 py-2 rounded-lg focus:outline-none focus:border-[#19125e]"
              />


              <button
                type="submit"
                disabled={loading}
                className="bg-[#19125e] text-white px-6 py-3 rounded-lg hover:bg-[#f0c44c] hover:text-[#19125e] transition flex items-center justify-center gap-3 cursor-pointer"
              >
                {loading ? (
                  <div className="flex items-center gap-3">
                    <span className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></span>
                  </div>
                ) : (
                  "Submit"
                )}
              </button>
            </form>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}