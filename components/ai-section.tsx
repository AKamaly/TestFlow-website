'use client'

import { motion } from 'framer-motion'
import { Sparkles, ArrowRight, MessageSquare, Zap, Brain, Cpu } from 'lucide-react'
import { Button } from '@/components/ui/button'
import Link from 'next/link'

export function AISection() {
  return (
    <>
      {/* Header Section */}
      <div className="text-center mb-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="inline-flex items-center gap-3 rounded-full px-6 py-2.5 text-sm font-medium bg-gradient-to-r from-blue-500/10 to-purple-500/10 border border-blue-500/20 backdrop-blur-sm mb-6"
        >
          <div className="w-8 h-8 rounded-full bg-gradient-to-r from-blue-400 to-purple-400 flex items-center justify-center">
            <Brain className="w-4 h-4 text-white" />
          </div>
          <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent font-semibold">
            AI-Powered Validation
          </span>
        </motion.div>
        
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-3xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight"
        >
          Validate Chips Using{' '}
          <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
            Human Language
          </span>
        </motion.h2>
        
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="text-lg md:text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed"
        >
          Simply describe what you want to test in plain English, and our AI will automatically create and execute the validation workflow
        </motion.p>
      </div>

      {/* Main Content Grid */}
      <div className="grid lg:grid-cols-12 gap-12 items-center max-w-6xl mx-auto">
        {/* Left side - AI Video (Larger) */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="lg:col-span-6 relative"
        >
          {/* Multiple glow layers for depth */}
          <div className="absolute -inset-8 bg-gradient-to-r from-blue-500/20 via-purple-500/20 to-pink-500/20 rounded-3xl blur-3xl opacity-60" />
          <div className="absolute -inset-4 bg-gradient-to-r from-blue-500/30 via-purple-500/30 to-pink-500/30 rounded-2xl blur-2xl opacity-40" />
          
          {/* Video Container */}
          <div className="relative rounded-3xl overflow-hidden border border-white/20 shadow-2xl backdrop-blur-sm bg-white/[0.02]">
            <video
              autoPlay
              loop
              muted
              playsInline
              className="w-full h-[400px] md:h-[500px] object-cover object-center"
            >
              <source src="/Video/AI powred validation Vertical.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
            
            {/* Overlay gradient */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
            
            {/* Floating elements */}
            <div className="absolute top-6 right-6 bg-white/10 backdrop-blur-md rounded-full px-4 py-2 border border-white/20">
              <div className="flex items-center gap-2 text-sm text-white">
                <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
                AI Active
              </div>
            </div>
          </div>
        </motion.div>

        {/* Right side - Enhanced Features */}
        <div className="lg:col-span-6 space-y-8">
          {/* Feature Cards */}
          <div className="space-y-6">
            {[
              {
                title: "Natural Language Processing",
                description: "Express complex validation requirements in simple English, no programming knowledge needed. Our AI understands context and technical nuances.",
                color: "emerald",
                gradient: "from-emerald-400 to-teal-400",
                bgGradient: "from-emerald-500/10 to-teal-500/10",
                borderGradient: "from-emerald-500/30 to-teal-500/30"
              },
              {
                title: "Intelligent Automation",
                description: "AI automatically creates test sequences, configures instruments, and generates comprehensive reports. Watch your workflows come to life instantly.",
                color: "blue",
                gradient: "from-blue-400 to-purple-400",
                bgGradient: "from-blue-500/10 to-purple-500/10",
                borderGradient: "from-blue-500/30 to-purple-500/30"
              }
            ].map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, x: 40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2, duration: 0.6 }}
                className="group relative"
              >
                {/* Background glow */}
                <div className={`absolute -inset-2 bg-gradient-to-r ${feature.bgGradient} rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-all duration-500`} />
                
                {/* Card */}
                <div className="relative p-6 rounded-2xl bg-white/[0.03] border border-white/10 hover:border-white/20 transition-all duration-500 hover:transform hover:scale-[1.02] backdrop-blur-sm">
                  {/* Content */}
                  <div>
                    <h3 className={`text-xl font-bold mb-3 bg-gradient-to-r ${feature.gradient} bg-clip-text text-transparent`}>
                      {feature.title}
                    </h3>
                    <p className="text-gray-400 leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* CTA Button */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.6 }}
            className="pt-4"
          >
            <Button asChild size="lg" className="w-full md:w-auto">
              <Link
                href="/contact"
                className="group relative overflow-hidden bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 hover:from-blue-600 hover:via-purple-600 hover:to-pink-600 text-white rounded-2xl px-12 py-4 text-lg font-semibold transition-all duration-300 hover:scale-105 shadow-[0_0_30px_rgba(59,130,246,0.5)] hover:shadow-[0_0_40px_rgba(59,130,246,0.7)] flex items-center justify-center gap-3"
              >
                <span className="relative z-10">Try Atoms TestFlow Now</span>
                <motion.div
                  animate={{
                    x: [0, 6, 0]
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                  className="relative z-10"
                >
                  <ArrowRight className="w-5 h-5" />
                </motion.div>
                
                {/* Button glow effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-blue-400/20 via-purple-400/20 to-pink-400/20 blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </Link>
            </Button>
          </motion.div>
        </div>
      </div>
    </>
  )
}

