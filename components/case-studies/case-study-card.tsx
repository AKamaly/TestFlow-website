'use client'

import Image from "next/image"
import { ArrowRight, Check } from 'lucide-react'

interface CaseStudyCardProps {
  id: string
  title: string
  excerpt: string
  industry: string
  imageSrc: string
  clientLogo: string
  results: string[]
  ctaText: string
  ctaLink: string
  featured: boolean
}

export function CaseStudyCard({
  id,
  title,
  excerpt,
  industry,
  imageSrc,
  clientLogo,
  results,
  ctaText,
  ctaLink,
  featured
}: CaseStudyCardProps) {
  return (
    <div className="group h-full">
      <div className="block h-full">
        <div className="relative rounded-xl overflow-hidden h-full border border-white/10 hover:border-blue-500/30 transition-all duration-300 bg-white/[0.01] hover:bg-white/[0.03]">
          {/* Featured Badge */}
          {featured && (
            <div className="absolute top-4 right-4 z-10 bg-blue-500/80 text-white text-xs font-medium px-3 py-1 rounded-full backdrop-blur-sm">
              Featured
            </div>
          )}
          
          {/* Image */}
          <div className="relative aspect-[16/9] overflow-hidden">
            {/* Fallback image placeholder */}
            <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-purple-500/20" />
            
            {/* When we have proper images, we'd use this */}
            <div className="absolute inset-0 flex items-center justify-center text-xl font-bold text-white/70">
              {title.split(' ')[0]}
            </div>
            
            <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent" />
          </div>
          
          {/* Content */}
          <div className="p-6 space-y-4">
            {/* Industry Badge */}
            <div className="inline-block rounded-full px-3 py-1 text-xs font-medium bg-white/5 text-blue-400 border border-blue-500/20">
              {industry.charAt(0).toUpperCase() + industry.slice(1)}
            </div>
            
            <h3 className="text-lg font-bold group-hover:text-blue-400 transition-colors duration-300">{title}</h3>
            
            <p className="text-sm text-gray-400 line-clamp-2">{excerpt}</p>
            
            {/* Results */}
            <div className="space-y-2 py-2">
              {results.slice(0, 3).map((result, index) => (
                <div key={index} className="flex items-start gap-2 text-sm">
                  <Check className="w-4 h-4 text-green-400 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-300">{result}</span>
                </div>
              ))}
            </div>
            
            {/* CTA */}
            <div className="flex items-center gap-2 text-blue-400 group-hover:text-blue-300 transition-colors mt-4">
              <span className="text-sm font-medium">{ctaText}</span>
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
} 