'use client'

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Check, ArrowRight, Shield, Users, TrendingUp, Zap, Clock, DollarSign, Target, BarChart3, Settings, Lock, FileCheck, Globe, Phone, Rocket, Lightbulb, Gauge } from 'lucide-react'
import Image from "next/image"
import { motion } from 'framer-motion'
import { SiteHeader } from "@/components/site-header"
import { useState } from 'react'
import { SectionTracker, trackButtonClick, trackFormSubmission } from '@/components/analytics-tracker'
import { LogoCarousel } from '@/components/logo-carousel'

export function StartupsPage() {
  const [currentPhase, setCurrentPhase] = useState<'pilot' | 'rollout'>('pilot')
  const [expandedStep, setExpandedStep] = useState<string | null>(null)
  const [showSubscribeNotification, setShowSubscribeNotification] = useState(false)

  const features = [
    {
      icon: <Rocket className="w-12 h-12 text-green-400" />,
      title: "Accelerate Time-to-Market",
      description: "Launch your products faster with automated validation processes. Perfect for startups racing to market with limited resources.",
      image: "/images/save-license-fees.png"
    },
    {
      icon: <DollarSign className="w-12 h-12 text-blue-400" />,
      title: "Bootstrap-Friendly Pricing",
      description: "Get enterprise-grade validation capabilities at startup-friendly prices. Scale your testing without burning through your runway.",
      image: "/images/stop-context-switching.png"
    },
    {
      icon: <Lightbulb className="w-12 h-12 text-purple-400" />,
      title: "Validate Ideas Quickly",
      description: "Test and iterate on your hardware concepts rapidly. Our AI helps you validate designs before committing to expensive prototypes.",
      image: "/images/save-headcount.png"
    },
    {
      icon: <Gauge className="w-12 h-12 text-orange-400" />,
      title: "Scale from Day One",
      description: "Built to grow with your startup. Start small and scale seamlessly as your team and product portfolio expands.",
      image: "/images/replicate-engineers.png"
    }
  ]

  const pilotSteps = [
    {
      number: 1,
      title: "Rapid Assessment",
      description: "Quick 30-minute assessment of your validation needs and immediate opportunities for acceleration."
    },
    {
      number: 2,
      title: "Startup-Tailored Setup",
      description: "Customized implementation plan designed for startup speed and budget constraints."
    },
    {
      number: 3,
      title: "MVP Launch",
      description: "Get your minimum viable validation process running within days, not weeks."
    }
  ]

  const rolloutSteps = [
    {
      number: 1,
      title: "Growth Planning",
      description: "Strategic roadmap to scale your validation capabilities as your startup grows and adds new products."
    },
    {
      number: 2,
      title: "Team Onboarding",
      description: "Rapid onboarding process for new team members as you scale your engineering organization."
    },
    {
      number: 3,
      title: "Process Optimization",
      description: "Continuous optimization of your validation workflows to maintain startup agility at scale."
    },
    {
      number: 4,
      title: "Investor-Ready Metrics",
      description: "Generate validation metrics and reports that demonstrate product quality to investors and stakeholders."
    }
  ]

  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setShowSubscribeNotification(true)
    trackFormSubmission('newsletter', true, { page: 'startups' })
    // Reset form
    const form = e.target as HTMLFormElement
    form.reset()
  }

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Background Elements */}
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]" />
        <div className="absolute top-0 -left-1/4 w-1/2 h-1/2 bg-gradient-to-br from-green-500/10 via-transparent to-transparent rounded-full blur-3xl" />
        <div className="absolute bottom-0 -right-1/4 w-1/2 h-1/2 bg-gradient-to-tl from-blue-500/10 via-transparent to-transparent rounded-full blur-3xl" />
      </div>

      <SiteHeader />
      
      {/* Section Trackers */}
      <SectionTracker sectionId="hero" sectionName="Startups Hero" />
      <SectionTracker sectionId="features" sectionName="Startups Features" />
      <SectionTracker sectionId="pilot-process" sectionName="Startup Process" />
      <SectionTracker sectionId="security" sectionName="Security" />
      <SectionTracker sectionId="cta" sectionName="Startups CTA" />

      {/* Hero Section */}
      <section className="relative pt-20 pb-0 md:pt-24 md:pb-0 overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]" />
          <div className="absolute top-0 -left-1/4 w-1/2 h-1/2 bg-gradient-to-br from-green-500/10 via-transparent to-transparent rounded-full blur-3xl" />
          <div className="absolute bottom-0 -right-1/4 w-1/2 h-1/2 bg-gradient-to-tl from-blue-500/10 via-transparent to-transparent rounded-full blur-3xl" />
        </div>

        <div className="container mx-auto px-4 relative max-w-[1400px] w-full">
          <div className="max-w-6xl mx-auto">
            {/* Header */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-center mb-16"
            >
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="inline-block rounded-full px-4 py-1.5 text-sm font-medium bg-gradient-to-r from-green-500/10 to-blue-500/10 border border-green-500/20 backdrop-blur-sm mb-6"
              >
                <span className="bg-gradient-to-r from-green-400 to-blue-400 bg-clip-text text-transparent">
                  Meet Our First AI Assistant
                </span>
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="text-3xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight"
              >
                Meet TestFlow,{' '}
                <span className="bg-gradient-to-r from-green-400 to-blue-400 bg-clip-text text-transparent">
                  the AI Validation Assistant
                </span>
              </motion.h1>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="text-lg md:text-xl text-gray-400 max-w-3xl mx-auto"
              >
                Discover how TestFlow helps startups streamline their validation processes and accelerate time-to-market.
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                className="flex flex-col sm:flex-row gap-4 justify-center mb-16"
              >
                <Button asChild size="lg" className="h-12 px-8 text-lg font-semibold">
                  <Link 
                    href="/contact" 
                    onClick={() => trackButtonClick('Get Started', 'Startups Hero', { page: 'startups' })}
                    className="bg-gradient-to-r from-green-500 to-blue-600 text-white hover:from-green-600 hover:to-blue-700 rounded-full transition-all duration-300 hover:scale-105 hover:shadow-[0_0_25px_rgba(34,197,94,0.4)] flex items-center justify-center gap-2"
                  >
                    Get Started
                    <ArrowRight className="w-5 h-5" />
                  </Link>
                </Button>
                <Button asChild variant="outline" className="h-12 px-8 text-lg">
                  <Link 
                    href="/contact"
                    onClick={() => trackButtonClick('Watch Demo', 'Startups Hero', { page: 'startups' })}
                    className="rounded-full border border-green-500/30 hover:border-green-500/50 hover:bg-green-500/5 flex items-center justify-center"
                  >
                    Watch Demo
                  </Link>
                </Button>
              </motion.div>
            </motion.div>

            {/* Full-width Image Container */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="relative w-full"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-green-500/10 via-blue-500/10 to-green-500/10 rounded-3xl blur-3xl opacity-30" />
              <div className="relative rounded-3xl overflow-hidden border border-white/10 shadow-2xl bg-gradient-to-br from-gray-900/50 to-gray-800/30 backdrop-blur-sm">
                {/* Main Interface Image */}
                <div className="relative aspect-[21/9] w-full">
                  <Image
                    src="/images/TestFlow slide 1 .webp"
                    alt="TestFlow AI Assistant Interface - Your intelligent startup validation partner"
                    fill
                    className="object-cover"
                    priority
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
                </div>

                {/* Feature Highlights */}
                <div className="absolute bottom-6 left-6 right-6">
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    {[
                      { title: "Rapid Validation", description: "Launch products 3x faster with AI automation" },
                      { title: "Startup-Friendly Pricing", description: "Enterprise features at bootstrap prices" },
                      { title: "Scale from Day One", description: "Grow seamlessly as your startup expands" }
                    ].map((feature, index) => (
                      <motion.div
                        key={feature.title}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.7 + index * 0.1 }}
                        className="bg-black/60 backdrop-blur-xl border border-white/20 rounded-xl p-4"
                      >
                        <h4 className="text-sm font-semibold text-white mb-1">{feature.title}</h4>
                        <p className="text-xs text-gray-400">{feature.description}</p>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
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
              <div className="absolute inset-0 bg-gradient-to-r from-green-500/10 via-blue-500/10 to-green-500/10 rounded-3xl blur-3xl opacity-30" />
              
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
                        src="/images/productivity.webp"
                        alt="TestFlow Productivity Dashboard - Startup Validation Platform"
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
                        Launch Faster{' '}
                        <span className="bg-gradient-to-r from-green-400 to-blue-400 bg-clip-text text-transparent">
                          Than Ever Before
                        </span>
                      </h3>
                      
                      <p className="text-lg text-gray-300 leading-relaxed">
                        See how TestFlow's AI-powered platform helps startups accelerate product development and validation. Join innovative companies who've transformed their hardware development process.
                      </p>
                      
                      <div className="space-y-3">
                        <div className="flex items-center gap-3">
                          <div className="w-2 h-2 rounded-full bg-green-400"></div>
                          <span className="text-gray-300">Reduce validation time by 70%</span>
                        </div>
                        <div className="flex items-center gap-3">
                          <div className="w-2 h-2 rounded-full bg-blue-400"></div>
                          <span className="text-gray-300">Launch products 3x faster</span>
                        </div>
                        <div className="flex items-center gap-3">
                          <div className="w-2 h-2 rounded-full bg-purple-400"></div>
                          <span className="text-gray-300">Save 60% on validation costs</span>
                        </div>
                      </div>
                    </div>

                    <div className="flex flex-col sm:flex-row gap-4 pt-4">
                      <Button asChild size="lg" className="h-12 px-8 text-lg font-semibold">
                        <Link 
                          href="/contact"
                          onClick={() => trackButtonClick('Get Started', 'Card Section', { page: 'startups' })}
                          className="bg-gradient-to-r from-green-500 to-blue-600 text-white hover:from-green-600 hover:to-blue-700 rounded-full transition-all duration-300 hover:scale-105 hover:shadow-[0_0_25px_rgba(34,197,94,0.4)] flex items-center gap-2"
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
            {/* Section Header */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <div className="inline-block rounded-full px-4 py-1.5 text-sm font-medium bg-white/5 border border-white/10 backdrop-blur-sm mb-6">
                <span className="text-green-400">Features</span>
              </div>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 leading-tight">
                Move Fast and{' '}
                <span className="bg-gradient-to-r from-green-400 to-blue-400 bg-clip-text text-transparent">
                  Validate Things
                </span>
              </h2>
              <p className="text-lg md:text-xl text-gray-400 max-w-4xl mx-auto leading-relaxed">
                Built for the startup mindset - validate quickly, iterate rapidly, and scale efficiently. Our platform grows with your company from prototype to production.
              </p>
            </motion.div>

            {/* Features Grid */}
            <div className="space-y-6 max-w-6xl mx-auto">
              {/* Row 1: Left wider than right */}
              <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.1 }}
                  className="md:col-span-3 group relative"
                >
                  <div className="relative h-80 bg-gradient-to-br from-green-500 to-green-600 rounded-3xl overflow-hidden p-8 text-white">
                    <h3 className="text-xl font-bold mb-4">Accelerate Time-to-Market</h3>
                    <p className="text-green-100 text-sm leading-relaxed mb-6">
                      Launch your products faster with automated validation processes. Perfect for startups racing to market with limited resources.
                    </p>
                    
                    <div className="absolute bottom-0 left-4 right-4 h-48">
                      <Image
                        src="/images/features1.webp"
                        alt="Accelerate Time-to-Market"
                        fill
                        className="object-contain"
                      />
                    </div>
                  </div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 }}
                  className="md:col-span-2 group relative"
                >
                  <div className="relative h-80 bg-gradient-to-br from-blue-500 to-cyan-400 rounded-3xl overflow-hidden p-8 text-white">
                    <h3 className="text-xl font-bold mb-4">Bootstrap-Friendly Pricing</h3>
                    <p className="text-blue-100 text-sm leading-relaxed mb-6">
                      Get enterprise-grade validation capabilities at startup-friendly prices. Scale your testing without burning through your runway.
                    </p>
                    
                    <div className="absolute bottom-2 left-4 right-4 top-32">
                      <Image
                        src="/images/features2.webp"
                        alt="Bootstrap-Friendly Pricing"
                        fill
                        className="object-contain"
                      />
                    </div>
                  </div>
                </motion.div>
              </div>

              {/* Row 2: Left narrower than right */}
              <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 }}
                  className="md:col-span-2 group relative"
                >
                  <div className="relative h-80 bg-gradient-to-br from-purple-600 to-purple-700 rounded-3xl overflow-hidden p-8 text-white">
                    <h3 className="text-xl font-bold mb-4">Validate Ideas Quickly</h3>
                    <p className="text-purple-100 text-sm leading-relaxed mb-6">
                      Test and iterate on your hardware concepts rapidly. Our AI helps you validate designs before committing to expensive prototypes.
                    </p>
                    
                    <div className="absolute bottom-2 left-2 right-2 h-32">
                      <Image
                        src="/images/features3.webp"
                        alt="Validate Ideas Quickly"
                        fill
                        className="object-contain"
                      />
                    </div>
                  </div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.4 }}
                  className="md:col-span-3 group relative"
                >
                  <div className="relative h-80 bg-gradient-to-br from-gray-800 to-gray-900 rounded-3xl overflow-hidden p-8 text-white">
                    <h3 className="text-xl font-bold mb-4">Scale from Day One</h3>
                    <p className="text-gray-300 text-sm leading-relaxed mb-6">
                      Built to grow with your startup. Start small and scale seamlessly as your team and product portfolio expands.
                    </p>
                    
                    <div className="absolute inset-x-0 bottom-4 flex items-end justify-center px-4">
                      <div className="relative w-full h-44">
                        <Image
                          src="/images/features4.webp"
                          alt="Scale from Day One"
                          fill
                          className="object-contain"
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
              <div className="absolute inset-0 bg-gradient-to-r from-green-500/10 via-blue-500/10 to-green-500/10 rounded-3xl blur-3xl" />
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
                    From Idea to{' '}
                    <span className="bg-gradient-to-r from-green-400 to-blue-400 bg-clip-text text-transparent">
                      Market Launch
                    </span>
                  </h2>
                  <p className="text-xl text-gray-300 max-w-4xl leading-relaxed">
                    Get your validation process up and running in days, not months. Our startup-focused approach gets you validating products and impressing investors quickly.
                  </p>
                </motion.div>

                {/* Phase Sections */}
                <div className="grid md:grid-cols-2 gap-16">
                  {/* Phase 1: MVP */}
                  <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="space-y-6"
                  >
                    <h3 className="text-3xl font-bold">Phase 1: MVP Launch</h3>
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

                  {/* Phase 2: Scale Up */}
                  <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="space-y-6"
                  >
                    <h3 className="text-3xl font-bold">Phase 2: Scale & Grow</h3>
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
                      onClick={() => trackButtonClick('Talk to Sales', 'Startup Process', { page: 'startups' })}
                      className="bg-gradient-to-r from-green-500 to-blue-600 text-white hover:from-green-600 hover:to-blue-700 rounded-full flex items-center gap-2"
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
              <div className="inline-block rounded-full px-4 py-1.5 text-sm font-medium bg-gradient-to-r from-green-500/10 to-blue-500/10 border border-green-500/20 backdrop-blur-sm mb-6">
                <span className="bg-gradient-to-r from-green-400 to-blue-400 bg-clip-text text-transparent">
                  Startup Advantages
                </span>
              </div>

              <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
                Why Startups Choose{' '}
                <span className="bg-gradient-to-r from-green-400 to-blue-400 bg-clip-text text-transparent">
                  TestFlow
                </span>
              </h2>
              
              <p className="text-xl text-gray-300 max-w-4xl leading-relaxed mb-12">
                Built for the unique challenges of hardware startups - limited resources, tight timelines, and the need to prove product-market fit quickly.
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
                    onClick={() => trackButtonClick('Talk to Sales', 'Why TestFlow Section', { page: 'startups' })}
                    className="bg-gradient-to-r from-green-500 to-blue-600 text-white hover:from-green-600 hover:to-blue-700 rounded-full transition-all duration-300 hover:scale-105 hover:shadow-[0_0_25px_rgba(34,197,94,0.4)]"
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
                <div className="bg-gradient-to-br from-gray-900/50 to-gray-800/30 backdrop-blur-sm border border-white/10 rounded-3xl p-4 h-full hover:border-green-500/30 transition-all duration-300">
                  <div className="w-12 h-12 rounded-2xl bg-gradient-to-r from-green-500/20 to-green-600/20 border border-green-500/30 flex items-center justify-center mb-3">
                    <Rocket className="w-6 h-6 text-green-400" />
                  </div>
                  <h3 className="text-lg font-bold mb-2">Launch 3x Faster</h3>
                  <p className="text-gray-400 leading-relaxed text-sm">
                    Accelerate your time-to-market with automated validation processes. Get to market before your competitors with confidence in your product quality.
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
                    <DollarSign className="w-6 h-6 text-blue-400" />
                  </div>
                  <h3 className="text-lg font-bold mb-2">Preserve Your Runway</h3>
                  <p className="text-gray-400 leading-relaxed text-sm">
                    Get enterprise-grade validation at startup prices. Reduce validation costs by 60% while maintaining the highest quality standards.
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
                <div className="bg-gradient-to-br from-gray-900/50 to-gray-800/30 backdrop-blur-sm border border-white/10 rounded-3xl p-4 h-full hover:border-purple-500/30 transition-all duration-300">
                  <div className="w-12 h-12 rounded-2xl bg-gradient-to-r from-purple-500/20 to-purple-600/20 border border-purple-500/30 flex items-center justify-center mb-3">
                    <Lightbulb className="w-6 h-6 text-purple-400" />
                  </div>
                  <h3 className="text-lg font-bold mb-2">Validate Before You Build</h3>
                  <p className="text-gray-400 leading-relaxed text-sm">
                    Test your concepts and designs before expensive prototyping. Reduce the risk of costly design iterations and failed product launches.
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
                    <TrendingUp className="w-6 h-6 text-orange-400" />
                  </div>
                  <h3 className="text-lg font-bold mb-2">Impress Investors</h3>
                  <p className="text-gray-400 leading-relaxed text-sm">
                    Generate professional validation reports and metrics that demonstrate product quality and market readiness to investors and stakeholders.
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
                    <Gauge className="w-6 h-6 text-cyan-400" />
                  </div>
                  <h3 className="text-lg font-bold mb-2">Scale Without Limits</h3>
                  <p className="text-gray-400 leading-relaxed text-sm">
                    Built to grow with your startup. Start with basic validation and scale to complex multi-product testing as your company expands.
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
                    <Clock className="w-6 h-6 text-pink-400" />
                  </div>
                  <h3 className="text-lg font-bold mb-2">Get Started in Days</h3>
                  <p className="text-gray-400 leading-relaxed text-sm">
                    No lengthy setup processes. Our startup-focused onboarding gets you validating products within days, not months.
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
            <div className="absolute inset-0 bg-gradient-to-r from-green-500/10 via-blue-500/10 to-green-500/10" />
            <div className="absolute -inset-4 bg-gradient-to-r from-green-500/20 via-blue-500/20 to-green-500/20 rounded-3xl blur-2xl opacity-30" />
            
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
                  Ready to launch your{' '}
                  <span className="bg-gradient-to-r from-green-400 to-blue-400 bg-clip-text text-transparent">
                    next breakthrough?
                  </span>
                </motion.h2>
                
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 }}
                  className="text-lg text-gray-300 leading-relaxed max-w-lg"
                >
                  Join innovative startups who trust TestFlow to validate their hardware faster, cheaper, and with greater confidence than ever before.
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
                    onClick={() => trackButtonClick('Get Started', 'Final CTA', { page: 'startups' })}
                    className="bg-gradient-to-r from-green-500 to-blue-600 text-white hover:from-green-600 hover:to-blue-700 rounded-full transition-all duration-300 hover:scale-105 hover:shadow-[0_0_25px_rgba(34,197,94,0.4)] flex items-center justify-center gap-2 h-12 px-8 text-lg font-semibold w-fit"
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
                    <span>Startup-Friendly Pricing</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-gray-400">
                    <Check className="w-4 h-4 text-green-400" />
                    <span>Launch in Days</span>
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
                  <div className="absolute inset-0 bg-gradient-to-r from-green-500/10 via-blue-500/10 to-green-500/10 rounded-[2rem] blur-2xl transform rotate-3" />
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 via-green-500/10 to-blue-500/10 rounded-[2rem] blur-2xl transform -rotate-3" />
                  <div className="relative">
                    <div className="absolute inset-0 bg-gradient-to-r from-green-500/20 to-blue-500/20 rounded-[1.75rem] transform translate-x-2 translate-y-2" />
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
                  <div className="absolute -top-5 -right-5 bg-gradient-to-br from-green-500 to-blue-500 rounded-full p-1 shadow-lg transform hover:scale-105 transition-transform">
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
                  { label: 'Solutions', href: '#solutions' },
                  { label: 'TestFlow', href: '#demo' },
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
                  className="w-full px-3 py-2 bg-white/5 border border-white/10 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent text-sm"
                  required
                />
                <button
                  type="submit"
                  className="w-full px-3 py-2 bg-gradient-to-r from-green-500 to-blue-500 text-white rounded-lg text-sm hover:from-green-600 hover:to-blue-600 transition-all duration-200 hover:scale-[1.02] active:scale-[0.98]"
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

      {/* Add custom CSS for scrolling animation */}
      <style jsx>{`
        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        .animate-scroll {
          animation: scroll 30s linear infinite;
        }
      `}</style>
    </div>
  )
} 