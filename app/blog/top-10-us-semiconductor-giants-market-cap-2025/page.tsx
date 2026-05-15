'use client'

import { SiteHeader } from "@/components/site-header"
import { ArrowLeft, User, Calendar, Clock, CheckCircle2, ArrowRight, TrendingUp, Cpu, Network, Database, Factory, Settings, Smartphone, Layers, Activity, Search } from 'lucide-react'
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
                        Market Analysis
                    </div>
                    <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
                        Top 10 U.S. Semiconductor Giants — Ranked by Market Cap
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
                            <span>10 min read</span>
                        </div>
                    </div>
                </div>

                {/* Featured Image */}
                <div className="relative aspect-[4/5] md:aspect-[16/9] mb-12 rounded-xl overflow-hidden bg-white/5">
                    <Image
                        src="/images/us-semiconductor-giants-2025.jpg"
                        alt="Top 10 U.S. Semiconductor Companies by Market Cap in 2025"
                        fill
                        className="object-contain"
                    />
                </div>

                {/* Article Content */}
                <article className="prose prose-invert max-w-none">
                    <div className="bg-white/5 border border-white/10 rounded-xl p-6 mb-8">
                        <p className="text-xl text-gray-300 mb-6">
                            If you think semiconductors are just "tech," think again—they are the backbone of AI, cloud, automotive, telecom, and national infrastructure. And today's U.S. market caps tell a powerful story of where value is being created in the AI era.
                        </p>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div className="flex items-start gap-2">
                                <CheckCircle2 className="w-5 h-5 text-green-500 mt-1" />
                                <span>NVIDIA leads with a staggering $4.5T valuation</span>
                            </div>
                            <div className="flex items-start gap-2">
                                <CheckCircle2 className="w-5 h-5 text-green-500 mt-1" />
                                <span>Broadcom dominates connectivity at $1.6T</span>
                            </div>
                            <div className="flex items-start gap-2">
                                <CheckCircle2 className="w-5 h-5 text-green-500 mt-1" />
                                <span>Equipment makers are critical enablers</span>
                            </div>
                            <div className="flex items-start gap-2">
                                <CheckCircle2 className="w-5 h-5 text-green-500 mt-1" />
                                <span>AI is reshaping the entire industry leaderboard</span>
                            </div>
                        </div>
                    </div>

                    <h2 className="text-2xl font-bold mb-4">The Trillion-Dollar Club and Beyond</h2>
                    <p>
                        The semiconductor landscape has been completely reshaped by artificial intelligence, advanced manufacturing, and infrastructure-scale computing. Let's break down the titans leading the U.S. chip industry as of late 2025.
                    </p>

                    <div className="my-12 space-y-8">
                        {/* 1. NVIDIA */}
                        <div className="bg-gradient-to-br from-green-500/10 to-emerald-500/10 p-6 rounded-xl border border-green-500/20">
                            <div className="flex items-start gap-4">
                                <div className="w-12 h-12 rounded-full bg-green-500/20 border border-green-500/40 flex items-center justify-center flex-shrink-0">
                                    <span className="text-green-400 font-bold text-xl">1</span>
                                </div>
                                <div className="flex-grow">
                                    <div className="flex items-center justify-between mb-3">
                                        <h4 className="font-semibold text-lg text-green-400">NVIDIA</h4>
                                        <span className="bg-green-500/20 text-green-400 px-3 py-1 rounded-full text-sm font-bold">$4.5T Market Cap</span>
                                    </div>
                                    <p className="text-gray-300 mb-4">
                                        The undisputed leader of the AI era. NVIDIA is no longer just a chip company—it's the core platform powering modern AI. From H100s and Blackwell GPUs to CUDA software and full-stack acceleration, they own the training and inference market.
                                    </p>

                                    <div className="bg-green-500/10 p-4 rounded-lg border border-green-500/20">
                                        <h5 className="font-semibold text-green-400 text-sm mb-2">Validation Insight</h5>
                                        <p className="text-gray-400 text-sm">
                                            Validating massive AI GPUs like Blackwell involves testing billions of transistors and complex HBM (High Bandwidth Memory) integration. The sheer scale of these chips pushes traditional testing boundaries, requiring AI-driven validation strategies to ensure yield.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* 2. Broadcom */}
                        <div className="bg-gradient-to-br from-red-500/10 to-orange-500/10 p-6 rounded-xl border border-red-500/20">
                            <div className="flex items-start gap-4">
                                <div className="w-12 h-12 rounded-full bg-red-500/20 border border-red-500/40 flex items-center justify-center flex-shrink-0">
                                    <span className="text-red-400 font-bold text-xl">2</span>
                                </div>
                                <div className="flex-grow">
                                    <div className="flex items-center justify-between mb-3">
                                        <h4 className="font-semibold text-lg text-red-400">Broadcom</h4>
                                        <span className="bg-red-500/20 text-red-400 px-3 py-1 rounded-full text-sm font-bold">$1.6T Market Cap</span>
                                    </div>
                                    <p className="text-gray-300 mb-4">
                                        A silent giant. Broadcom dominates networking, connectivity, and custom silicon (ASICs). They build the infrastructure that keeps hyperscalers, data centers, and cloud platforms connected and running efficiently.
                                    </p>
                                    <div className="bg-red-500/10 p-4 rounded-lg border border-red-500/20">
                                        <h5 className="font-semibold text-red-400 text-sm mb-2">Validation Insight</h5>
                                        <p className="text-gray-400 text-sm">
                                            Networking chips require rigorous signal integrity testing and protocol validation. As data rates jump to 800G and 1.6T, automated validation of SerDes (Serializer-Deserializer) blocks becomes mission-critical.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* 3. AMD */}
                        <div className="bg-gradient-to-br from-orange-500/10 to-yellow-500/10 p-6 rounded-xl border border-orange-500/20">
                            <div className="flex items-start gap-4">
                                <div className="w-12 h-12 rounded-full bg-orange-500/20 border border-orange-500/40 flex items-center justify-center flex-shrink-0">
                                    <span className="text-orange-400 font-bold text-xl">3</span>
                                </div>
                                <div className="flex-grow">
                                    <div className="flex items-center justify-between mb-3">
                                        <h4 className="font-semibold text-lg text-orange-400">AMD</h4>
                                        <span className="bg-orange-500/20 text-orange-400 px-3 py-1 rounded-full text-sm font-bold">$341B Market Cap</span>
                                    </div>
                                    <p className="text-gray-300 mb-4">
                                        A true comeback story. AMD's dual strength in high-performance CPUs (EPYC, Ryzen) and AI GPUs (Instinct MI series) keeps it firmly in the top tier, challenging both Intel and NVIDIA.
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* 4. Micron */}
                        <div className="bg-gradient-to-br from-blue-500/10 to-indigo-500/10 p-6 rounded-xl border border-blue-500/20">
                            <div className="flex items-start gap-4">
                                <div className="w-12 h-12 rounded-full bg-blue-500/20 border border-blue-500/40 flex items-center justify-center flex-shrink-0">
                                    <span className="text-blue-400 font-bold text-xl">4</span>
                                </div>
                                <div className="flex-grow">
                                    <div className="flex items-center justify-between mb-3">
                                        <h4 className="font-semibold text-lg text-blue-400">Micron Technology</h4>
                                        <span className="bg-blue-500/20 text-blue-400 px-3 py-1 rounded-full text-sm font-bold">$214B Market Cap</span>
                                    </div>
                                    <p className="text-gray-300 mb-4">
                                        Memory is the fuel of AI. As demand for HBM3e (High Bandwidth Memory) and advanced DRAM explodes to feed hungry GPUs, Micron's role in the AI infrastructure stack has never been more critical.
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* 5, 6, 10 Equipment Makers */}
                        <div className="bg-gradient-to-br from-purple-500/10 to-pink-500/10 p-6 rounded-xl border border-purple-500/20">
                            <div className="flex items-center gap-3 mb-4">
                                <Factory className="w-6 h-6 text-purple-400" />
                                <h4 className="font-semibold text-lg text-purple-400">The Builders: Equipment Giants</h4>
                            </div>
                            <div className="space-y-6">
                                <div>
                                    <h5 className="font-bold text-white flex justify-between">
                                        5. Lam Research
                                        <span className="text-purple-400">$188B</span>
                                    </h5>
                                    <p className="text-sm text-gray-400 mt-1">
                                        Critical enabling equipment for advanced chip architecture. Without Lam's etching and deposition tools, 3D NAND and advanced logic simply don't happen.
                                    </p>
                                </div>
                                <div className="border-t border-white/10 pt-4">
                                    <h5 className="font-bold text-white flex justify-between">
                                        6. Applied Materials
                                        <span className="text-purple-400">$183B</span>
                                    </h5>
                                    <p className="text-sm text-gray-400 mt-1">
                                        The world's largest semiconductor equipment supplier. They sit at the heart of every advanced fab, shaping how atoms are deposited and modified to create chips.
                                    </p>
                                </div>
                                <div className="border-t border-white/10 pt-4">
                                    <h5 className="font-bold text-white flex justify-between">
                                        10. KLA
                                        <span className="text-purple-400">$150B</span>
                                    </h5>
                                    <p className="text-sm text-gray-400 mt-1">
                                        The guardian of yield. KLA's inspection and metrology tools ensure that nanometer-scale features are printed correctly. They are the "eyes" of the fab.
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* 7. Qualcomm */}
                        <div className="bg-gradient-to-br from-indigo-500/10 to-blue-500/10 p-6 rounded-xl border border-indigo-500/20">
                            <div className="flex items-start gap-4">
                                <div className="w-12 h-12 rounded-full bg-indigo-500/20 border border-indigo-500/40 flex items-center justify-center flex-shrink-0">
                                    <span className="text-indigo-400 font-bold text-xl">7</span>
                                </div>
                                <div className="flex-grow">
                                    <div className="flex items-center justify-between mb-3">
                                        <h4 className="font-semibold text-lg text-indigo-400">Qualcomm</h4>
                                        <span className="bg-indigo-500/20 text-indigo-400 px-3 py-1 rounded-full text-sm font-bold">$182B Market Cap</span>
                                    </div>
                                    <p className="text-gray-300 mb-4">
                                        The king of mobile and connected compute. From Snapdragon powering Android to automotive cockpits and edge AI, Qualcomm ensures intelligence is available everywhere, not just in the cloud.
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* 8. Intel */}
                        <div className="bg-gradient-to-br from-cyan-500/10 to-blue-500/10 p-6 rounded-xl border border-cyan-500/20">
                            <div className="flex items-start gap-4">
                                <div className="w-12 h-12 rounded-full bg-cyan-500/20 border border-cyan-500/40 flex items-center justify-center flex-shrink-0">
                                    <span className="text-cyan-400 font-bold text-xl">8</span>
                                </div>
                                <div className="flex-grow">
                                    <div className="flex items-center justify-between mb-3">
                                        <h4 className="font-semibold text-lg text-cyan-400">Intel</h4>
                                        <span className="bg-cyan-500/20 text-cyan-400 px-3 py-1 rounded-full text-sm font-bold">$176B Market Cap</span>
                                    </div>
                                    <p className="text-gray-300 mb-4">
                                        Still a critical pillar of U.S. semiconductors. Intel is fighting for its next chapter with a renewed focus on foundry services (Intel Foundry), advanced packaging, and regaining process leadership (18A node).
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* 9. Texas Instruments */}
                        <div className="bg-gradient-to-br from-gray-500/10 to-slate-500/10 p-6 rounded-xl border border-gray-500/20">
                            <div className="flex items-start gap-4">
                                <div className="w-12 h-12 rounded-full bg-gray-500/20 border border-gray-500/40 flex items-center justify-center flex-shrink-0">
                                    <span className="text-gray-400 font-bold text-xl">9</span>
                                </div>
                                <div className="flex-grow">
                                    <div className="flex items-center justify-between mb-3">
                                        <h4 className="font-semibold text-lg text-gray-400">Texas Instruments</h4>
                                        <span className="bg-gray-500/20 text-gray-400 px-3 py-1 rounded-full text-sm font-bold">$165B Market Cap</span>
                                    </div>
                                    <p className="text-gray-300 mb-4">
                                        The analog powerhouse. While digital chips get the glory, TI's analog and embedded chips quietly run industrial systems, cars, and power management across the entire global economy.
                                    </p>
                                </div>
                            </div>
                        </div>

                    </div>

                    <h2 className="text-2xl font-bold mb-4">Why Market Cap Matters for Engineers</h2>
                    <p>
                        Why should a validation engineer care about market cap? Because it follows the investment. The massive valuations of NVIDIA, Broadcom, and equipment makers signal where R&D dollars are flowing.
                    </p>
                    <p>
                        It means more complex designs, faster release cycles, and higher stakes for quality. A bug in a $4.5T company's flagship chip isn't just an engineering problem—it's market-moving news. This elevates the role of <strong>hardware testing and validation</strong> from a back-office function to a strategic necessity.
                    </p>

                    <blockquote className="border-l-4 border-blue-500 pl-4 italic text-gray-300 my-8">
                        "The U.S. semiconductor landscape is being reshaped by AI, advanced manufacturing, and infrastructure-scale compute. GPUs, memory, and chipmaking equipment — not just CPUs — now define where the real value is created."
                    </blockquote>

                </article>
            </div>
        </BlogPostLayout>
    )
}
