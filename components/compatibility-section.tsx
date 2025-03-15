'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import { Cable, CheckCircle, ArrowRight, Zap } from 'lucide-react'
import Link from 'next/link'

const instruments = [
  {
    name: "Keysight Technologies",
    logo: "/logos/Instruments Logos/keysight-logo.svg",
    description: "Industry-leading electronic measurement solutions",
    category: "Test & Measurement"
  },
  {
    name: "Rohde & Schwarz",
    logo: "/logos/Instruments Logos/Rohde_&_Schwarz_Logo.svg.png",
    description: "Precision test and measurement equipment",
    category: "RF & Microwave"
  },
  {
    name: "Tektronix",
    logo: "/logos/Instruments Logos/tektronix-logo.svg",
    description: "Leading manufacturer of oscilloscopes and analyzers",
    category: "Oscilloscopes"
  },
  {
    name: "Keithley",
    logo: "/logos/Instruments Logos/Keithley_Instruments_Logo.svg",
    description: "Precision electrical test instruments",
    category: "Electrical Testing"
  },
  {
    name: "Agilent Technologies",
    logo: "/logos/Instruments Logos/agilent-technologies-1.svg",
    description: "Advanced measurement solutions",
    category: "Temperature Chambers"
  },
  {
    name: "Chroma",
    logo: "/logos/Instruments Logos/Chroma.png",
    description: "Power and electrical testing equipment",
    category: "Power Testing"
  }
]

// Group instruments by category
const categories = [
  "Test & Measurement",
  "RF & Microwave",
  "Oscilloscopes",
  "Electrical Testing",
  "Temperature Chambers",
  "Power Testing"
]

