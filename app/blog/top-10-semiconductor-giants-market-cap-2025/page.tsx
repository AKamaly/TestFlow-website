'use client'

import { SiteHeader } from "@/components/site-header"
import { ArrowLeft, User, Calendar, Clock, CheckCircle2, ArrowRight, TrendingUp, Building2, Cpu, Factory, Zap, BarChart3, Target, Award, Crown, DollarSign, Globe, Layers } from 'lucide-react'
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
            Top 10 Semiconductor Giants by Market Cap 2025: NVIDIA's $3.4T Dominance
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
              <span>Aug 2, 2025</span>
            </div>
            <div className="flex items-center gap-2">
              <Clock className="w-4 h-4" />
              <span>12 min read</span>
            </div>
          </div>
        </div>

        {/* Featured Image */}
        <div className="relative aspect-[16/9] mb-12 rounded-xl overflow-hidden">
          <Image
            src="https://favikon-medias.s3.eu-west-3.amazonaws.com/m/linkedin_7346508012456456194.jpg"
            alt="Top 10 Semiconductor Giants by Market Cap 2025 - NVIDIA leads at $3.4T"
            fill
            className="object-cover"
          />
        </div>

        {/* Article Content */}
        <article className="prose prose-invert max-w-none">
          <div className="bg-white/5 border border-white/10 rounded-xl p-6 mb-8">
            <p className="text-xl text-gray-300 mb-6">
              The semiconductor industry has undergone a dramatic transformation, with market capitalizations reaching unprecedented levels in 2025. NVIDIA's remarkable $3.4 trillion valuation now exceeds the combined value of most other major chip companies, signaling a fundamental shift from traditional computing to AI-driven infrastructure.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="flex items-start gap-2">
                <CheckCircle2 className="w-5 h-5 text-green-500 mt-1" />
                <span>NVIDIA reaches $3.4T market cap in 2025</span>
              </div>
              <div className="flex items-start gap-2">
                <CheckCircle2 className="w-5 h-5 text-green-500 mt-1" />
                <span>AI demand reshapes semiconductor valuations</span>
              </div>
              <div className="flex items-start gap-2">
                <CheckCircle2 className="w-5 h-5 text-green-500 mt-1" />
                <span>TSMC and Broadcom join trillion-dollar club</span>
              </div>
              <div className="flex items-start gap-2">
                <CheckCircle2 className="w-5 h-5 text-green-500 mt-1" />
                <span>Traditional leaders face new competitive dynamics</span>
              </div>
            </div>
          </div>

          <h2 className="text-2xl font-bold mb-4">The New Semiconductor Hierarchy: 2025 Market Cap Rankings</h2>
          <p>
            The semiconductor industry's market capitalization landscape in 2025 tells a compelling story of technological transformation, strategic positioning, and the explosive growth of artificial intelligence infrastructure. Let's examine each of the top 10 players and understand what drives their valuations.
          </p>

          <div className="my-12 space-y-6">
            {/* NVIDIA #1 */}
            <div className="bg-gradient-to-br from-green-500/10 to-blue-500/10 p-6 rounded-xl border border-green-500/20">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-green-500/20 border border-green-500/40 flex items-center justify-center flex-shrink-0">
                  <Crown className="w-6 h-6 text-green-400" />
                </div>
                <div className="flex-grow">
                  <div className="flex items-center gap-2 mb-3">
                    <h4 className="font-semibold text-lg text-green-400">#1 NVIDIA — $3.4 Trillion</h4>
                    <span className="text-xs bg-green-500/20 text-green-400 px-2 py-1 rounded-full">AI Leader</span>
                  </div>
                  <p className="text-gray-300 mb-4">
                    NVIDIA's astronomical valuation reflects its position as the undisputed leader of the AI revolution. From powering 95% of large language model training to dominating data center acceleration, NVIDIA has transformed from a graphics company into the backbone of artificial intelligence infrastructure.
                  </p>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <h5 className="font-semibold text-green-400 text-sm mb-2">Key Strengths</h5>
                      <ul className="text-gray-400 text-sm space-y-1">
                        <li>• H100/H200 AI accelerators</li>
                        <li>• CUDA software ecosystem</li>
                        <li>• 95% LLM training market share</li>
                        <li>• Data center dominance</li>
                      </ul>
                    </div>
                    <div>
                      <h5 className="font-semibold text-green-400 text-sm mb-2">Market Impact</h5>
                      <ul className="text-gray-400 text-sm space-y-1">
                        <li>• Powers ChatGPT, Claude, Gemini</li>
                        <li>• Enables autonomous vehicles</li>
                        <li>• Drives cloud AI services</li>
                        <li>• Accelerates scientific computing</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Broadcom #2 */}
            <div className="bg-gradient-to-br from-blue-500/10 to-purple-500/10 p-6 rounded-xl border border-blue-500/20">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-blue-500/20 border border-blue-500/40 flex items-center justify-center flex-shrink-0">
                  <span className="text-blue-400 font-semibold text-lg">2</span>
                </div>
                <div className="flex-grow">
                  <div className="flex items-center gap-2 mb-3">
                    <h4 className="font-semibold text-lg text-blue-400">#2 Broadcom — $1.1 Trillion</h4>
                    <span className="text-xs bg-blue-500/20 text-blue-400 px-2 py-1 rounded-full">Infrastructure</span>
                  </div>
                  <p className="text-gray-300 mb-4">
                    Broadcom represents the silent giant of semiconductor infrastructure. While less visible to consumers, Broadcom's chips power the networking backbone of the internet, enable wireless connectivity in Apple devices, and provide critical infrastructure silicon for enterprise and cloud applications.
                  </p>
                  <div className="text-blue-400 text-sm">
                    <strong>Key Markets:</strong> Networking, RF components, Apple partnerships, enterprise infrastructure
                  </div>
                </div>
              </div>
            </div>

            {/* TSMC #3 */}
            <div className="bg-gradient-to-br from-purple-500/10 to-blue-500/10 p-6 rounded-xl border border-purple-500/20">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-purple-500/20 border border-purple-500/40 flex items-center justify-center flex-shrink-0">
                  <span className="text-purple-400 font-semibold text-lg">3</span>
                </div>
                <div className="flex-grow">
                  <div className="flex items-center gap-2 mb-3">
                    <h4 className="font-semibold text-lg text-purple-400">#3 TSMC — $1.0 Trillion</h4>
                    <span className="text-xs bg-purple-500/20 text-purple-400 px-2 py-1 rounded-full">Foundry King</span>
                  </div>
                  <p className="text-gray-300 mb-4">
                    Taiwan Semiconductor Manufacturing Company has achieved trillion-dollar status as the world's most advanced contract manufacturer. TSMC doesn't design chips—it builds them for others, including NVIDIA, Apple, AMD, and Qualcomm, making it the ultimate silicon kingmaker.
                  </p>
                  <div className="text-purple-400 text-sm">
                    <strong>Manufacturing Leadership:</strong> 3nm, 5nm processes, 90%+ advanced node market share
                  </div>
                </div>
              </div>
            </div>
          </div>

          <blockquote className="border-l-4 border-green-500 pl-4 italic text-gray-300 my-8">
            "NVIDIA is no longer just a chip company—it's a platform. Its dominance shows how AI, software, and compute are converging to create trillion-dollar ecosystems."
            <footer className="mt-2 text-gray-400 not-italic">— Market Analysis Insight</footer>
          </blockquote>

          <h2 className="text-2xl font-bold mb-4">The Middle Tier: Specialized Powerhouses ($200B-$400B)</h2>
          <p>
            The middle tier of semiconductor giants represents companies that have found strong niches or maintain leadership in specific technology segments:
          </p>

          <div className="overflow-x-auto my-8">
            <table className="min-w-full bg-white/5 rounded-xl overflow-hidden border border-white/10">
              <thead>
                <tr className="bg-white/10">
                  <th className="py-3 px-4 text-left">Rank</th>
                  <th className="py-3 px-4 text-left">Company</th>
                  <th className="py-3 px-4 text-left">Market Cap</th>
                  <th className="py-3 px-4 text-left">Primary Strength</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-t border-white/10">
                  <td className="py-3 px-4 font-medium">4</td>
                  <td className="py-3 px-4 text-gray-400">ASML</td>
                  <td className="py-3 px-4 text-orange-400">$275B</td>
                  <td className="py-3 px-4">EUV lithography monopoly</td>
                </tr>
                <tr className="border-t border-white/10">
                  <td className="py-3 px-4 font-medium">5</td>
                  <td className="py-3 px-4 text-gray-400">Samsung</td>
                  <td className="py-3 px-4 text-blue-400">$240B</td>
                  <td className="py-3 px-4">Memory leader + foundry</td>
                </tr>
                <tr className="border-t border-white/10">
                  <td className="py-3 px-4 font-medium">6</td>
                  <td className="py-3 px-4 text-gray-400">AMD</td>
                  <td className="py-3 px-4 text-purple-400">$199B</td>
                  <td className="py-3 px-4">CPU/GPU competition</td>
                </tr>
                <tr className="border-t border-white/10">
                  <td className="py-3 px-4 font-medium">7</td>
                  <td className="py-3 px-4 text-gray-400">Qualcomm</td>
                  <td className="py-3 px-4 text-green-400">$172B</td>
                  <td className="py-3 px-4">Mobile and RF leadership</td>
                </tr>
                <tr className="border-t border-white/10">
                  <td className="py-3 px-4 font-medium">8</td>
                  <td className="py-3 px-4 text-gray-400">Texas Instruments</td>
                  <td className="py-3 px-4 text-yellow-400">$171B</td>
                  <td className="py-3 px-4">Analog and industrial</td>
                </tr>
                <tr className="border-t border-white/10">
                  <td className="py-3 px-4 font-medium">9</td>
                  <td className="py-3 px-4 text-gray-400">Intel</td>
                  <td className="py-3 px-4 text-red-400">$85B</td>
                  <td className="py-3 px-4">x86 legacy + turnaround</td>
                </tr>
                <tr className="border-t border-white/10">
                  <td className="py-3 px-4 font-medium">10</td>
                  <td className="py-3 px-4 text-gray-400">SK Hynix</td>
                  <td className="py-3 px-4 text-cyan-400">$81B</td>
                  <td className="py-3 px-4">Memory powerhouse</td>
                </tr>
              </tbody>
            </table>
          </div>

          <h2 className="text-2xl font-bold mb-4">The AI Revolution's Impact on Semiconductor Valuations</h2>
          <p>
            The 2025 market cap rankings reveal how artificial intelligence has fundamentally reshaped the semiconductor industry's value creation. Traditional metrics like CPU performance or memory density have been overshadowed by AI acceleration capabilities and data center infrastructure.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-8">
            <div className="bg-gradient-to-br from-green-500/10 to-blue-500/10 p-6 rounded-xl border border-green-500/20">
              <div className="flex items-center gap-2 mb-3">
                <TrendingUp className="w-5 h-5 text-green-400" />
                <h4 className="font-semibold">AI Winners</h4>
              </div>
              <p className="text-gray-300 mb-4">
                Companies directly enabling AI infrastructure have seen explosive valuation growth:
              </p>
              <ul className="space-y-2 text-gray-400">
                <li>• NVIDIA: GPU acceleration for AI training and inference</li>
                <li>• TSMC: Manufacturing the most advanced AI chips</li>
                <li>• Broadcom: Networking infrastructure for AI data centers</li>
                <li>• AMD: Competitive AI accelerators and data center CPUs</li>
              </ul>
            </div>
            <div className="bg-gradient-to-br from-red-500/10 to-orange-500/10 p-6 rounded-xl border border-red-500/20">
              <div className="flex items-center gap-2 mb-3">
                <BarChart3 className="w-5 h-5 text-red-400" />
                <h4 className="font-semibold">Traditional Challenges</h4>
              </div>
              <p className="text-gray-300 mb-4">
                Companies tied to legacy computing paradigms face valuation pressure:
              </p>
              <ul className="space-y-2 text-gray-400">
                <li>• Intel: Struggling with manufacturing delays and competition</li>
                <li>• Memory companies: Cyclical nature vs. AI growth premiums</li>
                <li>• Traditional CPU/GPU: Commoditization pressure</li>
                <li>• Legacy architectures: Disrupted by AI-optimized designs</li>
              </ul>
            </div>
          </div>

          <h2 className="text-2xl font-bold mb-4">Deep Dive: Understanding Each Giant's Position</h2>
          <p>
            Each company in the top 10 represents a different strategic approach to capturing value in the semiconductor ecosystem. Let's examine their unique positioning:
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-8">
            <div className="bg-white/5 p-6 rounded-xl border border-white/10">
              <div className="flex items-center gap-2 mb-3">
                <Factory className="w-5 h-5 text-orange-400" />
                <h4 className="font-semibold">ASML: The Enabler ($275B)</h4>
              </div>
              <p className="text-gray-400">
                ASML's monopoly on extreme ultraviolet (EUV) lithography makes it indispensable for advanced chip manufacturing. Every leading-edge processor, from NVIDIA's AI chips to Apple's mobile processors, requires ASML's machines to be manufactured.
              </p>
              <div className="mt-3 text-orange-400 text-sm">
                <strong>Strategic Moat:</strong> 100% market share in EUV lithography
              </div>
            </div>
            <div className="bg-white/5 p-6 rounded-xl border border-white/10">
              <div className="flex items-center gap-2 mb-3">
                <Building2 className="w-5 h-5 text-blue-400" />
                <h4 className="font-semibold">Samsung: The Integrator ($240B)</h4>
              </div>
              <p className="text-gray-400">
                Samsung's vertical integration strategy spans memory manufacturing, mobile processors, and foundry services. This diversification provides stability but also creates complexity in competing across multiple markets simultaneously.
              </p>
              <div className="mt-3 text-blue-400 text-sm">
                <strong>Strategic Focus:</strong> Memory leadership + foundry competition
              </div>
            </div>
          </div>

          <div className="my-12 rounded-xl overflow-hidden border border-white/10">
            <div className="relative aspect-[16/9]">
              <Image
                src="/images/TestFlow slide 1 .webp"
                alt="TestFlow AI-powered validation platform supporting semiconductor giants"
                fill
                className="object-cover"
                priority
              />
            </div>
            <div className="bg-gradient-to-r from-blue-500/20 to-purple-500/20 py-4 px-6">
              <h3 className="text-lg font-bold">TestFlow: Supporting Semiconductor Giants</h3>
              <p className="text-gray-400 text-sm">As these companies develop increasingly complex chips, TestFlow provides the AI-powered validation tools needed to accelerate time-to-market</p>
            </div>
          </div>

          <h2 className="text-2xl font-bold mb-4">The Great Reshuffling: Winners and Losers</h2>
          <p>
            The 2025 rankings represent more than just market sentiment—they reflect fundamental shifts in technology adoption, customer demand, and strategic positioning. Several notable changes stand out:
          </p>

          <div className="bg-gradient-to-br from-blue-500/10 to-purple-500/10 p-6 rounded-xl border border-blue-500/20 my-8">
            <h3 className="text-xl font-bold mb-4">Market Cap Transformation Analysis</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-semibold text-green-400 mb-3">Dramatic Risers</h4>
                <ul className="space-y-2 text-gray-300">
                  <li className="flex items-start gap-2">
                    <TrendingUp className="w-4 h-4 text-green-500 mt-1" />
                    <span><strong>NVIDIA:</strong> 10x+ growth from AI boom</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <TrendingUp className="w-4 h-4 text-green-500 mt-1" />
                    <span><strong>TSMC:</strong> Essential foundry for AI chips</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <TrendingUp className="w-4 h-4 text-green-500 mt-1" />
                    <span><strong>Broadcom:</strong> Infrastructure beneficiary</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <TrendingUp className="w-4 h-4 text-green-500 mt-1" />
                    <span><strong>AMD:</strong> Competitive AI positioning</span>
                  </li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-red-400 mb-3">Challenged Leaders</h4>
                <ul className="space-y-2 text-gray-300">
                  <li className="flex items-start gap-2">
                    <ArrowRight className="w-4 h-4 text-red-500 mt-1" />
                    <span><strong>Intel:</strong> Manufacturing delays and competition</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <ArrowRight className="w-4 h-4 text-red-500 mt-1" />
                    <span><strong>Memory companies:</strong> Cyclical vs. growth premiums</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <ArrowRight className="w-4 h-4 text-red-500 mt-1" />
                    <span><strong>Traditional CPU:</strong> Disrupted by AI acceleration</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <ArrowRight className="w-4 h-4 text-red-500 mt-1" />
                    <span><strong>Legacy architectures:</strong> Replaced by specialized silicon</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <h2 className="text-2xl font-bold mb-4">Strategic Implications: What These Valuations Mean</h2>
          <p>
            The 2025 semiconductor market cap rankings provide crucial insights into industry dynamics, competitive positioning, and future investment priorities:
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 my-8">
            <div className="bg-white/5 p-6 rounded-xl border border-white/10">
              <div className="flex items-center gap-2 mb-3">
                <Target className="w-5 h-5 text-blue-400" />
                <h4 className="font-semibold">Platform Economics</h4>
              </div>
              <p className="text-gray-400">
                Companies building platforms (NVIDIA's CUDA, TSMC's foundry services) capture more value than those selling individual components. Platform effects create winner-take-most dynamics.
              </p>
            </div>
            <div className="bg-white/5 p-6 rounded-xl border border-white/10">
              <div className="flex items-center gap-2 mb-3">
                <Globe className="w-5 h-5 text-green-400" />
                <h4 className="font-semibold">Ecosystem Control</h4>
              </div>
              <p className="text-gray-400">
                Companies controlling critical ecosystem chokepoints (ASML's EUV, TSMC's advanced nodes) maintain premium valuations despite smaller revenue bases than diversified players.
              </p>
            </div>
            <div className="bg-white/5 p-6 rounded-xl border border-white/10">
              <div className="flex items-center gap-2 mb-3">
                <Zap className="w-5 h-5 text-purple-400" />
                <h4 className="font-semibold">Innovation Premium</h4>
              </div>
              <p className="text-gray-400">
                Companies at the forefront of AI, advanced packaging, and next-generation architectures command significant valuation premiums over those focused on mature technologies.
              </p>
            </div>
          </div>

          <h2 className="text-2xl font-bold mb-4">The Validation Challenge: Supporting Trillion-Dollar Ambitions</h2>
          <p>
            As these semiconductor giants develop increasingly complex chips worth trillions in market value, the validation and testing phase becomes more critical than ever. The stakes are enormous—a single validation oversight can impact billions in market capitalization.
          </p>

          <div className="bg-gradient-to-br from-purple-500/10 to-blue-500/10 p-6 rounded-xl border border-purple-500/20 my-8">
            <h3 className="text-xl font-bold mb-4">TestFlow's Role in Supporting Industry Leaders</h3>
            <p className="text-gray-300 mb-4">
              At Atoms, we're building TestFlow to support the teams working at these industry-leading companies. As chips become more complex and market expectations grow, comprehensive validation becomes essential for maintaining competitive advantage.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <h5 className="font-semibold text-purple-400 mb-2">For AI Leaders (NVIDIA, AMD):</h5>
                <ul className="space-y-1 text-gray-400">
                  <li>• Automated testing for AI accelerators</li>
                  <li>• Performance validation at scale</li>
                  <li>• ML model accuracy verification</li>
                  <li>• Power efficiency optimization</li>
                </ul>
              </div>
              <div>
                <h5 className="font-semibold text-blue-400 mb-2">For Foundries (TSMC, Samsung):</h5>
                <ul className="space-y-1 text-gray-400">
                  <li>• Yield optimization through intelligent testing</li>
                  <li>• Process validation automation</li>
                  <li>• Customer collaboration tools</li>
                  <li>• Quality assurance workflows</li>
                </ul>
              </div>
            </div>
          </div>

          <h2 className="text-2xl font-bold mb-4">Looking Ahead: Future Market Dynamics</h2>
          <p>
            The semiconductor industry's valuation landscape will continue evolving as new technologies emerge and market dynamics shift. Several trends will likely influence future rankings:
          </p>

          <ul className="space-y-3 my-8">
            <li className="flex items-start gap-2">
              <ArrowRight className="w-4 h-4 text-blue-500 mt-1" />
              <span><strong>Quantum Computing:</strong> Companies developing quantum processors may achieve significant valuations as the technology matures</span>
            </li>
            <li className="flex items-start gap-2">
              <ArrowRight className="w-4 h-4 text-blue-500 mt-1" />
              <span><strong>Edge AI:</strong> Specialized chips for edge computing applications will create new market leaders</span>
            </li>
            <li className="flex items-start gap-2">
              <ArrowRight className="w-4 h-4 text-blue-500 mt-1" />
              <span><strong>Sustainable Computing:</strong> Energy-efficient chip designs will become increasingly valuable</span>
            </li>
            <li className="flex items-start gap-2">
              <ArrowRight className="w-4 h-4 text-blue-500 mt-1" />
              <span><strong>Automotive Silicon:</strong> Autonomous vehicle chips represent a massive emerging market</span>
            </li>
          </ul>

          <blockquote className="border-l-4 border-blue-500 pl-4 italic text-gray-300 my-8">
            "This ranking shows how semiconductor market value has shifted from traditional CPUs and memory to AI, advanced foundry, and enabling infrastructure. Whether you build, validate, or invest in silicon—these players shape the entire ecosystem."
          </blockquote>

          <h2 className="text-2xl font-bold mb-4">Conclusion: The New Semiconductor Order</h2>
          <p>
            The 2025 semiconductor market cap rankings reveal an industry in the midst of historic transformation. NVIDIA's $3.4 trillion valuation—larger than most other chip companies combined—demonstrates how AI has become the primary value driver in semiconductor markets.
          </p>

          <p>
            For companies operating in this ecosystem, understanding these dynamics is crucial for strategic planning, partnership decisions, and technology investments. The winners are those who have successfully positioned themselves at the intersection of AI, advanced manufacturing, and critical infrastructure.
          </p>

          <p>
            As these companies continue to push the boundaries of what's possible with silicon, the validation and testing of their increasingly complex designs becomes more critical than ever. The trillion-dollar valuations reflect not just current success, but market confidence in these companies' ability to continue innovating and delivering reliable, high-performance semiconductors.
          </p>

          <div className="mt-12 p-8 bg-gradient-to-r from-blue-500/10 via-purple-500/10 to-blue-500/10 rounded-3xl border border-blue-500/20">
            <h3 className="text-2xl font-bold mb-4">Support the Next Semiconductor Giants</h3>
            <p className="text-gray-300 mb-6">
              Whether you're working at one of these industry leaders or building the next breakthrough semiconductor company, TestFlow provides the AI-powered validation tools needed to compete at the highest levels. Join the companies shaping the future of computing.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link 
                href="/contact" 
                className="bg-gradient-to-r from-blue-500 to-purple-600 text-white hover:from-blue-600 hover:to-purple-700 rounded-full px-6 py-3 text-center font-medium transition-all duration-300"
              >
                Schedule a Demo
              </Link>
              <Link 
                href="/" 
                className="border border-blue-500/30 hover:bg-blue-500/5 rounded-full px-6 py-3 text-center font-medium transition-all duration-300"
              >
                Learn More About TestFlow
              </Link>
            </div>
          </div>
        </article>
      </div>
    </div>
  )
}
