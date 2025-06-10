'use client'

import { useState } from 'react'
import { Button } from "@/components/ui/button"
import { SiteHeader } from "@/components/site-header"
import { motion } from 'framer-motion'
import { Check, Send, ArrowRight, Sparkles, Code, Brain, Target, Globe, Rocket, Users, Cpu, Shield, Zap, Workflow, Lightbulb, Trophy } from 'lucide-react'
import Link from "next/link"
import Image from "next/image"
import Spline from '@splinetool/react-spline'
import { db } from '@/firebase'
import { collection, addDoc, serverTimestamp } from 'firebase/firestore'
import { LogoCarousel } from "@/components/logo-carousel"
import { SectionTracker, trackButtonClick, trackFormSubmission, trackPageSpecificEvent } from '@/components/analytics-tracker'

// Career positions data
const positions = [
  {
    title: "Senior AI Engineer",
    department: "Engineering",
    location: "San Francisco, CA",
    type: "Full-time",
    description: "Join our core team to develop cutting-edge AI solutions for hardware validation automation.",
    icon: Brain,
    requirements: [
      "5+ years of experience in AI/ML development",
      "Strong background in Python and deep learning frameworks",
      "Experience with hardware validation is a plus",
      "Excellent problem-solving skills"
    ]
  },
  {
    title: "Hardware Validation Engineer",
    department: "Engineering",
    location: "San Francisco, CA",
    type: "Full-time",
    description: "Work on implementing and optimizing automated validation processes for semiconductor and electronics clients.",
    icon: Code,
    requirements: [
      "3+ years of hardware validation experience",
      "Strong understanding of semiconductor testing",
      "Programming experience in Python/C++",
      "Experience with automation frameworks"
    ]
  },
  {
    title: "Product Manager",
    department: "Product",
    location: "San Francisco, CA",
    type: "Full-time",
    description: "Drive the product vision and roadmap for our AI-powered validation platform.",
    icon: Target,
    requirements: [
      "4+ years of product management experience",
      "Strong technical background",
      "Experience in semiconductor or hardware industry",
      "Excellent communication skills"
    ]
  },
  {
    title: "Technical Sales Engineer",
    department: "Sales",
    location: "San Francisco, CA",
    type: "Full-time",
    description: "Help semiconductor and electronics companies understand and implement our validation solutions.",
    icon: Sparkles,
    requirements: [
      "3+ years of technical sales experience",
      "Strong understanding of hardware validation",
      "Excellent presentation skills",
      "Track record of closing enterprise deals"
    ]
  }
]

const values = [
  {
    icon: Rocket,
    title: "Move Fast",
    description: "We believe in rapid iteration and quick decision-making to stay ahead."
  },
  {
    icon: Brain,
    title: "Think Big",
    description: "We're not here for incremental improvements. We're here to revolutionize."
  },
  {
    icon: Users,
    title: "Team First",
    description: "We succeed together and celebrate our collective achievements."
  }
]

