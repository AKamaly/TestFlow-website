'use client'

import { motion } from 'framer-motion'
import { Bot, Terminal, Sparkles, ArrowRight } from 'lucide-react'
import { Button } from '@/components/ui/button'
import Link from 'next/link'

const commandExamples = [
  {
    command: "Test power supply voltage stability",
    translation: "Running comprehensive voltage stability analysis across multiple load conditions",
    duration: "2 minutes"
  },
  {
    command: "Verify signal integrity at high frequencies",
    translation: "Executing signal integrity tests from 1MHz to 500MHz with detailed waveform analysis",
    duration: "5 minutes"
  },
  {
    command: "Check temperature response under load",
    translation: "Monitoring thermal behavior while running stress tests at various power levels",
    duration: "3 minutes"
  }
]

export function AISection() {
  return (
    <section className="relative py-20 md:py-32 border-t border-white/10 overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]" />
        <div className="absolute top-0 left-0 w-1/2 h-1/2 bg-gradient-to-br from-blue-500/10 via-transparent to-transparent" />
        <div className="absolute bottom-0 right-0 w-1/2 h-1/2 bg-gradient-to-tl from-purple-500/10 via-transparent to-transparent" />
      </div>

      <div className="container px-4 relative">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-sm font-medium bg-white/5 border border-white/10 backdrop-blur-sm mb-4"
            >
              <Sparkles className="w-4 h-4 text-blue-400" />
              AI-Powered Validation
            </motion.div>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-3xl md:text-4xl font-bold mb-6"
            >
              Validate Hardware Using Human Language
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-gray-400 text-lg max-w-2xl mx-auto"
            >
              Simply describe what you want to test in plain English, and our AI will automatically create and execute the validation workflow
            </motion.p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 via-purple-500/10 to-transparent rounded-2xl blur-2xl" />
              <div className="relative bg-black/40 backdrop-blur-sm border border-white/10 rounded-2xl p-8">
                <div className="flex items-center gap-4 mb-8">
                  <div className="p-3 rounded-xl bg-blue-500/20 border border-blue-500/30">
                    <Bot className="w-6 h-6 text-blue-400" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-xl">AI Assistant</h3>
                    <p className="text-gray-400">Converts natural language to validation workflows</p>
                  </div>
                </div>

                <div className="space-y-6">
                  {commandExamples.map((example, index) => (
                    <motion.div
                      key={example.command}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.2 }}
                      className="space-y-4"
                    >
                      <div className="flex items-start gap-3">
                        <Terminal className="w-5 h-5 mt-1 text-gray-400" />
                        <div className="flex-1 space-y-2">
                          <p className="text-white font-mono">{example.command}</p>
                          <div className="bg-white/5 rounded-lg p-3 border border-white/10">
                            <p className="text-sm text-gray-400">{example.translation}</p>
                            <p className="text-xs text-blue-400 mt-2">Estimated time: {example.duration}</p>
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>

            <div className="lg:pl-8">
              <div className="space-y-6">
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  className="flex items-start gap-4"
                >
                  <div className="w-8 h-8 rounded-full bg-green-500/20 flex items-center justify-center flex-shrink-0">
                    <Sparkles className="w-4 h-4 text-green-400" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Natural Language Processing</h3>
                    <p className="text-gray-400">
                      Our AI understands complex validation requirements expressed in simple English, eliminating the need for specialized programming knowledge.
                    </p>
                  </div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.1 }}
                  className="flex items-start gap-4"
                >
                  <div className="w-8 h-8 rounded-full bg-blue-500/20 flex items-center justify-center flex-shrink-0">
                    <Bot className="w-4 h-4 text-blue-400" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Intelligent Automation</h3>
                    <p className="text-gray-400">
                      The AI automatically creates optimal test sequences, configures instruments, and generates comprehensive reports.
                    </p>
                  </div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 }}
                  className="flex items-start gap-4"
                >
                  <div className="w-8 h-8 rounded-full bg-purple-500/20 flex items-center justify-center flex-shrink-0">
                    <Terminal className="w-4 h-4 text-purple-400" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Continuous Learning</h3>
                    <p className="text-gray-400">
                      Our AI learns from each validation process, continuously improving its ability to handle complex scenarios and edge cases.
                    </p>
                  </div>
                </motion.div>

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
                      className="flex items-center gap-2 bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 text-white rounded-full px-6 py-2.5 transition-all duration-300 hover:scale-105 shadow-[0_0_20px_rgba(59,130,246,0.5)] hover:shadow-[0_0_25px_rgba(59,130,246,0.7)] w-full justify-center"
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

