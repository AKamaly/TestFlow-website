'use client'

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Check, ArrowRight, Clock, AlertTriangle, PlayCircle } from 'lucide-react'
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
import { VideoModal } from "@/components/video-modal"
import { WebinarPopup } from "@/components/webinar-popup"
import { SectionTracker, trackButtonClick, trackFormSubmission, trackPageSpecificEvent } from '@/components/analytics-tracker'

export function HomePage() {
  const [showSubscribeNotification, setShowSubscribeNotification] = useState(false)
  const [showWebinar, setShowWebinar] = useState(false)
  const [showVideoModal, setShowVideoModal] = useState(false)


  // Show webinar popup on page load
  useEffect(() => {
    const hasSeenWebinar = sessionStorage.getItem('hasSeenWebinar')
    if (!hasSeenWebinar) {
      const timer = setTimeout(() => {
        setShowWebinar(true)
      }, 3000) // 3 second delay
      
      return () => clearTimeout(timer) // Cleanup timeout on unmount
    }
  }, [])



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
                ✨ Accelerate Your Post-Silicon Success
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
                Post-Silicon Validation Automation That Delivers Results
              </span>
              
              {/* Glow Effect Behind Text */}
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 via-white/10 to-purple-500/20 blur-2xl -z-10 scale-110" />
            </motion.h1>

            {/* Enhanced Description */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-base md:text-lg text-gray-400 max-w-xl mx-auto mb-8 relative"
            >
              <span className="relative z-10">
                Cut validation time by up to 70% while improving quality. Our AI-powered platform streamlines your post-silicon validation workflow, helping you ship reliable products faster and reduce costs.
              </span>
              {/* Subtle glow behind text */}
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500/5 to-purple-500/5 blur-xl -z-10" />
            </motion.div>

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
                  Built for Validation Engineers
                </span>
              </motion.div>

              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="text-3xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight"
              >
                Replace LabVIEW, Python, and Every Other Tool with{' '}
                <span className="bg-gradient-to-r from-pink-400 to-purple-500 bg-clip-text text-transparent">
                  One
                </span>{' '}
                <span className="bg-gradient-to-r from-purple-400 to-blue-500 bg-clip-text text-transparent">
                  Simple AI Platform
                </span>
              </motion.h2>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="text-lg md:text-xl text-gray-400 max-w-3xl mx-auto"
              >
                Stop juggling multiple instruments, scripts, and data analysis tools. TestFlow brings everything together in one intelligent platform designed specifically for post-silicon validation engineers.
              </motion.div>
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
                        src="/images/before-scattered-tools.webp"
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
                            src="/images/testflow-logo.webp"
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

      {/* Validation Success Stories Section */}
      <section className="relative py-20 md:py-32 overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]" />
          <div className="absolute top-0 -left-1/4 w-1/2 h-1/2 bg-gradient-to-br from-purple-500/5 via-transparent to-transparent rounded-full blur-3xl" />
          <div className="absolute bottom-0 -right-1/4 w-1/2 h-1/2 bg-gradient-to-tl from-blue-500/5 via-transparent to-transparent rounded-full blur-3xl" />
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
                className="inline-block rounded-full px-4 py-1.5 text-sm font-medium bg-gradient-to-r from-green-500/10 to-blue-500/10 border border-green-500/20 backdrop-blur-sm mb-6"
              >
                <span className="bg-gradient-to-r from-green-400 to-blue-400 bg-clip-text text-transparent">
                  ⚡ Validation Engineer Success Stories
                </span>
              </motion.div>

              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="text-3xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight"
              >
                Stop Spending Weeks on{' '}
                <span className="bg-gradient-to-r from-red-400 to-orange-500 bg-clip-text text-transparent">
                  Manual Validation
                </span>
              </motion.h2>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="text-lg md:text-xl text-gray-400 max-w-3xl mx-auto"
              >
                See how AI automation transforms the three most time-consuming tasks in post-silicon validation workflows.
              </motion.p>
            </motion.div>

            {/* Feature Showcase Image */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="relative mb-20"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 via-purple-500/10 to-green-500/10 rounded-3xl blur-3xl opacity-30" />
              <div className="relative rounded-3xl overflow-hidden border border-white/10 shadow-2xl bg-gradient-to-br from-gray-900/50 to-gray-800/30 backdrop-blur-sm">
                
                {/* Main Feature Image */}
                <div className="relative aspect-[21/9] w-full overflow-hidden">
                  <Image
                    src="https://9zog2la6l29pbfba.public.blob.vercel-storage.com/TestFlow%20%20image.png"
                    alt="TestFlow AI Platform - Complete validation workflow automation showing AI script generation, data analytics, and real-time monitoring"
                    fill
                    className="object-cover"
                    priority
                  />
                  
                  {/* Transparent Play Button */}
                  <motion.button
                    initial={{ scale: 0.8, opacity: 0 }}
                    whileInView={{ scale: 1, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.5, type: "spring", stiffness: 200 }}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => {
                      setShowVideoModal(true)
                      trackButtonClick('Play Validation Demo Video', 'Validation Success Stories', { page: 'home' })
                    }}
                    className="absolute flex items-center justify-center group cursor-pointer"
                    style={{ 
                      left: '45%', 
                      top: '60%', 
                      transform: 'translate(-50%, -50%)' 
                    }}
                  >
                    {/* Background Glow */}
                    <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-full blur-xl scale-150 group-hover:scale-175 transition-transform duration-300" />
                    
                    {/* Play Button */}
                    <div className="relative w-16 h-16 md:w-20 md:h-20 bg-gradient-to-r from-blue-500/80 to-purple-600/80 backdrop-blur-sm rounded-full flex items-center justify-center border border-blue-400/50 group-hover:from-blue-500/90 group-hover:to-purple-600/90 group-hover:border-blue-400/70 transition-all duration-300 shadow-lg group-hover:shadow-[0_0_25px_rgba(79,70,229,0.6)]">
                      <PlayCircle className="w-8 h-8 md:w-10 md:h-10 text-white ml-0.5" />
                    </div>
                  </motion.button>
                </div>
              </div>
            </motion.div>

            {/* Validation Use Cases Grid */}
            <div className="grid lg:grid-cols-3 gap-8 mb-16">
              {/* Use Case 1: AI Script Generation */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4 }}
                className="bg-gradient-to-br from-blue-500/10 to-blue-600/5 backdrop-blur-xl border border-blue-500/20 rounded-3xl p-8 hover:border-blue-400/40 transition-all duration-300 hover:scale-[1.02]"
              >
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-r from-blue-500 to-blue-600 flex items-center justify-center">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold text-white">AI Script Generation</h3>
                </div>
                
                <p className="text-gray-300 mb-6">
                  Transform datasheet specifications into production-ready test scripts automatically. Upload your datasheet, describe requirements, and get comprehensive validation code in minutes.
                </p>
                
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="text-gray-400">Manual Scripting:</span>
                    <span className="text-red-400 font-semibold">3-5 days</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-gray-400">With TestFlow AI:</span>
                    <span className="text-green-400 font-semibold">2 hours</span>
                  </div>
                  <div className="border-t border-white/10 pt-4">
                    <div className="text-2xl font-bold text-green-400 mb-1">94% Faster</div>
                    <div className="text-sm text-gray-400">Script generation from specs</div>
                  </div>
                </div>
              </motion.div>

              {/* Use Case 2: Automated Test Planning */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5 }}
                className="bg-gradient-to-br from-purple-500/10 to-purple-600/5 backdrop-blur-xl border border-purple-500/20 rounded-3xl p-8 hover:border-purple-400/40 transition-all duration-300 hover:scale-[1.02]"
              >
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-r from-purple-500 to-purple-600 flex items-center justify-center">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold text-white">Automated Test Planning</h3>
                </div>
                
                <p className="text-gray-300 mb-6">
                  Generate comprehensive test plans from datasheet specifications. AI analyzes your chip requirements and creates detailed validation sequences with optimal test coverage.
                </p>
                
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="text-gray-400">Manual Planning:</span>
                    <span className="text-red-400 font-semibold">1-2 weeks</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-gray-400">With TestFlow:</span>
                    <span className="text-green-400 font-semibold">1 day</span>
                  </div>
                  <div className="border-t border-white/10 pt-4">
                    <div className="text-2xl font-bold text-green-400 mb-1">85% Faster</div>
                    <div className="text-sm text-gray-400">Complete test planning</div>
                  </div>
                </div>
              </motion.div>

              {/* Use Case 3: Real-time Analytics */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.6 }}
                className="bg-gradient-to-br from-green-500/10 to-green-600/5 backdrop-blur-xl border border-green-500/20 rounded-3xl p-8 hover:border-green-400/40 transition-all duration-300 hover:scale-[1.02]"
              >
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-r from-green-500 to-green-600 flex items-center justify-center">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold text-white">Real-time Analytics</h3>
                </div>
                
                <p className="text-gray-300 mb-6">
                  Monitor validation progress with live analytics dashboards. Get instant pass/fail determinations, automated compliance checking, and detailed performance insights.
                </p>
                
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="text-gray-400">Manual Analysis:</span>
                    <span className="text-red-400 font-semibold">2-3 days</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-gray-400">With TestFlow:</span>
                    <span className="text-green-400 font-semibold">Real-time</span>
                  </div>
                  <div className="border-t border-white/10 pt-4">
                    <div className="text-2xl font-bold text-green-400 mb-1">99.7% Accuracy</div>
                    <div className="text-sm text-gray-400">Automated validation</div>
                  </div>
                </div>
              </motion.div>
            </div>

            {/* Social Proof & CTA */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.7 }}
              className="text-center"
            >
              <div className="flex flex-col items-center gap-6 mb-8">
                <div className="flex -space-x-3">
                  <img 
                    src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face" 
                    alt="Validation Engineer" 
                    className="w-12 h-12 rounded-full border-3 border-white/30 shadow-lg"
                  />
                  <img 
                    src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=100&h=100&fit=crop&crop=face" 
                    alt="Validation Engineer" 
                    className="w-12 h-12 rounded-full border-3 border-white/30 shadow-lg"
                  />
                  <img 
                    src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face" 
                    alt="Validation Engineer" 
                    className="w-12 h-12 rounded-full border-3 border-white/30 shadow-lg"
                  />
                  <img 
                    src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop&crop=face" 
                    alt="Validation Engineer" 
                    className="w-12 h-12 rounded-full border-3 border-white/30 shadow-lg"
                  />
                  <img 
                    src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&h=100&fit=crop&crop=face" 
                    alt="Validation Engineer" 
                    className="w-12 h-12 rounded-full border-3 border-white/30 shadow-lg"
                  />
                  <div className="w-12 h-12 rounded-full bg-gradient-to-r from-green-500/20 to-blue-500/20 border-3 border-white/30 flex items-center justify-center backdrop-blur-sm">
                    <span className="text-xs font-semibold text-white">+195</span>
                  </div>
                </div>
                
                <div className="space-y-2">
                  <p className="text-lg text-gray-300">
                    <span className="text-green-400 font-semibold">200+ validation engineers</span> are saving 70% of their validation time
                  </p>
                  <p className="text-sm text-gray-500">
                    Used by validation teams at leading semiconductor companies worldwide
                  </p>
                </div>
              </div>
              
              <Button asChild className="bg-gradient-to-r from-green-500 to-blue-600 text-white hover:from-green-600 hover:to-blue-700 rounded-full transition-all duration-300 hover:scale-105 hover:shadow-[0_0_25px_rgba(34,197,94,0.4)] h-16 px-12 text-xl font-semibold">
                <Link 
                  href="/contact"
                  onClick={() => trackButtonClick('Start Free Trial', 'Validation Success Stories', { page: 'home' })}
                >
                  Start Your Free Trial →
                </Link>
              </Button>
              
              <p className="text-sm text-gray-500 mt-4">
                Free 30-day trial • Full platform access • No credit card required • Setup in 5 minutes
              </p>
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
                  <div className="bg-white rounded-xl p-5 border border-gray-200 shadow-lg">
                    {/* App Header */}
                    <div className="flex items-center justify-between mb-4 pb-3 border-b border-gray-100">
                      <div className="flex items-center gap-3">
                        <div className="w-8 h-8 rounded-lg bg-gradient-to-r from-purple-500 to-purple-600 flex items-center justify-center">
                          <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" />
                          </svg>
                        </div>
                        <span className="text-sm font-semibold text-gray-800">Instrument Manager</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <div className="w-3 h-3 rounded-full bg-red-400"></div>
                        <div className="w-3 h-3 rounded-full bg-yellow-400"></div>
                        <div className="w-3 h-3 rounded-full bg-green-400"></div>
                      </div>
                    </div>
                    
                    {/* Instrument List */}
                    <div className="space-y-3">
                      <div className="flex items-center gap-3 p-3 bg-green-50 rounded-lg border border-green-200">
                        <div className="w-3 h-3 rounded-full bg-green-500 shadow-sm"></div>
                        <div className="flex-1">
                          <div className="text-sm font-medium text-gray-800">Keysight E36312A Power Supply</div>
                          <div className="text-xs text-green-600">Connected • Ready</div>
                        </div>
                        <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></div>
                      </div>
                      <div className="flex items-center gap-3 p-3 bg-green-50 rounded-lg border border-green-200">
                        <div className="w-3 h-3 rounded-full bg-green-500 shadow-sm"></div>
                        <div className="flex-1">
                          <div className="text-sm font-medium text-gray-800">Keithley 2450 Source Meter</div>
                          <div className="text-xs text-green-600">Connected • Ready</div>
                        </div>
                        <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></div>
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
                    <div className="bg-white rounded-xl p-5 border border-gray-200 shadow-lg">
                      {/* Chat Header */}
                      <div className="flex items-center justify-between mb-4 pb-3 border-b border-gray-100">
                        <div className="flex items-center gap-3">
                          <div className="w-8 h-8 rounded-lg bg-gradient-to-r from-blue-500 to-blue-600 flex items-center justify-center">
                            <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                            </svg>
                          </div>
                          <span className="text-sm font-semibold text-gray-800">TestFlow AI Assistant</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></div>
                          <span className="text-xs text-green-600">Online</span>
                        </div>
                      </div>
                      
                      {/* Chat Messages */}
                      <div className="space-y-4">
                        <div className="flex justify-end">
                          <div className="bg-blue-500 rounded-lg p-3 max-w-[80%]">
                            <div className="text-xs text-blue-100 mb-1">You</div>
                            <div className="text-sm text-white">I need to validate the RF performance of our new 5G chip at 28GHz frequency range</div>
                          </div>
                        </div>
                        <div className="flex justify-start">
                          <div className="bg-gray-100 rounded-lg p-3 max-w-[80%]">
                            <div className="text-xs text-gray-500 mb-1">TestFlow AI</div>
                            <div className="text-sm text-gray-800">I'll configure S-parameter measurements from 26-30GHz with 0.1GHz steps. Setting up power sweep from -10 to +20dBm...</div>
                            <div className="flex items-center gap-2 mt-2">
                              <div className="w-1 h-1 rounded-full bg-blue-500 animate-pulse"></div>
                              <div className="w-1 h-1 rounded-full bg-blue-500 animate-pulse" style={{animationDelay: '0.2s'}}></div>
                              <div className="w-1 h-1 rounded-full bg-blue-500 animate-pulse" style={{animationDelay: '0.4s'}}></div>
                            </div>
                          </div>
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
                    <div className="bg-white rounded-xl border border-gray-200 shadow-lg overflow-hidden">
                      {/* Editor Header */}
                      <div className="flex items-center justify-between px-4 py-3 bg-gray-50 border-b border-gray-200">
                        <div className="flex items-center gap-3">
                          <div className="flex items-center gap-1">
                            <div className="w-3 h-3 rounded-full bg-red-400"></div>
                            <div className="w-3 h-3 rounded-full bg-yellow-400"></div>
                            <div className="w-3 h-3 rounded-full bg-green-400"></div>
                          </div>
                          <div className="flex items-center gap-2">
                            <svg className="w-4 h-4 text-indigo-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                            </svg>
                            <span className="text-sm font-medium text-gray-700">validation_script.py</span>
                          </div>
                        </div>
                        <div className="flex items-center gap-2">
                          <div className="px-2 py-1 bg-green-100 text-green-700 text-xs rounded-md font-medium">
                            AI Generated
                          </div>
                        </div>
                      </div>
                      
                      {/* Code Content */}
                      <div className="p-4 bg-gray-900 text-xs font-mono leading-relaxed">
                        <div className="space-y-1">
                          <div className="text-green-400"># RF Performance Validation Script</div>
                          <div className="text-gray-500"># Auto-generated by TestFlow AI</div>
                          <div className="text-blue-300">freq_range = <span className="text-yellow-300">(26e9, 30e9)</span></div>
                          <div className="text-blue-300">power_sweep = <span className="text-yellow-300">(-10, 20)</span></div>
                          <div className="text-purple-300">def validate_rf_performance():</div>
                          <div className="text-white ml-4">measure_s_parameters(freq_range)</div>
                          <div className="text-white ml-4">analyze_linearity(power_sweep)</div>
                          <div className="text-white ml-4">generate_report()</div>
                          <div className="text-gray-500 mt-2"># Ready for execution ✓</div>
                        </div>
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
                    Execute your PMIC validation tests with real-time monitoring and progress tracking. TestFlow manages the entire process automatically while you monitor the results.
                  </p>

                  {/* Mock Execution Progress */}
                  <div className="bg-white rounded-xl p-5 border border-gray-200 shadow-lg">
                    {/* Progress Header */}
                    <div className="flex items-center justify-between mb-4 pb-3 border-b border-gray-100">
                      <div className="flex items-center gap-3">
                        <div className="w-8 h-8 rounded-lg bg-gradient-to-r from-violet-500 to-violet-600 flex items-center justify-center">
                          <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                          </svg>
                        </div>
                        <span className="text-sm font-semibold text-gray-800">PMIC Validation Progress</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></div>
                        <span className="text-xs text-green-600 font-medium">Running...</span>
                      </div>
                    </div>
                    
                    {/* Single Progress Item */}
                    <div className="flex items-center gap-4 p-4 bg-violet-50 rounded-lg border border-violet-200">
                      <div className="w-8 h-8 rounded-full bg-violet-500 flex items-center justify-center animate-pulse shadow-sm">
                        <div className="w-3 h-3 bg-white rounded-full"></div>
                      </div>
                      <div className="flex-1">
                        <div className="text-lg font-semibold text-gray-800">Load Regulation Test</div>
                        <div className="text-sm text-gray-600 mb-3">Testing output voltage stability under varying load conditions</div>
                        <div className="w-full bg-gray-200 rounded-full h-3 mt-2">
                          <div className="bg-violet-500 h-3 rounded-full w-3/4 shadow-sm transition-all duration-1000"></div>
                        </div>
                        <div className="flex items-center justify-between mt-2">
                          <div className="text-xs text-violet-600 font-medium">In Progress • 75%</div>
                          <div className="text-xs text-gray-500">Load: 0.1A → 3.0A</div>
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
                    <h3 className="text-xl font-bold text-white">PMIC Analytics and Generate Report</h3>
                  </div>
                  
                  <div className="grid md:grid-cols-3 gap-8 items-center">
                    <div className="md:col-span-1">
                      <p className="text-gray-300 text-base leading-relaxed mb-6">
                        Comprehensive PMIC data analysis with automated report generation. Get detailed V/I sweep results, load regulation analysis, and compliance verification.
                      </p>
                      
                      <div className="space-y-3">
                        <div className="flex items-center gap-3">
                          <div className="w-2 h-2 rounded-full bg-pink-400"></div>
                          <span className="text-sm text-gray-300">V/I Curve Analysis</span>
                        </div>
                        <div className="flex items-center gap-3">
                          <div className="w-2 h-2 rounded-full bg-pink-400"></div>
                          <span className="text-sm text-gray-300">Load Regulation Reports</span>
                        </div>
                        <div className="flex items-center gap-3">
                          <div className="w-2 h-2 rounded-full bg-pink-400"></div>
                          <span className="text-sm text-gray-300">Efficiency Analysis</span>
                        </div>
                      </div>
                    </div>
                    
                    {/* Mock Analytics Dashboard */}
                    <div className="md:col-span-2 bg-white rounded-xl p-6 border border-gray-200 shadow-lg">
                      {/* Dashboard Header */}
                      <div className="flex items-center justify-between mb-4 pb-3 border-b border-gray-100">
                        <div className="flex items-center gap-3">
                          <div className="w-8 h-8 rounded-lg bg-gradient-to-r from-pink-500 to-pink-600 flex items-center justify-center">
                            <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                            </svg>
                          </div>
                          <span className="text-sm font-semibold text-gray-800">PMIC V/I Sweep Analysis</span>
                        </div>
                        <div className="px-3 py-1 bg-green-100 text-green-700 text-xs rounded-full font-medium">
                          ✓ PASS
                        </div>
                      </div>
                      
                      <div className="grid grid-cols-2 gap-6">
                        {/* V/I Curve Chart */}
                        <div>
                          <div className="mb-3">
                            <span className="text-sm font-medium text-gray-700">Voltage vs Current Curve</span>
                          </div>
                          <div className="h-24 bg-gray-50 rounded-lg p-3 relative overflow-hidden">
                            {/* Voltage curve - ascending line */}
                            <svg className="w-full h-full" viewBox="0 0 100 60">
                              {/* Grid lines */}
                              <defs>
                                <pattern id="grid" width="10" height="10" patternUnits="userSpaceOnUse">
                                  <path d="M 10 0 L 0 0 0 10" fill="none" stroke="#e5e7eb" strokeWidth="0.5"/>
                                </pattern>
                              </defs>
                              <rect width="100" height="60" fill="url(#grid)" />
                              
                              {/* Voltage curve */}
                              <path 
                                d="M 5 50 Q 25 45 45 35 Q 65 25 95 15" 
                                fill="none" 
                                stroke="#ec4899" 
                                strokeWidth="2"
                                className="drop-shadow-sm"
                              />
                              
                              {/* Data points */}
                              {[
                                {x: 5, y: 50}, {x: 15, y: 47}, {x: 25, y: 43}, 
                                {x: 35, y: 38}, {x: 45, y: 32}, {x: 55, y: 28}, 
                                {x: 65, y: 23}, {x: 75, y: 19}, {x: 85, y: 16}, {x: 95, y: 15}
                              ].map((point, i) => (
                                <circle 
                                  key={i}
                                  cx={point.x} 
                                  cy={point.y} 
                                  r="1.5" 
                                  fill="#ec4899"
                                  className="drop-shadow-sm"
                                />
                              ))}
                            </svg>
                            
                            {/* Axis labels */}
                            <div className="absolute bottom-1 left-2 text-xs text-gray-500">0A</div>
                            <div className="absolute bottom-1 right-2 text-xs text-gray-500">3A</div>
                            <div className="absolute top-1 left-1 text-xs text-gray-500 transform -rotate-90 origin-center">3.3V</div>
                          </div>
                        </div>
                        
                        {/* PMIC Metrics */}
                        <div className="space-y-3">
                          <div className="bg-green-50 rounded-lg p-3 border border-green-200">
                            <div className="text-xs text-gray-600 font-medium">Load Regulation</div>
                            <div className="text-lg font-bold text-green-600">0.02%</div>
                            <div className="text-xs text-gray-500">Spec: &lt; 0.1% ✓</div>
                          </div>
                          <div className="bg-green-50 rounded-lg p-3 border border-green-200">
                            <div className="text-xs text-gray-600 font-medium">Efficiency</div>
                            <div className="text-lg font-bold text-green-600">94.2%</div>
                            <div className="text-xs text-gray-500">Spec: &gt; 90% ✓</div>
                          </div>
                          <div className="bg-blue-50 rounded-lg p-3 border border-blue-200">
                            <div className="text-xs text-gray-600 font-medium">Overall Result</div>
                            <div className="text-lg font-bold text-blue-600">PASS</div>
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
                
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 }}
                  className="text-lg text-gray-300 leading-relaxed max-w-lg"
                >
                  Join leading companies who trust Atoms TestFlow to validate their products faster and more efficiently.
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
                        src="/images/TestFlow CTA Image .webp"
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