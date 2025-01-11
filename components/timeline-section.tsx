'use client'

import { motion } from 'framer-motion'
import { Clock, CheckCircle, XCircle } from 'lucide-react'

const timelineData = {
  traditional: [
    {
      title: "Manual Setup",
      description: "Engineers spend days writing test scripts and configuring instruments",
      duration: "3-5 days",
      icon: Clock
    },
    {
      title: "Individual Testing",
      description: "Each test must be manually initiated and monitored",
      duration: "1-2 weeks",
      icon: Clock
    },
    {
      title: "Data Collection",
      description: "Manual collection and organization of test results",
      duration: "2-3 days",
      icon: Clock
    },
    {
      title: "Report Generation",
      description: "Engineers compile and format test reports",
      duration: "2-3 days",
      icon: Clock
    }
  ],
  atoms: [
    {
      title: "AI Setup",
      description: "Describe your validation needs in plain English",
      duration: "5 minutes",
      icon: CheckCircle
    },
    {
      title: "Automated Testing",
      description: "AI automatically executes all required tests",
      duration: "2 hours",
      icon: CheckCircle
    },
    {
      title: "Real-time Monitoring",
      description: "Automatic data collection and analysis",
      duration: "Instant",
      icon: CheckCircle
    },
    {
      title: "Instant Reports",
      description: "AI generates comprehensive reports automatically",
      duration: "2 minutes",
      icon: CheckCircle
    }
  ]
}

export function TimelineSection() {
  return (
    <section className="relative py-20 md:py-32 border-t border-white/10">
      <div className="container px-4">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">
            Traditional vs Atoms Validation
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            See how Atoms Testflow transforms weeks of manual work into minutes of automated validation
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Traditional Process */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative group"
          >
            <div className="absolute inset-0 bg-gradient-to-b from-red-500/10 via-transparent to-transparent rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <div className="relative space-y-6 p-6 bg-white/5 rounded-2xl border border-white/10 transition-colors duration-300 hover:bg-white/[0.07]">
              <div className="flex items-center gap-3 mb-8">
                <XCircle className="w-6 h-6 text-red-400" />
                <h3 className="text-2xl font-bold">Traditional Process</h3>
              </div>
              
              <div className="space-y-8">
                {timelineData.traditional.map((step, index) => (
                  <motion.div
                    key={step.title}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="relative pl-8 group/item"
                  >
                    <div className="absolute left-0 top-1 w-2 h-2 rounded-full bg-red-400" />
                    {index !== timelineData.traditional.length - 1 && (
                      <div className="absolute left-1 top-4 w-px h-16 bg-gradient-to-b from-red-400/50 to-transparent" />
                    )}
                    <div className="space-y-2 transition-transform duration-300 group-hover/item:translate-x-2">
                      <div className="flex items-center justify-between">
                        <h4 className="font-semibold text-lg">{step.title}</h4>
                        <span className="text-sm text-red-400">{step.duration}</span>
                      </div>
                      <p className="text-gray-400">{step.description}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Atoms Process */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative group"
          >
            <div className="absolute inset-0 bg-gradient-to-b from-blue-500/10 via-transparent to-transparent rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <div className="relative space-y-6 p-6 bg-white/5 rounded-2xl border border-white/10 transition-colors duration-300 hover:bg-white/[0.07]">
              <div className="flex items-center gap-3 mb-8">
                <CheckCircle className="w-6 h-6 text-blue-400" />
                <h3 className="text-2xl font-bold">Atoms Process</h3>
              </div>
              
              <div className="space-y-8">
                {timelineData.atoms.map((step, index) => (
                  <motion.div
                    key={step.title}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="relative pl-8 group/item"
                  >
                    <div className="absolute left-0 top-1 w-2 h-2 rounded-full bg-blue-400" />
                    {index !== timelineData.atoms.length - 1 && (
                      <div className="absolute left-1 top-4 w-px h-16 bg-gradient-to-b from-blue-400/50 to-transparent" />
                    )}
                    <div className="space-y-2 transition-transform duration-300 group-hover/item:translate-x-2">
                      <div className="flex items-center justify-between">
                        <h4 className="font-semibold text-lg">{step.title}</h4>
                        <span className="text-sm text-blue-400">{step.duration}</span>
                      </div>
                      <p className="text-gray-400">{step.description}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

