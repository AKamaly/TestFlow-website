'use client'

import { SiteHeader } from "@/components/site-header"
import { ArrowLeft, User, Calendar, Clock, CheckCircle2, Factory, Cpu, Layers, Box, Wrench, Microscope, ShieldCheck, ArrowRight } from 'lucide-react'
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
                        Ecosystem Analysis • Supply Chain • Chip Design
                    </div>
                    <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
                        The 7-Layer Stack: Who Actually Builds the Semiconductor World?
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
                            <span>8 min read</span>
                        </div>
                    </div>
                </div>

                {/* Featured Image */}
                <div className="relative aspect-[1/1] max-w-[600px] mx-auto mb-12 rounded-xl overflow-hidden border border-white/10">
                    <Image
                        src="/semiconductor-ecosystem-pyramid.jpg"
                        alt="The Entire Semiconductor Ecosystem Pyramid Breakdown"
                        fill
                        className="object-contain bg-white"
                    />
                </div>

                {/* Article Content */}
                <article className="prose prose-invert max-w-none">
                    <div className="bg-white/5 border border-white/10 rounded-xl p-6 mb-8">
                        <p className="text-xl text-gray-300 mb-6 font-light">
                            Most people think "chips = TSMC". That’s like saying "movies = Netflix". The semiconductor world is actually a 7-layer stack of deep specialization, where every layer has its own gatekeepers and critical dependencies.
                        </p>
                    </div>

                    <p className="text-gray-300 mb-8">
                        Understanding the semiconductor industry requires looking beyond the finished product. It’s a global relay race where one bottleneck in any layer—design, tools, materials, or validation—can ripple across the entire global economy. Let's break down the 7-layer ecosystem.
                    </p>

                    <h2 className="text-2xl font-bold mb-6 flex items-center gap-3">
                        <span className="flex items-center justify-center w-8 h-8 rounded-full bg-blue-500 text-white text-sm">1</span>
                        Chip Foundries: The Master Builders
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                        <div>
                            <p className="text-gray-400">
                                They manufacture chips at insane precision, turning digital designs into physical silicon. These are the most complex factories on earth.
                            </p>
                            <ul className="mt-4 space-y-2">
                                <li className="flex items-center gap-2 text-sm text-gray-300"><CheckCircle2 className="w-4 h-4 text-blue-500" /> TSMC (Taiwan)</li>
                                <li className="flex items-center gap-2 text-sm text-gray-300"><CheckCircle2 className="w-4 h-4 text-blue-500" /> Samsung Foundry (Korea)</li>
                                <li className="flex items-center gap-2 text-sm text-gray-300"><CheckCircle2 className="w-4 h-4 text-blue-500" /> SMIC (China)</li>
                                <li className="flex items-center gap-2 text-sm text-gray-300"><CheckCircle2 className="w-4 h-4 text-blue-500" /> GlobalFoundries (USA)</li>
                            </ul>
                        </div>
                        <div className="bg-white/5 p-4 rounded-xl border border-white/10 flex items-center justify-center">
                            <Factory className="w-16 h-16 text-blue-500 opacity-50" />
                        </div>
                    </div>

                    <h2 className="text-2xl font-bold mb-6 flex items-center gap-3">
                        <span className="flex items-center justify-center w-8 h-8 rounded-full bg-purple-500 text-white text-sm">2</span>
                        IDMs (Integrated Device Manufacturers)
                    </h2>
                    <p className="text-gray-400 mb-6">
                        Unlike many others, IDMs keep the whole loop—from design to manufacturing—in-house. Companies like <strong>Intel</strong>, <strong>Micron</strong>, and <strong>SK Hynix</strong> are the giants that own their own fabs and design the chips they produce.
                    </p>

                    <h2 className="text-2xl font-bold mb-6 flex items-center gap-3">
                        <span className="flex items-center justify-center w-8 h-8 rounded-full bg-green-500 text-white text-sm">3</span>
                        Fabless Chip Designers: The Architects
                    </h2>
                    <div className="bg-gradient-to-br from-green-500/10 to-transparent p-6 rounded-xl border border-green-500/20 mb-8">
                        <p className="text-gray-300">
                            They design the silicon but hire foundries to build it. They compete on architecture, performance, and software ecosystems.
                        </p>
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-6">
                            <div className="text-center p-3 bg-black/40 rounded-lg border border-white/5">Apple</div>
                            <div className="text-center p-3 bg-black/40 rounded-lg border border-white/5">NVIDIA</div>
                            <div className="text-center p-3 bg-black/40 rounded-lg border border-white/5">AMD</div>
                            <div className="text-center p-3 bg-black/40 rounded-lg border border-white/5">Qualcomm</div>
                        </div>
                    </div>

                    <h2 className="text-2xl font-bold mb-6 flex items-center gap-3">
                        <span className="flex items-center justify-center w-8 h-8 rounded-full bg-orange-500 text-white text-sm">4</span>
                        Wafer Fab Equipment: The Machine Makers
                    </h2>
                    <p className="text-gray-400 mb-6">
                        These companies build the "factories inside the factory". Without <strong>ASML's</strong> lithography machines or <strong>Lam Research's</strong> etching tools, the entire industry stops. This is where Moore's Law is actually realized at the physical level.
                    </p>

                    <h2 className="text-2xl font-bold mb-6 flex items-center gap-3">
                        <span className="flex items-center justify-center w-8 h-8 rounded-full bg-red-500 text-white text-sm">5</span>
                        Materials + Wafers: The Physical Inputs
                    </h2>
                    <p className="text-gray-400 mb-6">
                        Everything starts with ultra-pure silicon wafers and specialty chemicals. Companies like <strong>Shin-Etsu</strong>, <strong>SUMCO</strong>, and <strong>Linde</strong> provide the gases and wafers that form the canvas for chip making.
                    </p>

                    <div className="my-12 p-8 bg-blue-500/5 rounded-2xl border border-blue-500/20">
                        <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
                            <ShieldCheck className="w-6 h-6 text-blue-500" />
                            The Validation Gap
                        </h3>
                        <p className="text-gray-300 leading-relaxed">
                            Every layer of this 7-layer stack introduces new points of failure. As we move from EDA tools to Fabless design and eventually to Foundry manufacturing, <strong>hardware testing</strong> and <strong>chip validation</strong> are the only things ensuring that what's designed actually works in the real world.
                        </p>
                    </div>

                    <h2 className="text-2xl font-bold mb-6 flex items-center gap-3">
                        <span className="flex items-center justify-center w-8 h-8 rounded-full bg-cyan-500 text-white text-sm">6</span>
                        EDA Software: The Digital Blueprint
                    </h2>
                    <p className="text-gray-400 mb-6">
                        Electronic Design Automation (EDA) tools are the software that turn ideas into layouts that foundries can actually fabricate. <strong>Synopsys</strong> and <strong>Cadence</strong> dominate this space, providing the logic gates and verification environments for all modern chips.
                    </p>

                    <h2 className="text-2xl font-bold mb-6 flex items-center gap-3">
                        <span className="flex items-center justify-center w-8 h-8 rounded-full bg-gray-500 text-white text-sm">7</span>
                        Chip IP Cores: The Reusable Logic
                    </h2>
                    <p className="text-gray-400 mb-8">
                        Modern chips aren't designed from scratch. Designers license "IP cores" like <strong>Arm</strong> processor cores or <strong>Rambus</strong> memory controllers to build their SoC (System on Chip). This layer allows for massive scaling and faster time-to-market.
                    </p>

                </article>
            </div>
        </BlogPostLayout>
    )
}
