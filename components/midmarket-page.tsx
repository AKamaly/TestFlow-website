'use client'

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Check, ArrowRight, Shield, Users, TrendingUp, Zap, Clock, DollarSign, Target, BarChart3, Settings, Lock, FileCheck, Globe, Phone, PlayCircle } from 'lucide-react'
import { motion } from 'framer-motion'
import Image from "next/image"
import { SiteHeader } from "@/components/site-header"
import { useState } from 'react'
import { SectionTracker, trackButtonClick, trackFormSubmission } from '@/components/analytics-tracker'
import { LogoCarousel } from '@/components/logo-carousel'
import { SiteFooter } from "@/components/site-footer"
import { VideoModal } from "@/components/video-modal"

export function MidmarketPage() {
  const [currentPhase, setCurrentPhase] = useState<'pilot' | 'rollout'>('pilot')
  const [expandedStep, setExpandedStep] = useState<string | null>(null)
  const [showSubscribeNotification, setShowSubscribeNotification] = useState(false)
  const [showVideoModal, setShowVideoModal] = useState(false)

  const features = [
    {
      icon: <DollarSign className="w-12 h-12 text-green-400" />,
      title: "Cost-Effective Validation Solution",
      description: "Get enterprise-grade validation capabilities at a fraction of the cost. Perfect for growing companies that need powerful testing without breaking the budget.",
      image: "/images/save-license-fees.png"
    },
    {
      icon: <Users className="w-12 h-12 text-blue-400" />,
      title: "Streamlined Team Workflows",
      description: "Optimize your validation team's productivity with integrated tools and automated workflows designed for midmarket efficiency.",
      image: "/images/stop-context-switching.png"
    },
    {
      icon: <TrendingUp className="w-12 h-12 text-purple-400" />,
      title: "Scale Without Additional Hires",
      description: "Grow your validation capacity without expanding your team. Our AI automation handles increased workload as your company scales.",
      image: "/images/save-headcount.png"
    },
    {
      icon: <Target className="w-12 h-12 text-orange-400" />,
      title: "Organize Your Chips Validation Across Your Team",
      description: "Implement industry best practices instantly with our pre-built validation templates and AI-guided workflows.",
      image: "/images/replicate-engineers.png"
    }
  ]

  const pilotSteps = [
    {
      number: 1,
      title: "Initial Assessment",
      description: "Quick assessment of your current validation processes and identification of optimization opportunities."
    },
    {
      number: 2,
      title: "Tailored Proposal",
      description: "Customized implementation plan designed specifically for midmarket needs and budget constraints."
    },
    {
      number: 3,
      title: "Team Pilot Launch",
      description: "Start with a focused pilot program involving key team members to demonstrate immediate value."
    }
  ]

  const rolloutSteps = [
    {
      number: 1,
      title: "Expansion Planning",
      description: "Strategic planning session to scale TestFlow across your entire validation organization efficiently."
    },
    {
      number: 2,
      title: "System Integration",
      description: "Seamless integration with your existing tools and workflows without disrupting current operations."
    },
    {
      number: 3,
      title: "Team Training Program",
      description: "Comprehensive but efficient training program designed for busy midmarket teams."
    },
    {
      number: 4,
      title: "Ongoing Support",
      description: "Dedicated support tailored to midmarket needs with responsive assistance and guidance."
    }
  ]

  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setShowSubscribeNotification(true)
    trackFormSubmission('newsletter', true, { page: 'midmarket' })
    // Reset form
    const form = e.target as HTMLFormElement
    form.reset()
  }

  return (
    <div className="min-h-screen bg-black text-white">
      <SiteHeader />
      
      {/* Section Trackers */}
      <SectionTracker sectionId="hero" sectionName="Midmarket Hero" />
      <SectionTracker sectionId="features" sectionName="Midmarket Features" />
      <SectionTracker sectionId="pilot-process" sectionName="Pilot Process" />
      <SectionTracker sectionId="cta" sectionName="Midmarket CTA" />

      {/* Hero Section */}
      <section className="overflow-hidden bg-white dark:bg-transparent">
        <div className="relative mx-auto max-w-5xl px-6 pt-40 pb-28 lg:pt-48 lg:pb-24">
          <div className="relative z-10 mx-auto max-w-2xl text-center">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 leading-tight tracking-tight text-black dark:text-white">
              AI validation platform{' '}
              <span className="bg-gradient-to-r from-pink-400 to-violet-500 bg-clip-text text-transparent">
                built for growing companies
              </span>
            </h1>
            <p className="mx-auto my-8 max-w-2xl text-xl text-gray-400">
              Discover how TestFlow helps mid-sized companies streamline their validation processes and accelerate time-to-market.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
              {/* Enhanced Get Started Button */}
              <Button asChild size="default" className="h-11 px-6 text-base group relative overflow-hidden">
                <Link 
                  href="/contact" 
                  onClick={() => trackButtonClick('Get Started', 'Midmarket Hero', { page: 'midmarket' })}
                  className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white rounded-full transition-all duration-300 hover:scale-105 hover:shadow-[0_0_30px_rgba(199,21,133,0.6)] flex items-center gap-2 relative z-10"
                >
                  {/* Button Background Glow */}
                  <div className="absolute inset-0 bg-gradient-to-r from-purple-400 to-pink-500 rounded-full blur-lg opacity-0 group-hover:opacity-50 transition-opacity duration-300 -z-10" />
                  
                  Get Started
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
                  
                  {/* Shimmer Effect */}
                  <div className="absolute inset-0 -skew-x-12 bg-gradient-to-r from-transparent via-white/20 to-transparent opacity-0 group-hover:opacity-100 group-hover:animate-shimmer" />
                </Link>
              </Button>
              
              {/* Enhanced Watch Demo Button */}
              <Button 
                variant="outline" 
                size="default" 
                className="h-11 px-6 text-base group relative overflow-hidden"
                onClick={() => {
                  setShowVideoModal(true)
                  trackButtonClick('Watch Demo', 'Midmarket Hero', { page: 'midmarket' })
                }}
              >
                <span className="rounded-full border-purple-500/30 hover:border-purple-500/60 hover:bg-purple-500/10 flex items-center gap-2 relative z-10 transition-all duration-300">
                  {/* Button Glow */}
                  <div className="absolute inset-0 bg-gradient-to-r from-purple-500/10 to-violet-500/10 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10" />
                  
                  <PlayCircle className="w-4 h-4" />
                  Watch Demo
                  
                  {/* Subtle shimmer */}
                  <div className="absolute inset-0 -skew-x-12 bg-gradient-to-r from-transparent via-white/10 to-transparent opacity-0 group-hover:opacity-100 group-hover:animate-shimmer" />
                </span>
              </Button>
            </div>
          </div>
        </div>

        <div className="mx-auto -mt-16 max-w-7xl [mask-image:linear-gradient(to_bottom,black_50%,transparent_100%)]">
          <div className="[perspective:1200px] [mask-image:linear-gradient(to_right,black_50%,transparent_100%)] -mr-16 pl-16 lg:-mr-56 lg:pl-56">
            <div className="[transform:rotateX(20deg);]">
              <div className="lg:h-[44rem] relative skew-x-[.36rad]">
                <img
                  className="rounded-[--radius] z-[2] relative border dark:hidden"
                  src="https://9zog2la6l29pbfba.public.blob.vercel-storage.com/Workflow%20builder%20AI%20powred.png"
                  alt="TestFlow Midmarket Platform - AI-Powered Validation"
                  width={2880}
                  height={2074}
                />
                <img
                  className="rounded-[--radius] z-[2] relative hidden border dark:block"
                  src="https://9zog2la6l29pbfba.public.blob.vercel-storage.com/Workflow%20builder%20AI%20powred.png"
                  alt="TestFlow Midmarket Platform - AI-Powered Validation"
                  width={2880}
                  height={2074}
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Logo Carousel Section - Matching Home Page */}
      <section className="py-12 bg-gradient-to-b from-black to-gray-900/30 border-b border-white/5">
        <div className="container mx-auto px-4 max-w-[1400px] w-full">
          <LogoCarousel />
        </div>
      </section>

      {/* Features Section - Matching Home Page Style */}
      <section className="relative py-20 md:py-32 overflow-hidden">
        <div className="container mx-auto px-4 relative max-w-[1400px] w-full">
          <div className="max-w-6xl mx-auto">
            {/* Section Header */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <motion.h2
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.1, type: "spring", stiffness: 100 }}
                className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 leading-tight relative"
              >
                <span className="bg-gradient-to-r from-purple-400 via-white to-violet-400 bg-clip-text text-transparent relative">
                  Scale Your Validation Team Seamlessly
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-purple-500/6 via-white/3 to-violet-500/6 blur-2xl -z-10 scale-110" />
              </motion.h2>
              <p className="text-lg md:text-xl text-gray-400 max-w-3xl mx-auto">
                Whether you're launching new products, expanding your validation capabilities, or optimizing your testing processes, our platform provides the flexibility and automation needed to support your growth.
              </p>
            </motion.div>

            {/* Features Grid */}
            <div className="grid md:grid-cols-2 gap-8">
              {features.map((feature, index) => (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="group relative rounded-3xl overflow-hidden bg-gradient-to-br from-gray-900/50 to-gray-800/30 backdrop-blur-xl border border-white/10 p-8 hover:border-purple-500/30 transition-all duration-500"
                >
                  <div className="flex items-start gap-6">
                    <div className="flex-shrink-0">
                      {feature.icon}
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-semibold mb-3 text-white group-hover:text-purple-400 transition-colors">
                        {feature.title}
                      </h3>
                      <p className="text-gray-400 leading-relaxed">
                        {feature.description}
                      </p>
                    </div>
                  </div>
                  
                  {/* Subtle hover glow */}
                  <div className="absolute inset-0 bg-gradient-to-r from-purple-500/5 to-violet-500/5 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Implementation Process Section */}
      <section className="relative py-20 md:py-32 overflow-hidden border-t border-white/10">
        <div className="container mx-auto px-4 relative max-w-[1400px] w-full">
          <div className="max-w-6xl mx-auto">
                {/* Header */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 leading-tight">
                <span className="bg-gradient-to-r from-purple-400 to-violet-400 bg-clip-text text-transparent">
                  Quick Start & Rapid Deployment
                    </span>
                  </h2>
              <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
                    Get up and running quickly with our streamlined onboarding process designed specifically for midmarket companies. No lengthy implementations or complex integrations.
                  </p>
                </motion.div>

            {/* Process Steps */}
                <div className="grid md:grid-cols-2 gap-16">
              {/* Phase 1: Quick Start */}
                  <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="space-y-6"
                  >
                <h3 className="text-3xl font-bold text-purple-400">Phase 1: Quick Start</h3>
                    <div className="space-y-4">
                      {pilotSteps.map((step) => (
                        <motion.div
                          key={step.number}
                      className="group bg-gradient-to-br from-gray-900/50 to-gray-800/30 backdrop-blur-xl border border-white/10 rounded-xl p-6 hover:border-purple-500/30 transition-all duration-300"
                          initial={false}
                        >
                      <div className="flex items-start gap-4">
                        <div className="w-8 h-8 rounded-full bg-purple-500/20 border border-purple-500/30 flex items-center justify-center text-sm font-medium text-purple-400">
                                {step.number}
                              </div>
                        <div>
                          <h4 className="font-semibold text-white mb-2">{step.title}</h4>
                          <p className="text-gray-400 text-sm">{step.description}</p>
                            </div>
                            </div>
                        </motion.div>
                      ))}
                    </div>
                  </motion.div>

              {/* Phase 2: Scale Up */}
                  <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="space-y-6"
                  >
                <h3 className="text-3xl font-bold text-violet-400">Phase 2: Scale Up</h3>
                    <div className="space-y-4">
                      {rolloutSteps.map((step) => (
                        <motion.div
                          key={step.number}
                      className="group bg-gradient-to-br from-gray-900/50 to-gray-800/30 backdrop-blur-xl border border-white/10 rounded-xl p-6 hover:border-violet-500/30 transition-all duration-300"
                          initial={false}
                        >
                      <div className="flex items-start gap-4">
                        <div className="w-8 h-8 rounded-full bg-violet-500/20 border border-violet-500/30 flex items-center justify-center text-sm font-medium text-violet-400">
                                {step.number}
                              </div>
                        <div>
                          <h4 className="font-semibold text-white mb-2">{step.title}</h4>
                          <p className="text-gray-400 text-sm">{step.description}</p>
                            </div>
                            </div>
                        </motion.div>
                      ))}
                    </div>
                  </motion.div>
                </div>

                {/* CTA Button */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  className="flex justify-center mt-16"
                >
              <Button asChild size="lg" className="h-14 px-8 text-lg font-semibold group relative overflow-hidden">
                    <Link 
                      href="/contact"
                  onClick={() => trackButtonClick('Talk to Sales', 'Implementation Process', { page: 'midmarket' })}
                  className="bg-gradient-to-r from-purple-500 to-violet-600 text-white hover:from-purple-600 hover:to-violet-700 rounded-full flex items-center gap-2 relative z-10"
                    >
                  <div className="absolute inset-0 bg-gradient-to-r from-purple-400 to-violet-500 rounded-full blur-lg opacity-0 group-hover:opacity-50 transition-opacity duration-300 -z-10" />
                      Talk to Sales
                      <ArrowRight className="w-5 h-5" />
                  <div className="absolute inset-0 -skew-x-12 bg-gradient-to-r from-transparent via-white/20 to-transparent opacity-0 group-hover:opacity-100 group-hover:animate-shimmer" />
                    </Link>
                  </Button>
                </motion.div>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="relative overflow-hidden py-0 md:py-8">
        {/* Seamless background connection */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]" />
          <div className="absolute top-0 -left-1/4 w-1/2 h-1/2 bg-gradient-to-br from-purple-500/6 via-transparent to-transparent rounded-full blur-3xl" />
          <div className="absolute bottom-0 -right-1/4 w-1/2 h-1/2 bg-gradient-to-tl from-violet-500/6 via-transparent to-transparent rounded-full blur-3xl" />
          </div>

        <div className="container mx-auto px-4 max-w-[1400px] w-full relative">
          {/* Enhanced minimalist container */}
          <div className="relative rounded-3xl overflow-hidden bg-black/40 backdrop-blur-xl border border-white/10 shadow-2xl">
            {/* Subtle background effects */}
            <div className="absolute inset-0 bg-gradient-to-r from-purple-500/6 via-violet-500/6 to-purple-500/6" />
            <div className="absolute -inset-2 bg-gradient-to-r from-purple-500/10 via-violet-500/10 to-purple-500/10 rounded-3xl blur-xl opacity-20" />
            
            <div className="relative grid lg:grid-cols-2 gap-8 lg:gap-12 items-center p-8 md:p-12 lg:p-16">
              {/* Left Content */}
              <motion.div
                initial={{ opacity: 0, x: -40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="space-y-8"
              >
                <motion.h2
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.1 }}
                  className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight"
                >
                  Ready to transform your{' '}
                  <span className="bg-gradient-to-r from-purple-400 to-violet-400 bg-clip-text text-transparent">
                    validation process?
                  </span>
                </motion.h2>
                
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 }}
                  className="text-lg text-gray-300 leading-relaxed max-w-lg"
                >
                  Join leading companies who trust Atoms TestFlow to validate their products faster and more efficiently.
                </motion.div>

                {/* Enhanced trust indicators */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.25 }}
                  className="flex items-center gap-6 text-sm text-gray-400"
                >
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
                    <span>200+ Engineers</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-purple-400 animate-pulse" />
                    <span>70% Time Saved</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-pink-400 animate-pulse" />
                    <span>30-Day Trial</span>
                  </div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 }}
                  className="flex flex-col sm:flex-row gap-4"
                >
                  <Link 
                    href="/contact" 
                    onClick={() => trackButtonClick('Get Started', 'Final CTA', { page: 'midmarket' })}
                    className="group relative bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white rounded-full transition-all duration-300 hover:scale-105 hover:shadow-[0_0_30px_rgba(199,21,133,0.5)] flex items-center justify-center gap-3 h-14 px-10 text-xl font-semibold w-fit"
                  >
                    {/* Enhanced button glow */}
                    <div className="absolute inset-0 bg-gradient-to-r from-purple-400/20 to-pink-400/20 rounded-full blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10" />
                    
                    Get Started
                    <motion.div
                      animate={{
                        x: [0, 6, 0]
                      }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                        ease: "easeInOut"
                      }}
                      className="flex items-center"
                    >
                      <ArrowRight className="w-6 h-6" />
                    </motion.div>
                  </Link>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.4 }}
                  className="flex items-center gap-6 pt-4"
                >
                  <div className="flex items-center gap-2 text-sm text-gray-400">
                    <Check className="w-4 h-4 text-green-400" />
                    <span>AI-Powered Automation</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-gray-400">
                    <Check className="w-4 h-4 text-green-400" />
                    <span>Universal Compatibility</span>
                  </div>
                </motion.div>
              </motion.div>

              {/* Right Image Container */}
              <motion.div
                initial={{ opacity: 0, x: 40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="flex items-center justify-center"
              >
                {/* Image with layered effects */}
                <div className="relative">
                  <div className="absolute inset-0 bg-gradient-to-r from-purple-500/8 via-violet-500/8 to-purple-500/8 rounded-[2rem] blur-2xl transform rotate-3" />
                  <div className="absolute inset-0 bg-gradient-to-r from-violet-500/8 via-purple-500/8 to-violet-500/8 rounded-[2rem] blur-2xl transform -rotate-3" />
                  <div className="relative">
                    <div className="absolute inset-0 bg-gradient-to-r from-purple-500/15 to-violet-500/15 rounded-[1.75rem] transform translate-x-2 translate-y-2" />
                    <div className="relative w-80 h-80 md:w-96 md:h-96 rounded-[1.75rem] overflow-hidden border-2 border-white/10 shadow-2xl transform hover:scale-[1.01] transition-transform duration-500">
                      <Image
                        src="/images/TestFlow CTA Image .webp"
                        alt="TestFlow Platform Interface"
                        fill
                        className="object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-black/20 to-transparent" />
                    </div>
                  </div>
                  <div className="absolute -top-5 -right-5 bg-gradient-to-br from-purple-500 to-violet-500 rounded-full p-1 shadow-lg transform hover:scale-105 transition-transform">
                    <div className="bg-black rounded-full p-2.5">
                      <ArrowRight className="w-5 h-5 text-white" />
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      <SiteFooter />

      <VideoModal 
        isOpen={showVideoModal}
        onClose={() => setShowVideoModal(false)}
      />

      {/* Custom CSS for animations */}
      <style jsx>{`
        @keyframes shimmer {
          0% { transform: translateX(-100%) skewX(-12deg); }
          100% { transform: translateX(200%) skewX(-12deg); }
        }
        
        .animate-shimmer {
          animation: shimmer 1.5s ease-out;
        }
        
        /* Smooth scrolling */
        html {
          scroll-behavior: smooth;
        }
      `}</style>
    </div>
  )
} 