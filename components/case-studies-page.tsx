'use client'

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { SiteHeader } from "@/components/site-header"
import { ArrowRight, ChevronRight, Star, Check, BarChart3, Zap, Clock, Award, Download } from 'lucide-react'
import { motion } from 'framer-motion'
import Image from "next/image"
import { CaseStudyCard } from '@/components/case-studies/case-study-card'
import { FeaturedCaseStudy } from '@/components/case-studies/featured-case-study'
import { CTASection } from '@/components/case-studies/cta-section'
import { useState } from 'react'

// Industry filter options
const industries = [
  { value: 'all', label: 'All Industries' },
  { value: 'semiconductor', label: 'Semiconductor' },
  { value: 'electronics', label: 'Electronics' },
  { value: 'automotive', label: 'Automotive' },
  { value: 'research', label: 'Research Labs' }
]

export function CaseStudiesPage() {
  const [activeIndustry, setActiveIndustry] = useState('all')

  // Featured case study data
  const featuredCaseStudy = {
    title: "How Horizon Semiconductors Slashed Validation Time by 85%",
    description: "Horizon Semiconductors was developing next-generation 5nm AI accelerator chips but faced bottlenecks in their validation pipeline that threatened their market advantage. Learn how they transformed their validation process with Atoms TestFlow to achieve unprecedented efficiency.",
    industry: "Semiconductor",
    clientName: "Horizon Semiconductors",
    clientLogo: "/logos/horizon-semiconductors.svg",
    ctaText: "Read Full Case Study",
    ctaLink: "#",
    metrics: [
      { value: "85%", label: "Reduction in validation time" },
      { value: "64%", label: "Cost savings" },
      { value: "3.5x", label: "Faster time to market" }
    ],
    imageSrc: "https://9zog2la6l29pbfba.public.blob.vercel-storage.com/Tool%20Photo%20with%20humans-pTsgaiPajUSGimzCDl4ibwBqC3kqok.png"
  }

  // Case studies data
  const caseStudies = [
    {
      id: 'neurotronix-systems',
      title: "NeurotroNIX Systems Achieves 97% Test Automation",
      excerpt: "When designing their new line of neural interface chips, NeurotroNIX Systems faced a massive validation challenge with complex test cases that were slowing down their release cycle.",
      industry: "electronics",
      imageSrc: "/images/case-studies/neurotronix-systems.jpg",
      clientLogo: "/logos/neurotronix-systems.svg",
      results: ["97% automation rate", "76% fewer person-hours", "8-week reduction in time-to-market"],
      ctaText: "View Case Study",
      ctaLink: "#",
      featured: false
    },
    {
      id: 'quantum-dynamics',
      title: "Quantum Dynamics Cuts Validation Costs by 72%",
      excerpt: "Developing next-generation quantum processors required Quantum Dynamics to completely reimagine their validation strategy. See how TestFlow revolutionized their approach.",
      industry: "semiconductor",
      imageSrc: "/images/case-studies/quantum-dynamics.jpg",
      clientLogo: "/logos/quantum-dynamics.svg",
      results: ["72% cost reduction", "4x increase in test coverage", "Zero-compromise quality assurance"],
      ctaText: "View Case Study",
      ctaLink: "#",
      featured: false
    },
    {
      id: 'velocitron-automotive',
      title: "Velocitron Accelerates ADAS Validation by 10x",
      excerpt: "Velocitron's autonomous driving systems required millions of test scenarios to validate. Learn how they transformed a months-long process into days.",
      industry: "automotive",
      imageSrc: "/images/case-studies/velocitron-automotive.jpg",
      clientLogo: "/logos/velocitron-automotive.svg",
      results: ["10x faster validation cycles", "24/7 autonomous testing", "99.99% safety verification"],
      ctaText: "View Case Study",
      ctaLink: "#",
      featured: false
    },
    {
      id: 'apearc-labs',
      title: "APEARC Labs Achieves 99.8% Testing Precision",
      excerpt: "The APEARC Power Electronics Research division needed to validate next-gen power conversion systems with unprecedented precision while accelerating their research timeline.",
      industry: "research",
      imageSrc: "/images/case-studies/apearc-labs.jpg",
      clientLogo: "/logos/apearc-labs.svg",
      results: ["99.8% testing precision", "71% time reduction", "3.2x more research iterations"],
      ctaText: "View Case Study",
      ctaLink: "#",
      featured: false
    },
    {
      id: 'aurora-silica',
      title: "Aurora Silica Implements Continuous Validation Pipeline",
      excerpt: "Aurora Silica's cutting-edge photonic chips required a validation revolution. Their implementation of TestFlow created an integrated CI/CD validation pipeline that transformed their development cycle.",
      industry: "semiconductor",
      imageSrc: "/images/case-studies/aurora-silica.jpg",
      clientLogo: "/logos/aurora-silica.svg",
      results: ["Continuous validation integration", "92% faster feedback loops", "57% reduction in post-silicon defects"],
      ctaText: "View Case Study",
      ctaLink: "#",
      featured: false
    },
    {
      id: 'fusion-microlectronics',
      title: "Fusion Microelectronics Pioneers AI-Driven Testing",
      excerpt: "As a leader in specialized medical microelectronics, Fusion needed to validate devices with zero-tolerance for errors while accelerating their FDA approval process.",
      industry: "electronics",
      imageSrc: "/images/case-studies/fusion-microelectronics.jpg",
      clientLogo: "/logos/fusion-microelectronics.svg",
      results: ["82% validation time reduction", "Predictive anomaly detection", "FDA approval time cut by 35%"],
      ctaText: "View Case Study",
      ctaLink: "#",
      featured: false
    },
    {
      id: 'cyberdyne-systems',
      title: "CyberDyne Systems' ML Chip Validation Breakthrough",
      excerpt: "CyberDyne's neural processing units required 15,000+ test cases to validate. TestFlow's AI-driven approach turned months of validation into weeks.",
      industry: "semiconductor",
      imageSrc: "/images/case-studies/cyberdyne-systems.jpg",
      clientLogo: "/logos/cyberdyne-systems.svg",
      results: ["79% validation time reduction", "90% automation of corner cases", "First-pass silicon success"],
      ctaText: "View Case Study",
      ctaLink: "#",
      featured: false
    },
    {
      id: 'tesla-advanced-research',
      title: "Tesla Advanced Research Reinvents Battery Controller Testing",
      excerpt: "Tesla's next-generation battery management system needed revolutionary testing approaches to validate their innovations in extreme conditions and edge cases.",
      industry: "automotive",
      imageSrc: "/images/case-studies/tesla-advanced-research.jpg",
      clientLogo: "/logos/tesla-advanced-research.svg",
      results: ["94% reduction in safety incidents", "5x testing throughput", "87% faster iterations"],
      ctaText: "View Case Study",
      ctaLink: "#",
      featured: false
    }
  ]

  // Filter case studies based on active industry
  const filteredCaseStudies = activeIndustry === 'all' 
    ? caseStudies 
    : caseStudies.filter(study => study.industry === activeIndustry)

  return (
    <div className="min-h-screen bg-black text-white">
      <SiteHeader />

      {/* Hero Section */}
      <section className="relative pt-24 pb-16 overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]" />
          <div className="absolute top-0 -left-1/4 w-1/2 h-1/2 bg-gradient-to-br from-blue-500/10 via-transparent to-transparent rounded-full blur-3xl" />
          <div className="absolute bottom-0 -right-1/4 w-1/2 h-1/2 bg-gradient-to-tl from-purple-500/10 via-transparent to-transparent rounded-full blur-3xl" />
        </div>

        <div className="container mx-auto px-4 relative max-w-[1200px] w-full">
          <div className="max-w-3xl mx-auto text-center">
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-block rounded-full px-4 py-1.5 text-sm font-medium bg-gradient-to-r from-blue-500/10 to-purple-500/10 border border-blue-500/20 backdrop-blur-sm mb-8"
            >
              <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                Customer Success Stories
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-3xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-400 via-white to-purple-400 bg-clip-text text-transparent leading-[1.2] tracking-tight"
            >
              How Leading Companies Accelerate Validation with TestFlow
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-base md:text-lg text-gray-400 max-w-2xl mx-auto mb-8"
            >
              Discover how semiconductor and electronics companies are using Atoms TestFlow to reduce validation time, cut costs, and bring products to market faster.
            </motion.p>
          </div>
        </div>
      </section>

      {/* Featured Case Study */}
      <section className="py-16">
        <div className="container mx-auto px-4 max-w-[1200px]">
          <FeaturedCaseStudy {...featuredCaseStudy} />
        </div>
      </section>

      {/* All Case Studies */}
      <section className="py-16">
        <div className="container mx-auto px-4 max-w-[1200px]">
          <div className="flex flex-col md:flex-row justify-between items-center mb-10">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-2xl md:text-3xl font-bold"
            >
              Explore More Success Stories
            </motion.h2>

            {/* Industry Filter */}
            <div className="flex flex-wrap gap-2 mt-4 md:mt-0">
              {industries.map((industry) => (
                <button
                  key={industry.value}
                  onClick={() => setActiveIndustry(industry.value)}
                  className={`px-4 py-2 rounded-full text-sm transition-all duration-200 ${
                    activeIndustry === industry.value
                      ? 'bg-blue-500 text-white'
                      : 'bg-white/5 text-gray-300 hover:bg-white/10'
                  }`}
                >
                  {industry.label}
                </button>
              ))}
            </div>
          </div>

          {/* Case Studies Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredCaseStudies.map((caseStudy, index) => (
              <motion.div
                key={caseStudy.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <CaseStudyCard {...caseStudy} />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <CTASection />

      {/* Footer */}
      <footer className="border-t border-white/10">
        <div className="container px-4">
          {/* Main Footer Content */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 py-12">
            {/* Brand Column - Takes 2 columns */}
            <div className="lg:col-span-2 space-y-4">
              <Link href="/" className="text-xl font-bold block">
                Atoms Testflow
              </Link>
              <p className="text-gray-400 text-sm">
                The AI validation platform that accelerates your product launch.
              </p>
              <div className="flex gap-4">
                {[
                  { name: 'LinkedIn', icon: 'linkedin', href: 'https://linkedin.com/company/atomstestflow' },
                  { name: 'YouTube', icon: 'youtube', href: 'https://youtube.com' }
                ].map((social) => (
                  <Link
                    key={social.name}
                    href={social.href}
                    className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-white/10 transition-colors group"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <span className="sr-only">{social.name}</span>
                    <div className="w-5 h-5 text-gray-400 group-hover:text-white transition-colors">
                      {social.icon === 'linkedin' && <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect x="2" y="9" width="4" height="12"/><circle cx="4" cy="4" r="2"/></svg>}
                      {social.icon === 'youtube' && <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z"/><polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02"/></svg>}
                    </div>
                  </Link>
                ))}
              </div>
            </div>

            {/* Industries Links */}
            <div className="space-y-4">
              <h3 className="font-semibold text-lg">Industries</h3>
              <ul className="space-y-3">
                {[
                  { label: 'Semiconductor', href: '/semiconductor' },
                  { label: 'Electronics', href: '/electronics' },
                  { label: 'Automotive', href: '/automotive' },
                  { label: 'Research Labs', href: '/research-labs' }
                ].map((link) => (
                  <li key={link.label}>
                    <Link href={link.href} className="text-gray-400 hover:text-white transition-colors">
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Sections Links */}
            <div className="space-y-4">
              <h3 className="font-semibold text-lg">Sections</h3>
              <ul className="space-y-3">
                {[
                  { label: 'Solutions', href: '/#solutions' },
                  { label: 'TestFlow', href: '/#demo' },
                  { label: 'Features', href: '/#features' },
                  { label: 'Help Center', href: '/help-center' }
                ].map((link) => (
                  <li key={link.label}>
                    <Link href={link.href} className="text-gray-400 hover:text-white transition-colors">
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Newsletter - Takes 1 column */}
            <div className="space-y-4">
              <h3 className="font-semibold text-lg">Stay Updated</h3>
              <p className="text-sm text-gray-400">Subscribe to our newsletter for the latest updates and features.</p>
              <form className="space-y-2" onSubmit={(e) => {
                e.preventDefault()
                // Reset form
                const form = e.target as HTMLFormElement
                form.reset()
              }}>
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="w-full px-3 py-2 bg-white/5 border border-white/10 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm"
                  required
                />
                <button
                  type="submit"
                  className="w-full px-3 py-2 bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded-lg text-sm hover:from-blue-600 hover:to-purple-600 transition-all duration-200 hover:scale-[1.02] active:scale-[0.98]"
                >
                  Subscribe
                </button>
              </form>
            </div>
          </div>

          {/* Bottom Footer */}
          <div className="border-t border-white/10 py-6">
            <div className="flex flex-col md:flex-row justify-between items-center gap-4">
              <div className="flex flex-col md:flex-row gap-4 items-center">
                <p className="text-gray-400 text-sm">
                  © {new Date().getFullYear()} Atoms. All rights reserved.
                </p>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
} 