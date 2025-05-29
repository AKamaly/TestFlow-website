'use client'

import { SiteHeader } from "@/components/site-header"
import { ArrowLeft, User, Calendar, Clock, CheckCircle2, ArrowRight, BrainCircuit, DollarSign, BarChart3, Cpu, Building2, ChartBar } from 'lucide-react'
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
            Industry Analysis
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
            NVIDIA's AI Revolution: Breaking Down Their $29.8B Profit Engine
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
              <span>Apr 10, 2025</span>
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
            src="https://9zog2la6l29pbfba.public.blob.vercel-storage.com/NVIDIA%20Revenue%20by%20segment-1A8LeHhFO9NHtnpRtMO0aTFNhMF8pG.png"
            alt="NVIDIA Revenue Breakdown FY2024"
            fill
            className="object-cover"
          />
        </div>

        {/* Article Content */}
        <article className="prose prose-invert max-w-none">
          <div className="bg-white/5 border border-white/10 rounded-xl p-6 mb-8">
            <p className="text-xl text-gray-300 mb-6">
              NVIDIA's fiscal year 2024 marks a historic transformation, showcasing their evolution from a gaming graphics pioneer to the backbone of AI infrastructure. With a staggering $29.8B in net profit from $60.9B in revenue, NVIDIA's financial performance tells the story of AI's growing influence in the technology landscape.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="flex items-start gap-2">
                <CheckCircle2 className="w-5 h-5 text-green-500 mt-1" />
                <span>78% of revenue from Data Center segment</span>
              </div>
              <div className="flex items-start gap-2">
                <CheckCircle2 className="w-5 h-5 text-green-500 mt-1" />
                <span>73% gross profit margin</span>
              </div>
              <div className="flex items-start gap-2">
                <CheckCircle2 className="w-5 h-5 text-green-500 mt-1" />
                <span>217% YoY growth in Data Center revenue</span>
              </div>
              <div className="flex items-start gap-2">
                <CheckCircle2 className="w-5 h-5 text-green-500 mt-1" />
                <span>49% net profit margin</span>
              </div>
            </div>
          </div>

          <h2 className="text-2xl font-bold mb-4">Breaking Down the Revenue Streams</h2>
          <p>
            NVIDIA's revenue breakdown reveals a company that has successfully pivoted to capture the explosive growth in AI and accelerated computing. Let's analyze each segment:
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-8">
            <div className="bg-gradient-to-br from-blue-500/10 to-purple-500/10 p-6 rounded-xl border border-blue-500/20">
              <div className="flex items-center gap-2 mb-3">
                <Building2 className="w-5 h-5 text-purple-400" />
                <h4 className="font-semibold">Data Center Dominance</h4>
              </div>
              <p className="text-gray-300">
                At $47.5B, the Data Center segment represents the heart of NVIDIA's business, growing an astounding 217% year-over-year. This growth is primarily driven by unprecedented demand for AI infrastructure, particularly their H100 and A100 GPUs powering large language models and other AI applications.
              </p>
            </div>
            <div className="bg-gradient-to-br from-purple-500/10 to-blue-500/10 p-6 rounded-xl border border-purple-500/20">
              <div className="flex items-center gap-2 mb-3">
                <ChartBar className="w-5 h-5 text-blue-400" />
                <h4 className="font-semibold">Gaming's Steady Performance</h4>
              </div>
              <p className="text-gray-300">
                While no longer the primary revenue driver, Gaming remains significant at $10.4B with 15% YoY growth. This demonstrates NVIDIA's ability to maintain its traditional market while expanding into new territories.
              </p>
            </div>
          </div>

          <h2 className="text-2xl font-bold mb-4">Operational Excellence</h2>
          <p>
            NVIDIA's operational metrics reveal a company operating at exceptional efficiency:
          </p>

          <div className="overflow-x-auto my-8">
            <table className="min-w-full bg-white/5 rounded-xl overflow-hidden border border-white/10">
              <thead>
                <tr className="bg-white/10">
                  <th className="py-3 px-4 text-left">Metric</th>
                  <th className="py-3 px-4 text-left">Amount</th>
                  <th className="py-3 px-4 text-left">Margin/Notes</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-t border-white/10">
                  <td className="py-3 px-4 font-medium">Gross Profit</td>
                  <td className="py-3 px-4 text-gray-400">$44.3B</td>
                  <td className="py-3 px-4">73% margin</td>
                </tr>
                <tr className="border-t border-white/10">
                  <td className="py-3 px-4 font-medium">R&D Investment</td>
                  <td className="py-3 px-4 text-gray-400">$7.3B</td>
                  <td className="py-3 px-4">12% of revenue</td>
                </tr>
                <tr className="border-t border-white/10">
                  <td className="py-3 px-4 font-medium">Operating Profit</td>
                  <td className="py-3 px-4 text-gray-400">$33.0B</td>
                  <td className="py-3 px-4">54% margin</td>
                </tr>
                <tr className="border-t border-white/10">
                  <td className="py-3 px-4 font-medium">Net Profit</td>
                  <td className="py-3 px-4 text-gray-400">$29.8B</td>
                  <td className="py-3 px-4">49% margin</td>
                </tr>
              </tbody>
            </table>
          </div>

          <h2 className="text-2xl font-bold mb-4">Strategic Investment in Innovation</h2>
          <p>
            NVIDIA's $7.3B investment in R&D (12% of revenue) demonstrates their commitment to maintaining technological leadership. This substantial investment focuses on:
          </p>

          <ul className="space-y-2">
            <li className="flex items-start gap-2">
              <ArrowRight className="w-4 h-4 text-blue-500 mt-1" />
              <span><strong>Next-generation GPU architectures:</strong> Developing more powerful and efficient chips for AI and computing</span>
            </li>
            <li className="flex items-start gap-2">
              <ArrowRight className="w-4 h-4 text-blue-500 mt-1" />
              <span><strong>Software ecosystem:</strong> Expanding CUDA and other development tools</span>
            </li>
            <li className="flex items-start gap-2">
              <ArrowRight className="w-4 h-4 text-blue-500 mt-1" />
              <span><strong>AI and machine learning:</strong> Advancing capabilities in deep learning and accelerated computing</span>
            </li>
          </ul>

          <div className="my-12 rounded-xl overflow-hidden border border-white/10">
            <div className="bg-gradient-to-r from-blue-500/20 to-purple-500/20 py-4 px-6">
              <h3 className="text-lg font-bold">The Validation Challenge</h3>
              <p className="text-gray-400 text-sm">As NVIDIA's chips grow more complex, post-silicon validation becomes increasingly critical. Modern AI chips require extensive testing to ensure perfect operation in data center environments.</p>
            </div>
          </div>

          <h2 className="text-2xl font-bold mb-4">Looking Ahead</h2>
          <p>
            NVIDIA's financial performance reflects more than just successful execution—it signals a fundamental shift in the semiconductor industry. The explosion in AI adoption has created unprecedented demand for specialized computing infrastructure, and NVIDIA's early investments in AI acceleration have positioned them at the forefront of this revolution.
          </p>

          <p>
            However, with this growth comes new challenges. As chips become more complex and AI workloads more demanding, the validation and testing phase becomes increasingly critical. This is where solutions like TestFlow play a crucial role, helping ensure these sophisticated chips perform flawlessly in real-world applications.
          </p>

          <blockquote className="border-l-4 border-blue-500 pl-4 italic text-gray-300 my-8">
            "Even the best-designed AI chip needs to work perfectly in the real world before it powers the next data center."
          </blockquote>

          <div className="mt-12 p-8 bg-gradient-to-r from-blue-500/10 via-purple-500/10 to-blue-500/10 rounded-3xl border border-blue-500/20">
            <h3 className="text-2xl font-bold mb-4">Accelerate Your Chip Validation</h3>
            <p className="text-gray-300 mb-6">
              As the semiconductor industry continues to evolve, efficient validation becomes crucial. Learn how TestFlow can help you accelerate your validation process and bring your chips to market faster.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link 
                href="/contact" 
                className="bg-gradient-to-r from-blue-500 to-purple-600 text-white hover:from-blue-600 hover:to-purple-700 rounded-full px-6 py-3 text-center"
              >
                Schedule a Demo
              </Link>
              <Link 
                href="/resources" 
                className="border border-blue-500/30 hover:bg-blue-500/5 rounded-full px-6 py-3 text-center"
              >
                Download Validation Guide
              </Link>
            </div>
          </div>
        </article>
      </div>
    </div>
  )
} 