'use client'

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { SiteHeader } from "@/components/site-header"
import { Button } from "@/components/ui/button"
import { ArrowRight, Cpu, Zap, Clock, Shield, BarChart, Workflow, AlertTriangle, Microscope, LineChart, FileCheck, Check, Users } from 'lucide-react'
import Link from 'next/link'
import Image from 'next/image'
import { Notification } from '@/components/notification'
import { SectionTracker, trackButtonClick, trackCTAClick, trackFormSubmission } from '@/components/analytics-tracker'

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

  const handleROIClick = () => {
    trackCTAClick('roi_calculator', 'Get Detailed ROI Report', 'semiconductor_page')
    trackButtonClick('Get Detailed ROI Report', 'ROI Calculator Section', {
      validation_time: validationTime,
      engineers: engineers,
      cost_per_engineer: costPerEngineer,
      estimated_savings: savings.cost
    })
  }

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
        onClick={handleROIClick}
        className="w-full group bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 text-white rounded-lg px-6 py-2.5 transition-all duration-300 hover:scale-105 shadow-[0_0_20px_rgba(59,130,246,0.5)] hover:shadow-[0_0_25px_rgba(59,130,246,0.7)] flex items-center justify-center gap-2"
      >
        Get Detailed ROI Report
        <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
      </Link>
    </div>
  )
}

