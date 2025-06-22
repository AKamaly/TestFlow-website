'use client'

import { motion } from 'framer-motion'
import { SiteHeader } from "@/components/site-header"
import { Button } from "@/components/ui/button"
import { ArrowRight, Microscope, LineChart, FileCheck, Check, Beaker, Database, Share2, Building2, GraduationCap, Award, Users } from 'lucide-react'
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
import { SectionTracker, trackButtonClick, trackCTAClick, trackFormSubmission } from '@/components/analytics-tracker'

export default function ResearchLabsPage() {
const [showNotification, setShowNotification] = useState(false)
const [showSubscribeNotification, setShowSubscribeNotification] = useState(false)

const handleCTAClick = (ctaText: string, location: string) => {
  trackCTAClick('primary_cta', ctaText, location)
}

const handleNewsletterSubmit = (e: React.FormEvent) => {
  e.preventDefault()
  setShowSubscribeNotification(true)
  trackFormSubmission('newsletter', true, { page: 'research-labs' })
  // Reset form
  const form = e.target as HTMLFormElement
  form.reset()
}

return (
  <div className="min-h-screen bg-black text-white">
    <SiteHeader />

    {/* Section Trackers */}
    <SectionTracker sectionId="hero" sectionName="Research Labs Hero" />
    <SectionTracker sectionId="features" sectionName="Research Lab Solutions" />
    <SectionTracker sectionId="why-choose" sectionName="Why Choose Us" />
    <SectionTracker sectionId="equipment" sectionName="Compatible Equipment" />
    <SectionTracker sectionId="metrics" sectionName="Success Metrics" />
    <SectionTracker sectionId="faq" sectionName="FAQ" />
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
              Research Labs
            </motion.div>
            
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-4xl md:text-6xl font-bold"
            >
              Accelerate Your <br />
              <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                Research Validation
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-xl text-gray-400 max-w-lg"
            >
              Transform your research validation process with automated testing workflows designed specifically for research laboratories.
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
                  onClick={() => trackButtonClick('View Documentation', 'Hero Section', { page: 'research-labs' })}
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
                "Automated data collection",
                "Real-time analysis",
                "Reproducible results",
                "Collaborative research"
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
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/People-IMG-5-FeoNnrOAxlMqozKlrW3LSgyA5PDNGK.jpeg"
                alt="Research Scientists analyzing data in a modern laboratory"
                width={600}
                height={400}
                className="rounded-2xl border border-white/10 shadow-2xl object-cover"
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
            Research Lab Solutions
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-xl text-gray-400 max-w-2xl mx-auto"
          >
            Streamline your research workflow with our comprehensive validation platform
          </motion.p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {[
            {
              icon: Microscope,
              title: "Automated Data Collection",
              description: "Automate data collection across multiple instruments and experiments simultaneously"
            },
            {
              icon: Database,
              title: "Data Management",
              description: "Centralized storage and organization of research data with version control"
            },
            {
              icon: LineChart,
              title: "Real-time Analysis",
              description: "Instant analysis and visualization of experimental results"
            },
            {
              icon: Share2,
              title: "Collaboration Tools",
              description: "Share results and collaborate with team members in real-time"
            },
            {
              icon: Beaker,
              title: "Experiment Automation",
              description: "Create and execute automated experimental protocols"
            },
            {
              icon: FileCheck,
              title: "Compliance & Documentation",
              description: "Automated documentation and compliance reporting for research protocols"
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

    {/* Why Choose Us Section */}
    <section className="py-20 md:py-32 border-t border-white/10 relative overflow-hidden">
      <div className="container mx-auto px-4 relative max-w-[1400px] w-full">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold mb-6"
          >
            Why Choose Atoms Testflow
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-xl text-gray-400 max-w-2xl mx-auto"
          >
            Trusted by leading research institutions worldwide
          </motion.p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {[
            {
              icon: Building2,
              title: "50+ Research Institutions",
              description: "Trusted by leading universities and research centers globally"
            },
            {
              icon: GraduationCap,
              title: "PhD-Level Support",
              description: "Expert support team with advanced degrees in relevant fields"
            },
            {
              icon: Award,
              title: "ISO Certified",
              description: "Compliant with international research standards"
            },
            {
              icon: Users,
              title: "Collaborative Platform",
              description: "Enable seamless collaboration between research teams"
            }
          ].map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="text-center"
            >
              <div className="w-12 h-12 rounded-lg bg-blue-500/10 border border-blue-500/20 flex items-center justify-center mx-auto mb-4">
                <item.icon className="w-6 h-6 text-blue-400" />
              </div>
              <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
              <p className="text-gray-400">{item.description}</p>
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
            Real results from our research lab platform
          </motion.p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto mb-12">
          {[
            {
              metric: "90%",
              label: "Faster Research",
              description: "Reduction in experiment setup time"
            },
            {
              metric: "99.9%",
              label: "Data Accuracy",
              description: "In automated measurements"
            },
            {
              metric: "75%",
              label: "Cost Reduction",
              description: "In lab operations"
            },
            {
              metric: "24/7",
              label: "Lab Operation",
              description: "Continuous experiment monitoring"
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
                { label: "Experiment Success Rate", value: 97 },
                { label: "Data Quality Score", value: 99 },
                { label: "Protocol Compliance", value: 100 },
                { label: "Research Efficiency", value: 95 }
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
                ATOMS interface showcasing integrated workflow for research lab automation
              </p>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>

    {/* FAQ Section */}
    <section className="py-20 md:py-32 border-t border-white/10 relative overflow-hidden">
      <div className="container mx-auto px-4 relative max-w-[1400px] w-full">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold mb-6"
          >
            Frequently Asked Questions
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-xl text-gray-400 max-w-2xl mx-auto"
          >
            Common questions about our research lab solutions
          </motion.p>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto"
        >
          <Accordion type="single" collapsible className="w-full">
            {[
              {
                question: "How does Atoms Testflow ensure data security?",
                answer: "We implement enterprise-grade security measures including end-to-end encryption, secure data storage, and regular security audits. All our processes comply with international research data protection standards."
              },
              {
                question: "Can Atoms Testflow integrate with our existing lab equipment?",
                answer: "Yes, our platform is designed to integrate seamlessly with a wide range of laboratory equipment and software systems. We support standard protocols and provide custom integration solutions when needed."
              },
              {
                question: "What kind of support do you provide?",
                answer: "We offer 24/7 technical support, dedicated account managers, and regular training sessions. Our support team includes PhD-level experts who understand your research needs."
              },
              {
                question: "How long does implementation typically take?",
                answer: "Implementation time varies based on your specific needs, but typically takes 2-4 weeks. We provide comprehensive onboarding and training to ensure a smooth transition."
              },
              {
                question: "Do you offer customization for specific research fields?",
                answer: "Yes, our platform is highly customizable to accommodate different research fields and methodologies. We work closely with your team to configure the system according to your specific requirements."
              }
            ].map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`}>
                <AccordionTrigger className="text-left">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent>
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </motion.div>
      </div>
    </section>

    {/* CTA Section */}
    <section className="relative overflow-hidden py-16 md:py-24">
      <div className="container mx-auto px-4 max-w-[1400px] w-full">
        {/* Main rounded container with glassy black background */}
        <div className="relative rounded-3xl overflow-hidden bg-black/60 backdrop-blur-xl border border-white/20">
          {/* Background effects */}
          <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 via-purple-500/10 to-blue-500/10" />
          <div className="absolute -inset-4 bg-gradient-to-r from-blue-500/20 via-purple-500/20 to-blue-500/20 rounded-3xl blur-2xl opacity-30" />
          
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
                Accelerate Your{' '}
                <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                  Research Innovation
                </span>
              </motion.h2>
              
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="text-lg text-gray-300 leading-relaxed max-w-lg"
              >
                Join leading research institutions who trust Atoms TestFlow to validate their cutting-edge hardware innovations.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
                className="flex flex-col sm:flex-row gap-4"
              >
                <Link 
                  href="/contact" 
                  onClick={() => handleCTAClick('Try Atoms TestFlow Now', 'Research Labs CTA')}
                  className="bg-gradient-to-r from-blue-500 to-purple-600 text-white hover:from-blue-600 hover:to-purple-700 rounded-full transition-all duration-300 hover:scale-105 hover:shadow-[0_0_25px_rgba(79,70,229,0.4)] flex items-center justify-center gap-2 h-12 px-8 text-lg font-semibold w-fit"
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
                  <span>Academic Pricing</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-gray-400">
                  <Check className="w-4 h-4 text-green-400" />
                  <span>Research Support</span>
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
              {/* Image with layered effects like about page */}
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 via-purple-500/10 to-blue-500/10 rounded-[2rem] blur-2xl transform rotate-3" />
                <div className="absolute inset-0 bg-gradient-to-r from-purple-500/10 via-blue-500/10 to-purple-500/10 rounded-[2rem] blur-2xl transform -rotate-3" />
                <div className="relative">
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-[1.75rem] transform translate-x-2 translate-y-2" />
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
                <div className="absolute -top-5 -right-5 bg-gradient-to-br from-blue-500 to-purple-500 rounded-full p-1 shadow-lg transform hover:scale-105 transition-transform">
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

