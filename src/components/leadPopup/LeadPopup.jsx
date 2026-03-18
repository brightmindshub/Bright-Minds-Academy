"use client";

import { motion, AnimatePresence } from "framer-motion";

export default function Popup({
  open,
  setOpen,
  title,
  description,
  children,
  closeOnOverlayClick = true,
  maxWidth = "max-w-lg",
}) {
  return (
    <AnimatePresence>
      {open && (
        <motion.div
          className="fixed inset-0 bg-black/60 z-50 flex items-center justify-center px-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={() => closeOnOverlayClick && setOpen(false)}
        >
          <motion.div
            initial={{ scale: 0.8, y: 50 }}
            animate={{ scale: 1, y: 0 }}
            exit={{ scale: 0.8, y: 50 }}
            onClick={(e) => e.stopPropagation()}
            className={`bg-white rounded-2xl p-6 md:p-8 w-full ${maxWidth} shadow-2xl relative`}
          >
            {/* Close Button */}
            <button
              onClick={() => setOpen(false)}
              className="absolute top-3 right-4 text-gray-400 hover:text-black"
            >
              ✕
            </button>

            {/* Optional Title */}
            {title && (
              <h2 className="text-2xl font-bold text-[#19125e] mb-2">
                {title}
              </h2>
            )}

            {/* Optional Description */}
            {description && (
              <p className="text-gray-600 mb-6">{description}</p>
            )}

            {/* Dynamic Content */}
            {children}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}