export default function SemiconductorPage() {
  const [showNotification, setShowNotification] = useState(false)
  const [showSubscribeNotification, setShowSubscribeNotification] = useState(false)

  const handleCTAClick = (ctaText: string, location: string) => {
    trackCTAClick('primary_cta', ctaText, location)
  }

  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setShowSubscribeNotification(true)
    trackFormSubmission('newsletter', true, { page: 'semiconductor' })
    // Reset form
    const form = e.target as HTMLFormElement
    form.reset()
  }

  return (
    <div className="min-h-screen bg-black text-white">
      <SiteHeader />

      {/* Section Trackers */}
      <SectionTracker sectionId="hero" sectionName="Semiconductor Hero" />
      <SectionTracker sectionId="features" sectionName="Semiconductor Features" />
      <SectionTracker sectionId="equipment" sectionName="Compatible Equipment" />
      <SectionTracker sectionId="roi" sectionName="ROI Calculator" />
      <SectionTracker sectionId="cta" sectionName="Final CTA" />

      <Notification 
        isOpen={showNotification}
        onClose={() => setShowNotification(false)}
        message="Documentation coming soon..."
      />

      {/* Hero Section */}
      <section id="hero" className="relative pt-20 pb-20 md:pt-24 md:pb-28 overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]" />
          <div className="absolute top-0 -left-1/4 w-1/2 h-1/2 bg-gradient-to-br from-blue-500/10 via-transparent to-transparent rounded-full blur-3xl" />
          <div className="absolute bottom-0 -right-1/4 w-1/2 h-1/2 bg-gradient-to-tl from-purple-500/10 via-transparent to-transparent rounded-full blur-3xl" />
        </div>

        <div className="container mx-auto px-4 relative max-w-[1400px] w-full">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="text-left space-y-8">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="inline-block rounded-full px-4 py-1.5 text-sm font-medium bg-white/5 border border-white/10 backdrop-blur-sm"
              >
                Semiconductor Validation
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="text-4xl md:text-6xl font-bold"
              >
                Accelerate Your <br />
                <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                  Chip Validation
                </span>
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="text-xl text-gray-400 max-w-lg"
              >
                Reduce semiconductor validation time by up to 95% with our AI-powered automation platform designed specifically for IC testing and characterization.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="flex flex-col sm:flex-row gap-4"
              >
                <Button asChild className="group">
                  <Link 
                    href="/contact" 
                    onClick={() => handleCTAClick('Book A Demo', 'Hero Section')}
                    className="flex items-center gap-2 bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 text-white rounded-lg px-6 py-2.5 transition-all duration-300 hover:scale-105 shadow-[0_0_20px_rgba(59,130,246,0.5)] hover:shadow-[0_0_25px_rgba(59,130,246,0.7)]"
                  >
                    Book A Demo
                    <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                  </Link>
                </Button>
                <Button asChild variant="outline" size="lg">
                  <Link 
                    href="/docs"
                    onClick={() => trackButtonClick('View Documentation', 'Hero Section', { page: 'semiconductor' })}
                  >
                    View Documentation
                  </Link>
                </Button>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                className="grid grid-cols-2 gap-4 pt-4"
              >
                {[
                  "95% faster validation",
                  "24/7 automated testing",
                  "JEDEC compliance",
                  "Universal compatibility"
                ].map((feature) => (
                  <div key={feature} className="flex items-center gap-2">
                    <div className="w-5 h-5 rounded-full bg-green-500/20 flex items-center justify-center">
                      <Check className="w-3 h-3 text-green-400" />
                    </div>
                    <span className="text-sm text-gray-400">{feature}</span>
                  </div>
                ))}
              </motion.div>
            </div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="relative"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 via-purple-500/10 to-blue-500/10 rounded-2xl blur-2xl" />
              <div className="relative">
                <Image
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/semiconductors%20hero%20image-FOz9PYe0RQLHStffSiPbjMtjnC07uw.jpeg"
                  alt="Advanced Semiconductor Chip"
                  width={600}
                  height={400}
                  className="rounded-2xl border border-white/10 shadow-2xl"
                />
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-t from-black/40 via-black/20 to-transparent" />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Industry Challenges Section */}
      <section className="py-20 md:py-32 border-t border-white/10 relative overflow-hidden">
        <div className="container mx-auto px-4 relative max-w-[1400px] w-full">
          <div className="text-center mb-16">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-3xl md:text-4xl font-bold mb-6"
            >
              Industry Challenges We Solve
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-xl text-gray-400 max-w-2xl mx-auto"
            >
              Address critical semiconductor validation challenges with our intelligent automation platform
            </motion.p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {[
              {
                icon: AlertTriangle,
                title: "Complex Multi-Parameter Testing",
                description: "Simplify the management of multiple test parameters and conditions with automated test sequence generation"
              },
              {
                icon: Clock,
                title: "Long Validation Cycles",
                description: "Reduce validation cycles from weeks to hours with parallel testing and intelligent automation"
              },
              {
                icon: BarChart,
                title: "High Equipment Costs",
                description: "Maximize equipment utilization and reduce costs with 24/7 automated operation"
              },
              {
                icon: Shield,
                title: "Quality & Compliance",
                description: "Ensure consistent quality and regulatory compliance with automated reporting and verification"
              },
              {
                icon: Zap,
                title: "Time-to-Market Pressure",
                description: "Accelerate product launches while maintaining thorough validation coverage"
              },
              {
                icon: FileCheck,
                title: "Documentation Overhead",
                description: "Automate test documentation and reporting for faster review and approval"
              }
            ].map((challenge, index) => (
              <motion.div
                key={challenge.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="group relative"
              >
                <div className="absolute inset-0 bg-gradient-to-b from-red-500/5 to-red-500/0 rounded-xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="relative p-6 bg-white/[0.02] border border-white/10 rounded-xl backdrop-blur-sm">
                  <div className="w-12 h-12 rounded-lg bg-red-500/10 border border-red-500/20 flex items-center justify-center mb-4">
                    <challenge.icon className="w-6 h-6 text-red-400" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{challenge.title}</h3>
                  <p className="text-gray-400">{challenge.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* TestFlow Solutions Section */}
      <section className="py-20 md:py-32 border-t border-white/10 relative overflow-hidden">
  {/* Animated background pattern */}
  <div className="absolute inset-0">
    <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]" />
    <motion.div
      animate={{
        scale: [1, 1.1, 1],
        opacity: [0.1, 0.3, 0.1],
      }}
      transition={{ duration: 10, repeat: Infinity }}
      className="absolute -top-1/2 left-0 w-full h-full bg-gradient-to-br from-blue-500/10 via-transparent to-transparent rounded-full blur-3xl"
    />
    <motion.div
      animate={{
        scale: [1, 1.2, 1],
        opacity: [0.1, 0.2, 0.1],
      }}
      transition={{ duration: 8, repeat: Infinity, delay: 1 }}
      className="absolute -bottom-1/2 right-0 w-full h-full bg-gradient-to-tl from-purple-500/10 via-transparent to-transparent rounded-full blur-3xl"
    />
  </div>

  <div className="container mx-auto px-4 relative max-w-[1400px] w-full">
    <div className="max-w-6xl mx-auto">
      <div className="text-center mb-16">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-bold mb-6"
        >
          Comprehensive Validation Solutions
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-xl text-gray-400 max-w-2xl mx-auto"
        >
          Our platform provides end-to-end automation for semiconductor validation
        </motion.p>
      </div>

      <div className="relative">
        {/* Main feature card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="relative z-10 bg-black/40 backdrop-blur-xl border border-white/10 rounded-2xl overflow-hidden lg:w-[150%] lg:-ml-[25%]"
        >
          <div className="grid lg:grid-cols-2 gap-8 items-center">
            <div className="p-8 lg:p-12 lg:pl-[25%]">
              <div className="space-y-6">
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  className="inline-flex items-center gap-2 text-sm text-blue-400 bg-blue-500/10 border border-blue-500/20 rounded-full px-3 py-1"
                >
                  <Workflow className="w-4 h-4" />
                  <span>Intelligent Workflow</span>
                </motion.div>
                <h3 className="text-2xl font-bold">AI-Powered Test Automation</h3>
                <p className="text-gray-400">
                  Create and execute complex validation workflows with our intuitive drag-and-drop interface. Our AI automatically optimizes test sequences and parameters.
                </p>
              </div>
            </div>
            <div className="relative aspect-[4/3] lg:aspect-auto lg:h-full group">
              <div className="absolute inset-0 bg-gradient-to-r from-black/40 via-transparent to-transparent lg:from-transparent" />
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Tool%20screen%20shot2-macrBmbL866mFlu4vKK0oJSSgXz2ut.png"
                alt="ATOMS TestFlow Interface"
                fill
                className="object-cover object-left-top transition-transform duration-500 group-hover:scale-[1.02]"
              />
            </div>
          </div>
        </motion.div>

        {/* Feature cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
          {[
            {
              title: "Automated Test Generation",
              description: "AI-powered test sequence generation based on device specifications",
              icon: Workflow,
              color: "blue"
            },
            {
              title: "Parallel Testing",
              description: "Run multiple tests simultaneously across different parameters",
              icon: Cpu,
              color: "purple"
            },
            {
              title: "Environmental Monitoring",
              description: "Real-time monitoring of temperature, voltage, and other conditions",
              icon: Microscope,
              color: "green"
            },
            {
              title: "Data Analysis",
              description: "Advanced analytics with real-time visualization and reporting",
              icon: LineChart,
              color: "orange"
            },
            {
              title: "Team Collaboration",
              description: "Real-time collaboration with version control and commenting system for test scripts",
              icon: Users,
              color: "indigo"
            },
            {
              title: "Compliance Reporting",
              description: "Automated generation of compliance documentation",
              icon: FileCheck,
              color: "pink"
            }
          ].map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className={`group relative bg-black/40 backdrop-blur-xl border border-white/10 rounded-xl overflow-hidden ${
                index === 0 ? 'md:col-span-2 lg:col-span-1' : ''
              }`}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-white/[0.03] via-transparent to-transparent" />
              <div 
                className={`absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-br ${
                  feature.color === 'blue' ? 'from-blue-500/10' :
                  feature.color === 'purple' ? 'from-purple-500/10' :
                  feature.color === 'green' ? 'from-green-500/10' :
                  feature.color === 'orange' ? 'from-orange-500/10' :
                  feature.color === 'pink' ? 'from-pink-500/10' :
                  feature.color === 'indigo' ? 'from-indigo-500/10' : ''
                } via-transparent to-transparent`}
              />
              <div className="relative p-6 h-full">
                <div className="flex flex-col h-full">
                  <div className={`w-12 h-12 rounded-lg flex items-center justify-center mb-4 transition-transform duration-300 group-hover:scale-110 ${
                    feature.color === 'blue' ? 'bg-blue-500/10 border-blue-500/20' :
                    feature.color === 'purple' ? 'bg-purple-500/10 border-purple-500/20' :
                    feature.color === 'green' ? 'bg-green-500/10 border-green-500/20' :
                    feature.color === 'orange' ? 'bg-orange-500/10 border-orange-500/20' :
                    feature.color === 'pink' ? 'bg-pink-500/10 border-pink-500/20' :
                    feature.color === 'indigo' ? 'bg-indigo-500/10 border-indigo-500/20' : ''
                  } border`}>
                    <feature.icon className={`w-6 h-6 ${
                      feature.color === 'blue' ? 'text-blue-400' :
                      feature.color === 'purple' ? 'text-purple-400' :
                      feature.color === 'green' ? 'text-green-400' :
                      feature.color === 'orange' ? 'text-orange-400' :
                      feature.color === 'pink' ? 'text-pink-400' :
                      feature.color === 'indigo' ? 'text-indigo-400' : ''
                    }`} />
                  </div>
                  <h3 className="text-xl font-semibold mb-2 transition-colors duration-300 group-hover:text-blue-400">
                    {feature.title}
                  </h3>
                  <p className="text-gray-400">{feature.description}</p>
                  <div className="mt-4 flex items-center gap-2 text-sm text-blue-400 opacity-0 transform translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300">
                    <span>Learn more</span>
                    <ArrowRight className="w-4 h-4" />
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  </div>
</section>

      {/* Compatible Equipment Section */}
<section className="py-20 md:py-32 border-t border-white/10 relative overflow-hidden">
  <div className="container mx-auto px-4 relative max-w-[1400px] w-full">
    <div className="text-center mb-16">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-3xl md:text-4xl font-bold mb-6"
      >
        Compatible Equipment
      </motion.h2>
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.1 }}
        className="text-xl text-gray-400 max-w-2xl mx-auto"
      >
        Our platform integrates with a wide range of laboratory equipment
      </motion.p>
    </div>

    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
      {[
        {
          name: "Oscilloscopes",
          brands: ["Tektronix", "Keysight", "Rohde & Schwarz"],
          image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Oscilliscope.jpg-eubzz5n8ZfmZxQAjMy8YfiHSqhroaK.jpeg",
          features: ["Real-time analysis", "Automated capture", "Data export"]
        },
        {
          name: "Multimeters",
          brands: ["Fluke", "Keysight", "Gossen Metrawatt"],
          image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Digital%20multimeter-uFVMVGXS9PXhFCLyRZzTc2WLNQACbS.webp",
          features: ["Precision measurement", "Remote control", "Data logging"]
        },
        {
          name: "Power Analyzers",
          brands: ["Yokogawa", "ZES Zimmer", "Hioki"],
          image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/power%20analyzer.jpg-t3yHvjHa4zN45yYjwRh7fdVN8j6h9q.jpeg",
          features: ["Efficiency testing", "Harmonics analysis", "Waveform capture"]
        },
        {
          name: "Signal Generators",
          brands: ["Keysight", "Rohde & Schwarz", "Anritsu"],
          image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/signal%20generator.jpg-k8HS4HHTLA9kZeoD1k0KXuZ4waTnw1.jpeg",
          features: ["Custom waveforms", "Automated sequencing", "Modulation"]
        },
        {
          name: "Spectrum Analyzers",
          brands: ["Tektronix", "Keysight", "Anritsu"],
          image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/spectrum%20analyzer.jpg-xcQpz37QXzwSiECBmY5kFlHfsjTTHh.jpeg",
          features: ["EMI testing", "Signal analysis", "Frequency scanning"]
        },
        {
          name: "Environmental Chambers",
          brands: ["Thermotron", "ESPEC", "Weiss"],
          image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/enviromental%20chambers-yX5Gux35McAextrH6tsSRGKc6E1MXA.webp",
          features: ["Temperature control", "Humidity testing", "Automated cycles"]
        }
      ].map((equipment, index) => (
        <motion.div
          key={equipment.name}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: index * 0.1 }}
          className="group relative bg-white/[0.02] border border-white/10 rounded-xl overflow-hidden"
        >
          <div className="aspect-video relative">
            <Image
              src={equipment.image}
              alt={equipment.name}
              fill
              className="object-cover transition-transform duration-300 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 p-4">
              <h3 className="text-xl font-semibold mb-2">{equipment.name}</h3>
              <div className="flex flex-wrap gap-2">
                {equipment.brands.map((brand) => (
                  <span
                    key={brand}
                    className="text-xs bg-white/10 backdrop-blur-sm rounded-full px-2 py-1"
                  >
                    {brand}
                  </span>
                ))}
              </div>
            </div>
          </div>
          <div className="p-4">
            <ul className="space-y-2">
              {equipment.features.map((feature) => (
                <li key={feature} className="flex items-center gap-2 text-sm text-gray-400">
                  <Check className="w-4 h-4 text-blue-400" />
                  {feature}
                </li>
              ))}
            </ul>
          </div>
        </motion.div>
      ))}
    </div>
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
            {/* Time to Market Impact            {/* Time to Market Impact */}
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

                  {/* Timeline Visualization */}

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
      <section id="pricing" className="relative py-20 md:py-32 overflow-hidden">
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

        <div className="container mx-auto px-4 relative max-w-[1400px] w-full">
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
                    Join leading hardware companies who trust Atoms Testflow to accelerate their product launches.
                  </p>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 }}
                  className="flex flex-col items-center gap-6"
                >
                  <Link href="/contact" className="group relative overflow-hidden bg-white text-black hover:bg-white/90 rounded-full px-8 py-6 text-lg font-medium transition-all duration-300 w-full">
                    <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 via-purple-500/20 to-blue-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    <span className="relative flex items-center gap-2 justify-center">
                      Try Atoms TestFlow Now
                      <motion.div
                        animate={{
                          x: [0, 8, 0],
                        }}
                        transition={{
                          duration: 1,
                          repeat: Infinity,
                          repeatType: "reverse",
                        }}
                      >
                        <ArrowRight className="w-5 h-5" />
                      </motion.div>
                    </span>
                  </Link>

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
<Notification 
  isOpen={showSubscribeNotification}
  onClose={() => setShowSubscribeNotification(false)}
  message="Thanks for subscribing! We'll keep you updated with the latest news."
/>
    </div>
  )
}

