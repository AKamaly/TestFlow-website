'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { Check, X } from 'lucide-react'

interface SuccessPopupProps {
  isOpen: boolean
  onClose: () => void
}

export function SuccessPopup({ isOpen, onClose }: SuccessPopupProps) {
  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50"
            onClick={onClose}
          />

          {/* Popup */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-black/90 border border-white/10 rounded-2xl p-8 max-w-md w-full z-50"
          >
            {/* Close button */}
            <button
              onClick={onClose}
              className="absolute top-4 right-4 text-gray-400 hover:text-white transition-colors"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Success icon */}
            <div className="w-16 h-16 rounded-full bg-green-500/20 flex items-center justify-center mx-auto mb-6">
              <Check className="w-8 h-8 text-green-400" />
            </div>

            {/* Content */}
            <h3 className="text-2xl font-bold text-center mb-4">
              Message Sent Successfully!
            </h3>
            <p className="text-gray-400 text-center">
              Thanks for reaching out! We&apos;ll get back to you within 24 hours.
            </p>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  )
}

