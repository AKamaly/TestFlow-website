'use client'

import { useState } from 'react'
import { Button } from "@/components/ui/button"
import { SiteHeader } from "@/components/site-header"
import { motion } from 'framer-motion'
import { Check, Send, ArrowRight, Sparkles, Code, Brain, Target } from 'lucide-react'
import Link from "next/link"
import Image from "next/image"
import { db } from '@/firebase'
import { collection, addDoc, serverTimestamp } from 'firebase/firestore'

// Career positions data
const positions = [
  {
    title: "Senior AI Engineer",
    department: "Engineering",
    type: "Full-time",
    description: "Join our core team to develop cutting-edge AI solutions for hardware validation automation.",
    icon: Brain
  },
  {
    title: "Hardware Validation Engineer",
    department: "Engineering",
    type: "Full-time",
    description: "Work on implementing and optimizing automated validation processes for semiconductor and electronics clients.",
    icon: Code
  },
  {
    title: "Product Manager",
    department: "Product",
    type: "Full-time",
    description: "Drive the product vision and roadmap for our AI-powered validation platform.",
    icon: Target
  },
  {
    title: "Technical Sales Engineer",
    department: "Sales",
    type: "Full-time",
    description: "Help semiconductor and electronics companies understand and implement our validation solutions.",
    icon: Sparkles
  }
]

