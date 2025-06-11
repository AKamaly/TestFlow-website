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
import { VideoModal } from "@/components/video-modal"

export function EnterprisePage() {
  const [currentPhase, setCurrentPhase] = useState<'pilot' | 'rollout'>('pilot')
  const [expandedStep, setExpandedStep] = useState<string | null>(null)
  const [showSubscribeNotification, setShowSubscribeNotification] = useState(false)
  const [showVideoModal, setShowVideoModal] = useState(false)

  const features = [
    {
      icon: <DollarSign className="w-12 h-12 text-green-400" />,
      title: "Save on Software License Fees",
      description: "Save millions of dollars every year with our consolidated platform. We offer every tool you need, under one simple subscription.",
      image: "/images/save-license-fees.png"
    },
    {
      icon: <Users className="w-12 h-12 text-blue-400" />,
      title: "Data Analytics and Reporting",
      description: "Our platform consolidates every tool you need – from test discovery to data analytics – allowing engineers to focus on validation without interruption.",
      image: "/images/stop-context-switching.png"
    },
    {
      icon: <TrendingUp className="w-12 h-12 text-purple-400" />,
      title: "Save on Headcount",
      description: "Maximize your resources and reduce the need for additional hires. By automating routine validation tasks, your existing team can handle higher volumes efficiently.",
      image: "/images/save-headcount.png"
    },
    {
      icon: <Target className="w-12 h-12 text-orange-400" />,
      title: "Replicate Top-Performing Engineers",
      description: "Turn your best engineers' winning validation templates into automated AI Playbooks. Your team will be able to execute these proven methods and watch your validation processes continuously self-optimize for maximum efficiency.",
      image: "/images/replicate-engineers.png"
    },
    {
      icon: <Settings className="w-12 h-12 text-indigo-400" />,
      title: "Standardize Testing Across Your Team",
      description: "Ensure your validation is unified and consistent with our AI workflows and standardized protocols, amplifying your team's ability to deliver quality results.",
      image: "/images/standardize-testing.png"
    },
    {
      icon: <Zap className="w-12 h-12 text-yellow-400" />,
      title: "Engineers Focus on High-Leverage Activities",
      description: "Our platform automates all manual research and script generation tasks, freeing up engineers to focus on analysis, optimization, and strategic validation decisions.",
      image: "/images/high-leverage-activities.png"
    }
  ]

  const pilotSteps = [
    {
      number: 1,
      title: "Discovery Call",
      description: "Initial call with your validation leadership to understand your existing workflow and objectives."
    },
    {
      number: 2,
      title: "Proposal",
      description: "Customized proposal outlining TestFlow integration strategy and expected outcomes."
    },
    {
      number: 3,
      title: "Implementation Strategy Call",
      description: "Detailed planning session to map out pilot implementation and success metrics."
    },
    {
      number: 4,
      title: "Kick Off Pilot With Sample Team",
      description: "Begin pilot program with a selected group from your validation organization."
    },
    {
      number: 5,
      title: "Weekly Sync With Account Manager",
      description: "Regular check-ins to monitor progress and optimize the pilot experience."
    }
  ]

  const rolloutSteps = [
    {
      number: 1,
      title: "Transition Strategy Meeting",
      description: "We'll reflect on pilot outcomes and scope out full organization requirements, before expanding TestFlow across your entire validation team."
    },
    {
      number: 2,
      title: "Integration With Your Full Software Stack",
      description: "Complete integration with all your existing validation tools and enterprise systems."
    },
    {
      number: 3,
      title: "Development of All Required Custom Features",
      description: "Build any custom features or integrations specific to your enterprise needs."
    },
    {
      number: 4,
      title: "Platform Training for Your Validation Team",
      description: "Comprehensive training program for all team members across your organization."
    },
    {
      number: 5,
      title: "Hands-On Technical Support",
      description: "Dedicated technical support during the transition and rollout phase."
    },
    {
      number: 6,
      title: "Ongoing Support From Your Account Manager",
      description: "Continuous support and optimization from your dedicated account management team."
    }
  ]

  const companyLogos = [
    { name: "Intel", logo: "/images/logos/intel.png" },
    { name: "NVIDIA", logo: "/images/logos/nvidia.png" },
    { name: "AMD", logo: "/images/logos/amd.png" },
    { name: "Qualcomm", logo: "/images/logos/qualcomm.png" },
    { name: "Broadcom", logo: "/images/logos/broadcom.png" },
    { name: "Marvell", logo: "/images/logos/marvell.png" },
    { name: "Analog Devices", logo: "/images/logos/adi.png" },
    { name: "Texas Instruments", logo: "/images/logos/ti.png" }
  ]

  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setShowSubscribeNotification(true)
    trackFormSubmission('newsletter', true, { page: 'enterprise' })
    // Reset form
    const form = e.target as HTMLFormElement
    form.reset()
  }

  return (
    <div className="min-h-screen bg-black text-white overflow-x-hidden">
      {/* Background Elements */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]" />
        <div className="absolute top-0 -left-1/4 w-1/2 h-1/2 bg-gradient-to-br from-blue-500/10 via-transparent to-transparent rounded-full blur-3xl" />
        <div className="absolute bottom-0 -right-1/4 w-1/2 h-1/2 bg-gradient-to-tl from-purple-500/10 via-transparent to-transparent rounded-full blur-3xl" />
      </div>

      <SiteHeader />
      
      {/* Section Trackers */}
      <SectionTracker sectionId="hero" sectionName="Enterprise Hero" />
      <SectionTracker sectionId="features" sectionName="Enterprise Features" />
      <SectionTracker sectionId="global-coverage" sectionName="Global Coverage" />
      <SectionTracker sectionId="pilot-process" sectionName="Pilot Process" />
      <SectionTracker sectionId="security" sectionName="Security" />
      <SectionTracker sectionId="cta" sectionName="Enterprise CTA" />

      {/* Hero Section - Enhanced with stunning visuals */}
      <section className="relative pt-20 pb-0 md:pt-24 md:pb-0 overflow-hidden">
        {/* Enhanced Background Elements */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:32px_32px]" />
          <div className="absolute top-0 -left-1/4 w-3/4 h-3/4 bg-gradient-to-br from-blue-500/20 via-purple-500/15 to-transparent rounded-full blur-3xl animate-pulse" />
          <div className="absolute bottom-0 -right-1/4 w-3/4 h-3/4 bg-gradient-to-tl from-purple-500/20 via-blue-500/15 to-transparent rounded-full blur-3xl animate-pulse" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(59,130,246,0.08),transparent_70%)]" />
          
          {/* Floating particles */}
          <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-blue-400/30 rounded-full animate-bounce" style={{ animationDelay: '0s', animationDuration: '3s' }} />
          <div className="absolute top-1/3 right-1/3 w-1 h-1 bg-purple-400/40 rounded-full animate-bounce" style={{ animationDelay: '1s', animationDuration: '4s' }} />
          <div className="absolute bottom-1/3 left-1/3 w-1.5 h-1.5 bg-blue-300/30 rounded-full animate-bounce" style={{ animationDelay: '2s', animationDuration: '5s' }} />
        </div>

        <div className="container mx-auto px-4 relative max-w-[1400px] w-full">
          <div className="max-w-4xl mx-auto text-center">
            {/* Enhanced Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20, scale: 0.8 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.6, type: "spring", stiffness: 200 }}
              className="inline-block rounded-full px-6 py-2 text-sm font-medium bg-gradient-to-r from-blue-500/15 to-purple-500/15 border border-blue-500/30 backdrop-blur-xl mb-8 shadow-[0_8px_32px_rgba(59,130,246,0.12)]"
            >
              <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent font-semibold">
                🚀 Enterprise-Grade AI Validation Platform
              </span>
            </motion.div>

            {/* Enhanced Main Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1, ease: "easeOut" }}
              className="text-3xl md:text-4xl lg:text-5xl font-bold mb-8 leading-[1.1] tracking-tight"
            >
              <span className="block">A Customizable AI Validation Platform,</span>
              <span className="block bg-gradient-to-r from-blue-400 via-purple-400 to-blue-500 bg-clip-text text-transparent animate-gradient-x">
                Built for Enterprise
              </span>
            </motion.h1>

            {/* Enhanced Subheading */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-lg md:text-xl text-gray-300 max-w-4xl mx-auto mb-10 leading-relaxed font-light"
            >
              TestFlow is designed with enterprise in mind. We push the boundaries of what's possible with AI validation, automating and optimizing how hardware testing is done - 
              <span className="text-blue-300 font-medium"> the days of scattered tools and manual processes are over.</span>
            </motion.p>

            {/* Enhanced CTA Section */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="flex flex-col sm:flex-row gap-6 justify-center mb-16 max-w-lg mx-auto"
            >
              <Button asChild size="lg" className="h-16 px-10 text-lg font-semibold">
                <Link 
                  href="/contact" 
                  onClick={() => trackButtonClick('Get Started', 'Enterprise Hero', { page: 'enterprise' })}
                  className="bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-full transition-all duration-300 hover:scale-105 hover:shadow-[0_0_25px_rgba(79,70,229,0.4)] flex items-center gap-3"
                >
                  Get Started
                  <motion.div
                    animate={{ x: [0, 4, 0] }}
                    transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                  >
                    <ArrowRight className="w-5 h-5" />
                  </motion.div>
                </Link>
              </Button>
              
              <Button 
                variant="outline" 
                size="lg" 
                className="h-16 px-10 text-lg font-semibold relative group rounded-full border border-blue-500/30 hover:border-blue-500/50 hover:bg-blue-500/5 backdrop-blur-sm transition-all duration-300"
                onClick={() => {
                  setShowVideoModal(true)
                  trackButtonClick('Watch Demo', 'Enterprise Hero', { page: 'enterprise' })
                }}
              >
                <svg className="w-5 h-5 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.828 14.828a4 4 0 01-5.656 0M9 10h1m4 0h1m-6 4h1m4 0h1m-6-8h8a2 2 0 012 2v8a2 2 0 01-2 2H8a2 2 0 01-2-2V8a2 2 0 012-2z" />
                </svg>
                Watch Demo
              </Button>
            </motion.div>

            {/* Enhanced Stats/Trust Indicators */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="flex flex-wrap justify-center gap-8 mb-16 text-sm text-gray-400"
            >
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
                <span>Trusted by Fortune 500 companies</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-blue-400 rounded-full animate-pulse" />
                <span>99.9% uptime guarantee</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-purple-400 rounded-full animate-pulse" />
                <span>Enterprise-grade security</span>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Enhanced Full-width Image Banner */}
        <motion.div
          initial={{ opacity: 0, y: 60, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 1, delay: 0.6, ease: "easeOut" }}
          className="relative w-full"
        >
          {/* Multiple layered background effects */}
          <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent z-10" />
          <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 via-transparent to-purple-500/10 z-10" />
          
          {/* Enhanced image container */}
          <div className="relative w-full h-[400px] md:h-[500px] lg:h-[600px] overflow-hidden">
            {/* Animated border effect */}
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500/30 via-purple-500/30 to-blue-500/30 animate-gradient-x opacity-50 blur-sm" />
            
            <Image
              src="/images/Hero graphic.png"
              alt="TestFlow Enterprise Platform - AI-Powered Validation"
              fill
              className="object-cover w-full h-full relative z-20 hover:scale-105 transition-transform duration-700"
              priority
            />
            
            {/* Floating UI elements overlay */}
            <div className="absolute inset-0 z-30 pointer-events-none">
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                className="absolute top-1/4 left-1/4 w-4 h-4 bg-blue-400/60 rounded-full blur-sm"
              />
              <motion.div
                animate={{ y: [0, 15, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                className="absolute top-1/3 right-1/4 w-3 h-3 bg-purple-400/60 rounded-full blur-sm"
              />
              <motion.div
                animate={{ y: [0, -8, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 2 }}
                className="absolute bottom-1/3 left-1/3 w-2 h-2 bg-blue-300/60 rounded-full blur-sm"
              />
            </div>
          </div>
        </motion.div>
      </section>

      {/* Logo Carousel Section */}
      <section className="py-12 bg-gradient-to-b from-black to-gray-900/30 border-b border-white/5">
        <div className="container mx-auto px-4 max-w-[1400px] w-full">
          <LogoCarousel />
        </div>
      </section>

      {/* Features Section - Enhanced with stunning visuals */}
      <section className="relative py-20 md:py-32 overflow-hidden">
        {/* Enhanced background elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:40px_40px]" />
          <div className="absolute top-0 -left-1/4 w-3/4 h-3/4 bg-gradient-to-br from-purple-500/15 via-blue-500/10 to-transparent rounded-full blur-3xl" />
          <div className="absolute bottom-0 -right-1/4 w-3/4 h-3/4 bg-gradient-to-tl from-blue-500/15 via-purple-500/10 to-transparent rounded-full blur-3xl" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_40%,rgba(147,51,234,0.06),transparent_50%)]" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_60%,rgba(59,130,246,0.06),transparent_50%)]" />
        </div>

        <div className="container mx-auto px-4 relative max-w-[1400px] w-full">
          <div className="max-w-6xl mx-auto">
            {/* Enhanced Section Header */}
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
                className="inline-block rounded-full px-6 py-2 text-sm font-medium bg-gradient-to-r from-purple-500/15 to-blue-500/15 border border-purple-500/30 backdrop-blur-xl mb-8 shadow-[0_8px_32px_rgba(147,51,234,0.12)]"
              >
                <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent font-semibold">
                  ✨ Enterprise Features
                </span>
              </motion.div>
              
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 leading-tight"
              >
                Why Enterprise Should{' '}
                <span className="bg-gradient-to-r from-purple-400 via-blue-400 to-purple-500 bg-clip-text text-transparent animate-gradient-x">
                  Switch to TestFlow
                </span>
              </motion.h2>
              
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="text-lg md:text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed"
              >
                Transform your validation process with enterprise-grade AI automation that scales with your organization
              </motion.p>
            </motion.div>

            {/* Enhanced Features Grid */}
            <div className="space-y-8 max-w-6xl mx-auto">
              {/* Row 1: Left wider than right */}
              <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
                <motion.div
                  initial={{ opacity: 0, y: 40, x: -20 }}
                  whileInView={{ opacity: 1, y: 0, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.1, duration: 0.8, ease: "easeOut" }}
                  className="md:col-span-3 group relative"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-purple-500/20 to-purple-600/20 rounded-3xl blur-xl group-hover:blur-2xl transition-all duration-500 opacity-0 group-hover:opacity-100" />
                  <div className="relative h-96 bg-gradient-to-br from-purple-500 to-purple-600 rounded-3xl overflow-hidden p-8 text-white transform group-hover:scale-[1.02] transition-all duration-500 border border-purple-400/20 shadow-[0_8px_32px_rgba(147,51,234,0.3)]">
                    <div className="absolute inset-0 bg-gradient-to-br from-white/[0.08] to-transparent" />
                    <div className="relative z-10">
                      <div className="flex items-center gap-3 mb-4">
                        <div className="w-12 h-12 rounded-2xl bg-white/20 backdrop-blur-sm flex items-center justify-center">
                          <DollarSign className="w-6 h-6 text-white" />
                        </div>
                        <h3 className="text-2xl font-bold">Save on Software License Fees</h3>
                      </div>
                      <p className="text-purple-100 text-base leading-relaxed mb-6 font-light">
                        Save millions of dollars every year with our consolidated platform. We offer every tool you need, under one simple subscription.
                      </p>
                    </div>
                    
                    {/* Enhanced Feature 1 Image */}
                    <div className="absolute bottom-0 left-4 right-4 h-52 group-hover:scale-105 transition-transform duration-500">
                      <Image
                        src="/images/features1.png"
                        alt="Save on Software License Fees"
                        fill
                        className="object-contain drop-shadow-2xl"
                      />
                    </div>
                    
                    {/* Floating elements */}
                    <div className="absolute top-4 right-4 w-2 h-2 bg-white/40 rounded-full animate-pulse" />
                    <div className="absolute top-8 right-8 w-1 h-1 bg-white/30 rounded-full animate-pulse" style={{ animationDelay: '1s' }} />
                  </div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 40, x: 20 }}
                  whileInView={{ opacity: 1, y: 0, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2, duration: 0.8, ease: "easeOut" }}
                  className="md:col-span-2 group relative"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-cyan-400/20 rounded-3xl blur-xl group-hover:blur-2xl transition-all duration-500 opacity-0 group-hover:opacity-100" />
                  <div className="relative h-96 bg-gradient-to-br from-blue-500 to-cyan-400 rounded-3xl overflow-hidden p-8 text-white transform group-hover:scale-[1.02] transition-all duration-500 border border-blue-400/20 shadow-[0_8px_32px_rgba(59,130,246,0.3)]">
                    <div className="absolute inset-0 bg-gradient-to-br from-white/[0.08] to-transparent" />
                    <div className="relative z-10">
                      <div className="flex items-center gap-3 mb-4">
                        <div className="w-12 h-12 rounded-2xl bg-white/20 backdrop-blur-sm flex items-center justify-center">
                          <BarChart3 className="w-6 h-6 text-white" />
                        </div>
                        <h3 className="text-xl font-bold">Data Analytics and Reporting</h3>
                      </div>
                      <p className="text-blue-100 text-sm leading-relaxed mb-6 font-light">
                        Our platform consolidates every tool you need – from test discovery to data analytics – allowing engineers to focus on validation without interruption.
                      </p>
                    </div>
                    
                    {/* Enhanced Feature 2 Image */}
                    <div className="absolute bottom-2 left-4 right-4 top-36 group-hover:scale-105 transition-transform duration-500">
                      <Image
                        src="/images/features2.png"
                        alt="Data Analytics and Reporting"
                        fill
                        className="object-contain drop-shadow-2xl"
                      />
                    </div>
                    
                    {/* Floating elements */}
                    <div className="absolute top-4 right-4 w-2 h-2 bg-white/40 rounded-full animate-pulse" />
                  </div>
                </motion.div>
              </div>

              {/* Row 2: Left narrower than right */}
              <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
                <motion.div
                  initial={{ opacity: 0, y: 40, x: -20 }}
                  whileInView={{ opacity: 1, y: 0, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3, duration: 0.8, ease: "easeOut" }}
                  className="md:col-span-2 group relative"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-blue-700/20 rounded-3xl blur-xl group-hover:blur-2xl transition-all duration-500 opacity-0 group-hover:opacity-100" />
                  <div className="relative h-96 bg-gradient-to-br from-blue-600 to-blue-700 rounded-3xl overflow-hidden p-8 text-white transform group-hover:scale-[1.02] transition-all duration-500 border border-blue-500/20 shadow-[0_8px_32px_rgba(37,99,235,0.3)]">
                    <div className="absolute inset-0 bg-gradient-to-br from-white/[0.08] to-transparent" />
                    <div className="relative z-10">
                      <div className="flex items-center gap-3 mb-4">
                        <div className="w-12 h-12 rounded-2xl bg-white/20 backdrop-blur-sm flex items-center justify-center">
                          <Users className="w-6 h-6 text-white" />
                        </div>
                        <h3 className="text-xl font-bold">Save on Headcount</h3>
                      </div>
                      <p className="text-blue-100 text-sm leading-relaxed mb-6 font-light">
                        Maximize your resources and reduce the need for additional hires. By automating routine validation tasks, your existing team can handle higher volumes efficiently.
                      </p>
                    </div>
                    
                    {/* Enhanced Feature 3 Image */}
                    <div className="absolute bottom-2 left-2 right-2 h-36 group-hover:scale-105 transition-transform duration-500">
                      <Image
                        src="/images/features3.png"
                        alt="Save on Headcount"
                        fill
                        className="object-contain drop-shadow-2xl"
                      />
                    </div>
                    
                    {/* Floating elements */}
                    <div className="absolute top-4 right-4 w-2 h-2 bg-white/40 rounded-full animate-pulse" />
                  </div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 40, x: 20 }}
                  whileInView={{ opacity: 1, y: 0, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.4, duration: 0.8, ease: "easeOut" }}
                  className="md:col-span-3 group relative"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-gray-800/20 to-gray-900/20 rounded-3xl blur-xl group-hover:blur-2xl transition-all duration-500 opacity-0 group-hover:opacity-100" />
                  <div className="relative h-96 bg-gradient-to-br from-gray-800 to-gray-900 rounded-3xl overflow-hidden p-8 text-white transform group-hover:scale-[1.02] transition-all duration-500 border border-gray-600/20 shadow-[0_8px_32px_rgba(0,0,0,0.4)]">
                    <div className="absolute inset-0 bg-gradient-to-br from-white/[0.05] to-transparent" />
                    <div className="relative z-10">
                      <div className="flex items-center gap-3 mb-4">
                        <div className="w-12 h-12 rounded-2xl bg-white/10 backdrop-blur-sm flex items-center justify-center">
                          <Target className="w-6 h-6 text-gray-300" />
                        </div>
                        <h3 className="text-2xl font-bold">Replicate Top-Performing Engineers</h3>
                      </div>
                      <p className="text-gray-300 text-base leading-relaxed mb-6 font-light">
                        Turn your best engineers' winning validation templates into automated AI Playbooks. Your team will be able to execute these proven methods and watch your validation processes continuously self-optimize for maximum efficiency.
                      </p>
                    </div>
                    
                    {/* Enhanced Feature 4 Image */}
                    <div className="absolute inset-x-0 bottom-4 flex items-end justify-center px-4 group-hover:scale-105 transition-transform duration-500">
                      <div className="relative w-full h-48">
                        <Image
                          src="/images/features4.png"
                          alt="Replicate Top-Performing Engineers"
                          fill
                          className="object-contain drop-shadow-2xl"
                        />
                      </div>
                    </div>
                    
                    {/* Floating elements */}
                    <div className="absolute top-4 right-4 w-2 h-2 bg-white/30 rounded-full animate-pulse" />
                    <div className="absolute top-8 right-8 w-1 h-1 bg-white/20 rounded-full animate-pulse" style={{ animationDelay: '1s' }} />
                  </div>
                </motion.div>
              </div>

              {/* Row 3: Equal width containers */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <motion.div
                  initial={{ opacity: 0, y: 40, x: -20 }}
                  whileInView={{ opacity: 1, y: 0, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.5, duration: 0.8, ease: "easeOut" }}
                  className="group relative"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-purple-600/20 to-purple-700/20 rounded-3xl blur-xl group-hover:blur-2xl transition-all duration-500 opacity-0 group-hover:opacity-100" />
                  <div className="relative h-96 bg-gradient-to-br from-purple-600 to-purple-700 rounded-3xl overflow-hidden p-8 text-white transform group-hover:scale-[1.02] transition-all duration-500 border border-purple-500/20 shadow-[0_8px_32px_rgba(147,51,234,0.3)]">
                    <div className="absolute inset-0 bg-gradient-to-br from-white/[0.08] to-transparent" />
                    <div className="relative z-10">
                      <div className="flex items-center gap-3 mb-4">
                        <div className="w-12 h-12 rounded-2xl bg-white/20 backdrop-blur-sm flex items-center justify-center">
                          <Settings className="w-6 h-6 text-white" />
                        </div>
                        <h3 className="text-xl font-bold">Standardize Testing Across Your Team</h3>
                      </div>
                      <p className="text-purple-100 text-sm leading-relaxed mb-6 font-light">
                        Ensure your validation is unified and consistent with our AI workflows and standardized protocols, amplifying your team's ability to deliver quality results.
                      </p>
                    </div>
                    
                    {/* Enhanced Feature 5 Image */}
                    <div className="absolute bottom-0 left-8 right-8 h-44 group-hover:scale-105 transition-transform duration-500">
                      <Image
                        src="/images/features5.png"
                        alt="Standardize Testing Across Your Team"
                        fill
                        className="object-contain drop-shadow-2xl"
                      />
                    </div>
                    
                    {/* Floating elements */}
                    <div className="absolute top-4 right-4 w-2 h-2 bg-white/40 rounded-full animate-pulse" />
                  </div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 40, x: 20 }}
                  whileInView={{ opacity: 1, y: 0, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.6, duration: 0.8, ease: "easeOut" }}
                  className="group relative"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-yellow-500/20 to-orange-500/20 rounded-3xl blur-xl group-hover:blur-2xl transition-all duration-500 opacity-0 group-hover:opacity-100" />
                  <div className="relative h-96 bg-gradient-to-br from-yellow-500 to-orange-500 rounded-3xl overflow-hidden p-8 text-white transform group-hover:scale-[1.02] transition-all duration-500 border border-yellow-400/20 shadow-[0_8px_32px_rgba(245,158,11,0.3)]">
                    <div className="absolute inset-0 bg-gradient-to-br from-white/[0.08] to-transparent" />
                    <div className="relative z-10">
                      <div className="flex items-center gap-3 mb-4">
                        <div className="w-12 h-12 rounded-2xl bg-white/20 backdrop-blur-sm flex items-center justify-center">
                          <Zap className="w-6 h-6 text-white" />
                        </div>
                        <h3 className="text-xl font-bold">Engineers Focus on High-Leverage Activities</h3>
                      </div>
                      <p className="text-yellow-100 text-sm leading-relaxed mb-6 font-light">
                        Our platform automates all manual research and script generation tasks, freeing up engineers to focus on analysis, optimization, and strategic validation decisions.
                      </p>
                    </div>
                    
                    {/* Enhanced Feature 6 Image */}
                    <div className="absolute bottom-0 left-8 right-8 h-44 group-hover:scale-105 transition-transform duration-500">
                      <Image
                        src="/images/features6.png"
                        alt="Engineers Focus on High-Leverage Activities"
                        fill
                        className="object-contain drop-shadow-2xl"
                      />
                    </div>
                    
                    {/* Floating elements */}
                    <div className="absolute top-4 right-4 w-2 h-2 bg-white/40 rounded-full animate-pulse" />
                    <div className="absolute top-8 right-8 w-1 h-1 bg-white/30 rounded-full animate-pulse" style={{ animationDelay: '1s' }} />
                  </div>
                </motion.div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pilot Process Section - Interactive Cards Layout */}
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
                    Pilot, Compare &{' '}
                    <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
                      Switch Seamlessly
                    </span>
                  </h2>
                  <p className="text-xl text-gray-300 max-w-4xl leading-relaxed">
                    Transitioning onto TestFlow is effortless. We will work closely with you to integrate TestFlow into your existing validation stack & workflows, replacing & automating inferior tools.
                  </p>
                </motion.div>

                {/* Phase Sections - Interactive Layout */}
                <div className="grid md:grid-cols-2 gap-16">
                  {/* Phase 1: Pilot */}
                  <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="space-y-6"
                  >
                    <h3 className="text-3xl font-bold">Phase 1: Pilot</h3>
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
                    <h3 className="text-3xl font-bold">Phase 2: Full Rollout</h3>
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
                      onClick={() => trackButtonClick('Talk to Sales', 'Pilot Process', { page: 'enterprise' })}
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

      {/* Security Section */}
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
              <div className="inline-block rounded-full px-4 py-1.5 text-sm font-medium bg-white/5 border border-white/10 backdrop-blur-sm mb-6">
                <span className="text-green-400">Safety & Security</span>
              </div>

              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 leading-tight">
                Privacy & Security Are{' '}
                <span className="bg-gradient-to-r from-green-400 to-blue-400 bg-clip-text text-transparent">
                  In Our DNA
                </span>
              </h2>
              
              <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8 leading-relaxed">
                For us, safety is just as important as innovation. We take rigorous measures to exceed security and compliance expectations.
              </p>
            </motion.div>

            {/* Security Cards - Two Row Layout */}
            <div className="space-y-6">
              {/* Row 1 - Wide Card */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="w-full"
              >
                <div className="h-full bg-gradient-to-br from-gray-900/50 to-gray-800/30 backdrop-blur-sm border border-white/10 rounded-3xl p-8 md:p-10">
                  <div className="flex flex-col h-full">
                    <div className="flex items-start justify-between gap-8">
                      <div>
                        <div className="w-12 h-12 rounded-2xl bg-green-500/10 border border-green-500/20 flex items-center justify-center mb-6">
                          <FileCheck className="w-6 h-6 text-green-400" />
                        </div>
                        <h3 className="text-2xl font-bold mb-4">Certifications</h3>
                        <p className="text-gray-400 leading-relaxed mb-6">
                          We're in the process of obtaining the following industry-standard certifications:
                        </p>
                      </div>
                      {/* Placeholder for logos - right side */}
                      <div className="hidden md:flex flex-col gap-4">
                        <div className="relative w-16 h-16 rounded-xl bg-white/5 border border-white/10 overflow-hidden">
                          <Image
                            src="/images/certificate-1.png"
                            alt="Certificate 1"
                            fill
                            className="object-contain p-2"
                          />
                        </div>
                        <div className="relative w-16 h-16 rounded-xl bg-white/5 border border-white/10 overflow-hidden">
                          <Image
                            src="/images/certificate-2.png"
                            alt="Certificate 2"
                            fill
                            className="object-contain p-2"
                          />
                        </div>
                        <div className="relative w-16 h-16 rounded-xl bg-white/5 border border-white/10 overflow-hidden">
                          <Image
                            src="/images/certificate-3.png"
                            alt="Certificate 3"
                            fill
                            className="object-contain p-2"
                          />
                        </div>
                      </div>
                    </div>
                    <div className="space-y-4 mt-auto">
                      <div className="flex items-center gap-3">
                        <div className="w-6 h-6 rounded bg-green-500/20 flex items-center justify-center">
                          <Check className="w-4 h-4 text-green-400" />
                        </div>
                        <span className="text-green-400 font-medium">SOC 2 Type II</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <div className="w-6 h-6 rounded bg-green-500/20 flex items-center justify-center">
                          <Check className="w-4 h-4 text-green-400" />
                        </div>
                        <span className="text-green-400 font-medium">ISO 27001</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <div className="w-6 h-6 rounded bg-green-500/20 flex items-center justify-center">
                          <Check className="w-4 h-4 text-green-400" />
                        </div>
                        <span className="text-green-400 font-medium">GDPR Compliant</span>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Row 2 - Two Equal Cards */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.1 }}
                >
                  <div className="h-full bg-gradient-to-br from-gray-900/50 to-gray-800/30 backdrop-blur-sm border border-white/10 rounded-3xl p-8">
                    <div className="w-12 h-12 rounded-2xl bg-blue-500/10 border border-blue-500/20 flex items-center justify-center mb-6">
                      <Shield className="w-6 h-6 text-blue-400" />
                    </div>
                    <h3 className="text-2xl font-bold mb-4">Data Protection</h3>
                    <p className="text-gray-400 leading-relaxed">
                      We ensure validation data protection - you can opt out of using your data to train our models. Your test data & results are securely protected and never shared with other users.
                    </p>
                  </div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 }}
                >
                  <div className="h-full bg-gradient-to-br from-gray-900/50 to-gray-800/30 backdrop-blur-sm border border-white/10 rounded-3xl p-8">
                    <div className="w-12 h-12 rounded-2xl bg-purple-500/10 border border-purple-500/20 flex items-center justify-center mb-6">
                      <Lock className="w-6 h-6 text-purple-400" />
                    </div>
                    <h3 className="text-2xl font-bold mb-4">Internal Policies</h3>
                    <p className="text-gray-400 leading-relaxed">
                      We prioritize stringent data access protection, offer prompt deletion upon request, and employ robust cybersecurity measures to safeguard your information.
                    </p>
                  </div>
                </motion.div>
              </div>
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
                  Ready to transform your{' '}
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
                  Join leading companies who trust Atoms TestFlow to validate their products faster and more efficiently.
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
                    onClick={() => trackButtonClick('Get Started', 'Final CTA', { page: 'enterprise' })}
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

      {/* Enhanced Footer */}
      <footer className="border-t border-white/10 bg-gradient-to-b from-black to-gray-900/50">
        <div className="container mx-auto px-4 max-w-[1400px] w-full">
          {/* Main Footer Content */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 py-16">
            {/* Brand Column - Takes 2 columns */}
            <div className="lg:col-span-2 space-y-6">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="space-y-4"
              >
                <Link href="/" className="text-2xl font-bold block bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                  Atoms TestFlow
                </Link>
                <p className="text-gray-400 text-base leading-relaxed max-w-md">
                  The AI validation platform that accelerates your product launch with enterprise-grade security and scalability.
                </p>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="flex gap-4"
              >
                {[
                  { name: 'LinkedIn', icon: 'linkedin', href: 'https://linkedin.com/company/atomstestflow' },
                  { name: 'YouTube', icon: 'youtube', href: 'https://youtube.com' }
                ].map((social) => (
                  <Link
                    key={social.name}
                    href={social.href}
                    className="w-12 h-12 rounded-full bg-gradient-to-r from-white/[0.05] to-white/[0.1] border border-white/10 flex items-center justify-center hover:bg-gradient-to-r hover:from-blue-500/20 hover:to-purple-500/20 hover:border-blue-400/30 transition-all duration-300 group backdrop-blur-sm"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <span className="sr-only">{social.name}</span>
                    <div className="w-5 h-5 text-gray-400 group-hover:text-blue-300 transition-colors">
                      {social.icon === 'linkedin' && <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect x="2" y="9" width="4" height="12"/><circle cx="4" cy="4" r="2"/></svg>}
                      {social.icon === 'youtube' && <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z"/><polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02"/></svg>}
                    </div>
                  </Link>
                ))}
              </motion.div>
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
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="space-y-6"
            >
              <h3 className="font-semibold text-xl text-white">Sections</h3>
              <ul className="space-y-4">
                {[
                  { label: 'TestFlow', href: '#demo' },
                  { label: 'Features', href: '#features' },
                  { label: 'Contact', href: '/contact' }
                ].map((link) => (
                  <li key={link.label}>
                    <Link href={link.href} className="text-gray-400 hover:text-purple-300 transition-colors duration-300 hover:translate-x-1 inline-block">
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Newsletter - Takes 1 column */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className="space-y-6"
            >
              <h3 className="font-semibold text-xl text-white">Stay Updated</h3>
              <p className="text-gray-400 leading-relaxed">Subscribe to our newsletter for the latest updates and enterprise features.</p>
              <form className="space-y-4" onSubmit={handleNewsletterSubmit}>
                <div className="relative group">
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-xl blur-xl group-hover:blur-2xl transition-all duration-300 opacity-0 group-hover:opacity-100" />
                  <input
                    type="email"
                    placeholder="Enter your email"
                    className="relative w-full px-4 py-3 bg-white/[0.05] border border-white/10 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-blue-400/50 text-white placeholder-gray-400 backdrop-blur-sm transition-all duration-300 hover:bg-white/[0.08]"
                    required
                  />
                </div>
                <button
                  type="submit"
                  className="w-full px-4 py-3 bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded-xl hover:from-blue-600 hover:to-purple-600 transition-all duration-300 hover:scale-[1.02] active:scale-[0.98] font-medium shadow-[0_4px_20px_rgba(59,130,246,0.3)] hover:shadow-[0_8px_30px_rgba(59,130,246,0.4)]"
                >
                  Subscribe
                </button>
              </form>
            </motion.div>
          </div>

          {/* Enhanced Bottom Footer */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="border-t border-white/10 py-8"
          >
            <div className="flex flex-col md:flex-row justify-between items-center gap-4">
              <div className="flex flex-col md:flex-row gap-4 items-center">
                <p className="text-gray-400">
                  © {new Date().getFullYear()} Atoms. All rights reserved.
                </p>
                <div className="flex gap-6 text-sm">
                  <Link href="/privacy" className="text-gray-400 hover:text-blue-300 transition-colors">Privacy Policy</Link>
                  <Link href="/terms" className="text-gray-400 hover:text-blue-300 transition-colors">Terms of Service</Link>
                  <Link href="/security" className="text-gray-400 hover:text-blue-300 transition-colors">Security</Link>
                </div>
              </div>
              <div className="flex items-center gap-2 text-sm text-gray-400">
                <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
                <span>All systems operational</span>
              </div>
            </div>
          </motion.div>
        </div>
      </footer>

      <VideoModal 
        isOpen={showVideoModal}
        onClose={() => setShowVideoModal(false)}
      />

      {/* Enhanced Custom CSS for animations */}
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
          50% { transform: translateY(-10px); }
        }
        
        @keyframes glow {
          0%, 100% { box-shadow: 0 0 20px rgba(59, 130, 246, 0.3); }
          50% { box-shadow: 0 0 40px rgba(59, 130, 246, 0.6); }
        }
        
        .animate-gradient-x {
          animation: gradient-x 3s ease infinite;
          background-size: 200% 200%;
        }
        
        .animate-float {
          animation: float 3s ease-in-out infinite;
        }
        
        .animate-glow {
          animation: glow 2s ease-in-out infinite;
        }
        
        /* Smooth scrolling */
        html {
          scroll-behavior: smooth;
          overflow-x: hidden;
        }
        
        /* Prevent horizontal overflow on body */
        body {
          overflow-x: hidden;
          position: relative;
        }
        

        
        /* Enhanced backdrop blur support */
        @supports (backdrop-filter: blur(20px)) {
          .backdrop-blur-xl {
            backdrop-filter: blur(20px);
          }
        }
      `}</style>
    </div>
  )
}