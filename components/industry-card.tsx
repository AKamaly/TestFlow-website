'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { Cpu, Zap, Car, FlaskRoundIcon as Flask, ArrowRight } from 'lucide-react'

const icons = {
  semiconductor: Cpu,
  electronics: Zap,
  automotive: Car,
  research: Flask
} as const

interface IndustryCardProps {
  title: string
  description: string
  icon: keyof typeof icons
  stats?: string
  index: number
  href: string  // Add this line
}

export default function IndustryCard({ title, description, icon, stats = '20x faster', index, href }: IndustryCardProps) {
  const Icon = icons[icon]

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.3, delay: index * 0.1 }}
    >
      <div className="group h-full p-6 bg-black/40 backdrop-blur-sm border border-white/10 rounded-xl transition-all duration-300 hover:bg-white/[0.02] hover:border-white/20">
        {/* Header */}
        <div className="flex items-center justify-between mb-4">
          <div className="p-3 bg-blue-500/10 rounded-lg border border-blue-500/20">
            <Icon className="w-6 h-6 text-blue-400" />
          </div>
          <div className="flex items-center gap-2 text-sm">
            <span className="font-mono text-blue-400">{stats}</span>
            <span className="text-gray-500">validation</span>
          </div>
        </div>

        {/* Content */}
        <h3 className="text-xl font-semibold mb-2 text-white group-hover:text-blue-400 transition-colors">
          {title}
        </h3>
        <p className="text-gray-400 mb-4">
          {description}
        </p>

        {/* Footer */}
        <Link
          href={href}  // Change this line
          className="inline-flex items-center text-sm text-white group/link"
        >
          <span className="relative">
            Learn more
            <span className="absolute inset-x-0 -bottom-px h-px bg-gradient-to-r from-blue-400/0 via-blue-400 to-blue-400/0 opacity-0 group-hover/link:opacity-100 transition-opacity" />
          </span>
          <ArrowRight className="w-4 h-4 ml-2 transition-transform group-hover/link:translate-x-1" />
        </Link>
      </div>
    </motion.div>
  )
}