export default function AboutPage() {
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
      // Validate form data
      if (!formData.name || !formData.email || !formData.position || !formData.message) {
        throw new Error('Please fill in all required fields')
      }

      // Validate email format
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
      if (!emailRegex.test(formData.email)) {
        throw new Error('Please enter a valid email address')
      }

      // Create the application data object
      const applicationData = {
        name: formData.name,
        email: formData.email,
        position: formData.position,
        message: formData.message,
        appliedAt: serverTimestamp(),
        status: 'new',
        formType: 'career_application'
      }

      console.log('Submitting application data:', applicationData)

      // Create a new document in the "career_applications" collection
      const docRef = await addDoc(collection(db, 'career_applications'), applicationData)

      console.log('Application submitted successfully with ID:', docRef.id)
      
      // Show success message and reset form
      setShowSuccess(true)
      setFormData({
        name: '',
        email: '',
        position: '',
        resume: null,
        message: ''
      })

      // Hide success message after 5 seconds
      setTimeout(() => setShowSuccess(false), 5000)
      
    } catch (error) {
      console.error('Error submitting application:', error)
      alert(error instanceof Error ? error.message : 'An error occurred while submitting your application. Please try again.')
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div className="min-h-screen bg-black text-white scale-90 origin-top">
      <SiteHeader />

      {/* Hero Section */}
      <section className="relative pt-20 pb-12 md:pt-24 md:pb-20 overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:20px_20px]" />
          <div className="absolute top-0 -left-1/4 w-1/2 h-1/2 bg-gradient-to-br from-blue-500/10 via-transparent to-transparent rounded-full blur-3xl" />
          <div className="absolute bottom-0 -right-1/4 w-1/2 h-1/2 bg-gradient-to-tl from-purple-500/10 via-transparent to-transparent rounded-full blur-3xl" />
        </div>

        <div className="container mx-auto px-4 relative max-w-6xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center max-w-4xl mx-auto"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-gradient-to-r from-blue-500/10 to-purple-500/10 border border-blue-500/20 backdrop-blur-sm mb-6">
              <Sparkles className="w-3.5 h-3.5 text-blue-400" />
              <span className="text-sm font-medium bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                Revolutionizing Hardware Validation
              </span>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-5 bg-gradient-to-r from-blue-400 via-purple-400 to-blue-400 bg-clip-text text-transparent leading-tight">
              About ATOMS
            </h1>
            <p className="text-lg md:text-xl text-gray-400 mb-10 leading-relaxed max-w-3xl mx-auto">
              We're on a mission to revolutionize hardware validation through AI-powered automation,
              making product launches faster and more efficient than ever before.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="py-20 relative">
        <div className="absolute inset-0">
          <div className="absolute right-0 w-1/2 h-full bg-gradient-to-l from-blue-500/5 via-purple-500/5 to-transparent" />
          <div className="absolute left-0 w-1/2 h-full bg-gradient-to-r from-blue-500/5 via-purple-500/5 to-transparent" />
        </div>
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-gradient-to-r from-purple-500/10 to-blue-500/10 border border-purple-500/20">
                <span className="text-sm font-medium text-purple-400">Our Journey</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold leading-tight">Our Story</h2>
              <div className="space-y-5">
                <p className="text-lg text-gray-400">
                  Founded in 2024, ATOMS emerged from a simple observation: hardware validation
                  was stuck in the past while software development had evolved rapidly. Our founders,
                  with decades of experience in semiconductor and AI, saw an opportunity to bring
                  revolutionary change to this critical industry.
                </p>
                <p className="text-lg text-gray-400">
                  Today, we're building the future of hardware validation. Our AI-powered platform
                  helps companies reduce validation time by up to 85%, enabling faster product launches
                  and more efficient resource utilization.
                </p>
                <div className="grid grid-cols-3 gap-4 pt-4">
                  {[
                    { number: "85%", label: "Faster Validation" },
                    { number: "24/7", label: "AI Operation" },
                    { number: "100+", label: "Happy Clients" }
                  ].map((stat) => (
                    <div key={stat.label} className="text-center p-3 rounded-xl bg-white/5 border border-white/10 hover:border-blue-500/30 transition-colors">
                      <div className="text-xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                        {stat.number}
                      </div>
                      <div className="text-xs text-gray-400 mt-1">{stat.label}</div>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 via-purple-500/10 to-blue-500/10 rounded-[2rem] blur-2xl transform rotate-3" />
              <div className="absolute inset-0 bg-gradient-to-r from-purple-500/10 via-blue-500/10 to-purple-500/10 rounded-[2rem] blur-2xl transform -rotate-3" />
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-[1.75rem] transform translate-x-2 translate-y-2" />
                <div className="relative aspect-[4/3] rounded-[1.75rem] overflow-hidden border-2 border-white/10 shadow-2xl transform hover:scale-[1.01] transition-transform duration-500">
                  <Image
                    src="https://9zog2la6l29pbfba.public.blob.vercel-storage.com/webinar%20pop%20up%20image%20-dGQP9mVfcVkoYZ5XA6cBdpB2ygBalm.png"
                    alt="ATOMS Team"
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-black/20 to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <div className="backdrop-blur-md bg-black/30 rounded-xl p-3 border border-white/10">
                      <div className="text-xs font-medium text-white/80">Featured</div>
                      <div className="text-lg font-semibold mt-0.5">Our AI-Powered Platform</div>
                      <div className="text-xs text-white/70 mt-0.5">Transforming hardware validation with cutting-edge technology</div>
                    </div>
                  </div>
                </div>
                <div className="absolute -top-5 -right-5 bg-gradient-to-br from-blue-500 to-purple-500 rounded-full p-1 shadow-lg transform hover:scale-105 transition-transform">
                  <div className="bg-black rounded-full p-2.5">
                    <Sparkles className="w-5 h-5 text-white" />
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-gradient-to-b from-white/[0.02] to-transparent">
        <div className="container mx-auto px-4 max-w-6xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-gradient-to-r from-blue-500/10 to-purple-500/10 border border-blue-500/20 mb-6">
              <span className="text-sm font-medium text-blue-400">What Drives Us</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Values</h2>
            <p className="text-lg text-gray-400 max-w-2xl mx-auto">
              The core principles that shape our culture and drive our mission forward
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 lg:grid-cols-4 gap-6">
            {[
              {
                title: "Innovation First",
                description: "We push the boundaries of what's possible in hardware validation through cutting-edge AI technology.",
                gradient: "from-blue-500/20 to-purple-500/20"
              },
              {
                title: "Move Fast",
                description: "We believe in rapid iteration and quick decision-making to stay ahead in the fast-paced tech landscape.",
                gradient: "from-purple-500/20 to-pink-500/20"
              },
              {
                title: "Customer Obsession",
                description: "Every decision we make starts with our customers. Their success is our north star.",
                gradient: "from-pink-500/20 to-orange-500/20"
              },
              {
                title: "Think Big",
                description: "We're not here to make incremental improvements. We're here to revolutionize hardware validation.",
                gradient: "from-orange-500/20 to-yellow-500/20"
              },
              {
                title: "Embrace Change",
                description: "We adapt quickly and view challenges as opportunities for growth and innovation.",
                gradient: "from-yellow-500/20 to-green-500/20"
              },
              {
                title: "Own It",
                description: "We take ownership of our work and are accountable for delivering exceptional results.",
                gradient: "from-green-500/20 to-teal-500/20"
              },
              {
                title: "Team First",
                description: "We succeed together, support each other, and celebrate our collective achievements.",
                gradient: "from-teal-500/20 to-cyan-500/20"
              },
              {
                title: "Stay Hungry",
                description: "We maintain our startup spirit, always learning and pushing for better solutions.",
                gradient: "from-cyan-500/20 to-blue-500/20"
              }
            ].map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className={`p-6 rounded-xl bg-gradient-to-br ${value.gradient} border border-white/10 hover:border-white/20 transition-all duration-300 hover:scale-[1.02] hover:shadow-lg`}
              >
                <h3 className="text-xl font-semibold mb-3">{value.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Careers Section */}
      <section id="careers" className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-purple-500/10 to-blue-500/10 border border-purple-500/20 mb-8">
              <span className="text-sm font-medium text-purple-400">Join Our Team</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Open Positions</h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              We're looking for passionate individuals to help us transform the future of hardware validation
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-8 mb-16">
            {positions.map((position) => (
              <motion.div
                key={position.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className={`p-8 rounded-2xl bg-gradient-to-br from-blue-500/5 to-purple-500/5 border border-white/10 cursor-pointer transition-all duration-300 hover:border-blue-500/30 hover:scale-105 group ${activePosition === position.title ? 'border-blue-500/50 scale-[1.02]' : ''}`}
                onClick={() => {
                  setActivePosition(position.title)
                  setFormData(prev => ({ ...prev, position: position.title }))
                }}
              >
                <div className="flex items-start gap-6">
                  <div className="p-3 rounded-xl bg-blue-500/10 border border-blue-500/20 group-hover:border-blue-500/40 transition-colors">
                    <position.icon className="w-6 h-6 text-blue-400" />
                  </div>
                  <div className="flex-1">
                    <div className="flex justify-between items-start mb-4">
                      <div>
                        <h3 className="text-2xl font-semibold mb-1">{position.title}</h3>
                        <p className="text-gray-400">{position.department}</p>
                      </div>
                      <span className="px-4 py-1.5 bg-blue-500/10 text-blue-400 rounded-full text-sm font-medium">
                        {position.type}
                      </span>
                    </div>
                    <p className="text-gray-400 text-lg leading-relaxed">{position.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Application Form */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto"
          >
            <div className="p-8 rounded-2xl bg-gradient-to-br from-blue-500/5 to-purple-500/5 border border-white/10">
              <h3 className="text-2xl font-semibold mb-8 text-center">Apply Now</h3>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-400 mb-2">Name</label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData(prev => ({ ...prev, name: e.target.value }))}
                      className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-300"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-400 mb-2">Email</label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData(prev => ({ ...prev, email: e.target.value }))}
                      className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-300"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-400 mb-2">Position</label>
                  <input
                    type="text"
                    required
                    value={formData.position}
                    onChange={(e) => setFormData(prev => ({ ...prev, position: e.target.value }))}
                    className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-300"
                    placeholder="Select a position above"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-400 mb-2">Resume</label>
                  <input
                    type="file"
                    required
                    accept=".pdf,.doc,.docx"
                    onChange={(e) => setFormData(prev => ({ ...prev, resume: e.target.files?.[0] || null }))}
                    className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-300"
                  />
                  <p className="mt-1 text-sm text-gray-400">Accepted formats: PDF, DOC, DOCX</p>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-400 mb-2">Cover Letter / Additional Information</label>
                  <textarea
                    value={formData.message}
                    onChange={(e) => setFormData(prev => ({ ...prev, message: e.target.value }))}
                    rows={4}
                    className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-300"
                  />
                </div>

                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white rounded-lg py-4 transition-all duration-300 hover:scale-105 flex items-center justify-center gap-2 text-lg font-medium disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? (
                    <>
                      Submitting...
                      <div className="animate-spin rounded-full h-5 w-5 border-2 border-white border-t-transparent" />
                    </>
                  ) : (
                    <>
                      Submit Application
                      <Send className="w-5 h-5" />
                    </>
                  )}
                </Button>
              </form>

              {/* Success Message */}
              {showSuccess && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="mt-6 p-4 bg-green-500/10 border border-green-500/30 rounded-lg flex items-center gap-2 text-green-400"
                >
                  <Check className="w-5 h-5" />
                  <span>Application submitted successfully! We'll be in touch soon.</span>
                </motion.div>
              )}
            </div>
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
                  Ready to transform{' '}
                  <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                    hardware validation?
                  </span>
                </motion.h2>
                
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 }}
                  className="text-lg text-gray-300 leading-relaxed max-w-lg"
                >
                  Join us in building the future of hardware validation. Whether you're looking to join our team or use our platform, we'd love to hear from you.
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
                    Contact Us
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
                  <Link
                    href="/docs"
                    className="border-2 border-blue-500/30 hover:border-blue-500/50 hover:bg-blue-500/5 rounded-full transition-all duration-300 flex items-center justify-center gap-2 h-12 px-8 text-lg font-medium w-fit"
                  >
                    View Documentation
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
                    <span>Join Our Team</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-gray-400">
                    <Check className="w-4 h-4 text-green-400" />
                    <span>Try Our Platform</span>
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
                Atoms Testflow
              </Link>
              <p className="text-gray-400 text-sm">
                The AI validation platform that accelerates your product launch.
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
                      {social.icon === 'linkedin' && <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect x="2" y="9" width="4" height="12"/><circle cx="4" cy="4" r="2"/></svg>}
                      {social.icon === 'youtube' && <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z"/><polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02"/></svg>}
                    </div>
                  </Link>
                ))}
              </div>
            </div>

            {/* Solutions Links */}
            <div className="space-y-4">
              <h3 className="font-semibold text-lg">Solutions</h3>
              <ul className="space-y-3">
                {[
                  { label: 'Startups', href: '/startups' },
                  { label: 'Midmarket', href: '/midmarket' },
                  { label: 'Enterprise', href: '/enterprise' }
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
                  { label: 'Solutions', href: '/#solutions' },
                  { label: 'TestFlow', href: '/#demo' },
                  { label: 'Features', href: '/#features' },
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
    </div>
  )
} 