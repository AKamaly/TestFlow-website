'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { X } from 'lucide-react'
import { useEffect } from 'react'
import Script from 'next/script'

interface VideoModalProps {
  isOpen: boolean
  onClose: () => void
  videoUrl?: string
}

export function VideoModal({ isOpen, onClose, videoUrl = "https://player.vimeo.com/video/1144190846?badge=0&autopause=0&player_id=0&app_id=58479" }: VideoModalProps) {
  return (
    <>
      {/* Vimeo Player Script - Only load if using Vimeo default or generic check */}
      {isOpen && (
        <Script
          src="https://player.vimeo.com/api/player.js"
          strategy="lazyOnload"
        />
      )}

      <AnimatePresence>
        {isOpen && (
          <div className="fixed inset-0 flex items-center justify-center z-50">
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="absolute inset-0 bg-black/80 backdrop-blur-sm"
              onClick={onClose}
            />

            {/* Modal */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="relative w-full max-w-5xl mx-4"
            >
              {/* Close button */}
              <button
                onClick={onClose}
                className="absolute -top-12 right-0 text-white/70 hover:text-white transition-colors z-10"
                aria-label="Close video"
              >
                <X className="w-6 h-6" />
              </button>

              {/* Video container */}
              <div className="relative w-full" style={{ padding: '56.25% 0 0 0' }}>
                <iframe
                  src={videoUrl}
                  className="absolute top-0 left-0 w-full h-full rounded-xl"
                  frameBorder="0"
                  allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media; web-share"
                  referrerPolicy="strict-origin-when-cross-origin"
                  title="Video Player"
                />
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </>
  )
} 