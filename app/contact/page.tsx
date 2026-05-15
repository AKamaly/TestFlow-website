'use client'

import { SiteHeader } from "@/components/site-header"
import Link from "next/link"
import { useState, useEffect } from "react"
import Script from 'next/script'
import { Notification } from "@/components/notification"
import { SectionTracker, trackFormSubmission, trackPageSpecificEvent, trackButtonClick } from '@/components/analytics-tracker'
import { motion } from 'framer-motion'
import { ArrowRight, Check, Mail, MessageSquare, Calendar, Clock } from 'lucide-react'
import Image from 'next/image'
import { TestFlowFooter } from '@/components/test-flow-footer'
import { RainbowButton } from '@/components/ui/rainbow-button'
import { CTASection } from "@/components/cta-section"

export default function ContactPage() {
  const [showSubscribeNotification, setShowSubscribeNotification] = useState(false)

  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setShowSubscribeNotification(true)
    trackFormSubmission('newsletter', true, { page: 'contact' })
    // Reset form
    const form = e.target as HTMLFormElement
    form.reset()
  }

  // Initialize Cal.com after script loads
  useEffect(() => {
    const initCal = () => {
      if (typeof window !== 'undefined' && (window as any).Cal && (window as any).Cal.loaded) {
        try {
          // Initialize Cal.com
          ; (window as any).Cal('init', '30min', { origin: 'https://app.cal.com' })

            // Set up inline calendar
            ; (window as any).Cal.ns['30min']('inline', {
              elementOrSelector: '#my-cal-inline-30min',
              config: { layout: 'month_view', theme: 'dark' },
              calLink: 'testflowai/30min',
            })

            // Configure UI
            ; (window as any).Cal.ns['30min']('ui', {
              theme: 'dark',
              cssVarsPerTheme: { dark: { 'cal-brand': '#be7eff' } },
              hideEventTypeDetails: false,
              layout: 'month_view',
            })

          trackPageSpecificEvent('cal_com_loaded', { page: 'contact' })
        } catch (error) {
          console.error('Error initializing Cal.com:', error)
        }
      }
    }

    // Check if Cal is already loaded
    initCal()

    // Also listen for when it loads
    const interval = setInterval(() => {
      if ((window as any).Cal && (window as any).Cal.loaded) {
        initCal()
        clearInterval(interval)
      }
    }, 100)

    return () => clearInterval(interval)
  }, [])

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Background Gradients - Same as Hero Section */}
      <div
        aria-hidden
        className="z-[2] absolute inset-0 pointer-events-none isolate opacity-50 contain-strict hidden lg:block">
        <div className="w-[35rem] h-[80rem] -translate-y-87.5 absolute left-0 top-0 -rotate-45 rounded-full bg-[radial-gradient(68.54%_68.72%_at_55.02%_31.46%,hsla(0,0%,85%,.08)_0,hsla(0,0%,55%,.02)_50%,hsla(0,0%,45%,0)_80%)]" />
        <div className="h-[80rem] absolute left-0 top-0 w-56 -rotate-45 rounded-full bg-[radial-gradient(50%_50%_at_50%_50%,hsla(0,0%,85%,.06)_0,hsla(0,0%,45%,.02)_80%,transparent_100%)] [translate:5%_-50%]" />
        <div className="h-[80rem] -translate-y-87.5 absolute left-0 top-0 w-56 -rotate-45 bg-[radial-gradient(50%_50%_at_50%_50%,hsla(0,0%,85%,.04)_0,hsla(0,0%,45%,.02)_80%,transparent_100%)]" />
      </div>

      <SiteHeader />

      {/* Section Trackers */}
      <SectionTracker sectionId="hero" sectionName="Contact Hero" />
      <SectionTracker sectionId="calendly" sectionName="Calendly Booking" />

      <div className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden z-10">
        <div className="container mx-auto px-4 relative max-w-[1400px] w-full">
          {/* Two Column Layout */}
          <div id="calendly" className="grid lg:grid-cols-[1.2fr_1fr] gap-8 lg:gap-16 max-w-7xl mx-auto items-center">
            
            {/* Left Side - Content */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
              className="space-y-8 lg:pr-8"
            >
              {/* Main Headline */}
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-[36px] lg:text-[3.8rem] font-medium tracking-tight text-foreground leading-[2.6rem] lg:leading-[4.3rem]"
              >
                <span className="block">Start testing</span>
                <span className="block">hardware faster.</span>
              </motion.h1>

              {/* Sub-headline */}
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
                className="text-lg md:text-xl text-muted-foreground leading-relaxed max-w-xl"
              >
                See how TestFlow automates your entire bench setup within five minutes. You can create your first validation automation flow and run it inside the lab.
              </motion.p>

              {/* Testimonial Card */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="relative bg-zinc-950/80 backdrop-blur-md border border-white/10 rounded-2xl p-6 md:p-8 mt-12 shadow-2xl"
              >
                {/* Quote */}
                <p className="text-foreground text-lg mb-4 leading-relaxed font-medium">
                  &quot;TestFlow has improved our validation cycle by over 70%. It has given us incredible leverage over our time, fully automating test generation and execution.&quot;
                </p>

                {/* Attribution */}
                <p className="text-muted-foreground text-sm font-medium tracking-wide uppercase">
                  VP of Engineering
                </p>
              </motion.div>
            </motion.div>

            {/* Right Side - Cal.com Calendar */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3 }}
              className="relative w-full max-w-md mx-auto lg:max-w-none"
            >
                {/* Glow effect behind the calendar container */}
                <div className="absolute -inset-4 z-0 overflow-hidden opacity-30 blur-2xl rounded-full">
                    <img
                        src="/hero-glow.webp"
                        alt=""
                        aria-hidden
                        className="w-full h-full object-cover pointer-events-none scale-150"
                    />
                </div>
              <div className="relative z-10 bg-zinc-950/80 backdrop-blur-xl border border-white/10 rounded-[2rem] p-2 shadow-2xl h-[600px] flex items-center justify-center overflow-hidden">
                <div
                  id="my-cal-inline-30min"
                  className="w-full h-full"
                  style={{ width: '100%', height: '100%', overflow: 'auto' }}
                />
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <CTASection />

      {/* TestFlow Footer */}
      <TestFlowFooter />

      <Notification
        isOpen={showSubscribeNotification}
        onClose={() => setShowSubscribeNotification(false)}
        message="Thanks for subscribing! We'll keep you updated with the latest news."
      />

      {/* Cal.com Embed Script */}
      <Script
        id="cal-com-embed"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            (function (C, A, L) { 
              let p = function (a, ar) { a.q.push(ar); }; 
              let d = C.document; 
              C.Cal = C.Cal || function () { 
                let cal = C.Cal; 
                let ar = arguments; 
                if (!cal.loaded) { 
                  cal.ns = {}; 
                  cal.q = cal.q || []; 
                  d.head.appendChild(d.createElement("script")).src = A; 
                  cal.loaded = true; 
                } 
                if (ar[0] === L) { 
                  const api = function () { p(api, arguments); }; 
                  const namespace = ar[1]; 
                  api.q = api.q || []; 
                  if(typeof namespace === "string"){cal.ns[namespace] = cal.ns[namespace] || api;p(cal.ns[namespace], ar);p(cal, ["initNamespace", namespace]);} else p(cal, ar); return;
                } 
                p(cal, ar); 
              }; 
            })(window, "https://app.cal.com/embed/embed.js", "init");
            
            Cal("init", "30min", {origin:"https://app.cal.com"});
            
            Cal.ns["30min"]("inline", {
              elementOrSelector:"#my-cal-inline-30min",
              config: {"layout":"month_view","theme":"dark"},
              calLink: "testflowai/30min",
            });
            
            Cal.ns["30min"]("ui", {"theme":"dark","cssVarsPerTheme":{"dark":{"cal-brand":"#be7eff"}},"hideEventTypeDetails":false,"layout":"month_view"});
          `
        }}
      />
    </div>
  )
}

