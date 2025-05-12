'use client'

import Link from "next/link"
import Image from "next/image"
import { SiteHeader } from "@/components/site-header"
import { ArrowRight, CheckCircle, Clock, ChevronLeft, BarChart3, Zap, Cpu, Shield, Award } from 'lucide-react'
import { motion } from 'framer-motion'

export function HorizonSemiconductorsCaseStudy() {
  // Case study data
  const caseStudy = {
    title: "How Horizon Semiconductors Slashed Validation Time by 85%",
    clientName: "Horizon Semiconductors",
    industry: "Semiconductor",
    projectDuration: "6 months",
    location: "Silicon Valley, CA",
    projectYear: "2023",
    heroImage: "https://9zog2la6l29pbfba.public.blob.vercel-storage.com/Tool%20Photo%20with%20humans-pTsgaiPajUSGimzCDl4ibwBqC3kqok.png",
    clientLogo: "/logos/horizon-semiconductors.svg",
    summary: "Horizon Semiconductors was developing their next-generation 5nm AI accelerator chips but faced critical bottlenecks in their validation pipeline that threatened their market advantage. The company implemented Atoms TestFlow to transform their validation process and achieved unprecedented efficiency, slashing validation time by 85%.",
    keyResults: [
      { icon: <Clock className="w-5 h-5" />, value: "85%", label: "Reduction in validation time" },
      { icon: <BarChart3 className="w-5 h-5" />, value: "64%", label: "Cost savings" },
      { icon: <Zap className="w-5 h-5" />, value: "3.5x", label: "Faster time to market" },
      { icon: <Shield className="w-5 h-5" />, value: "98%", label: "Test coverage" },
    ],
    aboutClient: "Horizon Semiconductors is a leading fabless semiconductor company specializing in high-performance AI accelerator chips for edge computing, data centers, and automotive applications. With over 500 employees and $245 million in revenue, the company is known for pioneering advanced chip designs that enable efficient AI processing at scale. Their latest 5nm chip series aims to deliver a 4x performance boost while reducing power consumption by 40%.",
    challenge: "As Horizon Semiconductors prepared to launch their groundbreaking 5nm AI accelerator chip, they faced a major challenge: their validation process had become a critical bottleneck. With over 35,000 test cases needed to validate the chip's complex AI accelerator cores, memory subsystems, and hardware security features, validation was projected to take 8-10 months using their existing methods.\n\nThis timeline would have severely impacted their competitive position, potentially allowing competitors to reach the market first. Additionally, the company was spending almost 40% of their development budget on validation alone, with a team of 45 engineers dedicated to the task.\n\n\"Our validation process had become our biggest obstacle to innovation,\" said Sarah Chen, VP of Engineering at Horizon Semiconductors. \"We simply couldn't wait 8-10 months to validate each new chip design if we wanted to maintain our market leadership.\"",
    solution: "After evaluating multiple options, Horizon Semiconductors implemented Atoms TestFlow across their entire validation pipeline. The implementation involved:\n\n1. **AI-Driven Test Generation**: TestFlow automatically generated comprehensive test scenarios based on chip specifications, creating 22,500 optimized test cases in just days.\n\n2. **Parallel Testing Infrastructure**: Tests were distributed across Horizon's computing infrastructure, allowing thousands of tests to run simultaneously.\n\n3. **Real-Time Analysis**: As tests ran, TestFlow's AI engine analyzed results in real-time, identifying potential issues and automatically adjusting test priorities.\n\n4. **Continuous Learning**: The system learned from each validation cycle, continuously improving test efficiency and coverage.\n\n5. **Integration with Design Tools**: TestFlow integrated seamlessly with Horizon's existing EDA tools, creating a unified workflow from design to validation.",
    implementation: "The implementation was completed in phases over 6 months:\n\n**Phase 1 (Weeks 1-4):** Initial setup and integration with existing systems\n**Phase 2 (Weeks 5-12):** Training of the AI models on Horizon's historical validation data\n**Phase 3 (Weeks 13-20):** Rollout to validation teams and parallel operation with existing methods\n**Phase 4 (Weeks 21-24):** Fine-tuning and complete transition to TestFlow-driven validation",
    results: "The results exceeded Horizon Semiconductors' expectations:\n\n- **Validation Time**: The validation process that was projected to take 8-10 months was completed in just 6 weeks—an 85% reduction.\n\n- **Cost Efficiency**: Validation costs were reduced by 64%, saving approximately $3.7 million on this chip design alone.\n\n- **Time to Market**: The accelerated validation process enabled Horizon to bring their new AI accelerator chip to market 3.5x faster than their previous generation.\n\n- **Engineering Resources**: The validation team was reduced from 45 to 18 engineers, allowing the company to reallocate talent to innovation rather than testing.\n\n- **Test Coverage**: Despite the dramatic time reduction, test coverage increased from 83% to 98%, improving overall product quality.\n\n- **First-Pass Silicon Success**: The improved validation process resulted in first-pass silicon success—a significant achievement for a chip of this complexity.",
    quote: {
      text: "TestFlow transformed our approach to validation. What used to be our biggest bottleneck is now a competitive advantage. We're validating more thoroughly in less time, which allows us to innovate faster than our competitors.",
      author: "Sarah Chen",
      role: "VP of Engineering, Horizon Semiconductors"
    },
    keyFeatures: [
      {
        title: "AI-Powered Test Generation",
        description: "TestFlow's AI algorithms generated optimized test cases based on chip specifications, covering more scenarios in less time.",
        icon: <Cpu />
      },
      {
        title: "Parallel Testing Infrastructure",
        description: "Thousands of tests ran simultaneously across Horizon's computing infrastructure, dramatically reducing validation time.",
        icon: <Zap />
      },
      {
        title: "Adaptive Learning",
        description: "The system continuously learned from each validation cycle, becoming more efficient with each iteration.",
        icon: <Award />
      }
    ],
    conclusion: "Horizon Semiconductors' implementation of Atoms TestFlow demonstrates how cutting-edge AI-powered validation can transform the semiconductor development process. By slashing validation time by 85% while improving test coverage, Horizon was able to accelerate their time to market and strengthen their competitive position.\n\nThe company estimates that their enhanced time-to-market advantage helped them capture an additional 7% market share in the AI accelerator segment, translating to approximately $28 million in additional revenue in the first year alone.\n\nHorizon now plans to expand their use of TestFlow across all their chip development projects, creating a standardized validation methodology that will continue to drive their competitive advantage in the fast-paced semiconductor industry."
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
                className="inline-block rounded-full px-4 py-1.5 text-sm font-medium bg-purple-500/10 border border-purple-500/20 backdrop-blur-sm"
              >
                <span className="text-purple-400">
                  {caseStudy.clientName}
                </span>
              </motion.div>
            </div>

            {/* Title */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-3xl md:text-5xl font-bold bg-gradient-to-r from-blue-400 via-white to-purple-400 bg-clip-text text-transparent leading-[1.2] tracking-tight"
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
                className="bg-white/[0.03] border border-white/10 rounded-xl p-6 text-center hover:border-blue-500/20 transition-colors"
              >
                <div className="text-blue-400 mb-3 flex justify-center">
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
                      <div className="flex-shrink-0 w-8 h-8 rounded-full bg-blue-500/10 flex items-center justify-center text-blue-400">
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
                className="relative bg-gradient-to-br from-blue-500/10 to-purple-500/10 rounded-2xl p-8 border border-white/10"
              >
                <div className="absolute text-blue-500/20 top-4 left-4 text-6xl">"</div>
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
            className="bg-gradient-to-br from-blue-500/10 via-purple-500/10 to-blue-500/5 rounded-2xl border border-white/10 p-8 text-center"
          >
            <h2 className="text-2xl md:text-3xl font-bold mb-4">
              Ready to transform your validation process?
            </h2>
            <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
              Join Horizon Semiconductors and other industry leaders who are using Atoms TestFlow to validate their products faster and more efficiently.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                href="/contact" 
                className="px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full text-white hover:from-blue-600 hover:to-purple-700 transition-all duration-300 hover:scale-105 flex items-center justify-center gap-2"
              >
                Start Your Transformation
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