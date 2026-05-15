'use client'

import { SiteHeader } from "@/components/site-header"
import { ArrowLeft, User, Calendar, Clock, ArrowRight, Microchip, Layers, Wifi, Database, Cpu, Battery, Smartphone, ShieldCheck } from 'lucide-react'
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
                        Supply Chain Analysis • Hardware Breakdown • Mobile Tech
                    </div>
                    <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
                        What Companies Are Really Behind the iPhone 17?
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
                <div className="relative aspect-[16/9] mb-12 rounded-xl overflow-hidden border border-white/10">
                    <Image
                        src="/iphone-17-chip-suppliers-breakdown.jpg"
                        alt="iPhone 17 Teardown - Key Chip Suppliers"
                        fill
                        className="object-contain bg-white/5"
                    />
                </div>

                {/* Article Content */}
                <article className="prose prose-invert max-w-none">
                    <div className="bg-white/5 border border-white/10 rounded-xl p-6 mb-8">
                        <p className="text-xl text-gray-300 mb-6 font-light">
                            Hint: it’s way more than Apple. Every year, we talk about the iPhone like it’s built by one company. It’s not. Behind the iPhone 17 is a global web of semiconductor leaders — each owning a critical piece of the puzzle, from compute to memory to RF.
                        </p>
                    </div>

                    <p className="text-gray-300 mb-8">
                        Let's break down the key chip suppliers inside the iPhone 17 and see how 10+ semiconductor giants collaborate to build a single device.
                    </p>

                    <h2 className="text-2xl font-bold mb-6 flex items-center gap-3">
                        <Cpu className="w-6 h-6 text-blue-500" />
                        The Logic Board: The Brains & Power
                    </h2>
                    <div className="bg-gradient-to-br from-blue-500/10 to-transparent p-6 rounded-xl border border-blue-500/20 mb-8">
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                            <div className="flex items-start gap-2">
                                <ArrowRight className="w-4 h-4 text-blue-500 mt-1 flex-shrink-0" />
                                <div><strong className="text-white">Broadcom:</strong> <span className="text-gray-400">Wireless charging receiver</span></div>
                            </div>
                            <div className="flex items-start gap-2">
                                <ArrowRight className="w-4 h-4 text-blue-500 mt-1 flex-shrink-0" />
                                <div><strong className="text-white">Texas Instruments:</strong> <span className="text-gray-400">USB interface & PMIC</span></div>
                            </div>
                            <div className="flex items-start gap-2">
                                <ArrowRight className="w-4 h-4 text-blue-500 mt-1 flex-shrink-0" />
                                <div><strong className="text-white">SK Hynix:</strong> <span className="text-gray-400">8GB DRAM for blinding speed</span></div>
                            </div>
                            <div className="flex items-start gap-2">
                                <ArrowRight className="w-4 h-4 text-blue-500 mt-1 flex-shrink-0" />
                                <div><strong className="text-white">Cirrus Logic:</strong> <span className="text-gray-400">Audio codec & amplifiers</span></div>
                            </div>
                            <div className="flex items-start gap-2">
                                <ArrowRight className="w-4 h-4 text-blue-500 mt-1 flex-shrink-0" />
                                <div><strong className="text-white">Apple:</strong> <span className="text-gray-400">A-series processor & UWB (Designed internally)</span></div>
                            </div>
                            <div className="flex items-start gap-2">
                                <ArrowRight className="w-4 h-4 text-blue-500 mt-1 flex-shrink-0" />
                                <div><strong className="text-white">Renesas:</strong> <span className="text-gray-400">Power management ICs</span></div>
                            </div>
                            <div className="flex items-start gap-2">
                                <ArrowRight className="w-4 h-4 text-blue-500 mt-1 flex-shrink-0" />
                                <div><strong className="text-white">STMicroelectronics:</strong> <span className="text-gray-400">Power management ICs</span></div>
                            </div>
                            <div className="flex items-start gap-2">
                                <ArrowRight className="w-4 h-4 text-blue-500 mt-1 flex-shrink-0" />
                                <div><strong className="text-white">Bosch:</strong> <span className="text-gray-400">MEMS accelerometer & gyroscope</span></div>
                            </div>
                        </div>
                    </div>

                    <h2 className="text-2xl font-bold mb-6 flex items-center gap-3">
                        <Database className="w-6 h-6 text-purple-500" />
                        The Memory Board: Storage & Control
                    </h2>
                    <div className="bg-gradient-to-br from-purple-500/10 to-transparent p-6 rounded-xl border border-purple-500/20 mb-8">
                        <div className="space-y-3">
                            <div className="flex items-start gap-2">
                                <ArrowRight className="w-4 h-4 text-purple-500 mt-1 flex-shrink-0" />
                                <div><strong className="text-white">Kioxia:</strong> <span className="text-gray-400">256GB NAND flash memory</span></div>
                            </div>
                            <div className="flex items-start gap-2">
                                <ArrowRight className="w-4 h-4 text-purple-500 mt-1 flex-shrink-0" />
                                <div><strong className="text-white">Texas Instruments:</strong> <span className="text-gray-400">AMOLED display power supply</span></div>
                            </div>
                            <div className="flex items-start gap-2">
                                <ArrowRight className="w-4 h-4 text-purple-500 mt-1 flex-shrink-0" />
                                <div><strong className="text-white">Cirrus Logic:</strong> <span className="text-gray-400">Audio amplifier</span></div>
                            </div>
                            <div className="flex items-start gap-2">
                                <ArrowRight className="w-4 h-4 text-purple-500 mt-1 flex-shrink-0" />
                                <div><strong className="text-white">NXP:</strong> <span className="text-gray-400">NFC controller & secure element</span></div>
                            </div>
                        </div>
                    </div>

                    <h2 className="text-2xl font-bold mb-6 flex items-center gap-3">
                        <Wifi className="w-6 h-6 text-green-500" />
                        Radio Frequency Board: Connecting to the World
                    </h2>
                    <div className="bg-gradient-to-br from-green-500/10 to-transparent p-6 rounded-xl border border-green-500/20 mb-8">
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                            <div className="flex items-start gap-2">
                                <ArrowRight className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                                <div><strong className="text-white">Qualcomm:</strong> <span className="text-gray-400">5G modem & RF transceivers</span></div>
                            </div>
                            <div className="flex items-start gap-2">
                                <ArrowRight className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                                <div><strong className="text-white">Broadcom:</strong> <span className="text-gray-400">RF front-end modules</span></div>
                            </div>
                            <div className="flex items-start gap-2">
                                <ArrowRight className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                                <div><strong className="text-white">Skyworks:</strong> <span className="text-gray-400">RF front-end modules</span></div>
                            </div>
                            <div className="flex items-start gap-2">
                                <ArrowRight className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                                <div><strong className="text-white">Qorvo:</strong> <span className="text-gray-400">RF filters, PA & APT</span></div>
                            </div>
                            <div className="flex items-start gap-2">
                                <ArrowRight className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                                <div><strong className="text-white">NXP:</strong> <span className="text-gray-400">NFC controller</span></div>
                            </div>
                            <div className="flex items-start gap-2">
                                <ArrowRight className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                                <div><strong className="text-white">STMicroelectronics:</strong> <span className="text-gray-400">Secure MCU / eSIM</span></div>
                            </div>
                        </div>
                    </div>

                    <div className="my-12 p-8 bg-blue-500/5 rounded-2xl border border-blue-500/20">
                        <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
                            <ShieldCheck className="w-6 h-6 text-blue-500" />
                            The Hidden Challenge: Integration Validation
                        </h3>
                        <p className="text-gray-300 leading-relaxed">
                            When you have 10+ semiconductor giants contributing to a single device, the challenge isn't just making the chips—it's ensuring they all work together. <strong>Hardware validation</strong> and <strong>system-level testing</strong> are what prevent a 5G modem from interfering with UWB, or a power management IC from overheating the battery.
                        </p>
                    </div>

                    <h2 className="text-2xl font-bold mb-6">The Real Takeaway</h2>
                    <p className="text-gray-400 mb-6">
                        No smartphone is truly built by one company. Your iPhone 17 is the result of collaboration between 10+ semiconductor giants — each specializing in RF, memory, power, sensors, or compute. One missing chip, or one validation failure, and the whole system breaks.
                    </p>

                </article>
            </div>
        </BlogPostLayout>
    )
}
