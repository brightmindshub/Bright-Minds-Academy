"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, CheckCircle, Sparkles } from "lucide-react";

export default function GeneralLeadModal() {
  const [open, setOpen] = useState(false);
  const [form, setForm] = useState({ name: "", phone: "", email: "" });
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [errors, setErrors] = useState({});

  useEffect(() => {
    const timer = setTimeout(() => {
      if (!sessionStorage.getItem("generalLeadSubmitted")) {
        setOpen(true);
      }
    }, 3000);
    return () => clearTimeout(timer);
  }, []);

  const validate = () => {
    const newErrors = {};
    if (!form.name.trim()) newErrors.name = "Name is required";
    if (!/^[6-9]\d{9}$/.test(form.phone)) newErrors.phone = "Enter valid 10-digit number";
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) newErrors.email = "Invalid email";
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
          body: JSON.stringify({ ...form, course: "General Inquiry", query: "General Popup Lead" }),
        });
        const data = await res.json();
        if (data.result === "success") {
          setSuccess(true);
          sessionStorage.setItem("generalLeadSubmitted", "true");
        }
      } catch (error) {
        alert("Something went wrong. Please try again.");
      } finally {
        setLoading(false);
      }
    }
  };

  return (
    <AnimatePresence>
      {open && (
        <div className="fixed inset-0 z-[10001] flex items-center justify-center p-4">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="absolute inset-0 bg-[#19125e]/40 backdrop-blur-md"
            onClick={() => setOpen(false)}
          />

          <motion.div
            initial={{ scale: 0.9, opacity: 0, y: 20 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.9, opacity: 0, y: 20 }}
            className="relative w-full max-w-md bg-white rounded-[2.5rem] shadow-2xl overflow-hidden p-8"
          >
            <button onClick={() => setOpen(false)} className="absolute right-6 top-6 text-gray-400 hover:text-gray-600">
              <X size={24} />
            </button>

            {!success ? (
              <>
                <div className="mb-8 text-center">
                  <div className="inline-flex items-center justify-center w-12 h-12 bg-[#f0c44c]/20 rounded-2xl text-[#f0c44c] mb-4">
                    <Sparkles size={24} />
                  </div>
                  <h2 className="text-3xl font-bold text-[#19125e]">Get in Touch</h2>
                  <p className="text-gray-500 mt-2">Unlock your future with BrightMinds Academy</p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <input
                      type="text"
                      placeholder="Full Name"
                      value={form.name}
                      onChange={(e) => setForm({ ...form, name: e.target.value })}
                      className="w-full bg-gray-50 border border-gray-100 px-5 py-4 rounded-2xl focus:ring-2 focus:ring-[#19125e]/10 outline-none transition"
                    />
                    {errors.name && <p className="text-red-500 text-xs mt-1 ml-2">{errors.name}</p>}
                  </div>

                  <div>
                    <input
                      type="tel"
                      placeholder="Phone Number"
                      maxLength={10}
                      value={form.phone}
                      onChange={(e) => setForm({ ...form, phone: e.target.value.replace(/\D/g, "") })}
                      className="w-full bg-gray-50 border border-gray-100 px-5 py-4 rounded-2xl focus:ring-2 focus:ring-[#19125e]/10 outline-none transition"
                    />
                    {errors.phone && <p className="text-red-500 text-xs mt-1 ml-2">{errors.phone}</p>}
                  </div>

                  <div>
                    <input
                      type="email"
                      placeholder="Email Address"
                      value={form.email}
                      onChange={(e) => setForm({ ...form, email: e.target.value })}
                      className="w-full bg-gray-50 border border-gray-100 px-5 py-4 rounded-2xl focus:ring-2 focus:ring-[#19125e]/10 outline-none transition"
                    />
                    {errors.email && <p className="text-red-500 text-xs mt-1 ml-2">{errors.email}</p>}
                  </div>

                  <button
                    disabled={loading}
                    className="w-full bg-[#19125e] text-white py-4 rounded-2xl font-bold hover:bg-[#f0c44c] hover:text-[#19125e] transition-all duration-300 shadow-lg shadow-[#19125e]/20 flex items-center justify-center gap-2"
                  >
                    {loading ? <span className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" /> : "Contact Me"}
                  </button>
                </form>
              </>
            ) : (
              <div className="py-10 text-center">
                <motion.div initial={{ scale: 0 }} animate={{ scale: 1 }} className="flex justify-center mb-6">
                  <CheckCircle size={80} className="text-[#22c55e]" />
                </motion.div>
                <h3 className="text-2xl font-bold text-[#19125e] mb-2">Thank You!</h3>
                <p className="text-gray-500 mb-8">We have received your details. Our experts will call you soon.</p>
                <button
                  onClick={() => setOpen(false)}
                  className="bg-[#19125e] text-white px-8 py-3 rounded-xl font-bold"
                >
                  Close
                </button>
              </div>
            )}
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}