'use client'

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Check, ArrowRight, Shield, Users, TrendingUp, Zap, Clock, DollarSign, Target, BarChart3, Settings, Lock, FileCheck, Globe, Phone } from 'lucide-react'
import Image from "next/image"
import { motion } from 'framer-motion'
import { SiteHeader } from "@/components/site-header"
import { useState } from 'react'
import { SectionTracker, trackButtonClick, trackFormSubmission } from '@/components/analytics-tracker'
import { LogoCarousel } from '@/components/logo-carousel'

export function MidmarketPage() {
  const [currentPhase, setCurrentPhase] = useState<'pilot' | 'rollout'>('pilot')
  const [expandedStep, setExpandedStep] = useState<string | null>(null)
  const [showSubscribeNotification, setShowSubscribeNotification] = useState(false)

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
      {/* Background Elements */}
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]" />
        <div className="absolute top-0 -left-1/4 w-1/2 h-1/2 bg-gradient-to-br from-blue-500/10 via-transparent to-transparent rounded-full blur-3xl" />
        <div className="absolute bottom-0 -right-1/4 w-1/2 h-1/2 bg-gradient-to-tl from-purple-500/10 via-transparent to-transparent rounded-full blur-3xl" />
      </div>

      <SiteHeader />
      
      {/* Section Trackers */}
      <SectionTracker sectionId="hero" sectionName="Midmarket Hero" />
      <SectionTracker sectionId="features" sectionName="Midmarket Features" />
      <SectionTracker sectionId="pilot-process" sectionName="Pilot Process" />
      <SectionTracker sectionId="security" sectionName="Security" />
      <SectionTracker sectionId="cta" sectionName="Midmarket CTA" />

      {/* Hero Section - Enhanced with stunning visuals */}
      <section className="relative pt-20 pb-0 md:pt-24 md:pb-0 overflow-hidden">
        {/* Enhanced Background Elements */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:32px_32px]" />
          <div className="absolute top-0 -left-1/4 w-3/4 h-3/4 bg-gradient-to-br from-purple-500/25 via-violet-500/20 to-transparent rounded-full blur-3xl animate-pulse" />
          <div className="absolute bottom-0 -right-1/4 w-3/4 h-3/4 bg-gradient-to-tl from-violet-500/25 via-purple-500/20 to-transparent rounded-full blur-3xl animate-pulse" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(147,51,234,0.12),transparent_70%)]" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-gradient-to-r from-transparent via-purple-500/5 to-transparent blur-3xl" />
          
          {/* Enhanced floating particles */}
          <div className="absolute top-1/4 left-1/4 w-3 h-3 bg-purple-400/40 rounded-full animate-bounce shadow-[0_0_20px_rgba(147,51,234,0.6)]" style={{ animationDelay: '0s', animationDuration: '3s' }} />
          <div className="absolute top-1/3 right-1/3 w-2 h-2 bg-violet-400/50 rounded-full animate-bounce shadow-[0_0_15px_rgba(139,92,246,0.5)]" style={{ animationDelay: '1s', animationDuration: '4s' }} />
          <div className="absolute bottom-1/3 left-1/3 w-2.5 h-2.5 bg-purple-300/40 rounded-full animate-bounce shadow-[0_0_18px_rgba(196,181,253,0.4)]" style={{ animationDelay: '2s', animationDuration: '5s' }} />
          <div className="absolute top-2/3 right-1/4 w-1.5 h-1.5 bg-violet-300/60 rounded-full animate-bounce shadow-[0_0_12px_rgba(196,181,253,0.7)]" style={{ animationDelay: '3s', animationDuration: '6s' }} />
        </div>

        <div className="container mx-auto px-4 relative max-w-[1400px] w-full">
          <div className="max-w-4xl mx-auto text-center">
            {/* Enhanced Badge with Purple Glassy Effect */}
            <motion.div
              initial={{ opacity: 0, y: 20, scale: 0.8 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.6, type: "spring", stiffness: 200 }}
              className="inline-block rounded-full px-8 py-3 text-sm font-medium bg-gradient-to-r from-purple-500/20 via-violet-500/15 to-purple-500/20 border border-purple-400/40 backdrop-blur-2xl mb-8 shadow-[0_8px_32px_rgba(147,51,234,0.25)] hover:shadow-[0_12px_40px_rgba(147,51,234,0.4)] transition-all duration-500 hover:scale-105"
            >
              <span className="bg-gradient-to-r from-purple-300 via-violet-300 to-purple-400 bg-clip-text text-transparent font-bold text-base">
                ✨ Midmarket-Optimized AI Platform
              </span>
              <div className="absolute inset-0 rounded-full bg-gradient-to-r from-purple-500/10 via-transparent to-violet-500/10 blur-xl" />
            </motion.div>

            {/* Enhanced Main Headline with Purple Gradients */}
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1, ease: "easeOut" }}
              className="text-3xl md:text-4xl lg:text-6xl font-bold mb-8 leading-[1.05] tracking-tight"
            >
              <span className="block text-white drop-shadow-2xl">AI Validation Platform</span>
              <span className="block bg-gradient-to-r from-purple-400 via-violet-300 to-purple-500 bg-clip-text text-transparent animate-gradient-x drop-shadow-2xl">
                Built for Growing Companies
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-purple-500/20 via-violet-500/20 to-purple-500/20 blur-3xl -z-10" />
            </motion.h1>

            {/* Enhanced Subheading with Purple Accents */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-lg md:text-xl text-gray-300 max-w-4xl mx-auto mb-10 leading-relaxed font-light"
            >
              TestFlow delivers enterprise-grade validation capabilities designed specifically for midmarket companies. 
              <span className="text-purple-300 font-medium bg-gradient-to-r from-purple-300 to-violet-300 bg-clip-text text-transparent"> Scale your testing operations efficiently without the enterprise complexity or cost.</span>
            </motion.p>

            {/* Enhanced CTA Section with Purple Gradients */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="flex flex-col sm:flex-row gap-6 justify-center mb-16 max-w-lg mx-auto"
            >
              <Button asChild size="lg" className="h-16 px-10 text-lg font-semibold group relative overflow-hidden">
                <Link 
                  href="/contact" 
                  onClick={() => trackButtonClick('Get Started', 'Midmarket Hero', { page: 'midmarket' })}
                  className="bg-gradient-to-r from-purple-500 via-violet-500 to-purple-600 text-white rounded-full transition-all duration-500 hover:scale-110 hover:shadow-[0_0_40px_rgba(147,51,234,0.6)] flex items-center gap-3 relative z-10"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-purple-600 via-violet-600 to-purple-700 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-full" />
                  <span className="relative z-10">Get Started</span>
                  <motion.div
                    animate={{ x: [0, 4, 0] }}
                    transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                    className="relative z-10"
                  >
                    <ArrowRight className="w-5 h-5" />
                  </motion.div>
                </Link>
              </Button>
              
              <Button 
                variant="outline" 
                size="lg" 
                className="h-16 px-10 text-lg font-semibold rounded-full border-2 border-purple-500/40 hover:border-purple-400/60 hover:bg-purple-500/10 backdrop-blur-sm transition-all duration-500 hover:scale-105 hover:shadow-[0_0_30px_rgba(147,51,234,0.3)] group relative overflow-hidden"
                onClick={() => {
                  // Add video modal functionality later
                  trackButtonClick('Watch Demo', 'Midmarket Hero', { page: 'midmarket' })
                }}
              >
                <div className="absolute inset-0 bg-gradient-to-r from-purple-500/5 via-violet-500/5 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-full" />
                <svg className="w-5 h-5 mr-3 relative z-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.828 14.828a4 4 0 01-5.656 0M9 10h1m4 0h1m-6 4h1m4 0h1m-6-8h8a2 2 0 012 2v8a2 2 0 01-2 2H8a2 2 0 01-2-2V8a2 2 0 012-2z" />
                </svg>
                <span className="relative z-10">Watch Demo</span>
              </Button>
            </motion.div>

            {/* Enhanced Stats/Trust Indicators with Purple Accents */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="flex flex-wrap justify-center gap-8 mb-16 text-sm text-gray-400"
            >
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-purple-400 rounded-full animate-pulse shadow-[0_0_10px_rgba(147,51,234,0.6)]" />
                <span>Perfect for growing companies</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-violet-400 rounded-full animate-pulse shadow-[0_0_10px_rgba(139,92,246,0.6)]" />
                <span>Enterprise features, midmarket price</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-purple-400 rounded-full animate-pulse shadow-[0_0_10px_rgba(147,51,234,0.6)]" />
                <span>Quick implementation</span>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Enhanced Full-width Image Banner with Purple Gradients */}
        <motion.div
          initial={{ opacity: 0, y: 60, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 1, delay: 0.6, ease: "easeOut" }}
          className="relative w-full"
        >
          {/* Multiple layered background effects with purple theme */}
          <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent z-10" />
          <div className="absolute inset-0 bg-gradient-to-r from-purple-500/15 via-transparent to-violet-500/15 z-10" />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-purple-500/5 to-transparent z-10" />
          
          {/* Enhanced image container with glassy effects */}
          <div className="relative w-full h-[400px] md:h-[500px] lg:h-[600px] overflow-hidden">
            {/* Animated border effect with purple gradients */}
            <div className="absolute inset-0 bg-gradient-to-r from-purple-500/40 via-violet-500/40 to-purple-500/40 animate-gradient-x opacity-60 blur-sm" />
            <div className="absolute inset-0 bg-gradient-to-b from-purple-500/20 via-transparent to-violet-500/20 blur-lg" />
            
            <Image
              src="/images/Hero graphic.png"
              alt="TestFlow Midmarket Platform - AI-Powered Validation"
              fill
              className="object-cover w-full h-full relative z-20 hover:scale-105 transition-transform duration-700"
              priority
            />
            
            {/* Enhanced floating UI elements overlay with purple theme */}
            <div className="absolute inset-0 z-30 pointer-events-none">
              <motion.div
                animate={{ y: [0, -15, 0], opacity: [0.6, 1, 0.6] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="absolute top-1/4 left-1/4 w-6 h-6 bg-purple-400/70 rounded-full blur-sm shadow-[0_0_20px_rgba(147,51,234,0.8)]"
              />
              <motion.div
                animate={{ y: [0, 20, 0], opacity: [0.5, 1, 0.5] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                className="absolute top-1/3 right-1/4 w-4 h-4 bg-violet-400/70 rounded-full blur-sm shadow-[0_0_15px_rgba(139,92,246,0.7)]"
              />
              <motion.div
                animate={{ y: [0, -12, 0], opacity: [0.4, 1, 0.4] }}
                transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 2 }}
                className="absolute bottom-1/3 left-1/3 w-3 h-3 bg-purple-300/70 rounded-full blur-sm shadow-[0_0_18px_rgba(196,181,253,0.6)]"
              />
              <motion.div
                animate={{ y: [0, 18, 0], opacity: [0.7, 1, 0.7] }}
                transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
                className="absolute top-2/3 right-1/3 w-2 h-2 bg-violet-300/80 rounded-full blur-sm shadow-[0_0_12px_rgba(196,181,253,0.9)]"
              />
            </div>
            
            {/* Glassy overlay effect */}
            <div className="absolute inset-0 z-25 bg-gradient-to-t from-black/30 via-purple-500/5 to-transparent backdrop-blur-[0.5px]" />
          </div>
        </motion.div>
      </section>

      {/* Logo Carousel Section */}
      <section className="py-12 bg-gradient-to-b from-black to-gray-900/30 border-b border-white/5">
        <div className="container mx-auto px-4 max-w-[1400px] w-full">
          <LogoCarousel />
        </div>
      </section>

      {/* New Card Section */}
      <section className="relative py-20 md:py-32 overflow-hidden">
        <div className="container mx-auto px-4 relative max-w-[1400px] w-full">
          <div className="max-w-7xl mx-auto">
            {/* Card Container */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="relative"
            >
              {/* Background blur effects */}
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 via-purple-500/10 to-blue-500/10 rounded-3xl blur-3xl opacity-30" />
              
              {/* Main Card */}
              <div className="relative rounded-3xl overflow-hidden bg-gradient-to-br from-gray-900/50 to-gray-800/30 backdrop-blur-xl border border-white/10 p-8 md:p-12">
                <div className="grid lg:grid-cols-7 gap-8 lg:gap-12 items-center">
                  {/* Left Side - Image */}
                  <motion.div
                    initial={{ opacity: 0, x: -40 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    className="relative lg:col-span-4"
                  >
                    <div className="relative aspect-[5/3] rounded-2xl overflow-hidden">
                      <Image
                        src="/images/productivity.png"
                        alt="TestFlow Productivity Dashboard - Midmarket Validation Platform"
                        fill
                        className="object-cover"
                        priority
                      />
                      
                      {/* Gradient overlay for visual appeal */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/10 via-transparent to-transparent rounded-2xl" />
                    </div>
                  </motion.div>

                  {/* Right Side - Text and CTA */}
                  <motion.div
                    initial={{ opacity: 0, x: 40 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    className="space-y-6 lg:col-span-3"
                  >
                    <div className="space-y-4">
                      <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold leading-tight">
                        Transform Your{' '}
                        <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                          Validation Process
                        </span>
                      </h3>
                      
                      <p className="text-lg text-gray-300 leading-relaxed">
                        Discover how TestFlow's AI-powered platform streamlines validation workflows for midmarket companies. See real results from teams who've transformed their testing processes.
                      </p>
                      
                      <div className="space-y-3">
                        <div className="flex items-center gap-3">
                          <div className="w-2 h-2 rounded-full bg-blue-400"></div>
                          <span className="text-gray-300">Reduce validation time by 60%</span>
                        </div>
                        <div className="flex items-center gap-3">
                          <div className="w-2 h-2 rounded-full bg-purple-400"></div>
                          <span className="text-gray-300">Automate repetitive testing tasks</span>
                        </div>
                        <div className="flex items-center gap-3">
                          <div className="w-2 h-2 rounded-full bg-green-400"></div>
                          <span className="text-gray-300">Scale without additional headcount</span>
                        </div>
                      </div>
                    </div>

                    <div className="flex flex-col sm:flex-row gap-4 pt-4">
                      <Button asChild size="lg" className="h-12 px-8 text-lg font-semibold">
                        <Link 
                          href="/contact"
                          onClick={() => trackButtonClick('Get Started', 'Card Section', { page: 'midmarket' })}
                          className="bg-gradient-to-r from-blue-500 to-purple-600 text-white hover:from-blue-600 hover:to-purple-700 rounded-full transition-all duration-300 hover:scale-105 hover:shadow-[0_0_25px_rgba(79,70,229,0.4)] flex items-center gap-2"
                        >
                          Get Started
                          <ArrowRight className="w-5 h-5" />
                        </Link>
                      </Button>
                    </div>
                  </motion.div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="relative py-20 md:py-32 overflow-hidden">
        <div className="container mx-auto px-4 relative max-w-[1400px] w-full">
          <div className="max-w-6xl mx-auto">
            {/* Enhanced Section Header with Purple Gradients */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-20"
            >
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, type: "spring", stiffness: 200 }}
                className="inline-block rounded-full px-8 py-3 text-sm font-medium bg-gradient-to-r from-purple-500/20 via-violet-500/15 to-purple-500/20 border border-purple-400/40 backdrop-blur-2xl mb-8 shadow-[0_8px_32px_rgba(147,51,234,0.25)] hover:shadow-[0_12px_40px_rgba(147,51,234,0.4)] transition-all duration-500 hover:scale-105"
              >
                <span className="bg-gradient-to-r from-purple-300 via-violet-300 to-purple-400 bg-clip-text text-transparent font-bold text-base">
                  ✨ Midmarket Features
                </span>
                <div className="absolute inset-0 rounded-full bg-gradient-to-r from-purple-500/10 via-transparent to-violet-500/10 blur-xl" />
              </motion.div>
              
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 leading-tight"
              >
                Scale Your Validation Team Seamlessly With{' '}
                <span className="bg-gradient-to-r from-purple-400 via-violet-300 to-purple-500 bg-clip-text text-transparent animate-gradient-x">
                  Software That's Built to Scale
                </span>
              </motion.h2>
              
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="text-lg md:text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed"
              >
                Whether you're launching new products, expanding your validation capabilities, or optimizing your testing processes, our platform provides the flexibility and automation needed to support your growth.
              </motion.p>
            </motion.div>

            {/* Features Grid */}
            <div className="space-y-6 max-w-6xl mx-auto">
              {/* Row 1: Left wider than right */}
              <div className="grid grid-cols-5 gap-6">
                <motion.div
                  initial={{ opacity: 0, y: 40, x: -20 }}
                  whileInView={{ opacity: 1, y: 0, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.1, duration: 0.8, ease: "easeOut" }}
                  className="col-span-3 group relative"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-purple-500/30 to-violet-600/30 rounded-3xl blur-2xl group-hover:blur-3xl transition-all duration-500 opacity-0 group-hover:opacity-100" />
                  <div className="relative h-96 bg-gradient-to-br from-purple-500 via-violet-500 to-purple-600 rounded-3xl overflow-hidden p-8 text-white transform group-hover:scale-[1.02] transition-all duration-500 border border-purple-400/30 shadow-[0_8px_32px_rgba(147,51,234,0.4)]">
                    <div className="absolute inset-0 bg-gradient-to-br from-white/[0.12] via-white/[0.06] to-transparent" />
                    <div className="absolute inset-0 bg-gradient-to-t from-purple-600/20 via-transparent to-violet-400/20" />
                    <div className="relative z-10">
                      <div className="flex items-center gap-3 mb-4">
                        <div className="w-12 h-12 rounded-2xl bg-white/25 backdrop-blur-sm flex items-center justify-center shadow-lg">
                          <DollarSign className="w-6 h-6 text-white" />
                        </div>
                        <h3 className="text-2xl font-bold">Cost-Effective Validation Solution</h3>
                      </div>
                      <p className="text-purple-100 text-base leading-relaxed mb-6 font-light">
                        Get enterprise-grade validation capabilities at a fraction of the cost. Perfect for growing companies that need powerful testing without breaking the budget.
                      </p>
                    </div>
                    
                    <div className="absolute bottom-0 left-4 right-4 h-52 group-hover:scale-105 transition-transform duration-500">
                      <Image
                        src="/images/features1.png"
                        alt="Cost-Effective Validation Solution"
                        fill
                        className="object-contain drop-shadow-2xl"
                      />
                    </div>
                    
                    {/* Enhanced floating elements */}
                    <div className="absolute top-4 right-4 w-3 h-3 bg-white/50 rounded-full animate-pulse shadow-[0_0_15px_rgba(255,255,255,0.6)]" />
                    <div className="absolute top-8 right-8 w-2 h-2 bg-white/40 rounded-full animate-pulse shadow-[0_0_10px_rgba(255,255,255,0.4)]" style={{ animationDelay: '1s' }} />
                    <div className="absolute top-12 right-12 w-1.5 h-1.5 bg-white/30 rounded-full animate-pulse shadow-[0_0_8px_rgba(255,255,255,0.3)]" style={{ animationDelay: '2s' }} />
                  </div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 }}
                  className="col-span-2 group relative"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-orange-500/20 to-amber-500/20 rounded-3xl blur-xl group-hover:blur-2xl transition-all duration-500 opacity-0 group-hover:opacity-100" />
                  <div className="relative h-80 bg-gradient-to-br from-orange-500 via-amber-500 to-orange-600 rounded-3xl overflow-hidden p-8 text-white border border-orange-400/30 shadow-[0_8px_32px_rgba(249,115,22,0.3)] group-hover:scale-[1.02] transition-all duration-500">
                    <div className="absolute inset-0 bg-gradient-to-br from-white/[0.1] to-transparent" />
                    <div className="absolute inset-0 bg-gradient-to-t from-orange-600/20 via-transparent to-amber-400/20" />
                    <h3 className="text-xl font-bold mb-4">Streamlined Team Workflows</h3>
                    <p className="text-orange-100 text-sm leading-relaxed mb-6">
                      Optimize your validation team's productivity with integrated tools and automated workflows designed for midmarket efficiency.
                    </p>
                    
                    <div className="absolute bottom-0 left-2 right-2 top-28">
                      <Image
                        src="/images/features2.png"
                        alt="Streamlined Team Workflows"
                        fill
                        className="object-contain drop-shadow-lg"
                      />
                    </div>
                  </div>
                </motion.div>
              </div>

              {/* Row 2: Left narrower than right */}
              <div className="grid grid-cols-5 gap-6">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 }}
                  className="col-span-2 group relative"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-emerald-500/20 to-teal-500/20 rounded-3xl blur-xl group-hover:blur-2xl transition-all duration-500 opacity-0 group-hover:opacity-100" />
                  <div className="relative h-80 bg-gradient-to-br from-emerald-600 via-teal-600 to-emerald-700 rounded-3xl overflow-hidden p-8 text-white border border-emerald-400/30 shadow-[0_8px_32px_rgba(16,185,129,0.3)] group-hover:scale-[1.02] transition-all duration-500">
                    <div className="absolute inset-0 bg-gradient-to-br from-white/[0.12] via-white/[0.06] to-transparent" />
                    <div className="absolute inset-0 bg-gradient-to-t from-emerald-700/20 via-transparent to-teal-500/20" />
                    <h3 className="text-xl font-bold mb-4">Scale Without Additional Hires</h3>
                    <p className="text-emerald-100 text-sm leading-relaxed mb-6">
                      Grow your validation capacity without expanding your team. Our AI automation handles increased workload as your company scales.
                    </p>
                    
                    <div className="absolute bottom-2 left-2 right-2 h-32">
                      <Image
                        src="/images/features3.png"
                        alt="Scale Without Additional Hires"
                        fill
                        className="object-contain drop-shadow-lg"
                      />
                    </div>
                  </div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.4 }}
                  className="col-span-3 group relative"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-teal-500/20 to-cyan-500/20 rounded-3xl blur-xl group-hover:blur-2xl transition-all duration-500 opacity-0 group-hover:opacity-100" />
                  <div className="relative h-80 bg-gradient-to-br from-teal-600 via-cyan-600 to-teal-700 rounded-3xl overflow-hidden p-8 text-white border border-teal-400/30 shadow-[0_8px_32px_rgba(20,184,166,0.3)] group-hover:scale-[1.02] transition-all duration-500">
                    <div className="absolute inset-0 bg-gradient-to-br from-white/[0.12] via-white/[0.06] to-transparent" />
                    <div className="absolute inset-0 bg-gradient-to-t from-teal-700/20 via-transparent to-cyan-500/20" />
                    <h3 className="text-xl font-bold mb-4">Organize Your Chips Validation Across Your Team</h3>
                    <p className="text-teal-100 text-sm leading-relaxed mb-6">
                      Implement industry best practices instantly with our pre-built validation templates and AI-guided workflows.
                    </p>
                    
                    <div className="absolute inset-x-0 bottom-4 flex items-end justify-center px-4">
                      <div className="relative w-full h-44">
                        <Image
                          src="/images/feature4 midmarket.png"
                          alt="Organize Your Chips Validation Across Your Team"
                          fill
                          className="object-contain drop-shadow-lg"
                        />
                      </div>
                    </div>
                  </div>
                </motion.div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pilot Process Section */}
      <section className="relative py-20 md:py-32 overflow-hidden border-t border-white/10">
        <div className="container mx-auto px-4 relative max-w-[1400px] w-full">
          <div className="max-w-6xl mx-auto">
            {/* Glassy Container */}
            <div className="relative">
              {/* Background blur effects */}
              <div className="absolute inset-0 bg-gradient-to-r from-purple-500/10 via-blue-500/10 to-purple-500/10 rounded-3xl blur-3xl" />
              <div className="absolute inset-0 bg-gradient-to-b from-white/[0.02] to-transparent rounded-3xl" />
              
              {/* Content Container */}
              <div className="relative rounded-3xl overflow-hidden bg-black/40 backdrop-blur-xl border border-white/10 p-12 md:p-16">
                {/* Header */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  className="mb-16"
                >
                  <h2 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
                    Quick Start &{' '}
                    <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
                      Rapid Deployment
                    </span>
                  </h2>
                  <p className="text-xl text-gray-300 max-w-4xl leading-relaxed">
                    Get up and running quickly with our streamlined onboarding process designed specifically for midmarket companies. No lengthy implementations or complex integrations.
                  </p>
                </motion.div>

                {/* Phase Sections */}
                <div className="grid md:grid-cols-2 gap-16">
                  {/* Phase 1: Pilot */}
                  <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="space-y-6"
                  >
                    <h3 className="text-3xl font-bold">Phase 1: Quick Start</h3>
                    <div className="space-y-4">
                      {pilotSteps.map((step) => (
                        <motion.div
                          key={step.number}
                          className="group"
                          initial={false}
                        >
                          <button
                            onClick={() => setExpandedStep(expandedStep === `pilot-${step.number}` ? null : `pilot-${step.number}`)}
                            className="w-full text-left"
                          >
                            <div className="flex items-center gap-4 p-4 rounded-xl bg-white/[0.03] hover:bg-white/[0.06] transition-colors border border-white/[0.05]">
                              <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center text-sm font-medium">
                                {step.number}
                              </div>
                              <span className="font-semibold">{step.title}</span>
                            </div>
                          </button>
                          <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{
                              height: expandedStep === `pilot-${step.number}` ? 'auto' : 0,
                              opacity: expandedStep === `pilot-${step.number}` ? 1 : 0
                            }}
                            transition={{ duration: 0.3 }}
                            className="overflow-hidden"
                          >
                            <div className="p-4 text-gray-400">
                              {step.description}
                            </div>
                          </motion.div>
                        </motion.div>
                      ))}
                    </div>
                  </motion.div>

                  {/* Phase 2: Full Rollout */}
                  <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="space-y-6"
                  >
                    <h3 className="text-3xl font-bold">Phase 2: Scale Up</h3>
                    <div className="space-y-4">
                      {rolloutSteps.map((step) => (
                        <motion.div
                          key={step.number}
                          className="group"
                          initial={false}
                        >
                          <button
                            onClick={() => setExpandedStep(expandedStep === `rollout-${step.number}` ? null : `rollout-${step.number}`)}
                            className="w-full text-left"
                          >
                            <div className="flex items-center gap-4 p-4 rounded-xl bg-white/[0.03] hover:bg-white/[0.06] transition-colors border border-white/[0.05]">
                              <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center text-sm font-medium">
                                {step.number}
                              </div>
                              <span className="font-semibold">{step.title}</span>
                            </div>
                          </button>
                          <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{
                              height: expandedStep === `rollout-${step.number}` ? 'auto' : 0,
                              opacity: expandedStep === `rollout-${step.number}` ? 1 : 0
                            }}
                            transition={{ duration: 0.3 }}
                            className="overflow-hidden"
                          >
                            <div className="p-4 text-gray-400">
                              {step.description}
                            </div>
                          </motion.div>
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
                  <Button asChild size="lg" className="h-14 px-8 text-lg font-semibold">
                    <Link 
                      href="/contact"
                      onClick={() => trackButtonClick('Talk to Sales', 'Pilot Process', { page: 'midmarket' })}
                      className="bg-gradient-to-r from-purple-500 to-blue-600 text-white hover:from-purple-600 hover:to-blue-700 rounded-full flex items-center gap-2"
                    >
                      Talk to Sales
                      <ArrowRight className="w-5 h-5" />
                    </Link>
                  </Button>
                </motion.div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why TestFlow Section */}
      <section className="relative py-20 md:py-32 overflow-hidden border-t border-white/10">
        <div className="container mx-auto px-4 relative max-w-[1400px] w-full">
          <div className="max-w-6xl mx-auto">
            {/* Header */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mb-16"
            >
              <div className="inline-block rounded-full px-4 py-1.5 text-sm font-medium bg-gradient-to-r from-purple-500/10 to-blue-500/10 border border-purple-500/20 backdrop-blur-sm mb-6">
                <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
                  Save Time & Money
                </span>
              </div>

              <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
                Why You Should Go With{' '}
                <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
                  TestFlow
                </span>
              </h2>
              
              <p className="text-xl text-gray-300 max-w-4xl leading-relaxed mb-12">
                Consolidate your validation enablement stack, achieve a lower cost per test executed, and scale seamlessly with TestFlow.
              </p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="mb-16"
              >
                <Button asChild size="lg" className="h-14 px-8 text-lg font-semibold">
                  <Link 
                    href="/contact"
                    onClick={() => trackButtonClick('Talk to Sales', 'Why TestFlow Section', { page: 'midmarket' })}
                    className="bg-gradient-to-r from-purple-500 to-blue-600 text-white hover:from-purple-600 hover:to-blue-700 rounded-full transition-all duration-300 hover:scale-105 hover:shadow-[0_0_25px_rgba(147,51,234,0.4)]"
                  >
                    Talk to Sales
                  </Link>
                </Button>
              </motion.div>
            </motion.div>

            {/* Benefits Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* Benefit 1 */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="group"
              >
                <div className="bg-gradient-to-br from-gray-900/50 to-gray-800/30 backdrop-blur-sm border border-white/10 rounded-3xl p-4 h-full hover:border-purple-500/30 transition-all duration-300">
                  <div className="w-12 h-12 rounded-2xl bg-gradient-to-r from-purple-500/20 to-purple-600/20 border border-purple-500/30 flex items-center justify-center mb-3">
                    <DollarSign className="w-6 h-6 text-purple-400" />
                  </div>
                  <h3 className="text-lg font-bold mb-2">Save On Headcount</h3>
                  <p className="text-gray-400 leading-relaxed text-sm">
                    With TestFlow, 80% of your validation team's tasks are automated, so you can reach more testing coverage without growing your team.
                  </p>
                </div>
              </motion.div>

              {/* Benefit 2 */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="group"
              >
                <div className="bg-gradient-to-br from-gray-900/50 to-gray-800/30 backdrop-blur-sm border border-white/10 rounded-3xl p-4 h-full hover:border-blue-500/30 transition-all duration-300">
                  <div className="w-12 h-12 rounded-2xl bg-gradient-to-r from-blue-500/20 to-blue-600/20 border border-blue-500/30 flex items-center justify-center mb-3">
                    <Zap className="w-6 h-6 text-blue-400" />
                  </div>
                  <h3 className="text-lg font-bold mb-2">An AI Assistant That Self-Optimizes</h3>
                  <p className="text-gray-400 leading-relaxed text-sm">
                    TestFlow isn't your average AI validation assistant. Not only does it automate tasks, it also learns from your feedback over time, just like a real human would.
                  </p>
                </div>
              </motion.div>

              {/* Benefit 3 */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
                className="group"
              >
                <div className="bg-gradient-to-br from-gray-900/50 to-gray-800/30 backdrop-blur-sm border border-white/10 rounded-3xl p-4 h-full hover:border-green-500/30 transition-all duration-300">
                  <div className="w-12 h-12 rounded-2xl bg-gradient-to-r from-green-500/20 to-green-600/20 border border-green-500/30 flex items-center justify-center mb-3">
                    <Clock className="w-6 h-6 text-green-400" />
                  </div>
                  <h3 className="text-lg font-bold mb-2">Get Up and Running Within A Week</h3>
                  <p className="text-gray-400 leading-relaxed text-sm">
                    Learning to use TestFlow takes minutes - and with our dedicated support team's help, you'll be onboarded and live within days!
                  </p>
                </div>
              </motion.div>

              {/* Benefit 4 */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4 }}
                className="group"
              >
                <div className="bg-gradient-to-br from-gray-900/50 to-gray-800/30 backdrop-blur-sm border border-white/10 rounded-3xl p-4 h-full hover:border-orange-500/30 transition-all duration-300">
                  <div className="w-12 h-12 rounded-2xl bg-gradient-to-r from-orange-500/20 to-orange-600/20 border border-orange-500/30 flex items-center justify-center mb-3">
                    <BarChart3 className="w-6 h-6 text-orange-400" />
                  </div>
                  <h3 className="text-lg font-bold mb-2">Replicate Your Top Performers</h3>
                  <p className="text-gray-400 leading-relaxed text-sm">
                    Using our AI Playbooks, we can work with you to automate your top-performing validation research & testing workflows.
                  </p>
                </div>
              </motion.div>

              {/* Benefit 5 */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5 }}
                className="group"
              >
                <div className="bg-gradient-to-br from-gray-900/50 to-gray-800/30 backdrop-blur-sm border border-white/10 rounded-3xl p-4 h-full hover:border-cyan-500/30 transition-all duration-300">
                  <div className="w-12 h-12 rounded-2xl bg-gradient-to-r from-cyan-500/20 to-cyan-600/20 border border-cyan-500/30 flex items-center justify-center mb-3">
                    <Settings className="w-6 h-6 text-cyan-400" />
                  </div>
                  <h3 className="text-lg font-bold mb-2">All-In-One Subscription</h3>
                  <p className="text-gray-400 leading-relaxed text-sm">
                    From test automation to data analytics, we've got it all. We've built best-in-class products for the entire validation cycle, all in one place.
                  </p>
                </div>
              </motion.div>

              {/* Benefit 6 */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.6 }}
                className="group"
              >
                <div className="bg-gradient-to-br from-gray-900/50 to-gray-800/30 backdrop-blur-sm border border-white/10 rounded-3xl p-4 h-full hover:border-pink-500/30 transition-all duration-300">
                  <div className="w-12 h-12 rounded-2xl bg-gradient-to-r from-pink-500/20 to-pink-600/20 border border-pink-500/30 flex items-center justify-center mb-3">
                    <Globe className="w-6 h-6 text-pink-400" />
                  </div>
                  <h3 className="text-lg font-bold mb-2">Universal Instrument Compatibility</h3>
                  <p className="text-gray-400 leading-relaxed text-sm">
                    Connect with any test equipment from leading manufacturers. TestFlow works seamlessly with your existing lab instruments and validation tools.
                  </p>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative overflow-hidden py-16 md:py-24">
        <div className="container mx-auto px-4 max-w-[1400px] w-full">
          {/* Main rounded container with glassy black background */}
          <div className="relative rounded-3xl overflow-hidden bg-black/60 backdrop-blur-xl border border-white/20">
            {/* Background effects */}
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 via-purple-500/10 to-blue-500/10" />
            <div className="absolute -inset-4 bg-gradient-to-r from-blue-500/20 via-purple-500/20 to-blue-500/20 rounded-3xl blur-2xl opacity-30" />
            
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
                  Ready to accelerate your{' '}
                  <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                    validation process?
                  </span>
                </motion.h2>
                
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 }}
                  className="text-lg text-gray-300 leading-relaxed max-w-lg"
                >
                  Join growing companies who trust TestFlow to streamline their validation processes and accelerate product launches.
                </motion.p>

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
                    className="bg-gradient-to-r from-blue-500 to-purple-600 text-white hover:from-blue-600 hover:to-purple-700 rounded-full transition-all duration-300 hover:scale-105 hover:shadow-[0_0_25px_rgba(79,70,229,0.4)] flex items-center justify-center gap-2 h-12 px-8 text-lg font-semibold w-fit"
                  >
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
                      <ArrowRight className="w-5 h-5" />
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
                    <span>Quick Implementation</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-gray-400">
                    <Check className="w-4 h-4 text-green-400" />
                    <span>Scalable Solution</span>
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
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 via-purple-500/10 to-blue-500/10 rounded-[2rem] blur-2xl transform rotate-3" />
                  <div className="absolute inset-0 bg-gradient-to-r from-purple-500/10 via-blue-500/10 to-purple-500/10 rounded-[2rem] blur-2xl transform -rotate-3" />
                  <div className="relative">
                    <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-[1.75rem] transform translate-x-2 translate-y-2" />
                    <div className="relative w-80 h-80 md:w-96 md:h-96 rounded-[1.75rem] overflow-hidden border-2 border-white/10 shadow-2xl transform hover:scale-[1.01] transition-transform duration-500">
                      <Image
                        src="/images/TestFlow CTA Image .png"
                        alt="TestFlow Platform Interface"
                        fill
                        className="object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-black/20 to-transparent" />
                    </div>
                  </div>
                  <div className="absolute -top-5 -right-5 bg-gradient-to-br from-blue-500 to-purple-500 rounded-full p-1 shadow-lg transform hover:scale-105 transition-transform">
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

            {/* Solutions Links */}
            <div className="space-y-4">
              <h3 className="font-semibold text-lg">Solutions</h3>
              <ul className="space-y-3">
                {[
                  { label: 'Startups', href: '/startups' },
                  { label: 'Midmarket', href: '/midmarket' },
                  { label: 'Enterprise', href: '/enterprise' }
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
                  { label: 'Features', href: '#features' },
                  { label: 'Contact', href: '/contact' }
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
              <form className="space-y-2" onSubmit={handleNewsletterSubmit}>
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

      {/* Enhanced Custom CSS for purple animations */}
      <style jsx>{`
        @keyframes gradient-x {
          0%, 100% {
            background-size: 200% 200%;
            background-position: left center;
          }
          50% {
            background-size: 200% 200%;
            background-position: right center;
          }
        }
        
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-15px); }
        }
        
        @keyframes glow {
          0%, 100% { box-shadow: 0 0 30px rgba(147, 51, 234, 0.4); }
          50% { box-shadow: 0 0 60px rgba(147, 51, 234, 0.8); }
        }
        
        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        
        @keyframes pulse-purple {
          0%, 100% {
            box-shadow: 0 0 20px rgba(147, 51, 234, 0.4);
            transform: scale(1);
          }
          50% {
            box-shadow: 0 0 40px rgba(147, 51, 234, 0.8);
            transform: scale(1.05);
          }
        }
        
        .animate-gradient-x {
          animation: gradient-x 4s ease infinite;
          background-size: 200% 200%;
        }
        
        .animate-float {
          animation: float 4s ease-in-out infinite;
        }
        
        .animate-glow {
          animation: glow 3s ease-in-out infinite;
        }
        
        .animate-scroll {
          animation: scroll 30s linear infinite;
        }
        
        .animate-pulse-purple {
          animation: pulse-purple 2s ease-in-out infinite;
        }
        
        /* Smooth scrolling */
        html {
          scroll-behavior: smooth;
        }
        
        /* Custom purple scrollbar */
        ::-webkit-scrollbar {
          width: 8px;
        }
        
        ::-webkit-scrollbar-track {
          background: rgba(0, 0, 0, 0.1);
        }
        
        ::-webkit-scrollbar-thumb {
          background: linear-gradient(to bottom, #8b5cf6, #a855f7);
          border-radius: 4px;
        }
        
        ::-webkit-scrollbar-thumb:hover {
          background: linear-gradient(to bottom, #7c3aed, #9333ea);
        }
        
        /* Enhanced backdrop blur support */
        @supports (backdrop-filter: blur(20px)) {
          .backdrop-blur-xl {
            backdrop-filter: blur(20px);
          }
          .backdrop-blur-2xl {
            backdrop-filter: blur(40px);
          }
        }
        
        /* Glassy effect utilities */
        .glass-effect {
          background: rgba(147, 51, 234, 0.1);
          backdrop-filter: blur(20px);
          border: 1px solid rgba(147, 51, 234, 0.2);
        }
        
        .glass-effect-strong {
          background: rgba(147, 51, 234, 0.15);
          backdrop-filter: blur(30px);
          border: 1px solid rgba(147, 51, 234, 0.3);
        }
      `}</style>
    </div>
  )
} 