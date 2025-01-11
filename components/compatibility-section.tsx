'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import { Cable } from 'lucide-react'

const instruments = [
  {
    name: "Keysight Technologies",
    logo: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Keysight-WGHkAO3pgj7fWQzofc3rwmPQgV4xih.png",
    description: "Industry-leading electronic measurement solutions"
  },
  {
    name: "Rohde & Schwarz",
    logo: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Rohde.jpg-PiuCi8PZhIB3xCZdaafll7INjjJitv.jpeg",
    description: "Precision test and measurement equipment"
  },
  {
    name: "Tektronix",
    logo: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Tektronics-Ulx0EVWHxMMtequR9CRZBrad5wrcqx.jpeg",
    description: "Leading manufacturer of oscilloscopes and analyzers"
  },
  {
    name: "Keithley",
    logo: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/KEITHLEY-en48AXUy7PziRFyLfQy03i5ICkkBg5.png",
    description: "Precision electrical test instruments"
  },
  {
    name: "Binder",
    logo: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Binder-bY3YAR2AskEO73CW2Vw6v8NzHdNor4.png",
    description: "Environmental simulation systems"
  },
  {
    name: "Agilent Technologies",
    logo: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Agilent-Xbkj6jZ6hIueXwlKQvybbMt2FSiWn1.png",
    description: "Advanced measurement solutions"
  },
  {
    name: "Chroma",
    logo: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Chroma.jpg-Igz7zO9n8O5lMP4gXugrtZ4c63yUEb.jpeg",
    description: "Power and electrical testing equipment"
  }
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
            className="inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-sm font-medium bg-white/5 border border-white/10 backdrop-blur-sm mb-4"
          >
            <Cable className="w-4 h-4 text-blue-400" />
            Universal Compatibility
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl md:text-4xl font-bold mb-6"
          >
            Works with Leading Test Equipment
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-gray-400 text-lg max-w-2xl mx-auto"
          >
            Atoms Testflow seamlessly integrates with industry-standard instruments and testing equipment
          </motion.p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {instruments.map((instrument, index) => (
            <motion.div
              key={instrument.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ scale: 1.05 }}
              className="group relative"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 via-purple-500/10 to-transparent rounded-2xl blur-xl opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
              <div className="relative h-32 p-6 bg-white/5 hover:bg-white/[0.07] border border-white/10 hover:border-white/20 rounded-2xl backdrop-blur-sm transition-colors duration-300">
                <div className="absolute inset-0 flex items-center justify-center p-6">
                  <Image
                    src={instrument.logo}
                    alt={instrument.name}
                    width={200}
                    height={80}
                    className="w-full h-full object-contain transition-all duration-300 group-hover:scale-110"
                  />
                </div>
                <div className="absolute inset-0 p-4 flex items-end opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-gradient-to-t from-black/80 via-black/40 to-transparent rounded-2xl">
                  <div className="w-full">
                    <p className="text-sm font-medium text-white">{instrument.name}</p>
                    <p className="text-xs text-gray-400">{instrument.description}</p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="mt-16 max-w-xl mx-auto text-center"
        >
          <p className="text-gray-400">
            Our platform supports all major testing instruments and hardware platforms, ensuring seamless integration with your existing equipment.
          </p>
        </motion.div>
      </div>
    </section>
  )
}

