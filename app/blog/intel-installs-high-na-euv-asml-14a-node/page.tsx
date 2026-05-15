'use client'

import { SiteHeader } from "@/components/site-header"
import { ArrowLeft, User, Calendar, Clock, ArrowRight, Microchip, Layers, Settings, Zap, Target, Search, Factory, BarChart3, CheckCircle2 } from 'lucide-react'
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
                    <div className="flex items-center gap-4 text-sm text-gray-400 mb-4">
                        <div className="flex items-center gap-2">
                            <User className="w-4 h-4" />
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

                    <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent leading-tight">
                        Intel Installs ASML TWINSCAN EXE:5200B High-NA EUV Machine for 14A Node
                    </h1>

                    <p className="text-xl text-gray-300 leading-relaxed">
                        Intel Foundry has officially installed ASML’s TWINSCAN EXE:5200B High-NA EUV — the most advanced lithography system ever deployed. This marks a paradigm shift in semiconductor manufacturing and hardware validation strategies for the 14A node.
                    </p>
                </div>

                {/* Featured Image */}
                <div className="relative aspect-[16/9] mb-12 rounded-xl overflow-hidden bg-gray-900">
                    <Image
                        src="/blog/intel-high-na-euv-machine.jpg"
                        alt="Intel engineers examining the ASML TWINSCAN EXE:5200B High-NA EUV machine inside the fab, representing a breakthrough in chip manufacturing and hardware testing infrastructure"
                        fill
                        className="object-cover"
                    />
                </div>

                {/* Article Content */}
                <div className="prose prose-invert max-w-none">

                    {/* Introduction */}
                    <div className="mb-12">
                        <p className="text-lg text-gray-300 leading-relaxed mb-6">
                            The semiconductor industry has just witnessed a monumental step forward. Intel Foundry has officially installed <strong>ASML’s TWINSCAN EXE:5200B High-NA EUV</strong> machine, integrating it directly into the manufacturing line for its upcoming 14A node. This isn't just a shiny new tool; it represents the first real industry shift from Low-NA to High-NA EUV, transitioning the technology from an R&D experiment to a critical component of high-volume manufacturing.
                        </p>

                        <p className="text-lg text-gray-300 leading-relaxed">
                            For engineers working in <strong>hardware validation</strong> and <strong>chip testing</strong>, this development signals a massive simplification in process complexity. By enabling higher resolution patterning, High-NA EUV reduces the need for multi-patterning, potentially decreasing defect rates and streamlining the <strong>post-silicon validation</strong> process.
                        </p>
                    </div>

                    {/* Key Advantages */}
                    <section className="mb-12">
                        <h2 className="text-3xl font-bold mb-8 flex items-center gap-3">
                            <Zap className="w-8 h-8 text-blue-400" />
                            Why High-NA EUV Changes Everything
                        </h2>

                        <div className="grid md:grid-cols-2 gap-6">
                            <div className="bg-gray-900/50 border border-gray-800 rounded-xl p-6">
                                <div className="flex items-center gap-3 mb-4">
                                    <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center">
                                        <Layers className="w-6 h-6" />
                                    </div>
                                    <h3 className="text-xl font-semibold">Massive Simplification</h3>
                                </div>
                                <p className="text-sm text-gray-300 mb-4">
                                    One critical layer was reduced from ~40 process steps to fewer than 10. For <strong>process validation</strong>, this dramatic reduction in steps cuts cycle time and minimizes the opportunities for manufacturing defects to creep in.
                                </p>
                            </div>

                            <div className="bg-gray-900/50 border border-gray-800 rounded-xl p-6">
                                <div className="flex items-center gap-3 mb-4">
                                    <div className="w-12 h-12 bg-green-600 rounded-lg flex items-center justify-center">
                                        <Factory className="w-6 h-6" />
                                    </div>
                                    <h3 className="text-xl font-semibold">Scalable Throughput</h3>
                                </div>
                                <p className="text-sm text-gray-300 mb-4">
                                    The tool already delivers 175 wafers/hour, with Intel targeting 200+ wafers/hour after tuning. Faster throughput means faster <strong>wafer sort testing</strong> cycles and quicker feedback loops for design teams.
                                </p>
                            </div>

                            <div className="bg-gray-900/50 border border-gray-800 rounded-xl p-6">
                                <div className="flex items-center gap-3 mb-4">
                                    <div className="w-12 h-12 bg-purple-600 rounded-lg flex items-center justify-center">
                                        <Target className="w-6 h-6" />
                                    </div>
                                    <h3 className="text-xl font-semibold">Atomic-Level Precision</h3>
                                </div>
                                <p className="text-sm text-gray-300 mb-4">
                                    Overlay accuracy reaches 0.7 nm — alignment measured at the scale of atoms. This precision is critical for <strong>chip verification</strong> at advanced nodes, ensuring that <strong>hardware design verification</strong> matches physical reality.
                                </p>
                            </div>

                            <div className="bg-gray-900/50 border border-gray-800 rounded-xl p-6">
                                <div className="flex items-center gap-3 mb-4">
                                    <div className="w-12 h-12 bg-orange-600 rounded-lg flex items-center justify-center">
                                        <BarChart3 className="w-6 h-6" />
                                    </div>
                                    <h3 className="text-xl font-semibold">Stronger Yields, Earlier</h3>
                                </div>
                                <p className="text-sm text-gray-300 mb-4">
                                    Intel reports better yield and performance at this stage of 14A than it had with 18A. Higher initial yields significantly reduce the burden on <strong>defect analysis</strong> and <strong>hardware debugging</strong> teams.
                                </p>
                            </div>
                        </div>
                    </section>

                    {/* Impact on Hardware Validation */}
                    <section className="mb-12">
                        <h2 className="text-3xl font-bold mb-8 flex items-center gap-3">
                            <Search className="w-8 h-8 text-green-400" />
                            Impact on Hardware Testing & Validation
                        </h2>

                        <div className="bg-gradient-to-r from-blue-900/20 to-purple-900/20 border border-blue-800/30 rounded-xl p-8 mb-8">
                            <p className="text-lg text-gray-300 leading-relaxed mb-6">
                                The introduction of High-NA EUV isn't just a manufacturing upgrade; it fundamentally reshapes the <strong>hardware validation workflow</strong>. With fewer process steps and higher precision, the "noise" creates by manufacturing variations is reduced.
                            </p>
                            <ul className="space-y-4">
                                <li className="flex items-start gap-3">
                                    <div className="mt-1 bg-green-500/20 p-1 rounded-full"><CheckCircle2 className="w-4 h-4 text-green-400" /></div>
                                    <span className="text-gray-300"><strong>Reduced Defect Density:</strong> Simpler processing implies fewer random defects, allowing <strong>chip testing</strong> teams to focus on systematic design issues rather than process artifacts.</span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <div className="mt-1 bg-green-500/20 p-1 rounded-full"><CheckCircle2 className="w-4 h-4 text-green-400" /></div>
                                    <span className="text-gray-300"><strong>Faster Yield Ramps:</strong> Improved alignment and reduced complexity accelerate the path to stable yields, shortening the <strong>post-silicon validation</strong> timeline.</span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <div className="mt-1 bg-green-500/20 p-1 rounded-full"><CheckCircle2 className="w-4 h-4 text-green-400" /></div>
                                    <span className="text-gray-300"><strong>Tighter Performance Distribution:</strong> Atomic precision leads to more consistent transistor performance, simplifying <strong>electrical validation</strong> and characterization across PVT corners.</span>
                                </li>
                            </ul>
                        </div>
                    </section>

                    {/* Validated Customer Success */}
                    <section className="mb-12">
                        <h2 className="text-3xl font-bold mb-8 flex items-center gap-3">
                            <Settings className="w-8 h-8 text-purple-400" />
                            Industry Response: Customers Already in the Loop
                        </h2>
                        <p className="text-gray-300 mb-6">
                            The shift is already tangible for design teams. The <strong>14A PDK 0.5</strong> is already shipping, and early feedback has been very positive. This enables fabless customers to start their <strong>design verification</strong> and <strong>pre-silicon validation</strong> work with confidence in the manufacturing backend.
                        </p>
                        <div className="bg-gray-900/50 border border-gray-800 rounded-xl p-6 border-l-4 border-l-blue-500">
                            <p className="text-xl italic text-gray-300">
                                "This is what progress in semiconductors actually looks like: Fewer steps. Higher yield. Faster cycles. Real physics wins."
                            </p>
                        </div>
                    </section>

                    {/* Conclusion */}
                    <section className="mb-12">
                        <h2 className="text-3xl font-bold mb-6">High-NA EUV: Production Reality</h2>
                        <div className="space-y-4 text-gray-300">
                            <p>
                                The installation of the EXE:5200B confirms that High-NA EUV is no longer a distant "next" step—it is officially part of production reality. As the industry pushes towards the 14A node and beyond, the collaboration between advanced lithography and rigorous <strong>hardware testing protocols</strong> will determine the pace of innovation.
                            </p>
                            <p>
                                Will High-NA EUV finally reset scaling economics? With the demonstrated simplification of manufacturing steps and early yield wins, it certainly seems poised to raise the bar for what is possible in silicon engineering.
                            </p>
                        </div>
                    </section>

                    {/* CTA Section */}
                </div>
            </div>
        </BlogPostLayout>
    )
}
