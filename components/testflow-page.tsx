'use client'

import Link from "next/link"
import { motion } from 'framer-motion'
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { LogoCarousel } from '@/components/logo-carousel'
import { WobbleCard } from "@/components/ui/wobble-card"
import { Timeline } from "@/components/ui/timeline"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Workflow, CircuitBoard, Globe, BarChart3, Users, Settings, ArrowRight, Check } from 'lucide-react'
import Image from "next/image"
import { SectionTracker, trackButtonClick } from '@/components/analytics-tracker'

export function TestFlowPage() {
  const tabFeatures = [
    {
      value: "tab-1",
      icon: <Workflow className="h-auto w-4 shrink-0" />,
      label: "Workflow Builder",
      content: {
        badge: "Automate Lab Instruments",
        title: "Build and automate complex test workflows visually.",
        description:
          "Create sophisticated test sequences with our intuitive drag-and-drop workflow builder. Connect instruments, define test parameters, and automate your entire lab setup in minutes—no coding required.",
        imageSrc:
          "https://9zog2la6l29pbfba.public.blob.vercel-storage.com/Workflow%20builder%20AI%20powred.png",
        imageAlt: "Workflow Builder",
      },
    },
    {
      value: "tab-2",
      icon: <CircuitBoard className="h-auto w-4 shrink-0" />,
      label: "Schematic",
      content: {
        badge: "Your Lab Wiring",
        title: "Visualize and manage your lab connections.",
        description:
          "Map your entire lab setup with interactive schematics. See how instruments are connected, track wiring configurations, and maintain accurate documentation of your test environment.",
        imageSrc:
          "https://9zog2la6l29pbfba.public.blob.vercel-storage.com/Shamatic.png",
        imageAlt: "Schematic",
      },
    },
    {
      value: "tab-3",
      icon: <Globe className="h-auto w-4 shrink-0" />,
      label: "Remote Control",
      content: {
        badge: "Control from Anywhere",
        title: "Control instruments and run tests from anywhere.",
        description:
          "Access and control your lab equipment remotely with secure, real-time connections. Run tests, monitor progress, and manage your lab from any device, anywhere in the world.",
        imageSrc:
          "https://9zog2la6l29pbfba.public.blob.vercel-storage.com/Remote%20control%20feature.png",
        imageAlt: "Remote Control",
      },
    },
    {
      value: "tab-4",
      icon: <BarChart3 className="h-auto w-4 shrink-0" />,
      label: "Analytics",
      content: {
        badge: "Data-Driven Insights",
        title: "Advanced analytics for your test data.",
        description:
          "Transform raw test data into actionable insights with powerful analytics tools. Track trends, identify patterns, generate comprehensive reports, and make data-driven decisions to optimize your testing processes.",
        imageSrc:
          "https://9zog2la6l29pbfba.public.blob.vercel-storage.com/Analytics%20Feature.png",
        imageAlt: "Analytics",
      },
    },
    {
      value: "tab-5",
      icon: <Users className="h-auto w-4 shrink-0" />,
      label: "Team Collaboration",
      content: {
        badge: "Collaboration Dashboard",
        title: "Collaborate seamlessly with your team.",
        description:
          "Share test results, workflows, and insights with your team in real-time. Track project progress, assign tasks, and maintain visibility across all lab activities with our comprehensive collaboration dashboard.",
        imageSrc:
          "https://9zog2la6l29pbfba.public.blob.vercel-storage.com/Dahsboard.png",
        imageAlt: "Team Collaboration Dashboard",
      },
    },
  ]

  const howItWorksTimeline = [
    {
      title: "1",
      image: "https://9zog2la6l29pbfba.public.blob.vercel-storage.com/Connect%20instruments.png",
      content: (
        <div className="space-y-4">
          <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">Configure Lab Instruments</h3>
          <p className="text-gray-400 text-lg md:text-xl leading-relaxed">
            Set up your lab instruments including oscilloscopes, power supplies, signal generators, and more. TestFlow automatically detects and configures connections to your equipment, ensuring seamless integration with your existing lab setup.
          </p>
        </div>
      ),
    },
    {
      title: "2",
      image: "https://9zog2la6l29pbfba.public.blob.vercel-storage.com/Workflow%20builder%20AI%20powred.png",
      content: (
        <div className="space-y-4">
          <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">Ask AI for What Test You Want to Create</h3>
          <p className="text-gray-400 text-lg md:text-xl leading-relaxed">
            Simply specify your device under test (DUT) specifications and testing requirements. Our AI analyzes your input and leverages comprehensive test knowledge to identify the optimal validation approach for your hardware.
          </p>
        </div>
      ),
    },
    {
      title: "3",
      image: "https://9zog2la6l29pbfba.public.blob.vercel-storage.com/Team.png",
      content: (
        <div className="space-y-4">
          <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">Review Your TestPlan and Workflow</h3>
          <p className="text-gray-400 text-lg md:text-xl leading-relaxed">
            Review the AI-generated test plan and workflow before execution. Make any necessary adjustments, verify test parameters, and ensure the validation sequence matches your requirements. TestFlow provides a visual representation of your entire test workflow.
          </p>
        </div>
      ),
    },
    {
      title: "4",
      image: "https://9zog2la6l29pbfba.public.blob.vercel-storage.com/Analysis.png",
      content: (
        <div className="space-y-4">
          <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">Run the Generated Script and Get the Results</h3>
          <p className="text-gray-400 text-lg md:text-xl leading-relaxed">
            Execute the generated test script with a single click. Monitor real-time measurements, track test progress, and receive instant notifications when tests complete. Get comprehensive results with detailed analytics, pass/fail summaries, and actionable insights.
          </p>
        </div>
      ),
    },
  ]

  return (
    <div className="min-h-screen bg-black text-white">
      <SiteHeader />
      
      {/* Section Trackers */}
      <SectionTracker sectionId="hero" sectionName="TestFlow AI Hero" />
      <SectionTracker sectionId="features" sectionName="TestFlow AI Features" />
      <SectionTracker sectionId="core-features" sectionName="TestFlow AI Core Features" />
      <SectionTracker sectionId="how-it-works" sectionName="TestFlow AI How It Works" />

      {/* Hero Section */}
      <section id="hero" className="relative pt-32 pb-8 md:pt-40 md:pb-20 overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]" />
          <div className="absolute top-0 -left-1/4 w-1/2 h-1/2 bg-gradient-to-br from-purple-500/10 via-transparent to-transparent rounded-full blur-3xl" />
          <div className="absolute bottom-0 -right-1/4 w-1/2 h-1/2 bg-gradient-to-tl from-violet-500/10 via-transparent to-transparent rounded-full blur-3xl" />
        </div>

        <div className="container mx-auto px-4 relative max-w-[1400px] w-full">
          <div className="text-center max-w-4xl mx-auto">
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight tracking-tight"
            >
              The Ultimate Hardware Testing{' '}
              <span className="bg-gradient-to-r from-purple-400 via-white to-violet-400 bg-clip-text text-transparent">
                AI Platform
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-lg md:text-xl text-gray-400 max-w-2xl mx-auto"
            >
              Transform your hardware validation workflow with AI-powered automation. From datasheet to sign-off report, all in one intelligent platform.
            </motion.p>
          </div>

          {/* Tab Selector Section - Images Only */}
          <div className="mt-12 md:mt-16">
            <Tabs defaultValue={tabFeatures[0].value} className="mt-8">
              <TabsList className="w-full flex flex-wrap items-center justify-center gap-3 sm:flex-row md:gap-10 bg-transparent p-0">
                {tabFeatures.map((tab) => (
                  <TabsTrigger
                    key={tab.value}
                    value={tab.value}
                    className="flex items-center gap-2 rounded-xl px-4 py-3 text-xs sm:text-sm font-semibold text-gray-400 transition-all duration-300 hover:text-white data-[state=active]:bg-gradient-to-r data-[state=active]:from-purple-600 data-[state=active]:to-pink-600 data-[state=active]:text-white data-[state=active]:shadow-lg data-[state=active]:shadow-purple-500/50 whitespace-nowrap relative z-10"
                  >
                    {tab.icon} {tab.label}
                  </TabsTrigger>
                ))}
              </TabsList>
              <div className="mx-auto mt-8 max-w-screen-2xl rounded-2xl bg-transparent p-8 lg:p-20">
                {tabFeatures.map((tab) => (
                  <TabsContent
                    key={tab.value}
                    value={tab.value}
                    className="flex justify-center"
                  >
                    <div className="relative w-full max-w-6xl h-auto rounded-xl overflow-hidden shadow-2xl">
                      <Image
                        src={tab.content.imageSrc}
                        alt={tab.content.imageAlt}
                        width={1200}
                        height={800}
                        className="rounded-xl w-full h-auto"
                      />
                    </div>
                  </TabsContent>
                ))}
              </div>
            </Tabs>
          </div>

          {/* Integrated Logo Carousel */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="mt-12 md:mt-16 max-w-4xl mx-auto"
          >
            <LogoCarousel />
          </motion.div>
        </div>
      </section>

      {/* Core Features Section with Wobble Cards */}
      <section id="core-features" className="relative py-12 md:py-20 overflow-hidden border-t border-white/10">
        {/* Background Elements */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]" />
          <div className="absolute top-0 -left-1/4 w-1/2 h-1/2 bg-gradient-to-br from-purple-500/6 via-transparent to-transparent rounded-full blur-3xl" />
          <div className="absolute bottom-0 -right-1/4 w-1/2 h-1/2 bg-gradient-to-tl from-violet-500/6 via-transparent to-transparent rounded-full blur-3xl" />
        </div>

        <div className="container mx-auto px-4 relative max-w-[1400px] w-full">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
              Innovative Features For Every Stage of{' '}
              <span className="bg-gradient-to-r from-purple-400 to-violet-400 bg-clip-text text-transparent">
                Lab Testing
              </span>
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 max-w-7xl mx-auto w-full">
            <WobbleCard
              containerClassName="col-span-1 lg:col-span-2 h-full bg-gradient-to-br from-purple-900 to-violet-900 min-h-[500px] lg:min-h-[300px]"
              className=""
            >
              <div className="max-w-xs">
                <h2 className="text-left text-balance text-base md:text-xl lg:text-3xl font-semibold tracking-[-0.015em] text-white">
                  AI-Powered Test Generation
                </h2>
                <p className="mt-4 text-left text-base/6 text-neutral-200">
                  Transform datasheet specifications into production-ready test scripts automatically. Upload your datasheet and get comprehensive validation code in minutes.
                </p>
              </div>
              <Image
                src="https://9zog2la6l29pbfba.public.blob.vercel-storage.com/Workflow%20builder%20AI%20powred.png"
                width={500}
                height={500}
                alt="AI Test Generation"
                className="absolute -right-4 lg:-right-[40%] grayscale filter -bottom-10 object-contain rounded-2xl opacity-60"
              />
            </WobbleCard>
            <WobbleCard containerClassName="col-span-1 min-h-[300px] bg-gradient-to-br from-pink-900 to-purple-900">
              <h2 className="max-w-80 text-left text-balance text-base md:text-xl lg:text-3xl font-semibold tracking-[-0.015em] text-white">
                Universal Instrument Compatibility
              </h2>
              <p className="mt-4 max-w-[26rem] text-left text-base/6 text-neutral-200">
                Connect any lab instrument with our universal SCPI interface. Support for all major manufacturers including Keysight, Tektronix, Agilent, and more.
              </p>
            </WobbleCard>
            <WobbleCard containerClassName="col-span-1 lg:col-span-3 bg-gradient-to-br from-blue-900 to-indigo-900 min-h-[500px] lg:min-h-[600px] xl:min-h-[300px]">
              <div className="max-w-sm">
                <h2 className="max-w-sm md:max-w-lg text-left text-balance text-base md:text-xl lg:text-3xl font-semibold tracking-[-0.015em] text-white">
                  Complete Lab Automation Platform
                </h2>
                <p className="mt-4 max-w-[26rem] text-left text-base/6 text-neutral-200">
                  From instrument setup to data analysis, TestFlow streamlines your entire validation workflow. Get sign-off-ready reports in minutes, not days.
                </p>
              </div>
              <Image
                src="https://9zog2la6l29pbfba.public.blob.vercel-storage.com/Dahsboard.png"
                width={500}
                height={500}
                alt="Lab Automation Platform"
                className="absolute -right-10 md:-right-[40%] lg:-right-[20%] -bottom-10 object-contain rounded-2xl opacity-60"
              />
            </WobbleCard>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
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
                TestFlow Simplifies, Automates & Consolidates
              </span>{' '}
              <span className="text-white">Your Lab Testing Workflow</span>
            </h2>
          </motion.div>

          <div className="max-w-7xl mx-auto">
            <Timeline data={howItWorksTimeline} showHeader={false} />
          </div>
        </div>
      </section>

      {/* CTA Section - Enhanced Minimalist Design */}
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
                    onClick={() => trackButtonClick('Get Started', 'TestFlow CTA', { page: 'testflow-agent' })}
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
    </div>
  )
}

