'use client'

import { SiteHeader } from "@/components/site-header"
import { ArrowLeft, User, Calendar, Clock, CheckCircle2, ArrowRight, Building2, BarChart3, Factory, Crown, Globe, Target, TrendingUp, Zap, Award, Layers, Activity } from 'lucide-react'
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
              <span>Aug 12, 2025</span>
            </div>
            <div className="flex items-center gap-2">
              <Clock className="w-4 h-4" />
              <span>11 min read</span>
            </div>
          </div>
          
          <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent leading-tight">
            Top 8 TSMC Customers by Revenue Share: Who Powers the World's Leading Foundry
          </h1>
          
          <p className="text-xl text-gray-300 leading-relaxed">
            TSMC's customer portfolio reads like a who's who of the tech industry. From Apple's iPhone processors to NVIDIA's AI accelerators, discover which companies drive the world's most advanced semiconductor foundry and why their relationships matter.
          </p>
        </div>

        {/* Featured Image */}
        <div className="relative aspect-[16/9] mb-12 rounded-xl overflow-hidden">
          <Image
            src="https://favikon-medias.s3.eu-west-3.amazonaws.com/m/linkedin_7359555437634945026.jpg"
            alt="Top 8 TSMC customers ranked by revenue share - foundry customer analysis"
            fill
            className="object-cover"
          />
        </div>

        {/* Article Content */}
        <div className="prose prose-invert max-w-none">
          
          {/* Introduction */}
          <div className="mb-12">
            <p className="text-lg text-gray-300 leading-relaxed mb-6">
              Taiwan Semiconductor Manufacturing Company (TSMC) doesn't just manufacture chips—it manufactures the future. With over 60% of the global foundry market and exclusive production of the world's most advanced processors, TSMC's customer relationships shape entire industries.
            </p>
            
            <p className="text-lg text-gray-300 leading-relaxed">
              But who are the tech titans that depend on TSMC's fabrication capabilities? This deep dive reveals TSMC's top 8 customers by revenue share and explores why these partnerships are critical to the global technology ecosystem.
            </p>
          </div>

          {/* TSMC's Customer Portfolio Overview */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold mb-8 flex items-center gap-3">
              <Crown className="w-8 h-8 text-yellow-400" />
              TSMC's Elite Customer Portfolio
            </h2>

            <div className="bg-gray-900/50 border border-gray-800 rounded-xl p-6 mb-8">
              <h3 className="text-xl font-semibold mb-4">Revenue Concentration Analysis</h3>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold text-blue-400 mb-3">Customer Concentration</h4>
                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <span>Top 3 customers</span>
                      <span className="text-blue-400 font-semibold">~38% of revenue</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Top 8 customers</span>
                      <span className="text-green-400 font-semibold">~58% of revenue</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Remaining customers</span>
                      <span className="text-purple-400 font-semibold">~42% of revenue</span>
                    </div>
                  </div>
                </div>
                <div>
                  <h4 className="font-semibold text-green-400 mb-3">Market Segments</h4>
                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <span>Smartphone/Mobile</span>
                      <span className="text-blue-400 font-semibold">~45%</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Data Center/AI</span>
                      <span className="text-green-400 font-semibold">~25%</span>
                    </div>
                    <div className="flex justify-between">
                      <span>PC/Computing</span>
                      <span className="text-purple-400 font-semibold">~20%</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Other</span>
                      <span className="text-yellow-400 font-semibold">~10%</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Top 8 TSMC Customers Breakdown */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold mb-8 flex items-center gap-3">
              <BarChart3 className="w-8 h-8 text-blue-400" />
              Top 8 TSMC Customers by Revenue Share
            </h2>

            <div className="space-y-6">
              {/* #1 Apple */}
              <div className="bg-gray-900/50 border border-gray-800 rounded-xl p-6">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg flex items-center justify-center text-lg font-bold">1</div>
                    <div>
                      <h3 className="text-xl font-semibold">Apple</h3>
                      <p className="text-gray-400">Consumer Electronics Giant</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="text-2xl font-bold text-blue-400">23%</div>
                    <div className="text-sm text-gray-400">~$16B annual revenue</div>
                  </div>
                </div>
                <div className="grid md:grid-cols-3 gap-4">
                  <div>
                    <h4 className="font-semibold text-sm mb-2">Key Products</h4>
                    <ul className="text-xs text-gray-300 space-y-1">
                      <li>• A-series iPhone processors</li>
                      <li>• M-series Mac processors</li>
                      <li>• Apple Watch S-series</li>
                      <li>• AirPods H-series chips</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold text-sm mb-2">Process Nodes</h4>
                    <ul className="text-xs text-gray-300 space-y-1">
                      <li>• 3nm (A17 Pro, M3)</li>
                      <li>• 5nm (A14-A16, M1-M2)</li>
                      <li>• 7nm (A12-A13)</li>
                      <li>• Leading-edge exclusive</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold text-sm mb-2">Strategic Value</h4>
                    <ul className="text-xs text-gray-300 space-y-1">
                      <li>• Largest single customer</li>
                      <li>• Premium pricing acceptance</li>
                      <li>• Technology co-development</li>
                      <li>• Massive volume guarantee</li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* #2 Qualcomm */}
              <div className="bg-gray-900/50 border border-gray-800 rounded-xl p-6">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-gradient-to-r from-green-500 to-blue-500 rounded-lg flex items-center justify-center text-lg font-bold">2</div>
                    <div>
                      <h3 className="text-xl font-semibold">Qualcomm</h3>
                      <p className="text-gray-400">Mobile Technology Leader</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="text-2xl font-bold text-green-400">8.9%</div>
                    <div className="text-sm text-gray-400">~$6.2B annual revenue</div>
                  </div>
                </div>
                <div className="grid md:grid-cols-3 gap-4">
                  <div>
                    <h4 className="font-semibold text-sm mb-2">Key Products</h4>
                    <ul className="text-xs text-gray-300 space-y-1">
                      <li>• Snapdragon mobile SoCs</li>
                      <li>• 5G modems and RF</li>
                      <li>• Automotive processors</li>
                      <li>• IoT and edge AI chips</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold text-sm mb-2">Process Nodes</h4>
                    <ul className="text-xs text-gray-300 space-y-1">
                      <li>• 4nm (Snapdragon 8 Gen 3)</li>
                      <li>• 5nm (Snapdragon 888/8 Gen 1)</li>
                      <li>• 7nm (Snapdragon 855/865)</li>
                      <li>• Multiple node strategy</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold text-sm mb-2">Strategic Value</h4>
                    <ul className="text-xs text-gray-300 space-y-1">
                      <li>• Android ecosystem anchor</li>
                      <li>• 5G technology leadership</li>
                      <li>• Automotive growth vector</li>
                      <li>• Consistent high volumes</li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* #3 AMD */}
              <div className="bg-gray-900/50 border border-gray-800 rounded-xl p-6">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-gradient-to-r from-red-500 to-orange-500 rounded-lg flex items-center justify-center text-lg font-bold">3</div>
                    <div>
                      <h3 className="text-xl font-semibold">AMD</h3>
                      <p className="text-gray-400">CPU & GPU Competitor</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="text-2xl font-bold text-red-400">7.6%</div>
                    <div className="text-sm text-gray-400">~$5.3B annual revenue</div>
                  </div>
                </div>
                <div className="grid md:grid-cols-3 gap-4">
                  <div>
                    <h4 className="font-semibold text-sm mb-2">Key Products</h4>
                    <ul className="text-xs text-gray-300 space-y-1">
                      <li>• Ryzen CPUs (Zen architecture)</li>
                      <li>• EPYC server processors</li>
                      <li>• Radeon GPUs (RDNA)</li>
                      <li>• Data center accelerators</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold text-sm mb-2">Process Nodes</h4>
                    <ul className="text-xs text-gray-300 space-y-1">
                      <li>• 5nm (Zen 4, RDNA 3)</li>
                      <li>• 7nm (Zen 2/3, RDNA 2)</li>
                      <li>• Advanced packaging</li>
                      <li>• Chiplet architectures</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold text-sm mb-2">Strategic Value</h4>
                    <ul className="text-xs text-gray-300 space-y-1">
                      <li>• Intel alternative strategy</li>
                      <li>• Data center growth</li>
                      <li>• AI/ML acceleration</li>
                      <li>• Technology partnership</li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* #4 Broadcom */}
              <div className="bg-gray-900/50 border border-gray-800 rounded-xl p-6">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg flex items-center justify-center text-lg font-bold">4</div>
                    <div>
                      <h3 className="text-xl font-semibold">Broadcom</h3>
                      <p className="text-gray-400">Infrastructure & Connectivity</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="text-2xl font-bold text-purple-400">6.6%</div>
                    <div className="text-sm text-gray-400">~$4.6B annual revenue</div>
                  </div>
                </div>
                <div className="grid md:grid-cols-3 gap-4">
                  <div>
                    <h4 className="font-semibold text-sm mb-2">Key Products</h4>
                    <ul className="text-xs text-gray-300 space-y-1">
                      <li>• WiFi and Bluetooth chips</li>
                      <li>• Networking switches</li>
                      <li>• Storage controllers</li>
                      <li>• RF front-end modules</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold text-sm mb-2">Process Nodes</h4>
                    <ul className="text-xs text-gray-300 space-y-1">
                      <li>• 7nm (networking ASICs)</li>
                      <li>• 16nm (switch chips)</li>
                      <li>• 28nm (WiFi/BT)</li>
                      <li>• Mixed-node portfolio</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold text-sm mb-2">Strategic Value</h4>
                    <ul className="text-xs text-gray-300 space-y-1">
                      <li>• Infrastructure backbone</li>
                      <li>• Apple partnership</li>
                      <li>• Enterprise networking</li>
                      <li>• Consistent margins</li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Remaining customers in compact format */}
              <div className="grid md:grid-cols-2 gap-4">
                <div className="bg-gray-900/50 border border-gray-800 rounded-xl p-4">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-8 h-8 bg-gradient-to-r from-yellow-500 to-orange-500 rounded-lg flex items-center justify-center text-sm font-bold">5</div>
                    <div>
                      <h4 className="font-semibold">NVIDIA</h4>
                      <div className="text-2xl font-bold text-yellow-400">6.3%</div>
                    </div>
                  </div>
                  <p className="text-xs text-gray-300 mb-2">AI accelerators, data center GPUs, gaming graphics cards</p>
                  <div className="text-xs text-gray-400">Process: 4nm, 5nm, 7nm</div>
                </div>

                <div className="bg-gray-900/50 border border-gray-800 rounded-xl p-4">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-8 h-8 bg-gradient-to-r from-teal-500 to-cyan-500 rounded-lg flex items-center justify-center text-sm font-bold">6</div>
                    <div>
                      <h4 className="font-semibold">MediaTek</h4>
                      <div className="text-2xl font-bold text-teal-400">5.6%</div>
                    </div>
                  </div>
                  <p className="text-xs text-gray-300 mb-2">Smartphone SoCs, WiFi chips, smart TV processors</p>
                  <div className="text-xs text-gray-400">Process: 4nm, 6nm, 7nm</div>
                </div>

                <div className="bg-gray-900/50 border border-gray-800 rounded-xl p-4">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-8 h-8 bg-gradient-to-r from-indigo-500 to-blue-500 rounded-lg flex items-center justify-center text-sm font-bold">7</div>
                    <div>
                      <h4 className="font-semibold">Intel</h4>
                      <div className="text-2xl font-bold text-indigo-400">5.1%</div>
                    </div>
                  </div>
                  <p className="text-xs text-gray-300 mb-2">GPU tiles, chipsets, specialized processors</p>
                  <div className="text-xs text-gray-400">Process: 5nm, 7nm</div>
                </div>

                <div className="bg-gray-900/50 border border-gray-800 rounded-xl p-4">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-8 h-8 bg-gradient-to-r from-pink-500 to-purple-500 rounded-lg flex items-center justify-center text-sm font-bold">8</div>
                    <div>
                      <h4 className="font-semibold">AWS</h4>
                      <div className="text-2xl font-bold text-pink-400">0.95%</div>
                    </div>
                  </div>
                  <p className="text-xs text-gray-300 mb-2">Custom cloud processors, AI inference chips</p>
                  <div className="text-xs text-gray-400">Process: 7nm, 5nm</div>
                </div>
              </div>
            </div>
          </section>

          {/* Customer Relationship Analysis */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold mb-8 flex items-center gap-3">
              <Building2 className="w-8 h-8 text-green-400" />
              Customer Relationship Dynamics
            </h2>

            <div className="grid md:grid-cols-2 gap-6 mb-8">
              <div className="bg-gray-900/50 border border-gray-800 rounded-xl p-6">
                <h3 className="text-xl font-semibold mb-4">Partnership Models</h3>
                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold text-blue-400 mb-2">Technology Co-Development</h4>
                    <p className="text-gray-300 text-sm">Joint development of process technologies and design optimization</p>
                    <div className="text-xs text-gray-400 mt-1">Examples: Apple A-series, NVIDIA H100</div>
                  </div>
                  <div>
                    <h4 className="font-semibold text-green-400 mb-2">Capacity Partnerships</h4>
                    <p className="text-gray-300 text-sm">Long-term capacity commitments and volume guarantees</p>
                    <div className="text-xs text-gray-400 mt-1">Examples: Qualcomm, AMD, MediaTek</div>
                  </div>
                  <div>
                    <h4 className="font-semibold text-purple-400 mb-2">Strategic Alliances</h4>
                    <p className="text-gray-300 text-sm">Exclusive access to leading-edge nodes and technologies</p>
                    <div className="text-xs text-gray-400 mt-1">Examples: Apple 3nm exclusivity</div>
                  </div>
                </div>
              </div>

              <div className="bg-gray-900/50 border border-gray-800 rounded-xl p-6">
                <h3 className="text-xl font-semibold mb-4">Revenue Characteristics</h3>
                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold text-yellow-400 mb-2">Premium Pricing</h4>
                    <p className="text-gray-300 text-sm">Advanced nodes command 2-3x pricing premium</p>
                    <div className="text-xs text-gray-400 mt-1">3nm: ~$20,000/wafer vs 28nm: ~$1,000/wafer</div>
                  </div>
                  <div>
                    <h4 className="font-semibold text-red-400 mb-2">Volume Economics</h4>
                    <p className="text-gray-300 text-sm">Large customers receive volume discounts and priority allocation</p>
                    <div className="text-xs text-gray-400 mt-1">Apple: Estimated 15-20% volume discount</div>
                  </div>
                  <div>
                    <h4 className="font-semibold text-teal-400 mb-2">Technology Access</h4>
                    <p className="text-gray-300 text-sm">Early access to new nodes in exchange for development partnership</p>
                    <div className="text-xs text-gray-400 mt-1">Risk-sharing on new process development</div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Market Impact Analysis */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold mb-8 flex items-center gap-3">
              <Globe className="w-8 h-8 text-purple-400" />
              Market Impact and Dependencies
            </h2>

            <div className="space-y-6">
              <div className="bg-gray-900/50 border border-gray-800 rounded-xl p-6">
                <h3 className="text-xl font-semibold mb-4">Industry Dependencies</h3>
                <div className="grid md:grid-cols-3 gap-6">
                  <div>
                    <h4 className="font-semibold text-blue-400 mb-3">Smartphone Market</h4>
                    <div className="space-y-2">
                      <div className="flex justify-between text-sm">
                        <span>Apple (iPhone)</span>
                        <span className="text-blue-400">~23%</span>
                      </div>
                      <div className="flex justify-between text-sm">
                        <span>Qualcomm (Android)</span>
                        <span className="text-green-400">~9%</span>
                      </div>
                      <div className="flex justify-between text-sm">
                        <span>MediaTek (Android)</span>
                        <span className="text-purple-400">~6%</span>
                      </div>
                      <div className="text-xs text-gray-400 mt-2">Combined: ~38% of TSMC revenue</div>
                    </div>
                  </div>

                  <div>
                    <h4 className="font-semibold text-green-400 mb-3">Data Center/AI</h4>
                    <div className="space-y-2">
                      <div className="flex justify-between text-sm">
                        <span>NVIDIA (GPUs)</span>
                        <span className="text-yellow-400">~6%</span>
                      </div>
                      <div className="flex justify-between text-sm">
                        <span>AMD (CPUs/GPUs)</span>
                        <span className="text-red-400">~8%</span>
                      </div>
                      <div className="flex justify-between text-sm">
                        <span>AWS (Custom)</span>
                        <span className="text-pink-400">~1%</span>
                      </div>
                      <div className="text-xs text-gray-400 mt-2">Combined: ~15% of TSMC revenue</div>
                    </div>
                  </div>

                  <div>
                    <h4 className="font-semibold text-purple-400 mb-3">Infrastructure</h4>
                    <div className="space-y-2">
                      <div className="flex justify-between text-sm">
                        <span>Broadcom</span>
                        <span className="text-purple-400">~7%</span>
                      </div>
                      <div className="flex justify-between text-sm">
                        <span>Intel (Outsourced)</span>
                        <span className="text-indigo-400">~5%</span>
                      </div>
                      <div className="flex justify-between text-sm">
                        <span>Others</span>
                        <span className="text-gray-400">~3%</span>
                      </div>
                      <div className="text-xs text-gray-400 mt-2">Combined: ~15% of TSMC revenue</div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-r from-red-900/20 to-orange-900/20 border border-red-800/30 rounded-xl p-6">
                <h3 className="text-xl font-semibold mb-4">Risk Factors</h3>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-semibold text-red-400 mb-2">Customer Concentration Risk</h4>
                    <ul className="text-sm text-gray-300 space-y-1">
                      <li>• Apple represents 23% of revenue</li>
                      <li>• Top 3 customers = 38% of revenue</li>
                      <li>• High dependency on smartphone market</li>
                      <li>• Cyclical demand patterns</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold text-orange-400 mb-2">Mitigation Strategies</h4>
                    <ul className="text-sm text-gray-300 space-y-1">
                      <li>• Diversification into automotive/IoT</li>
                      <li>• Growing AI/data center segment</li>
                      <li>• Long-term capacity agreements</li>
                      <li>• Technology leadership moat</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Future Outlook */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold mb-8 flex items-center gap-3">
              <TrendingUp className="w-8 h-8 text-blue-400" />
              Future Customer Landscape
            </h2>

            <div className="space-y-6">
              <div className="bg-gray-900/50 border border-gray-800 rounded-xl p-6">
                <h3 className="text-xl font-semibold mb-4">Emerging Customer Segments</h3>
                <div className="grid md:grid-cols-3 gap-6">
                  <div>
                    <h4 className="font-semibold text-blue-400 mb-2">Automotive</h4>
                    <p className="text-xs text-gray-300 mb-2">Self-driving, ADAS, infotainment systems</p>
                    <div className="text-xs text-gray-400">Expected growth: 15-20% CAGR</div>
                  </div>
                  <div>
                    <h4 className="font-semibold text-green-400 mb-2">Edge AI</h4>
                    <p className="text-xs text-gray-300 mb-2">IoT devices, smart cameras, industrial automation</p>
                    <div className="text-xs text-gray-400">Expected growth: 25-30% CAGR</div>
                  </div>
                  <div>
                    <h4 className="font-semibold text-purple-400 mb-2">Custom Silicon</h4>
                    <p className="text-xs text-gray-300 mb-2">Cloud providers, hyperscalers, specialized workloads</p>
                    <div className="text-xs text-gray-400">Expected growth: 20-25% CAGR</div>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-r from-blue-900/20 to-green-900/20 border border-blue-800/30 rounded-xl p-6">
                <h3 className="text-xl font-semibold mb-4">Strategic Implications</h3>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-semibold text-blue-400 mb-2">Customer Evolution</h4>
                    <ul className="text-sm text-gray-300 space-y-1">
                      <li>• More tech companies designing custom chips</li>
                      <li>• Shift from general-purpose to specialized silicon</li>
                      <li>• Increased demand for advanced packaging</li>
                      <li>• Growing importance of AI accelerators</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold text-green-400 mb-2">TSMC Response</h4>
                    <ul className="text-sm text-gray-300 space-y-1">
                      <li>• Expanding advanced packaging capabilities</li>
                      <li>• Investing in specialized process technologies</li>
                      <li>• Building closer customer partnerships</li>
                      <li>• Geographic capacity expansion</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Conclusion */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold mb-6">The Foundation of Digital Innovation</h2>
            <div className="space-y-4 text-gray-300">
              <p>
                TSMC's customer portfolio represents the entire spectrum of modern technology—from the smartphones in our pockets to the AI systems reshaping industries. These partnerships aren't just business relationships; they're the foundation of digital innovation.
              </p>
              <p>
                The concentration of revenue among key customers like Apple, Qualcomm, and AMD reflects both the strength of these relationships and the strategic importance of advanced semiconductor manufacturing. As these companies push the boundaries of what's possible with silicon, TSMC's role as their manufacturing partner becomes increasingly critical.
              </p>
              <p>
                Looking ahead, TSMC's ability to attract and serve new customer segments—from automotive to edge AI—will determine not just the company's growth, but the pace of technological advancement across all industries. In the semiconductor world, TSMC's customers today become tomorrow's technology leaders.
              </p>
            </div>
          </section>

          {/* CTA Section */}
          <div className="bg-gradient-to-r from-blue-900/30 to-purple-900/30 border border-blue-800/30 rounded-xl p-8 text-center">
            <h3 className="text-2xl font-bold mb-4">Validate Your Chips Regardless of Foundry</h3>
            <p className="text-gray-300 mb-6">
              Whether your chips are manufactured by TSMC or other foundries, comprehensive validation ensures they meet performance and reliability requirements. TestFlow's AI-powered platform provides the testing capabilities you need for any semiconductor design.
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
