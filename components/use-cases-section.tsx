'use client'

import { motion } from 'framer-motion'
import IndustryCard from './industry-card'

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
    stats: "10x accuracy"
  },
  {
    title: "Automotive",
    description: "Ensure reliability of automotive electronics and components. Meet strict industry standards with automated validation processes.",
    icon: "automotive" as const,
    stats: "100% compliance"
  },
  {
    title: "Research Labs",
    description: "Accelerate research with automated validation processes. Focus on innovation while we handle the repetitive testing.",
    icon: "research" as const,
    stats: "24/7 testing"
  }
]

export default function UseCasesSection() {
  return (
    <section className="relative overflow-hidden">
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
        <div className="text-center max-w-2xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-block rounded-full px-4 py-1.5 text-sm font-medium bg-white/5 border border-white/10 backdrop-blur-sm mb-4"
          >
            Who is it for?
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl md:text-4xl font-bold mb-6"
          >
            Accelerate Your Validation Process
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-gray-400 text-lg"
          >
            See how different industries use Atoms Testflow to accelerate their validation process
          </motion.p>
        </div>

        {/* Cards Grid */}
        <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {industries.map((industry, index) => (
            <IndustryCard
              key={industry.title}
              {...industry}
              index={index}
              href={`/${industry.title.toLowerCase().replace(' ', '-')}`}  // Add href prop
            />
          ))}
        </div>

        {/* Stats */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto">
          {[
            { label: 'Validation Time', value: '-85%' },
            { label: 'Success Rate', value: '99.9%' },
            { label: 'Time Saved', value: '1000h+' },
            { label: 'Companies', value: '500+' },
          ].map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: 0.3 + index * 0.1 }}
              className="relative group"
            >
              <div className="absolute inset-0 bg-gradient-to-b from-blue-500/5 to-purple-500/5 rounded-xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="relative text-center p-4 rounded-xl bg-white/[0.02] border border-white/10 backdrop-blur-sm">
                <div className="text-2xl font-bold text-blue-400 mb-1">{stat.value}</div>
                <div className="text-sm text-gray-400">{stat.label}</div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

