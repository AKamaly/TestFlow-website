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
  href: string
}

export default function IndustryCard({ title, description, icon, stats = '20x faster', index, href }: IndustryCardProps) {
  const Icon = icons[icon]

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.3, delay: index * 0.1 }}
      className="h-full"
    >
      <div className="group h-full relative overflow-hidden">
        {/* Background glow effect */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-500/0 via-blue-500/0 to-purple-500/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-xl" />
        
        {/* Card content */}
        <div className="relative h-full p-6 bg-black/40 backdrop-blur-sm border border-white/10 rounded-xl transition-all duration-300 hover:bg-white/[0.03] hover:border-white/20 hover:shadow-[0_0_30px_rgba(59,130,246,0.15)] z-10">
          {/* Animated corner accent */}
          <div className="absolute top-0 right-0 w-20 h-20 overflow-hidden">
            <div className="absolute top-0 right-0 w-[140%] h-[140%] bg-gradient-to-bl from-blue-500/20 via-purple-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 transform rotate-45 translate-x-1/2 -translate-y-1/2" />
          </div>
          
          {/* Header */}
          <div className="flex items-center justify-between mb-6">
            <motion.div 
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
              className="p-3 bg-gradient-to-br from-blue-500/20 to-purple-500/10 rounded-lg border border-blue-500/30 group-hover:border-blue-500/50 transition-colors"
            >
              <Icon className="w-6 h-6 text-blue-400 group-hover:text-blue-300 transition-colors" />
            </motion.div>
            <div className="flex items-center gap-2 text-sm">
              <span className="font-mono text-blue-400 group-hover:text-blue-300 transition-colors">{stats}</span>
              <span className="text-gray-500">validation</span>
            </div>
          </div>

          {/* Content */}
          <h3 className="text-xl font-semibold mb-3 text-white group-hover:text-blue-400 transition-colors">
            {title}
          </h3>
          <p className="text-gray-400 mb-6 group-hover:text-gray-300 transition-colors">
            {description}
          </p>

          {/* Footer */}
          <div className="mt-auto">
            <Link
              href={href}
              className="inline-flex items-center text-sm text-white group/link"
            >
              <span className="relative">
                Learn more
                <span className="absolute inset-x-0 -bottom-px h-px bg-gradient-to-r from-blue-400/0 via-blue-400 to-blue-400/0 opacity-0 group-hover/link:opacity-100 transition-opacity" />
              </span>
              <motion.div
                animate={{ x: [0, 0] }}
                whileHover={{ x: 4 }}
                transition={{ duration: 0.2 }}
              >
                <ArrowRight className="w-4 h-4 ml-2" />
              </motion.div>
            </Link>
          </div>
        </div>
      </div>
    </motion.div>
  )
}

