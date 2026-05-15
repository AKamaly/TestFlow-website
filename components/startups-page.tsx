'use client'

import React from 'react'
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Check, ArrowRight, Rocket, Lightbulb, Gauge, DollarSign, PlayCircle, Zap, Target, TrendingUp } from 'lucide-react'
import { motion } from 'framer-motion'
import Image from "next/image"
import { SiteHeader } from "@/components/site-header"
import { useState } from 'react'
import { SectionTracker, trackButtonClick, trackFormSubmission } from '@/components/analytics-tracker'
import { LogoCarousel } from '@/components/logo-carousel'
import { SiteFooter } from "@/components/site-footer"
import { VideoModal } from "@/components/video-modal"
import { TestimonialsSection } from "@/components/testimonials-section"

export function StartupsPage() {
  const [showVideoModal, setShowVideoModal] = useState(false)
  const [showSubscribeNotification, setShowSubscribeNotification] = useState(false)

  const features = [
    {
      icon: <Rocket className="w-12 h-12 text-green-400" />,
      title: "Accelerate Time-to-Market",
      description: "Launch your products faster with automated validation processes. Perfect for startups racing to market with limited resources.",
    },
    {
      icon: <DollarSign className="w-12 h-12 text-blue-400" />,
      title: "Bootstrap-Friendly Pricing",
      description: "Get enterprise-grade validation capabilities at startup-friendly prices. Scale your testing without burning through your runway.",
    },
    {
      icon: <Lightbulb className="w-12 h-12 text-purple-400" />,
      title: "Validate Ideas Quickly",
      description: "Test and iterate on your hardware concepts rapidly. Our AI helps you validate designs before committing to expensive prototypes.",
    },
    {
      icon: <Gauge className="w-12 h-12 text-orange-400" />,
      title: "Scale from Day One",
      description: "Built to grow with your startup. Start small and scale seamlessly as your team and product portfolio expands.",
    }
  ]

  const benefits = [
    {
      icon: <Zap className="w-6 h-6 text-green-400" />,
      text: "Get up and running within a week"
    },
    {
      icon: <Target className="w-6 h-6 text-blue-400" />,
      text: "No long-term contracts required"
    },
    {
      icon: <TrendingUp className="w-6 h-6 text-purple-400" />,
      text: "Scale as you grow"
    }
  ]

  const quickStartSteps = [
    {
      number: 1,
      title: "Sign Up & Setup",
      description: "Create your account in minutes. No credit card required. Get instant access to TestFlow's core features."
    },
    {
      number: 2,
      title: "Connect Your Instruments",
      description: "Quickly connect your lab equipment. Our AI automatically detects and configures compatible instruments."
    },
    {
      number: 3,
      title: "Run Your First Test",
      description: "Use our AI-powered test generator or choose from pre-built templates. See results in real-time."
    },
    {
      number: 4,
      title: "Scale Your Validation",
      description: "As you grow, unlock advanced features. Add team members, create custom workflows, and automate everything."
    }
  ]

  const handleNewsletterSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setShowSubscribeNotification(true);
    trackFormSubmission('newsletter', true, { page: 'startups' });
    const form = e.target as HTMLFormElement;
    form.reset();
  };

  return (
    <div className="min-h-screen bg-black text-white">
      <SiteHeader />
      
      {/* Section Trackers */}
      <SectionTracker sectionId="hero" sectionName="Startups Hero" />
      <SectionTracker sectionId="features" sectionName="Startups Features" />
      <SectionTracker sectionId="cta" sectionName="Startups CTA" />

      {/* Hero Section */}
      <section className="overflow-hidden bg-white dark:bg-transparent">
        <div className="relative mx-auto max-w-5xl px-6 pt-40 pb-28 lg:pt-48 lg:pb-24">
          <div className="relative z-10 mx-auto max-w-2xl text-center">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 leading-tight tracking-tight text-black dark:text-white">
              Launch faster with{' '}
              <span className="bg-gradient-to-r from-pink-400 to-violet-500 bg-clip-text text-transparent">
                AI-powered validation
              </span>{' '}
              <span className="bg-gradient-to-r from-violet-400 to-purple-500 bg-clip-text text-transparent">
                built for startups
              </span>
            </h1>
            <p className="mx-auto my-8 max-w-2xl text-xl text-gray-400">
              Get enterprise-grade hardware validation at startup-friendly prices. Scale your testing without burning through your runway.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
              {/* Enhanced Get Started Button */}
              <Button asChild size="default" className="h-11 px-6 text-base group relative overflow-hidden">
                <Link 
                  href="/contact" 
                  onClick={() => trackButtonClick('Get Started', 'Startups Hero', { page: 'startups' })}
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
                  trackButtonClick('Watch Demo', 'Startups Hero', { page: 'startups' })
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

            {/* Benefits List */}
            <div className="flex flex-wrap justify-center gap-6 text-sm text-gray-400 mt-8">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-center gap-2">
                  {benefit.icon}
                  <span>{benefit.text}</span>
                </div>
              ))}
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
                  alt="TestFlow Startup Platform - AI-Powered Validation"
                  width={2880}
                  height={2074}
                />
                <img
                  className="rounded-[--radius] z-[2] relative hidden border dark:block"
                  src="https://9zog2la6l29pbfba.public.blob.vercel-storage.com/Workflow%20builder%20AI%20powred.png"
                  alt="TestFlow Startup Platform - AI-Powered Validation"
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
                <span className="bg-gradient-to-r from-green-400 via-white to-blue-400 bg-clip-text text-transparent relative">
                  Move Fast and Validate Everything
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-green-500/6 via-white/3 to-blue-500/6 blur-2xl -z-10 scale-110" />
              </motion.h2>
              <p className="text-lg md:text-xl text-gray-400 max-w-3xl mx-auto">
                Built specifically for startups that need to validate hardware quickly without breaking the bank.
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
                  className="group relative rounded-3xl overflow-hidden bg-gradient-to-br from-gray-900/50 to-gray-800/30 backdrop-blur-xl border border-white/10 p-8 hover:border-green-500/30 transition-all duration-500"
                >
                  <div className="flex items-start gap-6">
                    <div className="flex-shrink-0">
                      {feature.icon}
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-semibold mb-3 text-white group-hover:text-green-400 transition-colors">
                        {feature.title}
                      </h3>
                      <p className="text-gray-400 leading-relaxed">
                        {feature.description}
                      </p>
                    </div>
                  </div>
                  
                  {/* Subtle hover glow */}
                  <div className="absolute inset-0 bg-gradient-to-r from-green-500/5 to-blue-500/5 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Quick Start Section */}
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
                <span className="bg-gradient-to-r from-green-400 to-blue-400 bg-clip-text text-transparent">
                  Get Started in Minutes
                </span>
              </h2>
              <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
                No complex setup or lengthy onboarding. Start validating your hardware immediately with TestFlow's intuitive platform designed for fast-moving startups.
              </p>
            </motion.div>

            {/* Process Steps */}
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {quickStartSteps.map((step) => (
                <motion.div
                  key={step.number}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: step.number * 0.1 }}
                  className="group relative bg-gradient-to-br from-gray-900/50 to-gray-800/30 backdrop-blur-xl border border-white/10 rounded-xl p-6 hover:border-green-500/30 transition-all duration-300"
                >
                  <div className="flex flex-col gap-4 relative z-10">
                    <div className="w-10 h-10 rounded-full bg-green-500/20 border border-green-500/30 flex items-center justify-center text-sm font-medium text-green-400">
                      {step.number}
                    </div>
                    <div>
                      <h4 className="font-semibold text-white mb-2">{step.title}</h4>
                      <p className="text-gray-400 text-sm leading-relaxed">{step.description}</p>
                    </div>
                  </div>
                  
                  {/* Subtle hover glow */}
                  <div className="absolute inset-0 bg-gradient-to-r from-green-500/5 to-blue-500/5 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-0" />
                </motion.div>
              ))}
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
                  onClick={() => trackButtonClick('Get Started', 'Quick Start', { page: 'startups' })}
                  className="bg-gradient-to-r from-green-500 to-blue-600 text-white hover:from-green-600 hover:to-blue-700 rounded-full flex items-center gap-2 relative z-10"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-green-400 to-blue-500 rounded-full blur-lg opacity-0 group-hover:opacity-50 transition-opacity duration-300 -z-10" />
                  Start Free Trial
                  <ArrowRight className="w-5 h-5" />
                  <div className="absolute inset-0 -skew-x-12 bg-gradient-to-r from-transparent via-white/20 to-transparent opacity-0 group-hover:opacity-100 group-hover:animate-shimmer" />
                </Link>
              </Button>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <TestimonialsSection />

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
                    onClick={() => trackButtonClick('Get Started', 'Final CTA', { page: 'startups' })}
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
  );
}
