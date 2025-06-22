'use client'

import { SiteHeader } from "@/components/site-header"
import { ArrowLeft, User, Calendar, Clock, CheckCircle2, ArrowRight, TrendingDown, TrendingUp, Activity, AlertTriangle, Target, TestTube, BarChart3, LineChart } from 'lucide-react'
import Link from 'next/link'
import Image from 'next/image'

export default function BlogPost() {
  return (
    <div className="min-h-screen bg-black text-white">
      <SiteHeader />
      
      <div className="container mx-auto px-4 relative max-w-[900px] w-full pb-20 pt-20 md:pt-24">
        {/* Back to blog */}
        <Link 
          href="/blog"
          className="inline-flex items-center gap-2 text-gray-400 hover:text-white mb-8 transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to blog
        </Link>

        {/* Article Header */}
        <div className="mb-8">
          <div className="text-purple-500 text-sm font-medium mb-4">
            Technology
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
            What's Defect Rate in Semiconductors? Understanding the Bathtub Curve
          </h1>
          
          {/* Article Meta */}
          <div className="flex items-center gap-6 text-gray-400">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-full bg-gradient-to-br from-blue-500 to-purple-500 flex items-center justify-center">
                <User className="w-4 h-4 text-white" />
              </div>
              <span>Ali Kamaly</span>
            </div>
            <div className="flex items-center gap-2">
              <Calendar className="w-4 h-4" />
              <span>Jun 30, 2025</span>
            </div>
            <div className="flex items-center gap-2">
              <Clock className="w-4 h-4" />
              <span>7 min read</span>
            </div>
          </div>
        </div>

        {/* Featured Image */}
        <div className="relative aspect-[16/9] mb-12 rounded-xl overflow-hidden">
          <Image
            src="https://9zog2la6l29pbfba.public.blob.vercel-storage.com/blog/Defect%20rate%20in%20semiconductors-QOmXM2WbQ8u170KF3gt8EQlzZPOK4I.jpeg"
            alt="Semiconductor Defect Rate Bathtub Curve Analysis"
            fill
            className="object-cover"
          />
        </div>

        {/* Article Content */}
        <article className="prose prose-invert max-w-none">
          <div className="bg-white/5 border border-white/10 rounded-xl p-6 mb-8">
            <p className="text-xl text-gray-300 mb-6">
              Defect rate in semiconductors is the probability that a chip will fail at any point in its lifecycle—and it's one of the most critical factors in yield, reliability, and validation strategy. The famous "bathtub curve" reveals why we validate chips before, during, and even after they ship.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="flex items-start gap-2">
                <CheckCircle2 className="w-5 h-5 text-green-500 mt-1" />
                <span>Defect rates follow the classic bathtub curve pattern</span>
              </div>
              <div className="flex items-start gap-2">
                <CheckCircle2 className="w-5 h-5 text-green-500 mt-1" />
                <span>Early failures dominate initial manufacturing phases</span>
              </div>
              <div className="flex items-start gap-2">
                <CheckCircle2 className="w-5 h-5 text-green-500 mt-1" />
                <span>Burn-in testing reduces infant mortality by 90%</span>
              </div>
              <div className="flex items-start gap-2">
                <CheckCircle2 className="w-5 h-5 text-green-500 mt-1" />
                <span>TestFlow predicts failure patterns before they occur</span>
              </div>
            </div>
          </div>

          <h2 className="text-2xl font-bold mb-4">The Classic Bathtub Curve: Three Distinct Phases</h2>
          <p>
            The bathtub curve gets its name from its distinctive shape—high failure rates at the beginning and end, with a low, stable rate in the middle. This pattern is universal across semiconductor devices and provides critical insights for validation teams.
          </p>

          <div className="my-12 space-y-8">
            {/* Phase 1: Infant Mortality */}
            <div className="bg-gradient-to-br from-red-500/10 to-orange-500/10 p-6 rounded-xl border border-red-500/20">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-red-500/20 border border-red-500/40 flex items-center justify-center flex-shrink-0">
                  <TrendingDown className="w-6 h-6 text-red-400" />
                </div>
                <div className="flex-grow">
                  <h4 className="font-semibold text-lg text-red-400 mb-3">Phase 1: Infant Mortality (Early Failure)</h4>
                  <p className="text-gray-300 mb-4">
                    Right after manufacturing, chips experience the highest defect rates due to hidden process defects. This phase sees failure rates that can be 10-100x higher than the stable operational period.
                  </p>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <h5 className="font-semibold text-red-400 text-sm mb-2">Common Causes</h5>
                      <ul className="text-gray-400 text-sm space-y-1">
                        <li>• Material impurities and contamination</li>
                        <li>• Process variations during fabrication</li>
                        <li>• Layout design issues</li>
                        <li>• Manufacturing defects (voids, cracks)</li>
                      </ul>
                    </div>
                    <div>
                      <h5 className="font-semibold text-red-400 text-sm mb-2">Mitigation Strategies</h5>
                      <ul className="text-gray-400 text-sm space-y-1">
                        <li>• Burn-in testing at elevated temperatures</li>
                        <li>• Accelerated stress testing</li>
                        <li>• Statistical process control</li>
                        <li>• Advanced screening techniques</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Phase 2: Useful Life */}
            <div className="bg-gradient-to-br from-green-500/10 to-blue-500/10 p-6 rounded-xl border border-green-500/20">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-green-500/20 border border-green-500/40 flex items-center justify-center flex-shrink-0">
                  <Activity className="w-6 h-6 text-green-400" />
                </div>
                <div className="flex-grow">
                  <h4 className="font-semibold text-lg text-green-400 mb-3">Phase 2: Useful Life (Random Failure)</h4>
                  <p className="text-gray-300 mb-4">
                    Once early defects are eliminated, chips enter their longest operational phase with low, constant failure rates. This period represents the intended operational lifetime of the device.
                  </p>
                  <p className="text-gray-300">
                    Failures in this stage are usually triggered by external conditions like voltage spikes, temperature shifts, or humidity. This is where ongoing reliability testing and statistical modeling become crucial.
                  </p>
                </div>
              </div>
            </div>

            {/* Phase 3: Wear Out */}
            <div className="bg-gradient-to-br from-orange-500/10 to-red-500/10 p-6 rounded-xl border border-orange-500/20">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-orange-500/20 border border-orange-500/40 flex items-center justify-center flex-shrink-0">
                  <TrendingUp className="w-6 h-6 text-orange-400" />
                </div>
                <div className="flex-grow">
                  <h4 className="font-semibold text-lg text-orange-400 mb-3">Phase 3: Wear Out (End-of-Life Failure)</h4>
                  <p className="text-gray-300 mb-4">
                    Eventually, physical degradation mechanisms cause failure rates to rise sharply. This phase defines the useful lifetime limit and is critical for long-lifecycle applications.
                  </p>
                  <p className="text-gray-300">
                    Physical degradation sets in—metal migration, dielectric breakdown, thermal stress. This phase is particularly relevant in automotive, telecom, and aerospace applications.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <blockquote className="border-l-4 border-blue-500 pl-4 italic text-gray-300 my-8">
            "The defect rate isn't static—it changes dramatically over time. Understanding its lifecycle is the key to building robust systems that protect both yield and long-term reliability."
          </blockquote>

          <h2 className="text-2xl font-bold mb-4">Why Validation Teams Focus on Early Detection</h2>
          <p>
            Understanding the bathtub curve explains why validation teams invest heavily in burn-in testing, stress testing, and failure prediction modeling:
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 my-8">
            <div className="bg-white/5 p-6 rounded-xl border border-white/10">
              <div className="flex items-center gap-2 mb-3">
                <TestTube className="w-5 h-5 text-red-400" />
                <h4 className="font-semibold">Early Detection</h4>
              </div>
              <p className="text-gray-400">
                Burn-in testing forces early defects to surface before chips reach customers, dramatically reducing field failure rates.
              </p>
            </div>
            <div className="bg-white/5 p-6 rounded-xl border border-white/10">
              <div className="flex items-center gap-2 mb-3">
                <BarChart3 className="w-5 h-5 text-green-400" />
                <h4 className="font-semibold">Lifetime Monitoring</h4>
              </div>
              <p className="text-gray-400">
                Continuous monitoring during the useful life phase ensures stable operation and identifies emerging issues.
              </p>
            </div>
            <div className="bg-white/5 p-6 rounded-xl border border-white/10">
              <div className="flex items-center gap-2 mb-3">
                <AlertTriangle className="w-5 h-5 text-orange-400" />
                <h4 className="font-semibold">Failure Prediction</h4>
              </div>
              <p className="text-gray-400">
                Advanced modeling predicts wear-out mechanisms and optimizes replacement schedules for critical applications.
              </p>
            </div>
          </div>

          <div className="my-12 rounded-xl overflow-hidden border border-white/10">
            <div className="relative aspect-[16/9]">
              <Image
                src="/images/TestFlow slide 1 .webp"
                alt="TestFlow AI-powered defect pattern recognition"
                fill
                className="object-cover"
                priority
              />
            </div>
            <div className="bg-gradient-to-r from-blue-500/20 to-purple-500/20 py-4 px-6">
              <h3 className="text-lg font-bold">TestFlow: Intelligent Defect Analysis</h3>
              <p className="text-gray-400 text-sm">Machine learning algorithms that recognize failure patterns and predict defect rates before they impact production</p>
            </div>
          </div>

          <div className="mt-12 p-8 bg-gradient-to-r from-blue-500/10 via-purple-500/10 to-blue-500/10 rounded-3xl border border-blue-500/20">
            <h3 className="text-2xl font-bold mb-4">Master Defect Rate Management with TestFlow</h3>
            <p className="text-gray-300 mb-6">
              Transform your validation strategy with AI-powered defect pattern recognition and predictive reliability analysis. TestFlow helps you optimize testing across all phases of the bathtub curve for maximum yield and reliability.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link 
                href="/contact" 
                className="bg-gradient-to-r from-blue-500 to-purple-600 text-white hover:from-blue-600 hover:to-purple-700 rounded-full px-6 py-3 text-center"
              >
                Schedule Demo
              </Link>
              <Link 
                href="/" 
                className="border border-blue-500/30 hover:bg-blue-500/5 rounded-full px-6 py-3 text-center"
              >
                Learn More
              </Link>
            </div>
          </div>
        </article>
      </div>
    </div>
  )
} 