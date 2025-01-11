'use client'

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Check, ArrowRight } from 'lucide-react'
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
import { useState } from 'react'
import { Notification } from "@/components/notification"

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

      {/* Copy the rest of your sections here */}
      
      <Notification 
        isOpen={showSubscribeNotification}
        onClose={() => setShowSubscribeNotification(false)}
        message="Thanks for subscribing! We'll keep you updated with the latest news."
      />
    </div>
  )
} 