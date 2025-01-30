'use client'

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Check, ArrowRight, Clock, AlertTriangle } from 'lucide-react'
import Image from "next/image"
import { DemoSection } from '@/components/demo-section'
import { HeroForm } from '@/components/hero-form'
import UseCasesSection from '@/components/use-cases-section'
import { TypingEffect } from '@/components/typing-effect'
import { TrustLogos } from '@/components/trust-logos'
import { ComparisonSection } from '@/components/comparison-section'
import { AISection } from '@/components/ai-section'
import { TimelineSection } from '@/components/timeline-section'
import { CompatibilitySection } from '@/components/compatibility-section'
import AIChatDemo from '@/components/ai-chat-demo'
import { motion } from 'framer-motion'
import { SiteHeader } from "@/components/site-header"
import { useState, useEffect } from 'react'
import { Notification } from "@/components/notification"

function ROICalculator() {
  const [validationTime, setValidationTime] = useState(12)
  const [engineers, setEngineers] = useState(5)
  const [costPerEngineer, setCostPerEngineer] = useState(120000)
  const [savings, setSavings] = useState({ time: 0, cost: 0 })

  useEffect(() => {
    // Calculate savings
    const weeksPerYear = 52
    const currentCost = (validationTime / weeksPerYear) * engineers * costPerEngineer
    const newTime = validationTime * 0.15 // 85% reduction
    const newCost = (newTime / weeksPerYear) * engineers * costPerEngineer
    const timeSaved = Math.round((validationTime - newTime) * engineers * 5) // 5 working days per week
    const costSaved = Math.round(currentCost - newCost)

    setSavings({
      time: timeSaved,
      cost: costSaved
    })
  }, [validationTime, engineers, costPerEngineer])

  return (
    <div className="space-y-6">
      <div className="space-y-4">
        <label className="block space-y-2">
          <div className="flex justify-between text-sm">
            <span className="font-medium text-gray-400">Current validation time (weeks)</span>
            <span className="text-gray-500">{validationTime} weeks</span>
          </div>
          <input
            type="range"
            min="4"
            max="24"
            value={validationTime}
            onChange={(e) => setValidationTime(Number(e.target.value))}
            className="w-full h-2 bg-white/10 rounded-full appearance-none cursor-pointer [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:w-4 [&::-webkit-slider-thumb]:h-4 [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:bg-blue-500"
          />
          <div className="flex justify-between text-xs text-gray-500">
            <span>4 weeks</span>
            <span>24 weeks</span>
          </div>
        </label>
      </div>

      <div className="space-y-4">
        <label className="block space-y-2">
          <div className="flex justify-between text-sm">
            <span className="font-medium text-gray-400">Number of validation engineers</span>
            <span className="text-gray-500">{engineers} engineers</span>
          </div>
          <input
            type="range"
            min="1"
            max="20"
            value={engineers}
            onChange={(e) => setEngineers(Number(e.target.value))}
            className="w-full h-2 bg-white/10 rounded-full appearance-none cursor-pointer [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:w-4 [&::-webkit-slider-thumb]:h-4 [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:bg-blue-500"
          />
          <div className="flex justify-between text-xs text-gray-500">
            <span>1 engineer</span>
            <span>20 engineers</span>
          </div>
        </label>
      </div>

      <div className="space-y-4">
        <label className="block space-y-2">
          <div className="flex justify-between text-sm">
            <span className="font-medium text-gray-400">Average cost per engineer ($/year)</span>
            <span className="text-gray-500">${(costPerEngineer).toLocaleString()}</span>
          </div>
          <input
            type="range"
            min="80000"
            max="200000"
            step="10000"
            value={costPerEngineer}
            onChange={(e) => setCostPerEngineer(Number(e.target.value))}
            className="w-full h-2 bg-white/10 rounded-full appearance-none cursor-pointer [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:w-4 [&::-webkit-slider-thumb]:h-4 [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:bg-blue-500"
          />
          <div className="flex justify-between text-xs text-gray-500">
            <span>$80k</span>
            <span>$200k</span>
          </div>
        </label>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="relative mt-8 p-6 bg-gradient-to-b from-white/[0.03] to-white/[0.01] rounded-xl border border-white/10"
      >
        <div className="absolute inset-0 bg-gradient-to-r from-blue-500/5 via-purple-500/5 to-blue-500/5 rounded-xl blur-xl" />
        <div className="relative">
          <h4 className="text-lg font-semibold mb-4">Estimated Annual Savings</h4>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <div className="text-sm text-gray-400">Time Saved</div>
              <div className="text-2xl font-bold text-green-400">{savings.time.toLocaleString()} days</div>
            </div>
            <div>
              <div className="text-sm text-gray-400">Cost Saved</div>
              <div className="text-2xl font-bold text-green-400">${savings.cost.toLocaleString()}</div>
            </div>
          </div>
          <div className="mt-4 text-sm text-gray-400">
            *Based on industry averages and customer data
          </div>
        </div>
      </motion.div>

      <Link 
        href="/contact" 
        className="w-full group bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 text-white rounded-lg px-6 py-2.5 transition-all duration-300 hover:scale-105 shadow-[0_0_20px_rgba(59,130,246,0.5)] hover:shadow-[0_0_25px_rgba(59,130,246,0.7)] flex items-center justify-center gap-2"
      >
        Get Detailed ROI Report
        <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
      </Link>
    </div>
  )
}

