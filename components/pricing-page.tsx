'use client'

import Link from "next/link"
import { Check, ArrowRight } from 'lucide-react'
import { motion } from 'framer-motion'
import { SiteHeader } from "@/components/site-header"
import { SectionTracker, trackButtonClick } from '@/components/analytics-tracker'
import { PricingCards } from "@/components/ui/pricing-cards"
import { LiquidFaqSection } from "@/components/liquid-faq-section"
import { TestFlowFooter } from "@/components/test-flow-footer"
import { RainbowButton } from '@/components/ui/rainbow-button'
import { Globe } from "@/components/ui/globe"
import { CTASection } from "@/components/cta-section"
import { ComparisonSection } from "@/components/comparison-section"
import { BenefitsSection } from "@/components/benefits-section"

export function PricingPage() {
  return (
    <div className="min-h-screen bg-black text-white relative">
      <SiteHeader />

      {/* Background Gradients from HeroSectionNew */}
      <div
        aria-hidden
        className="z-[2] absolute inset-0 pointer-events-none isolate opacity-50 contain-strict hidden lg:block">
        <div className="w-[35rem] h-[80rem] -translate-y-87.5 absolute left-0 top-0 -rotate-45 rounded-full bg-[radial-gradient(68.54%_68.72%_at_55.02%_31.46%,hsla(0,0%,85%,.08)_0,hsla(0,0%,55%,.02)_50%,hsla(0,0%,45%,0)_80%)]" />
        <div className="h-[80rem] absolute left-0 top-0 w-56 -rotate-45 rounded-full bg-[radial-gradient(50%_50%_at_50%_50%,hsla(0,0%,85%,.06)_0,hsla(0,0%,45%,.02)_80%,transparent_100%)] [translate:5%_-50%]" />
        <div className="h-[80rem] -translate-y-87.5 absolute left-0 top-0 w-56 -rotate-45 bg-[radial-gradient(50%_50%_at_50%_50%,hsla(0,0%,85%,.04)_0,hsla(0,0%,45%,.02)_80%,transparent_100%)]" />
      </div>

      {/* Section Trackers */}
      <SectionTracker sectionId="plans" sectionName="Pricing Plans" />
      <SectionTracker sectionId="faq" sectionName="Pricing FAQ" />
      <SectionTracker sectionId="cta" sectionName="Final CTA" />

      {/* Pricing Plans Section */}
      <section id="plans" className="relative z-10 w-full min-h-[50vh]">
        <div className="container mx-auto px-4 relative max-w-[1400px] w-full">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <PricingCards />
          </motion.div>
        </div>
      </section>

      {/* Comparison Section */}
      <ComparisonSection />

      {/* Benefits Section */}
      <BenefitsSection />

      {/* FAQ Section */}
      <LiquidFaqSection />

      {/* CTA Section */}
      <CTASection />

      <TestFlowFooter />
    </div>
  )
}
