'use client'

import { SiteHeader } from "@/components/site-header"
import { ArrowLeft, User, Calendar, Clock, CheckCircle2, ArrowRight, Crown, BarChart3, Building2, TrendingUp, Globe, Target, Factory, Zap, Activity } from 'lucide-react'
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
              <span>Aug 19, 2025</span>
            </div>
            <div className="flex items-center gap-2">
              <Clock className="w-4 h-4" />
              <span>13 min read</span>
            </div>
          </div>
          
          <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent leading-tight">
            Top 8 Semiconductor Companies by Revenue: Who's Really Winning the Chip Race
          </h1>
          
          <p className="text-xl text-gray-300 leading-relaxed">
            Revenue tells the real story of semiconductor dominance. From Samsung's memory empire to NVIDIA's AI revolution, discover the 8 largest chip companies by revenue and the diverse strategies driving their success in 2025.
          </p>
        </div>

        {/* Featured Image */}
        <div className="relative aspect-[16/9] mb-12 rounded-xl overflow-hidden">
          <Image
            src="https://favikon-medias.s3.eu-west-3.amazonaws.com/m/linkedin_7355206975812448257.jpg"
            alt="Top 8 semiconductor companies by revenue ranking 2025 - chip industry leaders"
            fill
            className="object-cover"
          />
        </div>

        {/* Article Content */}
        <div className="prose prose-invert max-w-none">
          
          {/* Introduction */}
          <div className="mb-12">
            <p className="text-lg text-gray-300 leading-relaxed mb-6">
              While market capitalization captures investor sentiment and future expectations, revenue reveals the true scale and current dominance of semiconductor companies. The top 8 semiconductor companies by revenue represent diverse strategies, from Samsung's memory dominance to NVIDIA's AI acceleration revolution.
            </p>
            
            <p className="text-lg text-gray-300 leading-relaxed">
              These revenue leaders don't just sell chips—they shape the entire technology ecosystem. Their success stories reveal the different paths to semiconductor leadership and the strategic choices that determine who wins in the global chip race.
            </p>
          </div>

          {/* Revenue Rankings Overview */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold mb-8 flex items-center gap-3">
              <Crown className="w-8 h-8 text-yellow-400" />
              The Revenue Champions
            </h2>

            <div className="bg-gray-900/50 border border-gray-800 rounded-xl p-6 mb-8">
              <h3 className="text-xl font-semibold mb-4">2024 Revenue Rankings</h3>
              <div className="space-y-4">
                <div className="flex items-center justify-between p-4 bg-gradient-to-r from-yellow-900/30 to-orange-900/30 border border-yellow-800/30 rounded-lg">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-gradient-to-r from-yellow-500 to-orange-500 rounded-lg flex items-center justify-center text-lg font-bold">1</div>
                    <div>
                      <h4 className="text-lg font-semibold">Samsung</h4>
                      <p className="text-gray-400 text-sm">Memory & Logic Leader</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="text-2xl font-bold text-yellow-400">$219B</div>
                    <div className="text-sm text-gray-400">Total semiconductor revenue</div>
                  </div>
                </div>

                <div className="flex items-center justify-between p-4 bg-gradient-to-r from-green-900/30 to-blue-900/30 border border-green-800/30 rounded-lg">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-gradient-to-r from-green-500 to-blue-500 rounded-lg flex items-center justify-center text-lg font-bold">2</div>
                    <div>
                      <h4 className="text-lg font-semibold">NVIDIA</h4>
                      <p className="text-gray-400 text-sm">AI & GPU Powerhouse</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="text-2xl font-bold text-green-400">$149B</div>
                    <div className="text-sm text-gray-400">Riding the AI wave</div>
                  </div>
                </div>

                <div className="flex items-center justify-between p-3 bg-gray-800/30 border border-gray-700/30 rounded-lg">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center text-sm font-bold">3</div>
                    <span className="font-semibold">TSMC - $88B</span>
                  </div>
                  <span className="text-blue-400 text-sm">World's most advanced foundry</span>
                </div>

                <div className="flex items-center justify-between p-3 bg-gray-800/30 border border-gray-700/30 rounded-lg">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 bg-purple-600 rounded-lg flex items-center justify-center text-sm font-bold">4</div>
                    <span className="font-semibold">Broadcom - $57B</span>
                  </div>
                  <span className="text-purple-400 text-sm">Silent infrastructure giant</span>
                </div>

                <div className="flex items-center justify-between p-3 bg-gray-800/30 border border-gray-700/30 rounded-lg">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 bg-indigo-600 rounded-lg flex items-center justify-center text-sm font-bold">5</div>
                    <span className="font-semibold">Intel - $53B</span>
                  </div>
                  <span className="text-indigo-400 text-sm">The comeback story</span>
                </div>

                <div className="flex items-center justify-between p-3 bg-gray-800/30 border border-gray-700/30 rounded-lg">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 bg-teal-600 rounded-lg flex items-center justify-center text-sm font-bold">6</div>
                    <span className="font-semibold">SK Hynix - $51B</span>
                  </div>
                  <span className="text-teal-400 text-sm">Memory specialist</span>
                </div>

                <div className="flex items-center justify-between p-3 bg-gray-800/30 border border-gray-700/30 rounded-lg">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 bg-red-600 rounded-lg flex items-center justify-center text-sm font-bold">7</div>
                    <span className="font-semibold">Qualcomm - $42B</span>
                  </div>
                  <span className="text-red-400 text-sm">Mobile chip leader</span>
                </div>

                <div className="flex items-center justify-between p-3 bg-gray-800/30 border border-gray-700/30 rounded-lg">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 bg-orange-600 rounded-lg flex items-center justify-center text-sm font-bold">8</div>
                    <span className="font-semibold">Micron - $34B</span>
                  </div>
                  <span className="text-orange-400 text-sm">Memory powerhouse</span>
                </div>
              </div>
            </div>
          </section>

          {/* Samsung: The Revenue King */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold mb-8 flex items-center gap-3">
              <Building2 className="w-8 h-8 text-yellow-400" />
              Samsung: The Undisputed Revenue Leader
            </h2>

            <div className="bg-gray-900/50 border border-gray-800 rounded-xl p-6 mb-6">
              <h3 className="text-xl font-semibold mb-4">$219B: How Samsung Dominates</h3>
              <p className="text-gray-300 mb-4">
                Samsung's semiconductor revenue leadership stems from its unique position as both a memory giant and a logic competitor, combined with massive vertical integration across the entire technology stack.
              </p>
              
              <div className="grid md:grid-cols-3 gap-6">
                <div className="bg-yellow-900/20 border border-yellow-800/30 rounded-lg p-4">
                  <h4 className="font-semibold text-yellow-400 mb-2">Memory Dominance</h4>
                  <ul className="text-xs text-gray-300 space-y-1">
                    <li>• 45% of global DRAM market</li>
                    <li>• 35% of global NAND flash market</li>
                    <li>• Leading HBM supplier for AI</li>
                    <li>• Automotive memory growth</li>
                  </ul>
                </div>
                <div className="bg-blue-900/20 border border-blue-800/30 rounded-lg p-4">
                  <h4 className="font-semibold text-blue-400 mb-2">Logic & Foundry</h4>
                  <ul className="text-xs text-gray-300 space-y-1">
                    <li>• Exynos mobile processors</li>
                    <li>• Advanced foundry services</li>
                    <li>• 3nm process technology</li>
                    <li>• Custom silicon for hyperscalers</li>
                  </ul>
                </div>
                <div className="bg-green-900/20 border border-green-800/30 rounded-lg p-4">
                  <h4 className="font-semibold text-green-400 mb-2">Vertical Integration</h4>
                  <ul className="text-xs text-gray-300 space-y-1">
                    <li>• Smartphone integration</li>
                    <li>• Display and semiconductor synergy</li>
                    <li>• Internal consumption benefits</li>
                    <li>• Technology transfer advantages</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-r from-yellow-900/20 to-orange-900/20 border border-yellow-800/30 rounded-xl p-6">
              <h3 className="text-xl font-semibold mb-4">Revenue Breakdown</h3>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold text-yellow-400 mb-2">By Product Category</h4>
                  <ul className="text-sm text-gray-300 space-y-1">
                    <li>• Memory (DRAM + NAND): ~$140B (64%)</li>
                    <li>• System LSI: ~$45B (21%)</li>
                    <li>• Foundry Services: ~$20B (9%)</li>
                    <li>• Other semiconductors: ~$14B (6%)</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-orange-400 mb-2">Strategic Advantages</h4>
                  <ul className="text-sm text-gray-300 space-y-1">
                    <li>• Massive R&D investment ($22B annually)</li>
                    <li>• Leading-edge manufacturing</li>
                    <li>• Diversified customer base</li>
                    <li>• Technology leadership in memory</li>
                  </ul>
                </div>
              </div>
            </div>
          </section>

          {/* NVIDIA: The AI Revolution */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold mb-8 flex items-center gap-3">
              <TrendingUp className="w-8 h-8 text-green-400" />
              NVIDIA: Riding the AI Wave to $149B
            </h2>

            <div className="bg-gray-900/50 border border-gray-800 rounded-xl p-6 mb-6">
              <h3 className="text-xl font-semibold mb-4">From Gaming to AI Dominance</h3>
              <p className="text-gray-300 mb-4">
                NVIDIA's transformation from a gaming GPU company to the leader of the AI revolution represents one of the most successful pivots in semiconductor history. Their revenue growth has been nothing short of extraordinary.
              </p>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold text-green-400 mb-3">Revenue Growth Story</h4>
                  <div className="space-y-3">
                    <div className="flex justify-between items-center">
                      <span>2019 Revenue</span>
                      <span className="text-gray-400">$10.9B</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span>2022 Revenue</span>
                      <span className="text-blue-400">$27.0B</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span>2024 Revenue</span>
                      <span className="text-green-400 font-bold">$149B</span>
                    </div>
                    <div className="text-sm text-green-400 font-semibold">
                      1,267% growth in 5 years
                    </div>
                  </div>
                </div>
                <div>
                  <h4 className="font-semibold text-blue-400 mb-3">AI Market Drivers</h4>
                  <ul className="text-sm text-gray-300 space-y-2">
                    <li>• ChatGPT and LLM training demand</li>
                    <li>• Data center AI acceleration</li>
                    <li>• Cloud provider GPU adoption</li>
                    <li>• Enterprise AI inference needs</li>
                    <li>• Autonomous vehicle development</li>
                    <li>• Scientific computing applications</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-r from-green-900/20 to-blue-900/20 border border-green-800/30 rounded-xl p-6">
              <h3 className="text-xl font-semibold mb-4">Product Portfolio Success</h3>
              <div className="grid md:grid-cols-3 gap-4">
                <div className="bg-green-900/20 border border-green-800/30 rounded-lg p-3 text-center">
                  <h4 className="font-semibold text-green-400 mb-1">Data Center</h4>
                  <div className="text-2xl font-bold text-green-400">$98B</div>
                  <p className="text-xs text-gray-300">H100, A100 GPUs</p>
                </div>
                <div className="bg-blue-900/20 border border-blue-800/30 rounded-lg p-3 text-center">
                  <h4 className="font-semibold text-blue-400 mb-1">Gaming</h4>
                  <div className="text-2xl font-bold text-blue-400">$28B</div>
                  <p className="text-xs text-gray-300">GeForce RTX series</p>
                </div>
                <div className="bg-purple-900/20 border border-purple-800/30 rounded-lg p-3 text-center">
                  <h4 className="font-semibold text-purple-400 mb-1">Professional</h4>
                  <div className="text-2xl font-bold text-purple-400">$15B</div>
                  <p className="text-xs text-gray-300">Automotive, Omniverse</p>
                </div>
              </div>
            </div>
          </section>

          {/* The Manufacturing Giants */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold mb-8 flex items-center gap-3">
              <Factory className="w-8 h-8 text-blue-400" />
              The Manufacturing and Infrastructure Leaders
            </h2>

            <div className="space-y-6">
              {/* TSMC */}
              <div className="bg-gray-900/50 border border-gray-800 rounded-xl p-6">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center text-lg font-bold">3</div>
                    <div>
                      <h3 className="text-xl font-semibold">TSMC - $88B</h3>
                      <p className="text-gray-400">The World's Most Advanced Foundry</p>
                    </div>
                  </div>
                </div>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-semibold text-blue-400 mb-2">Market Position</h4>
                    <ul className="text-sm text-gray-300 space-y-1">
                      <li>• 62% of global foundry market share</li>
                      <li>• 92% of advanced node production</li>
                      <li>• Exclusive 3nm mass production</li>
                      <li>• Apple, NVIDIA, AMD dependency</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold text-green-400 mb-2">Technology Leadership</h4>
                    <ul className="text-sm text-gray-300 space-y-1">
                      <li>• Leading EUV lithography adoption</li>
                      <li>• 2nm development on track</li>
                      <li>• Advanced packaging capabilities</li>
                      <li>• Highest manufacturing yields</li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Broadcom */}
              <div className="bg-gray-900/50 border border-gray-800 rounded-xl p-6">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-purple-600 rounded-lg flex items-center justify-center text-lg font-bold">4</div>
                    <div>
                      <h3 className="text-xl font-semibold">Broadcom - $57B</h3>
                      <p className="text-gray-400">The Silent Infrastructure Giant</p>
                    </div>
                  </div>
                </div>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-semibold text-purple-400 mb-2">Product Portfolio</h4>
                    <ul className="text-sm text-gray-300 space-y-1">
                      <li>• WiFi and Bluetooth chips</li>
                      <li>• Networking ASICs and switches</li>
                      <li>• Storage controllers and adapters</li>
                      <li>• RF front-end modules</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold text-yellow-400 mb-2">Market Strategy</h4>
                    <ul className="text-sm text-gray-300 space-y-1">
                      <li>• Apple partnership (wireless chips)</li>
                      <li>• Enterprise networking dominance</li>
                      <li>• Consistent high margins</li>
                      <li>• Strategic acquisitions</li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Intel */}
              <div className="bg-gray-900/50 border border-gray-800 rounded-xl p-6">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-indigo-600 rounded-lg flex items-center justify-center text-lg font-bold">5</div>
                    <div>
                      <h3 className="text-xl font-semibold">Intel - $53B</h3>
                      <p className="text-gray-400">The Comeback Story</p>
                    </div>
                  </div>
                </div>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-semibold text-indigo-400 mb-2">Challenges</h4>
                    <ul className="text-sm text-gray-300 space-y-1">
                      <li>• Lost manufacturing leadership</li>
                      <li>• Market share decline in CPUs</li>
                      <li>• Mobile market failure</li>
                      <li>• Competition from AMD, ARM</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold text-green-400 mb-2">Turnaround Strategy</h4>
                    <ul className="text-sm text-gray-300 space-y-1">
                      <li>• Intel Foundry Services expansion</li>
                      <li>• AI accelerator development</li>
                      <li>• Advanced packaging focus</li>
                      <li>• Government support (CHIPS Act)</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Memory Specialists */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold mb-8 flex items-center gap-3">
              <Target className="w-8 h-8 text-teal-400" />
              The Memory Specialists
            </h2>

            <div className="grid md:grid-cols-2 gap-6">
              {/* SK Hynix */}
              <div className="bg-gray-900/50 border border-gray-800 rounded-xl p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 bg-teal-600 rounded-lg flex items-center justify-center text-lg font-bold">6</div>
                  <div>
                    <h3 className="text-xl font-semibold">SK Hynix</h3>
                    <div className="text-2xl font-bold text-teal-400">$51B</div>
                  </div>
                </div>
                <div className="space-y-3">
                  <div>
                    <h4 className="font-semibold text-teal-400 mb-2">Market Position</h4>
                    <ul className="text-sm text-gray-300 space-y-1">
                      <li>• #2 in global DRAM market (28%)</li>
                      <li>• #6 in NAND flash market</li>
                      <li>• Leading HBM memory supplier</li>
                      <li>• AI infrastructure enabler</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold text-blue-400 mb-2">Growth Drivers</h4>
                    <ul className="text-sm text-gray-300 space-y-1">
                      <li>• AI training memory demand</li>
                      <li>• Data center expansion</li>
                      <li>• 5G infrastructure growth</li>
                      <li>• Automotive memory adoption</li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Micron */}
              <div className="bg-gray-900/50 border border-gray-800 rounded-xl p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 bg-orange-600 rounded-lg flex items-center justify-center text-lg font-bold">8</div>
                  <div>
                    <h3 className="text-xl font-semibold">Micron</h3>
                    <div className="text-2xl font-bold text-orange-400">$34B</div>
                  </div>
                </div>
                <div className="space-y-3">
                  <div>
                    <h4 className="font-semibold text-orange-400 mb-2">Market Focus</h4>
                    <ul className="text-sm text-gray-300 space-y-1">
                      <li>• #3 in global DRAM market (23%)</li>
                      <li>• #4 in NAND flash market</li>
                      <li>• Strong in enterprise storage</li>
                      <li>• Automotive memory growth</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold text-green-400 mb-2">Differentiation</h4>
                    <ul className="text-sm text-gray-300 space-y-1">
                      <li>• Advanced 3D NAND technology</li>
                      <li>• US-based manufacturing</li>
                      <li>• Strong hyperscaler relationships</li>
                      <li>• Emerging memory technologies</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Mobile Leader: Qualcomm */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold mb-8 flex items-center gap-3">
              <Globe className="w-8 h-8 text-red-400" />
              Qualcomm: The Mobile Chip Leader ($42B)
            </h2>

            <div className="bg-gray-900/50 border border-gray-800 rounded-xl p-6 mb-6">
              <h3 className="text-xl font-semibold mb-4">Snapdragon Ecosystem Dominance</h3>
              <p className="text-gray-300 mb-4">
                Qualcomm's revenue leadership in mobile semiconductors stems from its comprehensive system-on-chip approach, combining processors, modems, RF, and AI capabilities in integrated solutions.
              </p>
              
              <div className="grid md:grid-cols-3 gap-6">
                <div className="bg-red-900/20 border border-red-800/30 rounded-lg p-4">
                  <h4 className="font-semibold text-red-400 mb-2">Mobile Dominance</h4>
                  <ul className="text-xs text-gray-300 space-y-1">
                    <li>• 40%+ Android SoC market share</li>
                    <li>• Premium smartphone focus</li>
                    <li>• 5G modem leadership</li>
                    <li>• RF front-end integration</li>
                  </ul>
                </div>
                <div className="bg-blue-900/20 border border-blue-800/30 rounded-lg p-4">
                  <h4 className="font-semibold text-blue-400 mb-2">Diversification</h4>
                  <ul className="text-xs text-gray-300 space-y-1">
                    <li>• Automotive processors growing</li>
                    <li>• IoT and edge AI expansion</li>
                    <li>• PC processor entry (ARM)</li>
                    <li>• XR/VR platform development</li>
                  </ul>
                </div>
                <div className="bg-green-900/20 border border-green-800/30 rounded-lg p-4">
                  <h4 className="font-semibold text-green-400 mb-2">Technology Edge</h4>
                  <ul className="text-xs text-gray-300 space-y-1">
                    <li>• Leading 5G implementations</li>
                    <li>• AI engine optimization</li>
                    <li>• Advanced camera ISPs</li>
                    <li>• Power efficiency focus</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-r from-red-900/20 to-orange-900/20 border border-red-800/30 rounded-xl p-6">
              <h3 className="text-xl font-semibold mb-4">Revenue Diversification Strategy</h3>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold text-red-400 mb-2">Current Revenue Mix</h4>
                  <ul className="text-sm text-gray-300 space-y-1">
                    <li>• Handsets: ~$24B (57%)</li>
                    <li>• RF Front End: ~$8B (19%)</li>
                    <li>• Automotive: ~$5B (12%)</li>
                    <li>• IoT: ~$5B (12%)</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-orange-400 mb-2">Growth Opportunities</h4>
                  <ul className="text-sm text-gray-300 space-y-1">
                    <li>• Automotive ADAS and infotainment</li>
                    <li>• Edge AI and industrial IoT</li>
                    <li>• PC and laptop processors</li>
                    <li>• Extended reality platforms</li>
                  </ul>
                </div>
              </div>
            </div>
          </section>

          {/* Revenue Analysis and Trends */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold mb-8 flex items-center gap-3">
              <BarChart3 className="w-8 h-8 text-purple-400" />
              Revenue Analysis and Market Trends
            </h2>

            <div className="space-y-6">
              <div className="bg-gray-900/50 border border-gray-800 rounded-xl p-6">
                <h3 className="text-xl font-semibold mb-4">Market Concentration Analysis</h3>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-semibold text-purple-400 mb-3">Revenue Distribution</h4>
                    <div className="space-y-2">
                      <div className="flex justify-between">
                        <span>Top 3 companies</span>
                        <span className="text-purple-400 font-semibold">$456B (65%)</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Top 8 companies</span>
                        <span className="text-blue-400 font-semibold">$713B (89%)</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Rest of industry</span>
                        <span className="text-gray-400">$87B (11%)</span>
                      </div>
                    </div>
                  </div>
                  <div>
                    <h4 className="font-semibold text-blue-400 mb-3">Growth Drivers</h4>
                    <ul className="text-sm text-gray-300 space-y-1">
                      <li>• AI and machine learning acceleration</li>
                      <li>• Data center expansion</li>
                      <li>• 5G infrastructure deployment</li>
                      <li>• Automotive electrification</li>
                      <li>• Edge computing growth</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-r from-purple-900/20 to-blue-900/20 border border-purple-800/30 rounded-xl p-6">
                <h3 className="text-xl font-semibold mb-4">2025-2030 Projections</h3>
                <div className="grid md:grid-cols-3 gap-6 text-center">
                  <div>
                    <div className="text-3xl font-bold text-purple-400 mb-2">$1.4T</div>
                    <p className="text-sm text-gray-300">Total semiconductor market by 2030</p>
                  </div>
                  <div>
                    <div className="text-3xl font-bold text-blue-400 mb-2">8.2%</div>
                    <p className="text-sm text-gray-300">Expected CAGR 2025-2030</p>
                  </div>
                  <div>
                    <div className="text-3xl font-bold text-green-400 mb-2">AI-Led</div>
                    <p className="text-sm text-gray-300">Growth primarily driven by AI</p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Conclusion */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold mb-6">Revenue Reveals the Real Winners</h2>
            <div className="space-y-4 text-gray-300">
              <p>
                The revenue rankings of semiconductor companies tell a story of diverse strategies and market positioning. Samsung's memory dominance, NVIDIA's AI revolution, and TSMC's manufacturing excellence each represent different paths to semiconductor leadership.
              </p>
              <p>
                What's remarkable is how these companies have carved out distinct competitive moats: Samsung through vertical integration and memory leadership, NVIDIA through AI acceleration dominance, TSMC through advanced manufacturing capabilities, and Qualcomm through mobile ecosystem control.
              </p>
              <p>
                Looking ahead, revenue growth will increasingly be driven by AI applications, edge computing, and automotive electronics. The companies that successfully adapt their strategies to these emerging markets while maintaining their core strengths will define the next chapter of semiconductor leadership.
              </p>
            </div>
          </section>

          {/* CTA Section */}
          <div className="bg-gradient-to-r from-blue-900/30 to-purple-900/30 border border-blue-800/30 rounded-xl p-8 text-center">
            <h3 className="text-2xl font-bold mb-4">Validate Chips from Any Vendor</h3>
            <p className="text-gray-300 mb-6">
              Whether your chips come from Samsung, NVIDIA, TSMC, or any other semiconductor leader, comprehensive validation ensures optimal performance and reliability. TestFlow's platform supports testing across all major chip architectures and vendors.
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
