'use client'

import { motion } from 'framer-motion'
import { Sparkles, ArrowRight } from 'lucide-react'
import { Button } from '@/components/ui/button'
import Link from 'next/link'

export function AISection() {
  return (
    <section className="relative py-20 md:py-28 border-t border-white/10 overflow-hidden">
      {/* Simplified background elements */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]" />
        <div className="absolute top-0 left-0 w-1/2 h-1/2 bg-gradient-to-br from-blue-500/10 via-transparent to-transparent" />
      </div>

      <div className="container px-4 relative">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-sm font-medium bg-gradient-to-r from-blue-500/10 to-purple-500/10 border border-blue-500/20 backdrop-blur-sm mb-4"
            >
              <Sparkles className="w-4 h-4 text-blue-400" />
              <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                AI-Powered Validation
              </span>
            </motion.div>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-3xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-white via-white to-white/80 bg-clip-text text-transparent"
            >
              Validate Hardware Using Human Language
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-lg text-gray-400 max-w-2xl mx-auto"
            >
              Simply describe what you want to test in plain English, and our AI will automatically create and execute the validation workflow
            </motion.p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left side - Vertical AI Video */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="relative flex justify-center"
            >
              {/* Background glow effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 via-purple-500/10 to-blue-500/10 rounded-2xl blur-2xl" />
              
              {/* AI Video - Vertical format */}
              <div className="relative rounded-2xl overflow-hidden border border-white/10 shadow-xl max-w-lg">
                <video
                  autoPlay
                  loop
                  muted
                  playsInline
                  className="w-full h-[600px] object-cover object-center"
                >
<<<<<<< HEAD
                  <source src="/Video/AI powred validation Vertical.mp4" type="video/mp4" />
=======
                  <source src="/static/media/AI powred validation Vertical.mp4" type="video/mp4" />
>>>>>>> 77c207a692b3163b84a5af0a1281b675fe8d729d
                  Your browser does not support the video tag.
                </video>
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"></div>
              </div>
            </motion.div>

            {/* Right side - Simplified Features */}
            <div className="lg:pl-8">
              <div className="space-y-8">
                {/* Simplified Features */}
                {[
                  {
                    icon: <Sparkles className="w-6 h-6 text-green-400" />,
                    title: "Natural Language Processing",
                    description: "Express complex validation requirements in simple English, no programming knowledge needed.",
                    color: "green"
                  },
                  {
                    icon: <Sparkles className="w-6 h-6 text-blue-400" />,
                    title: "Intelligent Automation",
                    description: "AI automatically creates test sequences, configures instruments, and generates reports.",
                    color: "blue"
                  }
                ].map((feature, index) => (
                  <motion.div
                    key={feature.title}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="relative group"
                  >
                    <div className={`absolute inset-0 bg-gradient-to-r from-${feature.color}-500/10 to-transparent rounded-xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
                    <div className="relative flex items-start gap-5 p-6 rounded-xl bg-white/[0.02] border border-white/10 hover:border-white/20 transition-all duration-300">
                      <div className={`w-12 h-12 rounded-lg bg-${feature.color}-500/20 flex items-center justify-center flex-shrink-0 border border-${feature.color}-500/30`}>
                        {feature.icon}
                      </div>
                      <div>
                        <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                        <p className="text-gray-400">
                          {feature.description}
                        </p>
                      </div>
                    </div>
                  </motion.div>
                ))}

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 }}
                  className="pt-6"
                >
                  <Button asChild>
                    <Link
                      href="/contact"
                      className="flex items-center gap-2 bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 text-white rounded-full px-8 py-3 transition-all duration-300 hover:scale-105 shadow-[0_0_20px_rgba(59,130,246,0.5)] hover:shadow-[0_0_25px_rgba(59,130,246,0.7)] w-full justify-center"
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
                        <ArrowRight className="w-4 h-4" />
                      </motion.div>
                    </Link>
                  </Button>
                </motion.div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

