'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import { Cable } from 'lucide-react'

const instruments = [
  {
    name: "Keysight Technologies",
    logo: "/logos/Instruments Logos/keysight-logo.svg",
    category: "Test & Measurement"
  },
  {
    name: "Rohde & Schwarz",
    logo: "/logos/Instruments Logos/Rohde_&_Schwarz_Logo.svg.png",
    category: "RF & Microwave"
  },
  {
    name: "Tektronix",
    logo: "/logos/Instruments Logos/tektronix-logo.svg",
    category: "Oscilloscopes"
  },
  {
    name: "Keithley",
    logo: "/logos/Instruments Logos/Keithley_Instruments_Logo.svg",
    category: "Electrical Testing"
  },
  {
    name: "Agilent Technologies",
    logo: "/logos/Instruments Logos/agilent-technologies-1.svg",
    category: "Temperature Chambers"
  },
  {
    name: "Chroma",
    logo: "/logos/Instruments Logos/Chroma.png",
    category: "Power Testing"
  }
]

export function CompatibilitySection() {
  return (
    <>
      {/* Header Section */}
      <div className="text-center mb-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="inline-flex items-center gap-3 rounded-full px-6 py-2.5 text-sm font-medium bg-gradient-to-r from-blue-500/10 to-purple-500/10 border border-blue-500/20 backdrop-blur-sm mb-6"
        >
          <div className="w-8 h-8 rounded-full bg-gradient-to-r from-blue-400 to-purple-400 flex items-center justify-center">
            <Cable className="w-4 h-4 text-white" />
          </div>
          <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent font-semibold">
            Universal Compatibility
          </span>
        </motion.div>
        
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-2xl md:text-4xl lg:text-5xl font-bold mb-6 leading-tight"
        >
          Works with{' '}
          <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
            Leading Test Equipment
          </span>
        </motion.h2>
        
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="text-lg md:text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed"
        >
          Seamlessly integrate with industry-standard instruments from top manufacturers. Plug & play compatibility with automatic device detection.
        </motion.p>
      </div>

      {/* Main Content */}
      <div className="max-w-5xl mx-auto">
        {/* Equipment Logos - Main Focus */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="relative"
        >
          {/* Background glow effects */}
          <div className="absolute -inset-8 bg-gradient-to-r from-blue-500/10 via-purple-500/10 to-blue-500/10 rounded-3xl blur-3xl opacity-60" />
          <div className="absolute -inset-4 bg-gradient-to-r from-blue-500/20 via-purple-500/20 to-blue-500/20 rounded-2xl blur-2xl opacity-40" />
          
          {/* Main container */}
          <div className="relative p-12 rounded-3xl bg-white/[0.02] border border-white/10 backdrop-blur-sm">
            {/* Logos Grid */}
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-20">
              {instruments.map((instrument, index) => (
                <motion.div
                  key={instrument.name}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.4 + index * 0.1 }}
                  className="group flex flex-col items-center justify-center p-8 rounded-2xl hover:bg-white/[0.03] transition-all duration-300 hover:scale-105"
                >
                  <div className="flex items-center justify-center min-w-[140px] w-[140px] h-[60px]">
                    <img
                      src={instrument.logo}
                      alt={instrument.name}
                      className={`w-auto h-auto object-contain opacity-70 group-hover:opacity-100 transition-all duration-300 ${instrument.name !== "Keithley" ? "filter brightness-0 invert" : ""}`}
                      style={{ maxWidth: '100%', maxHeight: '60px' }}
                    />
                  </div>
                </motion.div>
              ))}
            </div>
            
            {/* Bottom text */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.8 }}
              className="text-center mt-12 pt-8 border-t border-white/10"
            >
              <p className="text-gray-400 text-lg">
                <span className="font-semibold text-white">200+</span> instruments supported and counting
              </p>
              <p className="text-gray-500 text-sm mt-2">
                Don't see your equipment? We're constantly expanding compatibility.
              </p>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </>
  )
}

