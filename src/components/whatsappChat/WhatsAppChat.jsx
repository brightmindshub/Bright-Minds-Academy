"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MessageCircle, Send, X } from "lucide-react";

export default function WhatsAppChat({ courses }) {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState([]);
  const [userInput, setUserInput] = useState("");
  const [step, setStep] = useState(0);

  const botMessage = (text, delay = 300) => {
    setTimeout(() => {
      setMessages((prev) => [...prev, { type: "bot", text }]);
    }, delay);
  };

  const handleUserMessage = (text) => {
    setMessages((prev) => [...prev, { type: "user", text }]);
    setUserInput("");
  };

  const handleNextStep = () => {
    if (step === 1 && userInput.trim() === "") return alert("Please enter your name!");
    if (step === 2 && userInput.trim() === "") return alert("Please select a course!");

    if (step === 1) {
      handleUserMessage(userInput);
      botMessage(
        `Thanks ${userInput}! Which course are you interested in?`,
        400
      );
      setStep(2);
    } else if (step === 2) {
      handleUserMessage(userInput);
      // Redirect to WhatsApp
      const message = `Hi BrightMinds Academy! My name is ${messages.find(m=>m.type==='user')?.text || ''} and I am interested in ${userInput}.`;
      const url = `https://wa.me/919876543210?text=${encodeURIComponent(message)}`;
      window.open(url, "_blank");
      // Reset
      setTimeout(() => {
        setOpen(false);
        setStep(0);
        setMessages([]);
        setUserInput("");
      }, 300);
    }
  };

  useEffect(() => {
    if (!open) return;
    if (step === 0) {
      botMessage("Hello! Welcome to BrightMinds Academy 👋", 300);
      botMessage("May I know your name?", 1000);
      setStep(1);
    }
  }, [open]);

    useEffect(() => {
    const timer = setTimeout(() => setOpen(true), 4000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {/* Sticky Button */}
      <button
        onClick={() => setOpen(true)}
        className="fixed bottom-6 right-6 z-50 bg-[#25D366] hover:bg-[#1ebe5d] text-white p-4 rounded-full shadow-lg flex items-center justify-center cursor-pointer"
      >
        <MessageCircle size={28} />
      </button>

      {/* Chat Box */}
      <AnimatePresence>
        {open && (
          <>
            {/* Overlay */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.4 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black z-40"
              onClick={() => setOpen(false)}
            />

            {/* Chat Modal */}
            <motion.div
              initial={{ scale: 0.8, opacity: 0, y: 50 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.8, opacity: 0, y: 50 }}
              transition={{ duration: 0.3 }}
              className="fixed bottom-20 right-6 z-50 w-90 md:w-auto bg-white rounded-xl shadow-xl flex flex-col overflow-hidden"
            >
              {/* Header */}
              <div className="flex justify-between items-center bg-[#19125e] text-white px-4 py-3">
                <h3 className="text-lg font-semibold">BrightMinds Chat</h3>
                <button onClick={() => setOpen(false)}>
                  <X size={20} />
                </button>
              </div>

              {/* Messages */}
              <div className="flex-1 p-4 flex flex-col gap-2 max-h-80 overflow-y-auto">
                <AnimatePresence>
                  {messages.map((msg, idx) => (
                    <motion.div
                      key={idx}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 10 }}
                      className={`${
                        msg.type === "bot"
                          ? "self-start bg-[#f0f0f0] text-gray-800"
                          : "self-end bg-[#19125e] text-white"
                      } px-3 py-2 rounded-xl max-w-[70%]`}
                    >
                      {msg.text}
                    </motion.div>
                  ))}
                </AnimatePresence>
              </div>

              {/* User Input */}
              <div className="border-t border-gray-200 px-4 py-3">
                {step === 1 && (
                  <div className="flex gap-2">
                    <input
                      type="text"
                      value={userInput}
                      onChange={(e) => setUserInput(e.target.value)}
                      placeholder="Enter your name"
                      className="flex-1 border border-gray-300 px-3 py-2 rounded-lg focus:outline-none focus:border-[#19125e]"
                    />
                    <button
                      onClick={handleNextStep}
                      className="bg-[#19125e] text-white px-4 py-2 rounded-lg hover:bg-[#f0c44c] hover:text-[#19125e] transition"
                    >
                      <Send/>
                    </button>
                  </div>
                )}
                {step === 2 && (
                  <div className="flex gap-2">
                    <select
                      value={userInput}
                      onChange={(e) => setUserInput(e.target.value)}
                      className="flex-1 border border-gray-300 px-3 py-2 rounded-lg focus:outline-none focus:border-[#19125e] w-[60%] md:w-auto"
                    >
                      <option value="">Select Course</option>
                      {courses.map((cat) =>
                        cat.courses.map((c) => (
                          <option key={c} value={c}>
                            {c}
                          </option>
                        ))
                      )}
                    </select>
                    <button
                      onClick={handleNextStep}
                      className="bg-[#25D366] text-white px-4 py-2 rounded-lg hover:bg-[#1ebe5d] transition"
                    >
                      <Send/>
                    </button>
                  </div>
                )}
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}