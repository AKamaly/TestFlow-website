'use client'

import { SiteHeader } from "@/components/site-header"
import { ArrowLeft, User, Calendar, Clock, CheckCircle2, ArrowRight, Zap, Server, Shield, Thermometer, Box, Activity, Lock, Cpu, Database, Network, Fan } from 'lucide-react'
import Link from 'next/link'
import Image from 'next/image'
import { BlogPostLayout } from "@/components/blog-post-layout"

export default function BlogPost() {
    return (
        <BlogPostLayout>
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
                        Infrastructure & AI
                    </div>
                    <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
                        If You Think AI = GPUs, You're Missing 80% of the Story
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
                            <span>Jan 25, 2026</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <Clock className="w-4 h-4" />
                            <span>9 min read</span>
                        </div>
                    </div>
                </div>

                {/* Featured Image */}
                <div className="relative aspect-[16/9] mb-12 rounded-xl overflow-hidden bg-white/5">
                    <Image
                        src="/images/ai-data-center-infrastructure.jpg"
                        alt="The AI Infrastructure Stack - Data Center Suppliers Map"
                        fill
                        className="object-contain"
                    />
                </div>

                {/* Article Content */}
                <article className="prose prose-invert max-w-none">
                    <div className="bg-white/5 border border-white/10 rounded-xl p-6 mb-8">
                        <p className="text-xl text-gray-300 mb-6">
                            Everyone talks about GPUs, TPUs, HBM, and advanced nodes. But AI data centers are massive, tightly engineered systems where <strong className="text-white">infrastructure</strong> decides what performance is actually achievable. The constraints aren't just in the silicon—they're in the power, cooling, and physical security that keep the silicon alive.
                        </p>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div className="flex items-start gap-2">
                                <CheckCircle2 className="w-5 h-5 text-green-500 mt-1" />
                                <span>Power infrastructure is the new bottleneck</span>
                            </div>
                            <div className="flex items-start gap-2">
                                <CheckCircle2 className="w-5 h-5 text-green-500 mt-1" />
                                <span>Cooling is one of the hardest engineering problems</span>
                            </div>
                            <div className="flex items-start gap-2">
                                <CheckCircle2 className="w-5 h-5 text-green-500 mt-1" />
                                <span>Uptime requires military-grade redundancy</span>
                            </div>
                            <div className="flex items-start gap-2">
                                <CheckCircle2 className="w-5 h-5 text-green-500 mt-1" />
                                <span>AI is an infrastructure story, not just a chip story</span>
                            </div>
                        </div>
                    </div>

                    <h2 className="text-2xl font-bold mb-4">The Invisible Stack Behind AI Scale</h2>
                    <p>
                        While NVIDIA grabs the headlines, an entire ecosystem of industrial giants is building the physical reality that allows AI to exist. Without these layers, an H100 GPU is just a dormant piece of silicon. Here is the infrastructure stack that actually powers AI at scale.
                    </p>

                    <div className="my-12 space-y-8">
                        {/* Layer 1: Power Backbone */}
                        <div className="bg-gradient-to-br from-yellow-500/10 to-orange-500/10 p-6 rounded-xl border border-yellow-500/20">
                            <div className="flex items-start gap-4">
                                <div className="w-12 h-12 rounded-full bg-yellow-500/20 border border-yellow-500/40 flex items-center justify-center flex-shrink-0">
                                    <Zap className="w-6 h-6 text-yellow-400" />
                                </div>
                                <div className="flex-grow">
                                    <h4 className="font-semibold text-lg text-yellow-400 mb-3">1. Power Distribution: The Backbone</h4>
                                    <p className="text-gray-300 mb-4">
                                        AI facilities run extreme loads 24/7. It starts with <strong>Medium Voltage (MV) Power Distribution</strong> delivering massive, stable power from the grid. It ends with <strong>Low Voltage (LV) Power Distribution</strong> safely delivering that power to every rack and server.
                                    </p>
                                    <div className="bg-yellow-500/10 p-4 rounded-lg border border-yellow-500/20">
                                        <h5 className="font-semibold text-yellow-400 text-sm mb-2">Key Players</h5>
                                        <p className="text-gray-400 text-sm">
                                            Eaton, Schneider Electric, ABB, Siemens, Vertiv
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Layer 2: Reliability */}
                        <div className="bg-gradient-to-br from-red-500/10 to-pink-500/10 p-6 rounded-xl border border-red-500/20">
                            <div className="flex items-start gap-4">
                                <div className="w-12 h-12 rounded-full bg-red-500/20 border border-red-500/40 flex items-center justify-center flex-shrink-0">
                                    <Activity className="w-6 h-6 text-red-400" />
                                </div>
                                <div className="flex-grow">
                                    <h4 className="font-semibold text-lg text-red-400 mb-3">2. Reliability: UPS & Backup Power</h4>
                                    <p className="text-gray-300 mb-4">
                                        AI models taking weeks to train cannot afford a microsecond of downtime.
                                        <strong> Uninterruptible Power Systems (UPS)</strong> provide millisecond-level protection against crashes, while massive <strong>Backup Generators</strong> keep the facility running during grid outages.
                                    </p>
                                    <div className="bg-red-500/10 p-4 rounded-lg border border-red-500/20">
                                        <h5 className="font-semibold text-red-400 text-sm mb-2">The Stakes</h5>
                                        <p className="text-gray-400 text-sm">
                                            A power flicker in a standard data center means a reboot. In an AI training cluster, it can mean the loss of weeks of training progress and millions of dollars in compute time.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Layer 3: Thermal Management */}
                        <div className="bg-gradient-to-br from-blue-500/10 to-cyan-500/10 p-6 rounded-xl border border-blue-500/20">
                            <div className="flex items-start gap-4">
                                <div className="w-12 h-12 rounded-full bg-blue-500/20 border border-blue-500/40 flex items-center justify-center flex-shrink-0">
                                    <Fan className="w-6 h-6 text-blue-400" />
                                </div>
                                <div className="flex-grow">
                                    <h4 className="font-semibold text-lg text-blue-400 mb-3">3. HVAC & Thermal Management</h4>
                                    <p className="text-gray-300 mb-4">
                                        AI racks generate extreme heat density—far beyond traditional web servers. Cooling is now one of the hardest engineering challenges in the data center, moving from air cooling to liquid cooling and immersion technologies.
                                    </p>
                                    <div className="bg-blue-500/10 p-4 rounded-lg border border-blue-500/20">
                                        <h5 className="font-semibold text-blue-400 text-sm mb-2">Key Players</h5>
                                        <p className="text-gray-400 text-sm">
                                            Vertiv, Trane, Carrier, Munters, Stulz
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Layer 4: Physical Reality */}
                        <div className="bg-gradient-to-br from-purple-500/10 to-indigo-500/10 p-6 rounded-xl border border-purple-500/20">
                            <div className="flex items-start gap-4">
                                <div className="w-12 h-12 rounded-full bg-purple-500/20 border border-purple-500/40 flex items-center justify-center flex-shrink-0">
                                    <Box className="w-6 h-6 text-purple-400" />
                                </div>
                                <div className="flex-grow">
                                    <h4 className="font-semibold text-lg text-purple-400 mb-3">4. Server Cabinets & Automation</h4>
                                    <p className="text-gray-300 mb-4">
                                        High-density <strong>Server Cabinets</strong> are designed for massive airflow and cable management. Meanwhile, <strong>Building Automation</strong> provides real-time control of every environmental variable—airflow, temperature, and humidity—to optimize efficiency.
                                    </p>
                                    <ul className="space-y-2 text-gray-400 text-sm mb-4">
                                        <li className="flex items-center gap-2">
                                            <ArrowRight className="w-4 h-4 text-purple-500" />
                                            <span>Optimized for fast deployment</span>
                                        </li>
                                        <li className="flex items-center gap-2">
                                            <ArrowRight className="w-4 h-4 text-purple-500" />
                                            <span>Software-defined facility management</span>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>

                        {/* Layer 5: Security */}
                        <div className="bg-gradient-to-br from-green-500/10 to-emerald-500/10 p-6 rounded-xl border border-green-500/20">
                            <div className="flex items-start gap-4">
                                <div className="w-12 h-12 rounded-full bg-green-500/20 border border-green-500/40 flex items-center justify-center flex-shrink-0">
                                    <Shield className="w-6 h-6 text-green-400" />
                                </div>
                                <div className="flex-grow">
                                    <h4 className="font-semibold text-lg text-green-400 mb-3">5. Security Systems</h4>
                                    <p className="text-gray-300 mb-4">
                                        These facilities house some of the most valuable intellectual property and hardware assets on Earth.
                                        <strong>Physical and Digital Security</strong> layers ensure that access is strictly controlled and monitored.
                                    </p>
                                    <div className="bg-green-500/10 p-4 rounded-lg border border-green-500/20">
                                        <h5 className="font-semibold text-green-400 text-sm mb-2">Key Players</h5>
                                        <p className="text-gray-400 text-sm">
                                            Honeywell, Johnson Controls, Bosch, Siemens
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <h2 className="text-2xl font-bold mb-4">Why Validation Matters for Infrastructure Chips</h2>
                    <p>
                        It's not just the GPUs that need validation. The control systems, power management ICs (PMICs), and environmental sensors that run this massive infrastructure are all powered by semiconductors. In these critical systems, a chip failure doesn't just mean a glitch—it can mean a power outage or a cooling failure for millions of dollars of hardware.
                    </p>
                    <p>
                        At TestFlow, we see the ripple effect of AI demand not just in high-performance compute chips, but in the industrial and automotive-grade chips that power the infrastructure itself. Reliability here is non-negotiable.
                    </p>

                    <blockquote className="border-l-4 border-blue-500 pl-4 italic text-gray-300 my-8">
                        "AI is not just a semiconductor story. It's an infrastructure story. Power, cooling, automation, and reliability are what turn silicon into real-world AI capability."
                    </blockquote>

                    <h2 className="text-2xl font-bold mb-4">The Next Bottleneck?</h2>
                    <p>
                        As chip performance grows exponentially, the limits of physics in power delivery and heat dissipation are being tested. The next big bottleneck for AI scaling might not be wafer supply or HBM yield—it might be finding enough power and cooling capacity to turn those chips on.
                    </p>

                </article>
            </div>
        </BlogPostLayout>
    )
}
