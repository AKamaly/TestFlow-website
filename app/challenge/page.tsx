'use client'

import { motion } from 'framer-motion'
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { Button } from "@/components/ui/button"
import { WobbleCard } from "@/components/ui/wobble-card"
import { Timeline } from "@/components/ui/timeline"
import { LogoCarousel } from '@/components/logo-carousel'
import { WorldMap } from "@/components/ui/world-map"
import { GlobeFeatureSection } from "@/components/ui/globe-feature"
import { ArrowRight, Check, Trophy, Award, Star, Users, Zap, Target, Sparkles, Gift, Calendar, Clock, FileText } from 'lucide-react'
import Link from 'next/link'
import Image from 'next/image'

export default function ChallengePage() {

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }


  const howItWorksTimeline = [
    {
      title: "1",
      content: (
        <div className="space-y-4">
          <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">Register</h3>
          <p className="text-gray-400 text-lg md:text-xl leading-relaxed">
            Sign up using the form below. You&apos;ll receive your TestFlow AI login credentials and access to the platform to start building your validation workflow.
          </p>
        </div>
      ),
    },
    {
      title: "2",
      content: (
        <div className="space-y-4">
          <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">Build</h3>
          <p className="text-gray-400 text-lg md:text-xl leading-relaxed">
            Design your validation workflow inside TestFlow. Include instrument configurations, test steps, loops, sequences, conditions, and reporting logic. Create the smartest, cleanest, most powerful validation template you can build.
          </p>
        </div>
      ),
    },
    {
      title: "3",
      content: (
        <div className="space-y-4">
          <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">Submit</h3>
          <p className="text-gray-400 text-lg md:text-xl leading-relaxed">
            Share your TestFlow template at the global templates page with your name on it. Write a LinkedIn post explaining your chip validation workflow mentioning TestFlow, and we will review it. Make sure your workflow is complete, well-documented, and ready for evaluation.
          </p>
        </div>
      ),
    },
    {
      title: "4",
      content: (
        <div className="space-y-4">
          <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">Judging</h3>
          <p className="text-gray-400 text-lg md:text-xl leading-relaxed">
            Workflows are evaluated on technical depth, real-world value, automation quality, creativity, and clarity. Winners are announced globally with recognition and prizes.
          </p>
        </div>
      ),
    },
  ]

  return (
    <div className="min-h-screen bg-black text-white">
      <SiteHeader />

      {/* Hero Section */}
      <section className="overflow-hidden bg-white dark:bg-transparent">
        <div className="relative mx-auto max-w-5xl px-6 pt-40 pb-28 lg:pt-48 lg:pb-24">
          <div className="relative z-10 mx-auto max-w-2xl text-center">
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 leading-tight tracking-tight text-black dark:text-white"
            >
              <span className="bg-gradient-to-r from-purple-400 via-white to-violet-400 bg-clip-text text-transparent">
                THE GLOBAL HARDWARE<br />
                VALIDATION CHALLENGE 2025
              </span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="mx-auto my-8 max-w-2xl text-xl text-gray-400"
            >
              Build the most advanced automated validation workflow. Compete with the world&apos;s top validation engineers. Win global recognition.
            </motion.p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
              {/* Enhanced Register Now Button */}
              <Button asChild size="default" className="h-11 px-6 text-base group relative overflow-hidden">
                <Link
                  href="https://forms.office.com/Pages/ResponsePage.aspx?id=lKls-VdCNkqUxwvRQtK8J3oie0RdtVVImx9U8GDGhrtUMVdPRksxTVhUSUtaVVI3SDNROTJPUjE0MS4u"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white rounded-full transition-all duration-300 hover:scale-105 hover:shadow-[0_0_30px_rgba(199,21,133,0.6)] flex items-center gap-2 relative z-10"
                >
                  {/* Button Background Glow */}
                  <div className="absolute inset-0 bg-gradient-to-r from-purple-400 to-pink-500 rounded-full blur-lg opacity-0 group-hover:opacity-50 transition-opacity duration-300 -z-10" />

                  Register Now
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

              {/* Enhanced View Details Button */}
              <Button
                variant="outline"
                size="default"
                className="h-11 px-6 text-base group relative overflow-hidden"
                onClick={() => scrollToSection('what-is-challenge')}
              >
                <span className="rounded-full border-purple-500/30 hover:border-purple-500/60 hover:bg-purple-500/10 flex items-center gap-2 relative z-10 transition-all duration-300">
                  {/* Button Glow */}
                  <div className="absolute inset-0 bg-gradient-to-r from-purple-500/10 to-violet-500/10 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10" />

                  View Details

                  {/* Subtle shimmer */}
                  <div className="absolute inset-0 -skew-x-12 bg-gradient-to-r from-transparent via-white/10 to-transparent opacity-0 group-hover:opacity-100 group-hover:animate-shimmer" />
                </span>
              </Button>
            </div>

            {/* Benefits List */}
            <div className="flex flex-wrap justify-center gap-6 text-sm text-gray-400 mt-8">
              <div className="flex items-center gap-2">
                <Trophy className="w-4 h-4 text-purple-400" />
                <span>Global Recognition</span>
              </div>
              <div className="flex items-center gap-2">
                <Award className="w-4 h-4 text-purple-400" />
                <span>Prestigious Awards</span>
              </div>
              <div className="flex items-center gap-2">
                <Star className="w-4 h-4 text-purple-400" />
                <span>TestFlow Pro Access</span>
              </div>
            </div>
          </div>
        </div>

        <div className="mx-auto -mt-16 max-w-7xl w-full [mask-image:linear-gradient(to_bottom,black_50%,transparent_100%)]">
          <div className="[perspective:1200px] [mask-image:linear-gradient(to_right,black_50%,transparent_100%)] -mr-16 pl-16 lg:-mr-56 lg:pl-56">
            <div className="[transform:rotateX(20deg);]">
              <div className="lg:h-[44rem] relative skew-x-[.36rad] w-full">
                <img
                  className="rounded-[--radius] z-[2] relative border w-full h-full object-cover dark:hidden"
                  src="https://9zog2la6l29pbfba.public.blob.vercel-storage.com/Workflow%20builder%20AI%20powred.png"
                  alt="Global Hardware Validation Challenge 2025 - TestFlow Platform"
                  width={2880}
                  height={2074}
                />
                <img
                  className="rounded-[--radius] z-[2] relative hidden border w-full h-full object-cover dark:block"
                  src="https://9zog2la6l29pbfba.public.blob.vercel-storage.com/Workflow%20builder%20AI%20powred.png"
                  alt="Global Hardware Validation Challenge 2025 - TestFlow Platform"
                  width={2880}
                  height={2074}
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Logo Carousel Section - Matching Startups Page */}
      <section className="py-12 bg-gradient-to-b from-black to-gray-900/30 border-b border-white/5">
        <div className="container mx-auto px-4 max-w-[1400px] w-full">
          <LogoCarousel />
        </div>
      </section>

      {/* What is the Challenge? */}
      <section id="what-is-challenge" className="relative py-20 md:py-32 overflow-hidden border-t border-white/10">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]" />
          <div className="absolute top-0 -left-1/4 w-1/2 h-1/2 bg-gradient-to-br from-purple-500/6 via-transparent to-transparent rounded-full blur-3xl" />
          <div className="absolute bottom-0 -right-1/4 w-1/2 h-1/2 bg-gradient-to-tl from-violet-500/6 via-transparent to-transparent rounded-full blur-3xl" />
        </div>

        <div className="container mx-auto px-4 relative max-w-[1400px] w-full">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <div className="inline-block rounded-full px-4 py-1.5 text-sm font-medium bg-gradient-to-r from-purple-500/10 to-violet-500/10 border border-purple-500/20 backdrop-blur-sm mb-6">
                <span className="bg-gradient-to-r from-purple-400 to-violet-400 bg-clip-text text-transparent">
                  About the Challenge
                </span>
              </div>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
                <span className="bg-gradient-to-r from-purple-400 to-violet-400 bg-clip-text text-transparent">
                  What is the Challenge?
                </span>
              </h2>
            </motion.div>

            <div className="space-y-6 text-lg text-gray-300">
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
              >
                The Global Hardware Validation Challenge 2025 is the world&apos;s first technical competition dedicated to automated chip and hardware testing workflows.
              </motion.p>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
              >
                Using TestFlow AI, participants will design and submit a complete validation workflow—covering setup, instrument configuration, measurements, loops, logic, and reporting. You can select any type of chip datasheet or evaluation board and mention it in TestFlow.
              </motion.p>

              {/* World Map - Global Participation */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.25 }}
                className="mt-12 mb-8"
              >
                <WorldMap
                  dots={[
                    {
                      start: { lat: 37.7749, lng: -122.4194, label: "San Francisco" },
                      end: { lat: 51.5074, lng: -0.1278, label: "London" }
                    },
                    {
                      start: { lat: 35.6762, lng: 139.6503, label: "Tokyo" },
                      end: { lat: 52.5200, lng: 13.4050, label: "Berlin" }
                    },
                    {
                      start: { lat: 28.6139, lng: 77.2090, label: "New Delhi" },
                      end: { lat: 31.2304, lng: 121.4737, label: "Shanghai" }
                    },
                    {
                      start: { lat: -33.8688, lng: 151.2093, label: "Sydney" },
                      end: { lat: 40.7128, lng: -74.0060, label: "New York" }
                    }
                  ]}
                  lineColor="#a855f7"
                />
                <p className="text-center text-sm text-gray-400 mt-4">
                  Join engineers from around the world in the Global Hardware Validation Challenge
                </p>
              </motion.div>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
                className="text-xl font-semibold text-purple-300"
              >
                Your mission: Create the smartest, cleanest, most powerful validation template you can build.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4 }}
                className="mt-8"
              >
                <p className="mb-4 font-semibold text-white">Submission Process:</p>
                <div className="space-y-3 mb-6">
                  <div className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-purple-400 flex-shrink-0 mt-0.5" />
                    <span>Share your TestFlow template at the global templates page with your name on it</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-purple-400 flex-shrink-0 mt-0.5" />
                    <span>Write a LinkedIn post explaining your chip validation workflow mentioning TestFlow, and we will review it</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-purple-400 flex-shrink-0 mt-0.5" />
                    <span>Make sure your workflow is complete, well-documented, and ready for evaluation</span>
                  </div>
                </div>
                <p className="mb-4 font-semibold text-white">Any hardware or IC type is allowed:</p>
                <div className="grid md:grid-cols-2 gap-3">
                  {[
                    'PMICs',
                    'Power converters',
                    'Timing ICs',
                    'SoCs and processors',
                    'Evaluation boards',
                    'Sensor modules',
                    'Mixed-signal chips',
                    'RF sub-systems',
                    'Anything you test inside the lab'
                  ].map((item, index) => (
                    <div key={index} className="flex items-center gap-3">
                      <Check className="w-5 h-5 text-purple-400 flex-shrink-0" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </motion.div>

              {/* CTA Button */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5 }}
                className="mt-8 flex justify-center"
              >
                <Button
                  asChild
                  className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white rounded-full px-8 py-6 text-lg font-semibold transition-all duration-300 hover:scale-105 hover:shadow-[0_0_30px_rgba(199,21,133,0.6)]"
                >
                  <Link
                    href="https://forms.office.com/Pages/ResponsePage.aspx?id=lKls-VdCNkqUxwvRQtK8J3oie0RdtVVImx9U8GDGhrtUMVdPRksxTVhUSUtaVVI3SDNROTJPUjE0MS4u"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Register Now
                    <ArrowRight className="ml-2 w-5 h-5" />
                  </Link>
                </Button>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Who Can Join? */}
      <section id="who-can-join" className="relative py-20 md:py-32 overflow-hidden border-t border-white/10">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]" />
          <div className="absolute top-0 -left-1/4 w-1/2 h-1/2 bg-gradient-to-br from-violet-500/6 via-transparent to-transparent rounded-full blur-3xl" />
          <div className="absolute bottom-0 -right-1/4 w-1/2 h-1/2 bg-gradient-to-tl from-purple-500/6 via-transparent to-transparent rounded-full blur-3xl" />
        </div>

        <div className="container mx-auto px-4 relative max-w-[1400px] w-full">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
                <span className="bg-gradient-to-r from-purple-400 to-violet-400 bg-clip-text text-transparent">
                  Who Can Join?
                </span>
              </h2>
              <p className="text-xl text-gray-300">
                The Challenge is open to engineers and teams working on real hardware validation.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 gap-4">
              {[
                'Validation engineers',
                'Applications engineers',
                'Test automation specialists',
                'Lab managers',
                'Firmware / hardware test teams',
                'Post-silicon validation groups',
                'Enthusiasts working with lab instruments'
              ].map((role, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.1 + index * 0.05 }}
                  className="flex items-center gap-3 p-4 rounded-lg bg-white/5 border border-white/10 hover:bg-white/10 transition-colors"
                >
                  <Users className="w-5 h-5 text-purple-400 flex-shrink-0" />
                  <span className="text-gray-300">{role}</span>
                </motion.div>
              ))}
            </div>

            {/* CTA Button */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5 }}
              className="mt-12 flex justify-center"
            >
              <Button
                asChild
                className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white rounded-full px-8 py-6 text-lg font-semibold transition-all duration-300 hover:scale-105 hover:shadow-[0_0_30px_rgba(199,21,133,0.6)]"
              >
                <Link
                  href="https://forms.office.com/Pages/ResponsePage.aspx?id=lKls-VdCNkqUxwvRQtK8J3oie0RdtVVImx9U8GDGhrtUMVdPRksxTVhUSUtaVVI3SDNROTJPUjE0MS4u"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Join the Challenge
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Link>
              </Button>
            </motion.div>
          </div>
        </div>
      </section>

      {/* How It Works - Using Timeline */}
      <section id="how-it-works" className="relative py-20 md:py-32 overflow-hidden border-t border-white/10 bg-transparent">
        <div className="container mx-auto px-4 relative max-w-[1400px] w-full">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-8 md:mb-12"
          >
            <div className="inline-block rounded-full px-4 py-1.5 text-sm font-medium bg-gradient-to-r from-purple-500/10 to-violet-500/10 border border-purple-500/20 backdrop-blur-sm mb-4">
              <span className="bg-gradient-to-r from-purple-400 to-violet-400 bg-clip-text text-transparent">
                How It Works
              </span>
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold max-w-4xl mx-auto">
              <span className="bg-gradient-to-r from-purple-400 via-white to-violet-400 bg-clip-text text-transparent">
                From Registration to Global Recognition
              </span>
            </h2>
          </motion.div>

          <div className="max-w-7xl mx-auto">
            <Timeline data={howItWorksTimeline} showHeader={false} />
          </div>

          {/* CTA Button */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5 }}
            className="mt-12 flex justify-center"
          >
            <Button
              asChild
              className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white rounded-full px-8 py-6 text-lg font-semibold transition-all duration-300 hover:scale-105 hover:shadow-[0_0_30px_rgba(199,21,133,0.6)]"
            >
              <Link
                href="https://forms.office.com/Pages/ResponsePage.aspx?id=lKls-VdCNkqUxwvRQtK8J3oie0RdtVVImx9U8GDGhrtUMVdPRksxTVhUSUtaVVI3SDNROTJPUjE0MS4u"
                target="_blank"
                rel="noopener noreferrer"
              >
                Get Started
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Awards & Recognition - Using WobbleCard */}
      <section id="awards" className="relative py-20 md:py-32 overflow-hidden border-t border-white/10">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]" />
          <div className="absolute top-0 -left-1/4 w-1/2 h-1/2 bg-gradient-to-br from-violet-500/6 via-transparent to-transparent rounded-full blur-3xl" />
          <div className="absolute bottom-0 -right-1/4 w-1/2 h-1/2 bg-gradient-to-tl from-purple-500/6 via-transparent to-transparent rounded-full blur-3xl" />
        </div>

        <div className="container mx-auto px-4 relative max-w-[1400px] w-full">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
              <span className="bg-gradient-to-r from-purple-400 to-violet-400 bg-clip-text text-transparent">
                Awards & Recognition
              </span>
            </h2>
            <p className="text-lg text-gray-400 max-w-2xl mx-auto">
              Compete for prestigious awards and recognition in the global validation community
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 max-w-7xl mx-auto w-full">
            {/* Champion - Large Card */}
            <WobbleCard
              containerClassName="col-span-1 lg:col-span-2 h-full bg-gradient-to-br from-purple-900 to-violet-900 min-h-[500px] lg:min-h-[400px]"
              className=""
            >
              <div className="max-w-xs">
                <div className="flex items-center gap-3 mb-4">
                  <Trophy className="w-8 h-8 text-yellow-400" />
                  <h2 className="text-left text-balance text-base md:text-xl lg:text-3xl font-semibold tracking-[-0.015em] text-white">
                    Champion
                  </h2>
                </div>
                <p className="text-purple-300 font-semibold mb-6">Best Validation Workflow 2025</p>
                <ul className="space-y-3 text-neutral-200 text-sm">
                  <li className="flex items-start gap-2">
                    <Gift className="w-5 h-5 text-purple-400 flex-shrink-0 mt-0.5" />
                    <span>6 months TestFlow Pro access</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Award className="w-5 h-5 text-purple-400 flex-shrink-0 mt-0.5" />
                    <span>Top Validation Engineer 2025 award</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Star className="w-5 h-5 text-purple-400 flex-shrink-0 mt-0.5" />
                    <span>Featured spotlight on our website</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Users className="w-5 h-5 text-purple-400 flex-shrink-0 mt-0.5" />
                    <span>Featured in our 10M+ network of semiconductor engineers globally</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="w-5 h-5 text-purple-400 flex-shrink-0 mt-0.5" />
                    <span>LinkedIn certificate & digital badge</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <FileText className="w-5 h-5 text-purple-400 flex-shrink-0 mt-0.5" />
                    <span>Official certificate of achievement</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Sparkles className="w-5 h-5 text-purple-400 flex-shrink-0 mt-0.5" />
                    <span>Exclusive TestFlow hoodie & swag</span>
                  </li>
                </ul>
              </div>
            </WobbleCard>

            {/* Top 3 Finalists */}
            <WobbleCard containerClassName="col-span-1 min-h-[400px] bg-gradient-to-br from-pink-900 to-purple-900">
              <div className="flex items-center gap-3 mb-4">
                <Award className="w-6 h-6 text-purple-400" />
                <h2 className="max-w-80 text-left text-balance text-base md:text-xl lg:text-2xl font-semibold tracking-[-0.015em] text-white">
                  Top 3 Finalists
                </h2>
              </div>
              <ul className="mt-4 space-y-3 text-neutral-200 text-sm">
                <li className="flex items-start gap-2">
                  <Check className="w-4 h-4 text-purple-400 flex-shrink-0 mt-0.5" />
                  <span>3 months TestFlow Pro access</span>
                </li>
                <li className="flex items-start gap-2">
                  <FileText className="w-4 h-4 text-purple-400 flex-shrink-0 mt-0.5" />
                  <span>Official certificate & digital badge</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-4 h-4 text-purple-400 flex-shrink-0 mt-0.5" />
                  <span>Featured template in official library</span>
                </li>
                <li className="flex items-start gap-2">
                  <Users className="w-4 h-4 text-purple-400 flex-shrink-0 mt-0.5" />
                  <span>Featured in our 10M+ network of semiconductor engineers</span>
                </li>
              </ul>
            </WobbleCard>

            {/* Top 10 Finalists */}
            <WobbleCard containerClassName="col-span-1 lg:col-span-3 bg-gradient-to-br from-blue-900 to-indigo-900 min-h-[500px] lg:min-h-[300px]">
              <div className="max-w-sm">
                <div className="flex items-center gap-3 mb-4">
                  <Star className="w-6 h-6 text-purple-400" />
                  <h2 className="max-w-sm md:max-w-lg text-left text-balance text-base md:text-xl lg:text-2xl font-semibold tracking-[-0.015em] text-white">
                    Top 10 Finalists & All Participants
                  </h2>
                </div>
                <div className="grid md:grid-cols-2 gap-6 mt-6">
                  <div>
                    <p className="text-purple-300 font-semibold mb-3">Top 10 Finalists</p>
                    <ul className="space-y-2 text-neutral-200 text-sm">
                      <li className="flex items-start gap-2">
                        <Check className="w-4 h-4 text-purple-400 flex-shrink-0 mt-0.5" />
                        <span>1 month free access</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <FileText className="w-4 h-4 text-purple-400 flex-shrink-0 mt-0.5" />
                        <span>Top 10 Validation Engineer 2025 certificate</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <Check className="w-4 h-4 text-purple-400 flex-shrink-0 mt-0.5" />
                        <span>Community spotlight</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <Users className="w-4 h-4 text-purple-400 flex-shrink-0 mt-0.5" />
                        <span>Featured in our 10M+ network of semiconductor engineers</span>
                      </li>
                    </ul>
                  </div>
                  <div>
                    <p className="text-purple-300 font-semibold mb-3">All Participants</p>
                    <ul className="space-y-2 text-neutral-200 text-sm">
                      <li className="flex items-start gap-2">
                        <Check className="w-4 h-4 text-purple-400 flex-shrink-0 mt-0.5" />
                        <span>14-day TestFlow access</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <FileText className="w-4 h-4 text-purple-400 flex-shrink-0 mt-0.5" />
                        <span>Certificate of participation</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <Check className="w-4 h-4 text-purple-400 flex-shrink-0 mt-0.5" />
                        <span>Access to community and shared templates</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </WobbleCard>
          </div>

          {/* CTA Button */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5 }}
            className="mt-12 flex justify-center"
          >
            <Button
              asChild
              className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white rounded-full px-8 py-6 text-lg font-semibold transition-all duration-300 hover:scale-105 hover:shadow-[0_0_30px_rgba(199,21,133,0.6)]"
            >
              <Link
                href="https://forms.office.com/Pages/ResponsePage.aspx?id=lKls-VdCNkqUxwvRQtK8J3oie0RdtVVImx9U8GDGhrtUMVdPRksxTVhUSUtaVVI3SDNROTJPUjE0MS4u"
                target="_blank"
                rel="noopener noreferrer"
              >
                Win These Awards
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Why Participate? */}
      <section id="why-participate" className="relative py-20 md:py-32 overflow-hidden border-t border-white/10">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]" />
          <div className="absolute top-0 -left-1/4 w-1/2 h-1/2 bg-gradient-to-br from-purple-500/6 via-transparent to-transparent rounded-full blur-3xl" />
          <div className="absolute bottom-0 -right-1/4 w-1/2 h-1/2 bg-gradient-to-tl from-violet-500/6 via-transparent to-transparent rounded-full blur-3xl" />
        </div>

        <div className="container mx-auto px-4 relative max-w-[1400px] w-full">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
                <span className="bg-gradient-to-r from-purple-400 to-violet-400 bg-clip-text text-transparent">
                  Why Participate?
                </span>
              </h2>
              <p className="text-lg text-gray-300">
                Join the global community of validation engineers pushing the boundaries of automated testing.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 gap-4">
              {[
                'Prove your technical excellence',
                'Gain worldwide recognition',
                'Build your portfolio as a lab automation expert',
                'Create real templates used by other engineers',
                'Join a global validation community',
                'Get early access to TestFlow AI',
                'Earn certifications that enhance your career'
              ].map((benefit, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.1 + index * 0.05 }}
                  className="flex items-center gap-3 p-4 rounded-lg bg-white/5 border border-white/10 hover:bg-white/10 transition-colors"
                >
                  <Sparkles className="w-5 h-5 text-purple-400 flex-shrink-0" />
                  <span className="text-gray-300">{benefit}</span>
                </motion.div>
              ))}
            </div>

            {/* CTA Button */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5 }}
              className="mt-12 flex justify-center"
            >
              <Button
                asChild
                className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white rounded-full px-8 py-6 text-lg font-semibold transition-all duration-300 hover:scale-105 hover:shadow-[0_0_30px_rgba(199,21,133,0.6)]"
              >
                <Link
                  href="https://forms.office.com/Pages/ResponsePage.aspx?id=lKls-VdCNkqUxwvRQtK8J3oie0RdtVVImx9U8GDGhrtUMVdPRksxTVhUSUtaVVI3SDNROTJPUjE0MS4u"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Start Your Journey
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Link>
              </Button>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section id="timeline" className="relative py-20 md:py-32 overflow-hidden border-t border-white/10">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]" />
          <div className="absolute top-0 -left-1/4 w-1/2 h-1/2 bg-gradient-to-br from-violet-500/6 via-transparent to-transparent rounded-full blur-3xl" />
          <div className="absolute bottom-0 -right-1/4 w-1/2 h-1/2 bg-gradient-to-tl from-purple-500/6 via-transparent to-transparent rounded-full blur-3xl" />
        </div>

        <div className="container mx-auto px-4 relative max-w-[1400px] w-full">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
              <span className="bg-gradient-to-r from-purple-400 to-violet-400 bg-clip-text text-transparent">
                Timeline
              </span>
            </h2>
            <p className="text-lg text-gray-400">Important dates for the challenge</p>
          </motion.div>

          <div className="max-w-4xl mx-auto">
            {/* Desktop Timeline */}
            <div className="hidden md:block relative">
              <div className="absolute left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-purple-500 to-violet-500 transform -translate-x-1/2" />
              {[
                { title: 'Registration Opens', date: 'Now', description: 'Sign up and get your TestFlow access', icon: Calendar },
                { title: 'Building Period', date: '14 Days', description: 'Design and build your validation workflow', icon: FileText },
                { title: 'Submission Deadline', date: '29th Dec', description: 'Submit your TestFlow template', icon: Target },
                { title: 'Judging', date: '30th Dec - 12th Jan', description: 'Expert panel evaluates all submissions', icon: Clock },
                { title: 'Winners Announced', date: '24th Jan', description: 'Global announcement of champions', icon: Trophy }
              ].map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className={`relative mb-12 flex items-center ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}
                >
                  <div className={`w-1/2 ${index % 2 === 0 ? 'pr-8 text-right' : 'pl-8'}`}>
                    <div className="bg-black/40 backdrop-blur-sm border border-white/10 rounded-xl p-6 hover:border-purple-500/50 transition-all">
                      <div className={`flex items-center gap-3 mb-3 ${index % 2 === 0 ? 'justify-end' : 'justify-start'}`}>
                        <item.icon className="w-5 h-5 text-purple-400" />
                        <h3 className="text-xl font-bold text-white">{item.title}</h3>
                      </div>
                      <p className={`text-purple-400 font-semibold mb-2 ${index % 2 === 0 ? 'text-right' : 'text-left'}`}>{item.date}</p>
                      <p className={`text-gray-400 text-sm ${index % 2 === 0 ? 'text-right' : 'text-left'}`}>{item.description}</p>
                    </div>
                  </div>
                  <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 rounded-full bg-gradient-to-br from-purple-500 to-violet-500 border-2 border-black z-10" />
                  <div className="w-1/2" />
                </motion.div>
              ))}
            </div>

            {/* Mobile Timeline */}
            <div className="md:hidden space-y-6">
              {[
                { title: 'Registration Opens', date: 'Now', description: 'Sign up and get your TestFlow access', icon: Calendar },
                { title: 'Building Period', date: '14 Days', description: 'Design and build your validation workflow', icon: FileText },
                { title: 'Submission Deadline', date: '29th Dec', description: 'Submit your TestFlow template', icon: Target },
                { title: 'Judging', date: '30th Dec - 12th Jan', description: 'Expert panel evaluates all submissions', icon: Clock },
                { title: 'Winners Announced', date: '24th Jan', description: 'Global announcement of champions', icon: Trophy }
              ].map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-black/40 backdrop-blur-sm border border-white/10 rounded-xl p-6 hover:border-purple-500/50 transition-all"
                >
                  <div className="flex items-center gap-4 mb-3">
                    <div className="w-3 h-3 rounded-full bg-gradient-to-br from-purple-500 to-violet-500" />
                    <item.icon className="w-5 h-5 text-purple-400" />
                    <h3 className="text-xl font-bold text-white">{item.title}</h3>
                  </div>
                  <p className="text-purple-400 font-semibold mb-2">{item.date}</p>
                  <p className="text-gray-400 text-sm">{item.description}</p>
                </motion.div>
              ))}
            </div>

            {/* CTA Button */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5 }}
              className="mt-12 flex justify-center"
            >
              <Button
                asChild
                className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white rounded-full px-8 py-6 text-lg font-semibold transition-all duration-300 hover:scale-105 hover:shadow-[0_0_30px_rgba(199,21,133,0.6)]"
              >
                <Link
                  href="https://forms.office.com/Pages/ResponsePage.aspx?id=lKls-VdCNkqUxwvRQtK8J3oie0RdtVVImx9U8GDGhrtUMVdPRksxTVhUSUtaVVI3SDNROTJPUjE0MS4u"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Register Before Deadline
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Link>
              </Button>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Register Now - Globe Feature Section */}
      <section id="register" className="relative overflow-hidden py-0 md:py-8">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]" />
          <div className="absolute top-0 -left-1/4 w-1/2 h-1/2 bg-gradient-to-br from-purple-500/6 via-transparent to-transparent rounded-full blur-3xl" />
          <div className="absolute bottom-0 -right-1/4 w-1/2 h-1/2 bg-gradient-to-tl from-violet-500/6 via-transparent to-transparent rounded-full blur-3xl" />
        </div>

        <div className="container mx-auto px-4 max-w-[1400px] w-full relative">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <GlobeFeatureSection />
          </motion.div>
        </div>
      </section>

      <SiteFooter />

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
  )
}
