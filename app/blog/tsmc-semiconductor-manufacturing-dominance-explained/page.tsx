'use client'

import { SiteHeader } from "@/components/site-header"
import { ArrowLeft, User, Calendar, Clock, CheckCircle2, ArrowRight, Factory, Crown, Globe, BarChart3, Target, Building2, Zap, Award, TrendingUp, Shield, Layers } from 'lucide-react'
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
          <div className="flex items-center gap-4 text-sm text-gray-400 mb-4">
            <div className="flex items-center gap-2">
              <User className="w-4 h-4" />
              <span>Ali Kamaly</span>
            </div>
            <div className="flex items-center gap-2">
              <Calendar className="w-4 h-4" />
              <span>Aug 10, 2025</span>
            </div>
            <div className="flex items-center gap-2">
              <Clock className="w-4 h-4" />
              <span>15 min read</span>
            </div>
          </div>
          
          <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent leading-tight">
            TSMC's Semiconductor Manufacturing Dominance: How Taiwan Became the Silicon Kingmaker
          </h1>
          
          <p className="text-xl text-gray-300 leading-relaxed">
            With 54% of global foundry market share and exclusive production of the world's most advanced chips, TSMC has become the most critical company in the semiconductor supply chain. Discover how this Taiwanese giant achieved unprecedented dominance.
          </p>
        </div>

        {/* Featured Image */}
        <div className="relative aspect-[16/9] mb-12 rounded-xl overflow-hidden">
          <Image
            src="https://favikon-medias.s3.eu-west-3.amazonaws.com/m/linkedin_7350131895927455744.jpg"
            alt="TSMC semiconductor manufacturing dominance - Taiwan's foundry leadership"
            fill
            className="object-cover"
          />
        </div>

        {/* Article Content */}
        <div className="prose prose-invert max-w-none">
          
          {/* Introduction */}
          <div className="mb-12">
            <p className="text-lg text-gray-300 leading-relaxed mb-6">
              In the global semiconductor industry, one company stands above all others: Taiwan Semiconductor Manufacturing Company (TSMC). This Taiwanese foundry doesn't just lead the market—it defines it. With a market capitalization exceeding $500 billion and manufacturing capabilities that no competitor can match, TSMC has become the silent giant powering the world's technology.
            </p>
            
            <p className="text-lg text-gray-300 leading-relaxed">
              From Apple's iPhone processors to NVIDIA's AI accelerators, TSMC manufactures the chips that power our digital world. But how did a company founded in 1987 in Taiwan become so dominant that it holds the entire tech industry in its hands?
            </p>
          </div>

          {/* TSMC by the Numbers */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold mb-8 flex items-center gap-3">
              <BarChart3 className="w-8 h-8 text-blue-400" />
              TSMC by the Numbers
            </h2>

            <div className="grid md:grid-cols-2 gap-6 mb-8">
              <div className="bg-gradient-to-r from-blue-900/20 to-purple-900/20 border border-blue-800/30 rounded-xl p-6">
                <h3 className="text-xl font-semibold mb-4">Market Dominance</h3>
                <div className="grid grid-cols-2 gap-4 text-center">
                  <div>
                    <div className="text-3xl font-bold text-blue-400 mb-1">54%</div>
                    <p className="text-sm text-gray-300">Global foundry market share</p>
                  </div>
                  <div>
                    <div className="text-3xl font-bold text-green-400 mb-1">92%</div>
                    <p className="text-sm text-gray-300">Advanced node market share</p>
                  </div>
                  <div>
                    <div className="text-3xl font-bold text-purple-400 mb-1">$70B</div>
                    <p className="text-sm text-gray-300">Annual revenue (2024)</p>
                  </div>
                  <div>
                    <div className="text-3xl font-bold text-yellow-400 mb-1">500+</div>
                    <p className="text-sm text-gray-300">Global customers</p>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-r from-green-900/20 to-teal-900/20 border border-green-800/30 rounded-xl p-6">
                <h3 className="text-xl font-semibold mb-4">Technology Leadership</h3>
                <div className="space-y-3">
                  <div className="flex justify-between">
                    <span>Most Advanced Node</span>
                    <span className="text-green-400 font-semibold">3nm</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Next Generation</span>
                    <span className="text-blue-400 font-semibold">2nm (2025)</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Manufacturing Sites</span>
                    <span className="text-purple-400 font-semibold">13 fabs</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Employees</span>
                    <span className="text-yellow-400 font-semibold">73,000+</span>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* The Rise of TSMC */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold mb-8 flex items-center gap-3">
              <Crown className="w-8 h-8 text-yellow-400" />
              The Rise of TSMC: From Startup to Silicon Kingmaker
            </h2>

            <div className="space-y-8">
              <div className="bg-gray-900/50 border border-gray-800 rounded-xl p-6">
                <h3 className="text-xl font-semibold mb-4">The Foundry Model Revolution</h3>
                <p className="text-gray-300 mb-4">
                  When Morris Chang founded TSMC in 1987, the semiconductor industry operated on an Integrated Device Manufacturer (IDM) model—companies designed and manufactured their own chips. Chang's revolutionary idea was the "pure-play foundry" model: focus solely on manufacturing chips designed by other companies.
                </p>
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <h4 className="font-semibold text-blue-400 mb-2">Traditional IDM Model</h4>
                    <ul className="text-sm text-gray-300 space-y-1">
                      <li>• Design + Manufacturing</li>
                      <li>• High capital requirements</li>
                      <li>• Limited customer base</li>
                      <li>• Technology development risk</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold text-green-400 mb-2">TSMC's Foundry Model</h4>
                    <ul className="text-sm text-gray-300 space-y-1">
                      <li>• Manufacturing focus only</li>
                      <li>• Shared R&D costs</li>
                      <li>• Multiple customers per node</li>
                      <li>• Economies of scale</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="bg-gray-900/50 border border-gray-800 rounded-xl p-6">
                <h3 className="text-xl font-semibold mb-4">Key Milestones in TSMC's Dominance</h3>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0">1987</div>
                    <div>
                      <h4 className="font-semibold mb-1">Foundation</h4>
                      <p className="text-gray-300 text-sm">Morris Chang establishes TSMC with government backing and Philips partnership</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 bg-green-600 rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0">1994</div>
                    <div>
                      <h4 className="font-semibold mb-1">IPO Success</h4>
                      <p className="text-gray-300 text-sm">Goes public on Taiwan Stock Exchange, raising capital for expansion</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 bg-purple-600 rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0">2007</div>
                    <div>
                      <h4 className="font-semibold mb-1">Apple Partnership</h4>
                      <p className="text-gray-300 text-sm">Begins manufacturing Apple's A-series processors, securing massive volumes</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 bg-orange-600 rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0">2016</div>
                    <div>
                      <h4 className="font-semibold mb-1">7nm Leadership</h4>
                      <p className="text-gray-300 text-sm">First to mass-produce 7nm chips, leaving Intel behind</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 bg-red-600 rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0">2022</div>
                    <div>
                      <h4 className="font-semibold mb-1">3nm Production</h4>
                      <p className="text-gray-300 text-sm">Achieves world's first 3nm mass production, cementing technological leadership</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Technology Leadership */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold mb-8 flex items-center gap-3">
              <Zap className="w-8 h-8 text-green-400" />
              Unmatched Technology Leadership
            </h2>

            <div className="grid md:grid-cols-2 gap-6 mb-8">
              <div className="bg-gray-900/50 border border-gray-800 rounded-xl p-6">
                <h3 className="text-xl font-semibold mb-4">Process Node Comparison</h3>
                <div className="space-y-3">
                  <div className="flex justify-between items-center">
                    <span>TSMC</span>
                    <div className="flex items-center gap-2">
                      <span className="text-green-400 font-semibold">3nm (Mass Production)</span>
                      <CheckCircle2 className="w-4 h-4 text-green-400" />
                    </div>
                  </div>
                  <div className="flex justify-between items-center">
                    <span>Samsung</span>
                    <div className="flex items-center gap-2">
                      <span className="text-yellow-400 font-semibold">3nm (Limited)</span>
                      <div className="w-4 h-4 rounded-full border-2 border-yellow-400"></div>
                    </div>
                  </div>
                  <div className="flex justify-between items-center">
                    <span>Intel</span>
                    <div className="flex items-center gap-2">
                      <span className="text-red-400 font-semibold">Intel 4 (~7nm)</span>
                      <div className="w-4 h-4 rounded-full border-2 border-red-400"></div>
                    </div>
                  </div>
                  <div className="flex justify-between items-center">
                    <span>GlobalFoundries</span>
                    <div className="flex items-center gap-2">
                      <span className="text-gray-400 font-semibold">12nm (Stopped)</span>
                      <div className="w-4 h-4 rounded-full bg-gray-600"></div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-gray-900/50 border border-gray-800 rounded-xl p-6">
                <h3 className="text-xl font-semibold mb-4">R&D Investment</h3>
                <div className="space-y-4">
                  <div>
                    <div className="flex justify-between mb-2">
                      <span>Annual R&D Spending</span>
                      <span className="text-blue-400 font-semibold">$7.8B</span>
                    </div>
                    <div className="w-full bg-gray-700 rounded-full h-2">
                      <div className="bg-blue-500 h-2 rounded-full" style={{width: '100%'}}></div>
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-between mb-2">
                      <span>R&D as % of Revenue</span>
                      <span className="text-green-400 font-semibold">11%</span>
                    </div>
                    <div className="w-full bg-gray-700 rounded-full h-2">
                      <div className="bg-green-500 h-2 rounded-full" style={{width: '55%'}}></div>
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-between mb-2">
                      <span>Patents Filed (Annual)</span>
                      <span className="text-purple-400 font-semibold">3,000+</span>
                    </div>
                    <div className="w-full bg-gray-700 rounded-full h-2">
                      <div className="bg-purple-500 h-2 rounded-full" style={{width: '75%'}}></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-r from-blue-900/20 to-green-900/20 border border-blue-800/30 rounded-xl p-6">
              <h3 className="text-xl font-semibold mb-4">What Makes TSMC's Technology Superior</h3>
              <div className="grid md:grid-cols-3 gap-6">
                <div>
                  <h4 className="font-semibold text-blue-400 mb-2">EUV Mastery</h4>
                  <p className="text-xs text-gray-300">Advanced extreme ultraviolet lithography implementation with highest yields</p>
                </div>
                <div>
                  <h4 className="font-semibold text-green-400 mb-2">Process Optimization</h4>
                  <p className="text-xs text-gray-300">Continuous improvement in power, performance, and area (PPA) metrics</p>
                </div>
                <div>
                  <h4 className="font-semibold text-purple-400 mb-2">Yield Excellence</h4>
                  <p className="text-xs text-gray-300">Industry-leading manufacturing yields reducing customer costs</p>
                </div>
              </div>
            </div>
          </section>

          {/* Customer Ecosystem */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold mb-8 flex items-center gap-3">
              <Building2 className="w-8 h-8 text-purple-400" />
              The TSMC Customer Ecosystem
            </h2>

            <div className="grid gap-6 mb-8">
              <div className="bg-gray-900/50 border border-gray-800 rounded-xl p-6">
                <h3 className="text-xl font-semibold mb-4">Major Customers by Revenue</h3>
                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg flex items-center justify-center text-sm font-bold">1</div>
                      <span className="font-semibold">Apple</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <span className="text-gray-400 text-sm">A-series, M-series processors</span>
                      <span className="text-blue-400 font-semibold">~25% of revenue</span>
                    </div>
                  </div>
                  <div className="flex justify-between items-center">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 bg-gradient-to-r from-green-500 to-blue-500 rounded-lg flex items-center justify-center text-sm font-bold">2</div>
                      <span className="font-semibold">NVIDIA</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <span className="text-gray-400 text-sm">GPU, AI accelerators</span>
                      <span className="text-green-400 font-semibold">~11% of revenue</span>
                    </div>
                  </div>
                  <div className="flex justify-between items-center">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg flex items-center justify-center text-sm font-bold">3</div>
                      <span className="font-semibold">Broadcom</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <span className="text-gray-400 text-sm">Networking, RF chips</span>
                      <span className="text-purple-400 font-semibold">~6% of revenue</span>
                    </div>
                  </div>
                  <div className="flex justify-between items-center">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 bg-gradient-to-r from-orange-500 to-red-500 rounded-lg flex items-center justify-center text-sm font-bold">4</div>
                      <span className="font-semibold">AMD</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <span className="text-gray-400 text-sm">CPUs, GPUs</span>
                      <span className="text-orange-400 font-semibold">~4% of revenue</span>
                    </div>
                  </div>
                  <div className="flex justify-between items-center">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 bg-gradient-to-r from-teal-500 to-cyan-500 rounded-lg flex items-center justify-center text-sm font-bold">5</div>
                      <span className="font-semibold">Qualcomm</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <span className="text-gray-400 text-sm">Mobile processors, 5G</span>
                      <span className="text-teal-400 font-semibold">~4% of revenue</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-r from-purple-900/20 to-blue-900/20 border border-purple-800/30 rounded-xl p-6">
              <h3 className="text-xl font-semibold mb-4">Why Customers Choose TSMC</h3>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-3">
                  <div className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-green-400 mt-0.5 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-sm">Technology Leadership</h4>
                      <p className="text-gray-300 text-xs">Access to most advanced manufacturing processes</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-green-400 mt-0.5 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-sm">Manufacturing Excellence</h4>
                      <p className="text-gray-300 text-xs">Highest yields and quality in the industry</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-green-400 mt-0.5 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-sm">Capacity Scale</h4>
                      <p className="text-gray-300 text-xs">Ability to handle massive production volumes</p>
                    </div>
                  </div>
                </div>
                <div className="space-y-3">
                  <div className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-green-400 mt-0.5 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-sm">Customer Trust</h4>
                      <p className="text-gray-300 text-xs">No competition with customers (pure-play model)</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-green-400 mt-0.5 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-sm">Ecosystem Support</h4>
                      <p className="text-gray-300 text-xs">Comprehensive design and packaging services</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-green-400 mt-0.5 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-sm">Innovation Partnership</h4>
                      <p className="text-gray-300 text-xs">Co-development of next-generation technologies</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Geopolitical Implications */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold mb-8 flex items-center gap-3">
              <Globe className="w-8 h-8 text-red-400" />
              Geopolitical Implications of TSMC's Dominance
            </h2>

            <div className="space-y-6">
              <div className="bg-gray-900/50 border border-gray-800 rounded-xl p-6">
                <h3 className="text-xl font-semibold mb-4">The Taiwan Advantage</h3>
                <p className="text-gray-300 mb-4">
                  TSMC's dominance has made Taiwan the most critical link in the global semiconductor supply chain. This concentration of advanced manufacturing in one geopolitical location creates both opportunities and risks.
                </p>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-semibold text-green-400 mb-2">Strategic Advantages</h4>
                    <ul className="text-sm text-gray-300 space-y-1">
                      <li>• Highly skilled engineering workforce</li>
                      <li>• Strong government support for semiconductors</li>
                      <li>• Established supply chain ecosystem</li>
                      <li>• Cultural focus on manufacturing excellence</li>
                      <li>• Proximity to key Asian markets</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold text-red-400 mb-2">Geopolitical Risks</h4>
                    <ul className="text-sm text-gray-300 space-y-1">
                      <li>• US-China technology tensions</li>
                      <li>• Taiwan's complex political status</li>
                      <li>• Natural disaster vulnerability</li>
                      <li>• Supply chain concentration risk</li>
                      <li>• Export control restrictions</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-r from-red-900/20 to-orange-900/20 border border-red-800/30 rounded-xl p-6">
                <h3 className="text-xl font-semibold mb-4">Global Response: Building Alternative Capacity</h3>
                <div className="grid md:grid-cols-3 gap-4">
                  <div>
                    <h4 className="font-semibold text-blue-400 mb-2">United States</h4>
                    <p className="text-xs text-gray-300">CHIPS Act: $52B investment to rebuild domestic semiconductor manufacturing</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-green-400 mb-2">European Union</h4>
                    <p className="text-xs text-gray-300">EU Chips Act: €43B to achieve 20% global production by 2030</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-red-400 mb-2">China</h4>
                    <p className="text-xs text-gray-300">Massive state investment in domestic foundry capabilities</p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Future Challenges */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold mb-8 flex items-center gap-3">
              <Target className="w-8 h-8 text-yellow-400" />
              Future Challenges and Opportunities
            </h2>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-gray-900/50 border border-gray-800 rounded-xl p-6">
                <h3 className="text-lg font-semibold mb-3 text-red-400">Challenges</h3>
                <div className="space-y-3">
                  <div>
                    <h4 className="font-semibold text-sm mb-1">Physics Limitations</h4>
                    <p className="text-gray-300 text-xs">Approaching fundamental limits of silicon scaling</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-sm mb-1">Rising Costs</h4>
                    <p className="text-gray-300 text-xs">Each new node requires exponentially higher investment</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-sm mb-1">Geopolitical Pressure</h4>
                    <p className="text-gray-300 text-xs">Forced to balance competing national interests</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-sm mb-1">Talent Competition</h4>
                    <p className="text-gray-300 text-xs">Global shortage of semiconductor engineers</p>
                  </div>
                </div>
              </div>

              <div className="bg-gray-900/50 border border-gray-800 rounded-xl p-6">
                <h3 className="text-lg font-semibold mb-3 text-green-400">Opportunities</h3>
                <div className="space-y-3">
                  <div>
                    <h4 className="font-semibold text-sm mb-1">AI Demand Growth</h4>
                    <p className="text-gray-300 text-xs">Explosive growth in AI chip requirements</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-sm mb-1">Advanced Packaging</h4>
                    <p className="text-gray-300 text-xs">New revenue streams in chiplet integration</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-sm mb-1">Global Expansion</h4>
                    <p className="text-gray-300 text-xs">Building fabs in US, Japan, and Europe</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-sm mb-1">New Technologies</h4>
                    <p className="text-gray-300 text-xs">Leading development of next-gen materials and processes</p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Conclusion */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold mb-6">TSMC's Enduring Dominance</h2>
            <div className="space-y-4 text-gray-300">
              <p>
                TSMC's rise to dominance wasn't accidental—it was the result of visionary leadership, relentless focus on manufacturing excellence, and the foresight to bet on the foundry model when others were skeptical. Today, the company's technological leadership and manufacturing scale create a competitive moat that competitors struggle to cross.
              </p>
              <p>
                While geopolitical tensions and the push for supply chain diversification pose challenges, TSMC's head start in advanced manufacturing, combined with its massive R&D investments and customer relationships, position it to maintain leadership for the foreseeable future.
              </p>
              <p>
                For the global technology industry, TSMC represents both an enabler and a single point of failure. Understanding this company's capabilities, strategies, and limitations is crucial for anyone involved in semiconductor design, manufacturing, or policy-making.
              </p>
            </div>
          </section>

          {/* CTA Section */}
          <div className="bg-gradient-to-r from-blue-900/30 to-purple-900/30 border border-blue-800/30 rounded-xl p-8 text-center">
            <h3 className="text-2xl font-bold mb-4">Validate Your Chips with Confidence</h3>
            <p className="text-gray-300 mb-6">
              Whether your chips are manufactured by TSMC or other foundries, comprehensive validation ensures they meet performance and reliability requirements. TestFlow's AI-powered platform provides the testing capabilities you need.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                href="/contact" 
                className="inline-flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-700 px-6 py-3 rounded-lg font-medium transition-colors"
              >
                Schedule a Demo
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link 
                href="/blog" 
                className="inline-flex items-center justify-center gap-2 border border-gray-600 hover:border-gray-500 px-6 py-3 rounded-lg font-medium transition-colors"
              >
                Read More Articles
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