export default function CareersPage() {
  const [activePosition, setActivePosition] = useState<string | null>(null)
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    position: '',
    resume: null as File | null,
    message: ''
  })
  const [showSuccess, setShowSuccess] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    try {
      // Create the application data object
      const applicationData = {
        name: formData.name,
        email: formData.email,
        position: formData.position,
        message: formData.message,
        appliedAt: serverTimestamp(),
        status: 'new'
      }

      // Create a new document in the "applications" collection
      await addDoc(collection(db, 'applications'), applicationData)
      
      setShowSuccess(true)
      trackFormSubmission('job_application', true, { 
        position: formData.position,
        page: 'careers'
      })
      
      setFormData({
        name: '',
        email: '',
        position: '',
        resume: null,
        message: ''
      })

      setTimeout(() => setShowSuccess(false), 5000)
      
    } catch (error) {
      console.error('Error submitting application:', error)
      trackFormSubmission('job_application', false, { 
        position: formData.position,
        page: 'careers',
        error: 'submission_failed'
      })
      alert('An error occurred while submitting your application. Please try again.')
    } finally {
      setIsSubmitting(false)
    }
  }

  const handlePositionClick = (position: any) => {
    setActivePosition(activePosition === position.title ? null : position.title)
    trackPageSpecificEvent('position_details_view', {
      position_title: position.title,
      department: position.department
    })
  }

  const handleApplyClick = (position: any) => {
    setFormData(prev => ({ ...prev, position: position.title }))
    trackPageSpecificEvent('apply_button_click', {
      position_title: position.title,
      department: position.department
    })
    document.getElementById('application-form')?.scrollIntoView({ behavior: 'smooth' })
  }

  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setShowSuccess(true)
    trackFormSubmission('newsletter', true, { page: 'careers' })
    // Reset form
    const form = e.target as HTMLFormElement
    form.reset()
  }

  return (
    <div className="min-h-screen bg-black text-white">
      <SiteHeader />

      {/* Section Trackers */}
      <SectionTracker sectionId="hero" sectionName="Careers Hero" />
      <SectionTracker sectionId="mission" sectionName="Our Mission" />
      <SectionTracker sectionId="who-should-join" sectionName="Who Should Join Us" />
      <SectionTracker sectionId="positions" sectionName="Open Positions" />
      <SectionTracker sectionId="application-form" sectionName="Application Form" />
      <SectionTracker sectionId="cta" sectionName="Careers CTA" />

      {/* Hero Section */}
      <section id="hero" className="relative pt-20 pb-0 md:pt-24 md:pb-0 overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]" />
          <div className="absolute top-0 -left-1/4 w-1/2 h-1/2 bg-gradient-to-br from-blue-500/10 via-transparent to-transparent rounded-full blur-3xl" />
          <div className="absolute bottom-0 -right-1/4 w-1/2 h-1/2 bg-gradient-to-tl from-purple-500/10 via-transparent to-transparent rounded-full blur-3xl" />
        </div>

        <div className="container mx-auto px-4 relative max-w-[1400px] w-full">
          <div className="max-w-4xl mx-auto text-center">
            {/* Badge */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-3xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-400 via-white to-purple-400 bg-clip-text text-transparent leading-[1.2] tracking-tight"
            >
              We're Building the Next Paradigm of Chip Validation
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-base md:text-lg text-gray-400 max-w-xl mx-auto mb-8"
            >
              With the Top 0.1% of Talent. The future of validation is AI-first, and the incumbents aren't going to build it – we are.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="flex flex-col sm:flex-row gap-4 justify-center mb-16"
            >
              <Button asChild size="default" className="h-11 px-6 text-base">
                <Link 
                  href="#positions" 
                  onClick={() => trackButtonClick('View Open Positions', 'Hero Section', { page: 'careers' })}
                  className="bg-gradient-to-r from-blue-500 to-purple-600 text-white hover:from-blue-600 hover:to-purple-700 rounded-full transition-all duration-300 hover:scale-105 hover:shadow-[0_0_25px_rgba(79,70,229,0.4)] flex items-center gap-2"
                >
                  View Open Positions
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
                </Link>
              </Button>
            </motion.div>

            {/* Spline Animation */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="relative mx-auto mt-20 -mb-60 h-[600px]"
            >
              <Spline
                className="w-full h-full"
                scene="https://prod.spline.design/kVkWdORGATIhpirz/scene.splinecode"
              />
              <div className="absolute bottom-0 right-0 w-[120px] h-[40px] bg-black z-10"></div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Logo Carousel Section */}
      <section className="py-12 bg-gradient-to-b from-black to-gray-900/30 border-b border-white/5">
        <div className="container mx-auto px-4 max-w-[1400px] w-full">
          <LogoCarousel />
        </div>
      </section>

      {/* Our Mission Section */}
      <section id="mission" className="py-16 bg-gradient-to-b from-black to-gray-900/30">
        <div className="container mx-auto px-4 max-w-6xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-2xl md:text-4xl font-bold mb-4">Our Mission</h2>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-10 items-center mb-20">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-4"
            >
              <h3 className="text-2xl md:text-3xl font-bold leading-tight bg-gradient-to-r from-blue-400 via-white to-purple-400 bg-clip-text text-transparent">
                We're Creating an Ecosystem Where Humans & AI Work Together in Harmony
              </h3>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative aspect-[4/3] rounded-2xl overflow-hidden"
            >
              <Image
                src="https://9zog2la6l29pbfba.public.blob.vercel-storage.com/Tool%20Photo%20with%20humans-pTsgaiPajUSGimzCDl4ibwBqC3kqok.png"
                alt="Our Mission"
                fill
                className="object-cover"
              />
            </motion.div>
          </div>

          <div className="grid lg:grid-cols-2 gap-10 items-start">
            <div className="space-y-6">
              <h4 className="text-xl font-semibold">Career Mission</h4>
              <p className="text-gray-400 text-base">At TestFlow, we're anchored by 2 missions:</p>
              <ul className="space-y-4 text-base text-gray-400">
                <li className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-blue-400 flex-shrink-0 mt-1" />
                  <span>Creating the most advanced AI-powered validation platform for hardware testing.</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-blue-400 flex-shrink-0 mt-1" />
                  <span>Revolutionizing the semiconductor industry by reducing validation time from months to days.</span>
                </li>
              </ul>
              <p className="text-gray-400 text-base">
                These missions drive us toward our vision of making hardware validation faster, more efficient, and more reliable through AI automation.
              </p>
            </div>
            <div className="space-y-6">
              <h4 className="text-xl font-semibold">We Care Deeply About the Quality of Our Work</h4>
              <p className="text-gray-400 text-base">
                We expect everyone on our team to relentlessly pursue excellence in hardware validation. We're not here to make incremental improvements - we're here to transform the industry.
              </p>
              <ul className="space-y-4 text-base text-gray-400">
                <li className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-green-400 flex-shrink-0 mt-1" />
                  <span>Our validation platform should be more powerful and intuitive than any existing solution.</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-green-400 flex-shrink-0 mt-1" />
                  <span>Our AI models should consistently outperform traditional validation methods.</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-green-400 flex-shrink-0 mt-1" />
                  <span>We should deliver exceptional value and support to every semiconductor company we work with.</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Who Should Join Us Section */}
      <section id="who-should-join" className="py-16 bg-gradient-to-b from-black to-gray-900/30">
        <div className="container mx-auto px-4 max-w-6xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-2xl md:text-4xl font-bold mb-4">Who Should Join Us</h2>
            <h3 className="text-xl md:text-2xl font-bold mb-4 bg-gradient-to-r from-blue-400 via-white to-purple-400 bg-clip-text text-transparent">
              If You're Passionate About AI and Hardware, Join Our Mission
            </h3>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                icon: Cpu,
                text: "You're passionate about using AI to solve complex hardware validation challenges.",
                color: "blue"
              },
              {
                icon: Shield,
                text: "You care deeply about code quality and building robust, scalable solutions.",
                color: "purple"
              },
              {
                icon: Zap,
                text: "You're driven to optimize and automate complex validation processes.",
                color: "green"
              },
              {
                icon: Users,
                text: "You work well in teams, but also have an \"I will figure it out\" attitude independently.",
                color: "orange"
              },
              {
                icon: Lightbulb,
                text: "You're excited about transforming the semiconductor industry through innovation.",
                color: "yellow"
              },
              {
                icon: Trophy,
                text: "You're ambitious and love pushing the boundaries of what's possible in validation.",
                color: "red"
              }
            ].map((quality, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="p-6 rounded-xl bg-gradient-to-br from-blue-500/5 to-purple-500/5 border border-white/10 hover:border-blue-500/30 transition-all duration-300 group"
              >
                <div className="flex items-start gap-4">
                  <div className={`p-2.5 rounded-lg bg-${quality.color}-500/10 border border-${quality.color}-500/20 group-hover:border-${quality.color}-500/40 transition-colors`}>
                    <quality.icon className={`w-5 h-5 text-${quality.color}-400`} />
                  </div>
                  <p className="text-gray-400 text-base flex-1">{quality.text}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Open Positions Section */}
      <section id="positions" className="py-16">
        <div className="container mx-auto px-4 max-w-6xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-2xl md:text-4xl font-bold mb-4">Open Positions</h2>
            <p className="text-lg text-gray-400 max-w-2xl mx-auto">
              Join us in building the future of hardware validation
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-6">
            {positions.map((position) => (
              <motion.div
                key={position.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className={`p-6 rounded-xl bg-gradient-to-br from-blue-500/5 to-purple-500/5 border border-white/10 cursor-pointer transition-all duration-300 hover:border-blue-500/30 group ${activePosition === position.title ? 'border-blue-500/50' : ''}`}
                onClick={() => handlePositionClick(position)}
              >
                <div className="flex items-start gap-4">
                  <div className="p-2.5 rounded-lg bg-blue-500/10 border border-blue-500/20 group-hover:border-blue-500/40 transition-colors">
                    <position.icon className="w-5 h-5 text-blue-400" />
                  </div>
                  <div className="flex-1">
                    <div className="flex flex-wrap justify-between items-start gap-4 mb-3">
                      <div>
                        <h3 className="text-xl font-semibold mb-1">{position.title}</h3>
                        <div className="flex flex-wrap gap-3 text-sm">
                          <span className="text-gray-400">{position.department}</span>
                          <span className="text-gray-400">•</span>
                          <span className="text-gray-400">{position.location}</span>
                          <span className="text-gray-400">•</span>
                          <span className="text-blue-400">{position.type}</span>
                        </div>
                      </div>
                      <Button
                        onClick={(e) => {
                          e.stopPropagation()
                          handleApplyClick(position)
                        }}
                        className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white rounded-full px-4 py-1.5 text-sm"
                      >
                        Apply Now
                      </Button>
                    </div>
                    <p className="text-gray-400 text-sm mb-3">{position.description}</p>
                    
                    {activePosition === position.title && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        className="mt-4 pt-4 border-t border-white/10"
                      >
                        <h4 className="text-sm font-semibold mb-3">Requirements</h4>
                        <ul className="space-y-2">
                          {position.requirements.map((req, index) => (
                            <li key={index} className="flex items-center gap-2 text-gray-400 text-sm">
                              <Check className="w-4 h-4 text-green-400 flex-shrink-0" />
                              {req}
                            </li>
                          ))}
                        </ul>
                      </motion.div>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Application Form Section */}
      <section id="application-form" className="py-16 bg-gradient-to-b from-transparent to-white/[0.02]">
        <div className="container mx-auto px-4 max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="p-6 rounded-xl bg-gradient-to-br from-blue-500/5 to-purple-500/5 border border-white/10"
          >
            <h3 className="text-xl font-semibold mb-6 text-center">Apply Now</h3>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-400 mb-1">Name</label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData(prev => ({ ...prev, name: e.target.value }))}
                    className="w-full px-3 py-2 bg-white/5 border border-white/10 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-300"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-400 mb-1">Email</label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData(prev => ({ ...prev, email: e.target.value }))}
                    className="w-full px-3 py-2 bg-white/5 border border-white/10 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-300"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-400 mb-1">Position</label>
                <input
                  type="text"
                  required
                  value={formData.position}
                  onChange={(e) => setFormData(prev => ({ ...prev, position: e.target.value }))}
                  className="w-full px-3 py-2 bg-white/5 border border-white/10 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-300"
                  placeholder="Select a position above"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-400 mb-1">Resume</label>
                <input
                  type="file"
                  required
                  accept=".pdf,.doc,.docx"
                  onChange={(e) => setFormData(prev => ({ ...prev, resume: e.target.files?.[0] || null }))}
                  className="w-full px-3 py-2 bg-white/5 border border-white/10 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-300"
                />
                <p className="mt-1 text-xs text-gray-400">Accepted formats: PDF, DOC, DOCX</p>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-400 mb-1">Cover Letter / Additional Information</label>
                <textarea
                  value={formData.message}
                  onChange={(e) => setFormData(prev => ({ ...prev, message: e.target.value }))}
                  rows={3}
                  className="w-full px-3 py-2 bg-white/5 border border-white/10 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-300"
                />
              </div>

              <Button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white rounded-lg py-2.5 transition-all duration-300 hover:scale-[1.02] flex items-center justify-center gap-2 text-base font-medium"
              >
                {isSubmitting ? (
                  <>
                    Submitting...
                    <div className="animate-spin rounded-full h-4 w-4 border-2 border-white border-t-transparent" />
                  </>
                ) : (
                  <>
                    Submit Application
                    <Send className="w-4 h-4" />
                  </>
                )}
              </Button>

              {showSuccess && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="mt-4 p-3 bg-green-500/10 border border-green-500/30 rounded-lg flex items-center gap-2 text-green-400 text-sm"
                >
                  <Check className="w-4 h-4" />
                  <span>Application submitted successfully! We'll be in touch soon.</span>
                </motion.div>
              )}
            </form>
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
                  Ready to{' '}
                  <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                    Join Our Team?
                  </span>
                </motion.h2>
                
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 }}
                  className="text-lg text-gray-300 leading-relaxed max-w-lg"
                >
                  Be part of the team that's revolutionizing hardware validation. Apply now and help shape the future of technology.
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
                    className="bg-gradient-to-r from-blue-500 to-purple-600 text-white hover:from-blue-600 hover:to-purple-700 rounded-full transition-all duration-300 hover:scale-105 hover:shadow-[0_0_25px_rgba(79,70,229,0.4)] flex items-center justify-center gap-2 h-12 px-8 text-lg font-semibold w-fit"
                  >
                    Apply Now
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
                    <span>Remote-First Culture</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-gray-400">
                    <Check className="w-4 h-4 text-green-400" />
                    <span>Competitive Benefits</span>
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
                        src="/images/TestFlow CTA Image .png"
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
                TestFlow
              </Link>
              <p className="text-gray-400 text-sm">
                The AI validation platform that accelerates your product launch.
              </p>
              <div className="flex gap-4">
                {[
                  { name: 'LinkedIn', icon: 'linkedin', href: 'https://www.linkedin.com/company/atomstestflow/' },
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
                  © {new Date().getFullYear()} TestFlow. All rights reserved.
                </p>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
} 