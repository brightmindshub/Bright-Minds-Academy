"use client";

import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MessageCircle, Send, X, ShieldCheck, MoreHorizontal } from "lucide-react";
import Image from "next/image";

export default function WhatsAppChat({ courses }) {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState([]);
  const [userInput, setUserInput] = useState("");
  const [step, setStep] = useState(0);
  const [isTyping, setIsTyping] = useState(false);
  const scrollRef = useRef(null);

  // Auto-scroll logic
  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTo({
        top: scrollRef.current.scrollHeight,
        behavior: "smooth",
      });
    }
  }, [messages, isTyping]);

  const botMessage = async (text, delay = 1000) => {
    setIsTyping(true);
    await new Promise((resolve) => setTimeout(resolve, delay));
    setIsTyping(false);
    setMessages((prev) => [...prev, { type: "bot", text }]);
  };

  const handleUserMessage = (text) => {
    setMessages((prev) => [...prev, { type: "user", text }]);
    setUserInput("");
  };

  const handleNextStep = async () => {
    if (!userInput.trim()) return;

    if (step === 1) {
      const name = userInput.trim();
      handleUserMessage(name);
      await botMessage(`Pleasure to meet you, ${name}! ✨`, 800);
      await botMessage(`Which course would you like to discuss with our experts?`, 1000);
      setStep(2);
    } else if (step === 2) {
      const selectedCourse = userInput;
      handleUserMessage(selectedCourse);
      
      const userName = messages.find(m => m.type === 'user')?.text || 'Guest';
      const message = `Hi BrightMinds Academy! My name is ${userName} and I am interested in ${selectedCourse}.`;
      const url = `https://wa.me/919217669989?text=${encodeURIComponent(message)}`;
      
      await botMessage("Perfect! Opening WhatsApp for you...", 800);
      
      setTimeout(() => {
        window.open(url, "_blank");
        setOpen(false);
        setStep(0);
        setMessages([]);
      }, 1000);
    }
  };

  const startChat = () => {
    setOpen(true);
    if (messages.length === 0) {
      botMessage("Hello! Welcome to BrightMinds Academy 👋", 500);
      botMessage("How should we address you?", 1500);
      setStep(1);
    }
  };

  return (
    <>
      {/* Trigger Button */}
      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={startChat}
        className="fixed bottom-6 right-6 md:bottom-8 md:right-8 z-50 bg-[#25D366] text-white p-4 rounded-2xl shadow-2xl flex items-center gap-3 cursor-pointer"
      >
        <MessageCircle size={24} />
        <span className="font-bold text-sm hidden md:block">Chat with Experts</span>
      </motion.button>

      <AnimatePresence>
        {open && (
          <>
            {/* Backdrop for mobile focus */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setOpen(false)}
              className="fixed inset-0 bg-black/20 backdrop-blur-sm z-[51] md:z-40"
            />

            {/* Chat Box */}
            <motion.div
              initial={{ opacity: 0, y: 20, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 20, scale: 0.95 }}
              className="fixed bottom-0 right-0 md:bottom-24 md:right-8 z-[52] w-full md:w-[380px] h-[100dvh] md:h-auto max-h-[600px] bg-white md:rounded-[2rem] shadow-2xl flex flex-col overflow-hidden"
            >
              {/* Header */}
              <div className="bg-[#19125e] p-5 text-white flex justify-between items-center shrink-0">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center font-bold border border-white/10">
                  <Image src={"/assets/chat_icon.png"} width={20} height={20} alt="chat_icon"/>
                  </div>
                  <div>
                    <p className="font-bold text-sm">BrightMinds Support</p>
                    <p className="text-[10px] text-[#25D366] flex items-center gap-1">
                      <span className="w-1.5 h-1.5 bg-[#25D366] rounded-full animate-pulse" /> Online Now
                    </p>
                  </div>
                </div>
                <button onClick={() => setOpen(false)} className="p-2 hover:bg-white/10 rounded-lg transition">
                  <X size={20} />
                </button>
              </div>

              {/* Scrollable Messages Area */}
              <div 
                ref={scrollRef}
                className="flex-1 overflow-y-auto p-5 bg-[#f8f9fa] space-y-4 scrollbar-hide"
                style={{ height: "380px" }} // Fixed height for scrollability
              >
                {messages.map((msg, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, y: 5 }}
                    animate={{ opacity: 1, y: 0 }}
                    className={`${
                      msg.type === "bot"
                        ? "self-start bg-white text-gray-800 rounded-2xl rounded-tl-none shadow-sm"
                        : "self-end ml-auto bg-[#19125e] text-white rounded-2xl rounded-tr-none shadow-md"
                    } px-4 py-3 text-[14px] max-w-[85%] border border-gray-100`}
                  >
                    {msg.text}
                  </motion.div>
                ))}

                {/* Typing Animation */}
                {isTyping && (
                  <motion.div 
                    initial={{ opacity: 0 }} 
                    animate={{ opacity: 1 }} 
                    className="self-start bg-white px-4 py-3 rounded-2xl rounded-tl-none shadow-sm w-16 flex justify-center"
                  >
                    <MoreHorizontal className="animate-bounce text-gray-400" size={20} />
                  </motion.div>
                )}
              </div>

              {/* Input Footer */}
              <div className="p-5 bg-white border-t border-gray-100 shrink-0">
                {step === 1 && (
                  <div className="flex gap-2">
                    <input
                      type="text"
                      value={userInput}
                      onChange={(e) => setUserInput(e.target.value)}
                      onKeyDown={(e) => e.key === "Enter" && handleNextStep()}
                      placeholder="Your Name..."
                      className="flex-1 bg-gray-50 border border-gray-200 px-4 py-3 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#19125e]/10 text-sm"
                    />
                    <button onClick={handleNextStep} className="bg-[#19125e] text-white p-3 rounded-xl">
                      <Send size={18} />
                    </button>
                  </div>
                )}

                {step === 2 && (
                  <div className="space-y-3">
                    <select
                      value={userInput}
                      onChange={(e) => setUserInput(e.target.value)}
                      className="w-full bg-gray-50 border border-gray-200 px-4 py-3 rounded-xl outline-none text-sm cursor-pointer"
                    >
                      <option value="">Select a Course</option>
                      {courses.map((cat) =>
                        cat.courses.map((c) => <option key={c} value={c}>{c}</option>)
                      )}
                    </select>
                    <button
                      onClick={handleNextStep}
                      disabled={!userInput}
                      className="w-full bg-[#25D366] text-white py-3 rounded-xl font-bold text-sm hover:bg-[#1ebe5d] transition-colors flex items-center justify-center gap-2"
                    >
                      Connect on WhatsApp
                    </button>
                  </div>
                )}
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>

      <style jsx global>{`
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
    </>
  );
}