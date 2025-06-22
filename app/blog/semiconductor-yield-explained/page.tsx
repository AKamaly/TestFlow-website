'use client'

import { SiteHeader } from "@/components/site-header"
import { ArrowLeft, User, Calendar, Clock, CheckCircle2, ArrowRight, Calculator, Target, TrendingUp, AlertTriangle, BarChart3, Zap, Factory, Microscope, PieChart, Award } from 'lucide-react'
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
            What is Yield in Semiconductor Fabs? Understanding the Critical Manufacturing Metric
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
              <span>Jun 5, 2025</span>
            </div>
            <div className="flex items-center gap-2">
              <Clock className="w-4 h-4" />
              <span>8 min read</span>
            </div>
          </div>
        </div>

        {/* Featured Image */}
        <div className="relative aspect-[16/9] mb-12 rounded-xl overflow-hidden">
          <Image
            src="https://9zog2la6l29pbfba.public.blob.vercel-storage.com/blog/Whats%20yeild%20in%20semiconductors-D9Wia6RH2NAmMDP0fikJIgccjVDPFl.jpeg"
            alt="Semiconductor Yield Analysis and Wafer Testing Visualization"
            fill
            className="object-cover"
          />
        </div>

        {/* Article Content */}
        <article className="prose prose-invert max-w-none">
          <div className="bg-white/5 border border-white/10 rounded-xl p-6 mb-8">
            <p className="text-xl text-gray-300 mb-6">
              In semiconductor manufacturing, yield is the fundamental metric that determines profitability and manufacturing efficiency. It represents the percentage of functional integrated circuit chips produced from a wafer compared to the total number of potential dies, directly impacting the cost-effectiveness of the entire fabrication process.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="flex items-start gap-2">
                <CheckCircle2 className="w-5 h-5 text-green-500 mt-1" />
                <span>Higher yield = lower cost per functional chip</span>
              </div>
              <div className="flex items-start gap-2">
                <CheckCircle2 className="w-5 h-5 text-green-500 mt-1" />
                <span>TSMC leads industry with 60% yield on 2nm process</span>
              </div>
              <div className="flex items-start gap-2">
                <CheckCircle2 className="w-5 h-5 text-green-500 mt-1" />
                <span>Commercial viability typically requires 70-80% yield</span>
              </div>
              <div className="flex items-start gap-2">
                <CheckCircle2 className="w-5 h-5 text-green-500 mt-1" />
                <span>New nodes often start below 50% yield</span>
              </div>
            </div>
          </div>

          <h2 className="text-2xl font-bold mb-4">Understanding Semiconductor Yield: The Cookie Analogy</h2>
          <p>
            To understand semiconductor yield, imagine you're baking cookies. You place 24 cookie portions on a baking tray (representing a silicon wafer), but when they come out of the oven, only 20 cookies are perfectly shaped and properly baked (functional chips). Your yield would be 20/24 × 100% = 83.3%.
          </p>

          <p>
            In semiconductor manufacturing, this analogy perfectly captures the essence of yield. A silicon wafer contains hundreds or thousands of individual chip locations (dies), but not all of them will function correctly after the complex fabrication process. The percentage of dies that pass all functional tests determines the yield of that wafer.
          </p>

          <div className="bg-gradient-to-br from-blue-500/10 to-purple-500/10 p-6 rounded-xl border border-blue-500/20 my-8">
            <div className="flex items-center gap-2 mb-3">
              <Calculator className="w-5 h-5 text-purple-400" />
              <h4 className="font-semibold text-lg">The Yield Formula</h4>
            </div>
            <div className="text-center py-4">
              <div className="text-2xl font-bold text-white mb-2">
                Yield (%) = (Number of Functional Dies / Total Number of Potential Dies) × 100%
              </div>
              <p className="text-gray-300 text-sm">
                This simple formula drives billions of dollars in manufacturing decisions across the semiconductor industry
              </p>
            </div>
          </div>

          <h2 className="text-2xl font-bold mb-4">How Yield is Measured: The Wafer Sort Process</h2>
          <p>
            Determining yield requires a sophisticated testing process called "wafer sort" or "wafer probing." After the fabrication process is complete, each individual die on the wafer undergoes electrical testing to verify its functionality and performance against specifications.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-8">
            <div className="bg-white/5 p-6 rounded-xl border border-white/10">
              <div className="flex items-center gap-2 mb-3">
                <Microscope className="w-5 h-5 text-blue-400" />
                <h4 className="font-semibold">Wafer Testing Process</h4>
              </div>
              <p className="text-gray-400 mb-4">
                Automated probe stations make electrical contact with each die on the wafer, running comprehensive test suites to verify functionality, performance parameters, and compliance with specifications.
              </p>
              <ul className="space-y-1 text-gray-400 text-sm">
                <li>• Functional verification tests</li>
                <li>• Performance parameter validation</li>
                <li>• Power consumption measurements</li>
                <li>• Speed and timing verification</li>
              </ul>
            </div>
            <div className="bg-white/5 p-6 rounded-xl border border-white/10">
              <div className="flex items-center gap-2 mb-3">
                <Target className="w-5 h-5 text-green-400" />
                <h4 className="font-semibold">Pass/Fail Determination</h4>
              </div>
              <p className="text-gray-400 mb-4">
                Dies that meet all specification requirements are marked as functional, while those failing any test are marked as non-functional and will be discarded during the dicing process.
              </p>
              <ul className="space-y-1 text-gray-400 text-sm">
                <li>• Binary pass/fail classification</li>
                <li>• Performance binning for different grades</li>
                <li>• Defect pattern analysis</li>
                <li>• Yield mapping across the wafer</li>
              </ul>
            </div>
          </div>

          <h2 className="text-2xl font-bold mb-4">Factors Affecting Semiconductor Yield</h2>
          <p>
            Multiple factors influence the total number of potential dies and the final yield percentage. Understanding these factors is crucial for optimizing manufacturing processes and improving profitability.
          </p>

          <div className="my-8 space-y-6">
            <div className="bg-white/5 p-6 rounded-xl border border-white/10">
              <div className="flex items-center gap-2 mb-3">
                <PieChart className="w-5 h-5 text-orange-400" />
                <h4 className="font-semibold text-lg">Wafer and Die Geometry</h4>
              </div>
              <p className="text-gray-300 mb-3">
                The physical characteristics of the wafer and individual dies directly impact the maximum number of dies that can fit on a wafer.
              </p>
              <ul className="space-y-2 text-gray-400">
                <li className="flex items-start gap-2">
                  <ArrowRight className="w-4 h-4 text-orange-500 mt-1" />
                  <span><strong>Wafer Size:</strong> Larger wafers (300mm vs 200mm) can accommodate more dies, improving economies of scale</span>
                </li>
                <li className="flex items-start gap-2">
                  <ArrowRight className="w-4 h-4 text-orange-500 mt-1" />
                  <span><strong>Die Size:</strong> Smaller dies mean more potential dies per wafer, but also potentially lower individual die performance</span>
                </li>
                <li className="flex items-start gap-2">
                  <ArrowRight className="w-4 h-4 text-orange-500 mt-1" />
                  <span><strong>Scribe Lines:</strong> The spacing between dies where the wafer is cut affects total die count</span>
                </li>
              </ul>
            </div>

            <div className="bg-white/5 p-6 rounded-xl border border-white/10">
              <div className="flex items-center gap-2 mb-3">
                <Factory className="w-5 h-5 text-blue-400" />
                <h4 className="font-semibold text-lg">Manufacturing Process Factors</h4>
              </div>
              <p className="text-gray-300 mb-3">
                The complexity and maturity of the manufacturing process significantly impact yield rates.
              </p>
              <ul className="space-y-2 text-gray-400">
                <li className="flex items-start gap-2">
                  <ArrowRight className="w-4 h-4 text-blue-500 mt-1" />
                  <span><strong>Process Node Maturity:</strong> Newer, smaller nodes typically have lower initial yields</span>
                </li>
                <li className="flex items-start gap-2">
                  <ArrowRight className="w-4 h-4 text-blue-500 mt-1" />
                  <span><strong>Defect Density:</strong> Particles, contamination, and process variations can cause functional failures</span>
                </li>
                <li className="flex items-start gap-2">
                  <ArrowRight className="w-4 h-4 text-blue-500 mt-1" />
                  <span><strong>Design Complexity:</strong> More complex circuits have higher probability of defects</span>
                </li>
              </ul>
            </div>
          </div>

          <h2 className="text-2xl font-bold mb-4">The Yield Journey: From New Node to Commercial Viability</h2>
          <p>
            Understanding the typical yield progression for new semiconductor nodes provides insight into the challenges and economics of advanced manufacturing.
          </p>

          <div className="my-12 rounded-xl overflow-hidden border border-white/10">
            <div className="bg-gradient-to-r from-red-500/20 to-green-500/20 py-4 px-6">
              <h3 className="text-lg font-bold">Yield Progression Timeline</h3>
              <p className="text-gray-400 text-sm">How semiconductor yields typically improve from initial development to high-volume manufacturing</p>
            </div>
            <div className="p-6 bg-white/5">
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-red-500/20 border border-red-500/40 flex items-center justify-center flex-shrink-0">
                    <span className="text-red-400 font-semibold">1</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-red-400 mb-1">Initial Development (0-20% Yield)</h4>
                    <p className="text-gray-300">
                      When a new process node is first developed, yields are extremely low as engineers work to understand and optimize the manufacturing process. Most dies fail due to process variations and defects.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-orange-500/20 border border-orange-500/40 flex items-center justify-center flex-shrink-0">
                    <span className="text-orange-400 font-semibold">2</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-orange-400 mb-1">Process Optimization (20-50% Yield)</h4>
                    <p className="text-gray-300">
                      Through systematic process improvements, defect reduction, and design-for-manufacturability enhancements, yields gradually improve. This phase can take 12-24 months.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-yellow-500/20 border border-yellow-500/40 flex items-center justify-center flex-shrink-0">
                    <span className="text-yellow-400 font-semibold">3</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-yellow-400 mb-1">Early Production (50-70% Yield)</h4>
                    <p className="text-gray-300">
                      Limited production begins for premium products where customers are willing to pay higher prices. Continued process refinement and learning from production data drive improvements.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-green-500/20 border border-green-500/40 flex items-center justify-center flex-shrink-0">
                    <span className="text-green-400 font-semibold">4</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-green-400 mb-1">Commercial Viability (70-90% Yield)</h4>
                    <p className="text-gray-300">
                      High-volume manufacturing becomes economically viable. At this stage, the process is mature enough to support mainstream products with competitive pricing.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <h2 className="text-2xl font-bold mb-4">Industry Leaders: TSMC vs Samsung Yield Competition</h2>
          <p>
            The competition between leading foundries often comes down to who can achieve higher yields faster on new process nodes. This directly impacts their ability to win customer designs and generate profits.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-8">
            <div className="bg-gradient-to-br from-blue-500/10 to-green-500/10 p-6 rounded-xl border border-blue-500/20">
              <div className="flex items-center gap-2 mb-3">
                <Award className="w-5 h-5 text-blue-400" />
                <h4 className="font-semibold">TSMC's Yield Leadership</h4>
              </div>
              <p className="text-gray-300 mb-4">
                Taiwan Semiconductor Manufacturing Company (TSMC) has consistently demonstrated superior yield performance across multiple process nodes, contributing to their market leadership position.
              </p>
              <div className="space-y-2">
                <div className="flex justify-between items-center">
                  <span className="text-gray-400">2nm Process Yield:</span>
                  <span className="text-blue-400 font-semibold">~60%</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-400">3nm Process (Mature):</span>
                  <span className="text-blue-400 font-semibold">~80%</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-400">5nm Process (Mature):</span>
                  <span className="text-blue-400 font-semibold">~90%</span>
                </div>
              </div>
            </div>
            <div className="bg-gradient-to-br from-purple-500/10 to-red-500/10 p-6 rounded-xl border border-purple-500/20">
              <div className="flex items-center gap-2 mb-3">
                <TrendingUp className="w-5 h-5 text-purple-400" />
                <h4 className="font-semibold">Samsung's Aggressive Progress</h4>
              </div>
              <p className="text-gray-300 mb-4">
                Samsung Foundry has been investing heavily in yield improvement, showing significant progress on advanced nodes, particularly their 2nm process development.
              </p>
              <div className="space-y-2">
                <div className="flex justify-between items-center">
                  <span className="text-gray-400">2nm Process (Early):</span>
                  <span className="text-purple-400 font-semibold">~30%</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-400">3nm Process:</span>
                  <span className="text-purple-400 font-semibold">~65%</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-400">4nm Process:</span>
                  <span className="text-purple-400 font-semibold">~75%</span>
                </div>
              </div>
            </div>
          </div>

          <blockquote className="border-l-4 border-blue-500 pl-4 italic text-gray-300 my-8">
            "Recent reports from February 2025 indicate that Samsung's initial yield for its 2nm process used in the Exynos 2600 was around 30% in trial production. While still behind TSMC's estimated 60% for their 2nm process, this represents significant improvement for Samsung and demonstrates the rapid pace of yield optimization in advanced nodes."
            <footer className="mt-2 text-gray-400 not-italic">— Industry Analysis, 2025</footer>
          </blockquote>

          <h2 className="text-2xl font-bold mb-4">Node-Specific Yield Variations: Size and Complexity Matter</h2>
          <p>
            It's crucial to understand that yield figures vary significantly depending on the specific design and complexity of the chip being produced. A large, complex server CPU will typically have lower yield than a smaller, simpler mobile application processor on the same process node.
          </p>

          <div className="overflow-x-auto my-8">
            <table className="min-w-full bg-white/5 rounded-xl overflow-hidden border border-white/10">
              <thead>
                <tr className="bg-white/10">
                  <th className="py-3 px-4 text-left">Chip Type</th>
                  <th className="py-3 px-4 text-left">Typical Die Size</th>
                  <th className="py-3 px-4 text-left">Expected Yield Range</th>
                  <th className="py-3 px-4 text-left">Complexity Factor</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-t border-white/10">
                  <td className="py-3 px-4 font-medium">Mobile Application Processor</td>
                  <td className="py-3 px-4 text-gray-400">50-100 mm²</td>
                  <td className="py-3 px-4 text-green-400">80-90%</td>
                  <td className="py-3 px-4">Medium</td>
                </tr>
                <tr className="border-t border-white/10">
                  <td className="py-3 px-4 font-medium">GPU (High-end)</td>
                  <td className="py-3 px-4 text-gray-400">400-800 mm²</td>
                  <td className="py-3 px-4 text-yellow-400">60-75%</td>
                  <td className="py-3 px-4">High</td>
                </tr>
                <tr className="border-t border-white/10">
                  <td className="py-3 px-4 font-medium">Server CPU</td>
                  <td className="py-3 px-4 text-gray-400">300-600 mm²</td>
                  <td className="py-3 px-4 text-orange-400">50-70%</td>
                  <td className="py-3 px-4">Very High</td>
                </tr>
                <tr className="border-t border-white/10">
                  <td className="py-3 px-4 font-medium">AI Accelerator</td>
                  <td className="py-3 px-4 text-gray-400">500-900 mm²</td>
                  <td className="py-3 px-4 text-red-400">40-60%</td>
                  <td className="py-3 px-4">Extremely High</td>
                </tr>
              </tbody>
            </table>
          </div>

          <h2 className="text-2xl font-bold mb-4">The Economics of Yield: Why Every Percentage Point Matters</h2>
          <p>
            Understanding the economic impact of yield improvements helps explain why semiconductor companies invest billions of dollars in yield optimization. Small improvements in yield can translate to massive cost savings and competitive advantages.
          </p>

          <div className="bg-gradient-to-br from-green-500/10 to-blue-500/10 p-6 rounded-xl border border-green-500/20 my-8">
            <h3 className="text-xl font-bold mb-4">Yield Impact Example: High-End GPU</h3>
            <p className="text-gray-300 mb-4">
              Consider a high-end GPU with the following characteristics:
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-semibold text-green-400 mb-2">Manufacturing Parameters</h4>
                <ul className="space-y-1 text-gray-400 text-sm">
                  <li>• Die size: 600 mm²</li>
                  <li>• Dies per wafer: ~100</li>
                  <li>• Wafer cost: $15,000</li>
                  <li>• Selling price: $1,200</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-blue-400 mb-2">Yield Impact Analysis</h4>
                <ul className="space-y-1 text-gray-400 text-sm">
                  <li>• 50% yield: 50 good dies, $300 cost per die</li>
                  <li>• 60% yield: 60 good dies, $250 cost per die</li>
                  <li>• 70% yield: 70 good dies, $214 cost per die</li>
                  <li>• <strong>10% yield improvement = $36 cost reduction per die</strong></li>
                </ul>
              </div>
            </div>
            <div className="mt-4 p-4 bg-white/10 rounded-lg">
              <p className="text-center text-lg font-semibold text-white">
                For a company producing 1 million GPUs annually, a 10% yield improvement saves $36 million in manufacturing costs
              </p>
            </div>
          </div>

          <h2 className="text-2xl font-bold mb-4">Beyond Fabrication: Post-Silicon Validation and TestFlow</h2>
          <p>
            While yield optimization focuses on the fabrication process, ensuring that functional dies actually work correctly in real-world applications requires comprehensive post-silicon validation. This is where advanced testing and validation platforms become crucial.
          </p>

          <p>
            At Atoms, we're addressing the critical post-fabrication challenges that impact overall silicon reliability and time-to-market. Even chips that pass wafer sort testing may have subtle issues that only emerge during comprehensive system-level validation.
          </p>

          <div className="bg-gradient-to-br from-blue-500/10 to-purple-500/10 p-8 rounded-xl border border-blue-500/20 my-8">
            <h3 className="text-xl font-bold mb-6">TestFlow: Accelerating Post-Silicon Validation</h3>
            
            {/* TestFlow Image */}
            <div className="relative aspect-[21/9] mb-6 rounded-xl overflow-hidden border border-white/10">
              <Image
                src="/images/TestFlow slide 1 .webp"
                alt="TestFlow AI-Powered Post-Silicon Validation Platform"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
            </div>
            
            <p className="text-gray-300 mb-6">
              Our platform, TestFlow, helps chip teams accelerate lab testing, uncover hidden bugs faster, and improve chip bring-up efficiency. While yield optimization ensures more dies pass initial fabrication, TestFlow ensures those dies work reliably in real-world applications.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
              <div className="flex items-start gap-2">
                <CheckCircle2 className="w-5 h-5 text-green-500 mt-1" />
                <span>Accelerate lab testing and validation cycles</span>
              </div>
              <div className="flex items-start gap-2">
                <CheckCircle2 className="w-5 h-5 text-green-500 mt-1" />
                <span>Uncover hidden bugs that escape wafer sort</span>
              </div>
              <div className="flex items-start gap-2">
                <CheckCircle2 className="w-5 h-5 text-green-500 mt-1" />
                <span>Improve chip bring-up efficiency and reliability</span>
              </div>
              <div className="flex items-start gap-2">
                <CheckCircle2 className="w-5 h-5 text-green-500 mt-1" />
                <span>Reduce time-to-market for complex silicon designs</span>
              </div>
            </div>
            <p className="text-gray-300">
              By combining fabrication yield optimization with advanced post-silicon validation, semiconductor companies can maximize both the quantity and quality of functional chips reaching the market, ensuring optimal return on their substantial manufacturing investments.
            </p>
          </div>

          <h2 className="text-2xl font-bold mb-4">The Future of Yield Optimization</h2>
          <p>
            As semiconductor manufacturing continues to push the boundaries of physics with smaller nodes and more complex designs, yield optimization becomes increasingly challenging and critical. Advanced analytics, machine learning, and AI-driven process control are becoming essential tools for maintaining and improving yields.
          </p>

          <ul className="space-y-2 my-6">
            <li className="flex items-start gap-2">
              <ArrowRight className="w-4 h-4 text-blue-500 mt-1" />
              <span><strong>AI-Driven Process Control:</strong> Machine learning algorithms analyze vast amounts of manufacturing data to predict and prevent yield-limiting defects</span>
            </li>
            <li className="flex items-start gap-2">
              <ArrowRight className="w-4 h-4 text-blue-500 mt-1" />
              <span><strong>Advanced Metrology:</strong> More sophisticated measurement and inspection tools enable earlier detection of process variations</span>
            </li>
            <li className="flex items-start gap-2">
              <ArrowRight className="w-4 h-4 text-blue-500 mt-1" />
              <span><strong>Design-Process Co-optimization:</strong> Closer collaboration between design and manufacturing teams to optimize both design and process for higher yields</span>
            </li>
            <li className="flex items-start gap-2">
              <ArrowRight className="w-4 h-4 text-blue-500 mt-1" />
              <span><strong>Predictive Maintenance:</strong> Equipment health monitoring and predictive maintenance to minimize process variations</span>
            </li>
          </ul>

          <h2 className="text-2xl font-bold mb-4">Conclusion: Yield as the Foundation of Semiconductor Economics</h2>
          <p>
            Semiconductor yield represents far more than a simple manufacturing metric—it's the foundation upon which the entire economics of chip production rests. From the initial cookie analogy to the complex realities of advanced node manufacturing, yield directly determines whether new technologies can be commercially viable.
          </p>

          <p>
            As we've seen, industry leaders like TSMC maintain their competitive advantage through superior yield performance, while companies like Samsung invest heavily to close the gap. The progression from initial development yields below 50% to commercial viability above 70% requires years of investment and optimization.
          </p>

          <p>
            Looking forward, the combination of advanced fabrication yield optimization and comprehensive post-silicon validation will be essential for maximizing the value of semiconductor manufacturing investments. Companies that excel in both areas will be best positioned to deliver the reliable, high-performance chips that power our digital future.
          </p>

          <div className="mt-12 p-8 bg-gradient-to-r from-blue-500/10 via-purple-500/10 to-blue-500/10 rounded-3xl border border-blue-500/20">
            <h3 className="text-2xl font-bold mb-4">Optimize Your Post-Silicon Validation</h3>
            <p className="text-gray-300 mb-6">
              While you optimize fabrication yields, don't let post-silicon validation become your bottleneck. Learn how TestFlow can help you accelerate testing, uncover hidden issues, and improve chip bring-up efficiency.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link 
                href="/contact" 
                className="bg-gradient-to-r from-blue-500 to-purple-600 text-white hover:from-blue-600 hover:to-purple-700 rounded-full px-6 py-3 text-center font-medium"
              >
                Schedule a Demo
              </Link>
              <Link 
                href="/" 
                className="border border-blue-500/30 hover:bg-blue-500/5 rounded-full px-6 py-3 text-center font-medium"
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