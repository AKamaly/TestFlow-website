'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { Calendar, X, ArrowRight, Users } from 'lucide-react'
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
            className="relative bg-black rounded-2xl max-w-3xl w-[calc(100%-32px)] mx-auto shadow-xl overflow-hidden border border-white/10"
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
                  src="https://9zog2la6l29pbfba.public.blob.vercel-storage.com/webinar%20pop%20up%20image%20-dGQP9mVfcVkoYZ5XA6cBdpB2ygBalm.png"
                  alt="Hardware Validation Webinar"
                  fill
                  className="object-cover"
                  priority
                />
              </div>

              {/* Right side - Content */}
              <div className="relative w-full md:w-1/2 p-6 md:p-8 bg-gradient-to-br from-gray-900/50 to-black/30 backdrop-blur-xl">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 via-purple-500/10 to-blue-500/10 opacity-50" />
                
                <div className="relative space-y-4">
                  {/* Badge */}
                  <div className="inline-block rounded-full px-2.5 py-0.5 text-sm font-medium bg-gradient-to-r from-blue-500/10 to-purple-500/10 border border-blue-500/20 backdrop-blur-sm">
                    <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                      Upcoming Webinar
                    </span>
                  </div>
                  
                  <h3 className="text-xl md:text-2xl font-bold bg-gradient-to-r from-white via-white to-white/80 bg-clip-text text-transparent">
                    The Future of Hardware Validation
                  </h3>
                  
                  <p className="text-gray-400 text-sm">
                    Join us for an exclusive webinar where we'll showcase the latest advancements in AI-powered hardware validation and testing automation.
                  </p>

                  <div className="space-y-2">
                    <div className="flex items-center gap-2 text-gray-400 text-sm">
                      <Calendar className="w-4 h-4 text-blue-400" />
                      <span>May 4th at 11:00 AM EET (UTC+2)</span>
                    </div>
                    
                    <div className="flex items-center gap-2 text-gray-400 text-sm">
                      <Users className="w-4 h-4 text-purple-400" />
                      <span>Limited spots available</span>
                    </div>
                  </div>

                  <Link 
                    href="https://events.teams.microsoft.com/event/14314a7b-b2b5-4608-818a-cff2d00bee1c@f96ca994-4257-4a36-94c7-0bd142d2bc27" 
                    className="inline-flex items-center justify-center gap-2 w-full bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-lg px-4 py-2 text-sm font-medium hover:from-blue-600 hover:to-purple-700 transition-all duration-300 hover:scale-[1.02] shadow-[0_0_20px_rgba(59,130,246,0.5)] hover:shadow-[0_0_25px_rgba(59,130,246,0.7)] group"
                    onClick={onClose}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Register Now
                    <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                  </Link>

                  <div className="text-xs text-gray-500 text-center">
                    Free for all registered participants
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