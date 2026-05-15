'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { Calendar, X, ArrowRight, Users, Trophy } from 'lucide-react'
import Link from 'next/link'
import Image from 'next/image'

interface WebinarPopupProps {
  isOpen: boolean
  onClose: () => void
}

export function WebinarPopup({ isOpen, onClose }: WebinarPopupProps) {
  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 flex items-center justify-center z-50">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="absolute inset-0 bg-black/30 backdrop-blur-[2px]"
            onClick={onClose}
          />

          {/* Popup */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            className="relative bg-black rounded-2xl max-w-4xl w-[calc(100%-32px)] mx-auto shadow-xl overflow-hidden border border-white/10"
          >
            {/* Close button */}
            <button
              onClick={onClose}
              className="absolute top-3 right-3 text-white/70 hover:text-white transition-colors z-10"
              aria-label="Close"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="flex flex-col md:flex-row">
              {/* Left side - Image */}
              <div className="relative w-full md:w-1/2 aspect-[4/3] md:aspect-auto">
                <Image
                  src="https://9zog2la6l29pbfba.public.blob.vercel-storage.com/THE%20GLOBAL%20HARDWARE%20VALIDATION%20CHALLENGE%202025%20%282%29.png"
                  alt="Global Hardware Validation Challenge 2025"
                  fill
                  className="object-cover"
                  priority
                />
              </div>

              {/* Right side - Content */}
              <div className="relative w-full md:w-1/2 p-6 md:p-8 bg-gradient-to-br from-gray-900/50 to-black/30 backdrop-blur-xl">
                <div className="absolute inset-0 bg-gradient-to-br from-purple-500/15 via-fuchsia-500/10 to-blue-500/5 opacity-60" />
                
                <div className="relative space-y-4">
                  {/* Badge */}
                  <div className="inline-flex items-center gap-2 rounded-full px-2.5 py-0.5 text-sm font-medium bg-gradient-to-r from-purple-500/15 to-pink-500/15 border border-purple-500/40 backdrop-blur-sm">
                    <Trophy className="w-3.5 h-3.5 text-yellow-300" />
                    <span className="bg-gradient-to-r from-purple-300 to-pink-300 bg-clip-text text-transparent">
                      Global Chip Validation Challenge 2025
                    </span>
                  </div>
                  
                  <h3 className="text-xl md:text-2xl font-bold bg-gradient-to-r from-white via-white to-white/80 bg-clip-text text-transparent">
                    Join the Global Hardware Validation Challenge
                  </h3>
                  
                  <p className="text-gray-400 text-sm">
                    Put your validation lab to the test and see how fast you can go from first power-on to sign-off with AI-powered automation.
                  </p>

                  <Link 
                    href="/challenge"
                    className="inline-flex items-center justify-center gap-2 w-full bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-lg px-4 py-2 text-sm font-medium hover:from-purple-700 hover:to-pink-700 transition-all duration-300 hover:scale-[1.02] shadow-[0_0_20px_rgba(168,85,247,0.6)] hover:shadow-[0_0_25px_rgba(236,72,153,0.7)] group"
                    onClick={onClose}
                  >
                    Join Now
                    <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                  </Link>

                  <div className="text-xs text-gray-500 text-center">
                    Free to join · Limited early-access slots for partner labs
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  )
} 