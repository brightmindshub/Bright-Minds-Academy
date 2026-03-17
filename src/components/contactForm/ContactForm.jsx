"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { CheckCircle } from "lucide-react";

export default function ContactForm({ courses, defaultCourse  }) {

  const [form, setForm] = useState({
    name: "",
    phone: "",
    email: "",
    course: "",
    query: "",
  });

  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  useEffect(() => {
  if (defaultCourse) {
    setForm((prev) => ({ ...prev, course: defaultCourse }));
  }
}, [defaultCourse]);

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
      newErrors.phone = "Enter valid 10 digit mobile number";
    }

    if (!form.email) {
      newErrors.email = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
      newErrors.email = "Enter valid email";
    }

    if (!form.course) {
      newErrors.course = "Please select course";
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

        const res = await fetch("/api/lead", {
          method: "POST",
          body: JSON.stringify(form),
        });

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

      } catch (err) {
        alert("Submission failed");
      } finally {
        setLoading(false);
      }

    }
  };

  if (success) {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        className="bg-white rounded-2xl shadow-xl p-10 text-center"
      >
        <CheckCircle className="mx-auto text-green-500 mb-4" size={60} />

        <h3 className="text-2xl font-semibold text-[#19125e] mb-2">
          Details Submitted Successfully
        </h3>

        <p className="text-gray-600 mb-6">
          Thank you for contacting BrightMinds Academy.  
          Our team will contact you shortly.
        </p>

        <button
          onClick={() => setSuccess(false)}
          className="bg-[#19125e] text-white px-6 py-2 rounded-lg hover:bg-[#f0c44c] hover:text-[#19125e] transition"
        >
          Submit another response
        </button>
      </motion.div>
    );
  }

  return (
    <motion.form
      onSubmit={handleSubmit}
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="bg-white rounded-2xl shadow-xl py-4 px-4 border border-gray-100 flex flex-col gap-4"
    >

      <input
        type="text"
        name="name"
        placeholder="Full Name"
        value={form.name}
        onChange={handleChange}
        className="border border-gray-300 px-4 py-3 rounded-lg focus:outline-none focus:border-[#19125e]"
      />
      {errors.name && <p className="text-red-500 text-sm">{errors.name}</p>}

      <input
        type="tel"
        name="phone"
        placeholder="Phone Number"
        maxLength={10}
        value={form.phone}
        onChange={(e) => {
          const value = e.target.value.replace(/\D/g, "");
          setForm({ ...form, phone: value });
        }}
        className="border border-gray-300 px-4 py-3 rounded-lg focus:outline-none focus:border-[#19125e]"
      />
      {errors.phone && <p className="text-red-500 text-sm">{errors.phone}</p>}

      <input
        type="email"
        name="email"
        placeholder="Email Address"
        value={form.email}
        onChange={handleChange}
        className="border border-gray-300 px-4 py-3 rounded-lg focus:outline-none focus:border-[#19125e]"
      />
      {errors.email && <p className="text-red-500 text-sm">{errors.email}</p>}

      <select
        name="course"
        value={form.course}
        onChange={handleChange}
        className="border border-gray-300 px-4 py-3 rounded-lg focus:outline-none focus:border-[#19125e]"
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
      {errors.course && <p className="text-red-500 text-sm">{errors.course}</p>}

      <textarea
        name="query"
        rows={4}
        placeholder="Your Query"
        value={form.query}
        onChange={handleChange}
        className="border border-gray-300 px-4 py-3 rounded-lg focus:outline-none focus:border-[#19125e]"
      />

      <button
        type="submit"
        disabled={loading}
        className="bg-[#19125e] text-white py-3 rounded-lg hover:bg-[#f0c44c] hover:text-[#19125e] transition flex justify-center items-center"
      >
        {loading ? (
          <span className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></span>
        ) : (
          "Submit Enquiry"
        )}
      </button>

    </motion.form>
  );
}