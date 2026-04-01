"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import {
  CheckCircle,
  User,
  Phone,
  Mail,
  GraduationCap,
  MessageSquare,
  Send,
} from "lucide-react";

const CustomInput = ({ icon: Icon, ...props }) => (
  <div className="relative group">
    <div className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 group-focus-within:text-[#19125e] transition-colors pointer-events-none">
      <Icon size={18} />
    </div>
    <input
      {...props}
      className="w-full bg-gray-50 border border-gray-100 pl-11 md:pl-12 pr-4 py-3 md:py-3.5 rounded-xl md:rounded-2xl focus:outline-none focus:ring-2 focus:ring-[#19125e]/5 focus:border-[#19125e] transition-all placeholder:text-gray-400 text-[#19125e] text-sm md:text-base"
    />
  </div>
);

export default function ContactForm({ courses, defaultCourse }) {
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
    if (defaultCourse) setForm((prev) => ({ ...prev, course: defaultCourse }));
  }, [defaultCourse]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) setErrors((prev) => ({ ...prev, [name]: "" }));
  };

  const validate = () => {
    const newErrors = {};
    if (!form.name.trim()) newErrors.name = "Name is required";
    if (!/^[6-9]\d{9}$/.test(form.phone))
      newErrors.phone = "Invalid 10-digit number";
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email))
      newErrors.email = "Invalid email";
    if (!form.course) newErrors.course = "Please select course";
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
        className="bg-white rounded-[1.5rem] md:rounded-[2.5rem] p-6 md:p-10 text-center border border-gray-50 shadow-2xl w-full"
      >
        <div className="w-16 h-16 md:w-20 md:h-20 bg-green-50 rounded-full flex items-center justify-center mx-auto mb-4 md:mb-6">
          <CheckCircle className="text-green-500" size={36} />
        </div>
        <h3 className="text-xl md:text-2xl font-bold text-[#19125e] mb-2 md:mb-3">
          Submission Successful
        </h3>
        <p className="text-gray-500 mb-6 md:mb-8 text-sm md:text-base leading-relaxed">
          Thank you for reaching out. <br /> Our academic experts will contact
          you shortly.
        </p>
        <button
          onClick={() => setSuccess(false)}
          className="bg-[#19125e] text-white px-6 md:px-8 py-2.5 md:py-3 rounded-xl font-bold hover:bg-[#f0c44c] hover:text-[#19125e] transition shadow-lg text-sm md:text-base w-full md:w-auto"
        >
          Send Another Message
        </button>
      </motion.div>
    );
  }

  return (
    <motion.form
      onSubmit={handleSubmit}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="bg-white rounded-[1.5rem] md:rounded-[2.5rem] shadow-[0_10px_40px_rgba(0,0,0,0.05)] p-5 md:p-10 border border-gray-50 flex flex-col gap-4 md:gap-5 w-full"
    >
      <div className="w-full">
        <CustomInput
          icon={User}
          name="name"
          placeholder="Full Name"
          value={form.name}
          onChange={handleChange}
        />
        {errors.name && (
          <p className="text-red-500 text-[10px] uppercase font-bold tracking-widest ml-2 mt-1">
            {errors.name}
          </p>
        )}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-5">
        <div className="w-full">
          <CustomInput
            icon={Phone}
            name="phone"
            placeholder="Phone"
            maxLength={10}
            value={form.phone}
            onChange={(e) =>
              setForm({ ...form, phone: e.target.value.replace(/\D/g, "") })
            }
          />
          {errors.phone && (
            <p className="text-red-500 text-[10px] uppercase font-bold tracking-widest ml-2 mt-1">
              {errors.phone}
            </p>
          )}
        </div>
        <div className="w-full">
          <CustomInput
            icon={Mail}
            name="email"
            placeholder="Email"
            value={form.email}
            onChange={handleChange}
          />
          {errors.email && (
            <p className="text-red-500 text-[10px] uppercase font-bold tracking-widest ml-2 mt-1">
              {errors.email}
            </p>
          )}
        </div>
      </div>

      <div className="relative group w-full">
        <div className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 group-focus-within:text-[#19125e] pointer-events-none">
          <GraduationCap size={18} />
        </div>
        <select
          name="course"
          value={form.course}
          onChange={handleChange}
          className="w-full bg-gray-50 border border-gray-100 pl-11 md:pl-12 pr-4 py-3 md:py-3.5 rounded-xl md:rounded-2xl focus:outline-none focus:ring-2 focus:ring-[#19125e]/5 focus:border-[#19125e] appearance-none transition-all text-[#19125e] text-sm md:text-base"
        >
          <option value="">Select Course Interested</option>
          {courses.map((cat) =>
            cat.courses.map((c, idx) => (
              <option key={`${cat.title}-${idx}`} value={c}>
                {c}
              </option>
            )),
          )}
        </select>
        {errors.course && (
          <p className="text-red-500 text-[10px] uppercase font-bold tracking-widest ml-2 mt-1">
            {errors.course}
          </p>
        )}
      </div>

      <div className="relative group w-full">
        <div className="absolute left-4 top-4 text-gray-400 group-focus-within:text-[#19125e] pointer-events-none">
          <MessageSquare size={18} />
        </div>
        <textarea
          name="query"
          rows={3}
          placeholder="How can we help you?"
          value={form.query}
          onChange={handleChange}
          className="w-full bg-gray-50 border border-gray-100 pl-11 md:pl-12 pr-4 py-3 md:py-4 rounded-xl md:rounded-2xl focus:outline-none focus:ring-2 focus:ring-[#19125e]/5 focus:border-[#19125e] transition-all placeholder:text-gray-400 text-[#19125e] resize-none text-sm md:text-base"
        />
      </div>

      <button
        type="submit"
        disabled={loading}
        className="bg-[#19125e] text-white py-3.5 md:py-4 rounded-xl md:rounded-2xl font-bold hover:bg-[#f0c44c] hover:text-[#19125e] transition-all flex justify-center items-center gap-3 shadow-xl shadow-[#19125e]/10 active:scale-95 text-sm md:text-base cursor-pointer"
      >
        {loading ? (
          <span className="w-5 h-5 md:w-6 md:h-6 border-2 md:border-3 border-white border-t-transparent rounded-full animate-spin"></span>
        ) : (
          <>
            Submit Enquiry <Send size={18} />
          </>
        )}
      </button>
    </motion.form>
  );
}
