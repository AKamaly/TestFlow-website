'use client'

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Check, ArrowRight, Clock, AlertTriangle, PlayCircle, Zap, Pointer, Layout, Workflow, CircuitBoard, Globe as GlobeIcon, BarChart, Users } from 'lucide-react'
import Image from "next/image"
import { HeroForm } from '@/components/hero-form'
import { TypingEffect } from '@/components/typing-effect'
import { TrustLogos } from '@/components/trust-logos'

import { motion } from 'framer-motion'
import { SiteHeader } from "@/components/site-header"
import { useState, useEffect } from 'react'
import { Notification } from "@/components/notification"
import { LogoCarousel } from '@/components/logo-carousel'
import { VideoModal } from "@/components/video-modal"
import { WebinarPopup } from "@/components/webinar-popup"
import { SectionTracker, trackButtonClick, trackFormSubmission, trackPageSpecificEvent } from '@/components/analytics-tracker'
import { GlowingEffect } from "@/components/ui/glowing-effect"
import { RainbowButton } from '@/components/ui/rainbow-button'
import { HeroPill } from "@/components/ui/hero-pill"
import { HeroSectionNew } from '@/components/hero-section-new'

import { CTASection } from "@/components/cta-section"
import { SecuritySection } from "@/components/security-section"
import { ComparisonSection } from "@/components/comparison-section"
import { AsSeenInSection } from "@/components/as-seen-in"
import { TestFlowFooter } from "@/components/test-flow-footer"

export function HomePage() {
  const [showSubscribeNotification, setShowSubscribeNotification] = useState(false)
  const [showWebinar, setShowWebinar] = useState(false)
  const [showVideoModal, setShowVideoModal] = useState(false)

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
      <SectionTracker sectionId="compatibility" sectionName="Compatibility" />
      <SectionTracker sectionId="meet-testflow" sectionName="Meet TestFlow" />
      <SectionTracker sectionId="how-testflow-works" sectionName="How TestFlow Works" />
      <SectionTracker sectionId="roi" sectionName="ROI Calculator" />
      <SectionTracker sectionId="cta" sectionName="Final CTA" />
      {/* Hero Section */}
      {/* Hero Section */}
      <HeroSectionNew onOpenVideo={() => setShowVideoModal(true)} />

      {/* Before and After Section - Updated to Purple Theme */}
      <ComparisonSection />

      {/* Security Section */}
      <SecuritySection />

      {/* As Seen In Section */}
      <AsSeenInSection />

      {/* CTA Section - Globe Feature Design */}
      <CTASection />




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

      {/* TestFlow Footer */}
      <TestFlowFooter />

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