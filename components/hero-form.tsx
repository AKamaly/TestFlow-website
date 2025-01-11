'use client'

import { useState } from 'react'
import { Button } from "@/components/ui/button"
import { motion, AnimatePresence } from "framer-motion"
import { SuccessPopup } from './success-popup'

export function HeroForm() {
  const [isExpanded, setIsExpanded] = useState(false)
  const [email, setEmail] = useState('')
  const [name, setName] = useState('')
  const [position, setPosition] = useState('')
  const [showSuccess, setShowSuccess] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    
    if (!isExpanded) {
      setIsExpanded(true)
      return
    }
    
    // Handle final form submission
    if (isExpanded && email && name && position) {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 500))
      setShowSuccess(true)
      
      // Reset form
      setEmail('')
      setName('')
      setPosition('')
      setIsExpanded(false)
    }
  }

  return (
    <>
      <form onSubmit={handleSubmit} className="w-full max-w-3xl mx-auto">
        <div className="relative">
          <AnimatePresence mode="wait">
            {!isExpanded ? (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.2 }}
                className="relative"
              >
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter Work Email"
                  required
                  className="w-full px-6 pr-36 py-4 rounded-full bg-white/5 border border-white/10 text-white placeholder:text-gray-400 focus:outline-none focus:border-white/20 transition-all duration-200 hover:bg-white/[0.07]"
                />
                <Button
                  type="submit"
                  className="absolute right-2 top-1/2 -translate-y-1/2 bg-gradient-to-r from-white to-gray-100 text-black hover:opacity-90 rounded-full px-6 py-3 text-sm font-medium transition-all duration-200 hover:scale-[1.02] active:scale-[0.98]"
                >
                  Get Started
                </Button>
              </motion.div>
            ) : (
              <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 20 }}
                transition={{ duration: 0.2 }}
                className="flex items-center gap-3 w-full p-2 rounded-full bg-gradient-to-b from-white/[0.07] to-white/[0.05] border border-white/10 shadow-[0_0_1px_rgba(255,255,255,0.1)] backdrop-blur-sm"
              >
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter Work Email"
                  required
                  className="min-w-0 w-96 px-4 py-2 rounded-full bg-black/40 text-white placeholder:text-gray-400 focus:outline-none focus:bg-black/50 transition-colors duration-200"
                />
                <input
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Your Name"
                  required
                  className="min-w-0 w-64 px-4 py-2 rounded-full bg-black/40 text-white placeholder:text-gray-400 focus:outline-none focus:bg-black/50 transition-colors duration-200"
                />
                <input
                  type="text"
                  value={position}
                  onChange={(e) => setPosition(e.target.value)}
                  placeholder="Your Position"
                  required
                  className="min-w-0 w-64 px-4 py-2 rounded-full bg-black/40 text-white placeholder:text-gray-400 focus:outline-none focus:bg-black/50 transition-colors duration-200"
                />
                <Button
                  type="submit"
                  className="bg-gradient-to-r from-white to-gray-100 text-black hover:opacity-90 rounded-full px-6 py-2 text-sm font-medium transition-all duration-200 hover:scale-[1.02] active:scale-[0.98] shrink-0 shadow-sm"
                >
                  Get Started
                </Button>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </form>

      <AnimatePresence>
        <SuccessPopup 
          isOpen={showSuccess} 
          onClose={() => setShowSuccess(false)} 
        />
      </AnimatePresence>
    </>
  )
}

