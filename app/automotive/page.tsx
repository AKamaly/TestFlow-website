'use client'

import { motion } from 'framer-motion'
import { SiteHeader } from "@/components/site-header"
import { Button } from "@/components/ui/button"
import { ArrowRight, Car, Gauge, Shield, BarChart, Workflow, Check, ChevronDown, Battery, Cpu, Zap, AlertTriangle, CarFront, Settings2, Radio, Wifi, BatteryCharging, ShieldCheck, Award, Building2, Factory, Cog, Wrench, TestTube, FileCheck } from 'lucide-react'
import Link from 'next/link'
import Image from 'next/image'
import {
Accordion,
AccordionContent,
AccordionItem,
AccordionTrigger,
} from "@/components/ui/accordion"
import { useState } from 'react';
import { Notification } from '@/components/notification'

export default function AutomotivePage() {
const [showNotification, setShowNotification] = useState(false)
const [showSubscribeNotification, setShowSubscribeNotification] = useState(false)
return (
  <div className="min-h-screen bg-black text-white">
    <SiteHeader />
    <Notification 
      isOpen={showNotification}
      onClose={() => setShowNotification(false)}
      message="Documentation coming soon..."
    />
    {/* Hero Section */}
    <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden">
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
              Automotive Validation
            </motion.div>
            
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-4xl md:text-6xl font-bold"
            >
              Accelerate Your <br />
              <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                Automotive Testing
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-xl text-gray-400 max-w-lg"
            >
              Comprehensive validation solutions for automotive electronics and components with industry-standard compliance testing.
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
                  className="flex items-center gap-2 bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 text-white rounded-lg px-6 py-2.5 transition-all duration-300 hover:scale-105 shadow-[0_0_20px_rgba(59,130,246,0.5)] hover:shadow-[0_0_25px_rgba(59,130,246,0.7)]"
                >
                  Book A Demo
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </Button>
              <Button variant="outline" size="lg" onClick={() => setShowNotification(true)}>
                View Documentation
              </Button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="grid grid-cols-2 gap-4 pt-4"
            >
              {[
                "ISO 26262 compliance",
                "EMC testing",
                "Environmental testing",
                "Functional safety"
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
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/holographic-display-car01.jpg-TZcnsfooSZnZVrAFMmhFpnwJCnbOQq.jpeg"
                alt="Automotive engineer working with holographic car display for advanced testing"
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

    {/* Features Section */}
    <section className="py-20 md:py-32 border-t border-white/10 relative overflow-hidden">
      <div className="container mx-auto px-4 relative max-w-[1400px] w-full">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold mb-6"
          >
            Automotive Testing Solutions
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-xl text-gray-400 max-w-2xl mx-auto"
          >
            Comprehensive testing solutions for automotive electronics and components
          </motion.p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {[
            {
              icon: Shield,
              title: "Safety Validation",
              description: "Ensure compliance with automotive safety standards including ISO 26262"
            },
            {
              icon: Zap,
              title: "EMC Testing",
              description: "Electromagnetic compatibility testing for automotive components"
            },
            {
              icon: Battery,
              title: "Environmental Testing",
              description: "Temperature, humidity, and vibration testing for durability"
            },
            {
              icon: Cpu,
              title: "ECU Testing",
              description: "Comprehensive testing of electronic control units"
            },
            {
              icon: Gauge,
              title: "Performance Analysis",
              description: "Real-time performance monitoring and analysis"
            },
            {
              icon: BarChart,
              title: "Data Analytics",
              description: "Advanced analytics and reporting for test results"
            }
          ].map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group relative"
            >
              <div className="absolute inset-0 bg-gradient-to-b from-blue-500/5 to-blue-500/0 rounded-xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="relative p-6 bg-white/[0.02] border border-white/10 rounded-xl backdrop-blur-sm">
                <div className="w-12 h-12 rounded-lg bg-blue-500/10 border border-blue-500/20 flex items-center justify-center mb-4">
                  <feature.icon className="w-6 h-6 text-blue-400" />
                </div>
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-gray-400">{feature.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>

    {/* Safety Standards Section */}
    <section className="py-20 md:py-32 border-t border-white/10 relative overflow-hidden">
      <div className="container mx-auto px-4 relative max-w-[1400px] w-full">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold mb-6"
          >
            Automotive Safety Standards
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-xl text-gray-400 max-w-2xl mx-auto"
          >
            Comprehensive compliance testing for global automotive standards
          </motion.p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {[
            {
              icon: ShieldCheck,
              title: "ISO 26262",
              description: "Functional safety for road vehicles",
              standards: ["ASIL Levels A-D", "Safety Goals", "Risk Assessment"]
            },
            {
              icon: AlertTriangle,
              title: "UNECE Standards",
              description: "United Nations vehicle regulations",
              standards: ["EMC Testing", "Environmental", "Performance"]
            },
            {
              icon: Award,
              title: "AUTOSAR",
              description: "Automotive software architecture",
              standards: ["Classic Platform", "Adaptive Platform", "Foundation"]
            },
            {
              icon: FileCheck,
              title: "ASPICE",
              description: "Automotive SPICE compliance",
              standards: ["Process Assessment", "Quality Metrics", "Documentation"]
            },
            {
              icon: TestTube,
              title: "SAE Standards",
              description: "Society of Automotive Engineers",
              standards: ["J3061", "J1939", "Cybersecurity"]
            },
            {
              icon: Shield,
              title: "Regional Standards",
              description: "Region-specific certifications",
              standards: ["EU Type Approval", "FMVSS", "ADR"]
            }
          ].map((standard, index) => (
            <motion.div
              key={standard.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group relative"
            >
              <div className="absolute inset-0 bg-gradient-to-b from-blue-500/5 to-purple-500/5 rounded-xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="relative p-6 bg-white/[0.02] border border-white/10 rounded-xl backdrop-blur-sm">
                <div className="w-12 h-12 rounded-lg bg-blue-500/10 border border-blue-500/20 flex items-center justify-center mb-4">
                  <standard.icon className="w-6 h-6 text-blue-400" />
                </div>
                <h3 className="text-xl font-semibold mb-2">{standard.title}</h3>
                <p className="text-gray-400 mb-4">{standard.description}</p>
                <ul className="space-y-2">
                  {standard.standards.map((item) => (
                    <li key={item} className="flex items-center gap-2 text-sm text-gray-400">
                      <Check className="w-4 h-4 text-blue-400" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
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
            Our platform integrates with a wide range of automotive testing equipment
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

    {/* Success Metrics Section */}
    <section className="py-20 md:py-32 border-t border-white/10 relative overflow-hidden">
      <div className="container mx-auto px-4 relative max-w-[1400px] w-full">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold mb-6"
          >
            Success Metrics
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-xl text-gray-400 max-w-2xl mx-auto"
          >
            Real results from our automotive testing platform
          </motion.p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto mb-12">
          {[
            {
              metric: "85%",
              label: "Faster Testing",
              description: "Reduction in testing time through automation"
            },
            {
              metric: "99.9%",
              label: "Accuracy Rate",
              description: "In test results and measurements"
            },
            {
              metric: "70%",
              label: "Cost Reduction",
              description: "In overall testing operations"
            },
            {
              metric: "24/7",
              label: "Testing Coverage",
              description: "Continuous automated testing capability"
            }
          ].map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="relative group"
            >
              <div className="absolute inset-0 bg-gradient-to-b from-blue-500/5 to-purple-500/5 rounded-xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="relative p-6 bg-white/[0.02] border border-white/10 rounded-xl backdrop-blur-sm text-center">
                <motion.div
                  initial={{ scale: 0.5 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 + 0.2, type: "spring", stiffness: 200 }}
                  className="text-4xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent mb-2"
                >
                  {stat.metric}
                </motion.div>
                <h3 className="text-lg font-semibold mb-2">{stat.label}</h3>
                <p className="text-sm text-gray-400">{stat.description}</p>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto"
        >
          <div className="space-y-6">
            <h3 className="text-2xl font-bold">Key Performance Indicators</h3>
            <div className="space-y-4">
              {[
                { label: "Test Coverage", value: 95 },
                { label: "First Pass Yield", value: 92 },
                { label: "Defect Detection Rate", value: 99 },
                { label: "Customer Satisfaction", value: 94 }
              ].map((kpi, index) => (
                <motion.div
                  key={kpi.label}
                  initial={{ width: "0%" }}
                  whileInView={{ width: "100%" }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1, duration: 0.5 }}
                  className="space-y-2"
                >
                  <div className="flex justify-between text-sm">
                    <span>{kpi.label}</span>
                    <span className="text-blue-400">{kpi.value}%</span>
                  </div>
                  <div className="h-2 bg-white/5 rounded-full overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: `${kpi.value}%` }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1 + 0.5, duration: 0.5 }}
                      className="h-full bg-gradient-to-r from-blue-500 to-purple-500 rounded-full"
                    />
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          <div className="relative">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 via-purple-500/10 to-blue-500/10 rounded-2xl blur-2xl" />
              <div className="relative">
                <Image
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Tool%20screen%20shot2-vZ09dpYOO0skSzT0la8UgIpsXnxgSo.png"
                  alt="ATOMS Testing Workflow Interface"
                  width={600}
                  height={400}
                  className="rounded-2xl border border-white/10 shadow-2xl"
                />
              </div>
              <p className="mt-2 text-sm text-gray-400 text-center">
                ATOMS interface showcasing integrated workflow for automotive testing and automation
              </p>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>

    {/* CTA Section */}
    <section className="relative py-20 md:py-32 overflow-hidden">
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
                  Start Testing Smarter Today
                </h2>
                <p className="text-gray-400 text-lg md:text-xl max-w-2xl mx-auto">
                  Join leading automotive manufacturers who trust Atoms Testflow to validate their products.
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
                    <span>Instant Setup</span>
                  </div>
                  <div className="w-1 h-1 rounded-full bg-gray-700" />
                  <div className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-green-400" />
                    <span>24/7 Support</span>
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

