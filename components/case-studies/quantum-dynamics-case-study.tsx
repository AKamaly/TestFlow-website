'use client'

import Link from "next/link"
import Image from "next/image"
import { SiteHeader } from "@/components/site-header"
import { ArrowRight, DollarSign, ChevronLeft, BarChart3, Zap, Search, Shield, Award, Layers, Cpu } from 'lucide-react'
import { motion } from 'framer-motion'

export function QuantumDynamicsCaseStudy() {
  // Case study data
  const caseStudy = {
    title: "Quantum Dynamics Cuts Validation Costs by 72%",
    clientName: "Quantum Dynamics",
    industry: "Semiconductor",
    projectDuration: "8 months",
    location: "Boston, MA",
    projectYear: "2023",
    heroImage: "https://9zog2la6l29pbfba.public.blob.vercel-storage.com/semiconductor-tD7RQBDjnTWJwNvRjExBZiNMPMkrDK.jpg",
    clientLogo: "/logos/quantum-dynamics.svg",
    summary: "Quantum Dynamics develops next-generation quantum processors for high-performance computing applications. Their revolutionary design required completely reimagining their validation strategy to address exponentially more complex test scenarios while meeting aggressive time-to-market goals.",
    keyResults: [
      { icon: <DollarSign className="w-5 h-5" />, value: "72%", label: "Cost reduction" },
      { icon: <BarChart3 className="w-5 h-5" />, value: "4x", label: "Increase in test coverage" },
      { icon: <Search className="w-5 h-5" />, value: "99.9%", label: "Detection rate for defects" },
      { icon: <Shield className="w-5 h-5" />, value: "100%", label: "Quality assurance maintained" },
    ],
    aboutClient: "Quantum Dynamics is a pioneering quantum computing hardware company with 320 employees and annual revenue of $180 million. The company specializes in developing superconducting quantum processors that operate at near absolute zero temperatures. Their processors are used in advanced research, cryptography, machine learning, and complex simulation applications where traditional computing reaches its limits. Quantum Dynamics' latest generation of processors aims to achieve quantum advantage in specific applications with a 200-qubit design.",
    challenge: "Quantum processors present unique validation challenges due to their quantum nature and extreme operating conditions. Quantum Dynamics was developing their new 200-qubit processor which represented a significant leap in design complexity from their previous 50-qubit system.\n\nThe validation process for their previous processor had already stretched their capabilities, requiring extensive manual test creation and monitoring. For the new 200-qubit system, the number of potential states and interactions increased exponentially, making traditional validation approaches completely unfeasible.\n\n\"With our 200-qubit design, we were looking at a validation matrix that was literally billions of times more complex than our previous generation,\" explained Dr. Marcus Reid, CTO of Quantum Dynamics. \"Our existing validation approach would have taken years and tens of millions of dollars—completely unacceptable for our market timeline.\"\n\nAdditionally, the company faced practical constraints in simulation capabilities, as classical computers struggle to simulate large quantum systems. This meant they needed smarter test strategies that could provide comprehensive validation without exhaustive state testing.",
    solution: "After a thorough evaluation of available options, Quantum Dynamics selected Atoms TestFlow to completely revamp their validation approach. The implementation focused on:\n\n1. **Quantum-Specific Test Generation**: TestFlow was configured to understand quantum computing principles and generate intelligent test scenarios that focused on critical quantum properties rather than trying to test all possible states.\n\n2. **Statistical Validation Approach**: Instead of attempting exhaustive testing, TestFlow implemented a statistical validation methodology that used mathematical models to predict system behavior with high confidence.\n\n3. **Hardware-in-Loop Testing**: TestFlow created a hybrid system that combined simulation with actual hardware testing, allowing validation of components individually before integration.\n\n4. **Automated Error Diagnosis**: The system included sophisticated error detection and diagnosis capabilities, automatically identifying the root causes of failures in the quantum circuitry.\n\n5. **Cryogenic Environment Modeling**: TestFlow incorporated models of the cryogenic operating environment, allowing it to predict how temperature fluctuations and other environmental factors would affect performance.",
    implementation: "The implementation was conducted in stages over an 8-month period:\n\n**Phase 1 (Months 1-2):** System architecture and integration with quantum development tools\n**Phase 2 (Months 3-4):** Development of quantum-specific test libraries and validation methodology\n**Phase 3 (Months 5-6):** Initial rollout with parallel operation alongside existing methods\n**Phase 4 (Months 7-8):** Full transition to TestFlow and optimization of validation processes",
    results: "The TestFlow implementation delivered transformative results for Quantum Dynamics:\n\n- **Cost Efficiency**: Validation costs were reduced by 72%, from a projected $12.8 million to $3.6 million for the 200-qubit processor development cycle.\n\n- **Test Coverage**: Despite the massive reduction in cost, test coverage increased by a factor of 4, with statistical models providing confidence in areas that couldn't be tested explicitly.\n\n- **Time Savings**: The validation timeline was reduced from an estimated 22 months to just 7 months—a 68% reduction.\n\n- **Error Detection**: The system achieved a 99.9% detection rate for quantum state preparation errors, decoherence issues, and gate fidelity problems—all critical metrics for quantum processor performance.\n\n- **Quality Maintenance**: Despite the dramatic efficiencies gained, the final processor met or exceeded all quality specifications, with no compromise in performance or reliability.\n\n- **Resource Optimization**: The validation team size was reduced from 28 to 12 specialized engineers, allowing the company to allocate resources to innovation and next-generation designs.",
    quote: {
      text: "TestFlow didn't just improve our validation process—it completely transformed our approach to quantum processor development. We're now able to validate designs of unprecedented complexity while actually reducing costs and time to market.",
      author: "Dr. Marcus Reid",
      role: "CTO, Quantum Dynamics"
    },
    keyFeatures: [
      {
        title: "Quantum-Specific Test Generation",
        description: "Specialized test scenarios designed specifically for quantum computing architectures.",
        icon: <Cpu />
      },
      {
        title: "Statistical Validation Models",
        description: "Mathematical approaches to achieve high confidence without exhaustive testing.",
        icon: <BarChart3 />
      },
      {
        title: "Environmental Simulation",
        description: "Accurate modeling of cryogenic operating conditions and their effects on quantum states.",
        icon: <Layers />
      }
    ],
    conclusion: "Quantum Dynamics' implementation of Atoms TestFlow illustrates how intelligent validation strategies can overcome seemingly insurmountable challenges in cutting-edge technologies like quantum computing.\n\nBy replacing brute-force testing approaches with AI-driven, statistically validated methodologies, the company was able to achieve what would have been impossible with conventional methods. The 72% cost reduction and 68% timeline compression directly translated into competitive advantage, enabling Quantum Dynamics to bring their revolutionary 200-qubit processor to market ahead of schedule and under budget.\n\nBased on the success of this implementation, Quantum Dynamics has made TestFlow the cornerstone of their development process for all future quantum processors, including their in-development 500-qubit system. The company estimates that the accelerated time to market provided by TestFlow will generate an additional $45-60 million in revenue over the next three years."
  }

  return (
    <div className="min-h-screen bg-black text-white">
      <SiteHeader />

      {/* Hero Section */}
      <section className="relative pt-24 pb-16 overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]" />
          <div className="absolute top-0 -left-1/4 w-1/2 h-1/2 bg-gradient-to-br from-blue-500/10 via-transparent to-transparent rounded-full blur-3xl" />
          <div className="absolute bottom-0 -right-1/4 w-1/2 h-1/2 bg-gradient-to-tl from-purple-500/10 via-transparent to-transparent rounded-full blur-3xl" />
        </div>

        <div className="container mx-auto px-4 relative max-w-[1000px] w-full">
          <div className="space-y-8">
            {/* Back to case studies */}
            <Link 
              href="/case-studies" 
              className="inline-flex items-center gap-2 text-gray-400 hover:text-blue-400 transition-colors"
            >
              <ChevronLeft className="w-4 h-4" />
              <span>Back to all case studies</span>
            </Link>

            {/* Client & Industry Badge */}
            <div className="flex flex-wrap gap-3">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="inline-block rounded-full px-4 py-1.5 text-sm font-medium bg-blue-500/10 border border-blue-500/20 backdrop-blur-sm"
              >
                <span className="text-blue-400">
                  {caseStudy.industry}
                </span>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="inline-block rounded-full px-4 py-1.5 text-sm font-medium bg-green-500/10 border border-green-500/20 backdrop-blur-sm"
              >
                <span className="text-green-400">
                  {caseStudy.clientName}
                </span>
              </motion.div>
            </div>

            {/* Title */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-3xl md:text-5xl font-bold bg-gradient-to-r from-blue-400 via-white to-green-400 bg-clip-text text-transparent leading-[1.2] tracking-tight"
            >
              {caseStudy.title}
            </motion.h1>

            {/* Summary */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="text-lg text-gray-300 max-w-3xl"
            >
              {caseStudy.summary}
            </motion.p>

            {/* Project Meta */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="flex flex-wrap gap-6 text-sm text-gray-400"
            >
              <div>
                <span className="font-medium">Project Duration:</span> {caseStudy.projectDuration}
              </div>
              <div>
                <span className="font-medium">Location:</span> {caseStudy.location}
              </div>
              <div>
                <span className="font-medium">Year:</span> {caseStudy.projectYear}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Hero Image */}
      <section className="py-12">
        <div className="container mx-auto px-4 max-w-[1200px]">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7 }}
            className="relative aspect-[16/9] rounded-2xl overflow-hidden"
          >
            <Image
              src={caseStudy.heroImage}
              alt={caseStudy.title}
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent" />
          </motion.div>
        </div>
      </section>

      {/* Key Results */}
      <section className="py-12">
        <div className="container mx-auto px-4 max-w-[1000px]">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {caseStudy.keyResults.map((result, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white/[0.03] border border-white/10 rounded-xl p-6 text-center hover:border-green-500/20 transition-colors"
              >
                <div className="text-green-400 mb-3 flex justify-center">
                  {result.icon}
                </div>
                <div className="text-3xl font-bold text-white mb-1">{result.value}</div>
                <div className="text-sm text-gray-400">{result.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-12">
        <div className="container mx-auto px-4 max-w-[1000px]">
          <div className="grid md:grid-cols-3 gap-12">
            {/* Sidebar */}
            <div className="md:col-span-1 space-y-8">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="bg-white/[0.02] border border-white/10 rounded-xl p-6 space-y-4"
              >
                <h3 className="text-xl font-semibold">About {caseStudy.clientName}</h3>
                <p className="text-gray-400 text-sm">{caseStudy.aboutClient}</p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="bg-white/[0.02] border border-white/10 rounded-xl p-6 space-y-4"
              >
                <h3 className="text-xl font-semibold">Key Features Used</h3>
                <div className="space-y-4">
                  {caseStudy.keyFeatures.map((feature, index) => (
                    <div key={index} className="flex gap-3">
                      <div className="flex-shrink-0 w-8 h-8 rounded-full bg-green-500/10 flex items-center justify-center text-green-400">
                        {feature.icon}
                      </div>
                      <div>
                        <h4 className="font-medium text-white">{feature.title}</h4>
                        <p className="text-gray-400 text-sm">{feature.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>
            </div>

            {/* Main Content */}
            <div className="md:col-span-2 space-y-12">
              {/* Challenge */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="space-y-4"
              >
                <h2 className="text-2xl font-bold">The Challenge</h2>
                <div className="text-gray-300 space-y-4">
                  {caseStudy.challenge.split('\n\n').map((paragraph, i) => (
                    <p key={i}>{paragraph}</p>
                  ))}
                </div>
              </motion.div>

              {/* Solution */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="space-y-4"
              >
                <h2 className="text-2xl font-bold">The Solution</h2>
                <div className="text-gray-300 space-y-4">
                  {caseStudy.solution.split('\n\n').map((paragraph, i) => (
                    <p key={i}>{paragraph}</p>
                  ))}
                </div>
              </motion.div>

              {/* Implementation */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="space-y-4"
              >
                <h2 className="text-2xl font-bold">Implementation Process</h2>
                <div className="text-gray-300 space-y-4">
                  {caseStudy.implementation.split('\n\n').map((paragraph, i) => (
                    <p key={i}>{paragraph}</p>
                  ))}
                </div>
              </motion.div>

              {/* Results */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="space-y-4"
              >
                <h2 className="text-2xl font-bold">The Results</h2>
                <div className="text-gray-300 space-y-4">
                  {caseStudy.results.split('\n\n').map((paragraph, i) => (
                    <p key={i}>{paragraph}</p>
                  ))}
                </div>
              </motion.div>

              {/* Quote */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="relative bg-gradient-to-br from-blue-500/10 to-green-500/10 rounded-2xl p-8 border border-white/10"
              >
                <div className="absolute text-green-500/20 top-4 left-4 text-6xl">"</div>
                <div className="relative">
                  <p className="text-xl text-gray-200 italic mb-4">
                    {caseStudy.quote.text}
                  </p>
                  <div>
                    <div className="font-bold">{caseStudy.quote.author}</div>
                    <div className="text-sm text-gray-400">{caseStudy.quote.role}</div>
                  </div>
                </div>
              </motion.div>

              {/* Conclusion */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="space-y-4"
              >
                <h2 className="text-2xl font-bold">Conclusion</h2>
                <div className="text-gray-300 space-y-4">
                  {caseStudy.conclusion.split('\n\n').map((paragraph, i) => (
                    <p key={i}>{paragraph}</p>
                  ))}
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24">
        <div className="container mx-auto px-4 max-w-[800px]">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-gradient-to-br from-blue-500/10 via-green-500/10 to-blue-500/5 rounded-2xl border border-white/10 p-8 text-center"
          >
            <h2 className="text-2xl md:text-3xl font-bold mb-4">
              Ready to transform your validation approach?
            </h2>
            <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
              Join Quantum Dynamics and other industry leaders who are using Atoms TestFlow to validate their cutting-edge products with unprecedented efficiency.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                href="/contact" 
                className="px-6 py-3 bg-gradient-to-r from-blue-500 to-green-600 rounded-full text-white hover:from-blue-600 hover:to-green-700 transition-all duration-300 hover:scale-105 flex items-center justify-center gap-2"
              >
                Request a Demo
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link 
                href="/case-studies" 
                className="px-6 py-3 border border-white/20 rounded-full hover:bg-white/5 transition-all duration-200"
              >
                View More Case Studies
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-white/10 py-8">
        <div className="container mx-auto px-4 text-center text-sm text-gray-500">
          © {new Date().getFullYear()} Atoms TestFlow. All rights reserved.
        </div>
      </footer>
    </div>
  )
} 