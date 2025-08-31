'use client'

import { SiteHeader } from "@/components/site-header"
import { ArrowLeft, User, Calendar, Clock, CheckCircle2, ArrowRight, Layers, Building2, Factory, Settings, Cpu, Globe, Target, BarChart3, Zap, Package, TestTube } from 'lucide-react'
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
              <span>Aug 14, 2025</span>
            </div>
            <div className="flex items-center gap-2">
              <Clock className="w-4 h-4" />
              <span>12 min read</span>
            </div>
          </div>
          
          <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent leading-tight">
            8 Layers of the Semiconductor Industry: Inside the $1 Trillion Chip Ecosystem
          </h1>
          
          <p className="text-xl text-gray-300 leading-relaxed">
            From raw materials to final systems, the semiconductor industry is a global relay race where each layer is critical and each player irreplaceable. Discover the 8 essential layers that power our digital world.
          </p>
        </div>

        {/* Featured Image */}
        <div className="relative aspect-[16/9] mb-12 rounded-xl overflow-hidden">
          <Image
            src="https://favikon-medias.s3.eu-west-3.amazonaws.com/m/linkedin_7358834098024476672.jpg"
            alt="8 layers of semiconductor industry - trillion dollar ecosystem breakdown"
            fill
            className="object-cover"
          />
        </div>

        {/* Article Content */}
        <div className="prose prose-invert max-w-none">
          
          {/* Introduction */}
          <div className="mb-12">
            <p className="text-lg text-gray-300 leading-relaxed mb-6">
              The semiconductor industry isn't dominated by a single company—it's a deep, interconnected stack of specialized players, each mastering a critical piece of the chip creation puzzle. From the pure silicon wafers that form the foundation to the complex systems that end up in your smartphone, this $1 trillion ecosystem represents one of humanity's most sophisticated supply chains.
            </p>
            
            <p className="text-lg text-gray-300 leading-relaxed">
              Understanding these 8 layers is crucial for anyone working in technology, as disruption in any single layer can ripple across the entire global tech ecosystem. Let's explore how this intricate machine works.
            </p>
          </div>

          {/* The 8-Layer Pyramid */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold mb-8 flex items-center gap-3">
              <Layers className="w-8 h-8 text-blue-400" />
              The Semiconductor Industry Stack
            </h2>

            <div className="space-y-6">
              {/* Layer 8 - System Companies */}
              <div className="bg-gradient-to-r from-purple-900/30 to-pink-900/30 border border-purple-800/30 rounded-xl p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg flex items-center justify-center text-lg font-bold">8</div>
                  <div>
                    <h3 className="text-xl font-semibold">System Companies</h3>
                    <p className="text-gray-400">Final products you use daily</p>
                  </div>
                </div>
                <div className="grid md:grid-cols-4 gap-4 mb-4">
                  <div className="bg-purple-900/20 border border-purple-800/30 rounded-lg p-3 text-center">
                    <h4 className="font-semibold text-sm">Apple</h4>
                    <p className="text-xs text-gray-300">iPhones, Macs, iPads</p>
                  </div>
                  <div className="bg-purple-900/20 border border-purple-800/30 rounded-lg p-3 text-center">
                    <h4 className="font-semibold text-sm">Dell</h4>
                    <p className="text-xs text-gray-300">PCs, Servers</p>
                  </div>
                  <div className="bg-purple-900/20 border border-purple-800/30 rounded-lg p-3 text-center">
                    <h4 className="font-semibold text-sm">Sony</h4>
                    <p className="text-xs text-gray-300">PlayStation, TVs</p>
                  </div>
                  <div className="bg-purple-900/20 border border-purple-800/30 rounded-lg p-3 text-center">
                    <h4 className="font-semibold text-sm">Cisco</h4>
                    <p className="text-xs text-gray-300">Networking equipment</p>
                  </div>
                </div>
                <p className="text-gray-300 text-sm">
                  These companies integrate chips into complete systems that consumers and businesses use. They drive demand for semiconductors and define performance requirements.
                </p>
              </div>

              {/* Layer 7 - Packaging & Testing */}
              <div className="bg-gradient-to-r from-orange-900/30 to-red-900/30 border border-orange-800/30 rounded-xl p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 bg-gradient-to-r from-orange-500 to-red-500 rounded-lg flex items-center justify-center text-lg font-bold">7</div>
                  <div>
                    <h3 className="text-xl font-semibold">Packaging & Testing (OSAT)</h3>
                    <p className="text-gray-400">Connecting dies to the real world</p>
                  </div>
                </div>
                <div className="grid md:grid-cols-4 gap-4 mb-4">
                  <div className="bg-orange-900/20 border border-orange-800/30 rounded-lg p-3 text-center">
                    <h4 className="font-semibold text-sm">ASE Group</h4>
                    <p className="text-xs text-gray-300">World's largest OSAT</p>
                  </div>
                  <div className="bg-orange-900/20 border border-orange-800/30 rounded-lg p-3 text-center">
                    <h4 className="font-semibold text-sm">Amkor</h4>
                    <p className="text-xs text-gray-300">Advanced packaging</p>
                  </div>
                  <div className="bg-orange-900/20 border border-orange-800/30 rounded-lg p-3 text-center">
                    <h4 className="font-semibold text-sm">JCET</h4>
                    <p className="text-xs text-gray-300">Chinese OSAT leader</p>
                  </div>
                  <div className="bg-orange-900/20 border border-orange-800/30 rounded-lg p-3 text-center">
                    <h4 className="font-semibold text-sm">SPIL</h4>
                    <p className="text-xs text-gray-300">Memory packaging</p>
                  </div>
                </div>
                <p className="text-gray-300 text-sm">
                  OSATs handle the final assembly, packaging, and testing of semiconductor chips before they ship to customers. They ensure chips work correctly and can survive real-world conditions.
                </p>
              </div>

              {/* Layer 6 - Equipment */}
              <div className="bg-gradient-to-r from-yellow-900/30 to-orange-900/30 border border-yellow-800/30 rounded-xl p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 bg-gradient-to-r from-yellow-500 to-orange-500 rounded-lg flex items-center justify-center text-lg font-bold">6</div>
                  <div>
                    <h3 className="text-xl font-semibold">Equipment Vendors</h3>
                    <p className="text-gray-400">Machines that print at nanometer scale</p>
                  </div>
                </div>
                <div className="grid md:grid-cols-4 gap-4 mb-4">
                  <div className="bg-yellow-900/20 border border-yellow-800/30 rounded-lg p-3 text-center">
                    <h4 className="font-semibold text-sm">ASML</h4>
                    <p className="text-xs text-gray-300">EUV lithography</p>
                  </div>
                  <div className="bg-yellow-900/20 border border-yellow-800/30 rounded-lg p-3 text-center">
                    <h4 className="font-semibold text-sm">Applied Materials</h4>
                    <p className="text-xs text-gray-300">Deposition, etch</p>
                  </div>
                  <div className="bg-yellow-900/20 border border-yellow-800/30 rounded-lg p-3 text-center">
                    <h4 className="font-semibold text-sm">Lam Research</h4>
                    <p className="text-xs text-gray-300">Plasma etching</p>
                  </div>
                  <div className="bg-yellow-900/20 border border-yellow-800/30 rounded-lg p-3 text-center">
                    <h4 className="font-semibold text-sm">KLA</h4>
                    <p className="text-xs text-gray-300">Process control</p>
                  </div>
                </div>
                <p className="text-gray-300 text-sm">
                  These companies build the ultra-complex machines that fabricate chips. ASML's EUV scanners cost $200M each and are essential for advanced nodes.
                </p>
              </div>

              {/* Layer 5 - Foundries */}
              <div className="bg-gradient-to-r from-green-900/30 to-teal-900/30 border border-green-800/30 rounded-xl p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 bg-gradient-to-r from-green-500 to-teal-500 rounded-lg flex items-center justify-center text-lg font-bold">5</div>
                  <div>
                    <h3 className="text-xl font-semibold">Foundries & IDMs</h3>
                    <p className="text-gray-400">The most complex factories in the world</p>
                  </div>
                </div>
                <div className="grid md:grid-cols-4 gap-4 mb-4">
                  <div className="bg-green-900/20 border border-green-800/30 rounded-lg p-3 text-center">
                    <h4 className="font-semibold text-sm">TSMC</h4>
                    <p className="text-xs text-gray-300">62% foundry share</p>
                  </div>
                  <div className="bg-green-900/20 border border-green-800/30 rounded-lg p-3 text-center">
                    <h4 className="font-semibold text-sm">Samsung</h4>
                    <p className="text-xs text-gray-300">Memory + foundry</p>
                  </div>
                  <div className="bg-green-900/20 border border-green-800/30 rounded-lg p-3 text-center">
                    <h4 className="font-semibold text-sm">GlobalFoundries</h4>
                    <p className="text-xs text-gray-300">Mature nodes</p>
                  </div>
                  <div className="bg-green-900/20 border border-green-800/30 rounded-lg p-3 text-center">
                    <h4 className="font-semibold text-sm">Intel</h4>
                    <p className="text-xs text-gray-300">IDM + foundry</p>
                  </div>
                </div>
                <p className="text-gray-300 text-sm">
                  Foundries manufacture chips designed by other companies, while IDMs design and manufacture their own. These fabs cost $20B+ and take 3-5 years to build.
                </p>
              </div>

              {/* Layer 4 - EDA Tools */}
              <div className="bg-gradient-to-r from-blue-900/30 to-purple-900/30 border border-blue-800/30 rounded-xl p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg flex items-center justify-center text-lg font-bold">4</div>
                  <div>
                    <h3 className="text-xl font-semibold">EDA Tools</h3>
                    <p className="text-gray-400">The invisible engines of chip creation</p>
                  </div>
                </div>
                <div className="grid md:grid-cols-4 gap-4 mb-4">
                  <div className="bg-blue-900/20 border border-blue-800/30 rounded-lg p-3 text-center">
                    <h4 className="font-semibold text-sm">Synopsys</h4>
                    <p className="text-xs text-gray-300">Design, verification</p>
                  </div>
                  <div className="bg-blue-900/20 border border-blue-800/30 rounded-lg p-3 text-center">
                    <h4 className="font-semibold text-sm">Cadence</h4>
                    <p className="text-xs text-gray-300">Analog, digital</p>
                  </div>
                  <div className="bg-blue-900/20 border border-blue-800/30 rounded-lg p-3 text-center">
                    <h4 className="font-semibold text-sm">Siemens EDA</h4>
                    <p className="text-xs text-gray-300">Verification, test</p>
                  </div>
                  <div className="bg-blue-900/20 border border-blue-800/30 rounded-lg p-3 text-center">
                    <h4 className="font-semibold text-sm">TestFlow</h4>
                    <p className="text-xs text-gray-300">AI validation</p>
                  </div>
                </div>
                <p className="text-gray-300 text-sm">
                  EDA tools enable engineers to design, simulate, and verify billion-transistor chips. Without these software platforms, modern chip design would be impossible.
                </p>
              </div>

              {/* Layer 3 - IP */}
              <div className="bg-gradient-to-r from-indigo-900/30 to-blue-900/30 border border-indigo-800/30 rounded-xl p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 bg-gradient-to-r from-indigo-500 to-blue-500 rounded-lg flex items-center justify-center text-lg font-bold">3</div>
                  <div>
                    <h3 className="text-xl font-semibold">IP Cores</h3>
                    <p className="text-gray-400">Reusable logic blocks and processor cores</p>
                  </div>
                </div>
                <div className="grid md:grid-cols-4 gap-4 mb-4">
                  <div className="bg-indigo-900/20 border border-indigo-800/30 rounded-lg p-3 text-center">
                    <h4 className="font-semibold text-sm">Arm</h4>
                    <p className="text-xs text-gray-300">CPU architectures</p>
                  </div>
                  <div className="bg-indigo-900/20 border border-indigo-800/30 rounded-lg p-3 text-center">
                    <h4 className="font-semibold text-sm">Imagination</h4>
                    <p className="text-xs text-gray-300">GPU cores</p>
                  </div>
                  <div className="bg-indigo-900/20 border border-indigo-800/30 rounded-lg p-3 text-center">
                    <h4 className="font-semibold text-sm">Rambus</h4>
                    <p className="text-xs text-gray-300">Memory interfaces</p>
                  </div>
                  <div className="bg-indigo-900/20 border border-indigo-800/30 rounded-lg p-3 text-center">
                    <h4 className="font-semibold text-sm">CEVA</h4>
                    <p className="text-xs text-gray-300">DSP cores</p>
                  </div>
                </div>
                <p className="text-gray-300 text-sm">
                  IP companies create reusable building blocks that chip designers license and integrate into their SoCs. Arm's CPU cores power 95% of smartphones.
                </p>
              </div>

              {/* Layer 2 - Fabless Design */}
              <div className="bg-gradient-to-r from-teal-900/30 to-green-900/30 border border-teal-800/30 rounded-xl p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 bg-gradient-to-r from-teal-500 to-green-500 rounded-lg flex items-center justify-center text-lg font-bold">2</div>
                  <div>
                    <h3 className="text-xl font-semibold">Fabless Design Companies</h3>
                    <p className="text-gray-400">The brains behind the architecture</p>
                  </div>
                </div>
                <div className="grid md:grid-cols-4 gap-4 mb-4">
                  <div className="bg-teal-900/20 border border-teal-800/30 rounded-lg p-3 text-center">
                    <h4 className="font-semibold text-sm">Qualcomm</h4>
                    <p className="text-xs text-gray-300">Mobile SoCs</p>
                  </div>
                  <div className="bg-teal-900/20 border border-teal-800/30 rounded-lg p-3 text-center">
                    <h4 className="font-semibold text-sm">NVIDIA</h4>
                    <p className="text-xs text-gray-300">GPUs, AI chips</p>
                  </div>
                  <div className="bg-teal-900/20 border border-teal-800/30 rounded-lg p-3 text-center">
                    <h4 className="font-semibold text-sm">AMD</h4>
                    <p className="text-xs text-gray-300">CPUs, GPUs</p>
                  </div>
                  <div className="bg-teal-900/20 border border-teal-800/30 rounded-lg p-3 text-center">
                    <h4 className="font-semibold text-sm">Broadcom</h4>
                    <p className="text-xs text-gray-300">Networking, RF</p>
                  </div>
                </div>
                <p className="text-gray-300 text-sm">
                  Fabless companies focus purely on chip design and outsource manufacturing to foundries. This model enables innovation without massive capital investment.
                </p>
              </div>

              {/* Layer 1 - Materials */}
              <div className="bg-gradient-to-r from-gray-800/30 to-gray-700/30 border border-gray-700/30 rounded-xl p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 bg-gradient-to-r from-gray-500 to-gray-400 rounded-lg flex items-center justify-center text-lg font-bold">1</div>
                  <div>
                    <h3 className="text-xl font-semibold">Raw Materials</h3>
                    <p className="text-gray-400">Where it all begins—chemicals, wafers, gases</p>
                  </div>
                </div>
                <div className="grid md:grid-cols-4 gap-4 mb-4">
                  <div className="bg-gray-800/20 border border-gray-700/30 rounded-lg p-3 text-center">
                    <h4 className="font-semibold text-sm">Shin-Etsu</h4>
                    <p className="text-xs text-gray-300">Silicon wafers</p>
                  </div>
                  <div className="bg-gray-800/20 border border-gray-700/30 rounded-lg p-3 text-center">
                    <h4 className="font-semibold text-sm">BASF</h4>
                    <p className="text-xs text-gray-300">Chemicals</p>
                  </div>
                  <div className="bg-gray-800/20 border border-gray-700/30 rounded-lg p-3 text-center">
                    <h4 className="font-semibold text-sm">Air Liquide</h4>
                    <p className="text-xs text-gray-300">Process gases</p>
                  </div>
                  <div className="bg-gray-800/20 border border-gray-700/30 rounded-lg p-3 text-center">
                    <h4 className="font-semibold text-sm">Sumco</h4>
                    <p className="text-xs text-gray-300">Silicon substrates</p>
                  </div>
                </div>
                <p className="text-gray-300 text-sm">
                  Materials companies provide the ultra-pure silicon wafers, chemicals, and gases that make chip manufacturing possible. Quality here determines yield downstream.
                </p>
              </div>
            </div>
          </section>

          {/* Industry Interdependencies */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold mb-8 flex items-center gap-3">
              <Globe className="w-8 h-8 text-green-400" />
              Critical Interdependencies
            </h2>

            <div className="bg-gray-900/50 border border-gray-800 rounded-xl p-6 mb-8">
              <h3 className="text-xl font-semibold mb-4">How the Layers Connect</h3>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-green-400 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-sm">Material Quality → Chip Yield</h4>
                    <p className="text-gray-300 text-xs">Ultra-pure silicon wafers and chemicals directly impact manufacturing yield rates</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-blue-400 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-sm">EDA Tools → Design Complexity</h4>
                    <p className="text-gray-300 text-xs">Advanced software enables billion-transistor designs that would be impossible manually</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-purple-400 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-sm">Equipment Innovation → Process Nodes</h4>
                    <p className="text-gray-300 text-xs">ASML's EUV technology enables 7nm, 5nm, and 3nm manufacturing</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-yellow-400 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-sm">System Demand → Innovation Cycles</h4>
                    <p className="text-gray-300 text-xs">Consumer electronics drive requirements that cascade through all layers</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-r from-red-900/20 to-orange-900/20 border border-red-800/30 rounded-xl p-6">
              <h3 className="text-xl font-semibold mb-4">Single Points of Failure</h3>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold text-red-400 mb-2">Critical Bottlenecks</h4>
                  <ul className="text-sm text-gray-300 space-y-1">
                    <li>• ASML: Only supplier of EUV lithography</li>
                    <li>• TSMC: 62% of foundry capacity</li>
                    <li>• Taiwan: 63% of global chip production</li>
                    <li>• Shin-Etsu: Major silicon wafer supplier</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-orange-400 mb-2">Risk Mitigation</h4>
                  <ul className="text-sm text-gray-300 space-y-1">
                    <li>• Geographic diversification efforts</li>
                    <li>• Strategic inventory management</li>
                    <li>• Alternative supplier development</li>
                    <li>• Government policy support</li>
                  </ul>
                </div>
              </div>
            </div>
          </section>

          {/* Economic Impact */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold mb-8 flex items-center gap-3">
              <BarChart3 className="w-8 h-8 text-purple-400" />
              Economic Impact by Layer
            </h2>

            <div className="bg-gray-900/50 border border-gray-800 rounded-xl p-6 mb-8">
              <h3 className="text-xl font-semibold mb-4">Market Size by Layer (2024)</h3>
              <div className="space-y-3">
                <div className="flex justify-between items-center p-3 bg-purple-900/20 border border-purple-800/30 rounded-lg">
                  <span className="font-semibold">System Companies</span>
                  <span className="text-purple-400 font-bold">$3.2T</span>
                </div>
                <div className="flex justify-between items-center p-3 bg-green-900/20 border border-green-800/30 rounded-lg">
                  <span className="font-semibold">Foundries & IDMs</span>
                  <span className="text-green-400 font-bold">$574B</span>
                </div>
                <div className="flex justify-between items-center p-3 bg-teal-900/20 border border-teal-800/30 rounded-lg">
                  <span className="font-semibold">Fabless Design</span>
                  <span className="text-teal-400 font-bold">$385B</span>
                </div>
                <div className="flex justify-between items-center p-3 bg-yellow-900/20 border border-yellow-800/30 rounded-lg">
                  <span className="font-semibold">Equipment</span>
                  <span className="text-yellow-400 font-bold">$109B</span>
                </div>
                <div className="flex justify-between items-center p-3 bg-orange-900/20 border border-orange-800/30 rounded-lg">
                  <span className="font-semibold">OSAT</span>
                  <span className="text-orange-400 font-bold">$35B</span>
                </div>
                <div className="flex justify-between items-center p-3 bg-blue-900/20 border border-blue-800/30 rounded-lg">
                  <span className="font-semibold">EDA Tools</span>
                  <span className="text-blue-400 font-bold">$15B</span>
                </div>
                <div className="flex justify-between items-center p-3 bg-indigo-900/20 border border-indigo-800/30 rounded-lg">
                  <span className="font-semibold">IP Licensing</span>
                  <span className="text-indigo-400 font-bold">$8B</span>
                </div>
                <div className="flex justify-between items-center p-3 bg-gray-800/20 border border-gray-700/30 rounded-lg">
                  <span className="font-semibold">Materials</span>
                  <span className="text-gray-400 font-bold">$28B</span>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-r from-blue-900/20 to-purple-900/20 border border-blue-800/30 rounded-xl p-6">
              <h3 className="text-xl font-semibold mb-4">Growth Trends</h3>
              <div className="grid md:grid-cols-3 gap-6 text-center">
                <div>
                  <div className="text-3xl font-bold text-blue-400 mb-2">15%</div>
                  <p className="text-sm text-gray-300">AI/ML driving system demand</p>
                </div>
                <div>
                  <div className="text-3xl font-bold text-green-400 mb-2">12%</div>
                  <p className="text-sm text-gray-300">Equipment CAGR (2024-2030)</p>
                </div>
                <div>
                  <div className="text-3xl font-bold text-purple-400 mb-2">8%</div>
                  <p className="text-sm text-gray-300">Overall semiconductor CAGR</p>
                </div>
              </div>
            </div>
          </section>

          {/* Future Evolution */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold mb-8 flex items-center gap-3">
              <Target className="w-8 h-8 text-blue-400" />
              Future Evolution of the Stack
            </h2>

            <div className="space-y-6">
              <div className="bg-gray-900/50 border border-gray-800 rounded-xl p-6">
                <h3 className="text-xl font-semibold mb-4">Emerging Trends</h3>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-semibold text-blue-400 mb-3">New Layer: AI Validation</h4>
                    <p className="text-gray-300 text-sm mb-3">
                      AI-powered validation and testing platforms are becoming a distinct layer, automating complex chip validation processes.
                    </p>
                    <div className="text-xs text-gray-400">
                      Companies: TestFlow, Synopsys AI, Cadence JedAI
                    </div>
                  </div>
                  <div>
                    <h4 className="font-semibold text-green-400 mb-3">Chiplet Ecosystem</h4>
                    <p className="text-gray-300 text-sm mb-3">
                      Modular chip architectures are creating new players focused on chiplet design and integration.
                    </p>
                    <div className="text-xs text-gray-400">
                      Examples: AMD's chiplet strategy, Intel's Foveros
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-gray-900/50 border border-gray-800 rounded-xl p-6">
                <h3 className="text-xl font-semibold mb-4">Consolidation vs. Specialization</h3>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-semibold text-red-400 mb-2">Consolidation Trends</h4>
                    <ul className="text-sm text-gray-300 space-y-1">
                      <li>• Foundry market concentrating in TSMC</li>
                      <li>• EDA dominated by 3 major players</li>
                      <li>• Equipment consolidation around leaders</li>
                      <li>• Vertical integration by system companies</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold text-green-400 mb-2">New Specializations</h4>
                    <ul className="text-sm text-gray-300 space-y-1">
                      <li>• AI-specific chip architectures</li>
                      <li>• Edge computing optimizations</li>
                      <li>• Quantum-classical hybrid systems</li>
                      <li>• Sustainability-focused processes</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Conclusion */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold mb-6">The Intricate Machine of Innovation</h2>
            <div className="space-y-4 text-gray-300">
              <p>
                The semiconductor industry's 8-layer structure represents one of humanity's most complex and sophisticated supply chains. Each layer depends on the others, creating a delicate ecosystem where innovation in one area can transform entire industries.
              </p>
              <p>
                Understanding these interdependencies is crucial for anyone working in technology. A disruption in materials can affect chip yields; advances in EDA tools enable new architectures; equipment breakthroughs unlock smaller process nodes; and system demand drives innovation throughout the stack.
              </p>
              <p>
                As we move toward an AI-driven future, this 8-layer structure continues to evolve, with new specializations emerging and traditional boundaries blurring. The companies that master multiple layers—or create entirely new ones—will shape the next chapter of technological progress.
              </p>
            </div>
          </section>

          {/* CTA Section */}
          <div className="bg-gradient-to-r from-blue-900/30 to-purple-900/30 border border-blue-800/30 rounded-xl p-8 text-center">
            <h3 className="text-2xl font-bold mb-4">Optimize Your Layer in the Stack</h3>
            <p className="text-gray-300 mb-6">
              Whether you're designing chips, manufacturing them, or validating their performance, TestFlow's AI-powered platform helps optimize your role in the semiconductor ecosystem. Join the companies revolutionizing chip validation.
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
