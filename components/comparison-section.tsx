'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { Check, X, Zap, Users, Puzzle } from 'lucide-react'
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

const comparisonData = {
  automation: {
    icon: Zap,
    title: "Automation",
    description: "Compare how Atoms Testflow automates your validation process",
    atoms: [
      "No-Code platform for easy setup",
      "Automate testing in minutes",
      "24/7 automated operation",
      "Pre-built validation templates"
    ],
    traditional: [
      "Complex coding required",
      "Days or weeks to set up tests",
      "Manual operation needed",
      "Start from scratch every time"
    ]
  },
  collaboration: {
    icon: Users,
    title: "Collaboration",
    description: "See how we enable seamless team collaboration",
    atoms: [
      "Team collaboration dashboard",
      "Build automation using Human Language",
      "Real-time progress tracking",
      "Automated report generation"
    ],
    traditional: [
      "Siloed testing processes",
      "Complex technical setup",
      "Manual progress updates",
      "Manual report creation"
    ]
  },
  integration: {
    icon: Puzzle,
    title: "Integration",
    description: "Discover our extensive integration capabilities",
    atoms: [
      "Supports Universal instruments",
      "Email reporting integration",
      "Google Sheets integration",
      "30+ app integrations"
    ],
    traditional: [
      "Limited instrument support",
      "Manual result sharing",
      "Basic data export",
      "Limited integration options"
    ]
  }
}

export function ComparisonSection() {
  return (
    <section className="relative py-20 md:py-32 border-t border-white/10">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Animated gradient orbs */}
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full mix-blend-overlay animate-blob" />
        <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full mix-blend-overlay animate-blob animation-delay-2000" />
        <div className="absolute bottom-1/4 left-1/3 w-96 h-96 bg-pink-500/10 rounded-full mix-blend-overlay animate-blob animation-delay-4000" />

        {/* Grid pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:64px_64px]" />

        {/* Radial gradient overlay */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_800px_at_50%_50%,rgba(0,0,0,0),rgba(0,0,0,0.8))]" />
      </div>
      <div className="container px-4 relative z-10">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-block rounded-full px-4 py-1.5 text-sm font-medium bg-white/5 border border-white/10 backdrop-blur-sm mb-4"
          >
            Why choose us
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl md:text-4xl font-bold mb-6"
          >
            Why choose Atoms Testflow?
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-gray-400 text-lg max-w-2xl mx-auto"
          >
            A comprehensive validation platform that transforms how you test and launch hardware
          </motion.p>
        </div>

        <div className="max-w-4xl mx-auto">
          <Tabs defaultValue="automation" className="w-full">
            <TabsList className="grid w-full grid-cols-3 bg-white/5 rounded-full p-1 mb-8">
              {Object.entries(comparisonData).map(([key, { title }]) => (
                <TabsTrigger
                  key={key}
                  value={key}
                  className="rounded-full data-[state=active]:bg-white data-[state=active]:text-black transition-all duration-300"
                >
                  {title}
                </TabsTrigger>
              ))}
            </TabsList>

            <AnimatePresence mode="wait">
              {Object.entries(comparisonData).map(([key, data]) => (
                <TabsContent key={key} value={key}>
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="flex items-center justify-center gap-4 mb-8">
                      <data.icon className="w-6 h-6 text-blue-400" />
                      <h3 className="text-xl font-medium text-gray-200">{data.description}</h3>
                    </div>

                    <div className="grid md:grid-cols-2 gap-8">
                      <div className="relative">
                        <div className="absolute inset-0 bg-gradient-to-b from-blue-500/10 via-transparent to-transparent rounded-2xl blur-xl opacity-25" />
                        <div className="relative space-y-6 p-6 bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10">
                          <h3 className="text-2xl font-bold text-white flex items-center gap-2">
                            <div className="w-2 h-2 rounded-full bg-blue-400" />
                            Atoms Testflow
                          </h3>
                          <div className="space-y-4">
                            {data.atoms.map((feature, index) => (
                              <motion.div
                                key={feature}
                                initial={{ opacity: 0, x: -20 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: index * 0.1 }}
                                className="flex items-center gap-3 text-green-400"
                              >
                                <div className="flex-shrink-0 w-6 h-6 rounded-full bg-green-500/20 flex items-center justify-center">
                                  <Check className="w-4 h-4" />
                                </div>
                                <span className="text-white">{feature}</span>
                              </motion.div>
                            ))}
                          </div>
                        </div>
                      </div>

                      <div className="relative">
                        <div className="absolute inset-0 bg-gradient-to-b from-red-500/10 via-transparent to-transparent rounded-2xl blur-xl opacity-25" />
                        <div className="relative space-y-6 p-6 bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10">
                          <h3 className="text-2xl font-bold text-white flex items-center gap-2">
                            <div className="w-2 h-2 rounded-full bg-red-400" />
                            Traditional Methods
                          </h3>
                          <div className="space-y-4">
                            {data.traditional.map((limitation, index) => (
                              <motion.div
                                key={limitation}
                                initial={{ opacity: 0, x: 20 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: index * 0.1 }}
                                className="flex items-center gap-3 text-red-400"
                              >
                                <div className="flex-shrink-0 w-6 h-6 rounded-full bg-red-500/20 flex items-center justify-center">
                                  <X className="w-4 h-4" />
                                </div>
                                <span className="text-white">{limitation}</span>
                              </motion.div>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                </TabsContent>
              ))}
            </AnimatePresence>
          </Tabs>
        </div>
      </div>
    </section>
  )
}

