'use client'

import { motion } from 'framer-motion'
import IndustryCard from './industry-card'
import { ArrowRight } from 'lucide-react'
import Link from 'next/link'

const industries = [
  {
    title: "Semiconductor",
    description: "Validate chips and integrated circuits with automated testing workflows. Reduce validation time by up to 95% with our intelligent automation.",
    icon: "semiconductor" as const,
    stats: "95% faster"
  },
  {
    title: "Electronics",
    description: "Streamline validation for consumer and industrial electronics. Automate complex testing scenarios and reduce human error.",
    icon: "electronics" as const,
    stats: "10x accuracy",
    href: "/electronics"
  },
  {
    title: "Automotive",
    description: "Ensure reliability of automotive electronics and components. Meet strict industry standards with automated validation processes.",
    icon: "automotive" as const,
    stats: "100% compliance",
    href: "/automotive"
  },
  {
    title: "Research Labs",
    description: "Accelerate research with automated validation processes. Focus on innovation while we handle the repetitive testing.",
    icon: "research" as const,
    stats: "24/7 testing",
    href: "/research-labs"
  }
]

export default function UseCasesSection() {
  return (
    <section className="relative overflow-hidden py-16">
      {/* Animated background elements */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Grid pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:14px_14px]" />

        {/* Animated gradient orbs */}
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
          className="absolute top-0 -left-1/4 w-1/2 h-1/2 bg-gradient-to-br from-blue-500/10 via-transparent to-transparent rounded-full blur-3xl"
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
          className="absolute bottom-0 -right-1/4 w-1/2 h-1/2 bg-gradient-to-tl from-purple-500/10 via-transparent to-transparent rounded-full blur-3xl"
        />

        {/* Radial gradient overlay */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_800px_at_50%_50%,rgba(0,0,0,0),rgba(0,0,0,0.8))]" />
      </div>

      <div className="container relative z-10 px-4">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-block rounded-full px-4 py-1.5 text-sm font-medium bg-gradient-to-r from-blue-500/10 to-purple-500/10 border border-blue-500/20 backdrop-blur-sm mb-4"
          >
            <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              Who is it for?
            </span>
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-white via-white to-white/80 bg-clip-text text-transparent"
          >
            Accelerate Your Validation Process
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-xl text-gray-400"
          >
            See how different industries use Atoms Testflow to accelerate their validation process
          </motion.p>
        </div>

        {/* Cards Grid */}
        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {industries.map((industry, index) => (
            <IndustryCard
              key={industry.title}
              {...industry}
              index={index}
              href={`/${industry.title.toLowerCase().replace(' ', '-')}`}
            />
          ))}
        </div>

        {/* Get Started Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6 }}
          className="flex justify-center mt-10"
        >
          <Link 
            href="/contact" 
            className="group inline-flex items-center gap-2 px-6 py-2.5 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white transition-all duration-300 hover:scale-105 hover:shadow-[0_0_25px_rgba(59,130,246,0.4)]"
          >
            <span className="text-sm font-medium">Get Started</span>
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

        {/* Stats section removed as requested */}
      </div>
    </section>
  )
}

