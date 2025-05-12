'use client'

import Image from "next/image"
import { ArrowRight } from 'lucide-react'
import { motion } from 'framer-motion'

interface FeaturedCaseStudyProps {
  title: string
  description: string
  industry: string
  clientName: string
  clientLogo: string
  ctaText: string
  ctaLink: string
  metrics: Array<{
    value: string
    label: string
  }>
  imageSrc: string
}

export function FeaturedCaseStudy({
  title,
  description,
  industry,
  clientName,
  clientLogo,
  ctaText,
  ctaLink,
  metrics,
  imageSrc
}: FeaturedCaseStudyProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="relative rounded-2xl overflow-hidden"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 via-purple-500/10 to-blue-500/5 opacity-50 blur-xl pointer-events-none" />
      
      <div className="relative p-8 bg-black/50 backdrop-blur-sm border border-white/10 rounded-2xl">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          {/* Left Content */}
          <div className="space-y-6">
            <div className="inline-block rounded-full px-3 py-1 text-xs font-medium bg-blue-500/10 border border-blue-500/20 text-blue-400">
              {industry}
            </div>
            
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold leading-tight">{title}</h2>
            
            <p className="text-gray-400">{description}</p>
            
            {/* Metrics */}
            <div className="grid grid-cols-3 gap-4 pt-4">
              {metrics.map((metric, index) => (
                <div key={index} className="text-center p-4 rounded-xl bg-white/[0.03] border border-white/10 hover:border-blue-500/20 transition-colors duration-300 group">
                  <div className="text-2xl font-bold text-blue-400 group-hover:scale-110 transition-transform">
                    {metric.value}
                  </div>
                  <div className="text-sm text-gray-400">{metric.label}</div>
                </div>
              ))}
            </div>
            
            {/* Client Info */}
            <div className="flex items-center gap-4">
              <div className="flex-shrink-0 w-12 h-12 rounded-full bg-white/10 p-2 flex items-center justify-center">
                {/* If clientLogo is available we'd display it here */}
                <div className="text-xl font-bold">{clientName.charAt(0)}</div>
              </div>
              <div>
                <div className="text-sm text-gray-400">Client</div>
                <div className="font-medium">{clientName}</div>
              </div>
            </div>
            
            {/* CTA */}
            <div
              className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-full hover:from-blue-600 hover:to-purple-700 transition-all duration-300 hover:scale-105 hover:shadow-[0_0_25px_rgba(79,70,229,0.4)] cursor-pointer"
            >
              {ctaText}
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </div>
          </div>
          
          {/* Right Image */}
          <div className="relative aspect-[4/3] rounded-xl overflow-hidden shadow-2xl">
            <Image
              src={imageSrc}
              alt={title}
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent" />
          </div>
        </div>
      </div>
    </motion.div>
  )
} 