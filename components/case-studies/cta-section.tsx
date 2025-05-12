'use client'

import { ArrowRight, Check } from 'lucide-react'
import { motion } from 'framer-motion'

export function CTASection() {
  return (
    <section className="relative py-32 overflow-hidden">
      <div className="container mx-auto px-4 relative max-w-[1200px] w-full">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="relative max-w-5xl mx-auto text-center"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 via-purple-500/10 to-blue-500/10 rounded-3xl blur-3xl opacity-30" />
          <div className="relative">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="space-y-4 mb-8"
            >
              <h2 className="text-4xl md:text-6xl font-bold bg-gradient-to-b from-white to-white/80 bg-clip-text text-transparent">
                Ready to accelerate your<br />validation process?
              </h2>
              <p className="text-xl text-gray-400 max-w-2xl mx-auto">
                Join these industry leaders and transform how you validate your products with Atoms TestFlow.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="flex flex-col sm:flex-row gap-4 justify-center items-center"
            >
              <div
                className="bg-gradient-to-r from-blue-500 to-purple-600 text-white hover:from-blue-600 hover:to-purple-700 rounded-full transition-all duration-300 hover:scale-105 hover:shadow-[0_0_25px_rgba(79,70,229,0.4)] flex items-center justify-center gap-2 h-11 px-6 text-base w-full sm:w-auto min-w-[160px] cursor-pointer"
              >
                Get Started
                <motion.div
                  animate={{
                    x: [0, 4, 0]
                  }}
                  transition={{
                    duration: 1.5,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                >
                  <ArrowRight className="w-4 h-4" />
                </motion.div>
              </div>
              <div
                className="rounded-full border border-blue-500/30 hover:border-blue-500/50 hover:bg-blue-500/5 h-11 px-6 text-base w-full sm:w-auto min-w-[160px] flex items-center justify-center cursor-pointer"
              >
                View Documentation
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="mt-12 flex flex-col items-center gap-6"
            >
              <div className="flex items-center gap-6">
                <div className="flex -space-x-2">
                  {[1, 2, 3, 4].map((i) => (
                    <div
                      key={i}
                      className="w-10 h-10 rounded-full border-2 border-black bg-gradient-to-br from-blue-400 to-purple-400"
                    />
                  ))}
                </div>
                <div className="text-left">
                  <div className="text-sm font-medium">Trusted by industry leaders</div>
                  <div className="text-sm text-gray-400">across semiconductor and electronics</div>
                </div>
              </div>
              <div className="flex items-center gap-4 text-sm text-gray-400">
                <div className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-green-400" />
                  <span>85% Faster Validation</span>
                </div>
                <div className="w-1 h-1 rounded-full bg-gray-700" />
                <div className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-green-400" />
                  <span>67% Cost Reduction</span>
                </div>
                <div className="w-1 h-1 rounded-full bg-gray-700" />
                <div className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-green-400" />
                  <span>24/7 Automated Testing</span>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
} 