export function CompatibilitySection() {
  return (
    <section className="relative z-10 py-20 md:py-32 border-t border-white/10 overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]" />
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.1, 0.2, 0.1],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "linear"
          }}
          className="absolute top-0 left-0 w-1/2 h-1/2 bg-gradient-to-br from-blue-500/10 via-transparent to-transparent rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.1, 0.2, 0.1],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "linear",
            delay: 4
          }}
          className="absolute bottom-0 right-0 w-1/2 h-1/2 bg-gradient-to-tl from-purple-500/10 via-transparent to-transparent rounded-full blur-3xl"
        />
      </div>

      <div className="container px-4 relative">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-sm font-medium bg-gradient-to-r from-blue-500/10 to-purple-500/10 border border-blue-500/20 backdrop-blur-sm mb-4"
          >
            <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              Universal Compatibility
            </span>
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-white via-white to-white/80 bg-clip-text text-transparent"
          >
            Works with Leading Test Equipment
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-xl text-gray-400 max-w-2xl mx-auto"
          >
            Atoms TestFlow seamlessly integrates with industry-standard instruments and testing equipment
          </motion.p>
        </div>

        {/* New Layout - TestFlow at top left with logos below */}
        <div className="max-w-6xl mx-auto">
          {/* TestFlow Header Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="relative mb-16 flex flex-col md:flex-row items-start gap-8"
          >
            {/* TestFlow Logo Circle */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3, type: "spring" }}
              className="relative flex-shrink-0 w-32 h-32 md:w-40 md:h-40 rounded-full flex items-center justify-center"
            >
              {/* Glowing Effects */}
              <div className="absolute inset-0 rounded-full bg-gradient-to-br from-blue-500/30 to-purple-500/30 blur-2xl opacity-50" />
              <div className="absolute inset-0 rounded-full bg-gradient-to-br from-blue-500/20 to-purple-500/20 blur-xl" />
              <div className="absolute inset-0 rounded-full bg-black/80 border-2 border-white/10" />
              
              {/* Pulsing Animation */}
              <motion.div 
                className="absolute inset-0 rounded-full border border-blue-500/30"
                animate={{ 
                  scale: [1, 1.05, 1],
                  opacity: [0.5, 0.8, 0.5]
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              />
              
              <div className="relative flex flex-col items-center justify-center p-4">
                <div className="bg-gradient-to-r from-blue-500 to-purple-500 rounded-full p-2.5 mb-2 shadow-[0_0_15px_rgba(59,130,246,0.5)]">
                  <Cable className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-lg font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">TestFlow</h3>
              </div>
            </motion.div>
            
            {/* TestFlow Description */}
            <div className="flex-grow">
              <motion.h3
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4 }}
                className="text-2xl font-bold mb-4 bg-gradient-to-r from-white to-white/90 bg-clip-text text-transparent"
              >
                Universal Compatibility Hub
              </motion.h3>
              
              <motion.p
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5 }}
                className="text-gray-400 mb-6"
              >
                TestFlow serves as a central hub that connects seamlessly with all your testing equipment. Our platform is designed to work with industry-standard instruments from leading manufacturers, eliminating compatibility issues and streamlining your validation workflow.
              </motion.p>
              
              {/* Key Features */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {[
                  "Plug & Play Integration",
                  "Multi-Vendor Support",
                  "Automatic Device Detection",
                  "Real-time Data Synchronization"
                ].map((feature, index) => (
                  <motion.div
                    key={feature}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.6 + index * 0.1 }}
                    className="flex items-center gap-2"
                  >
                    <div className="p-1 rounded-full bg-blue-500/20">
                      <CheckCircle className="w-4 h-4 text-blue-400" />
                    </div>
                    <span className="text-sm text-gray-300">{feature}</span>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
          
          {/* Logos Container */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="relative"
          >
            {/* Container Header */}
            <div className="flex items-center gap-3 mb-8">
              <div className="h-px flex-grow bg-gradient-to-r from-transparent via-blue-500/30 to-transparent"></div>
              <h3 className="text-xl font-semibold text-center">Supported Equipment</h3>
              <div className="h-px flex-grow bg-gradient-to-r from-transparent via-blue-500/30 to-transparent"></div>
            </div>
            
            {/* Logos Grid */}
            <div className="relative p-8 rounded-2xl border border-white/10 bg-black/40 backdrop-blur-md">
              {/* Background Glow */}
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500/5 via-purple-500/5 to-blue-500/5 rounded-xl blur-xl" />
              
              {/* Logos */}
              <div className="relative grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
                {instruments.map((instrument, index) => (
                  <motion.div
                    key={instrument.name}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.5 + index * 0.1 }}
                    whileHover={{ scale: 1.05 }}
                    className="group"
                  >
                    <div className="relative bg-black/30 backdrop-blur-md p-5 rounded-xl border border-white/10 group-hover:border-blue-500/30 transition-all duration-300 h-32 flex flex-col items-center justify-center shadow-[0_0_15px_rgba(0,0,0,0.3)] group-hover:shadow-[0_0_25px_rgba(59,130,246,0.3)]">
                      {/* Logo */}
                      <div className="relative w-full h-16 mb-3">
                        <Image
                          src={instrument.logo}
                          alt={instrument.name}
                          fill
                          style={{ objectFit: 'contain' }}
                          className={`opacity-80 group-hover:opacity-100 transition-opacity duration-300 ${instrument.name !== "Keithley" ? "filter brightness-0 invert" : ""}`}
                        />
                      </div>
                      
                      {/* Name & Category */}
                      <div className="text-center">
                        <p className="text-sm font-medium text-white/90 group-hover:text-white transition-colors">{instrument.name}</p>
                        <p className="text-xs text-blue-300/80 mt-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300">{instrument.category}</p>
                      </div>
                      
                      {/* Hover Glow */}
                      <div className="absolute inset-0 bg-gradient-to-r from-blue-500/0 to-purple-500/0 group-hover:from-blue-500/10 group-hover:to-purple-500/10 rounded-xl blur-xl transition-all duration-500 opacity-0 group-hover:opacity-100" />
                    </div>
                  </motion.div>
                ))}
              </div>
              
              {/* Connection Lines */}
              <svg className="absolute inset-0 w-full h-full z-0 pointer-events-none" viewBox="0 0 1000 400">
                <motion.g
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 0.3 }}
                  transition={{ delay: 1, duration: 1 }}
                >
                  {/* Animated Flowing Lines */}
                  <path 
                    d="M0,200 C300,100 700,300 1000,200" 
                    stroke="url(#lineGradient)" 
                    strokeWidth="1" 
                    strokeDasharray="4,4"
                    fill="none"
                  />
                  <path 
                    d="M0,150 C250,250 750,150 1000,250" 
                    stroke="url(#lineGradient)" 
                    strokeWidth="1" 
                    strokeDasharray="4,4"
                    fill="none"
                  />
                  
                  {/* Animated Dots */}
                  <motion.circle
                    r="3"
                    fill="#3B82F6"
                    initial={{ opacity: 0 }}
                    animate={{
                      opacity: [0, 1, 0],
                      cx: [0, 1000],
                      cy: [200, 200]
                    }}
                    transition={{
                      duration: 8,
                      repeat: Infinity,
                      ease: "linear"
                    }}
                  />
                  <motion.circle
                    r="3"
                    fill="#8B5CF6"
                    initial={{ opacity: 0 }}
                    animate={{
                      opacity: [0, 1, 0],
                      cx: [1000, 0],
                      cy: [150, 150]
                    }}
                    transition={{
                      duration: 8,
                      repeat: Infinity,
                      ease: "linear",
                      delay: 4
                    }}
                  />
                </motion.g>
                <defs>
                  <linearGradient id="lineGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor="#3B82F6" stopOpacity="0.7" />
                    <stop offset="100%" stopColor="#8B5CF6" stopOpacity="0.7" />
                  </linearGradient>
                </defs>
              </svg>
            </div>
          </motion.div>
          
          {/* Categories */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.7 }}
            className="mt-12 mb-12"
          >
            <h3 className="text-lg font-semibold text-center mb-6">Supported Equipment Categories</h3>
            <div className="flex flex-wrap justify-center gap-3 max-w-4xl mx-auto">
              {categories.map((category, index) => (
                <motion.div
                  key={category}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.8 + index * 0.05 }}
                  className="px-4 py-2 rounded-full bg-white/5 border border-white/10 text-sm"
                >
                  {category}
                </motion.div>
              ))}
            </div>
          </motion.div>
          
          {/* CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.9 }}
            className="max-w-xl mx-auto text-center"
          >
            <p className="text-gray-400 mb-6">
              Don't see your equipment listed? Our platform is constantly expanding its compatibility. Contact us to learn more about specific integrations.
            </p>
            <Link 
              href="/contact" 
              className="inline-flex items-center gap-2 px-6 py-2.5 bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white rounded-full transition-all duration-300 hover:scale-105 shadow-[0_0_20px_rgba(59,130,246,0.3)] hover:shadow-[0_0_25px_rgba(59,130,246,0.5)]"
            >
              <span className="text-sm font-medium">Check Compatibility</span>
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
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