export function HomePage() {
  const [showSubscribeNotification, setShowSubscribeNotification] = useState(false)
  return (
    <div className="min-h-screen bg-black text-white">
      <SiteHeader />
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden">
        {/* Video Background */}
        <div className="absolute inset-0 w-full h-full overflow-hidden">
          <video
            autoPlay
            muted
            loop
            playsInline
            className="absolute w-full h-full object-cover"
            style={{ 
              filter: 'brightness(0.95)',
              transform: 'translateY(5%)'
            }}
          >
            <source src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Hero%20video-o5Wm5RugFPJ6Wvpu8MNM56J97hr6uW.mp4" type="video/mp4" />
          </video>
          <div className="absolute inset-0 bg-black/20 backdrop-blur-[2px]" />
        </div>

        {/* Enhanced gradient overlay */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(63,61,86,0.1),rgba(0,0,0,0.2))]" />

        <div className="container mx-auto px-4 relative max-w-[1400px] w-full">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-white to-gray-500 bg-clip-text text-transparent">
              Validate and launch your hardware faster
            </h1>
            <div className="text-base md:text-lg text-gray-400 mb-8 max-w-2xl mx-auto h-20">
              <TypingEffect 
                text="Our AI validation tool helps semiconductors and electronics companies validate and launch their products 20x faster by fully automating the validation process in minutes."
                delay={30}
              />
            </div>
            <HeroForm />
            <div className="mt-40 relative group">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 via-purple-500/10 to-blue-500/10 rounded-xl blur-2xl transition-all duration-500 group-hover:blur-3xl group-hover:opacity-70 opacity-50" />
              
              {/* Animated border container */}
              <div className="relative">
                {/* Glow effect */}
                <div className="absolute -inset-[2px] rounded-xl bg-[conic-gradient(from_var(--angle),transparent_0%,transparent_35%,#8B5CF6_45%,transparent_55%,transparent_100%)] animate-[rotate_10s_linear_infinite] opacity-70 blur-[2px]" />
                <div className="relative p-[2px] rounded-xl bg-[conic-gradient(from_var(--angle),transparent_0%,transparent_35%,#8B5CF6_45%,transparent_55%,transparent_100%)] animate-[rotate_10s_linear_infinite]">
                  <style jsx>{`
                    @property --angle {
                      syntax: '<angle>';
                      initial-value: 0deg;
                      inherits: false;
                    }
                    @keyframes rotate {
                      to {
                        --angle: 360deg;
                      }
                    }
                  `}</style>
                  
                  {/* Main content container */}
                  <div className="relative rounded-xl overflow-hidden bg-[rgba(20,20,20,1)] z-10">
                    <Image
                      src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Tool%20screen%20shot2-AcvsGBAbQcO81S3vOFouIJRliglA4B.png"
                      width={1200}
                      height={675}
                      alt="Atoms Testflow Platform Interface"
                      className="w-full object-cover"
                      priority
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent" />
                  </div>
                </div>
              </div>
              
              {/* Trust Logos */}
              <TrustLogos />
            </div>
          </div>
        </div>
      </section>

      {/* Use Cases Section */}
      <section id="solutions" className="relative py-10 md:py-16 border-t border-white/10 overflow-hidden">
        <div className="container mx-auto px-4 max-w-[1400px] w-full">
          <UseCasesSection />
        </div>
      </section>

      {/* Interactive Demo Section */}
      <section id="demo" className="py-10 md:py-16 border-t border-white/10">
        <div className="container mx-auto px-4 max-w-[1400px] w-full">
          <DemoSection />
        </div>
      </section>

      {/* Features Comparison Section */}
      <section id="features" className="py-10 md:py-16 border-t border-white/10">
        <div className="container mx-auto px-4 max-w-[1400px] w-full">
          <ComparisonSection />
        </div>
      </section>

      {/* AI Section */}
      <section className="py-10 md:py-16 border-t border-white/10">
        <div className="container mx-auto px-4 max-w-[1400px] w-full">
          <AISection />
        </div>
      </section>

      {/* AI Chat Demo Section */}
      <section className="py-10 md:py-16 border-t border-white/10">
        <div className="container mx-auto px-4 max-w-[1400px] w-full">
          <AIChatDemo />
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-10 md:py-16 border-t border-white/10">
        <div className="container mx-auto px-4 max-w-[1400px] w-full">
          <TimelineSection />
        </div>
      </section>

      {/* Compatibility Section */}
      <section className="py-10 md:py-16 border-t border-white/10">
        <div className="container mx-auto px-4 max-w-[1400px] w-full">
          <CompatibilitySection />
        </div>
      </section>

      {/* ROI Section */}
      <section className="py-20 md:py-32 border-t border-white/10 relative overflow-hidden">
        <div className="container mx-auto px-4 relative max-w-[1400px] w-full">
          <div className="text-center mb-16">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-3xl md:text-4xl font-bold mb-6"
            >
              Return on Investment
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-xl text-gray-400 max-w-2xl mx-auto"
            >
              Calculate your potential savings with automated validation
            </motion.p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-start max-w-6xl mx-auto">
            {/* Time to Market Impact */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="relative"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 via-purple-500/10 to-blue-500/10 rounded-2xl blur-2xl opacity-50" />
              <div className="relative p-8 bg-white/[0.02] border border-white/10 rounded-2xl backdrop-blur-sm">
                <div className="flex items-center gap-3 mb-8">
                  <div className="w-10 h-10 rounded-lg bg-blue-500/10 border border-blue-500/30 flex items-center justify-center">
                    <Clock className="w-5 h-5 text-blue-400" />
                  </div>
                  <h3 className="text-2xl font-bold">Time to Market Impact</h3>
                </div>

                <div className="space-y-8">
                  {/* Traditional Process */}
                  <div className="relative">
                    <div className="flex justify-between items-end text-sm mb-3">
                      <div className="space-y-1">
                        <span className="text-gray-400 font-medium">Traditional Process</span>
                        <div className="flex items-center gap-2">
                          <span className="text-2xl font-bold text-red-400">12-16</span>
                          <span className="text-gray-400">weeks</span>
                        </div>
                      </div>
                      <div className="flex items-center gap-2 text-red-400">
                        <AlertTriangle className="w-4 h-4" />
                        <span className="text-sm">High Risk of Delays</span>
                      </div>
                    </div>
                    <div className="h-12 bg-red-500/10 rounded-xl relative overflow-hidden group">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width:"100%" }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, delay: 0.5 }}
                        className="absolute inset-y-0 left-0 bg-gradient-to-r from-red-500/20 to-red-500/10"
                      />
                      <div className="absolute inset-0 bg-[linear-gradient(45deg,rgba(255,255,255,0.1)_25%,transparent_25%,transparent_50%,rgba(255,255,255,0.1)_50%,rgba(255,255,255,0.1)_75%,transparent_75%,transparent)] bg-[length:1rem_1rem] animate-[move-bg_1s_linear_infinite] opacity-0 group-hover:opacity-100 transition-opacity" />
                    </div>
                  </div>

                  {/* With Atoms TestFlow */}
                  <div className="relative">
                    <div className="flex justify-between items-end text-sm mb-3">
                      <div className="space-y-1">
                        <span className="text-gray-400 font-medium">With Atoms TestFlow</span>
                        <div className="flex items-center gap-2">
                          <span className="text-2xl font-bold text-green-400">2-3</span>
                          <span className="text-gray-400">weeks</span>
                        </div>
                      </div>
                      <div className="flex items-center gap-2 text-green-400">
                        <Check className="w-4 h-4" />
                        <span className="text-sm">Predictable Timeline</span>
                      </div>
                    </div>
                    <div className="h-12 bg-green-500/10 rounded-xl relative overflow-hidden group">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: "20%" }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, delay: 0.7 }}
                        className="absolute inset-y-0 left-0 bg-gradient-to-r from-green-500/20 to-green-500/10"
                      />
                      <div className="absolute inset-0 bg-[linear-gradient(45deg,rgba(255,255,255,0.1)_25%,transparent_25%,transparent_50%,rgba(255,255,255,0.1)_50%,rgba(255,255,255,0.1)_75%,transparent_75%,transparent)] bg-[length:1rem_1rem] animate-[move-bg_1s_linear_infinite] opacity-0 group-hover:opacity-100 transition-opacity" />
                    </div>
                  </div>

                  {/* Impact Metrics */}
                  <div className="grid grid-cols-3 gap-4 pt-4">
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.8 }}
                      className="p-4 rounded-xl bg-gradient-to-b from-white/[0.03] to-white/[0.01] border border-white/10 group hover:border-green-500/20 transition-colors duration-300"
                    >
                      <div className="text-sm text-gray-400">Time Reduction</div>
                      <div className="text-2xl font-bold text-green-400 mt-1 group-hover:scale-110 transition-transform">85%</div>
                    </motion.div>
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.9 }}
                      className="p-4 rounded-xl bg-gradient-to-b from-white/[0.03] to-white/[0.01] border border-white/10 group hover:border-blue-500/20 transition-colors duration-300"
                    >
                      <div className="text-sm text-gray-400">Saved Time</div>
                      <div className="text-2xl font-bold text-blue-400 mt-1 group-hover:scale-110 transition-transform">13 wks</div>
                    </motion.div>
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 1 }}
                      className="p-4 rounded-xl bg-gradient-to-b from-white/[0.03] to-white/[0.01] border border-white/10 group hover:border-purple-500/20 transition-colors duration-300"
                    >
                      <div className="text-sm text-gray-400">Cost Savings</div>
                      <div className="text-2xl font-bold text-purple-400 mt-1 group-hover:scale-110 transition-transform">67%</div>
                    </motion.div>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* ROI Calculator */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 via-purple-500/10 to-blue-500/10 rounded-2xl blur-2xl opacity-50" />
              <div className="relative p-6 bg-white/[0.02] border border-white/10 rounded-2xl backdrop-blur-sm">
                <h3 className="text-2xl font-bold mb-6">Calculate Your ROI when using TestFlow</h3>
                <ROICalculator />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section id="pricing" className="relative py-10 md:py-16 overflow-hidden">
        <div className="container mx-auto px-4 max-w-[1400px] w-full relative">
          {/* Background Elements */}
          <div className="absolute inset-0">
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]" />
            <motion.div
              animate={{
                scale: [1, 1.2, 1],
                opacity: [0.1, 0.2, 0.1],
              }}
              transition={{
                duration: 8,
                repeat: Infinity,
                ease: "linear"
              }}
              className="absolute top-1/4 -right-1/4 w-1/2 h-1/2 bg-gradient-to-bl from-blue-500/10 via-transparent to-transparent rounded-full blur-3xl"
            />
            <motion.div
              animate={{
                scale: [1, 1.2, 1],
                opacity: [0.1, 0.2, 0.1],
              }}
              transition={{
                duration: 8,
                repeat: Infinity,
                ease: "linear",
                delay: 4
              }}
              className="absolute bottom-1/4 -left-1/4 w-1/2 h-1/2 bg-gradient-to-tr from-purple-500/10 via-transparent to-transparent rounded-full blur-3xl"
            />
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="relative max-w-4xl mx-auto"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 via-purple-500/10 to-blue-500/10 rounded-2xl blur-3xl opacity-50" />
            <div className="relative bg-black/40 backdrop-blur-sm border border-white/10 rounded-2xl p-8 md:p-12">
              <div className="text-center space-y-8">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.1 }}
                  className="space-y-4"
                >
                  <h2 className="text-3xl md:text-5xl font-bold bg-gradient-to-r from-white via-white to-gray-400 bg-clip-text text-transparent">
                    Start automating your validation process today
                  </h2>
                  <p className="text-gray-400 text-lg md:text-xl max-w-2xl mx-auto">
                    The AI validation platform that accelerates you product launch.
                  </p>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 }}
                  className="flex flex-col items-center gap-6"
                >
                  <Button asChild className="w-full">
                    <Link 
                      href="/contact" 
                      className="inline-flex items-center justify-center gap-2 bg-white text-black hover:bg-white/90 rounded-full px-8 py-6 text-lg font-medium transition-all duration-300 hover:scale-105 w-full"
                    >
                      Try Atoms TestFlow Now
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
                  </Button>

                  <div className="flex items-center gap-4 text-sm text-gray-400">
                    <div className="flex items-center gap-2">
                      <Check className="w-4 h-4 text-green-400" />
                      <span>AI-Powered Automation</span>
                    </div>
                    <div className="w-1 h-1 rounded-full bg-gray-700" />
                    <div className="flex items-center gap-2">
                      <Check className="w-4 h-4 text-green-400" />
                      <span>Universal Compatibility</span>
                    </div>
                    <div className="w-1 h-1 rounded-full bg-gray-700" />
                    <div className="flex items-center gap-2">
                      <Check className="w-4 h-4 text-green-400" />
                      <span>24/7 Operation</span>
                    </div>
                  </div>
                </motion.div>
              </div>
            </div>
          </motion.div>
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
              <form className="space-y-2" onSubmit={(e) => {
                e.preventDefault()
                setShowSubscribeNotification(true)
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

      <Notification 
        isOpen={showSubscribeNotification}
        onClose={() => setShowSubscribeNotification(false)}
        message="Thanks for subscribing! We'll keep you updated with the latest news."
      />
    </div>
  )
} 