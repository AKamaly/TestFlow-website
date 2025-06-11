'use client'

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Check, ArrowRight, Clock, AlertTriangle, BrainCircuit, Cable, Users, LayoutTemplate, PlayCircle } from 'lucide-react'
import Image from "next/image"
import { HeroForm } from '@/components/hero-form'
import { TypingEffect } from '@/components/typing-effect'
import { TrustLogos } from '@/components/trust-logos'
import { ComparisonSection } from '@/components/comparison-section'
import { AISection } from '@/components/ai-section'
import { CompatibilitySection } from '@/components/compatibility-section'
import { motion } from 'framer-motion'
import { SiteHeader } from "@/components/site-header"
import { useState, useEffect } from 'react'
import { Notification } from "@/components/notification"
import { LogoCarousel } from '@/components/logo-carousel'
import { WebinarPopup } from "@/components/webinar-popup"
import { VideoModal } from "@/components/video-modal"
import { SectionTracker, trackButtonClick, trackFormSubmission, trackPageSpecificEvent } from '@/components/analytics-tracker'

export function HomePage() {
  const [showSubscribeNotification, setShowSubscribeNotification] = useState(false)
  const [showWebinar, setShowWebinar] = useState(false)
  const [showVideoModal, setShowVideoModal] = useState(false)
  const [currentSlide, setCurrentSlide] = useState(0)

  // Auto-slide functionality
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % 3);
    }, 4000);

    return () => clearInterval(timer);
  }, []);

  const handleCloseWebinar = () => {
    setShowWebinar(false)
    sessionStorage.setItem('hasSeenWebinar', 'true')
  }

  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setShowSubscribeNotification(true)
    trackFormSubmission('newsletter', true, { page: 'home' })
    // Reset form
    const form = e.target as HTMLFormElement
    form.reset()
  }

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % 3)
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + 3) % 3)
  }

  const slides = [
    {
      id: 'ai-validation',
      title: 'AI-Powered Validation',
      icon: <BrainCircuit className="w-6 h-6 text-blue-400" />,
      gradient: 'from-blue-500/5 via-purple-500/5 to-blue-500/5',
      titleGradient: 'from-blue-400 to-purple-400',
      iconBg: 'bg-blue-500/10 border-blue-500/20',
      description: 'Leverage advanced machine learning algorithms to automatically generate test scripts, predict failure patterns, and optimize validation workflows for semiconductor devices.',
      stats: [
        {
          label: 'Test Scripts Generated',
          value: '1,247',
          subtext: '+89% faster than manual',
          color: 'green',
          badge: 'Auto'
        },
        {
          label: 'Validation Accuracy',
          value: '99.7%',
          subtext: '🎯 AI-driven precision',
          color: 'blue'
        }
      ],
      placeholderIcon: <BrainCircuit className="w-10 h-10 text-blue-400" />,
      placeholderText: 'AI Validation Image'
    },
    {
      id: 'analytics',
      title: 'Advanced Analytics',
      icon: <svg className="w-6 h-6 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
      </svg>,
      gradient: 'from-green-500/5 via-blue-500/5 to-green-500/5',
      titleGradient: 'from-green-400 to-blue-400',
      iconBg: 'bg-green-500/10 border-green-500/20',
      description: 'Gain deep insights into your validation processes with real-time analytics, performance metrics, and predictive failure analysis for optimal chip performance.',
      stats: [
        {
          label: 'Data Points Analyzed',
          value: '2.4M',
          subtext: 'Real-time processing',
          color: 'green',
          badge: 'Live'
        },
        {
          label: 'Prediction Accuracy',
          value: '94.2%',
          subtext: '📊 Failure prediction',
          color: 'green'
        }
      ],
      placeholderIcon: <svg className="w-10 h-10 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
      </svg>,
      placeholderText: 'Analytics Dashboard'
    },
    {
      id: 'collaboration',
      title: 'Team Collaboration',
      icon: <Users className="w-6 h-6 text-purple-400" />,
      gradient: 'from-purple-500/5 via-pink-500/5 to-purple-500/5',
      titleGradient: 'from-purple-400 to-pink-400',
      iconBg: 'bg-purple-500/10 border-purple-500/20',
      description: 'Enable seamless collaboration between validation engineers, design teams, and stakeholders with shared workspaces, real-time updates, and integrated communication tools.',
      stats: [
        {
          label: 'Active Collaborators',
          value: '47',
          subtext: 'Across 12 projects',
          color: 'purple',
          badge: 'Online'
        },
        {
          label: 'Shared Workspaces',
          value: '23',
          subtext: '🤝 Real-time sync',
          color: 'purple'
        }
      ],
      placeholderIcon: <Users className="w-10 h-10 text-purple-400" />,
      placeholderText: 'Collaboration Interface'
    }
  ]

  const currentSlideData = slides[currentSlide]

  return (
    <div className="min-h-screen bg-black text-white">
      <SiteHeader />
      {/* Section Trackers */}
      <SectionTracker sectionId="hero" sectionName="Home Hero" />
      <SectionTracker sectionId="logo-carousel" sectionName="Logo Carousel" />
      <SectionTracker sectionId="ai-section" sectionName="AI Section" />
      <SectionTracker sectionId="compatibility" sectionName="Compatibility" />
      <SectionTracker sectionId="meet-testflow" sectionName="Meet TestFlow" />
      <SectionTracker sectionId="how-testflow-works" sectionName="How TestFlow Works" />
      <SectionTracker sectionId="roi" sectionName="ROI Calculator" />
      <SectionTracker sectionId="cta" sectionName="Final CTA" />
      {/* Hero Section */}
      <section className="relative pt-20 pb-12 md:pt-24 md:pb-20 overflow-hidden">
        {/* Enhanced Background Elements */}
        <div className="absolute inset-0">
          {/* Grid Pattern */}
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]" />
          
          {/* Multiple Gradient Layers */}
          <div className="absolute top-0 -left-1/4 w-3/4 h-3/4 bg-gradient-to-br from-blue-500/20 via-purple-500/15 to-transparent rounded-full blur-3xl animate-pulse" />
          <div className="absolute bottom-0 -right-1/4 w-3/4 h-3/4 bg-gradient-to-tl from-purple-500/20 via-blue-500/15 to-transparent rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-1/2 h-1/2 bg-gradient-to-r from-cyan-500/10 via-blue-500/10 to-purple-500/10 rounded-full blur-2xl" />
          
          {/* Radial Gradient Overlay */}
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(59,130,246,0.1),transparent_70%)]" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(147,51,234,0.08),transparent_50%)]" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(59,130,246,0.08),transparent_50%)]" />
          
          {/* Floating Particles */}
          {[...Array(20)].map((_, i) => (
            <div
              key={i}
              className="absolute w-1 h-1 bg-blue-400/30 rounded-full animate-pulse"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 3}s`,
                animationDuration: `${2 + Math.random() * 2}s`
              }}
            />
          ))}
          
          {/* Larger Floating Elements */}
          {[...Array(8)].map((_, i) => (
            <motion.div
              key={`large-${i}`}
              className="absolute w-2 h-2 bg-gradient-to-r from-blue-400/20 to-purple-400/20 rounded-full blur-sm"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
              animate={{
                y: [0, -20, 0],
                x: [0, 10, 0],
                opacity: [0.3, 0.8, 0.3],
              }}
              transition={{
                duration: 4 + Math.random() * 2,
                repeat: Infinity,
                delay: Math.random() * 2,
              }}
            />
          ))}
        </div>

        <div className="container mx-auto px-4 relative max-w-[1400px] w-full">
          <div className="max-w-4xl mx-auto text-center">
            {/* Enhanced Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20, scale: 0.9 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.6, type: "spring", stiffness: 200 }}
              className="inline-block rounded-full px-4 py-1.5 text-sm font-medium bg-gradient-to-r from-blue-500/20 to-purple-500/20 border border-blue-500/30 backdrop-blur-xl mb-8 relative overflow-hidden group hover:scale-105 transition-all duration-300"
            >
              {/* Badge Glow Effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 via-purple-500/10 to-blue-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="absolute -inset-1 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-full blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              <span className="relative bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent font-semibold">
                ✨ Introducing AI-Powered Validation
              </span>
              
              {/* Shimmer Effect */}
              <div className="absolute inset-0 -skew-x-12 bg-gradient-to-r from-transparent via-white/10 to-transparent opacity-0 group-hover:opacity-100 group-hover:animate-shimmer" />
            </motion.div>

            {/* Enhanced Title */}
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1, type: "spring", stiffness: 100 }}
              className="text-3xl md:text-5xl font-bold mb-6 leading-[1.2] tracking-tight relative"
            >
              {/* Text with Enhanced Gradient */}
              <span className="bg-gradient-to-r from-blue-400 via-white to-purple-400 bg-clip-text text-transparent relative">
                Validate and launch your hardware faster.
              </span>
              
              {/* Glow Effect Behind Text */}
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 via-white/10 to-purple-500/20 blur-2xl -z-10 scale-110" />
            </motion.h1>

            {/* Enhanced Description */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-base md:text-lg text-gray-400 max-w-xl mx-auto mb-8 relative"
            >
              <span className="relative z-10">
                Our AI validation tool helps semiconductors and electronics companies automate their testing process, reducing time-to-market and validation costs.
              </span>
              {/* Subtle glow behind text */}
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500/5 to-purple-500/5 blur-xl -z-10" />
            </motion.p>

            {/* Enhanced Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex flex-col sm:flex-row gap-4 justify-center mb-16"
            >
              {/* Enhanced Get Started Button */}
              <Button asChild size="default" className="h-11 px-6 text-base group relative overflow-hidden">
                <Link 
                  href="/contact" 
                  onClick={() => trackButtonClick('Get Started', 'Hero Section', { page: 'home' })}
                  className="bg-gradient-to-r from-blue-500 to-purple-600 text-white hover:from-blue-600 hover:to-purple-700 rounded-full transition-all duration-300 hover:scale-105 hover:shadow-[0_0_30px_rgba(79,70,229,0.6)] flex items-center gap-2 relative z-10"
                >
                  {/* Button Background Glow */}
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-purple-500 rounded-full blur-lg opacity-0 group-hover:opacity-50 transition-opacity duration-300 -z-10" />
                  
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
                  trackButtonClick('Watch Demo', 'Hero Section', { page: 'home' })
                }}
              >
                <span className="rounded-full border-blue-500/30 hover:border-blue-500/60 hover:bg-blue-500/10 flex items-center gap-2 relative z-10 transition-all duration-300">
                  {/* Button Glow */}
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10" />
                  
                  <PlayCircle className="w-4 h-4" />
                  Watch Demo
                  
                  {/* Subtle shimmer */}
                  <div className="absolute inset-0 -skew-x-12 bg-gradient-to-r from-transparent via-white/10 to-transparent opacity-0 group-hover:opacity-100 group-hover:animate-shimmer" />
                </span>
              </Button>
            </motion.div>

            {/* Enhanced Product Preview */}
            <motion.div
              initial={{ opacity: 0, y: 40, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 1, delay: 0.4, type: "spring", stiffness: 100 }}
              className="relative mx-auto max-w-5xl group mb-20"
            >
              {/* Multiple Glow Layers */}
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 via-purple-500/20 to-blue-500/20 rounded-2xl blur-3xl opacity-60 group-hover:opacity-80 transition-opacity duration-500" />
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 via-blue-500/15 to-purple-500/10 rounded-2xl blur-2xl" />
              <div className="absolute -inset-4 bg-gradient-to-r from-blue-500/15 via-purple-500/15 to-blue-500/15 rounded-3xl blur-2xl opacity-50" />
              
              {/* Main Container */}
              <div className="relative rounded-2xl overflow-hidden border border-white/20 shadow-2xl backdrop-blur-sm bg-black/20 group-hover:border-white/30 transition-all duration-500">
                {/* Inner Glow */}
                <div className="absolute inset-0 bg-gradient-to-t from-blue-500/5 via-transparent to-purple-500/5 rounded-2xl" />
                
                {/* Video Container */}
                <div className="relative">
                  <video
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="w-full relative z-10"
                  >
                    <source src="/Video/cursorful-video-1741889347046.mp4" type="video/mp4" />
                    Your browser does not support the video tag.
                  </video>
                  
                  {/* Video Overlay Effects */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent pointer-events-none" />
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-500/5 via-transparent to-purple-500/5 pointer-events-none" />
                </div>
                
                {/* Floating UI Elements */}
                <motion.div
                  className="absolute top-4 right-4 bg-black/60 backdrop-blur-xl border border-white/20 rounded-lg px-3 py-2"
                  animate={{
                    y: [0, -5, 0],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                >
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
                    <span className="text-xs text-white/80">AI Active</span>
                  </div>
                </motion.div>
                
                <motion.div
                  className="absolute bottom-4 left-4 bg-black/60 backdrop-blur-xl border border-white/20 rounded-lg px-3 py-2"
                  animate={{
                    y: [0, 5, 0],
                  }}
                  transition={{
                    duration: 2.5,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: 1
                  }}
                >
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-blue-400 rounded-full animate-pulse" />
                    <span className="text-xs text-white/80">Validating...</span>
                  </div>
                </motion.div>
              </div>
              
              {/* Corner Accents */}
              <div className="absolute -top-2 -left-2 w-4 h-4 border-l-2 border-t-2 border-blue-400/50 rounded-tl-lg" />
              <div className="absolute -top-2 -right-2 w-4 h-4 border-r-2 border-t-2 border-purple-400/50 rounded-tr-lg" />
              <div className="absolute -bottom-2 -left-2 w-4 h-4 border-l-2 border-b-2 border-blue-400/50 rounded-bl-lg" />
              <div className="absolute -bottom-2 -right-2 w-4 h-4 border-r-2 border-b-2 border-purple-400/50 rounded-br-lg" />
            </motion.div>

            {/* Integrated Logo Carousel */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="relative"
            >
              <LogoCarousel />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Before and After Section */}
      <section className="relative py-20 md:py-32 overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]" />
          <div className="absolute top-0 -left-1/4 w-1/2 h-1/2 bg-gradient-to-br from-blue-500/5 via-transparent to-transparent rounded-full blur-3xl" />
          <div className="absolute bottom-0 -right-1/4 w-1/2 h-1/2 bg-gradient-to-tl from-purple-500/5 via-transparent to-transparent rounded-full blur-3xl" />
        </div>

        <div className="container mx-auto px-4 relative max-w-[1400px] w-full">
          <div className="max-w-6xl mx-auto">
            {/* Header */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="inline-block rounded-full px-4 py-1.5 text-sm font-medium bg-gradient-to-r from-blue-500/10 to-purple-500/10 border border-blue-500/20 backdrop-blur-sm mb-6"
              >
                <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                  The Future is Unified
                </span>
              </motion.div>

              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="text-3xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight"
              >
                Every Tool You Need, Consolidated Within{' '}
                <span className="bg-gradient-to-r from-pink-400 to-purple-500 bg-clip-text text-transparent">
                  One
                </span>{' '}
                <span className="bg-gradient-to-r from-purple-400 to-blue-500 bg-clip-text text-transparent">
                  Exceptional Platform
                </span>
              </motion.h2>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="text-lg md:text-xl text-gray-400 max-w-3xl mx-auto"
              >
                We're building the next paradigm of hardware validation – sleek, intuitive and easy to use.
              </motion.p>
            </motion.div>

            {/* Before and After Comparison */}
            <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
              {/* Before Box */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
                className="relative"
              >
                <div className="text-center mb-8">
                  <h3 className="text-2xl md:text-3xl font-bold text-gray-300 mb-4">
                    Before TestFlow
                  </h3>
                </div>
                
                <div className="relative aspect-[4/3] rounded-3xl overflow-hidden bg-gradient-to-br from-gray-900/50 to-gray-800/30 border border-white/10 backdrop-blur-sm">
                  {/* Before Image - Scattered Tools */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="relative w-[95%] h-[95%]">
                      <Image
                        src="/images/before-scattered-tools.png"
                        alt="Before TestFlow - Scattered validation tools and complex workflows"
                        fill
                        className="object-contain"
                      />
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* After Box */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4 }}
                className="relative"
              >
                <div className="text-center mb-8">
                  <h3 className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent mb-4">
                    After TestFlow
                  </h3>
                </div>
                
                <div className="relative aspect-[4/3] rounded-3xl overflow-hidden bg-gradient-to-br from-blue-500/10 via-purple-500/10 to-blue-500/10 border border-blue-500/20 backdrop-blur-sm">
                  {/* Glow effect */}
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-500/5 via-purple-500/5 to-blue-500/5 rounded-3xl blur-xl" />
                  
                  {/* Feature Showcase */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    {/* Container for the entire showcase */}
                    <div className="relative w-full h-full flex items-center justify-center">
                      
                      {/* Central TestFlow Logo */}
                      <motion.div
                        initial={{ scale: 0, opacity: 0 }}
                        whileInView={{ scale: 1, opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.5, duration: 0.6, type: "spring" }}
                        className="absolute z-20"
                      >
                        <div className="w-40 h-40">
                          <Image
                            src="/images/testflow-logo.png"
                            alt="TestFlow Logo"
                            width={160}
                            height={160}
                            className="w-full h-full object-contain"
                          />
                        </div>
                      </motion.div>

                      {/* Orbital Rings */}
                      {[
                        { radius: 120, opacity: 0.1 },
                        { radius: 180, opacity: 0.08 },
                        { radius: 240, opacity: 0.06 }
                      ].map((ring, index) => (
                        <div
                          key={`ring-${index}`}
                          className="absolute rounded-full"
                          style={{
                            width: `${ring.radius * 2}px`,
                            height: `${ring.radius * 2}px`,
                            border: `1px solid rgba(255, 255, 255, ${ring.opacity})`,
                            left: '50%',
                            top: '50%',
                            transform: 'translate(-50%, -50%)'
                          }}
                        />
                      ))}

                      {/* Features - All on Middle Orbit */}
                      {[
                        { name: "AI Script Generation", startAngle: 0 },
                        { name: "Data Analytics", startAngle: 40 },
                        { name: "Universal Instruments", startAngle: 80 },
                        { name: "Workflow Builder", startAngle: 120 },
                        { name: "Pre-Built Templates", startAngle: 160 },
                        { name: "Automate Testing", startAngle: 200 },
                        { name: "Team Collaboration", startAngle: 240 },
                        { name: "Datasheet Creator", startAngle: 280 },
                        { name: "Real-time Monitoring", startAngle: 320 }
                      ].map((feature, index) => (
                        <motion.div
                          key={`middle-${feature.name}`}
                          initial={{ opacity: 1 }}
                          animate={{
                            transform: [
                              `translate(-50%, -50%) rotate(${feature.startAngle}deg) translateX(180px) rotate(-${feature.startAngle}deg)`,
                              `translate(-50%, -50%) rotate(${feature.startAngle + 360}deg) translateX(180px) rotate(-${feature.startAngle + 360}deg)`
                            ]
                          }}
                          transition={{
                            duration: 25,
                            repeat: Infinity,
                            ease: 'linear'
                          }}
                          whileHover={{
                            transition: { duration: 0 }
                          }}
                          className="absolute z-30"
                          style={{
                            left: '50%',
                            top: '50%',
                            transformOrigin: 'center center',
                            willChange: 'transform',
                            opacity: 1
                          }}
                        >
                          <div className="bg-gray-900/95 backdrop-blur-sm border border-white/20 rounded-full px-3 py-1.5 text-xs font-medium text-white whitespace-nowrap shadow-[0_2px_10px_rgba(0,0,0,0.3)] hover:bg-blue-500/20 hover:border-blue-400/40 hover:scale-110 transition-all duration-200 cursor-pointer">
                            {feature.name}
                          </div>
                        </motion.div>
                      ))}

                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Team Slides Section */}
      <section className="relative py-20 md:py-32 overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]" />
          <div className="absolute top-0 -left-1/4 w-1/2 h-1/2 bg-gradient-to-br from-purple-500/5 via-transparent to-transparent rounded-full blur-3xl" />
          <div className="absolute bottom-0 -right-1/4 w-1/2 h-1/2 bg-gradient-to-tl from-blue-500/5 via-transparent to-transparent rounded-full blur-3xl" />
        </div>

        <div className="container mx-auto px-4 relative max-w-[1400px] w-full">
          <div className="max-w-6xl mx-auto">
            {/* Header */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="inline-block rounded-full px-4 py-1.5 text-sm font-medium bg-gradient-to-r from-blue-500/10 to-purple-500/10 border border-blue-500/20 backdrop-blur-sm mb-6"
              >
                <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                  Advanced Validation Solutions
                </span>
              </motion.div>

              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="text-3xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight"
              >
                Revolutionizing{' '}
                <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
                  Chip Validation
                </span>
              </motion.h2>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="text-lg md:text-xl text-gray-400 max-w-3xl mx-auto"
              >
                Discover how TestFlow transforms semiconductor validation with cutting-edge AI, comprehensive analytics, and seamless team collaboration.
              </motion.p>
            </motion.div>

            {/* Slides Container */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="relative w-full"
            >
              {/* Slides Wrapper */}
              <div className="relative overflow-hidden rounded-3xl w-full">
                <div 
                  className="flex w-full transition-transform duration-500 ease-in-out"
                  style={{ transform: `translateX(-${currentSlide * 100}%)` }}
                >
                  {slides.map((slide, index) => (
                    <div key={slide.id} className="w-full flex-shrink-0">
                      {/* Full-width Image Container */}
                      <div className="relative aspect-[21/9] w-full bg-gradient-to-br from-gray-900/50 to-gray-800/30 border border-white/10 backdrop-blur-sm overflow-hidden">
                        {/* Background Gradient */}
                        <div className={`absolute inset-0 bg-gradient-to-r ${slide.gradient} opacity-30`} />
                        
                        {/* Actual Image or Placeholder */}
                        {index === 0 ? (
                          <Image
                            src="/images/TestFlow slide 1 .png"
                            alt="AI-Powered Validation - TestFlow Interface"
                            fill
                            className="object-cover w-full h-full"
                            style={{ objectPosition: 'center 30%' }}
                            priority={index === 0}
                          />
                        ) : index === 1 ? (
                          <Image
                            src="/images/Analytics slide 2 .png"
                            alt="Advanced Analytics Dashboard"
                            fill
                            className="object-cover w-full h-full"
                            style={{ objectPosition: 'center 30%' }}
                          />
                        ) : (
                          <Image
                            src="/images/Team Collaboration slide 3.png"
                            alt="Team Collaboration Interface"
                            fill
                            className="object-cover w-full h-full"
                            style={{ objectPosition: 'center 30%' }}
                          />
                        )}

                        {/* Content Overlay */}
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Navigation Arrows */}
              <div className="flex justify-center gap-4 mt-8">
                <button 
                  onClick={prevSlide}
                  className="w-12 h-12 rounded-full bg-white/[0.05] border border-white/10 flex items-center justify-center hover:bg-white/[0.1] transition-colors group"
                >
                  <svg className="w-5 h-5 text-gray-400 group-hover:text-white transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                  </svg>
                </button>
                <button 
                  onClick={nextSlide}
                  className="w-12 h-12 rounded-full bg-white/[0.05] border border-white/10 flex items-center justify-center hover:bg-white/[0.1] transition-colors group"
                >
                  <svg className="w-5 h-5 text-gray-400 group-hover:text-white transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </button>
              </div>

              {/* Slide Indicators */}
              <div className="flex justify-center gap-2 mt-6">
                {slides.map((_, index) => (
                  <button
                    key={`indicator-${index}`}
                    onClick={() => setCurrentSlide(index)}
                    className={`w-2 h-2 rounded-full transition-colors ${index === currentSlide ? 'bg-blue-400' : 'bg-white/20 hover:bg-white/40'}`}
                  ></button>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* AI Section */}
      <section className="relative py-20 md:py-32 overflow-hidden border-t border-white/10">
        {/* Enhanced background elements */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:32px_32px]" />
          <div className="absolute top-0 -left-1/4 w-3/4 h-3/4 bg-gradient-to-br from-blue-500/15 via-purple-500/10 to-transparent rounded-full blur-3xl" />
          <div className="absolute bottom-0 -right-1/4 w-3/4 h-3/4 bg-gradient-to-tl from-purple-500/15 via-blue-500/10 to-transparent rounded-full blur-3xl" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(59,130,246,0.05),transparent_70%)]" />
        </div>

        <div className="container mx-auto px-4 relative max-w-[1400px] w-full">
          <AISection />
        </div>
      </section>

      {/* Meet TestFlow Section */}
      <section className="relative py-20 md:py-32 overflow-hidden border-t border-white/10">
        {/* Background Elements */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]" />
          <div className="absolute top-0 -left-1/4 w-1/2 h-1/2 bg-gradient-to-br from-blue-500/10 via-transparent to-transparent rounded-full blur-3xl" />
          <div className="absolute bottom-0 -right-1/4 w-1/2 h-1/2 bg-gradient-to-tl from-purple-500/10 via-transparent to-transparent rounded-full blur-3xl" />
        </div>

        <div className="container mx-auto px-4 relative max-w-[1400px] w-full">
          <div className="max-w-6xl mx-auto">
            {/* Header */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="inline-block rounded-full px-4 py-1.5 text-sm font-medium bg-gradient-to-r from-blue-500/10 to-purple-500/10 border border-blue-500/20 backdrop-blur-sm mb-6"
              >
                <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                  Meet Our First AI Assistant
                </span>
              </motion.div>

              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="text-3xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight"
              >
                Meet TestFlow,{' '}
                <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                  the AI Validation Assistant
                </span>
              </motion.h2>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="text-lg md:text-xl text-gray-400 max-w-3xl mx-auto mb-8"
              >
                Your intelligent partner for automated hardware validation, designed to streamline testing processes and accelerate product launches.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
                className="flex flex-col sm:flex-row gap-4 justify-center mb-16"
              >
                <Button 
                  onClick={() => {
                    setShowVideoModal(true)
                    trackButtonClick('Watch Demo', 'Meet TestFlow Section', { page: 'home' })
                  }}
                  className="bg-gradient-to-r from-blue-500 to-purple-600 text-white hover:from-blue-600 hover:to-purple-700 rounded-full transition-all duration-300 hover:scale-105 hover:shadow-[0_0_25px_rgba(79,70,229,0.4)] flex items-center justify-center gap-2 h-12 px-8 text-lg font-semibold"
                >
                  <PlayCircle className="w-5 h-5" />
                  Watch Demo
                </Button>
                <Button asChild variant="outline" className="h-12 px-8 text-lg">
                  <Link 
                    href="/contact"
                    onClick={() => trackButtonClick('Talk to Sales', 'Meet TestFlow Section', { page: 'home' })}
                    className="rounded-full border border-blue-500/30 hover:border-blue-500/50 hover:bg-blue-500/5 flex items-center justify-center"
                  >
                    Talk to Sales
                  </Link>
                </Button>
              </motion.div>
            </motion.div>

            {/* Full-width Image Container */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className="relative w-full"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 via-purple-500/10 to-blue-500/10 rounded-3xl blur-3xl opacity-30" />
              <div className="relative rounded-3xl overflow-hidden border border-white/10 shadow-2xl bg-gradient-to-br from-gray-900/50 to-gray-800/30 backdrop-blur-sm">
                {/* Main Interface Image */}
                <div className="relative aspect-[21/9] w-full">
                  <Image
                    src="/images/TestFlow slide 1 .png"
                    alt="TestFlow AI Assistant Interface - Meet your intelligent validation partner"
                    fill
                    className="object-cover"
                    priority
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
                  
                  {/* Play Button Overlay */}
                  <motion.button
                    initial={{ scale: 0.8, opacity: 0 }}
                    whileInView={{ scale: 1, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.6, type: "spring", stiffness: 200 }}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => {
                      setShowVideoModal(true)
                      trackButtonClick('Play Video Overlay', 'Meet TestFlow Section', { page: 'home' })
                    }}
                    className="absolute inset-0 flex items-center justify-center group"
                  >
                    <div className="relative">
                      <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-full blur-2xl scale-150 group-hover:scale-175 transition-transform duration-300" />
                      <div className="relative w-20 h-20 md:w-24 md:h-24 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center shadow-2xl group-hover:shadow-[0_0_40px_rgba(79,70,229,0.6)] transition-all duration-300">
                        <PlayCircle className="w-10 h-10 md:w-12 md:h-12 text-white ml-1" />
                      </div>
                    </div>
                  </motion.button>
                </div>

                {/* Feature Highlights */}
                <div className="absolute bottom-6 left-6 right-6">
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    {[
                      { title: "AI-Powered Automation", description: "Intelligent test generation and execution" },
                      { title: "Natural Language Interface", description: "Communicate with your validation system" },
                      { title: "Real-time Analytics", description: "Instant insights and performance metrics" }
                    ].map((feature, index) => (
                      <motion.div
                        key={feature.title}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
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

      {/* How TestFlow Works Section */}
      <section className="relative py-20 md:py-32 overflow-hidden border-t border-white/10">
        {/* Background Elements */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]" />
          <div className="absolute top-0 -left-1/4 w-1/2 h-1/2 bg-gradient-to-br from-purple-500/10 via-transparent to-transparent rounded-full blur-3xl" />
          <div className="absolute bottom-0 -right-1/4 w-1/2 h-1/2 bg-gradient-to-tl from-blue-500/10 via-transparent to-transparent rounded-full blur-3xl" />
        </div>

        <div className="container mx-auto px-4 relative max-w-[1400px] w-full">
          <div className="max-w-7xl mx-auto">
            {/* Header */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="inline-block rounded-full px-4 py-1.5 text-sm font-medium bg-gradient-to-r from-purple-500/10 to-blue-500/10 border border-purple-500/20 backdrop-blur-sm mb-6"
              >
                <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
                  How TestFlow Works
                </span>
              </motion.div>

              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="text-3xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight"
              >
                Get Better{' '}
                <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
                  Results,
                </span>
                <br />
                Without Increasing Headcount
              </motion.h2>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="flex justify-center mb-12"
              >
                <Button asChild className="bg-gradient-to-r from-purple-500 to-blue-600 text-white hover:from-purple-600 hover:to-blue-700 rounded-full transition-all duration-300 hover:scale-105 hover:shadow-[0_0_25px_rgba(147,51,234,0.4)] h-12 px-8 text-lg font-semibold">
                  <Link 
                    href="/contact"
                    onClick={() => trackButtonClick('Talk to Sales', 'How TestFlow Works Section', { page: 'home' })}
                  >
                    Talk to Sales
                  </Link>
                </Button>
              </motion.div>
            </motion.div>

            {/* Process Steps Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
              {/* Step 1 - Large Card (Top Left) */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="lg:col-span-1 group relative"
              >
                <div className="relative h-full bg-gradient-to-br from-purple-500/10 to-purple-600/5 backdrop-blur-xl border border-purple-500/20 rounded-3xl p-8 hover:border-purple-400/40 transition-all duration-300 hover:scale-[1.02] min-h-[320px]">
                  {/* Step Number */}
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-12 h-12 rounded-full bg-gradient-to-r from-purple-500 to-purple-600 flex items-center justify-center text-white font-bold text-lg shadow-lg">
                      1
                    </div>
                    <h3 className="text-xl font-bold text-white">Connect Your Lab Instruments</h3>
                  </div>
                  
                  <p className="text-gray-300 text-base leading-relaxed mb-6">
                    Seamlessly connect your existing test equipment and lab instruments to TestFlow. Our universal compatibility ensures integration with leading hardware validation tools.
                  </p>

                  {/* Mock Instrument Connection Interface */}
                  <div className="bg-black/40 rounded-xl p-4 border border-purple-500/20">
                    <div className="flex items-center gap-2 mb-4">
                      <div className="w-3 h-3 rounded-full bg-red-400"></div>
                      <div className="w-3 h-3 rounded-full bg-yellow-400"></div>
                      <div className="w-3 h-3 rounded-full bg-green-400"></div>
                      <span className="text-xs text-purple-300 ml-2">Instrument Manager</span>
                    </div>
                    <div className="space-y-3">
                      <div className="flex items-center gap-3">
                        <div className="w-2 h-2 rounded-full bg-green-400"></div>
                        <span className="text-xs text-gray-300">Keysight E5071C Network Analyzer</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <div className="w-2 h-2 rounded-full bg-green-400"></div>
                        <span className="text-xs text-gray-300">Rohde & Schwarz FSW Signal Analyzer</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <div className="w-2 h-2 rounded-full bg-yellow-400"></div>
                        <span className="text-xs text-gray-300">Tektronix AWG70001A</span>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Step 2 - Large Card (Top Right) */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="lg:col-span-2 group relative"
              >
                <div className="relative h-full bg-gradient-to-br from-blue-500/10 to-blue-600/5 backdrop-blur-xl border border-blue-500/20 rounded-3xl p-8 hover:border-blue-400/40 transition-all duration-300 hover:scale-[1.02] min-h-[320px]">
                  {/* Step Number */}
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-12 h-12 rounded-full bg-gradient-to-r from-blue-500 to-blue-600 flex items-center justify-center text-white font-bold text-lg shadow-lg">
                      2
                    </div>
                    <h3 className="text-xl font-bold text-white">Ask AI for Your Validation Requirements</h3>
                  </div>
                  
                  <div className="grid md:grid-cols-2 gap-8 items-center">
                    <div>
                      <p className="text-gray-300 text-base leading-relaxed mb-6">
                        Describe your chip validation needs in natural language. TestFlow's AI understands your requirements and automatically configures the optimal testing parameters and protocols.
                      </p>
                      
                      <div className="space-y-3">
                        <div className="flex items-center gap-3">
                          <div className="w-2 h-2 rounded-full bg-blue-400"></div>
                          <span className="text-sm text-gray-300">Natural Language Processing</span>
                        </div>
                        <div className="flex items-center gap-3">
                          <div className="w-2 h-2 rounded-full bg-blue-400"></div>
                          <span className="text-sm text-gray-300">Intelligent Parameter Selection</span>
                        </div>
                        <div className="flex items-center gap-3">
                          <div className="w-2 h-2 rounded-full bg-blue-400"></div>
                          <span className="text-sm text-gray-300">Protocol Optimization</span>
                        </div>
                      </div>
                    </div>
                    
                    {/* Mock AI Chat Interface */}
                    <div className="bg-black/40 rounded-xl p-6 border border-blue-500/20">
                      <div className="space-y-4">
                        <div className="bg-blue-500/20 rounded-lg p-3 ml-8">
                          <div className="text-xs text-blue-300 mb-1">You</div>
                          <div className="text-sm text-white">I need to validate the RF performance of our new 5G chip at 28GHz frequency range</div>
                        </div>
                        <div className="bg-gray-700/40 rounded-lg p-3 mr-8">
                          <div className="text-xs text-gray-400 mb-1">TestFlow AI</div>
                          <div className="text-sm text-gray-200">I'll configure S-parameter measurements from 26-30GHz with 0.1GHz steps. Setting up power sweep from -10 to +20dBm...</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Step 3 - Large Card (Middle Left) */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
                className="lg:col-span-2 group relative"
              >
                <div className="relative h-full bg-gradient-to-br from-indigo-500/10 to-indigo-600/5 backdrop-blur-xl border border-indigo-500/20 rounded-3xl p-8 hover:border-indigo-400/40 transition-all duration-300 hover:scale-[1.02] min-h-[320px]">
                  {/* Step Number */}
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-12 h-12 rounded-full bg-gradient-to-r from-indigo-500 to-indigo-600 flex items-center justify-center text-white font-bold text-lg shadow-lg">
                      3
                    </div>
                    <h3 className="text-xl font-bold text-white">Get the Generated Test Script</h3>
                  </div>
                  
                  <div className="grid md:grid-cols-2 gap-8 items-center">
                    <div>
                      <p className="text-gray-300 text-base leading-relaxed mb-6">
                        TestFlow automatically generates comprehensive test scripts based on your requirements. Review, customize, and approve the validation sequence before execution.
                      </p>
                      
                      <div className="space-y-3">
                        <div className="flex items-center gap-3">
                          <div className="w-2 h-2 rounded-full bg-indigo-400"></div>
                          <span className="text-sm text-gray-300">Auto-Generated Scripts</span>
                        </div>
                        <div className="flex items-center gap-3">
                          <div className="w-2 h-2 rounded-full bg-indigo-400"></div>
                          <span className="text-sm text-gray-300">Customizable Parameters</span>
                        </div>
                        <div className="flex items-center gap-3">
                          <div className="w-2 h-2 rounded-full bg-indigo-400"></div>
                          <span className="text-sm text-gray-300">Industry Standards Compliance</span>
                        </div>
                      </div>
                    </div>
                    
                    {/* Mock Code Editor */}
                    <div className="bg-black/40 rounded-xl p-4 border border-indigo-500/20">
                      <div className="flex items-center gap-2 mb-3">
                        <div className="w-3 h-3 rounded-full bg-red-400"></div>
                        <div className="w-3 h-3 rounded-full bg-yellow-400"></div>
                        <div className="w-3 h-3 rounded-full bg-green-400"></div>
                        <span className="text-xs text-indigo-300 ml-2">validation_script.py</span>
                      </div>
                      <div className="space-y-1 text-xs font-mono">
                        <div className="text-purple-300"># RF Performance Validation</div>
                        <div className="text-blue-300">freq_range = <span className="text-yellow-300">(26e9, 30e9)</span></div>
                        <div className="text-blue-300">power_sweep = <span className="text-yellow-300">(-10, 20)</span></div>
                        <div className="text-green-300">measure_s_parameters()</div>
                        <div className="text-green-300">analyze_linearity()</div>
                        <div className="text-gray-400"># Auto-generated by TestFlow AI</div>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Step 4 - Large Card (Middle Right) */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4 }}
                className="lg:col-span-1 group relative"
              >
                <div className="relative h-full bg-gradient-to-br from-violet-500/10 to-violet-600/5 backdrop-blur-xl border border-violet-500/20 rounded-3xl p-8 hover:border-violet-400/40 transition-all duration-300 hover:scale-[1.02] min-h-[320px]">
                  {/* Step Number */}
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-12 h-12 rounded-full bg-gradient-to-r from-violet-500 to-violet-600 flex items-center justify-center text-white font-bold text-lg shadow-lg">
                      4
                    </div>
                    <h3 className="text-xl font-bold text-white">Start Executing the Validation</h3>
                  </div>
                  
                  <p className="text-gray-300 text-base leading-relaxed mb-6">
                    Execute your validation tests with real-time monitoring and progress tracking. TestFlow manages the entire process automatically while you monitor the results.
                  </p>

                  {/* Mock Execution Progress */}
                  <div className="bg-black/40 rounded-xl p-4 border border-violet-500/20">
                    <div className="space-y-4">
                      <div className="flex items-center justify-between">
                        <span className="text-xs text-violet-300">RF Validation Progress</span>
                        <span className="text-xs text-green-400">Running...</span>
                      </div>
                      
                      <div className="space-y-3">
                        <div className="flex items-center gap-3">
                          <div className="w-4 h-4 rounded bg-green-500 flex items-center justify-center">
                            <div className="w-2 h-2 bg-white rounded"></div>
                          </div>
                          <div className="flex-1">
                            <div className="text-xs text-gray-300">S-Parameter Sweep</div>
                            <div className="w-full bg-gray-700 rounded-full h-1.5 mt-1">
                              <div className="bg-green-400 h-1.5 rounded-full w-full"></div>
                            </div>
                          </div>
                        </div>
                        
                        <div className="flex items-center gap-3">
                          <div className="w-4 h-4 rounded bg-violet-500 flex items-center justify-center animate-pulse">
                            <div className="w-2 h-2 bg-white rounded"></div>
                          </div>
                          <div className="flex-1">
                            <div className="text-xs text-gray-300">Power Linearity Test</div>
                            <div className="w-full bg-gray-700 rounded-full h-1.5 mt-1">
                              <div className="bg-violet-400 h-1.5 rounded-full w-3/4"></div>
                            </div>
                          </div>
                        </div>
                        
                        <div className="flex items-center gap-3">
                          <div className="w-4 h-4 rounded bg-gray-600 flex items-center justify-center">
                            <div className="w-2 h-2 bg-gray-400 rounded"></div>
                          </div>
                          <div className="flex-1">
                            <div className="text-xs text-gray-400">Noise Figure Analysis</div>
                            <div className="w-full bg-gray-700 rounded-full h-1.5 mt-1">
                              <div className="bg-gray-500 h-1.5 rounded-full w-1/4"></div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Step 5 - Wide Card (Bottom) */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5 }}
                className="lg:col-span-3 group relative"
              >
                <div className="relative h-full bg-gradient-to-br from-pink-500/10 to-pink-600/5 backdrop-blur-xl border border-pink-500/20 rounded-3xl p-8 hover:border-pink-400/40 transition-all duration-300 hover:scale-[1.02] min-h-[280px]">
                  {/* Step Number */}
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-12 h-12 rounded-full bg-gradient-to-r from-pink-500 to-pink-600 flex items-center justify-center text-white font-bold text-lg shadow-lg">
                      5
                    </div>
                    <h3 className="text-xl font-bold text-white">Data Analytics and Generate Report</h3>
                  </div>
                  
                  <div className="grid md:grid-cols-3 gap-8 items-center">
                    <div className="md:col-span-1">
                      <p className="text-gray-300 text-base leading-relaxed mb-6">
                        Comprehensive data analysis with automated report generation. Get detailed insights, pass/fail results, and compliance verification with industry standards.
                      </p>
                      
                      <div className="space-y-3">
                        <div className="flex items-center gap-3">
                          <div className="w-2 h-2 rounded-full bg-pink-400"></div>
                          <span className="text-sm text-gray-300">Automated Analysis</span>
                        </div>
                        <div className="flex items-center gap-3">
                          <div className="w-2 h-2 rounded-full bg-pink-400"></div>
                          <span className="text-sm text-gray-300">Compliance Reports</span>
                        </div>
                        <div className="flex items-center gap-3">
                          <div className="w-2 h-2 rounded-full bg-pink-400"></div>
                          <span className="text-sm text-gray-300">Trend Analysis</span>
                        </div>
                      </div>
                    </div>
                    
                    {/* Mock Analytics Dashboard */}
                    <div className="md:col-span-2 bg-black/40 rounded-xl p-6 border border-pink-500/20">
                      <div className="grid grid-cols-2 gap-6">
                        {/* Chart Area */}
                        <div>
                          <div className="flex items-center justify-between mb-3">
                            <span className="text-xs text-pink-300">S-Parameter Results</span>
                            <span className="text-xs text-green-400">✓ PASS</span>
                          </div>
                          <div className="flex items-end gap-1 h-20">
                            {[60, 80, 45, 90, 70, 85, 75, 95, 65, 88].map((height, i) => (
                              <div 
                                key={i}
                                className="bg-gradient-to-t from-pink-500 to-pink-300 rounded-sm flex-1"
                                style={{ height: `${height}%` }}
                              ></div>
                            ))}
                          </div>
                        </div>
                        
                        {/* Metrics */}
                        <div className="space-y-4">
                          <div className="bg-gray-800/50 rounded-lg p-3">
                            <div className="text-xs text-gray-400">Return Loss</div>
                            <div className="text-lg font-bold text-green-400">-25.3 dB</div>
                            <div className="text-xs text-gray-500">Spec: &lt; -20 dB</div>
                          </div>
                          <div className="bg-gray-800/50 rounded-lg p-3">
                            <div className="text-xs text-gray-400">Insertion Loss</div>
                            <div className="text-lg font-bold text-green-400">-1.2 dB</div>
                            <div className="text-xs text-gray-500">Spec: &lt; -2 dB</div>
                          </div>
                          <div className="bg-gray-800/50 rounded-lg p-3">
                            <div className="text-xs text-gray-400">Overall Result</div>
                            <div className="text-lg font-bold text-green-400">PASS</div>
                            <div className="text-xs text-gray-500">All specs met</div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Compatibility Section */}
      <section className="py-10 md:py-16 border-t border-white/10">
        <div className="container mx-auto px-4 max-w-[1400px] w-full">
          <div className="max-w-4xl mx-auto">
            <CompatibilitySection />
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
                    onClick={() => trackButtonClick('Get Started', 'Final CTA', { page: 'home' })}
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
                {/* Image with layered effects like about page */}
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

      <VideoModal 
        isOpen={showVideoModal}
        onClose={() => setShowVideoModal(false)}
      />

      <WebinarPopup 
        isOpen={showWebinar}
        onClose={handleCloseWebinar}
      />

      <Notification 
        isOpen={showSubscribeNotification}
        onClose={() => setShowSubscribeNotification(false)}
        message="Thanks for subscribing! We'll keep you updated with the latest news."
      />

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
                The AI validation platform that accelerates you product launch.
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
                      {social.icon === 'twitter' && <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"/></svg>}
                      {social.icon === 'linkedin' && <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect x="2" y="9" width="4" height="12"/><circle cx="4" cy="4" r="2"/></svg>}
                      {social.icon === 'github' && <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"/></svg>}
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

      {/* Custom Styles */}
      <style jsx>{`
        @keyframes shimmer {
          0% {
            transform: translateX(-100%) skewX(-12deg);
          }
          100% {
            transform: translateX(200%) skewX(-12deg);
          }
        }
        
        .animate-shimmer {
          animation: shimmer 1.5s ease-in-out;
        }
        
        @keyframes float {
          0%, 100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-10px);
          }
        }
        
        .animate-float {
          animation: float 3s ease-in-out infinite;
        }
        
        @keyframes glow {
          0%, 100% {
            opacity: 0.5;
          }
          50% {
            opacity: 1;
          }
        }
        
        .animate-glow {
          animation: glow 2s ease-in-out infinite;
        }
      `}</style>
    </div>
  )
} 