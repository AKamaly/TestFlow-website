'use client'

import { motion } from 'framer-motion'
import { Zap, Clock, ArrowRight, Check, AlertTriangle, BrainCircuit, Cable, Users } from 'lucide-react'
import Link from 'next/link'

export function TimeComparisonSection() {
  return (
    <div className="relative">
      {/* Section Header */}
      <div className="text-center mb-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="inline-block rounded-full px-4 py-1.5 text-sm font-medium bg-gradient-to-r from-blue-500/10 to-purple-500/10 border border-blue-500/20 backdrop-blur-sm mb-4"
        >
          <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
            Hardware Validation
          </span>
        </motion.div>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-3xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-white via-white to-white/80 bg-clip-text text-transparent"
        >
          Validate hardware in days. Not months.
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="text-xl text-gray-400 max-w-2xl mx-auto"
        >
          Stop wasting weeks on manual validation processes and reduce your time-to-market by up to 85%.
        </motion.p>
      </div>

      {/* Timeline Comparison - Simplified to 2 columns */}
      <div className="max-w-5xl mx-auto">
        <div className="relative rounded-2xl overflow-hidden border border-white/10 bg-black/40 backdrop-blur-sm p-8">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-500/5 via-purple-500/5 to-blue-500/5 rounded-xl blur-xl" />
          
          {/* Comparison Content - 2 columns */}
          <div className="relative grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Left Column - Our Solution */}
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="bg-gradient-to-br from-blue-500/20 to-purple-500/10 rounded-xl p-6 border border-blue-500/20 h-full"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="p-2.5 rounded-lg bg-blue-500/20 border border-blue-500/30">
                  <Zap className="w-6 h-6 text-blue-400" />
                </div>
                <h3 className="text-2xl font-semibold">Atoms TestFlow</h3>
              </div>
              
              <div className="mb-8">
                <div className="flex justify-between items-center mb-3">
                  <span className="text-lg font-medium">Validation Time</span>
                  <div className="flex items-center gap-2 text-green-400">
                    <Check className="w-4 h-4" />
                    <span>Predictable Timeline</span>
                  </div>
                </div>
                
                {/* Timeline Bar with Animation */}
                <div className="relative h-14 bg-blue-500/10 rounded-xl overflow-hidden mb-2">
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: "20%" }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, delay: 0.3 }}
                    className="absolute inset-y-0 left-0 bg-gradient-to-r from-blue-500/40 to-purple-500/40"
                  />
                  <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.8 }}
                    className="absolute inset-0 flex items-center justify-between px-4"
                  >
                    <span className="text-sm font-medium">0 weeks</span>
                    <motion.div
                      initial={{ scale: 0.8, opacity: 0 }}
                      whileInView={{ scale: 1, opacity: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: 1, type: "spring" }}
                      className="bg-blue-500/20 px-3 py-1 rounded-full"
                    >
                      <span className="text-lg font-bold text-blue-300">2-3 weeks</span>
                    </motion.div>
                  </motion.div>
                </div>
                
                <p className="text-center text-sm text-gray-400">
                  Total time to validate, test, and publish your hardware
                </p>
              </div>
              
              {/* Features */}
              <div className="space-y-4">
                <motion.div 
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.4 }}
                  className="flex items-center gap-3 p-3 bg-white/5 rounded-lg border border-white/10"
                >
                  <div className="p-1.5 rounded-lg bg-blue-500/20 border border-blue-500/30">
                    <BrainCircuit className="w-4 h-4 text-blue-400" />
                  </div>
                  <span className="text-sm">AI-Powered Validation</span>
                </motion.div>
                
                <motion.div 
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.5 }}
                  className="flex items-center gap-3 p-3 bg-white/5 rounded-lg border border-white/10"
                >
                  <div className="p-1.5 rounded-lg bg-purple-500/20 border border-purple-500/30">
                    <Cable className="w-4 h-4 text-purple-400" />
                  </div>
                  <span className="text-sm">Universal Compatibility</span>
                </motion.div>
                
                <motion.div 
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.6 }}
                  className="flex items-center gap-3 p-3 bg-white/5 rounded-lg border border-white/10"
                >
                  <div className="p-1.5 rounded-lg bg-green-500/20 border border-green-500/30">
                    <Users className="w-4 h-4 text-green-400" />
                  </div>
                  <span className="text-sm">Team Collaboration</span>
                </motion.div>
              </div>
              
              {/* Metrics */}
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.7 }}
                className="mt-8 grid grid-cols-2 gap-4"
              >
                <div className="p-4 rounded-xl bg-gradient-to-b from-white/[0.03] to-white/[0.01] border border-white/10 group hover:border-green-500/20 transition-colors duration-300">
                  <div className="text-sm text-gray-400">Time Reduction</div>
                  <div className="text-2xl font-bold text-green-400 mt-1 group-hover:scale-110 transition-transform">85%</div>
                </div>
                <div className="p-4 rounded-xl bg-gradient-to-b from-white/[0.03] to-white/[0.01] border border-white/10 group hover:border-blue-500/20 transition-colors duration-300">
                  <div className="text-sm text-gray-400">Cost Savings</div>
                  <div className="text-2xl font-bold text-blue-400 mt-1 group-hover:scale-110 transition-transform">67%</div>
                </div>
              </motion.div>
            </motion.div>
            
            {/* Right Column - Traditional Process */}
            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="bg-white/5 rounded-xl p-6 border border-white/10 h-full"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="p-2.5 rounded-lg bg-gray-500/20 border border-gray-500/30">
                  <Clock className="w-6 h-6 text-gray-400" />
                </div>
                <h3 className="text-2xl font-semibold">Traditional Process</h3>
              </div>
              
              <div className="mb-8">
                <div className="flex justify-between items-center mb-3">
                  <span className="text-lg font-medium">Validation Time</span>
                  <div className="flex items-center gap-2 text-red-400">
                    <AlertTriangle className="w-4 h-4" />
                    <span>High Risk of Delays</span>
                  </div>
                </div>
                
                {/* Timeline Bar with Animation */}
                <div className="relative h-14 bg-gray-500/10 rounded-xl overflow-hidden mb-2">
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: "100%" }}
                    viewport={{ once: true }}
                    transition={{ duration: 1.5, delay: 0.5 }}
                    className="absolute inset-y-0 left-0 bg-gradient-to-r from-gray-500/30 to-gray-500/20"
                  />
                  <motion.div 
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    animate={{ backgroundPosition: ["0px 0px", "1rem 1rem"] }}
                    transition={{ 
                      delay: 1,
                      backgroundPosition: {
                        repeat: Infinity,
                        duration: 1,
                        ease: "linear"
                      }
                    }}
                    className="absolute inset-0 bg-[linear-gradient(45deg,rgba(255,255,255,0.03)_25%,transparent_25%,transparent_50%,rgba(255,255,255,0.03)_50%,rgba(255,255,255,0.03)_75%,transparent_75%,transparent)] bg-[length:1rem_1rem]"
                  />
                  <div className="absolute inset-0 flex items-center justify-between px-4">
                    <span className="text-sm font-medium">0 weeks</span>
                    <motion.div
                      initial={{ scale: 0.8, opacity: 0 }}
                      whileInView={{ scale: 1, opacity: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: 1.2, type: "spring" }}
                      className="bg-gray-500/20 px-3 py-1 rounded-full"
                    >
                      <span className="text-lg font-bold text-gray-300">12-16 weeks</span>
                    </motion.div>
                  </div>
                </div>
                
                <p className="text-center text-sm text-gray-400">
                  Months of manual work with traditional validation tools
                </p>
              </div>
              
              {/* Challenges */}
              <div className="space-y-4">
                <motion.div 
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.6 }}
                  className="flex items-start gap-3 p-3 bg-white/5 rounded-lg border border-white/10"
                >
                  <div className="p-1.5 mt-0.5 rounded-lg bg-red-500/10 border border-red-500/20">
                    <AlertTriangle className="w-4 h-4 text-red-400" />
                  </div>
                  <div>
                    <span className="text-sm font-medium">Manual Testing</span>
                    <p className="text-xs text-gray-500 mt-1">Requires extensive human intervention and oversight</p>
                  </div>
                </motion.div>
                
                <motion.div 
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.7 }}
                  className="flex items-start gap-3 p-3 bg-white/5 rounded-lg border border-white/10"
                >
                  <div className="p-1.5 mt-0.5 rounded-lg bg-red-500/10 border border-red-500/20">
                    <AlertTriangle className="w-4 h-4 text-red-400" />
                  </div>
                  <div>
                    <span className="text-sm font-medium">Limited Compatibility</span>
                    <p className="text-xs text-gray-500 mt-1">Different tools for different hardware components</p>
                  </div>
                </motion.div>
                
                <motion.div 
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.8 }}
                  className="flex items-start gap-3 p-3 bg-white/5 rounded-lg border border-white/10"
                >
                  <div className="p-1.5 mt-0.5 rounded-lg bg-red-500/10 border border-red-500/20">
                    <AlertTriangle className="w-4 h-4 text-red-400" />
                  </div>
                  <div>
                    <span className="text-sm font-medium">High Costs</span>
                    <p className="text-xs text-gray-500 mt-1">Expensive licensing and specialized personnel</p>
                  </div>
                </motion.div>
              </div>
              
              {/* Impact */}
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.9 }}
                className="mt-8 p-4 rounded-xl bg-gradient-to-b from-white/[0.03] to-white/[0.01] border border-red-500/10"
              >
                <div className="text-sm text-gray-400">Time to Market Impact</div>
                <div className="text-xl font-bold text-red-400 mt-1">Significant Delays</div>
                <p className="text-xs text-gray-500 mt-1">Missed market opportunities and competitive disadvantage</p>
              </motion.div>
            </motion.div>
          </div>
          
          {/* CTA Button */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 1 }}
            className="mt-12 text-center"
          >
            <Link 
              href="/contact" 
              className="inline-flex items-center gap-2 px-8 py-3 bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white rounded-full transition-all duration-300 hover:scale-105 shadow-[0_0_20px_rgba(59,130,246,0.3)] hover:shadow-[0_0_25px_rgba(59,130,246,0.5)]"
            >
              <span className="text-base font-medium">Accelerate your validation</span>
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
        </div>
      </div>
    </div>
  )
} 