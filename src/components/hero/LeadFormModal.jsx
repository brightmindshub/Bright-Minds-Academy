"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  X,
  CheckCircle,
  Sparkles,
  User,
  Phone,
  Mail,
  GraduationCap,
  MessageSquare,
} from "lucide-react";

const InputField = ({ icon: Icon, ...props }) => (
  <div className="relative group">
    <div className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 group-focus-within:text-[#19125e] transition-colors pointer-events-none">
      <Icon size={18} />
    </div>
    <input
      {...props}
      className="w-full bg-gray-50/50 border border-gray-200 pl-11 pr-4 py-3 rounded-2xl focus:outline-none focus:ring-2 focus:ring-[#19125e]/10 focus:border-[#19125e] transition-all placeholder:text-gray-400 text-[#19125e]"
    />
  </div>
);

export default function LeadFormModal({ open, onClose, courses }) {
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
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) setErrors((prev) => ({ ...prev, [name]: "" }));
  };

  const validate = () => {
    const newErrors = {};
    if (!form.name.trim()) newErrors.name = "Name is required";
    if (!/^[6-9]\d{9}$/.test(form.phone))
      newErrors.phone = "Enter a valid 10 digit number";
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email))
      newErrors.email = "Enter a valid email";
    if (!form.course) newErrors.course = "Please select a course";
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
          setForm({ name: "", phone: "", email: "", course: "", query: "" });
        }
      } catch (error) {
        alert("Submission failed. Try again.");
      } finally {
        setLoading(false);
      }
    }
  };

  return (
    <AnimatePresence>
      {open && (
        <div className="fixed inset-0 z-[10000] flex items-center justify-center p-4">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-[#19125e]/30 backdrop-blur-md"
          />

          <motion.div
            initial={{ scale: 0.9, opacity: 0, y: 30 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.9, opacity: 0, y: 30 }}
            className="relative w-full max-w-2xl bg-white rounded-[2.5rem] shadow-2xl overflow-hidden flex flex-col md:flex-row min-h-[500px]"
          >
            {success ? (
              <div className="w-full p-12 text-center flex flex-col justify-center items-center">
                <CheckCircle size={60} className="text-green-500 mb-4" />
                <h2 className="text-3xl font-bold text-[#19125e] mb-2">
                  Success!
                </h2>
                <p className="text-gray-500 mb-8">
                  Thank you for reaching out to BrightMinds Academy. Our team
                  will contact you shortly.
                </p>
                <button
                  onClick={() => {
                    setSuccess(false);
                    onClose();
                  }}
                  className="bg-[#19125e] text-white px-8 py-3 rounded-xl font-bold"
                >
                  Close
                </button>
              </div>
            ) : (
              <>
                <div className="hidden md:flex w-1/3 bg-[#19125e] p-10 flex-col justify-between text-white">
                  <div>
                    <Sparkles className="text-[#f0c44c] mb-4" size={32} />
                    <h3 className="text-2xl font-bold">Start Your Career</h3>
                  </div>
                  <p className="text-sm opacity-60">
                    Join BrightMinds for expert guidance and small batches.
                  </p>
                </div>

                <div className="flex-1 p-8 md:p-10">
                  <div className="flex justify-between items-center mb-6">
                    <h2 className="text-2xl font-bold text-[#19125e]">
                      Provide your Details
                    </h2>
                    <button
                      onClick={onClose}
                      className="p-2 hover:bg-gray-100 rounded-full transition-colors"
                    >
                      <X size={20} className="text-gray-400" />
                    </button>
                  </div>

                  <form onSubmit={handleSubmit} className="space-y-4">
                    <InputField
                      icon={User}
                      name="name"
                      placeholder="Name"
                      value={form.name}
                      onChange={handleChange}
                    />
                    {errors.name && (
                      <p className="text-red-500 text-xs mt-1 ml-2">
                        {errors.name}
                      </p>
                    )}

                    <InputField
                      icon={Phone}
                      name="phone"
                      placeholder="Phone"
                      value={form.phone}
                      maxLength={10}
                      onChange={(e) =>
                        setForm((prev) => ({
                          ...prev,
                          phone: e.target.value.replace(/\D/g, ""),
                        }))
                      }
                    />
                    {errors.phone && (
                      <p className="text-red-500 text-xs mt-1 ml-2">
                        {errors.phone}
                      </p>
                    )}

                    <InputField
                      icon={Mail}
                      name="email"
                      placeholder="Email"
                      value={form.email}
                      onChange={handleChange}
                    />
                    {errors.email && (
                      <p className="text-red-500 text-xs mt-1 ml-2">
                        {errors.email}
                      </p>
                    )}

                    <div className="relative group">
                      <div className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none group-focus-within:text-[#19125e]">
                        <GraduationCap size={18} />
                      </div>
                      <select
                        name="course"
                        value={form.course}
                        onChange={handleChange}
                        className="w-full bg-gray-50/50 border border-gray-200 pl-11 pr-4 py-3 rounded-2xl focus:outline-none focus:border-[#19125e] appearance-none text-[#19125e]"
                      >
                        <option value="">Select Course</option>
                        {courses.map((cat) =>
                          cat.courses.map((c, idx) => (
                            <option key={`${cat.title}-${idx}`} value={c}>
                              {c}
                            </option>
                          )),
                        )}
                      </select>
                    </div>

                    <div className="relative group">
                      <div className="absolute left-4 top-4 text-gray-400 pointer-events-none group-focus-within:text-[#19125e]">
                        <MessageSquare size={18} />
                      </div>
                      <textarea
                        name="query"
                        placeholder="Query"
                        value={form.query}
                        onChange={handleChange}
                        className="w-full bg-gray-50/50 border border-gray-200 pl-11 pr-4 py-3 rounded-2xl focus:outline-none focus:border-[#19125e] h-20 resize-none text-[#19125e]"
                      />
                    </div>

                    <button
                      disabled={loading}
                      className="w-full bg-[#19125e] text-white py-4 rounded-2xl font-bold hover:bg-[#f0c44c] hover:text-[#19125e] transition-all shadow-lg flex justify-center items-center gap-2 cursor-pointer"
                    >
                      {loading ? (
                        <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                      ) : (
                        "Book Free Demo"
                      )}
                    </button>
                  </form>
                </div>
              </>
            )}
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
